import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Switch, Route, Redirect, withRouter, useHistory } from "react-router-dom";

import TextEntry from "./textEntry"
// user_id:
function MainPage({texts, isLogin, userData, logoutHandler}) {
    
    // let history = useHistory()

    // function signinClick() {
    //     history.push("/signin");
    // }

    // function signupClick() {
    //     history.push("/signup")
    // }

    // function mypageClick() {
    //     history.push("/mypage")
    // }

    // function signoutClick() {
    //     props.signout()
    // }
   
    //지금 디드 마운팅 보다 map 이 먼저 읽어가지고 나오지가 않음

    console.log(isLogin);
    console.log(userData);
    console.log(texts);
    let renderText = (obj) =>{
        let content = document.createElement('div');
        let title = document.createElement('div');
        let text = document.createElement('div');
        let date = document.createElement('div');
        
        content.classList.add('contents')
        title.classList.add('title');
        text.classList.add('text');
        date.classList.add('date');

        title.textContent = obj.title;
        text.textContent = obj.text;
        date.textContent = obj.createdAt;

        content.append(title,text,date);
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
                            <button>
                            <Link to="/mypage">내 정보?</Link>
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
                                <TextEntry texts={text} key = {text.user_id}/>
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
                        <button> 글쓰기  </button>
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