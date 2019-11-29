/*在JavaScript中只支持函数作用域，不支持块级作用域*/

/*
var show=function(){
    var a='10'
}
console.log(a)   //a 不能被访问

*/

/*
{
    var a='hello'
}
console.log(a)  //a定义在{ }中在c,c++ 这个时候在外面a是访问不到的 但是js中能访问

*/

var show=function(){
    if(true)
    {
        var a='10'
    }
    console.log(a)  //a 在if中定义 但是还是能在外部访问

}
show()
console.log(a)  //支持函数作用域