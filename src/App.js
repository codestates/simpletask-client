import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

import MainPage from "./pages/MainPage"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" render={() => <MainPage></MainPage>}></Route>
          <Route exact path="/login" render={() => <Login></Login>}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
