import './App.css';
import React from "react";
import {withRouter, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Mypage from "./pages/Mypage"
import Edit from "./pages/Edit"
import axios from "axios";
// import axios from 'axios';
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
    // this.textHandler = this.textHandler.bind(this)
    this.nomemberLoginHandler = this.nomemberLoginHandler.bind(this);
  }
// 앱 실행되면 전체 컨텐츠 목록 받아오기
  componentDidMount(){
    axios.get("http://localhost:8080/contents")
    .then((res)=>{
      console.log(res.data.data,"get@@@@@@@@@");
      this.setState({
        text : res.data.data
      })
    })
  }
  // user정보 및 isLogin 변환
  loginHandler(obj){
       this.setState({
         isLogin :  true,
         userData : obj,
       })
       console.log(this.state.isLogin, this.state.userData,"@@@@@@@@state");
    }
  //text state 변환시켜주기
  //  textHandler(obj){
  //    this.setState({
  //      text : obj
  //    })
  //    console.log(this.state , "2번쨰 state");
  //  }
  logoutHandler(){
   axios.post(('http://localhost:8080/signout'))
   .then(()=>{
    this.setState({
      isLogin: false,
      userData:null
    })
    console.log(this.state.isLogin, this.state.userData,"@@@@@@@@state");
   })
  }
  nomemberLoginHandler(){
    this.setState({
      isLogin: true
    })
  }

  render(){
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" render={() => <MainPage isLogin={this.state.isLogin} texts={this.state.text} userData={this.state.userData} logoutHandler={this.logoutHandler}></MainPage>}></Route>
            <Route exact path="/signin" render={() => <Login loginHandler = {this.loginHandler} textHandler ={this.textHandler} nomemberLoginHandler={this.nomemberLoginHandler}></Login>}></Route>
            <Route exact path="/signup" render={() => <Signup></Signup>}></Route>
            <Route exact path="/mypage" render={() => <Mypage userData={this.state.userData} ViewEdit={this.ViewEdit}></Mypage>}></Route>
            <Route exact path="/editpassword" render={() => <Edit userData={this.state.userData}></Edit>}></Route>
          </Switch>
        </main>
      </Router> 
    );
  }
}
export default withRouter(App);