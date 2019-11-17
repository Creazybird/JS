//fetch函数 dom api接口中的一个 https://www.cnblogs.com/gaoya666/p/8560745.html
//bom元素 是浏览对象模型，一般用于改变浏览器窗口大小，长度，弹出框，提示框等等
//dom元素  是文档对象模型，一个网也即是一个documention ，dom元素除了，getElemetn ,事件 ，查找一个标签等等，
//dom还有大量的api 接口，fetch 就是其中之一，  
//V8引擎是一种js引擎的实现。JavaScript引擎是执行JavaScript代码的程序或解释器。JavaScript引擎可以实现为标准解释器
//或即时编译器，它以某种形式JavaScript编译为字节码
var myImage=document.querySelector('img')

var myRequest=new Request('flowers.jpg')

fetch()