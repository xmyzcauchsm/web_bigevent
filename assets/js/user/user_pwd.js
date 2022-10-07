$(function(){
    let form = layui.form
    let layer = layui.layer
    form.verify({
        pwd: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
        samePwd:function(value){
            if(value === $('[name=oldPwd]').val()){
                return '新旧密码不能一样'
            }
        },
        rePwd:function(value){
            if(value !== $('[name=newPwd]').val()){
                return '确认新密码和新密码不一样'
            }
        }
    })
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url:'/my/updatepwd',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('重置密码失败！')
                }
                layer.msg('重置密码成功！')
                // 修改成功后所有密码清空，用原生DOM方法reset
                $('.layui-form')[0].reset()
            }
        })
    })
})