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
*/
let obj1={
    a:1    //正常语法是：key是一个字符串，但是如果key符合js的表示符   'a'可以简写成a
}
console.log(obj1['a'])//也可以简写成obj.a
let b='a'
console.log(obj1[b])
console.log(obj1['b'])
console.log(obj1['b']||'unknow')