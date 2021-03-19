import React from "react"
import {Link, Route, withRouter, BrowserRouter as Router} from "react-router-dom";


//props는 userdata 
function  Mypage (props) {

const {userInfo} = props;
 return (
  <div>
    <center>
      <h1>마이페이지</h1>
      <div>
        이메일  : {userInfo.email}
      </div>
      <div>
        이름   : {userInfo.name}
      </div>
      <div>
        닉네임 : {userInfo.nickname}
      </div>
      <button>확인?</button> <button>비밀번호 수정</button>
    </center>
  </div>
  )
    
}


export default Mypage