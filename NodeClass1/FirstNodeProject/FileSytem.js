/**
 * Created by dllo on 17/2/10.
 */
// 异步 非阻塞--------------------------------------------------

// 获取文件系统模块
var fileSystem = require('fs');
// // 文件系统模块读入文件
// // 参数1 要读入的文件路径
// // 参数2 选项，文本的编码格式
// // 参数3 回调函数
// fileSystem.readFile('1.txt','utf8',function (err,data) {
//     console.log(data);
// });
//
//
// //同步 阻塞----------------------------------------------------
//
// var data = fileSystem.readFileSync('1.txt','utf8');
// console.log(data);

var string = ' halo';

fileSystem.writeFile('./1.txt',string,'utf8',function (err) {
   console.log('写入成功');
});

var say = require('./SayHello');

say.sayhello('大神');

say.name;
