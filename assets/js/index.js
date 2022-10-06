$(function(){
    getUserInfo()

    // 新建layui的layer对象
    let layer = layui.layer
    // 绑定退出点击事件
    $('#btnLogOut').on('click',function(){
        layer.confirm('确定退出登录?', {icon: 8, title:'提示'}, function(index){
            // 清空本地token
            localStorage.removeItem("token")
            // 跳转登陆页面
            location.href = '/login.html'
            // 关闭弹出框
            layer.close(index);
        })
    })
    
})

// 获取用户基本信息
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // 请求头配置token
        success:function(res){
            if(res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            // 调用渲染用户头像函数
            renderAvatar(res.data)
        }
    })
}

// 渲染用户头像
function renderAvatar(user){
    let name = user.nickname || user.username
    $('#welcome').html(`欢迎&nbsp;&nbsp;${name}`)
    if(user.user_pic !== null){
        $('.layui-nav-img').attr('src',user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}