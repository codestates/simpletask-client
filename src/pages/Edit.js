import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class Edit extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                Password : '',
                EditPassword: '',
                err : ''
            }
       this.handleInputValue = this.handleInputValue.bind(this)
       this.ClickEdithandle = this.ClickEdithandle.bind(this)
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    ClickEdithandle() {
       const {userData} = this.props
       const {Password,EditPassword} = this.state
       if(!Password || !EditPassword){
           this.setState({
               err : "모두 작성"
           })
           return ;
       }
       else {
           this.setState({
               err:""
           })
       }
       return axios.post("https://52.79.241.137:8080/editpw",
       {email:userData.email, password:EditPassword})
        .then((res)=>{
            this.props.history.push('/mypage')
        })
        .catch((err)=>{
        console.log(err);
        })
    }
    
    render(){
        return (
            <div>
                <div className='bigtitle'>비밀번호 수정</div>
                <div className='myinfo'>
                    <div>
                        <div className="editpwTag">현재 비밀번호</div>
                        <input className="infoForm" type="password" onChange = {this.handleInputValue("Password")}></input>
                    </div>
                    <div>
                        <div className="editpwTag">바꿀 비밀번호</div>
                        <input className="infoForm" type="password" onChange = {this.handleInputValue("EditPassword")}></input>
                    </div>
                    <span>
                        <button className="editpwBtn" onClick = {this.ClickEdithandle}>변경</button>
                    </span>
                    <span>
                        <button className="editpwBtn" onClick = {()=>{this.props.history.push('/mypage')}}>취소</button>
                    </span>
                        {this.state.err ? <div  className="alert-box">{this.state.err}</div> : ""}
                </div>
            </div>
        )
    }
}
export default withRouter(Edit)