/*
函数的this指向当前的执行主体
*/
// 1.函数执行时
// function fn(){
//     console.log(this);
// }

// var obj={fn:fn}
// fn();




//5. call 、apply和bind
// 问题：
// var obj={"name":"浪里行舟"}
// function fn(){
//     console.log(this)
// }
// fn();
// obj.fn();

//似这种无法将fn方法绑定到object对象上
//解决方案：调用Function.prototype中的call apply bind 方法

// var obj={"name":"浪里行舟"}
// function fn(num1,num2){
//     console.log(num1+num2);
//     console.log(this);
// }
// fn.call(100,200)
// fn.call(obj,100,200)
// fn.call()
// fn.call(null)
// fn.call(undefined)


//call 方法 1.实现继承中调用父构造函数
// function Product(name,price){
//     this.name=name;
//     this.price=price;
//     console.log("I am father")
// }
// function Food(name,price){
//     Product.call(this,name,price)
//     this.category='food'
//     console.log('I am food')
// }
// function Toy(name,price){
//     Product.call(this,name,price)
//     this.category='toy'
//     console.log("I am toy")
// }
// var cheese=new Food('feta',5)
// var fun=new Toy('robot',40)

//2.使用call 方法调用匿名函数

//3.使用call 方法调用函数并且指定上下文的this
//调用greet方法的时候，该方法的this值会绑定obj对象
function greet(){
    var reply=[this.animal,'中文是猫',this.dog,"中文是狗"];
    console.log(reply);
}
var obj={
    "animal":"cat",
    "dog":"dog"
}
greet.call(obj)