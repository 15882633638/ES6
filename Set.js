//可以把Set堪称一个集合,不能添加重复的数据
let Set1 = new Set();
Set1.add(1);
Set1.add(2);
Set1.add(3);
Set1.add(3);
console.log(Set1);
//数组去重
let Set2 = new Set([1,2,3,4,4]);
console.log(Set2);
//将字符串转化为数组，进行字符串去重。标注：将数组转化为字符串join
let str1 = 'aaabbbccc';
let Set3 = new Set(str1.split(''));
console.log([...Set3]);
//并集
let Set4 = new Set([1,2,3,4]);
let Set5 = new Set([1,5,4]);
let union = new Set([...Set4,...Set5]);
console.log([...union]);
//交集
let Set6 = new Set([1,2,3,4]);
let Set7 = new Set([1,5,4]);
//has:是判定当前数组当中是否存在参数里面的值
let intersect = new Set([[...Set6].filter(x=>Set7.has(x))]);
console.log([...intersect]);

//差集
let Set8 = new Set([1,2,3,4]);
let Set9 = new Set([1,5,4]);
//has:是判定当前数组当中是否存在参数里面的值
let difference  = new Set([[...Set6].filter(x=>!Set7.has(x))]);
console.log([...difference]);






