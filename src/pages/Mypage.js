import React from "react"
import {Link,withRouter,useHistory} from "react-router-dom";
import axios from 'axios';
//props는 userdata 
function  Mypage ({userData,deleteHand}) {
//    '/deleteid' 아이디삭제

let history = useHistory()
   return ( 
    <div>
      <center>
          <h1>마이페이지</h1>
       <div>
         이메일  : {userData.email}
       </div>
       <div>
       이름   : {userData.name}
       </div>
       <div>
         닉네임 : {userData.nickname}
        </div>

        {userData.friend ? <div>관심있는 사람 : {userData.friend}</div> : ''}
        <div>생성일 : {userData.createdAt}</div>
        <Link to="/" > 메인페이지 </Link>

        <span>
          {userData.isGit === false ?
          <div>
                  <button to="/editpassword"> 비밀번호 변경 </button>
                  <button onClick={deleteHand}>회원 탈퇴</button>
                  </div>
                  : ''
          }
        </span>
       <span>
       <span>
       </span>

     </center>
    </div>
   ) 
}
export default withRouter(Mypage)