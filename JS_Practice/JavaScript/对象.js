//JavaScript 第三章 对象
/*
    背景介绍: JavaScript的简单数据类型：数字，字符串，undefine,null,布尔值
    JavaScript中除了这些简单数据类型，其余的所有类型都是对象

    1.创建和定义对象字面量  {key:value}
        key是可以包括空字符串在内的任意字符串
        value可以除undefined值之外的任何值
    
    2。检索  要检索对象里包含的值  可以采用[] 括住一个字符串表达式的方式(可以是变量)
      obj['xx'] '

    补充：尝试检索一个不存在的成员属性返回的是undefined
         可以使用 || 用来填充默认值

    4.原型 自己网上查吧，js中没有继承，所以就有了原型

    5.反射 就是typeof的使用
    typeof方法： 操作符来确定属性的类型   typeof可以检查自身的原型链

    hasOwnProperty方法：如果对象拥有独有的属性，它将返回true
        hasOwnProperty方法不会检查原型链

    6.枚举
        在javascript中for in 语句用来遍历一个对象的所有可枚举属性
        ** for in 是一个枚举的过程
        详见下面的举例
     
    7.删除
        delete 运算符
        delete运算符可以用来删除对象的属性。如果对象包含该属性，那么该属性就会被
        移除 它不会触及原型链中的任何对象

    8.减少全局污染
        如果非要用，就只定义一个全局变量
        var MYAPP={};

        还有其他的变量，就直接定义成MYAPP中的对象成员

        MAYAPP.stooge={
            "first-name":"Joe",
            'last-name':"Howard"
        }
        这样就又定义了first-name和last-name这两个全局的变量了 只不过调用的时候
        格式：MAYAPP.stooge['first-name']    MAYAPP.stooge['last-name']

        


*/

/* 对象的创建与检索
    let obj1={
        a:1    //正常语法是：key是一个字符串，但是如果key符合js的表示符   'a'可以简写成a
    }
    console.log(obj1['a'])//也可以简写成obj.a
    let b='a'
    console.log(obj1[b])
    console.log(obj1['b'])
    console.log(obj1['b']||'unknow')
*/

/*for in 语句*/
var name={
   "49":"Germany",
   "41":"Switzerland",
   "44":"Great Britain",
   "1":"usa"
}
for(var prop in name)
{
    console.log(prop);//prop是key 
}
/*
    结果：1 41 44 49
    说明for in 遍历对象不是按照创建顺序来的 顺序是不定的,自己写代码的时候使用for in 时候一定不要使用顺序判断或者其他的操作

    如果想让他按照顺序，将所有的key 按照顺序存在一个数组里，然后用for循环而不是for in 循环来遍历
*/