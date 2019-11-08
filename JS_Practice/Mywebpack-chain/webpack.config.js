const Config=require('webpack-chain');  //导入webpack-chain 包
const config=new Config();   //本质上Config()是定义的一个函数  ，然而通过new+方法这种方式创建了一个对象，此对象继承了这个方法的所有属性

/*看了这段代码语法的写法，老子也是醉了
config
    .entry('index')
        .add('src/index.js')
        .end()
    .output
        .path('dist')
        .filename('[name].bundle.js');


这段代码相当与：config.entry().add()
               config.entry().end()
               config.output().path()
               config.output().filename()
这四行代码


*/
config
    .entry('index')
        .add('src/index.js')
        .end()
    .output
        .path('dist')
        .filename('[name].bundle.js');

config.module
    .rule('lint')
        .test(/\.js$/)
        .pre()
        .include
            .add('src')
            .end()
        .use('eslint')
            .loader('eslint-loader')
            .options({
                rules:{
                    semi:off
                }
            });

config.module
    .rule('compile')
        .test(/\.js$/)
        .include
            .add('src')
            .add('test')
            .end()
        .use('babel')
            .loader('babel-loader')
            options({
                presets:[
                    ['@babel/preset-env',{modules:false}]
                ]
            });

config
    .plugin('clean')
        .use(CleanPlugin,[['dist']],{root:'/dir'});

module.exports=config.