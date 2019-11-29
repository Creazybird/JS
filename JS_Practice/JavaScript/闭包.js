

/*在一个函数中创建返回另一个函数     构成闭包
    1.闭包的作用：让一个函数有权访问另一个函数作用域中的变量
    2.闭包的缺点：对于垃圾回收机制，没法回收闭包。只要闭包的地方没有被执行，执行上下文没有结束，就无法回收

*/

//demo1 一个简单的闭包

/*
function foo(){
    var a=20;
    var b=30;

    function bar(){
        return a+b;
    }
    return bar;
}

var bar=foo();
bar();
*/


//demo2 
/*
var fn=null
function foo(){
    var a=2;
    function innerFoo(){
        console.log(a)
    }
    fn=innerFoo;  //这里将一个函数赋值给全局变量，和 return innerFoo 的作用是一样，将innerFoo()的执行上下文给保留下来了，只有fn执行过后，gc才会回收这一部分的内存
}

function bar(){
    fn(); //此处的保留的innerFoo的引用
}

foo();
bar();//2

*/

//demo3 结合匿名函数
var cnt=(function(){
    var i=0;
    return function()
    {
        console.log(i)
        i++
    }
})();

cnt();//结果为0
cnt();//结果为1
cnt();//结果为2

//demo4 往闭包函数中传递参数

var cnt1=(function(num){
    return function()
    {
        console.log(num)
        num++;
    }
})(5);

cnt1();
cnt1();
cnt1();

var cnt2=(function(){
    var i=0;
    return function(num)
    {
        num+=i
        console.log(num)
        i++;
    }
})();

cnt2(1);
cnt2(2);
cnt2(3);

//demo5 我想返回一个数组，数组里卖弄有5个函数，第一个函数弹出0，第二个函数弹出1 .  . .
function box(){
    let arr=[]
    for(var i=0;i<5;i++){
        arr[i]=function(){ console.log(i); return i}
    }
    return arr
}
var a=box() 
a[0]()
a[1]()  //发现结果都是5


//解决方法
function box1()
{
    console.log('fix')
    let arr=[]
    for(var i=0;i<5;i++)
    {
       arr[i]=(function(i){
            return function(){console.log(i)}
       })(i);
    }
    return arr
}

a=box1();
console.log(a)
a[0]()
a[1]()
a[2]()

//demo6 模块模式.js文件中也有用到闭包

//demo7 
function del(){
    var a=4
    var s=''
    function son(str){
        a--;
        if(str)
        {s=str}
        return s;
    }
    return son;
}

s=del();
c=del();
console.log(s('wo'))
console.log(s('ni'))
console.log(s('f'))
console.log(s())
console.log(s())
console.log(s())
console.log(s())
console.log(c())
console.log(c())
console.log(c())