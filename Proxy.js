//主要是为了操作对象，以前的denfineproperty是操作对象的单个属性
//Proxy现在可以操作对象的所有属性,由两部分组成，target(目标)，handler(拦截器)
// target是目标对象，handler是拦截器
//对象
let obj = {
    name:'haha',
    gender:true,
    age:19
}
//拦截器
let handler = {
    get(target,key){
        console.log(`getting${key}`);
        return target[key];
    },
    set(target,key,newvalue){
        console.log(`setting${key}`);
        target[key]=value;
    }
}
//第一种写法
// let proxy = new Proxy(obj,handler);
//第二种写法
let proxy = new Proxy(obj,{
    get(target,key,receiver){
        if(key[0]==='_'){
            throw new Error(`没有这样的属性`);
        }
        console.log(`getting${key}`);
        console.log(receiver);
        return target[key];
    },
    set(target,key,newvalue){
        console.log(`setting${key}`);
        target[key]=newvalue;
    }
});
console.log(proxy.a)




