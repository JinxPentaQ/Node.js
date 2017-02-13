/**
 * Created by dllo on 17/2/13.
 */

// console.log(global);

// __dirname __filename

//获取当前所属文件的文件夹的路径
// console.log(__dirname);
//
// //获取当前所属文件的路径
// console.log(__filename);


// 设置延迟多少毫秒做某事儿
//参数1:回调函数
//参数2:延迟多少毫秒执行（1 ～ 2147483647）
//参数3以后:回调函数中所需要的参数的值，依次填入
var timer = setTimeout(function (name,age) {
    console.log('我是'+name+',今年'+age+'岁');
},1000,'张三',38);

// 清除延迟做某事er
clearTimeout(timer);

// 设置间隔多少毫秒做某事
// 参数1:回调函数
// 参数2:间隔 单位：毫秒
//参数3以后:回调函数中所需要的参数的值，依次填入
var Interval = setInterval(function () {
    console.log('我疯了');
},1000);

//清除间隔做某事
clearInterval(Interval);


//使用以下两个函数，可能会出现性能方面的问题
//取消回调函数的回调
timer.unref();
// 恢复回调函数的回调
timer.ref();