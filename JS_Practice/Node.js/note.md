# Node.js  
# 1.fs模块
-- 文件的操作处理等等，fs模块提供异步和同步两种方式
       但是，官方建议尽量使用异步版本
# 2.http模块
    http://nodejs.cn/api/http.html#http_request_setheader_name_value    
    --看官方api
# 3.url模块
# 4.path模块
# 5.os操作模块
# 6.代码风格
    https://standardjs.com/readme-zhcn.html    
    使用JavaScript standard style
# 7.模块系统
    CommonJS模块规范：
        模块作用域
        使用require导入模块
        使用exports导出模块
    一下是个人理解：
    1.自己写代码的时候，每一个.js文件即使一个模块
    2.模块的使用
        2.1 导入模块  
            require('模块名')
            require('路径名')
            在Node.js中导入的模块有三种类型
              (1)Node.js官方提供的核心模块 fs os path http url
              (2)第三放模块  需要npm install的那种
              (3)自己写的模块
            其中第一第二种都是通过require('文件名')来导入模块的
            第三种自己写的是通过require('路径名')来导入模块

        这里还需要说明的：在node.js加载模块的过程，优先从缓存中加载
        意思就是说：一个模块如果被加载了，第二次需要这个模块的时候，node.js直接会从缓存中读取已经加载过的模块

        2.2 定义模块(导出模块)
            在node.js中，每一个模块文件都会有这样几行代码
            modules{
                expeorts{

                }
            }
            var exports=modules.exports

            **这说明在node.js中导出模块有两种形式
            modules.exports=xxx
            等价于
            exports=xxx

            个人建议：使用modules.exports

            还有，需要暴露出一个模块的多个内容时，建议modules.exports={} 等于一个对象
            例如:
                modules.exports={
                    a:a,
                    b:b,
                    xxx
                    xxx
                }