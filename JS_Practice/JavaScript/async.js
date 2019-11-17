async function show(){
    console.log(1)
    var a=3 
    return  a
}
show()

show().then(res=>{
    console.log('2')
})

show().then(res=>{
    console.log(res)
})

/*async函数中return的数是他的回调函数传入的参数，说白一点就是res*/
