const fs=require('fs')

fs.readdir('E:/仓库/JS/JS_Practice',function(err,files){
    if(err)
    {
        throw err;
    }else{
        console.log(files)
    }
})
//其实可以发现整个vue.js的源码由TypeScript.js写的