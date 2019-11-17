//webpack.config.js 文件内容，在这个文件中演示一下
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports{             //module.exports 作为一个模块  node.js语法
    //1.入口
    entry:'../path/to/my/entry/file.js',

    //2.出口
    output:{
        path:path.resolve(__dirname,'dist')
        filename:'my-first-webpack.bundle.js'
    },

    //3.loader
    module:{
        rules:[{
            test:'/\.txt$/',
            user:'raw-loader',
        }]
    },

    //4.插件
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ]

    //5.模式
    mode:'production'
}