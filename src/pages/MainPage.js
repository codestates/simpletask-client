import React from "react";
import { useHistory } from "react-router-dom";

import TextEntry from "./textEntry"

function MainPage({texts, isLogin, userData, logoutHandler, HandleTextDelete, HandleTextIdThrow}) {
    
    let history = useHistory()
    let renderText = (obj) =>{
        let content = document.createElement('div');
        let name = document.createElement('div')
        let title = document.createElement('span');
        let text = document.createElement('div');
        let date = document.createElement('div');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        let content_title = document.createElement('div')
        let content_text = document.createElement('div')
        let editbt = document.createElement('span')
        
        content.classList.add('contents')
        name.classList.add('name')
        title.classList.add('title');
        text.classList.add('text');
        date.classList.add('date');
        editBtn.classList.add('editContent');
        deleteBtn.classList.add('deleteContent');
        content_title.classList.add('content_title')
        content_text.classList.add('content_text')
        editbt.classList.add('editbt')
    
        name.textContent = `작성자 : ${obj.user_id}`
        title.textContent = `제목 : ${obj.title}`;
        text.textContent = `내용 : ${obj.text}`;
        date.textContent = `작성일 : ${obj.createdAt}`;
        editBtn.textContent = "수정";
        editBtn.id = obj.id;
        editBtn.value = obj.user_id
        deleteBtn.textContent = "삭제";
        deleteBtn.id = obj.id;
        deleteBtn.value = obj.user_id;

        editBtn.addEventListener('click', updateTextHandler);
        deleteBtn.addEventListener('click', deleteTextHandler);

        editbt.append(editBtn, deleteBtn)
        content_title.append(title, editbt)
        content_text.append(name, text, date)
        content.append(content_title, content_text)
        return content;
    }

    let renderContent = () => {
        let contentList = document.createElement('div')
        contentList.classList.add('contents_inside');
        let Ocontents = document.querySelector('.contents_outside');

        for(let i of texts){
            contentList.append(renderText(i));
        }
        Ocontents.append(contentList);
    }

    let removeContent = () => {
        let list = document.querySelector('.contents_inside');
        list.remove();       
    }

    let filtering = () => {
        removeContent();
        let contentList = document.createElement('div')
        contentList.classList.add('contents_inside');
        let Ocontents = document.querySelector('.contents_outside');
        let filtered = texts.filter((el) => {
            return el.user_id === userData.email;
        });

        for(let i of filtered){
            contentList.append(renderText(i));
        }
        Ocontents.append(contentList);
       
    }

    let reset = () => {
        removeContent();
        renderContent();
    }

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
            history.push('/bye')
            history.push('/')
        }else{
            console.log('no');
        }

    }

    function signinClick() {
        history.push("/signin");
    }

    function signupClick() {
        history.push("/signup")
    }


    return  isLogin === false ? (
        <div>
            <header>
                <div className = "bigtitle">Simpletask</div>
                <div className = "btcollect1">
                    <span className = 'smallbt' onClick = {signinClick}>로그인</span>
                    <span className = 'smallbt' onClick = {signupClick}>회원가입</span>
                </div>
            </header>
        </div>
    ):(
        <div>
            <header>
                <div className = "bigtitle">Simpletask</div>
                <div className = 'btcollect1'>
                    <span className='smallbt' onClick={()=>{logoutHandler()}}>로그아웃</span>
                    {userData ? (
                        <span className='smallbt' onClick={()=>{history.push("/mypage")}}>내 정보</span>
                    ) : ( '' )}
                </div>
                    {userData ? (
                        <div className='btcollect2'>
                            <button onClick={() => reset()}> 전체글 </button> 
                            <button onClick={() => filtering()}> 내가작성한글만 </button>
                            <button onClick={() => history.push("/writeform")}> 글쓰기  </button>
                        </div>
                        ) : ( ''
                    )}
                <main>
                    <div className="contents_outside">
                        <div className="contents_inside">
                            {texts.map(text =>
                                <TextEntry texts={text} key = {text.id} userData={userData} HandleTextDelete={HandleTextDelete} HandleTextIdThrow={HandleTextIdThrow}/>
                                )}
                        </div>
                    </div>                   
                </main>
            </header>
        </div>
    )
}

export default MainPage