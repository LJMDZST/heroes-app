(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{19:function(e,a,r){var t={"./dc-arrow.jpg":37,"./dc-batman.jpg":38,"./dc-black.jpg":39,"./dc-blue.jpg":40,"./dc-flash.jpg":41,"./dc-green.jpg":42,"./dc-martian.jpg":43,"./dc-robin.jpg":44,"./dc-superman.jpg":45,"./dc-wonder.jpg":46,"./marvel-captain.jpg":47,"./marvel-cyclops.jpg":48,"./marvel-daredevil.jpg":49,"./marvel-hawkeye.jpg":50,"./marvel-hulk.jpg":51,"./marvel-iron.jpg":52,"./marvel-silver.jpg":53,"./marvel-spider.jpg":54,"./marvel-thor.jpg":55,"./marvel-wolverine.jpg":56};function c(e){var a=s(e);return r(a)}function s(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id=19},37:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-arrow.15b27bc2.jpg"},38:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-batman.ab9eadc3.jpg"},39:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-black.3747c663.jpg"},40:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-blue.cc8169a3.jpg"},41:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-flash.b3922f25.jpg"},42:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-green.01c54ee1.jpg"},43:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-martian.78565f7d.jpg"},44:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-robin.ea4afe99.jpg"},45:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-superman.e9391474.jpg"},46:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-wonder.970ba2d6.jpg"},47:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-captain.d2c7774d.jpg"},48:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-cyclops.f1442408.jpg"},49:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},50:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hawkeye.1f78e874.jpg"},51:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hulk.d1af5fe5.jpg"},52:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-iron.b394df11.jpg"},53:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-silver.1d43a08b.jpg"},54:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-spider.054016b4.jpg"},55:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-thor.c63e651c.jpg"},56:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-wolverine.ee676488.jpg"},72:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(10),i=r(8),l=r(2),o=Object(t.createContext)(),d="[auth] login",u="[auth] logout",j=r(0),p=function(e){var a=e.history,r=Object(t.useContext)(o).dispatch;return Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("hr",{}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:d,payload:{name:"leax"}}),a.replace(e)},children:"Login"})]})},h=function(){var e=Object(t.useContext)(o),a=e.user,r=e.dispatch,c=Object(l.g)();return Object(j.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(j.jsx)("div",{className:"navbar-collapse",children:Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(j.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(j.jsx)("span",{className:"nav-item nav-link text-info",children:a.name}),Object(j.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:u}),c.replace("/login")},children:"Logout"})]})})]})},m=r(4),b=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=r(19),f=function(e){var a=e.id,r=e.superhero,t=e.publisher,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h5",{className:"card-title fw-bolder",children:r})}),Object(j.jsx)("img",{src:v("./".concat(a,".jpg")).default,className:"card-img-top",alt:r}),Object(j.jsxs)("div",{className:"card-body ",children:[Object(j.jsx)("p",{className:"card-text fw-bold",children:c}),c!==n&&Object(j.jsx)("small",{className:"card-text",children:n}),Object(j.jsx)("p",{className:"card-text",children:s})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between card-footer",children:[Object(j.jsx)("small",{className:"text-muted",children:t}),Object(j.jsx)(i.b,{to:"./heroe/".concat(a),children:"M\xe1s..."})]})]})})},O=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher ".concat(e," no es correcto"));return b.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(j.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn",children:r.map((function(e){return Object(j.jsx)(f,Object(m.a)({},e),e.id)}))})},g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Marvel Screen"}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{publisher:"Marvel Comics"})]})},x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"DC Screen"}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{publisher:"DC Comics"})]})},C=r(19),_=function(e){var a=e.history,r=Object(l.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,b.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(j.jsx)(l.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,o=c.first_appearance,d=c.characters;return Object(j.jsxs)("div",{className:"row mt-4 ",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{src:C("./".concat(r,".jpg")).default,alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(j.jsxs)("div",{className:"col-8 animate__animated animate__fadeInDown",children:[Object(j.jsx)("h3",{children:s}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsx)("b",{children:"Alter ego:"})," ",i," "]}),Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsx)("b",{children:"Publisher:"})," ",n," "]}),Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsx)("b",{children:"First Apareance:"})," ",o," "]})]}),Object(j.jsx)("h5",{children:"Characters"}),Object(j.jsx)("p",{children:d}),Object(j.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},N=r(23),y=r.n(N),k=r(12),w=function(e){var a=e.history,r=Object(l.h)(),c=y.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(m.a)(Object(m.a)({},c),{},Object(k.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,3),d=o[0],u=o[1],p=o[2],h=d.searchText,v=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),b.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Search Hero"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-5",children:[Object(j.jsx)("h4",{children:"Search Form"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(h)),p()},children:[Object(j.jsx)("input",{type:"text",placeholder:"Find your hero..",className:"form-control",onChange:u,name:"searchText",value:h}),Object(j.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search"})]})]}),Object(j.jsxs)("div",{className:"col-8",children:[Object(j.jsx)("h4",{children:"Results"}),Object(j.jsx)("hr",{}),v.map((function(e){return Object(j.jsx)(f,Object(m.a)({},e),e.id)}))]})]})]})},M=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"container mt-2",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/marvel",component:g}),Object(j.jsx)(l.b,{path:"/heroe/:heroeId",component:_}),Object(j.jsx)(l.b,{path:"/dc",component:x}),Object(j.jsx)(l.b,{path:"/search",component:w}),Object(j.jsx)(l.a,{to:"/marvel"})]})})]})},D=r(13),S=["isAutenticated","component"],A=function(e){var a=e.isAutenticated,r=e.component,t=Object(D.a)(e,S);return localStorage.setItem("lastPath",t.location.pathname),Object(j.jsx)(l.b,Object(m.a)(Object(m.a)({},t),{},{component:function(e){return a?Object(j.jsx)(r,Object(m.a)({},e)):Object(j.jsx)(l.a,{to:"/login"})}}))},B=["isAutenticated","component"],J=function(e){var a=e.isAutenticated,r=e.component,t=Object(D.a)(e,B);return Object(j.jsx)(l.b,Object(m.a)(Object(m.a)({},t),{},{component:function(e){return a?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)(r,Object(m.a)({},e))}}))},T=function(){var e=Object(t.useContext)(o).user;return Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(J,{isAutenticated:e.logged,exact:!0,path:"/login",component:p}),Object(j.jsx)(A,{isAutenticated:e.logged,path:"/",component:M})]})})})},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(m.a)(Object(m.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},I=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},L=function(){var e=Object(t.useReducer)(F,{},I),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(j.jsx)(o.Provider,{value:{user:r,dispatch:c},children:Object(j.jsx)(T,{})})};r(71);s.a.render(Object(j.jsx)(L,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.8d8ada0b.chunk.js.map