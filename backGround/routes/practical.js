//引入模块
const express = require("express")
const pool = require("../pool")
const resFunc = require("../response/resFunc")
let router = express.Router()

router.post("/list", (req, res) => {
  let { query, keyword } = req.body
  let response400 = new resFunc(400, "缺少请求参数"),
    response500 = new resFunc(500, "查找失败，请重试"),
    response200 = new resFunc(200, "查询成功"),
    keywordSQL = ""
  if (query === undefined || keyword === undefined) {
    res.send(response400)
    return
  }
  if (keyword !== "") {
    keywordSQL = `and find_in_set(?, keywords) > 0`
  }
  query = `%${query}%`
  let sql = `select pid,title,keywords,practical_describe,jump_times from practical where title like ? ${keywordSQL} order by jump_times desc;select keywords from practical;select found_rows();`
  pool.query(sql, [query, keyword], (err, result) => {
    if (err) {
      res.send(response500)
      return
    }
    response200.list = result[0]
    response200.keywords = result[1]
    response200.total = result[2][0]["found_rows()"]
    res.send(response200)
  })
})
//导出路由模块
module.exports = router