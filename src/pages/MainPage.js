import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import axios from "axios";

class MainPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogin: false,
            userData: null
        }
    }

    render(){
        return(
            <div>
                <header>
                    <center>
                        <h1>MainPage</h1>
                    </center>
                    <div>
                        <span>
                            <Link to="/login"> Go to Login </Link>
                        </span>
                        <span> Go to Signup </span>
                    </div>
                </header>
                <main>
                    <center>
                        <div>게시글이 들어갈 곳</div>
                        <div> buttons </div>
                    </center>
                </main>
            </div>
        )
    }
}

export default MainPage