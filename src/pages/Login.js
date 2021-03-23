import React from 'react';
import {Link, withRouter} from "react-router-dom";
import axios from 'axios';
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: null,
            password: null,
            err: ""
        }
        this.handleInputValue = this.handleInputValue.bind(this)
        this.clickLoginhandle = this.clickLoginhandle.bind(this)
        this.nomemberLogin = this.nomemberLogin.bind(this);
    }
    //input에 넣는값으로 state 변환시키기
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    
      };

// 로그인 요청을 보내면 유저정보 요청하기
    clickLoginhandle(){
       
       if(!this.state.email || !this.state.password) {
          this.setState({
              err : "모든 항목 작성해주세요?"
          })
          return ;
       }
       else {
           this.setState({
               err : ""
           })
       }

    
        axios.post("http://localhost:8000/signin",
            {email:this.state.email, password:this.state.password})
        .then(()=>{
            console.log("@@@@로그인보냄@@@@@@@")
            console.log(this.state.email)
            return axios.post("http://localhost:8000/user",{email:this.state.email})
        })
        .then((res)=>{
            console.log(res.data)
            console.log(res.data.data,"@@@@@@정보가져오기@@@@@@@")
            this.props.loginHandler(res.data.data)
        
            this.props.history.push('/')
         
        })
        .catch(err=>{
         
            console.log(err);
        })
    }
 
    nomemberLogin(){
        this.props.nomemberLoginHandler();
        this.props.history.push('/');
    }
    
    gitOauth() {
        window.location.assign('https://github.com/login/oauth/authorize?client_id=77ea45a221e7f8a02f07')
        // git login 클릭시 인증 페이지로 리디렉션
    }

    render(){
        return(
            <div id="login">
                <center>
                    <h1>LogIn Page</h1>
                    <form onSubmit = {(e)=>{e.preventDefault()}}>
                        <div>
                            <span>Email </span>
                            <input type="email" onChange = {this.handleInputValue("email")}></input>
                        </div>
                        <div>
                            <span>Password </span>
                            <input type="password" onChange ={this.handleInputValue("password")}></input>
                        </div>
                        <div>
                            <Link to="/signup">아이디가 없으신가요?</Link>
                        </div>
                        <div>
                            <button className="login-button" onClick={this.clickLoginhandle}>LogIn</button>
                        </div>
                        <div>
                            <button className="login-button" onClick={this.nomemberLogin}>비회원 로그인</button>
                        </div>
                        <div>
                            <button onClick={() => this.gitOauth()}>
                                git 로그인
                            </button> 
                        </div>
                         {this.state.err ? <div  className="alert-box" >{this.state.err}</div> : ""} 
                    </form>
                </center>
            </div>
        )
    }
}
export default withRouter(Login)