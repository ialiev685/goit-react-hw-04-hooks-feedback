(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),i=c.n(s),r=c(2),o=(c(9),c(0)),l=function(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{className:"Section",children:[Object(o.jsx)("h2",{className:"Section__title",children:t}),c]})},u=(c(11),function(e){var t=e.message;return Object(o.jsx)("p",{className:"Notification",children:t})}),b=(c(12),function(e){var t=e.text,c=e.value;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:"Statistics__item",children:[t,": ",c,"positivePercentage"===t?"%":""]})})}),j=(c(13),function(e){var t=Object.keys(e),c=Object(o.jsxs)("div",{className:"Statistics",children:[Object(o.jsx)("h2",{className:"Statistics__title",children:"Statistics"}),Object(o.jsx)("ul",{className:"Statistics__list",children:t.map((function(t){return Object(o.jsx)(b,{text:t,value:e[t]},t)}))})]});return e.total>0?c:Object(o.jsx)(u,{message:"No feedback given"})}),d=(c(14),function(e){var t=e.options,c=e.onLeaveFeedback;return Object(o.jsx)("ul",{className:"FeedbackOptions-list",children:t.map((function(e){return Object(o.jsx)("li",{className:"FeedbackOptions-list__item",children:Object(o.jsx)("button",{className:"FeedbackOptions-list__button",type:"button",name:e,onClick:c,children:e})},e)}))})}),O=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),u=i[0],b=i[1],O=Object(n.useState)(0),f=Object(r.a)(O,2),h=f[0],m=f[1],x=function(){return c+u+h};return Object(o.jsxs)(l,{title:"Please leave feedback",children:[Object(o.jsx)(d,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":m((function(e){return e+1}));break;default:return}}}),Object(o.jsx)(j,{good:c,neutral:u,bad:h,total:x(),positivePercentage:Math.ceil(c/x()*100)})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.55e4e891.chunk.js.map