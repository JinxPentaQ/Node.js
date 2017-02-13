/**
 * Created by dllo on 17/2/13.
 */

// 获取http服务模块
var http = require('http');

// 获取event模块 事件模块
var  even = require('events');

// 创建服务
var server = http.createServer();

// 服务器监听3000端口
server.listen(3000);

// newListener 新的监听者
server.on('newListener',function (f,e) {
    console.log('对'+ f +'添加了事件'+e);
});

// removeListener 移除监听者
server.on('removeListener',function (f,e) {
    console.log('对'+f+'删除了事件'+e);
});

// 服务添加事件
server.on('request',function (req,res) {
    if(req.url !== '/favicon.ico'){
        console.log(req.url);
    }
    res.writeHead(200,{'Content-Type':'text/Plain'});
    res.end('Hello,node.js event');
});

// once只执行一次
server.once('request',function (req,res) {
    console.log('请求成功');
});

server.once('request',function (req,res) {
   console.log('响应成功');
});

server.on('request',function (req,res) {
    res.writeHead(200,{'Content-Type':'text/Plain'});
    res.end('Hello,');
});



var func = function(){
    console.log('这个方法不会执行');
};
// 添加事件，添加事件监听
server.on('request',func);
// // 删除事件，删除事件监听
server.removeListener('request', func);
// // 删除全部
// server.removeAllListeners('request');





// 设置最大值
// 默认最大值为10
server.setMaxListeners(20);

//---------------自定义事件------------------
//添加自定义事件 customEvent 　事件类型
server.on('customEvent',function () {
   console.log('此处为自定义事件');
});
//执行自定义事件
server.emit('customEvent');


// 每一个事件包括多少次回调
console.log(even.listenerCount(server,'customEvent'));