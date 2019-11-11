// function greeter(person:string){   //person:string  添加了类型注解，这里限制person只能传入一个字符串
//     return "Hello ,"+person
// }
// let user=[1,2,3]  //传入一个数组回报错
// document.body.innerHTML=greeter(user)
// interface Person{
//     firstName:string;
//     lastName:string;
// }
// function greeter(person:Person){
//     return "Hello, "+person.firstName+" "+person.lastName;
// }
// let user={firstName:"Li",lastName:"lei"};
// document.body.innerHTML=greeter(user)
//使用类
var Student = /** @class */ (function () {
    function Student(firstName, middlerName, lastName) {
        this.firstName = firstName;
        this.middlerName = middlerName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middlerName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Li", "M.", "lei");
document.body.innerHTML = greeter(user);
