 function add(){
    arr=[1,2,3,4,5,6,7,8,9,10,12]
    arr.map(
         data=>{
            let sum=0
             promis().then(res=>{
                data=data+res
                sum=sum+data
                console.log('b'+data)
            })
            console.log('c'+sum)
        }
    )
    console.log('a'+arr)
}

function promis(){
    return new Promise(reslove=>{
        var b=2
        reslove(b)
    })
}

add()

/*
c最先开始执行 a 先打印出来，再打印b，说明异步了 Promise之后的代码先执行

1.问题：想要在一个循环中，同步的执行每一个promise,对每一个promise返回的
结果同步进行处理

解决办法将这个循环弄成 async awiat ,将循环做成一个函数，awit关键字位于promise之前，这样一定是
每一个promise执行之后，再执行循环体中的处理部分， 下面代码是解答

*/

/*解答：
 function add(){
    arr=[1,2,3,4,5,6,7,8,9,10,12]
    arr.map(
        async (data)=>{
            let sum=0
            await promis().then(res=>{
                data=data+res
                sum=sum+data
                console.log('b'+data)
            })
            console.log('c'+sum)
        }
    )
    console.log('a'+arr)
}

function promis(){
    return new Promise(reslove=>{
        var b=2
        reslove(b)
    })
}

add()
*/