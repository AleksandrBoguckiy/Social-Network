(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{10:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3HL6Q",dialogItems:"Dialogs_dialogItems__2hXmi",dialog:"Dialogs_dialog__3NGwS",active:"Dialogs_active__2pCEZ",messages:"Dialogs_messages__1LhXf",message:"Dialogs_message__1JSVf",btn:"Dialogs_btn__2i5Fj",btn1:"Dialogs_btn1__1fiWU",inputForm:"Dialogs_inputForm__1XW_G"}},13:function(e,t,s){e.exports={wrapper:"Users_wrapper__2tSKP",data:"Users_data__1wmxT",data_name:"Users_data_name__I7Pm0",users:"Users_users__HpTfZ",avatar:"Users_avatar__2Hymy",btn:"Users_btn__3jZ72",btn1:"Users_btn1__r-Imd",btn2:"Users_btn2__8SBke",selectedPage:"Users_selectedPage__1ZPUm",pageItems:"Users_pageItems__17Won"}},18:function(e,t,s){e.exports={item:"Post_item__lh-bJ",post:"Post_post__MUDhz",likes:"Post_likes__2X6Wr"}},21:function(e,t,s){e.exports={header:"ProfileInfo_header__2ihKt",avatar:"ProfileInfo_avatar__1_n50",fullUser:"ProfileInfo_fullUser__2e85Z",status:"ProfileInfo_status__2t0-2",edit_status:"ProfileInfo_edit_status__3aoQy"}},22:function(e,t,s){e.exports={btn:"MyPosts_btn__2A8wp",btn1:"MyPosts_btn1__L7i7Z",posts:"MyPosts_posts__21iIu"}},37:function(e,t,s){e.exports={header:"Header_header__1vvEd",loginBlock:"Header_loginBlock__nN5c5",active:"Header_active__SuNiH"}},38:function(e,t,s){e.exports={avatar:"Profile_avatar__3GTbY",content:"Profile_content__1i339",item:"Profile_item__30Udl"}},39:function(e,t,s){e.exports={news:"News_news__3ljbT"}},40:function(e,t,s){e.exports={music:"Music_music__WS4R4"}},41:function(e,t,s){e.exports={settings:"Settings_settings__1HYMI"}},42:function(e,t,s){e.exports={friends:"MyFriends_friends__3Bs4y"}},5:function(e,t,s){e.exports={nav:"Navbar_nav__2AtOy",item:"Navbar_item__FG8SS",active:"Navbar_active__ZPZcb",myFriends:"Navbar_myFriends__hVZpF"}},52:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,79)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))},n=s(27),c=s(15),i=s(4),r=s(78),v="ADD-POST",P="UPDATE-NEW-POST-TEXT",o={posts:[{id:Object(r.a)(),post:"Hello my friends. I'm hear!",likesCount:15},{id:Object(r.a)(),post:"I'm fine!",likesCount:9}],newPostText:""},U="ADD-MESSAGE",l="UPDATE-NEW-MESSAGE-TEXT",d={dialogs:[{id:Object(r.a)(),name:"Oleg"},{id:Object(r.a)(),name:"Egor"},{id:Object(r.a)(),name:"Maria"},{id:Object(r.a)(),name:"Aleksandr"},{id:Object(r.a)(),name:"Ruslan"},{id:Object(r.a)(),name:"Irina"}],messages:[{id:Object(r.a)(),message:"Hi!"},{id:Object(r.a)(),message:"How are you?"},{id:Object(r.a)(),message:"Hey, are you there?"},{id:Object(r.a)(),message:"Hello Friend! Yes I am listening to you!"}],newMessageText:""},j={myFriends:[{id:Object(r.a)(),name:"Maria"},{id:Object(r.a)(),name:"Alex"},{id:Object(r.a)(),name:"Daria"}]},A="FOLLOW",u="UNFOLLOW",b="SET-USERS",m={users:[]},g=Object(n.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var s={id:Object(r.a)(),post:e.newPostText,likesCount:2};return Object(i.a)(Object(i.a)({},e),{},{posts:[s].concat(Object(c.a)(e.posts)),newPostText:""});case P:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newText});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:var s={id:Object(r.a)(),message:e.newMessageText};return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(c.a)(e.messages),[s]),newMessageText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{newMessageText:t.newText});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case b:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(c.a)(e.users),Object(c.a)(t.users))});default:return e}}}),f=Object(n.b)(g);window.store=f;var x=s(19),p=s.n(x),O=s(1),h=s.n(O),w=(s(52),s.p+"static/media/HeaderPicture.3eb5f734.png"),N=s(37),C=s.n(N),T=s(0);function y(){return Object(T.jsx)("div",{className:C.a.header,children:Object(T.jsx)("img",{src:w,alt:"Logo"})})}var _=s(38),D=s.n(_),I=s.p+"static/media/HeaderMainContentPicture.5d41c4c1.png",F=s(21),L=s.n(F),G=s.p+"static/media/Avatar.a7b1d287.jpg",H=function(){return Object(T.jsxs)("div",{className:L.a.wrapper,children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{className:L.a.header,src:I,alt:"HeaderPicture"})}),Object(T.jsx)("div",{children:Object(T.jsx)("img",{className:L.a.avatar,src:G,alt:"AvatarPicture"})})]})},E=s(14),M=s(18),B=s.n(M),W=function(e){return Object(T.jsx)("div",{className:B.a.posts,children:Object(T.jsxs)("div",{className:B.a.item,children:[Object(T.jsx)("img",{src:G,alt:"AvatarPicture"}),Object(T.jsx)("div",{className:B.a.post,children:e.post}),Object(T.jsxs)("div",{className:B.a.likes,children:[Object(T.jsx)("img",{src:"data:image/png;base64,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",alt:"Like"}),e.likesCount]})]})})},S=s(22),k=s.n(S),K=Object(E.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:v})},updateNewPostText:function(t){e(function(e){return{type:P,newText:e}}(t))}}}))((function(e){var t=e.posts.map((function(e){return Object(T.jsx)(W,{post:e.post,likesCount:e.likesCount},e.id)}));return Object(T.jsxs)("div",{className:k.a.posts,children:[Object(T.jsx)("h3",{children:"My posts"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewPostText(s)},placeholder:"Anything new?",value:e.newPostText})}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){e.addPost()},className:"".concat(k.a.btn," ").concat(k.a.btn1),children:"Add post"})})]}),t]})})),q=function(){return Object(T.jsxs)("div",{className:D.a.content,children:[Object(T.jsx)(H,{}),Object(T.jsx)(K,{})]})},Q=s(11),R=s(3),J=s(39),Y=s.n(J),z=function(){return Object(T.jsx)("div",{className:Y.a.news,children:"News"})},X=s(40),Z=s.n(X),V=function(){return Object(T.jsx)("div",{className:Z.a.music,children:"Music"})},$=s(41),ee=s.n($),te=function(){return Object(T.jsx)("div",{className:ee.a.settings,children:"Settings"})},se=s(10),ae=s.n(se),ne=function(e){var t="/dialogs/"+e.id;return Object(T.jsx)("div",{className:ae.a.dialog,children:Object(T.jsxs)(Q.b,{to:t,activeClassName:ae.a.active,children:[Object(T.jsx)("img",{src:G,alt:"Avatar"}),e.name]})})},ce=function(e){return Object(T.jsxs)("div",{className:ae.a.messages,children:[Object(T.jsx)("img",{src:G,alt:"Avatar"})," ",e.message]})},ie=Object(E.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{addMessage:function(){e({type:U})},updateNewMessageText:function(t){e(function(e){return{type:l,newText:e}}(t))}}}))((function(e){var t=e.dialogs.map((function(e){return Object(T.jsx)(ne,{name:e.name,id:e.id},e.id)})),s=e.messages.map((function(e){return Object(T.jsx)(ce,{message:e.message},e.id)}));return Object(T.jsxs)("div",{className:ae.a.dialogs,children:[Object(T.jsx)("div",{className:ae.a.dialogItems,children:t}),Object(T.jsx)("div",{className:ae.a.messages,children:s}),Object(T.jsxs)("div",{className:ae.a.inputForm,children:[Object(T.jsx)("div",{children:Object(T.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewMessageText(s)},placeholder:"Write a message...",value:e.newMessageText})}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){e.addMessage()},className:"".concat(ae.a.btn," ").concat(ae.a.btn1),children:"Send message"})})]})]})})),re=s(5),ve=s.n(re),Pe=s(42),oe=s.n(Pe),Ue=function(e){return Object(T.jsx)("div",{className:oe.a.friends,children:Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:G,alt:"Avatar"})," ",e.name]})})},le=Object(E.b)((function(e){return{myFriends:e.sidebar.myFriends}}),{})((function(e){var t=e.myFriends.map((function(e){return Object(T.jsx)(Ue,{name:e.name},e.id)}));return Object(T.jsxs)("nav",{className:ve.a.nav,children:[Object(T.jsx)("div",{className:"".concat(ve.a.item," ").concat(ve.a.active),children:Object(T.jsx)(Q.b,{to:"/profile",activeClassName:ve.a.active,children:"Profile"})}),Object(T.jsx)("div",{className:ve.a.item,children:Object(T.jsx)(Q.b,{to:"/users",activeClassName:ve.a.active,children:"Users"})}),Object(T.jsx)("div",{className:ve.a.item,children:Object(T.jsx)(Q.b,{to:"/dialogs",activeClassName:ve.a.active,children:"Messages"})}),Object(T.jsx)("div",{className:ve.a.item,children:Object(T.jsx)(Q.b,{to:"/news",activeClassName:ve.a.active,children:"News"})}),Object(T.jsx)("div",{className:ve.a.item,children:Object(T.jsx)(Q.b,{to:"/music",activeClassName:ve.a.active,children:"Music"})}),Object(T.jsx)("div",{className:ve.a.item,children:Object(T.jsx)(Q.b,{to:"/settings",activeClassName:ve.a.active,children:"Settings"})}),Object(T.jsxs)("div",{className:"".concat(ve.a.item," ").concat(ve.a.myFriends),children:[Object(T.jsx)(Q.b,{to:"/myFriends",activeClassName:ve.a.active,children:"My Friends"}),t]})]})})),de=s(43),je=s(44),Ae=s(47),ue=s(46),be=s(13),me=s.n(be),ge=s(45),fe=s.n(ge),xe=function(e){Object(Ae.a)(s,e);var t=Object(ue.a)(s);function s(){return Object(de.a)(this,s),t.apply(this,arguments)}return Object(je.a)(s,[{key:"componentDidMount",value:function(){var e=this;fe.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){e.props.setUsers(t.data.items)}))}},{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{className:me.a.users,children:[Object(T.jsx)("h2",{children:"Users"}),this.props.users.map((function(t){return Object(T.jsxs)("div",{className:me.a.wrapper,children:[Object(T.jsxs)("span",{children:[Object(T.jsx)("div",{className:me.a.avatar,children:Object(T.jsx)("img",{src:null!==t.photos.small?t.photos.small:G,alt:"Avatar"})}),Object(T.jsx)("div",{className:me.a.btn,children:t.followed?Object(T.jsx)("button",{className:"".concat(me.a.btn1," ").concat(me.a.btn2),onClick:function(){e.props.unfollow(t.id)},children:"Unfollow"}):Object(T.jsx)("button",{className:"".concat(me.a.btn1," ").concat(me.a.btn2),onClick:function(){e.props.follow(t.id)},children:"Follow"})})]}),Object(T.jsxs)("span",{className:me.a.data,children:[Object(T.jsxs)("span",{children:[Object(T.jsx)("div",{className:me.a.data_name,children:t.name}),Object(T.jsx)("div",{children:null!=t.status?t.status:"status not set"})]}),Object(T.jsxs)("span",{children:[Object(T.jsx)("div",{children:"u.location.country"}),Object(T.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})}}]),s}(h.a.Component),pe=Object(E.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:A,userId:e}}(t))},unfollow:function(t){e(function(e){return{type:u,userId:e}}(t))},setUsers:function(t){e(function(e){return{type:b,users:e}}(t))}}}))(xe),Oe=function(){return Object(T.jsx)(Q.a,{children:Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(y,{}),Object(T.jsx)(le,{}),Object(T.jsxs)("div",{className:"app-wrapper-content",children:[Object(T.jsx)(R.a,{path:"/profile/:userId?",render:function(){return Object(T.jsx)(q,{})}}),Object(T.jsx)(R.a,{path:"/users",render:function(){return Object(T.jsx)(pe,{})}}),Object(T.jsx)(R.a,{path:"/dialogs",render:function(){return Object(T.jsx)(ie,{})}}),Object(T.jsx)(R.a,{path:"/news",component:z}),Object(T.jsx)(R.a,{path:"/music",component:V}),Object(T.jsx)(R.a,{path:"/settings",component:te})]})]})})};p.a.render(Object(T.jsx)(E.a,{store:f,children:Object(T.jsx)(Oe,{})}),document.getElementById("root")),a()}},[[77,1,2]]]);
//# sourceMappingURL=main.4dd4a51a.chunk.js.map