import React, {useState} from "react"
import { withRouter,useHistory} from "react-router-dom";
import axios from 'axios';
//props는 userdata 
function  Mypage ({userData,deleteHand}) {
//    '/deleteid' 아이디삭제
  const [friendName, setFriend] = useState('')
  const handleChangeFrn = (e) => {
    setFriend(e.target.value)
  };

  const addfriend = () => {
    axios.post("https://52.79.241.137:8080/addfriend", 
    {
      name: userData.name,
      friendId: friendName
    })
    .then(res => {
      history.push('/bye')
      history.push('/mypage')
    }
    )
  }

  let history = useHistory()

  function mainClick() {
    history.push('/')
  }

  function editpw() {
    history.push('/editpassword')
  }

  return ( 
    <div>
      <div className='bigtitle'>마이페이지</div>
      <div className='myinfo'>
        <div> 이메일  : {userData.email} </div>
        <div> 이름   : {userData.name} </div>
        <div> 닉네임 : {userData.nickname} </div>
        {userData.friend ? <div>관심있는 사람 : {userData.friend}</div> : ''}
        <div>생성일 : {userData.createdAt}</div>
        <div className='btcollect3'>
          <button onClick={mainClick}> 메인페이지</button>
          {userData.isGit === false ?
          <span>
              <button onClick={editpw}> 비밀번호 변경 </button>
              <button onClick={deleteHand}>회원 탈퇴</button>
          <div className='addfriend'>
            <input onChange={(e) => handleChangeFrn(e)}></input>
            <button onClick={addfriend}>관심 갖기</button>
          </div>
          </span>
              : ''
            }
          </div>
      </div>
    </div>
  ) 
}
export default withRouter(Mypage)