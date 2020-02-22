import React, { useState, useEffect } from 'react'
import { Input, Button, message } from 'antd';
import axios from "axios"
const Login = () => {
    const [userName, setUserName] = useState(""),
        [password, setPassword] = useState("")
    let handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }
    let handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    let requireUserState = () => {
        axios.get("/api/user/state", { withCredentials: true }).then(res => {
            message.success(res.data.message)
            setUserName("")
            setPassword("")
        }).catch(err => {
            console.error(err.message);
        })
    }
    let handleClickLogin = () => {
        if (userName === "") {
            message.error("用户名不能为空");
            return
        } else if (password === "") {
            message.error("密码不能为空");
            return
        } else {
            axios.post("/api/user/login", { username: userName, password: password }).then(res => {
                message.success(res.data.message)
                setUserName("")
                setPassword("")
            }).catch(err => {
                console.error(err.message);
            })
        }
    }
    useEffect(() => {
        requireUserState()
    }, [])
    return (
        <div className="login-content">
            <div className="login-box">
                <div className="login-form">
                    <span>欢迎回来！</span>
                    <div>
                        <Input placeholder="请输入用户名" value={userName} onChange={handleUserNameChange} />
                    </div>
                    <div>
                        <Input.Password placeholder="请输入密码" value={password} onChange={handlePasswordChange} />
                    </div>
                </div>
                <div className="login-button">
                    <Button type="primary" block onClick={handleClickLogin}>
                        登录
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Login