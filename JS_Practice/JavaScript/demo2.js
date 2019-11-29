/*自己实现对js原生的数据类型添加自定义的方法*/
Function.prototype.method=function(name,func){
    console.log(this)
    this.prototype[name]=func  //this[name]不可以,以为这里的代码实在Number.method调用时 才使用 所以不是this[name]  而是this.prototype[name]
    return this
}

Number.method('judgeZero',function(para){
    if(para==0)
    return true
    else
    return false
})

var a=7
var res=a.judgeZero()
console.log(res)

/*实现对Array添加一个reduce方法，它接收一个函数和一个初始值作为一个新值。
它遍历这个数组，以当前元素和该初始值为参数调用这个函数，并且计算出一个新值。当
完成时，它返回这个值。如果我们传入一个把两个数字相加的函数，它会计算出相加之和。
如果我们传入两个数字相乘的函数，它会计算两者的乘积
*/

Array.method('reduce',function(f,value){
    var i;
    for(i=0;i<this.length;i+=1){
        value=f(this[i],value)
    }
    return value;
})

var data=[4,8,15,16,23,42]
var add=function(a,b){
    return a+b;
}
var mult=function(a,b){
    return a*b;
}

var sum=data.reduce(add,0);
console.log(sum) //sum is 108

var product=data.reduce(mult,1);
console.log(product)