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
    // 从layui获取form对象
    let form = layui.form
    // 通过form.verify()函数自定义校验规则
    form.verify({
        // 校验密码规则
        pwd:[/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
        // 确认第二次密码是否和第一次一样
        repwd:function(value){
           let pwd = $('.reg-box [name=password]').val()
           if(pwd !== value){
            return '两次密码不一致，请重新输入！'
           } 
        }
    })
    // 监听注册表单的提交事件
    $('#form_reg').on('submit',function(e){
        // 阻止默认行为
        e.preventDefault()
        // 设置注册数据对象
        let regDataObj = {
            username:$('#form_reg [name=username]').val(),
            password:$('#form_reg [name=password]').val()
        }
        // 从layui获取layer对象
        let layer = layui.layer
        $.post('/api/reguser',regDataObj,function(res){
            if(res.status !== 0){
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
            // 模仿用户登录行为，设置注册成功后跳转登录页面
            $('#link_login').click()
        })
    })
    // 监听登录表单的提交事件
    $('#form_login').submit(function(e){
        e.preventDefault()
        $.ajax({
            url:'/api/login',
            method:'POST',
            // serialize()函数返回form表单返回参数字符串，格式为name值=value&name值=value
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功')
                // 只有登录成功，才会返回token值，将其保存在localStorage
                localStorage.setItem("token",res.token)
                // 跳转后台主页
                location.href = '/index.html'
            }
        })
    })
})