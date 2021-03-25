import React from "react";
import { withRouter } from "react-router-dom";

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
        let textInfo = {title: this.state.title, text: this.state.text, id: this.props.text_id}
        this.props.HandleTextUpdate(textInfo);
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <div className="bigtitle">글 수정</div>
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
                        <button onClick={this.updateText}>수정하기</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(UpdateForm);