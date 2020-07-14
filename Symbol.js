//原始的写法
let sy = Symbol('haha');
let sy1 = Symbol('haha');
console.log(sy==sy1);
console.log(sy,sy1);
//symbol可以对属性名称进行变量设置
let sy2 = Symbol('key1');
let syobject = {};
syobject[sy2]='kk';
console.log(syobject);
console.log(syobject[sy2]);
//设置symbol.for之后可以通过keyFor获取到里面的参数
let sy3 = Symbol.for('key1');
console.log(sy2==sy3);
console.log(Symbol.keyFor(sy3));