import React from 'react';
import {Link, Route, BrowserRouter as Router} from "react-router-dom";

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
       const {email,password} = this.state
  
       if(!email || !password) {
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

      return axios.post("url",{email:email, password:password},{withCredentials :true})
       .then(()=>{
           //제대로 전달됫으면 어찌 받을까요
       })

    }

    render(){
        return(
            <div>
                <center>
                    <h1>LogIn Page</h1>
                    <form>
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

export default Login