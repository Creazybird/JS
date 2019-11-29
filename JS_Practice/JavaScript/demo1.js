/*
var show=function(a){
    if(a>=0)
    {
        return true
    }else{
        return false
    }
}

var obj={
    "name":"小明",
    "gender":"男",
    "age":10
}
console.log(show.apply(obj,[obj.age]))
*/


/*通过构造函数构建一个对象，有成员变量，有成员函数(也是通过成员变量的形式(hello))*/
function obj(name,gender,age){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.hello=function () {
        console.log(this.name+' '+this.gender+' '+this.age)
    }
}

var student=new obj('小红','女','12')
student.hello()

/*如果我想给obj再增加一个成员函数怎么做呢,所有实现了obj的对象都会有这个函数*/
obj.prototype.goobye=function () {
    console.log("告别了我的人："+this.name)
    return this
}

student.goobye()

/*如果我想增加多个成员函数，上面那种写法就太慢了，可以用下面这种写法*/

obj.prototype.hh=function (name,func) {
    this[name]=func;
    return this;
}
student.hh('gooby1',function(){
    console.log("告别了我的姓名："+this.gender)
    return this
})
student.hh('gooby2',function(){
    console.log("告别了我的年龄："+this.age)
    return this
})
student.gooby1()
student.gooby2()
console.log(student)

