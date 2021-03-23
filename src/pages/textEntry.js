import React from 'react';
import { Switch, Route, Redirect, withRouter, useHistory } from "react-router-dom";


const TextEntry = ({userData, texts, HandleTextDelete, HandleTextIdThrow}) =>{
    console.log(texts)

    let history = useHistory()

    let updateTextHandler = (event) =>{
        let targetName = event.target;
        console.log(targetName.id);
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
        console.log(targetName.id);
        if(targetName.value === userData.email){
            console.log('ok')
            HandleTextDelete(targetName.id);
        }else{
            console.log('no');
        }

    }

    return(
        <div className="contents">
            <div className="title">{texts.title}</div>
            <div className="text">{texts.text}</div>
            <div className="date">{texts.createdAt}</div>
            <div>
                <button id={texts.id} value={texts.user_id} onClick={updateTextHandler}>수정</button>
                <button id={texts.id} value={texts.user_id} onClick={deleteTextHandler}>삭제</button>
            </div>
       </div>
    )
}
   
   

export default TextEntry;
