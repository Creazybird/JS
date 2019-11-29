/*
    JavaScrpt中的函数就是对象。对象是'名/值'对的集合并拥有一个连到
原型对象的隐藏连接。
    好复杂的(。。)
    1.函数对象
        对象字面量产生的对象连接到Object.prototype。
        函数对象连接到Function.prototype(改原型对象本身连接到Object.prototype)
        1.1 每个函数对象在创建时也随配一个prototype属性。它的值是一个拥有constructor
            属性且即为该函数的对象。这和隐藏连接到Function.prototype完全不同。
        
        1.2 因为函数是对象，所以它们可以像任何其他的值一样被使用。函数可以保存在变量、
            对象和数组中。函数可以被当作参数传递给其他函数，函数也可以再返回函数。而且
            函数是对象，所以函数可以拥有方法
    2.调用
       调用一个函数会暂停当前函数的执行，传递控制权和参数给新函数
*/

/* 1.默认参数
    var show=function(a='hello world'){
        console.log(a)
    }
    show('Bye')
*/

/*2.函数调用模式
    4种调用模式
    1.函数调用模式
    2.方法调用模式
    3.apply调用模式
    4.构造器调用模式
*/

// var add=function(a,b){
//     console.log(this)
//     return a+b;
// }

// var sum=add(3,4)
// console.log(sum)

// var add=function(a,b){
//     console.log(this)
//     function del(){
//         console.log(this.a)
//     }
//     return a+b
// }
// var sum=add(3,4)
// console.log(sum)

// var object={'value':'12'}
// object.add=function(a,b){
//         console.log(a)
//         console.log(this)
//         var that=this
//         function del(){
//             console.log(this.value)
//         }
//         return del
//     }
// var sum=object.add(3,4)
// console.log(sum())

//apply调用模式,让函数可以拥有方法
// 方法名.apply(参数一,参数二)  参数一：要么是null(如果是null,此时就是函数调用) 要么是宿主对象,第二个就是参数数组
//公式： 函数名.call(...)
//       函数名.apply(...)    

/*
function foo(a,b){
    console.log(a+b)
    console.log(this)
}
foo.apply(null,[21,21])  //跟一般的函数调用是一样的

obj={
    "name":"天下",
    "gender":"nv"
}
foo.apply(obj,[21,21])   //让obj这个对象成为了foo的一员


*/


//4 异常



//5.扩充类型的功能  下面这个三行代码 太牛逼了 相当于定义了一个抽象的接口
//功能：给所以的继承自object的对象添加了一个method方法
/*
    Function.prototype.method=function(name,func){
    this.prototype[name]=func;
    return this;
}
*/
/*例子*/
Function.prototype.hh=function(name,func){
    console.log(this)
    console.log(this.prototype)
    this.prototype[name]=func;
    return this;
}

Number.hh('Int',function(){
    return Math[this<0?'ceil':'floor'](this);
})

var a=1.23
console.log(a.Int())
























