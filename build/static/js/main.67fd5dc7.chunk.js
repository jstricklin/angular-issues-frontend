(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(39)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/angularjs-logo.d927cf1a.png"},28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),l=a.n(r),c=(a(22),a(23),a(4)),i=a(5),u=a(7),o=a(6),m=a(8),p=a(24),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header position-fixed d-flex align-items-center justify-content-center p-3"},s.a.createElement("div",{className:"d-flex col-10 justify-content-between align-items-center"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("div",null,s.a.createElement("img",{className:"logo",src:p,alt:"angular-logo"})),s.a.createElement("h3",{className:"title"},"Angular Issues Tracker")),s.a.createElement("p",null,"A Coding Assessment for Levels Beyond")))}}]),t}(n.Component),f=a(40),E=a(13),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"issue"},s.a.createElement("div",{className:"issue-header border-bottom p-0 pb-1 m-0 d-flex justify-content-between"},s.a.createElement("div",{className:"issue-thumb-data mr-3 text-left"},s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Issue: "),this.props.issue.title),s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Created: "),E(this.props.issue.created_at).fromNow()),s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Updated: "),E(this.props.issue.updated_at).fromNow()),s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Assignees:")," ",this.props.issue.assignees.length)),s.a.createElement("div",{className:"user"},s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Creator: ")," ",this.props.issue.user.login),s.a.createElement("img",{src:this.props.issue.user.avatar_url,className:"user-avatar",alt:"user avatar"}))),s.a.createElement(f.a,{to:"".concat(this.props.issue.id)},"Click here for more info"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"issues-container col-12 mx-auto d-flex justify-content-center flex-wrap"},this.props.issues.map(function(t){return s.a.createElement("div",{key:t.id,className:"issue-group-item"},s.a.createElement(h,{fragment:e.props.fragment,issue:t}))}))}}]),t}(n.Component),g=(a(28),a(29),a(30),function(e){return s.a.createElement("div",{className:"col-8 mx-auto"},s.a.createElement("div",{className:"col-12 text-left p-0 pt-5 pb-3 content-title border-bottom "},s.a.createElement("h5",null,"Recent Angular Github Issues")),e.loading?s.a.createElement("h3",null,"loading..."):s.a.createElement(v,{loading:e.loading,fragment:e.location.hash,issues:e.issues}))}),b=a(42),N=a(41),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"issue"},s.a.createElement(f.a,{to:"/"},"\u2190 Go Back"),s.a.createElement("div",{className:"issue-header border-bottom p-0 m-0 d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"issue-info text-left"},s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Issue: "),this.props.issue.title),s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Issue URL:")," ",s.a.createElement("a",{href:this.props.issue.html_url},this.props.issue.html_url)," "),s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"State:")," ",this.props.issue.state)),s.a.createElement("div",{className:"m-1 user"},s.a.createElement("h6",null,"User ID"),s.a.createElement("p",null,this.props.issue.user.login),s.a.createElement("img",{src:this.props.issue.user.avatar_url,className:"user-avatar",alt:"user avatar"}))),s.a.createElement("div",{className:"issue-body mt-3 d-flex flex-wrap justify-content-around"},s.a.createElement("div",{className:"assignees mx-1"},s.a.createElement("h5",{className:"text-center"},"Assignees"),s.a.createElement("div",{className:"d-flex my-3 flex-wrap justify-content-around"},this.props.issue.assignee?this.props.issue.assignees.map(function(e){return s.a.createElement("div",{className:"m-1 user text-center"},s.a.createElement("p",null,e.login),s.a.createElement("img",{src:e.avatar_url,className:"user-avatar",alt:"user avatar"}))}):s.a.createElement("p",{className:"text-center"},"None"))),s.a.createElement("div",{className:"issue-body-text text-center mx-1"},s.a.createElement("h5",null,"Issue Message"),s.a.createElement("p",null,this.props.issue.body))))}}]),t}(n.Component),j=[{path:"/:id",component:function(e){var t=e.location.pathname.slice(1),a=e.issues.filter(function(e){return e.id===+t})[0];return s.a.createElement("div",{className:"col-8 mx-auto pt-4"},s.a.createElement("div",{className:"col-12 d-flex p-0 pt-3 pb-3 my-3 justify-content-between border-bottom"},s.a.createElement("h5",null,"Issue ID: ",t),s.a.createElement("h5",null,a?a.title:null)),a?s.a.createElement(x,{pathID:t,issue:a}):s.a.createElement("h1",null,"Loading Issue..."))}}],O=function(e){return s.a.createElement(b.a,{path:e.path,render:function(t){return s.a.createElement(e.component,Object.assign({},t,{issues:e.data.issues}))}})},y=function(e){return s.a.createElement(N.a,null,s.a.createElement("div",null,j.map(function(t,a){return s.a.createElement(O,Object.assign({key:a},t,{data:e}))}),s.a.createElement(b.a,{path:"/",exact:!0,render:function(t){return s.a.createElement(g,Object.assign({},t,{issues:e.issues}))}})))},w=a(13),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={issuesArr:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null),s.a.createElement("div",{className:"main pt-5 container-flex pt-3"},s.a.createElement(y,{loading:this.state.loading,issues:this.state.issuesArr})))}},{key:"componentDidMount",value:function(){var e=this,t=new Date;t.setDate(t.getDate()-7);var a=w(t).toISOString();return fetch("".concat("https://api.github.com/repos/angular/angular/issues","?since=").concat(a,"&sort=created")).then(function(e){return e.json()}).then(function(t){e.setState(function(e){return{issuesArr:t,loading:!1}})})}}]),t}(n.Component);a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.67fd5dc7.chunk.js.map