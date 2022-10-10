$(function(){
    let dataInit = {
        "status": 0,
        "message": "获取文章列表成功！",
        "data": [
            {
              "Id": 1,
              "title": "临时创建的一个文章标题",
              "pub_date": "2022-10-02 20:19:57.690",
              "state": "已发布",
              "cate_name": "最新"
            },
            {
              "Id": 2,
              "title": "夜总牛逼",
              "pub_date": "2022-10-02 20:33:52.817",
              "state": "已发布",
              "cate_name": "新闻"
            },
            {
              "Id": 3,
              "title": "关于夜总牛逼的各种学术探讨",
              "pub_date": "2022-10-02 21:38:25.690",
              "state": "草稿",
              "cate_name": "新闻"
            },
            {
              "Id": 4,
              "title": "夜总如何成为一个神。。。。经病",
              "pub_date": "2022-10-02 22:14:41.690",
              "state": "已发布",
              "cate_name": "最新"
            },
            {
                "Id": 5,
                "title": "夜总牛逼还需要解释吗？",
                "pub_date": "2022-10-02 22:59:57.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 6,
                "title": "夜总这么牛逼还要工作吗？",
                "pub_date": "2022-10-02 23:14:57.690",
                "state": "已发布",
                "cate_name": "最新"
            },
            {
                "Id": 7,
                "title": "林被就不说夜总为什么这么牛逼了",
                "pub_date": "2022-10-03 00:08:08.690",
                "state": "已发布",
                "cate_name": "新闻"
            },
            {
                "Id": 8,
                "title": "夜总这么牛逼，潘总知道吗",
                "pub_date": "2022-10-03 01:19:36.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 9,
                "title": "夜总为什么爱搞基？",
                "pub_date": "2022-10-03 01:52:32.690",
                "state": "草稿",
                "cate_name": "新闻"
            },
            {
                "Id": 10,
                "title": "吃饭了",
                "pub_date": "2022-10-03 02:09:42.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 11,
                "title": "现在几点？",
                "pub_date": "2022-01-03 06:03:37.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 12,
                "title": "曼城总冠军！",
                "pub_date": "2022-10-03 07:17:30.690",
                "state": "已发布",
                "cate_name": "新闻"
            },
            {
                "Id": 13,
                "title": "雅蠛蝶",
                "pub_date": "2022-10-03 09:35:47.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 14,
                "title": "Avogadro constant",
                "pub_date": "2022-10-03 14:19:22.690",
                "state": "草稿",
                "cate_name": "新闻"
            },
            {
                "Id": 15,
                "title": "擦，吴孟达死了",
                "pub_date": "2022-10-03 14:43:57.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 16,
                "title": "擦，宇宙大爆炸了！炸了，炸了",
                "pub_date": "2022-10-03 21:19:57.690",
                "state": "草稿",
                "cate_name": "最新"
            },
            {
                "Id": 17,
                "title": "临时创建的一个文章标题",
                "pub_date": "2022-10-02 20:19:57.690",
                "state": "已发布",
                "cate_name": "最新"
              },
              {
                "Id": 18,
                "title": "夜总牛逼",
                "pub_date": "2022-10-02 20:33:52.817",
                "state": "已发布",
                "cate_name": "新闻"
              },
              {
                "Id": 19,
                "title": "关于夜总牛逼的各种学术探讨",
                "pub_date": "2022-10-02 21:38:25.690",
                "state": "草稿",
                "cate_name": "新闻"
              },
              {
                "Id": 20,
                "title": "夜总如何成为一个神。。。。经病",
                "pub_date": "2022-10-02 22:14:41.690",
                "state": "已发布",
                "cate_name": "最新"
              },
              {
                  "Id": 21,
                  "title": "夜总牛逼还需要解释吗？",
                  "pub_date": "2022-10-02 22:59:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 22,
                  "title": "夜总这么牛逼还要工作吗？",
                  "pub_date": "2022-10-02 23:14:57.690",
                  "state": "已发布",
                  "cate_name": "最新"
              },
              {
                  "Id": 23,
                  "title": "林被就不说夜总为什么这么牛逼了",
                  "pub_date": "2022-10-03 00:08:08.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 24,
                  "title": "夜总这么牛逼，潘总知道吗",
                  "pub_date": "2022-10-03 01:19:36.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 25,
                  "title": "夜总为什么爱搞基？",
                  "pub_date": "2022-10-03 01:52:32.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 26,
                  "title": "吃饭了",
                  "pub_date": "2022-10-03 02:09:42.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 27,
                  "title": "现在几点？",
                  "pub_date": "2022-01-03 06:03:37.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 28,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 29,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 30,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 31,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 32,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 33,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 34,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 35,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 36,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 37,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 38,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 39,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 40,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 41,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 42,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 43,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 44,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 45,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 46,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 47,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 48,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 49,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 50,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 51,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 52,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 53,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 54,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 55,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 56,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 57,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 58,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 59,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 60,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 61,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 62,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 63,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              },
              {
                  "Id": 64,
                  "title": "雅蠛蝶",
                  "pub_date": "2022-10-03 09:35:47.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 65,
                  "title": "Avogadro constant",
                  "pub_date": "2022-10-03 14:19:22.690",
                  "state": "草稿",
                  "cate_name": "新闻"
              },
              {
                  "Id": 66,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 67,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 68,
                  "title": "擦，吴孟达死了",
                  "pub_date": "2022-10-03 14:43:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 69,
                  "title": "擦，宇宙大爆炸了！炸了，炸了",
                  "pub_date": "2022-10-03 21:19:57.690",
                  "state": "草稿",
                  "cate_name": "最新"
              },
              {
                  "Id": 70,
                  "title": "曼城总冠军！",
                  "pub_date": "2022-10-03 07:17:30.690",
                  "state": "已发布",
                  "cate_name": "新闻"
              }
          ],
          "total": '',
          pagenum:1,
          pagesize:10
    }
    dataInit.total = dataInit.data.length
    // 定义一个查询的参数对象，将来请求数据的时候，需要将请求参数对象提交到服务器
    let q = {
        pagenum:1,   //默认参数为第一页
        pagesize:2,  //每页显示2篇文章
        cate_id:'',  //文章分类ID，默认为空，即全部
        state:''     //文章的发布状态
    }
    let layer = layui.layer
    let form = layui.form
    let laypage = layui.laypage
    // 基于template定义美化时间过滤器
    template.defaults.imports.dataFormat=function(date){
        const dt = new Date(date)
        let y = dt.getFullYear()
        let m = padZero(dt.getMonth()+1)
        let d = padZero(dt.getDate())
        let hh = padZero(dt.getHours())
        let mm = padZero(dt.getMinutes())
        let ss = padZero(dt.getSeconds())

        return y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss
    }
    // function dataFormatSelf(date){
    //         const dt = new Date(date)
    //         let y = dt.getFullYear()
    //         let m = padZero(dt.getMonth()+1)
    //         let d = padZero(dt.getDate())
    //         let hh = padZero(dt.getHours())
    //         let mm = padZero(dt.getMinutes())
    //         let ss = padZero(dt.getSeconds())
    
    //         return y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss
    // }
    // 定义补零函数
    function padZero(n){
        return n>9 ? n :'0'+n
    }
    // let dateStr = dataFormatSelf($('tbody td:eq(2)').html())
    // $('tbody td:eq(2)').html(dateStr)
    // 获取文章数据方法
    // initTable()
    // function initTable(){
    //     $.ajax({
    //         method:'GET',
    //         url:'/my/article/list',
    //         data:q,
    //         success:function(res){
    //             console.log(res)
    //             if(res.status !== 0){
    //                 return layer.msg('获取文章列表数据失败！')
    //             }
    //             // 使用模板引擎渲染页面数据
    //             let htmlStr =template('tpl-table',res)
    //             $('tbody').html(htmlStr)
    //         }
    //     })
    // }
    // 未筛选之前全部分类的下拉框渲染函数
    function initTableSelf(dt){
        let htmlStr = template('tpl-table',dt)
        $('tbody').html(htmlStr)
    }
    let dataReady = dataInit.data
    dataInit.data = showPage(dataInit)[dataInit.pagenum-1]
    initTableSelf(dataInit)
    dataInit.data = dataReady
    renderPage(dataInit)
    // initTableSelf(dataInit)
    // 选择下拉框之后的页面渲染函数
    // function renderTable(){
    //     let cate_id = $('[name=cate_id]').val()
    //     let state = $('[name=state]').val()
    //     dataInit.data.filter(item => {
    //         return item.Id == cate_id && item.state == state
    //     })
    // }
    initCate()
    // 初始化文章分类的方法
    function initCate(){
        $.ajax({
            method:'GET',
            url:'/my/article/cates',
            success:function(res){
                // console.log(res);
                if(res.status !==0){
                    return layer.msg('获取文章分类失败！')
                }
                // 调用模板引擎渲染页面的可选分类下拉框
                let htmlStr = template('tpl-cate',res)
                // console.log(htmlStr);
                $('[name=cate_id]').html(htmlStr)
                // 有些时候，你的有些表单元素可能是动态插入的。这时 form 模块 的自动化渲染是会对其失效的。虽然我们没有双向绑定机制（因为我们叫经典模块化框架，偷笑.gif） 但没有关系，你只需要执行 form.render(type, filter); 方法即可。
                form.render('select')  //可选三项，select,checkbox,radio,不填则刷新全部
            }
        })
    }
    // 为筛选表单绑定submit事件
    $('#form-search').on('submit',function(e){
        e.preventDefault()
        let cate_id = $('[name=cate_id]').val()
        let state = $('[name=state]').val()
        //过滤函数判断并筛选合适选项返回数组
        let newData = dataInit.data.filter(item =>{
            if(cate_id !== '所有分类' && state !== '所有状态'){
                return item.cate_name == cate_id && item.state == state
            }else if(cate_id === '所有分类' && state !== '所有状态' ){
                return item.state == state
            }else if(cate_id !== '所有分类' && state === '所有状态'){
                return item.cate_name == cate_id 
            }else if(cate_id === '所有分类' && state === '所有状态'){
                return dataInit
            }
        })
        // 创建一个代理对象承接data属性
        let dataObj = {
            data:[],
            total: newData.length,
            pagenum:dataInit.pagenum,
            pagesize:dataInit.pagesize
        }
        dataObj.data = newData
        let dataAtOnce = dataObj.data
        dataObj.data = showPage(dataObj)[dataObj.pagenum-1]
        initTableSelf(dataObj)
        dataObj.data = dataAtOnce
        renderPage(dataObj)
        
    })
    // 展示分页函数，返回数组
    function showPage(dt){
        let newDtAll = []
        for(let i = 1;i<Math.ceil(dt.total/dt.pagesize)+1;i++){
            let newDt = dt.data.slice(dt.pagesize*(i-1),dt.pagesize*i)
            newDtAll.push(newDt)
        }
        return newDtAll
    }
    // 定义渲染分页的方法
    function renderPage(dt){
        laypage.render({
            elem:'pageBox',
            count: dt.total,
            limit:dt.pagesize,
            curr:dt.pagenum,
            layout:['count','limit','prev','page','next','skip'],
            limits:[2,3,5,10],
            jump:function(obj,first){
                dt.pagenum = obj.curr
                // 实现每页展示条目功能
                dt.pagesize = obj.limit
                if(!first){
                    let dataSource = dt.data
                    dt.data=showPage(dt)[dt.pagenum-1]
                    initTableSelf(dt)
                    dt.data = dataSource
                }
            }
        })
    }
    // 通过代理方式绑定删除事件
    $('tbody').on('click','.btn-delete',function(){
        layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
            //do something
            
        layer.close(index);
        });
        //eg2
        layer.confirm('确认删除？', function(index){
        //do something
        
        layer.close(index);
        })
    })
})