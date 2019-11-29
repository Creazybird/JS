

/*通过下面几行代码，我可以在js的原生数组里添加方法，*/
Function.prototype.method=function(name,func){
    this.prototype[name]=func;
    return this;
}

Array.method('reduce',function(f,value){
    var i;
    for(i=0;i<this.length;i+=1){
        value=f(this[i],value)
    }
    return value
})

var data=[4,8,15,16,23,42]
var add=function(a,b){
    return a+b
}

var mult=function(a,b){
    return a*b
}

var sum=data.reduce(add ,0)
console.log(sum)

var product=data.reduce(mult,1)
console.log(product)