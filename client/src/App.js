import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Landing from './components/layout/Landing';
import Auth from './view/Auth';
function App() {
  return <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path ='/login' component={props=> <Auth {...props} authRoute='login'/>} />
      <Route exact path ='/register' component={props=> <Auth {...props} authRoute='register'/>} />
    </Switch>
  </Router>
}

export default App;
