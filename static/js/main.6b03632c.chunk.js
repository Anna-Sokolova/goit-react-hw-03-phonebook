(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={labelFilter:"Filter_labelFilter__3g0oF",inputFilter:"Filter_inputFilter__1tp74"}},14:function(t,e,n){t.exports={title:"Title_title__1GtbF"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3fjXf",formField:"ContactForm_formField__2X3gy",formLabel:"ContactForm_formLabel__1G55B",formInput:"ContactForm_formInput__1Bgu5",btnSubmit:"ContactForm_btnSubmit__1fyfv"}},21:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__3Go7_",item:"ContactList_item__2U7TZ",divider:"ContactList_divider__Bg_Uq",tel:"ContactList_tel__eTQE9",btnDelete:"ContactList_btnDelete__1-hc4"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),s=(n(21),n(16)),o=n(5),l=n(6),u=n(9),m=n(8),b=n(13),d=n.n(b),f=n(14),j=n.n(f),h=n(0),p=function(t){var e=t.title;return Object(h.jsx)("h2",{className:j.a.title,children:e})};p.defaultProps={title:""};var v=p,O=n(15),_=n(7),x=n(2),g=n.n(x),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),""===t.state.name.trim()||""===t.state.number.trim())return alert("Please enter valid information!"),void t.reset();t.props.onSubmit(Object(O.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:g.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:g.a.formField,children:Object(h.jsxs)("label",{className:g.a.formLabel,children:["Name",Object(h.jsx)("input",{className:g.a.formInput,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleInputChange})]})}),Object(h.jsx)("div",{className:g.a.formField,children:Object(h.jsxs)("label",{className:g.a.formLabel,children:["Number",Object(h.jsx)("input",{className:g.a.formInput,type:"tel",name:"number",placeholder:"Enter phone",value:n,onChange:this.handleInputChange})]})}),Object(h.jsx)("button",{type:"submit",className:g.a.btnSubmit,children:"Add contact"})]})}}]),n}(a.Component);C.defaultProps={name:"",number:""};var F=C,N=n(3),y=n.n(N),S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ol",{className:y.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:y.a.item,children:[Object(h.jsxs)("p",{children:[a,Object(h.jsx)("span",{className:y.a.divider,children:":"}),Object(h.jsx)("span",{className:y.a.tel,children:c})]}),Object(h.jsx)("button",{type:"button",className:y.a.btnDelete,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},L=n(11),k=n.n(L),I=function(t){var e=t.valueFilter,n=t.onChangeFilter;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("label",{className:k.a.labelFilter,children:["Find contacts by name",Object(h.jsx)("input",{className:k.a.inputFilter,type:"text",value:e,onChange:n})]})})},D=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts!"));else{var n={id:d.a.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredByName=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredByName();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(v,{title:"Phonebook"}),Object(h.jsx)(F,{onSubmit:this.addContact}),Object(h.jsx)("div",{className:"container",children:e.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{title:"Contacts"}),Object(h.jsx)(I,{valueFilter:n,onChangeFilter:this.changeFilter}),Object(h.jsx)(S,{contacts:a,onDeleteContact:this.deleteContact})]})})]})}}]),n}(a.Component);D.defaultProps={contacts:[],filter:""};var w=D;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6b03632c.chunk.js.map