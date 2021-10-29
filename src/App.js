import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
      <Redirect path="/"/>
    </Router>
  );
}

export default App;