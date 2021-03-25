import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Switch, Route, Redirect, withRouter, useHistory } from "react-router-dom";

class UpdateForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            text: '',

        }
        this.handleInputValue = this.handleInputValue.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({[key]: e.target.value});
    }

    updateText(){
        console.log(this.state);
        console.log(this.props.text_id);
        let textInfo = {title: this.state.title, text: this.state.text, id: this.props.text_id}
        this.props.HandleTextUpdate(textInfo);
        this.props.history.push("/");
    }

    render(){
        console.log(this.props.userData.email)
        return(
            <div>
                <div className="bigtitle">글 수정</div>
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
                        <button className="create_updateBtn" onClick={this.updateText}>수정하기</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(UpdateForm);