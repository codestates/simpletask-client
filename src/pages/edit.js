import React from "react";




class Edit extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                Password : '',
                EditPassword: ''
            }
        
    }



   render(){
       return (
           <div>
               <center>
                   <h1>비밀번호 수정</h1>
               <div>
                   비밀번호 <input></input>
               </div>
               <div>
                바꿀 비밀번호 <input></input>
               </div>
               <button>클릭</button>
               </center>
           </div>
       )
   }




}




export default Edit
