//引入模块
const express = require("express")
const pool = require("../pool")
const resFunc = require("../response/resFunc")
const cheerio = require('cheerio')
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
  let sql = `select nid,title,keywords,notice_describe,update_time from notice where title like ? ${keywordSQL} order by update_time desc;select keywords from notice;select found_rows();`
  pool.query(sql, [query, keyword], (err, result) => {
    if (err) {
      res.send(response500)
      return
    }
    response200.list = result[0]
    response200.keywords = result[1]
    response200.total = result[2][0]["found_rows()"]
    // setTimeout(() => { res.send(response200) },15000)
    res.send(response200)
  })
})
router.get("/detail", (req, res) => {
  let { nid } = req.query;
  let response400 = new resFunc(400, "缺少请求参数"),
    response500 = new resFunc(500, "查找失败，请重试"),
    response200 = new resFunc(200, "查询成功")
  if (nid === undefined) {
    res.send(response400)
    return
  }
  let sql = "select nid as id,title,content from notice where nid = ?"
  pool.query(sql, [nid], (err, result) => {
    if (err) {
      res.send(response500)
      return
    }
    if (result.length > 0) {
      response200.noticeDetail = result[0]
      let content = result[0].content, catalog = []
      const $ = cheerio.load(content)
      $("h1").each((index, el) => {
        let name = "hash" + index
        $(el).attr("id", name)
        catalog[index] = { title: $(el).text(), name: name }
      })
      response200.noticeDetail.content = $.html()
      response200.catalog = catalog
      res.send(response200)
    } else {
      response200.noticeDetail = { title: "", id: "", content: "" }
      response200.catalog = []
      res.send(response200)
    }

  })
})
//导出路由模块
module.exports = router