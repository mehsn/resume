(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(14),r=n.n(c),l=(n(25),n(2)),i=n(3),s=n(11),u=n(5),m=n(4),p=(n(26),n(27),n(6)),h=n(10),f=n(18),d=n.n(f),b=(n(36),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",{className:"fullPage ".concat(this.props.className||""),style:this.props.style},e)}}]),n}(a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement(b,{className:"column "},o.a.createElement("h1",{className:"title"},p.title),o.a.createElement("h1",{className:"title"},p.subtitle),o.a.createElement("div",null,Object.keys(p.links).map((function(e){return o.a.createElement("span",{className:"professionIcon"},o.a.createElement(h.SocialIcon,{url:p.links[e]}))}))),e)}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement(b,{className:"column"},o.a.createElement("h1",{className:"title"},p.section[0].title),o.a.createElement("p",{className:"profession"},o.a.createElement("h4",null,p.section[0].items[0].contents[0]),o.a.createElement("h3",null,p.section[0].items[0].contents[1]),o.a.createElement("h2",null,p.section[0].items[0].contents[2]),o.a.createElement("h2",null,p.section[0].items[0].contents[3])),e)}}]),n}(a.Component),k=(n(37),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.skill;return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-top"},o.a.createElement("img",{className:"card-img",src:e.contents.image})),o.a.createElement("div",{className:"card-bottom"},o.a.createElement("h3",null,e.contents.title," ")))}}]),n}(a.Component)),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement(b,{className:"column"},o.a.createElement("h3",{style:{marginTop:"100px"}},p.section[1].title),o.a.createElement("div",{className:"row"},p.section[1].items.map((function(e){return o.a.createElement(k,{skill:e})}))),e)}}]),n}(a.Component),y=(n(38),n(39),n(0),n(7)),O=n.n(y),j=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.children;this.props.color.color;return o.a.createElement("div",{className:"bar ".concat(this.props.className||""),style:this.props.style},o.a.createElement("div",{className:"left-bar"},o.a.createElement("div",null,e[0])),e[1])}}]),n}(a.Component),N=n(15),C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).colorRand=function(){var t=["white","black","red","aqua"][Math.floor(4*Math.random())];e.setState({color:t}),console.log(e.state.color)},e.backgroundColorRand=function(){var t=["AliceBlue","AntiqueWhite","Olive","OliveDrab","Orange","beige","brown","blue","red","yellow"][Math.floor(10*Math.random())];e.setState({backgroundColor:t})},e.state={color:"white"},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.children;return o.a.createElement("div",{className:"main-page ".concat(this.props.className||""),style:(this.props.style,{backgroundColor:this.state.backgroundColor,color:this.state.color,textShadow:"1px 1px 1px #000"})},o.a.createElement(j,{color:this.state.color},o.a.createElement(N.a,{className:"pointer",style:{cursor:"pointer",boxShadow:"1px 1px 1px #010"},onClick:function(){e.colorRand(),e.backgroundColorRand()},color:this.state.color}),t[0]),t[1],t[2],t[3])}}]),n}(a.Component),w=n(16),x=n(19),S=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).scrollToTopWithCallback=a.scrollToTopWithCallback.bind(Object(s.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){O()(this.Blue,{offset:0,align:"middle",duration:500,ease:"inCirc"})}},{key:"scrollToTopWithCallback",value:function(){O()(this.Tsection,{offset:0,align:"top",duration:1500}).on("end",(function(){return console.log("Scrolling end!")}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,{flakesMaxActive:"50"}),o.a.createElement(C,null,o.a.createElement("div",{className:"right-bar"},o.a.createElement("div",{className:"about-btn",type:"button",onClick:function(){return O()(e.Asection,{offset:0,align:"bottom",duration:500,ease:"inExpo"})},style:{color:this.props.color}},"about"),o.a.createElement("div",{className:"skill-btn",type:"button",style:{color:this.props.color},onClick:function(){return O()(e.Ssection,{offset:0,align:"bottom",duration:500,ease:"inExpo"})}},"skill")),o.a.createElement(v,{color:"",backgroundColor:"",ref:function(t){e.Tsection=t}},o.a.createElement(w.a,{className:"blink infinite ",onClick:function(){return O()(e.Asection,{offset:0,align:"bottom",duration:500,ease:"inExpo"})},style:{fontSize:"2em",cursor:"pointer",marginTop:"50px"}})),o.a.createElement(g,{ref:function(t){e.Asection=t},color:"",backgroundColor:""},o.a.createElement(w.a,{className:"blink infinite ",onClick:function(){return O()(e.Ssection,{offset:0,align:"bottom",duration:500,ease:"inExpo"})},style:{fontSize:"2em",cursor:"pointer",marginTop:"50px"}})),o.a.createElement(E,{color:"",ref:function(t){e.Ssection=t},backgroundColor:""},o.a.createElement("div",null,o.a.createElement(x.a,{onClick:this.scrollToTopWithCallback,className:"blink infinite ",style:{fontSize:"2em",cursor:"pointer"}})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"title":"Hello , I\'m hsn","subtitle":"js dev | react | css | html ","links":{"stackOverflow":"https://stackoverflow.com/story/mihsn","github":"https://github.com/mehsn","mail":"hsn@gmail.com"},"section":[{"title":"About","items":[{"type":"Hello , I\'m hsn","contents":["My first name is hsn","I like programming very much","I always try to achieve the best result","I believe that thanks to God, we can succeed with hope and perseverance"]}]},{"title":"skills","items":[{"type":"card","contents":{"image":"./img/js.png","title":"js"}},{"type":"card","contents":{"image":"./img/react.png","title":"react"}},{"type":"card","contents":{"image":"./img/css.png","title":"css"}},{"type":"card","contents":{"image":"./img/html.png","title":"html"}}]}]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.91556542.chunk.js.map