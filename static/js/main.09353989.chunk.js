(this["webpackJsonpfom-validation"]=this["webpackJsonpfom-validation"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(6),i=a.n(n),c=(a(11),a(12),a(0));function l(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:"Learn to code by watching others"}),Object(c.jsx)("p",{children:"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."})]})}function o(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{className:"attribution",children:["Challenge by ",Object(c.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(c.jsx)("a",{href:"#",children:"Theo Phil"})]})})}var j=a(2),d=a(4),m=a(5);function b(){var e=function(e){var t=Object(r.useState)({firstName:"",lastName:"",mail:"",password:""}),a=Object(m.a)(t,2),s=a[0],n=a[1],i=Object(r.useState)(""),c=Object(m.a)(i,2),l=c[0],o=c[1];return{data:s,handleChange:function(e){var t=e.target,a=t.name,r=t.value;n(Object(d.a)(Object(d.a)({},s),{},Object(j.a)({},a,r)))},handleSubmit:function(e){e.preventDefault(),o(function(e){var t={};return e.firstName||(t.firstName="First Name cannot be empty"),e.lastName||(t.lastName="Last Name cannot be empty"),e.password||(t.password="Password cannot be empty"),e.mail?e.mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)||(t.mail="Looks like this is not an email"):t.mail="Email cannot be empty",t}(s))},errors:l}}(),t=e.data,a=e.handleChange,s=e.handleSubmit,n=e.errors;return Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsx)("div",{className:"form-section-msg",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Try it free 7 days"})," then $20/mo. thereafter"]})}),Object(c.jsxs)("form",{onSubmit:s,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",name:"firstName",value:t.firstName,placeholder:"First Name",onChange:a}),Object(c.jsx)("p",{className:"error-field",children:n.firstName}),n.firstName&&Object(c.jsx)("i",{className:"ri-error-warning-fill"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",name:"lastName",value:t.lastName,placeholder:"Last Name",onChange:a}),Object(c.jsx)("p",{className:"error-field",children:n.lastName}),n.lastName&&Object(c.jsx)("i",{className:"ri-error-warning-fill"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"email",name:"mail",value:t.mail,placeholder:"Email Address",onChange:a}),Object(c.jsx)("p",{className:"error-field",children:n.mail}),n.mail&&Object(c.jsx)("i",{className:"ri-error-warning-fill"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"password",name:"password",value:t.password,placeholder:"Password",onChange:a}),Object(c.jsx)("p",{className:"error-field",children:n.password}),n.password&&Object(c.jsx)("i",{className:"ri-error-warning-fill"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Claim your free trial"})}),Object(c.jsx)("p",{children:Object(c.jsxs)("small",{children:["By clicking the button, you are agreeing to our ",Object(c.jsx)("strong",{children:"Terms and Services"})]})})]})]})}var h=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("main",{children:[Object(c.jsx)(l,{}),Object(c.jsx)(b,{})]}),Object(c.jsx)(o,{})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),s(e),n(e),i(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.09353989.chunk.js.map