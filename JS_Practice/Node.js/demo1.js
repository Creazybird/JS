//使用node.js构建一个文件服务器
const fs=require('fs')
const http=require('http')

const serve=http.createServer()

serve.on('request',function(request,response){
    console.log(request.url)
    if(request.url==='/1.photo')
    {
        fs.readFile('C:/Users/bird/Desktop/photo/1.jpg',function(err,data){
            if(err)
            {
                response.setHeader('Content-Type','text/plain;charset=utf-8')
                response.end("访问出错，请刷新重新访问")
            }else{
                // response.setHeader('Content-Type','application/x-jpg')   application/x-jpg这种方式是将图片下载下来
                response.setHeader('Content-Type','image/jpeg')  //这种就是在浏览器上展示，需要说明的图片是不许呀指明编码格式的，只有字符串是要指明编码格式
                response.end(data)
            }
        })
    }else if(request.url==='/2.photo'){
        fs.readFile('C:/Users/bird/Desktop/photo/2.jpg',function(err,data){
            if(err)
            {
                response.setHeader('Content-Type','text/plain;charset=utf-8')
                response.end("访问出错，请刷新重新访问")
            }else{
                response.setHeader('Content-Type','image/jpeg') 
                response.end(data)
            }
        })
    }else if(request.url==='/3.photo'){
        fs.readFile('C:/Users/bird/Desktop/photo/3.jpg',function(err,data){
            if(err)
            {
                response.setHeader('Content-Type','text/plain;charset=utf-8')
                response.end("访问出错，请刷新重新访问")
            }else{
                response.setHeader('Content-Type','image/jpeg') 
                response.end(data)
            }
        }) 
    }else if(request.url==='/4.photo'){
        fs.readFile('C:/Users/bird/Desktop/photo/4.jpg',function(err,data){
            if(err)
            {
                response.setHeader('Content-Type','text/plain;charset=utf-8')
                response.end("访问出错，请刷新重新访问")
            }else{
                response.setHeader('Content-Type','image/jpeg') 
                response.end(data)
            }
        })    
        /*余下图片可以类似*/ 
    }else{
        /*不存在任何格式*/
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.end("<h1>I'm so sorry 这里没有你需要的图片</h1>")
    }
})

serve.listen(3000,function(){
    console.log('serve is listening on 3000 port!')
})
