import React, { useState, useEffect } from 'react'
import { Menu, Icon } from 'antd';
import siderList from "../modal/sider"
import { withRouter } from "react-router-dom"
function Sider({ history, match }) {
    let handleSelect = ({ key }) => {
        history.push(key)
    }
    return (
        <Menu
            mode="inline"
            style={{ width: "100%", height: "100%", paddingTop: "20px", textAlign: "left" }}
            theme="dark"
            onSelect={handleSelect}
            defaultSelectedKeys={[match.url]}
        >
            {
                siderList.map((el, index) => {
                    return (<Menu.Item key={el.key}>
                        <Icon type={el.type} />
                        {el.name}
                    </Menu.Item>)
                })
            }
        </Menu>
    );
}
export default withRouter(Sider)