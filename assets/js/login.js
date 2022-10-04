$(function(){
    // 点击“注册按钮”切换到注册界面，隐藏登陆界面
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    // 点击“登陆按钮”切换到登陆界面，隐藏注册界面
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
})