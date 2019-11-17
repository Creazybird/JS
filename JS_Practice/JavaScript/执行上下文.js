function f1(){
    var n=999;
    function f2(){
        alert(n);
    }
    return f2;
}
var result=f1();
result();



//
var name="window";
var p={
    name:'Peter',
    getName:function(){
        var self=this;
        return function(){
            return self.name;
        }
    }
}
var getName=p.getName();
var _name=getName();
console.log(_name)