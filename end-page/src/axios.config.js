import axios from "axios"
import { message } from "antd"
const SUCCESS_CODE = 200;
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加一个响应拦截器
axios.interceptors.response.use(
    response => {
        console.log("拦截响应")
        let err = { message: "" };
        let data = response.data;
        // 如果是直接返回的数据，没有状态码
        if (data.code === undefined) {
            return response;
        }
        switch (data.code) {
            // 成功
            case SUCCESS_CODE:
                return response;
            // 其他错误
            default:
                err.message = data.message;
                message.error(err.message);
                return Promise.reject(err);
        }
    },
    err => {
        if (err && err.response && err.response.data && err.response.data.msg) {
            err.message = err.response.data.msg;
        } else {
            err.message = "请求超时";
        }
        message.error(err.message);
        return Promise.reject(err);
    }
);