/*通过模块模式实现单列模式*/
var serial_maker=function(){
    var prefix='';
    var seq=0;
    return {
        set_prefix:function(p){
            prefix=String(p);
        },
        set_seq:function(s){
            seq=s;
        },
        gensym:function(){
            var result=prefix+seq;
            seq+=1;
            return result;
        }
    }
}

//注意return 的是一个对象，在闭包中return的是一个函数，函数中对私有变量的改变是可以写回内存的
//使用返回一个对象吗，让第一次写回内存，再次就不行，所以可以实现单例模式
var seqer=serial_maker();
seqer.set_prefix('Hello')
seqer.set_seq(933);
Result=seqer.gensym()
console.log(Result)


var seqer1=serial_maker();
console.log(seqer1)
seqer1.set_prefix('women')
seqer1.set_seq(100);
Result1=seqer.gensym()
console.log(Result1)

/*
结果为：
    Hello933
    Hello934
*/