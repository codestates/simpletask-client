import axios from "axios";
import React from "react";
import {Link, withRouter} from "react-router-dom";
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
        // axios.post(`https://localhost:4000/`,{데이터?},{옵션})
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
        console.log(userData,"실행되냐");
       return axios.post("http://localhost:8080/editpw",
       {email:userData.email, password:EditPassword})
        .then((res)=>{
            console.log(res,"@@변경됨@@@@");
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
                        비밀번호 <input type="password" onChange = {this.handleInputValue("Password")}></input>
                    </div>
                    <div>
                        바꿀 비밀번호 <input type="password" onChange = {this.handleInputValue("EditPassword")}></input>
                    </div>
                    <span>
                        <button onClick = {this.ClickEdithandle}>변경</button>
                    </span>
                    <span>
                        <button onClick = {()=>{this.props.history.push('/mypage')}}>취소</button>
                    </span>
                        {this.state.err ? <div  className="alert-box">{this.state.err}</div> : ""}
                </div>
            </div>
        )
    }
}
export default withRouter(Edit)