import React from "react"
import {Link,withRouter} from "react-router-dom";
//props는 userdata 
function  Mypage ({userData}) {
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
        <span>
        <Link to="/editpassword"> 비밀번호 변경 </Link>
        </span>
       <span>
        <Link to="/" > 메인페이지 </Link>
       </span>
     </center>
    </div>
   )
}
export default withRouter(Mypage)