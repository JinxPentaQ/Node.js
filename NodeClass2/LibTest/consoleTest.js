
/**
 * Created by dllo on 17/2/13.
 */

//打印错误提示
console.error('这里代码有问题');

//打印对象信息
var user = new Object();
user.name = '曹政';
console.dir(user);

// 打印栈信息
console.trace('这里代码有问题');

//console断言
console.assert(1>2,'1不大于2');

// 时间计时打印
console.time('timer');
    for(var i = 0; i < 1000000000; i++){

    };

console.timeEnd('timer');

