import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
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
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup() {
    if(this.state.email && this.state.name && this.state.password && this.state.nickname){
      axios.post("https://localhost:3000/signup", {email: this.state.email, password: this.state.password, name: this.state.name, nickname: this.state.nickname}, {withCredentials: true})
      .then((res) => {
        this.props.history.push("/login");
      })
      .catch((err) => alert(err));
    }else{
      this.setState({
        err : '모든 항목을 입력하세요'
      })
    }
  }

  render(){
    return (
      <div>
        <center>
          <h1>회원가입</h1>
          <div>
            이메일
            <input onChange= {this.handleInputValue("email")} ></input>
          </div>
            <div>
              이름
            <input onChange= {this.handleInputValue("name")}></input>
            </div>
          <div>
             비밀번호
             <input onChange= {this.handleInputValue("password")}></input>
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

export default Signup