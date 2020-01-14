//引入模块
const express = require("express")
const pool = require("../pool")
const resFunc = require("../response/resFunc")
let router = express.Router()

router.post("/list", (req, res) => {
  let { pageSize, pageNum, query } = req.body
  let response400 = new resFunc(400, "缺少请求参数"),
    response500 = new resFunc(500, "查找失败，请重试"),
    response200 = new resFunc(200, "查询成功")
  if (query === undefined || pageSize === undefined || pageNum === undefined) {
    response400.list = []
    response400.total = 0
    res.send(response400)
    return
  }
  query = `%${query}%`
  let start = (pageNum - 1) * pageSize
  let sql = "select nid,title,keywords,notice_describe,update_time from notice where title like ? order by update_time desc limit ?,?;select found_rows();"
  pool.query(sql, [query, start, pageSize], (err, result) => {
    if (err) {
      response500.list = []
      response500.total = 0
      res.send(response500)
      return
    }
    response200.list = result[0]
    response200.total = result[1][0]["found_rows()"]
    res.send(response200)
  })
})
//导出路由模块
module.exports = router