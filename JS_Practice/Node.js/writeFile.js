//1.写文件
/*
    writeFile(参数一，参数二，参数三)

    1.1 第一个参数：文件路径
    1.2 第二个参数：文件内容
    1.3 第三个参数：回调函数
        回调函数，默认一个参数
        function(error){}
        写入成功：error是null
        写如错误：error是错误对象
*/

// const fs=require('fs')
// fs.writeFile('E:/仓库/JS/JS_Practice/Node.js/text.txt','测试write的内容',function(){
//     console.log('无参数回调')
// })

//2.小demo  将note.md的内容读取到test.txt

//在node.js 读写readFile和writeFile是异步的，所以下面的这样写代码是有问题的 
/*
    const fs=require('fs')
    let arr;
    fs.readFile('E:/仓库/JS/JS_Practice/Node.js/note.md',function(err,data){
        if(err)
        {
            throw err;
        }
        arr=data.toString()
        console.log(arr)
    })

    fs.writeFile('E:/仓库/JS/JS_Practice/Node.js/text.txt',arr,function(err){
        if(err) throw err;
    })

*/

const fs=require('fs')
let arr;
fs.readFile('E:/仓库/JS/JS_Practice/Node.js/note.md',function(err,data){
    if(err)
    {
        throw err;
    }
    arr=data.toString()
    fs.writeFile('E:/仓库/JS/JS_Practice/Node.js/text.txt',arr,function(err){
        if(err) throw err;
    })      
})