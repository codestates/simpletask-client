import React from "react";
import { withRouter } from "react-router-dom";

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
        let textInfo = {title: this.state.title, text: this.state.text, user_id: this.props.userData.email}
        this.props.HandleTextCreate(textInfo);
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <div className='bigtitle'>글 쓰기</div>
                <main className='myinfo'>
                    <div>
                        <span>제목</span>
                        <input id="titleform" type="text" onChange={this.handleInputValue("title")}></input>
                    </div>
                    <div>
                        <span>내용</span>
                        <textarea id="textform" onChange={this.handleInputValue("text")}></textarea>
                    </div>
                    <div>
                        <button onClick={() => this.props.history.push('/')}>이전으로</button>
                        <button onClick={this.createWrite}>작성하기</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(WriteForm);