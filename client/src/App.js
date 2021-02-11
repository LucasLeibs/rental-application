
import './App.css';
import React, { Fragment, useState } from 'react';
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import {default as Switchy} from "react-switch"
import useDarkMode from './hooks/useDarkMode'

function App() {
const [colorTheme, setTheme] = useDarkMode()
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [checked, setChecked] = useState(false);
const handleChange = nextChecked => {
  setChecked(nextChecked);
  setTheme(colorTheme);
};

  const setAuth = (boolean) => {
  setIsAuthenticated(boolean)
  }
  return (
   <Fragment>
     <Router>
       <div className="static">
         <div className="absolute top-5 left-5">
         <Switchy
         
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          handleDiameter={32}
          onHandleColor="#A00AEB"
          offHandleColor="#3A3B36"
          offColor="#D4D6CD"
          onColor="#590B80"
          width={50}
          uncheckedIcon={false}
          checkedIcon={false}
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
                color:"orange",
                
              }}
            >
               <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
                color:"orange",
                
              }}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>
            </div>
          }
  
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
