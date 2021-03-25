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
import UpdateForm from "./pages/UpdateForm";
import Bye from "./pages/Bye"

// import axios from 'axios';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      userData: null,
      text : null,
      text_id: null,
      accessToken: '',
    }
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.nomemberLoginHandler = this.nomemberLoginHandler.bind(this);
    this.deleteHand = this.deleteHand.bind(this);
    this.HandleTextDelete = this.HandleTextDelete.bind(this);
    this.HandleTextIdThrow = this.HandleTextIdThrow.bind(this);
    this.HandleTextCreate = this.HandleTextCreate.bind(this);
    this.HandleTextUpdate = this.HandleTextUpdate.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getGitHubUserInfo = this.getGitHubUserInfo.bind(this)
  }

  componentDidMount(){
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    if (authorizationCode) {
      this.getAccessToken(authorizationCode)
    }
    
    axios.get("https://52.79.241.137:8080/contents")
    .then((res)=>{ 
      return axios.get("https://52.79.241.137:8080/contents")
    })
    .then((res)=>{
      this.setState({
        text : res.data.data
      })
    })

    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = 'Simpletask';
    
  }

  async getAccessToken(authorizationCode) {
    let resp = await axios.post('https://52.79.241.137:8080/callback', { authorizationCode: authorizationCode })
    this.setState({
      isLogin: true,
      accessToken: resp.data.accessToken
    })
    this.getGitHubUserInfo()
  } 

  async getGitHubUserInfo() {
    const  accessToken  = this.state.accessToken
    let response = await axios.get('https://api.github.com/user', {
      headers: {
        authorization: `token ${accessToken}`,
      }
    })
    const { email, login, name, created_at } = response.data
    this.setState({
      userData: {
        isGit: true,
        email ,
        name: login,
        nickname: name,
        createdAt: created_at
      }
    })
    this.props.history.push('/');
  }
  // user정보 및 isLogin 변환
  loginHandler(obj){
       this.setState({
         isLogin :  true,
         userData : obj,
       })
    }
  //text state 변환시켜주기
  //  textHandler(obj){
  //    this.setState({
  //      text : obj
  //    })
  //  }
  logoutHandler(){
   axios.post(('https://52.79.241.137:8080/signout'))
   .then(()=>{
    this.setState({
      isLogin: false,
      userData:null
    })
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
    this.props.history.push('/bye')
   axios.post("https://52.79.241.137:8080/deleteid",{email:this.state.userData.email})
   .then(()=>{
     this.setState({
      isLogin: false,
      userData : null
    })
   })
   .then(()=>{
    
  })
  .catch(err=>console.log(err))
  }

  //글 작성 함수
  HandleTextCreate(obj){
    axios.post("https://52.79.241.137:8080/create", obj)
    .then(() => {
      this.componentDidMount();
    })
    .then((res) =>{
      this.props.history.push('/');
    })
    .catch((err) => console.log(err));
  }

  //글 수정 텍스트 아이디 전달함수
  HandleTextIdThrow(int){
    this.setState({
      text_id: int
    })
  }

  //글 수정 함수
  HandleTextUpdate(obj){
    axios.post("https://52.79.241.137:8080/edit", obj)
    .then(() => {
      this.componentDidMount();
    })
    .then((res) =>{
      this.props.history.push('/');
    })
    .catch((err) => console.log(err));
  }

  //글 삭제 함수
  HandleTextDelete(int){
    axios.post("https://52.79.241.137:8080/delete", {id: int})
    .then(() => {
      this.componentDidMount();
    })
    .catch((err) => console.log(err))
  }

  // addfriend()

  render(){
    const {isLogin, accessToken} = this.state
    return (
          <Switch>
            <Route exact path="/" render={() => <MainPage isLogin={this.state.isLogin} texts={this.state.text} userData={this.state.userData} logoutHandler={this.logoutHandler} HandleTextDelete={this.HandleTextDelete} HandleTextIdThrow={this.HandleTextIdThrow}></MainPage>}></Route>
            <Route exact path="/signin" render={() => <Login loginHandler = {this.loginHandler} textHandler ={this.textHandler} nomemberLoginHandler={this.nomemberLoginHandler}></Login>}></Route>
            <Route exact path="/signup" render={() => <Signup></Signup>}></Route>
            <Route exact path="/mypage" render={() => <Mypage isLogin={this.state.isLogin} userData={this.state.userData} ViewEdit={this.ViewEdit} deleteHand={this.deleteHand} accessToken={this.state.accessToken} ></Mypage>}></Route>
            <Route exact path="/editpassword" render={() => <Edit userData={this.state.userData}></Edit>}></Route>
            <Route exact path="/writeform" render={()=> <WriteForm userData={this.state.userData} HandleTextCreate={this.HandleTextCreate}></WriteForm>}></Route>
            <Route exact path="/updateform" render={()=> <UpdateForm userData={this.state.userData} text_id={this.state.text_id} HandleTextUpdate={this.HandleTextUpdate}></UpdateForm>}></Route>
            <Route exact path="/bye" render={()=> <Bye/>} />
          </Switch>

    );
  }
}
export default withRouter(App);