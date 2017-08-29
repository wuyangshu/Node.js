// 引入koa 新一代的node.js 网站开发框架
const Koa = require('koa');
const route = require('koa-route');
const fs = require('fs');
// 一个web server就像一个app
const app = new Koa();
// 启动服务器
// http 协议 用户访问，执行，返回结果（页面）
const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html')
}
const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./about.html')
}
app.use(route.get('/', main))
app.use(route.get('/about', about));
// app.use(main);
app.listen(3000);
