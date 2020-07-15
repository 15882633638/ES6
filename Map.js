//Map相当于是字典，一个键名对应一个键值，键名可以是任意参数，如：字符串
//对象、函数、NaN、同时Map还可以进行迭代，并且可以转化数组，还可以进行合并
let Map1 = new Map();
let sy1 = Symbol.for('kk');
Map1.set(sy1,'哈哈');
Map1.set('ske2','哈哈');
console.log(Map1.get(sy1));
console.log(Map1.get('ske2'));
//键名和键值是使用数组的形式存储，可以对里面的数据进行合并
//并且可以和原始的字典进行相互转换
//1.通过数组进行设置字典
let kvArray = [["key1", "value1"], ["key2", "value2"]];
let kvArray1 =  [["key3", "value3"], ["key4", "value4"]];
//2.把数组加入到字典当中
let Map2 = new Map(kvArray);
let Map3 = new Map(kvArray1);
//3.合并字典
let merged = new Map([...Map2,...Map3]);
console.log(merged);
//4.原始的字典也可以转换为数组
let Array1 = Array.from(Map1);
console.log(Array1);