import React, { useState, useEffect } from 'react'
import Sider from "../common/Sider"
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
function Home({ childRoutes, match }) {
    return (<div className="home-content">
        <div className="left">
            <Sider></Sider>
        </div>
        <div className="right">
            {childRoutes.map((el, index) => {
                return (<Route path={`${match.url}${el.path}`} component={el.component} key={index} exact={el.exact} />)
            })}
        </div>
    </div>)
}
export default Home