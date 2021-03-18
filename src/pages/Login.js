import React from 'react';
import {Link, Route, BrowserRouter as Router} from "react-router-dom";

import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: null,
            password: null,
            err: null
        }
    }

    render(){
        return(
            <div>
                <center>
                    <h1>LogIn Page</h1>
                    <form>
                        <div>
                            <span>Email </span>
                            <input type="email"></input>
                        </div>
                        <div>
                            <span>Password </span>
                            <input type="password"></input>
                        </div>
                        <div>
                            <Link to="/signup">아이디가 없으신가요?</Link>
                        </div>
                        <div>
                            <button>LogIn</button>
                        </div>
                        
                        <div className="alert-error"></div>
                    </form>
                </center>
            </div>
        )
    }
}

export default Login