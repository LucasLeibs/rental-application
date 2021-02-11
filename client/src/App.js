
import './App.css';
import React, { Fragment, useState } from 'react';
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {default as Switchy} from "react-switch"


function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [checked, setChecked] = useState(false);
const handleChange = nextChecked => {
  setChecked(nextChecked);
};

  const setAuth = (boolean) => {
  setIsAuthenticated(boolean)
  }
  return (
   <Fragment>
     <Router>
       <div className="static">
         <div className="absolute top-5 left-5 bg-gray-50">
         <Switchy
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          >
         </Switchy>
         </div>
       <Switch>
         <Route exact path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/home"/>} />
         <Route exact path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login"/>} />
         <Route exact path="/home" render={props => isAuthenticated ? <Home {...props} setAuth={setAuth} /> : <Redirect to="/login"/>} />
       </Switch>
       </div>
 
     </Router>
   </Fragment>
  );
}

export default App;
