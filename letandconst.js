var name = 'haha';
function fun1(){
    //var只有函数作用域，没有块级作用域
    let name1 = 'nihao';
    // let变量有块级作用域
    for(let i = 0;i<10;i++){
        setTimeout(function(){
            console.log(i)
        },1000)
    }
    //0，1，2，3，4，5，6，7，8，9，10
}
//var变量可以重复申明
var name = 'haha2';//haha2
fun1();

//当const在定义变量的时候，变量的引用地址不会发生改变
//但是对象里面的值可以改变
const person = {
    name:'haha',
    gender:'男',
    age:19
}
// person = {
//     name:'haha1',
// }
// console.log(person)//这里会报错
person.name = '哈和';
console.log(person)
