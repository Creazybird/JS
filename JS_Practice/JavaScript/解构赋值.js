//使用解构赋值
/*
let [a,b,c]=[1,2,3]
console.log(a,b,c)
console.log(typeof(a))
*/


//如果等号的右边不是数组（或者严格地说，不是可遍历的结构（Iterator）），那么就会报错
/*  
    let [foo]=i
    let [foo]=false
    let [foo]=NaN
    let [foo]=undefined
    let [foo]=null
    let [foo]={}
以上写法都会报错，因为右边都不是一个iterator
事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值
*/


/*用的最多应该救赎对象的解构赋值*/
/*解构不仅可以用于数组，还可以用于对象....这就话的意思是说可以用{ }这种形式来赋值*/

// let {foo,bar}={foo:'aa',bar:'bb'}
// console.log(foo)
// console.log(typeof(foo))  //这里foo的类型还是String,说明foo是一个String类型变量，不是一个object

let obj={a:'I am aa',b:'I am bbb',c:'I am ccc',d:'I am ddd'}
let obj1={a:'',c:'',f:''}
// [obj1.a,obj1.c]=[obj.a,obj.c]
// console.log(obj1) 这种写法是不可以的