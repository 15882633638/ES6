//字符串的操作
// 1.子串识别方法
let string1 = 'apple is my evidence ';
console.log(string1.includes('a'));
console.log(string1.startsWith('a'));
console.log(string1.endsWith('a'));
//2.字符串重复
let string2 = string1.repeat(2);
console.log(string2);
//3.补全字符串
let string3 = string1.padStart(5,'haha');
console.log(string3);