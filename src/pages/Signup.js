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
      this.handleInputValue = this.handleInputValue.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup() {
    const {email,name,password,nickname} = this.state;
    if(!email || !password || !name || !nickname){
      this.setState({
        err : "모든 항목 작성해주세요?"
      })
      return;
    }else{
      this.setState({
        err: ""
      })
    }
    
    axios.post("https://localhost:4000/signup",
    {email:email, password: password, name: name, nickname: nickname}, {withCredentials: true})
    .then((res) => {
      this.props.history.push("/");
    })
    .catch((err) => alert(err));
  }

  render(){
    return (
      <div>
        <center>
          <h1>회원가입</h1>
          <form onSubmit={(e) => e.preventDefault()}>
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
            <button type="submit" onClick={this.handleSignup} className="signupBtn">클릭</button>

            <div>{this.state.err}</div>
          </form>
        </center>
      </div>
    )
  }

}

export default Signup