import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'antd/dist/antd.css';
import './assets/css/App.css';
import routes from "./modal/routes"

function App() {
  return (
    <div className="App">
      <Router>
        {
          routes.map((route, index) => <Route path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} childRoutes={route.childRoutes} />
          )} key={index}></Route>)
        }
      </Router>
    </div>
  );
}

export default App;
