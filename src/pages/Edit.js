import axios from "axios";
import React from "react";




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

       return axios.post("https://simpletask.ga/user/editpassword",
       {password:Password,Edit:EditPassword},{withCredentials :true})
        .then((data)=>{
            
            if(data.message ==="fail"){
               this.setState({
                   err: "뭔가이상"
               })
            }
           // 맞으면 마이페이지로 이동
           //어찌 이동해야될까
        })
    }


   render(){
       return (
           <div>
               <center>
                   <h1>비밀번호 수정</h1>
               <div>
                   비밀번호 <input type="password" onChange = {this.handleInputValue("Password")}></input>
               </div>
               <div>
                바꿀 비밀번호 <input type="password" onChange = {this.handleInputValue("EditPassword")}></input>
               </div>
               <button onClick = {this.ClickEdithandle}>클릭</button>
               {this.state.err ? <div  className="alert-box">{this.state.err}</div> : ""}
               </center>
           </div>
       )
   }




}




export default Edit
