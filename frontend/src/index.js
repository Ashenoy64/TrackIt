import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import reportWebVitals from './components/reportWebVitals';

import Register from './components/Register';

import Comp from './components/Comp';
import Login from './components/Login'
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <Router>
    <Switch>
      <Route exact path='/'> <><Comp /></></Route>
      <Route path="/login" ><Login/></Route>
      <Route path="/register" ><Register/></Route>
      <Route path="/dashboard" ><App /></Route>
    </Switch>
    </Router>
    
  </>
);


reportWebVitals();

