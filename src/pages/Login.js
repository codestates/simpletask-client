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
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });    
    };

    clickLoginhandle(){       
        if(!this.state.email || !this.state.password) {
          this.setState({
              err : "모든 항목 작성해주세요"
          })
          return ;
        }
        else {
           this.setState({
               err : ""
           })
        }
    
        axios.post("https://52.79.241.137:8080/signin",
            {email:this.state.email, password:this.state.password})
        .then(()=>{
            return axios.post("https://52.79.241.137:8080/user",{email:this.state.email})
        })
        .then((res)=>{
            res.data.data.isGit = false
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
    }

    render(){
        return(
            <div id="login">
                <div className='bigtitle'>LogIn Page</div>
                <div className='myinfo'>
                    <form onSubmit = {(e)=>{e.preventDefault()}}>
                        <div>
                            <div className="loginmach">Email </div>
                            <input className="infoForm" type="email" onChange = {this.handleInputValue("email")}></input>
                        </div>
                        <div>
                            <div className="loginmach">Password </div>
                            <input className="infoForm" type="password" onChange ={this.handleInputValue("password")}></input>
                        </div>
                        <div>
                            <Link to="/signup">아이디가 없으신가요?</Link>
                        </div>
                            <button className="smallbt2" onClick={this.clickLoginhandle}>LogIn</button>
                            <button className="smallbt2" onClick={this.nomemberLogin}>비회원 로그인</button>
                            <button className="smallbt2" onClick={() => this.gitOauth()}>git 로그인</button> 
                    </form>
                        {this.state.err ? <div  className="alert-box" >{this.state.err}</div> : ""} 
                </div>
            </div>
        )
    }
}
export default withRouter(Login)