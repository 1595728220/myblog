//引入模块
const express = require("express")
const pool = require("../pool")
const resFunc = require("../response/resFunc")
const cheerio = require('cheerio')
let router = express.Router()

router.post("/login", (req, res) => {
    let { username, password } = req.body
    let response400 = new resFunc(400, "缺少请求参数"),
        response500 = new resFunc(500, "登录失败，请重试"),
        response401 = new resFunc(401, "用户名或密码错误"),
        response200 = new resFunc(200, "登录成功")
    if (username === undefined || password === undefined) {
        res.send(response400)
        return
    }
    let sql = `select uid from user where username = ? and password = md5(?) `
    pool.query(sql, [username, password], (err, result) => {
        if (err) {
            res.send(response500)
            return
        }
        if (result.length === 0) {
            res.send(response401)
        } else {
            req.session.uid = result[0].uid
            console.log(req.session.uid)
            res.send(response200)
        }
    })
})
//用户登录状态验证,登录状态则返回用户昵称
router.get("/state", (req, res) => {
    let response401 = new resFunc(401, "用户未登录"),
        response200 = new resFunc(200, "已登录")
    if (req.session.uid === undefined) //根据cookie凭证验证session中有无uid数据
        //session为空
        res.send(response401)
    //session非空
    else
        res.send(response200)
})
//导出路由模块
module.exports = router