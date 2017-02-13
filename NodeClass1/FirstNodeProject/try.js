/**
 * Created by dllo on 17/2/11.
 */

var fileSystem = require('fs');

// console.log("准备打开文件");
// fileSystem.open('1.txt','r+',function (err,fd) {
//     if(err){
//         return console.error(err);
//
//     }
//     // console.log("文件打开成功");
// });


// stat:获取文件信息
// 参数1:路径
// 参数2:回调函数 两个参数（err，stats），stats是fs.ststs对象
// fileSystem.stat('1.txt',function (err,stats) {
//
//     if (err){
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("读取文件成功");
//     console.log("是否为文件(isFile)?"+stats.isFile());
//     console.log("是否为文件(isDirectory)?"+stats.isDirectory());
//     // stats.isFile() 是文件返回true不是则返回false
//     // isDirectory() 目录
// });


// 删除文件
// 参数1:path
// 参数2:callback 没有参数
fileSystem.unlink('1.txt',function (err) {
   if (err){
       return console.error(err);
   }
   console.log("文件删除成功");
});


//创建目录 mkdir

fileSystem.mkdir()