const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const noticeRouter = require("./routes/notice")
const practicalRouter = require("./routes/practical")
//定义允许跨域访问的origin列表
let White_list = ["http://127.0.0.1:8080", "http://127.0.0.1:8081", "http://www.blog.urlip.cn", "http://blog.urlip.cn"],
  index
let port = 8058
let app = express()
app.listen(port, () => {
  console.log('Server Listening on %d ...', port);
})
//用于后台测试用的静态资源目录
app.use(express.static("public"))
//利用中间件对访问的origin进行白名单验证，通过则添加对应的origin到响应头中，如果未匹配则默认返回白名单中的第一个url
app.all("*", (req, res, next) => {
  let ori = req.headers.origin
  index = White_list.indexOf(ori)
  //console.log("在中间件中")
  if (index === -1) index = 0
  //console.log(White_list[index])
  res.header("Access-Control-Allow-Origin", White_list[index])
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next()
})
app.use(cookieParser("123456"))
app.use(session({
  secret: "123456",
  cookie: { maxAge: 60 * 1000 * 60 * 24 },//过期时间ms
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// 挂载博客笔记路由模块到/notice
app.use("/notice", noticeRouter)
// 挂载博客实用网站路由模块到/practical
app.use("/practical", practicalRouter)