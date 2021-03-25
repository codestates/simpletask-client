import React from "react";
import {Link, withRouter } from "react-router-dom";
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
        err : "모든 항목을 작성해 주세요"
      })
      return ;
    }

    else {
      this.setState({
        err : ""
      })
    }

    return axios.post("https://52.79.241.137:8080/signup",
    {email:this.state.email ,name:this.state.name, password:this.state.password, nickname:this.state.nickname})
    .then(()=>{
    alert("아이디 생성 완료");
    })
    .then((res) =>{
    this.props.history.push('/');
    })
    .catch(err=>{
    console.log(err);
    })
  }

  render(){
    return (
      <div>
          <div className='bigtitle'>회원가입</div>
          <div className='myinfo'>
            <div>
              <div className="signupEx">이메일</div>
              <input className="infoForm" type="email" onChange= {this.handleInputValue("email")} ></input>
            </div>
            <div>
              <div className="signupEx">이름</div>
              <input className="infoForm" onChange= {this.handleInputValue("name")}></input>
            </div>
            <div>
              <div className="signupEx">비밀번호</div>
              <input className="infoForm" type="password" onChange= {this.handleInputValue("password")}></input>
            </div>
            <div>
              <div className="signupEx">닉네임</div>
              <input className="infoForm" onChange= {this.handleInputValue("nickname")}></input>
            </div>
            <div>
              <Link to="/signin">이미 아이디를 갖고 계신가요?</Link>  
            </div>
            <button className="signupBtn" onClick={this.handleSignup} className="signupBtn">회원가입</button>
          <div>{this.state.err}</div>
          </div>

      </div>
    )
  }

}

export default withRouter(Signup)