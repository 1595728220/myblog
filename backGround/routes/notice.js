//引入模块
const express = require("express")
const pool = require("../pool")
const resFunc = require("../response/resFunc")
let router = express.Router()

router.post("/list", (req, res) => {
  let { query, keyword } = req.body
  let response400 = new resFunc(400, "缺少请求参数"),
    response500 = new resFunc(500, "查找失败，请重试"),
    response200 = new resFunc(200, "查询成功")
  if (query === undefined || keyword === undefined) {
    response400.list = []
    response400.keywords = []
    response400.total = 0
    res.send(response400)
    return
  }
  query = `%${query}%`
  if (keyword !== "") {
    keyword = `(,|^)${keyword}(,|$)`
  }
  let sql = "select nid,title,keywords,notice_describe,update_time from notice where title like ? and keywords regexp ? order by update_time desc;select keywords from notice;select found_rows();"
  pool.query(sql, [query, keyword], (err, result) => {
    if (err) {
      response500.list = []
      response500.keywords = []
      response500.total = 0
      res.send(response500)
      return
    }
    console.log(result)
    response200.list = result[0]
    response200.keywords = result[1]
    response200.total = result[2][0]["found_rows()"]
    res.send(response200)
  })
})
//导出路由模块
module.exports = router