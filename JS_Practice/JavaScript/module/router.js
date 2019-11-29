
var fs=require('fs')
var path=require('path')


module.exports=function (app){    /*定义一个默认的参数app  这里将模块做成 对外暴露出一个函数*/
    app.get('/1',function(req,res){
        /*在这里执行 客户端响应的操作*/
        res.send('1是美女啊')
    }),
    app.get('/2',function(req,res){
        /*在这里执行 客户端响应的操作*/
        res.send('2是美女啊')
    }),
    app.get('/3',function(req,res){
        /*在这里执行 客户端响应的操作*/
        res.send('3是美女啊')
    }),
    app.get('/4',function(req,res){
        /*在这里执行 客户端响应的操作*/
        res.send('4是美女啊')
    }),
    app.get('/5',function(req,res){
        /*在这里执行 客户端响应的操作*/
        res.send('5是美女啊')
    })
    app.get('/book/JavaScript/:name',function(req,res){
        var rootDir=path.resolve()
        /*记住这里的路劲bug,以后尽量使用path.join来合并路径，不使用path.resolve*/
        var dir=path.join(rootDir,`./static_book/JavaScript/${req.params.name}`)        
        console.log(dir)
        fs.readFile(dir,function(err,data){
            if(err)
            {
                res.end('there is no such file')
            }
            else{
                 res.setHeader('Content-Type','application/pdf')  //这种就是在浏览器上展示，需要说明的图片是不许呀指明编码格式的，只有字符串是要指明编码格式
                 res.end(data)
            }
        })
    })
}