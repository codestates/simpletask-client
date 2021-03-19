import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import axios from "axios";

class MainPage extends React.Component{
    constructor(props){
        super(props)

    }

    handleLogout(){
        axios.post("https://localhost:3000/logout", null, {withCredentials: true})
        .then(() => this.props.logoutHandler())
        .catch((err) => alert(err))
    }

    render(){
        return(
            <div>
                <header>
                    <center>
                        <h1>MainPage</h1>
                    </center>
                    {!this.userData ? (
                        <div>
                            <span>
                            <Link to="/login"> Go to Login </Link>
                            </span>
                            <span>
                                <Link to="/signup"> Go to SignUp </Link>
                            </span>
                        </div>
                    ) : (
                        <div>
                            <span>
                                <button onClick={this.handleLogout}> Go to Logout </button>
                            </span>
                            <span>
                                <Link to="/mypage"> Go to Mypage </Link>
                            </span>
                        </div>
                    )}
                 
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