// const http = require('http');
//
// const hostname = '127.0.0.1'
// const port = 8080
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end("Hello World\n")
// })
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// })
//
//
const Koa = require('koa')
const fs = require('fs.promised')
const app = new Koa()
const port = 8000
// 函数声明async才能使用await
const main = async ctx => {
  // ctx.response.type = 'html'
  // ctx.response.body = await fs.readFile('./index.html', 'utf8')
  // 上下文环境  cookie http 客户端会传过来 http header
  // 服务器端 cookies
  // session安全 cookie受大小限制
  // cookie 每次都http请求中携带 一旦太大 性能就会受影响
  const n = Number(ctx.cookies.get('view') || 0) + 1
  ctx.cookies.set('view', n)
  ctx.body = `当前浏览数${n}`
}
// KOA2 中间件函数 async/await 异步的解决方案
app.use(main)
app.listen(port)
