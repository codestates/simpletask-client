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
        err : '여기는 에러'
      }
      this.handleInputValue = this.handleInputValue.bind(this)
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

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
            <Link></Link>  
          </div>
          <button>클릭</button>

          <div>{this.state.err}</div>

        </center>
      </div>
    )
  }

}

export default Signup