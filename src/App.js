import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" render={() => <MainPage></MainPage>}></Route>
          <Route exact path="/login" render={() => <Login></Login>}></Route>
          <Route exact path="/signup" render={() => <Signup></Signup>}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
