$(function(){
    let layer = layui.layer
    let form = layui.form
    initArtCateList()
    // 获取文章分类列表
    function initArtCateList(){
        $.ajax({
            method:'GET',
            url:'/my/article/cates',
            success:function(res){
                let htmlStr = template('tpl-table',res)
                $('tbody').html(htmlStr)
            }
        })
    }
    let indexAdd = null
    // 为添加类别注册事件，实现弹出层效果
    $('#btnAddCate').on('click',function(){
        indexAdd =layer.open({
            type:1,
            area:['500px','250px'],
            title: '添加文章分类',
            content: $('#dialog-add').html()
        })
    })
    // 通过代理动态给添加绑定事件
    $('body').on('submit','#form-add',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/article/addcates',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('添加类别失败！')
                }
                initArtCateList()
                layer.msg('添加类别成功！')
                // 通过索引，关闭弹出层
                layer.close(indexAdd)
            }
        })
    })
    let indexEdit = null
    // 通过代理动态添加编辑事件
    $('tbody').on('click','.btn-edit',function(){
        indexEdit =layer.open({
            type:1,
            area:['500px','250px'],
            title: '修改文章分类',
            content: $('#dialog-edit').html()
        })
        let id = $(this).attr('data-id')
        $.ajax({
            method:'GET',
            url:'/my/article/cates/' + id,
            success:function(res){
                form.val('form-edit',res.data)
            }
        })
    })
    // 通过代理动态给form表单添加submit事件
    $('body').on('submit','#form-edit',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/article/updatecate',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !==0){
                    return layer.msg('更新分类数据失败！')
                }
                layer.msg('更新分类数据成功！')
                layer.close(indexEdit)
                initArtCateList()
            }
        })
    })
    // 通过代理动态添加s删除事件
    $('tbody').on('click','.btn-delete',function(e){
        e.preventDefault()
        let id = $(this).attr('data-id')
        layer.confirm('确认删除？', {icon: 3, title:'提示'}, function(index){
            $.ajax({
                method:'GET',
                url:'/my/article/deletecate/'+id,
                success:function(res){
                    if(res.status !== 0){
                        return layer.msg('删除失败！')
                    }
                    layer.msg('删除成功！')
                    layer.close(index)
                    initArtCateList()
                }
            })
        })
    })
})