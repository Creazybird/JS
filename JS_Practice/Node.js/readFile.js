const fs=require('fs')
/*
    读取文件：两个参数
        第一个参数就是要读取的文件路径
        第二个参数就是一个回调函数，回调函数 可选参数两个 error,data 第一个可选参数是error
            文件读取成功：data   数据
                         error  null
            文件读取失败：data  null    
                         error 错误对象
*/

fs.readFile('E:/仓库/JS/JS_Practice/JavaScript/static_book/JavaScript/1.pdf',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})