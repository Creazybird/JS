/*在一个函数中创建返回另一个函数     构成闭包
    1.闭包的作用：让一个函数有权访问另一个函数作用域中的变量
    2.闭包的缺点：对于垃圾回收机制，没法回收闭包。只要闭包的地方没有被执行，执行上下文没有结束，就无法回收

*/

//demo1 一个简单的闭包
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


//demo2 
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

