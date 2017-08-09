// require模块化方案
// fs 核心模块
const fs = require('fs');
// node的功能是分模块的
// 前端是没有fileSystem
// node 后端的 linux 服务器在一起
// 宿主不一样
// node 是异步无阻塞的后端 并发厉害
// callback 第一个参数是错误err 信息交给第二个参数
fs.stat('a.js', (err,stats) => {
  if(err) {
    console.log(JSON.stringify(err));
  }else {
    console.log(stats);
    console.log(`文件：大小${stats.size} 创建时间${stats.ctime}`);
    console.log(`文件：${stats.isFile()}`);
    console.log(`目录：${stats.isDirectory()}`);
  }
});
