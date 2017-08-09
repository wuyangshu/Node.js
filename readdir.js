const fs = require('fs');
// 列出相关内容
fs.readdir('logs', (error, files) => {
  if (error) {
    console.log(error);
  }else {
    console.log(files);
  }
});
