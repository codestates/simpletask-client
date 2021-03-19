import React from "react";
import {Link, Route, withRouter, BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
class Signup extends React.Component {
  constructor(props){
      super(props)
      this.state ={
        email : '',
        name : '' ,
        password : '',
        nickname : '',
        err : ''
      }
      this.handleInputValue = this.handleInputValue.bind(this)
      this.handleSignup = this.handleSignup.bind(this)
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleSignup() {
    if(!this.state.email || !this.state.name ||! this.state.password || !this.state.nickname){
      this.setState({
        err : "모든항목작성"
      })
      return ;
    }
    else {
      this.setState({
        err : ""
      })
    }
    console.log("여기까지 오냐?");
  return axios.post("http://localhost:80/signup",
  {email:this.state.email ,name:this.state.name, password:this.state.password, nickname:this.state.nickname})
  .then(()=>{
    console.log("tttttttttttt");
  })
  .catch(err=>{
    console.log(err);
  })
  }
  render(){
    return (
      <div>
        <center>
          <h1>회원가입</h1>
          <div>
            이메일
            <input type="email" onChange= {this.handleInputValue("email")} ></input>
          </div>
            <div>
              이름
            <input    onChange= {this.handleInputValue("name")}></input>
            </div>
          <div>
             비밀번호
             <input type="password" onChange= {this.handleInputValue("password")}></input>
          </div>
          <div>
             닉네임
             <input  onChange= {this.handleInputValue("nickname")}></input>
          </div>
          <div>
            <Link to="/login">이미 아이디를 갖고 계신가요?</Link>  
          </div>
          <button onClick={this.handleSignup} className="signupBtn">클릭</button>
          <div>{this.state.err}</div>
        </center>
      </div>
    )
  }
}
export default withRouter(Signup);