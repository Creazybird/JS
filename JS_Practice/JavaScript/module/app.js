var express=require('express')
var router=require('./router')
var app=express()


/*看router是怎么抽离成一个模块的，app作为参数传入router.js中*/
router(app)

app.listen(3000,function(){
    console.log('running 3000.........')
})

module.exports=app