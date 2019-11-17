var a=20;
function foo(){
    if(!a){
        a=100;
    }
    var a=10;
    return a;
}
console.log(foo())