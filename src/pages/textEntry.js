import React from 'react';
import { useHistory } from "react-router-dom";


const TextEntry = ({userData, texts, HandleTextDelete, HandleTextIdThrow}) =>{
    let history = useHistory()

    let updateTextHandler = (event) =>{
        let targetName = event.target;
        if(targetName.value === userData.email){
            console.log('ok');
            HandleTextIdThrow(targetName.id);
            history.push('/updateform')
        }else{
            console.log('no')
        }
    }

    let deleteTextHandler = (event) =>{
        let targetName = event.target;
        if(targetName.value === userData.email){
            console.log('ok')
            HandleTextDelete(targetName.id);
        }else{
            console.log('no');
        }

    }

    return(
        <div className="contents">
            <div className='content_title'>
                <span className="title">제목 : {texts.title}</span>
                {/* <span className='contents_id'>글 번호 : {texts.id}</span> */}
                <span className='editbt'>
                    <button id={texts.id} value={texts.user_id} onClick={updateTextHandler}>수정</button>
                    <button id={texts.id} value={texts.user_id} onClick={deleteTextHandler}>삭제</button>
                </span>
            </div>
            <div className='content_text'>
                <div className='name'>작성자 : {texts.user_id}</div>
                <div className="text">내용 : {texts.text}</div>
                <div className="date">작성일 : {texts.createdAt}</div>
            </div>
       </div>
    )
}
   
   

export default TextEntry;
