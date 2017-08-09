const fs = require('fs');
// sync 同步 等它执行完成再做別的
// 异步, Sync后缀变成同步
// 遍历目录
fs.readdirSync('logs').map(file => {
  //删除文件
  console.log(file);
  fs.unlink(`logs/${file}`, error => {
     if (error) {
       console.log(error);
     }else {
       console.log(`成功的删除了文件:${file}`);
     }
  });
});
// 删除目录
fs.rmdir('logs', error => {
  if (error) {
    console.log(error);
  }else {
    console.log('成功删除目录:logs');
  }
});
