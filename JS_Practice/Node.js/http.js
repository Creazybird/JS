const http=require('http') //加载http模块

const server=http.createServer()

server.on('request',function(request,response){
    console.log('收到客户端请求')
})

server.listen(3000,function(){
    console.log('Server is runing at port 3000')
})