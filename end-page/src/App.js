import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'antd/dist/antd.css';
import './assets/scss/App.scss';
import routes from "./modal/routes"

function App() {
  return (
    <div className="App">
      <Router>
        {
          routes.map((route, index) => <Route path={route.path} exact={route.exact} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} childRoutes={route.childRoutes} />
          )} key={index}></Route>)
        }
      </Router>
    </div>
  );
}

export default App;
