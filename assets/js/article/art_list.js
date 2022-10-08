$(function(){
    // 定义一个查询的参数对象，将来请求数据的时候，需要将请求参数对象提交到服务器
    let q = {
        pagenum:1,   //默认参数为第一页
        pagesize:2,  //每页显示2篇文章
        cate_id:'',  //文章分类ID，默认为空，即全部
        state:''     //文章的发布状态
    }
    let layer = layui.layer
    // 获取文章数据方法
    initTable()
    function initTable(){
        $.ajax({
            method:'GET',
            url:'/my/article/list',
            data:q,
            success:function(res){
                console.log(res)
                if(res.status !== 0){
                    return layer.msg('获取文章列表数据失败！')
                }
                // 使用模板引擎渲染页面数据
                // let htmlStr =template('tpl-table',res)
                // $('tbody').html(htmlStr)
            }
        })
    }
})