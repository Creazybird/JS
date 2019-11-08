//获取系统环境变量
//获取当前脚本所在的文件路径
console.log(__dirname)
console.log(process.env.LANGUAGE_EXPERT_USERNAME)
console.log(process.env.LANGUAGE_EXPERT_PASSWORD)
console.log(typeof(process.env.LANGUAGE_EXPERT_USERNAME))
console.log(typeof(process.env.LANGUAGE_EXPERT_PASSWORD))
let word='hello world'
let temp=`"${word}"`
let temp1=`${word}`
console.log(temp)
console.log(temp1)
console.log(typeof(temp))
console.log(typeof(temp1))
