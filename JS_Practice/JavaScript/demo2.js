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
