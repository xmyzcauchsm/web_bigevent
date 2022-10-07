$(function(){
    // 验证昵称
    let form = layui.form
    let layer = layui.layer
    form.verify({
        nickname:function(value){
            if(value.length >6){
                return '昵称长度必须在1-6个字符之间'
            }
        }
    })
    // 调用初始化用户基本信息函数
    initUserInfo()
    // 初始化用户基本信息
    function initUserInfo(){
        $.ajax({
            method:'GET',
            url:'/my/userinfo',
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('获取用户信息失败！')
                }
                // 调用form.val('filter',data),原本存在的属性值则会自动赋值
                form.val('formUserInfo',res.data)
                console.log(res.data);
            }
        })
    }
    // 重置为初始化效果的点击事件
    $('#btnReset').on('click',function(e){
        e.preventDefault()
        initUserInfo()
    })
    // 监听表单的提交事件
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/userinfo',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('更新用户信息失败！')
                }
                layer.msg('更新用户信息成功！')
                 // ifame调用父页面方法，window代表iframe当前页面，parent代表index页面
                window.parent.getUserInfo()
            }
        })
    })
})