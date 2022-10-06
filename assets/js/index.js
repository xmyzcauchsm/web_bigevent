$(function(){
    getUserInfo()
})

// 获取用户基本信息
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // 请求头配置token
        headers:{
            Authorization:localStorage.getItem('token') || ''
        },
        success:function(res){
            console.log(res);
        }
    })
}