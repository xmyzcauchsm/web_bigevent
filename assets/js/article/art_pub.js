$(function(){
    let layer = layui.layer
    let form = layui.form
    initCate()
    // 定义加载文章分类的方法
    function initCate(){
        $.ajax({
            method:'GET',
            url:'/my/article/cates',
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('获取文章分类失败！')
                }
                console.log(res);
                let htmlStr = template('tpl-cate',res)
                $('[name=cate_id]').html(htmlStr)
                form.render()
            }
        })
    }

})