import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Mypage from "./pages/Mypage"
import Edit from "./pages/Edit"
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isLogin: false,
      userData: null,
      text : null
    }

    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  loginHandler(){
    return axios.get("https://simpletask.ga/user/mypage",{withCredentials :true})
    .then((res)=>{
      this.setState({
        isLogin:true,
        userdata: res.data
      })
    })
    .then(()=>{
      axios.get("https://simpletask.ga/",{withCredentials: true})
    })
    .then((tex)=>{
      this.setState({
        text : tex.data
      })
    })
  }

  logoutHandler(){
    this.setState({
      isLogin: false
    })
  }

  render(){
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" render={() => <MainPage></MainPage>}></Route>
            <Route exact path="/login" render={() => <Login loginHandler = {this.loginHandler}></Login>}></Route>
            <Route exact path="/signup" render={() => <Signup></Signup>}></Route>
            <Route exact path="/mypage" render={() => <Mypage></Mypage>}></Route>
            <Route exact path="/editpassword" render={() => <Edit></Edit>}></Route>
          </Switch>
        </main>
      </Router> 
    );
  }
  
}

export default App;
