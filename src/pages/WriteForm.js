import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Switch, Route, Redirect, withRouter, useHistory } from "react-router-dom";

class WriteForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            text: '',

        }
        this.handleInputValue = this.handleInputValue.bind(this);
        this.createWrite = this.createWrite.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({[key]: e.target.value});
    }

    createWrite(){
        if(!this.state.title){
            alert("제목을 입력해주세요");
            return;
        }
        console.log(this.state.title, this.state.text, this.props.userData.email);
        let textInfo = {title: this.state.title, text: this.state.text, user_id: this.props.userData.email}
        this.props.HandleTextCreate(textInfo);
        this.props.history.push("/");

        /*axios.post("http://localhost:8080/create",
            {title:this.state.title, text:this.state.text, user_id: this.props.userData.email})
        .then(() => {
            console.log("작성한 글 보내기");
            console.log(this.state.title, this.state.text);
        })
        .then((res) =>{
            this.props.history.push("/");
        })
        .catch((err) => console.log(err));*/

    }

    render(){
        console.log(this.props.userData.email)
        return(
            <div>
                <div className='bigtitle'>글 쓰기</div>
                <main className='myinfo'>
                    <div>
                        <span className="writeTag">제목</span>
                        <input className="titleform" type="text" onChange={this.handleInputValue("title")}></input>
                    </div>
                    <div>
                        <span className="writeTag">내용</span>
                        <textarea className="textform" onChange={this.handleInputValue("text")}></textarea>
                    </div>
                    <div>
                        <button className="create_updateBtn" onClick={() => this.props.history.push('/')}>이전으로</button>
                        <button className="create_updateBtn" onClick={this.createWrite}>작성하기</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(WriteForm);