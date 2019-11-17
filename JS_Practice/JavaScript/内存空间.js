//demo1:
var a=20;
var b=a;
b=30;

console.log(b)
console.log(a) //最终结果，b=30，a=20  a，b 是两个独立的变量

//demo2:
var m={a:10,b:20}
var n=m;
n.a=15;

console.log(n)
console.log(m)  //最终结果，n={a:15,b:20}  m={a:15,b:20}