$(function(){
    let layer = layui.layer
    // 1.1 获取裁剪区域的 DOM 元素
    let $image = $('#image')
    // 1.2 配置选项
    const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)

    // 为上传图片按钮注册事件
    $('#btnChooseImage').on('click',function(){
        // 模拟input的点击事件
        $('#file').click()
    })
    $('#file').on('change',function(e){
        let filelist = e.target.files
        if(filelist.length === 0){
            console.log(filelist);
            return layer.msg('请选择图片')
        }

        // 拿到用户选择的文件
        let file = e.target.files[0]
        // 根据选择文件，生成一个对应的URL地址
        let newImgURL = URL.createObjectURL(file)
        // 先`销毁`旧的裁剪区域，再`重新设置图片路径`，之后再`创建新的裁剪区域`
        $image
            .cropper('destroy')     // 销毁旧的裁剪区域
            .attr('src',newImgURL)  // 重新设置图片路径
            .cropper(options)       // 重新初始化裁剪区域
    })
    $('#btnUpload').on('click',function(){
        // 拿到用户裁剪的图片
        let dataURL = $image
                        .cropper('getCroppedCanvas', { 
                            // 创建一个 Canvas 画布
                            width: 100,
                            height: 100
                        })
                        // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
                        .toDataURL('image/png')       
        $.ajax({
            method:'POST',
            url:'/my/update/avatar',
            data:{
                avatar:dataURL
            },
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('更新头像失败！')
                }
                layer.msg('更新头像成功！')
                window.parent.getUserInfo()
            }
        })
    })
})
