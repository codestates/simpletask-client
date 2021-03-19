import React from 'react';
import {Link, Route, withRouter, BrowserRouter as Router} from "react-router-dom";
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
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };
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
       console.log("@222222222222222");
       console.log(this.state.email,this.state.password , "33333333333");
      return axios.post("http://localhost:80/signin",
      {email:this.state.email, password:this.state.password})
      .then((res)=>{
          console.log(res)
          this.props.loginHandler()
          // 페이지 이동시켜야됨
      })
      .catch(err=>{
         console.log(this.state.err);
          console.log(err);
      })
    }
    render(){
        return(
            <div>
                <center>
                    <h1>LogIn Page</h1>
                    <form onSubmit = {(e)=>{e.preventDefault(); console.log("Sdaad") }}>
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
                            <button onClick={this.clickLoginhandle}>LogIn</button>
                        </div>
                         {this.state.err ? <div  className="alert-box" >{this.state.err}</div> : ""} 
                    </form>
                </center>
            </div>
        )
    }
}
export default withRouter(Login);