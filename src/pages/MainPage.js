import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Switch, Route, Redirect, withRouter, useHistory } from "react-router-dom";

import TextEntry from "./textEntry"
import UpdateForm from "./UpdateForm";

// 수정중

// user_id:
function MainPage({texts, isLogin, userData, logoutHandler, HandleTextDelete, HandleTextIdThrow}) {
    
    let history = useHistory()
    

    //지금 디드 마운팅 보다 map 이 먼저 읽어가지고 나오지가 않음

    // console.log(isLogin);
    // console.log(userData);
    // console.log(texts);
    
    let renderText = (obj) =>{
        let content = document.createElement('div');
        let id = document.createElement('div');
        let name = document.createElement('div')
        let title = document.createElement('div');
        let text = document.createElement('div');
        let date = document.createElement('div');
        let buttons = document.createElement('div');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        
        content.classList.add('contents')
        id.classList.add('id')
        name.classList.add('name')
        title.classList.add('title');
        text.classList.add('text');
        date.classList.add('date');
        editBtn.classList.add('editContent');
        deleteBtn.classList.add('deleteContent');

        id.textContent = `글 번호 : ${obj.id}`
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

        buttons.append(editBtn, deleteBtn)
        content.append(id, name, title, text, date, buttons);
        //console.log(content);
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
        console.log('filtering contents');
        
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
        console.log('reset contents');
        removeContent();
        renderContent();
    }

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
            history.push('/bye')
            history.push('/')
        }else{
            console.log('no');
        }

    }

    function mainClick() {
        history.push("/signin");
    }


    return  isLogin === false ? (
        <div>
            <header>
                <center>
                <h1>MainPage</h1>
                 <div>
                     <span>
                     <Link to="/signin"> Go to Login </Link>
                     </span>
                     <span>
                     <Link to="/signup"> Go to SignUp </Link>   
                     </span>
                 </div>
                </center>
            </header>
            <main>
                 <div>
                        {/* {texts.map(text =>
                            <TextEntry texts={text} key = {text.user_id}/>
                            )} */}
                    </div>
            </main>
        </div>
    ):(
        <div>
            <header>
                <center>
                  <h1>MainPage</h1>
                  <div>
                      {/* <span>logout버튼아니면link로해야될듯   </span>
                      <span>mypage이동</span> */}
                    <span>
                     <button onClick ={()=>{logoutHandler()}} >로그아웃</button>
                     </span>
                     {userData ? (
                         <span>
                            <button onClick={()=>{history.push("/mypage")}}>
                            내 정보
                            </button>
                        </span>
                     ) : (
                         ''
                     )}
                     
                  </div>
                </center>
                <main>
                    <div className="contents_outside">
                        <div className="contents_inside">
                            {texts.map(text =>
                                <TextEntry texts={text} key = {text.id} userData={userData} HandleTextDelete={HandleTextDelete} HandleTextIdThrow={HandleTextIdThrow}/>
                                )}
                        </div>
                    </div>
                    
                    <div>
                        버튼들에대한 함수 작성 이글은 지워야함
                    </div>
                    {userData ? (
                        <div>
                        <button onClick={() => reset()}> 전체글 </button> 
                        <button onClick={() => filtering()}> 내가작성한글만 </button>
                        <button onClick={() => history.push("/writeform")}> 글쓰기  </button>
                       
                    </div>
                    ) : (
                        ''
                    )}
                    
                </main>
            </header>
        </div>
    )
}

export default MainPage