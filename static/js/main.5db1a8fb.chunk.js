(this["webpackJsonpmy-amazon-clone"]=this["webpackJsonpmy-amazon-clone"]||[]).push([[0],{100:function(e,A){},102:function(e,A,t){"use strict";t.r(A);var c=t(2),a=t(3),n=t.n(a),s=t(27),r=t.n(s),i=(t(61),t(50)),l=t(9),j=(t(62),t(63),t(51)),o=t.n(j),b=t(52),d=t.n(b),u=t(16),p=Object(a.createContext)(),O=function(e){var A=e.reducer,t=e.initialState,n=e.children;return Object(c.jsx)(p.Provider,{value:Object(a.useReducer)(A,t),children:n})},h=function(){return Object(a.useContext)(p)},S=t(36),m=(S.a.initializeApp({apiKey:"AIzaSyBDo8cCGczYMJRBCg9h30GeSLmXn-nZ-Eg",authDomain:"clone-854fe.firebaseapp.com",projectId:"clone-854fe",storageBucket:"clone-854fe.appspot.com",messagingSenderId:"13063879645",appId:"1:13063879645:web:dd6b34e6001d00c5e51434",measurementId:"G-NVB116T54Y"}).firestore(),S.a.auth());var g=function(){var e=h(),A=Object(l.a)(e,2),t=A[0],a=t.basket,n=t.user;return A[1],Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("img",{className:"header__logo",src:"https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"})}),Object(c.jsxs)("div",{className:"header__search",children:[Object(c.jsx)("input",{className:"header__searchInput",type:"text"}),Object(c.jsx)(o.a,{className:"header__searchIcon"})]}),Object(c.jsxs)("div",{className:"header__nav",children:[Object(c.jsx)(u.b,{to:!n&&"/login",children:Object(c.jsxs)("div",{onClick:function(){n&&m.signOut()},className:"header__option",children:[Object(c.jsxs)("span",{className:"header_optionLineOne",children:["hello ",n?n.email:"Guest"]}),Object(c.jsx)("span",{className:"header_optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header_optionLineOne",children:"return"}),Object(c.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]}),Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header_optionLineOne",children:"your"}),Object(c.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]}),Object(c.jsx)(u.b,{to:"/checkout",children:Object(c.jsxs)("div",{className:"header__optionBasket",children:[Object(c.jsx)(d.a,{}),Object(c.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};t(72),t(73);var x=function(e){var A=e.id,t=e.title,a=e.image,n=e.price,s=e.rating,r=h(),i=Object(l.a)(r,2),j=(i[0].basket,i[1]);return Object(c.jsxs)("div",{className:"product",children:[Object(c.jsxs)("div",{className:"product__info",children:[Object(c.jsx)("p",{children:t}),Object(c.jsxs)("p",{className:"product__price",children:[Object(c.jsx)("small",{children:"$"}),Object(c.jsx)("strong",{children:n})]}),Object(c.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,A){return Object(c.jsx)("p",{children:"\u2b50"})}))})]}),Object(c.jsx)("img",{src:a,alt:""}),Object(c.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:A,title:t,image:a,price:n,rating:s}})},children:"Add To Basket"})]})};var F=function(){return Object(c.jsx)("div",{className:"home",children:Object(c.jsxs)("div",{className:"home__container",children:[Object(c.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(x,{id:"12321341",title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",price:29.99,image:"https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg",rating:5}),Object(c.jsx)(x,{id:"49538094",title:"Keenwood Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough hook and Wisky, 5 litre",price:239,image:"data:image/jpeg;base64,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",rating:4})]}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(x,{id:"49538094",title:"Samsung Curved LED monitor",price:198.9,image:"data:image/jpeg;base64,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",rating:4}),Object(c.jsx)(x,{id:"4903850",title:"amazon echo smart speaker with alexa",price:198.9,image:"data:image/jpeg;base64,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",rating:5}),Object(c.jsx)(x,{id:"654646561",title:"New Apple iPod Pro",price:999.9,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGwXFCs7mD8C3gMc-sW3GLekBO3wku9KFPg&usqp=CAU",rating:4})]}),Object(c.jsx)("div",{className:"home__row",children:Object(c.jsx)(x,{id:"654646561",title:"HP 34-inch Curved Ultra-Thin Bezel Less QHD IPS Monitor",price:458.9,image:"https://images-na.ssl-images-amazon.com/images/I/71fRqdnW%2BPL._SX679_.jpg",rating:4})})]})})},E=t(10),R=(t(74),t(75),t(30)),B=t.n(R),k=t(37),v=t(22),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,A){return A.price+e}),0)},N=function(e,A){switch(A.type){case"ADD_TO_BASKET":return Object(v.a)(Object(v.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[A.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===A.id})),c=Object(k.a)(e.basket);return t>=0?c.splice(t,1):console.warn("Cant remove product (id: ".concat(A.id,") as it is not in basket!")),Object(v.a)(Object(v.a)({},e),{},{basket:c});case"SET_USER":return Object(v.a)(Object(v.a)({},e),{},{user:A.user});default:return e}};var f=function(){var e=Object(E.f)(),A=h(),t=Object(l.a)(A,2),a=t[0].basket;return t[1],Object(c.jsxs)("div",{className:"subtotal",children:[Object(c.jsx)(B.a,{renderText:function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["Subtotal (",a.length," items): ",Object(c.jsx)("strong",{children:e})]}),Object(c.jsxs)("small",{className:"subtotal__gift",children:[Object(c.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:y(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(c.jsx)("button",{onClick:function(A){return e.push("/payment")},children:"Proceed to Checkout"})]})};t(80);var I=function(e){var A=e.id,t=e.image,a=e.title,n=e.price,s=e.rating,r=h(),i=Object(l.a)(r,2),j=(i[0].basket,i[1]);return Object(c.jsxs)("div",{className:"checkoutProduct",children:[Object(c.jsx)("img",{className:"checkoutProduct__image",src:t}),Object(c.jsxs)("div",{className:"checkoutProduct__info",children:[Object(c.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(c.jsxs)("p",{className:"checkoutProduct__price",children:[Object(c.jsx)("small",{children:"$"}),Object(c.jsx)("strong",{children:n})]}),Object(c.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,A){return Object(c.jsx)("p",{children:"\u2b50"})}))}),Object(c.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:A})},children:"Remove From Basket"})]})]})};var U=function(){var e=h(),A=Object(l.a)(e,2),t=A[0],a=t.basket,n=t.user;return A[1],Object(c.jsxs)("div",{className:"checkout",children:[Object(c.jsxs)("div",{className:"che\u0325ckout__left",children:[Object(c.jsx)("img",{className:"checkout__ad",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1zNp27_DNR_VLMn3dj-VCWG-wDmWMtSsMQ&usqp=CAU",alt:"panorama"}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email]}),Object(c.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),a.map((function(e){return Object(c.jsx)(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(c.jsx)("div",{className:"checkout__right",children:Object(c.jsx)(f,{})})]})};t(81);var K=function(){var e=Object(E.f)(),A=Object(a.useState)(""),t=Object(l.a)(A,2),n=t[0],s=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),j=i[0],o=i[1];return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("img",{className:"login__logo",src:"https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"})}),Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("h1",{children:"Sign-In"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h5",{children:"Email"}),Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("h5",{children:"Password"}),Object(c.jsx)("input",{type:"password",value:j,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:function(A){A.preventDefault(),m.signInWithEmailAndPassword(n,j).then((function(A){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__SignInButton",children:"Sign In"})]}),Object(c.jsx)("p",{children:"By Signing in you are agreed to KUNAL's fake AMAZON app"}),Object(c.jsx)("button",{onClick:function(A){A.preventDefault(),m.createUserWithEmailAndPassword(n,j).then((function(A){A&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__RegisterButton",children:"Create an Amazon Account"})]})]})},C=t(25),W=t.n(C),V=t(35),w=(t(83),t(23)),Q=t(53),L=t.n(Q).a.create({baseURL:"..."});var q=function(){var e=h(),A=Object(l.a)(e,2),t=A[0],n=t.basket,s=t.user,r=(A[1],Object(E.f)(),Object(w.useStripe)(),Object(w.useElements)(),Object(a.useState)("")),i=Object(l.a)(r,2),j=i[0],o=i[1],b=Object(a.useState)(!1),d=Object(l.a)(b,2),p=d[0],O=(d[1],Object(a.useState)(null)),S=Object(l.a)(O,2),m=S[0],g=S[1],x=Object(a.useState)(!0),F=Object(l.a)(x,2),R=F[0],k=F[1],v=Object(a.useState)(!0),N=Object(l.a)(v,2),f=(N[0],N[1]);Object(a.useEffect)((function(){(function(){var e=Object(V.a)(W.a.mark((function e(){var A;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"post",url:"/payments/create?total=".concat(100*y(n))});case 2:A=e.sent,f(A.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var U=function(){var e=Object(V.a)(W.a.mark((function e(A){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.preventDefault(),o(!0);case 2:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"payment",children:Object(c.jsxs)("div",{className:"payment__container",children:[Object(c.jsxs)("h1",{children:["Checkout (",Object(c.jsxs)(u.b,{to:"/checkout",children:[null===n||void 0===n?void 0:n.length," items"]}),")"," "]}),Object(c.jsxs)("div",{className:"payment__section",children:[Object(c.jsx)("div",{className:"payment__title",children:Object(c.jsx)("h3",{children:"Delevery Address"})}),Object(c.jsxs)("div",{className:"payment__address",children:[Object(c.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(c.jsx)("p",{children:"A2/149, Rishal Garden"}),Object(c.jsx)("p",{children:"Nangloi, New Delhi 41"})]})]}),Object(c.jsxs)("div",{className:"payment__section",children:[Object(c.jsx)("div",{className:"payment__title",children:Object(c.jsx)("h3",{children:"Review Items And Delivery"})}),Object(c.jsx)("div",{className:"payment__items",children:n.map((function(e){return Object(c.jsx)(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(c.jsxs)("div",{className:"payment__section",children:[Object(c.jsx)("div",{className:"payment__title",children:Object(c.jsx)("h3",{children:"Payment Method"})}),Object(c.jsx)("div",{className:"payment__details",children:Object(c.jsxs)("form",{onSubmit:U,children:[Object(c.jsx)(w.CardElement,{onChange:function(e){k(e.empty),g(e.error?e.error.messgae:"")}}),Object(c.jsxs)("div",{className:"payment__priceContainer",children:[Object(c.jsx)(B.a,{renderText:function(e){return Object(c.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:y(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(c.jsx)("button",{disabled:j||R||p,children:Object(c.jsx)("span",{children:j?Object(c.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),m&&Object(c.jsx)("div",{children:m})]})})]})]})})},T=t(54),G=Object(T.a)("pk_test_51HzfcuJJQMXZzizfSD08FhcGE9k6TxJVQ8Fa8x2s4Q0Y47DAWkiRiij7snblkKbFdagoaAepJJGLEcKKv6iVDcPA00SY7F48QT");var Z=function(){var e=h(),A=Object(l.a)(e,2);Object(i.a)(A[0]);var t=A[1];return Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){console.log("The User is >>>",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(E.c,{children:[Object(c.jsx)(E.a,{path:"/login",children:Object(c.jsx)(K,{})}),Object(c.jsxs)(E.a,{path:"/checkout",children:[Object(c.jsx)(g,{}),Object(c.jsx)(U,{})]}),Object(c.jsxs)(E.a,{path:"/payment",children:[Object(c.jsx)(g,{}),Object(c.jsx)(w.Elements,{stripe:G,children:Object(c.jsx)(q,{})})]}),Object(c.jsxs)(E.a,{path:"/",children:[Object(c.jsx)(g,{}),Object(c.jsx)(F,{})]})]})})})},J=(t(100),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(A){var t=A.getCLS,c=A.getFID,a=A.getFCP,n=A.getLCP,s=A.getTTFB;t(e),c(e),a(e),n(e),s(e)}))});r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(O,{initialState:{basket:[],user:null},reducer:N,children:Object(c.jsx)(Z,{})})}),document.getElementById("root")),J()},61:function(e,A,t){},62:function(e,A,t){},63:function(e,A,t){},72:function(e,A,t){},73:function(e,A,t){},74:function(e,A,t){},75:function(e,A,t){},80:function(e,A,t){},81:function(e,A,t){},83:function(e,A,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.5db1a8fb.chunk.js.map