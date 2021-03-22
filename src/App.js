import './App.css';
import React from "react";
import {withRouter, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Mypage from "./pages/Mypage"
import Edit from "./pages/Edit"
import axios from "axios";
import WriteForm from "./pages/WriteForm";

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
    this.deleteHand = this.deleteHand.bind(this);
    this.HandleTextDelete = this.HandleTextDelete.bind(this);
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
  // 비회원 로그인 
  nomemberLoginHandler(){
    this.setState({
      isLogin: true
    })
  }
  //회원탈퇴
  deleteHand(){
    console.log("@@@@@@@@삭제@@@@@@@");
    console.log(this.state.userData);
   axios.post("http://localhost:8080/deleteid",{email:this.state.userData.email})
   .then(()=>{
     console.log("@@@@@@삭제됨@@@@@@@");
     this.props.history.push('/')
     console.log(this.state)
   })
   .then(()=>{
    this.setState({
      isLogin: false,
      userData : null
    })
  })
  .catch(err=>console.log(err))
  }

  HandleTextDelete(){
    console.log("글 삭제 함수 실행");
    console.log(this.state.text.id)
    axios.post("http://localhost:8080/delete", {id: this.state.userData.email})
    .then(() => {
      console.log('글 삭제 완료');
      
    })
    .catch((err) => console.log(err))
  }

  render(){
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" render={() => <MainPage isLogin={this.state.isLogin} texts={this.state.text} userData={this.state.userData} logoutHandler={this.logoutHandler} HandleTextDelete={this.HandleTextDelete}></MainPage>}></Route>
            <Route exact path="/signin" render={() => <Login loginHandler = {this.loginHandler} textHandler ={this.textHandler} nomemberLoginHandler={this.nomemberLoginHandler}></Login>}></Route>
            <Route exact path="/signup" render={() => <Signup></Signup>}></Route>
            <Route exact path="/mypage" render={() => <Mypage isLogin={this.state.isLogin} userData={this.state.userData} ViewEdit={this.ViewEdit} deleteHand={this.deleteHand} ></Mypage>}></Route>
            <Route exact path="/editpassword" render={() => <Edit userData={this.state.userData}></Edit>}></Route>
            <Route exact path="/writeform" render={()=> <WriteForm userData={this.state.userData} componentDidMount={this.componentDidMount}></WriteForm>}></Route>
          </Switch>
        </main>
      </Router> 
    );
  }
}
export default withRouter(App);