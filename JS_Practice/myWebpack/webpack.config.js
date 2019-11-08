//在这个文件中编写webpack打包的配置文件
let path=require('path')   //导入node.js中的path模块，用来处理文件路径

module.exports={
    entry:'./src/index.js',   //入口
    output:{                    //出口
        filename:'bundle.js',      //
        path:path.resolve(__dirname,'dist') //打包后的存放的文件夹名
    },
    mode:'development'//模式

    //打包后的文件： myWebpack/dist/bundle.js
}