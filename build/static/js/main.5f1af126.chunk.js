(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(34),c=n.n(i),r=(n(41),n(18)),l=n.n(r),o=n(22),d=n(10),u=n(11),h=n(2),j=n(13),b=n(12),p=(n(43),n(3)),x=n(23),O=n(0),m=function(e){var t=e.userData,n=e.texts,a=e.HandleTextDelete,s=e.HandleTextIdThrow,i=Object(p.f)();return Object(O.jsxs)("div",{className:"contents",children:[Object(O.jsxs)("div",{className:"content_title",children:[Object(O.jsxs)("span",{className:"title",children:["\uc81c\ubaa9 : ",n.title]}),Object(O.jsxs)("span",{className:"editbt",children:[Object(O.jsx)("button",{id:n.id,value:n.user_id,onClick:function(e){var n=e.target;n.value===t.email?(console.log("ok"),s(n.id),i.push("/updateform")):console.log("no")},children:"\uc218\uc815"}),Object(O.jsx)("button",{id:n.id,value:n.user_id,onClick:function(e){var n=e.target;n.value===t.email?(console.log("ok"),a(n.id)):console.log("no")},children:"\uc0ad\uc81c"})]})]}),Object(O.jsxs)("div",{className:"content_text",children:[Object(O.jsxs)("div",{className:"name",children:["\uc791\uc131\uc790 : ",n.user_id]}),Object(O.jsxs)("div",{className:"text",children:["\ub0b4\uc6a9 : ",n.text]}),Object(O.jsxs)("div",{className:"date",children:["\uc791\uc131\uc77c : ",n.createdAt]})]})]})};var f=function(e){var t=e.texts,n=e.isLogin,a=e.userData,s=e.logoutHandler,i=e.HandleTextDelete,c=e.HandleTextIdThrow,r=Object(p.f)(),l=function(e){var t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("span"),s=document.createElement("div"),i=document.createElement("div"),c=document.createElement("button"),r=document.createElement("button"),l=document.createElement("div"),o=document.createElement("div"),d=document.createElement("span");return t.classList.add("contents"),n.classList.add("name"),a.classList.add("title"),s.classList.add("text"),i.classList.add("date"),c.classList.add("editContent"),r.classList.add("deleteContent"),l.classList.add("content_title"),o.classList.add("content_text"),d.classList.add("editbt"),n.textContent="\uc791\uc131\uc790 : ".concat(e.user_id),a.textContent="\uc81c\ubaa9 : ".concat(e.title),s.textContent="\ub0b4\uc6a9 : ".concat(e.text),i.textContent="\uc791\uc131\uc77c : ".concat(e.createdAt),c.textContent="\uc218\uc815",c.id=e.id,c.value=e.user_id,r.textContent="\uc0ad\uc81c",r.id=e.id,r.value=e.user_id,c.addEventListener("click",u),r.addEventListener("click",h),d.append(c,r),l.append(a,d),o.append(n,s,i),t.append(l,o),t},o=function(){document.querySelector(".contents_inside").remove()},d=function(){o(),function(){var e=document.createElement("div");e.classList.add("contents_inside");var n,a=document.querySelector(".contents_outside"),s=Object(x.a)(t);try{for(s.s();!(n=s.n()).done;){var i=n.value;e.append(l(i))}}catch(c){s.e(c)}finally{s.f()}a.append(e)}()},u=function(e){var t=e.target;t.value===a.email?(console.log("ok"),c(t.id),r.push("/updateform")):console.log("no")},h=function(e){var t=e.target;t.value===a.email?(console.log("ok"),i(t.id),r.push("/bye"),r.push("/")):console.log("no")};return!1===n?Object(O.jsx)("div",{children:Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"Simpletask"}),Object(O.jsxs)("div",{className:"btcollect1",children:[Object(O.jsx)("span",{className:"smallbt",onClick:function(){r.push("/signin")},children:"\ub85c\uadf8\uc778"}),Object(O.jsx)("span",{className:"smallbt",onClick:function(){r.push("/signup")},children:"\ud68c\uc6d0\uac00\uc785"})]})]})}):Object(O.jsx)("div",{children:Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"Simpletask"}),Object(O.jsxs)("div",{className:"btcollect1",children:[Object(O.jsx)("span",{className:"smallbt",onClick:function(){s()},children:"\ub85c\uadf8\uc544\uc6c3"}),a?Object(O.jsx)("span",{className:"smallbt",onClick:function(){r.push("/mypage")},children:"\ub0b4 \uc815\ubcf4"}):""]}),a?Object(O.jsxs)("div",{className:"btcollect2",children:[Object(O.jsx)("button",{onClick:function(){return d()},children:" \uc804\uccb4\uae00 "}),Object(O.jsx)("button",{onClick:function(){return function(){o();var e=document.createElement("div");e.classList.add("contents_inside");var n,s=document.querySelector(".contents_outside"),i=t.filter((function(e){return e.user_id===a.email})),c=Object(x.a)(i);try{for(c.s();!(n=c.n()).done;){var r=n.value;e.append(l(r))}}catch(d){c.e(d)}finally{c.f()}s.append(e)}()},children:" \ub0b4\uac00\uc791\uc131\ud55c\uae00\ub9cc "}),Object(O.jsx)("button",{onClick:function(){return r.push("/writeform")},children:" \uae00\uc4f0\uae30  "})]}):"",Object(O.jsx)("main",{children:Object(O.jsx)("div",{className:"contents_outside",children:Object(O.jsx)("div",{className:"contents_inside",children:t.map((function(e){return Object(O.jsx)(m,{texts:e,userData:a,HandleTextDelete:i,HandleTextIdThrow:c},e.id)}))})})})]})})},v=n(15),g=n(6),k=n(4),y=n.n(k),C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInputValue=function(e){return function(t){a.setState(Object(v.a)({},e,t.target.value))}},a.state={email:null,password:null,err:""},a.handleInputValue=a.handleInputValue.bind(Object(h.a)(a)),a.clickLoginhandle=a.clickLoginhandle.bind(Object(h.a)(a)),a.nomemberLogin=a.nomemberLogin.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"clickLoginhandle",value:function(){var e=this;this.state.email&&this.state.password?(this.setState({err:""}),y.a.post("https://52.79.241.137:8080/signin",{email:this.state.email,password:this.state.password}).then((function(){return y.a.post("https://52.79.241.137:8080/user",{email:e.state.email})})).then((function(t){t.data.data.isGit=!1,e.props.loginHandler(t.data.data),e.props.history.push("/")})).catch((function(e){console.log(e)}))):this.setState({err:"\ubaa8\ub4e0 \ud56d\ubaa9 \uc791\uc131\ud574\uc8fc\uc138\uc694"})}},{key:"nomemberLogin",value:function(){this.props.nomemberLoginHandler(),this.props.history.push("/")}},{key:"gitOauth",value:function(){window.location.assign("https://github.com/login/oauth/authorize?client_id=77ea45a221e7f8a02f07")}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{id:"login",children:[Object(O.jsx)("div",{className:"bigtitle",children:"LogIn Page"}),Object(O.jsxs)("div",{className:"myinfo",children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"Email "}),Object(O.jsx)("input",{type:"email",onChange:this.handleInputValue("email")})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"Password "}),Object(O.jsx)("input",{type:"password",onChange:this.handleInputValue("password")})]}),Object(O.jsx)("div",{children:Object(O.jsx)(g.b,{to:"/signup",children:"\uc544\uc774\ub514\uac00 \uc5c6\uc73c\uc2e0\uac00\uc694?"})}),Object(O.jsx)("button",{className:"login-button",onClick:this.clickLoginhandle,children:"LogIn"}),Object(O.jsx)("button",{className:"login-button",onClick:this.nomemberLogin,children:"\ube44\ud68c\uc6d0 \ub85c\uadf8\uc778"}),Object(O.jsx)("button",{onClick:function(){return e.gitOauth()},children:"git \ub85c\uadf8\uc778"})]}),this.state.err?Object(O.jsx)("div",{className:"alert-box",children:this.state.err}):""]})]})}}]),n}(s.a.Component),H=Object(p.g)(C),T=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInputValue=function(e){return function(t){a.setState(Object(v.a)({},e,t.target.value))}},a.state={email:"",name:"",password:"",nickname:"",err:""},a.handleInputValue=a.handleInputValue.bind(Object(h.a)(a)),a.handleSignup=a.handleSignup.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"handleSignup",value:function(){var e=this;if(this.state.email&&this.state.name&&this.state.password&&this.state.nickname)return this.setState({err:""}),y.a.post("https://52.79.241.137:8080/signup",{email:this.state.email,name:this.state.name,password:this.state.password,nickname:this.state.nickname}).then((function(){alert("\uc544\uc774\ub514 \uc0dd\uc131 \uc644\ub8cc")})).then((function(t){e.props.history.push("/")})).catch((function(e){console.log(e)}));this.setState({err:"\ubaa8\ub4e0 \ud56d\ubaa9\uc744 \uc791\uc131\ud574 \uc8fc\uc138\uc694"})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"\ud68c\uc6d0\uac00\uc785"}),Object(O.jsxs)("div",{className:"myinfo",children:[Object(O.jsxs)("div",{children:["\uc774\uba54\uc77c",Object(O.jsx)("input",{type:"email",onChange:this.handleInputValue("email")})]}),Object(O.jsxs)("div",{children:["\uc774\ub984",Object(O.jsx)("input",{onChange:this.handleInputValue("name")})]}),Object(O.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638",Object(O.jsx)("input",{type:"password",onChange:this.handleInputValue("password")})]}),Object(O.jsxs)("div",{children:["\ub2c9\ub124\uc784",Object(O.jsx)("input",{onChange:this.handleInputValue("nickname")})]}),Object(O.jsx)("div",{children:Object(O.jsx)(g.b,{to:"/signin",children:"\uc774\ubbf8 \uc544\uc774\ub514\ub97c \uac16\uace0 \uacc4\uc2e0\uac00\uc694?"})}),Object(O.jsx)("button",{onClick:this.handleSignup,className:"signupBtn",children:"\ud68c\uc6d0\uac00\uc785"}),Object(O.jsx)("div",{children:this.state.err})]})]})}}]),n}(s.a.Component),w=Object(p.g)(T),L=n(36);var I=Object(p.g)((function(e){var t=e.userData,n=e.deleteHand,s=Object(a.useState)(""),i=Object(L.a)(s,2),c=i[0],r=i[1],l=Object(p.f)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"\ub9c8\uc774\ud398\uc774\uc9c0"}),Object(O.jsxs)("div",{className:"myinfo",children:[Object(O.jsxs)("div",{children:[" \uc774\uba54\uc77c  : ",t.email," "]}),Object(O.jsxs)("div",{children:[" \uc774\ub984   : ",t.name," "]}),Object(O.jsxs)("div",{children:[" \ub2c9\ub124\uc784 : ",t.nickname," "]}),t.friend?Object(O.jsxs)("div",{children:["\uad00\uc2ec\uc788\ub294 \uc0ac\ub78c : ",t.friend]}):"",Object(O.jsxs)("div",{children:["\uc0dd\uc131\uc77c : ",t.createdAt]}),Object(O.jsxs)("div",{className:"btcollect3",children:[Object(O.jsx)("button",{onClick:function(){l.push("/")},children:" \uba54\uc778\ud398\uc774\uc9c0"}),!1===t.isGit?Object(O.jsxs)("span",{children:[Object(O.jsx)("button",{onClick:function(){l.push("/editpassword")},children:" \ube44\ubc00\ubc88\ud638 \ubcc0\uacbd "}),Object(O.jsx)("button",{onClick:n,children:"\ud68c\uc6d0 \ud0c8\ud1f4"}),Object(O.jsxs)("div",{className:"addfriend",children:[Object(O.jsx)("input",{onChange:function(e){return function(e){r(e.target.value)}(e)}}),Object(O.jsx)("button",{onClick:function(){y.a.post("https://52.79.241.137:8080/addfriend",{name:t.name,friendId:c}).then((function(e){l.push("/bye"),l.push("/mypage")}))},children:"\uad00\uc2ec \uac16\uae30"})]})]}):""]})]})]})})),N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInputValue=function(e){return function(t){a.setState(Object(v.a)({},e,t.target.value))}},a.state={Password:"",EditPassword:"",err:""},a.handleInputValue=a.handleInputValue.bind(Object(h.a)(a)),a.ClickEdithandle=a.ClickEdithandle.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"ClickEdithandle",value:function(){var e=this,t=this.props.userData,n=this.state,a=n.Password,s=n.EditPassword;if(a&&s)return this.setState({err:""}),y.a.post("https://52.79.241.137:8080/editpw",{email:t.email,password:s}).then((function(t){e.props.history.push("/mypage")})).catch((function(e){console.log(e)}));this.setState({err:"\ubaa8\ub450 \uc791\uc131"})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"\ube44\ubc00\ubc88\ud638 \uc218\uc815"}),Object(O.jsxs)("div",{className:"myinfo",children:[Object(O.jsxs)("div",{children:["\ube44\ubc00\ubc88\ud638 ",Object(O.jsx)("input",{type:"password",onChange:this.handleInputValue("Password")})]}),Object(O.jsxs)("div",{children:["\ubc14\uafc0 \ube44\ubc00\ubc88\ud638 ",Object(O.jsx)("input",{type:"password",onChange:this.handleInputValue("EditPassword")})]}),Object(O.jsx)("span",{children:Object(O.jsx)("button",{onClick:this.ClickEdithandle,children:"\ubcc0\uacbd"})}),Object(O.jsx)("span",{children:Object(O.jsx)("button",{onClick:function(){e.props.history.push("/mypage")},children:"\ucde8\uc18c"})}),this.state.err?Object(O.jsx)("div",{className:"alert-box",children:this.state.err}):""]})]})}}]),n}(s.a.Component),D=Object(p.g)(N),S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInputValue=function(e){return function(t){a.setState(Object(v.a)({},e,t.target.value))}},a.state={title:"",text:""},a.handleInputValue=a.handleInputValue.bind(Object(h.a)(a)),a.createWrite=a.createWrite.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"createWrite",value:function(){if(this.state.title){var e={title:this.state.title,text:this.state.text,user_id:this.props.userData.email};this.props.HandleTextCreate(e),this.props.history.push("/")}else alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"\uae00 \uc4f0\uae30"}),Object(O.jsxs)("main",{className:"myinfo",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\uc81c\ubaa9"}),Object(O.jsx)("input",{id:"titleform",type:"text",onChange:this.handleInputValue("title")})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\ub0b4\uc6a9"}),Object(O.jsx)("textarea",{id:"textform",onChange:this.handleInputValue("text")})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){return e.props.history.push("/")},children:"\uc774\uc804\uc73c\ub85c"}),Object(O.jsx)("button",{onClick:this.createWrite,children:"\uc791\uc131\ud558\uae30"})]})]})]})}}]),n}(s.a.Component),V=Object(p.g)(S),_=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInputValue=function(e){return function(t){a.setState(Object(v.a)({},e,t.target.value))}},a.state={title:"",text:""},a.handleInputValue=a.handleInputValue.bind(Object(h.a)(a)),a.updateText=a.updateText.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"updateText",value:function(){var e={title:this.state.title,text:this.state.text,id:this.props.text_id};this.props.HandleTextUpdate(e),this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"bigtitle",children:"\uae00 \uc218\uc815"}),Object(O.jsxs)("main",{className:"myinfo",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\uc81c\ubaa9"}),Object(O.jsx)("input",{id:"titleform",type:"text",onChange:this.handleInputValue("title")})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\ub0b4\uc6a9"}),Object(O.jsx)("textarea",{id:"textform",onChange:this.handleInputValue("text")})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){return e.props.history.push("/")},children:"\uc774\uc804\uc73c\ub85c"}),Object(O.jsx)("button",{onClick:this.updateText,children:"\uc218\uc815\ud558\uae30"})]})]})]})}}]),n}(s.a.Component),E=Object(p.g)(_);var P=Object(p.g)((function(){var e=Object(p.f)();return Object(O.jsx)("div",{children:Object(O.jsxs)("center",{children:[Object(O.jsx)("h1",{children:"\uadf8\ub3d9\uc548 \uac10\uc0ac\ud588\uc2b5\ub2c8\ub2e4."}),Object(O.jsx)("button",{onClick:function(){e.push("/")},children:" \uba54\uc778\ud398\uc774\uc9c0\ub85c"})]})})})),U=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLogin:!1,userData:null,text:null,text_id:null,accessToken:""},a.loginHandler=a.loginHandler.bind(Object(h.a)(a)),a.logoutHandler=a.logoutHandler.bind(Object(h.a)(a)),a.nomemberLoginHandler=a.nomemberLoginHandler.bind(Object(h.a)(a)),a.deleteHand=a.deleteHand.bind(Object(h.a)(a)),a.HandleTextDelete=a.HandleTextDelete.bind(Object(h.a)(a)),a.HandleTextIdThrow=a.HandleTextIdThrow.bind(Object(h.a)(a)),a.HandleTextCreate=a.HandleTextCreate.bind(Object(h.a)(a)),a.HandleTextUpdate=a.HandleTextUpdate.bind(Object(h.a)(a)),a.getAccessToken=a.getAccessToken.bind(Object(h.a)(a)),a.getGitHubUserInfo=a.getGitHubUserInfo.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new URL(window.location.href).searchParams.get("code");t&&this.getAccessToken(t),y.a.get("https://52.79.241.137:8080/contents").then((function(e){return y.a.get("https://52.79.241.137:8080/contents")})).then((function(t){e.setState({text:t.data.data})})),document.querySelector("title").innerHTML="Simpletask"}},{key:"getAccessToken",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("https://52.79.241.137:8080/callback",{authorizationCode:t});case 2:n=e.sent,this.setState({isLogin:!0,accessToken:n.data.accessToken}),this.getGitHubUserInfo();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGitHubUserInfo",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a,s,i,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.accessToken,e.next=3,y.a.get("https://api.github.com/user",{headers:{authorization:"token ".concat(t)}});case 3:n=e.sent,a=n.data,s=a.email,i=a.login,c=a.name,r=a.created_at,this.setState({userData:{isGit:!0,email:s,name:i,nickname:c,createdAt:r}}),this.props.history.push("/");case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loginHandler",value:function(e){this.setState({isLogin:!0,userData:e})}},{key:"logoutHandler",value:function(){var e=this;y.a.post("https://52.79.241.137:8080/signout").then((function(){e.setState({isLogin:!1,userData:null})}))}},{key:"nomemberLoginHandler",value:function(){this.setState({isLogin:!0})}},{key:"deleteHand",value:function(){var e=this;this.props.history.push("/bye"),y.a.post("https://52.79.241.137:8080/deleteid",{email:this.state.userData.email}).then((function(){e.setState({isLogin:!1,userData:null})})).then((function(){})).catch((function(e){return console.log(e)}))}},{key:"HandleTextCreate",value:function(e){var t=this;y.a.post("https://52.79.241.137:8080/create",e).then((function(){t.componentDidMount()})).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"HandleTextIdThrow",value:function(e){this.setState({text_id:e})}},{key:"HandleTextUpdate",value:function(e){var t=this;y.a.post("https://52.79.241.137:8080/edit",e).then((function(){t.componentDidMount()})).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"HandleTextDelete",value:function(e){var t=this;y.a.post("https://52.79.241.137:8080/delete",{id:e}).then((function(){t.componentDidMount()})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state;t.isLogin,t.accessToken;return Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(f,{isLogin:e.state.isLogin,texts:e.state.text,userData:e.state.userData,logoutHandler:e.logoutHandler,HandleTextDelete:e.HandleTextDelete,HandleTextIdThrow:e.HandleTextIdThrow})}}),Object(O.jsx)(p.a,{exact:!0,path:"/signin",render:function(){return Object(O.jsx)(H,{loginHandler:e.loginHandler,textHandler:e.textHandler,nomemberLoginHandler:e.nomemberLoginHandler})}}),Object(O.jsx)(p.a,{exact:!0,path:"/signup",render:function(){return Object(O.jsx)(w,{})}}),Object(O.jsx)(p.a,{exact:!0,path:"/mypage",render:function(){return Object(O.jsx)(I,{isLogin:e.state.isLogin,userData:e.state.userData,ViewEdit:e.ViewEdit,deleteHand:e.deleteHand,accessToken:e.state.accessToken})}}),Object(O.jsx)(p.a,{exact:!0,path:"/editpassword",render:function(){return Object(O.jsx)(D,{userData:e.state.userData})}}),Object(O.jsx)(p.a,{exact:!0,path:"/writeform",render:function(){return Object(O.jsx)(V,{userData:e.state.userData,HandleTextCreate:e.HandleTextCreate})}}),Object(O.jsx)(p.a,{exact:!0,path:"/updateform",render:function(){return Object(O.jsx)(E,{userData:e.state.userData,text_id:e.state.text_id,HandleTextUpdate:e.HandleTextUpdate})}}),Object(O.jsx)(p.a,{exact:!0,path:"/bye",render:function(){return Object(O.jsx)(P,{})}})]})}}]),n}(s.a.Component),A=Object(p.g)(U),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(g.a,{children:Object(O.jsx)(A,{})}),document.getElementById("root")),G()}},[[71,1,2]]]);
//# sourceMappingURL=main.5f1af126.chunk.js.map