const fs=require('fs')

fs.readdir('E:/仓库/JS/JS_Practice',function(err,files){
    if(err)
    {
        throw err;
    }else{
        console.log(files)
    }
})