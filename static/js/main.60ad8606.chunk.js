(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.9f7e506d.svg"},27:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(33),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),d=a(44),p=a(45),f=a(18),E=a.n(f),v=(a(34),a(35),a(11)),h=a(42),g=a(12);function b(){var e=Object(v.a)(["\ntext-transform: capitalize;\nfont-size: 1.4rem;\nbackground: transparent;\nborder: 0.05rem solid var(--lightPink);\nborder-color: ",";\ncolor:  ",";\nborder-radius:0.5rem;\npadding: 0.2rem 0.5rem;\ncursor:pointer;\nmargin: 0.2rem 0.5rem 0.2rem 0;\ntransition: all 0.5s ease-in-out;\n&:hover{\nbackground: ",";\ncolor:var(--mainPink); \n}\n&:focus {\noutline:none;\n}\n"]);return b=function(){return e},e}var x=g.a.button(b(),function(e){return e.cart?"var(--mainYellow)":"var(--lightPink)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightPink)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightPink)"});function N(){var e=Object(v.a)(["\nbackground: var(--mainPink);\n.nav-link{\ncolor:var(--mainWhite);\nfont-size:1.3rem;\ntext-transform: capitalize;\n}\n"]);return N=function(){return e},e}var O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},r.a.createElement(h.a,{to:"/"},r.a.createElement("img",{src:E.a,alt:"store",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(h.a,{to:"/",className:"nav-link"},"Dresses"))),r.a.createElement(h.a,{to:"/cart",className:"ml-auto"},r.a.createElement(x,null,r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fas fa-cart-plus"})),"my cart")))}}]),t}(n.Component),C=g.a.nav(N()),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{className:"header-img",src:"img/bg1.jpg",alt:"background"})}}]),t}(n.Component),y=a(10),k=a(21),w=[{id:1,title:"Matilda Dress",img:"img/product-1.png",price:65,company:"Chi Chi London",info:"Be the best-dressed guest, Round neck, Lace top, Hey, fancy pants, Bow detail to reverse, Cute, right? Zip-back fastening, Regular fit ",inCart:!1,count:0,total:0},{id:2,title:"Claire Dress",img:"img/product-2.png",price:50,company:"Chi Chi London",info:"Printed Mesh Detailing, Fully Lined, Tea Dress Midi Length, Mesh Underskirt.Ideal For Events, Party, Cocktail, Evening & Bridal Occasions",inCart:!1,count:0,total:0},{id:3,title:"Cheslea Dress",img:"img/product-3.png",price:40,company:"Chi Chi London",info:"Soft cotton floral printed short dress. Perfect for outings. Available in all sizes.",inCart:!1,count:0,total:0},{id:4,title:"Mackenzie Dress",img:"img/product-4.png",price:65,company:"Chi Chi London",info:"Embroidered Mesh Detailing, Fully Lined, Tea Dress Midi Length, Mesh Underskirt. Ideal For Events, Party, Cocktail, Evening & Bridal Occasions",inCart:!1,count:0,total:0},{id:5,title:"Leia dress",img:"img/product-5.png",price:75,company:"Chi Chi London",info:"Midi dress- features an all over golden jacquard print, a fitted bodice with a high neck detail and capped sleeves, and a box pelated midi skirt. Fully lined",inCart:!1,count:0,total:0},{id:6,title:"Floral Midi Dress",img:"img/product-6.png",price:65,company:"Chi Chi London",info:"Satin sleveless Midi dress with floral print. Perfect for a dinner party or attending Wedding",inCart:!1,count:0,total:0},{id:7,title:"Maxi Dress",img:"img/product-7.png",price:90,company:"Chi Chi London",info:"Chi Chi London Women's Black Full Maxi Dress With Tile Print Placement And Cap Sleeve",inCart:!1,count:0,total:0},{id:8,title:"Bandeau prom dress",img:"img/product-8.png",price:65,company:"Chi Chi London",info:"Chi Chi london structured bandeau prom dress in overscale sunflower print multi women",inCart:!1,count:0,total:0}],M={id:1,title:"Matilda Dress",img:"img/product-1.png",price:65,company:"Chi Chi London",info:"Be the best-dressed guest, Round neck, Lace top, Hey, fancy pants, Bow detail to reverse, Cute, right? Zip-back fastening, Regular fit ",inCart:!1,count:0,total:0},P=r.a.createContext(),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],detailProduct:M,cart:[],modalOpen:!1,modalProduct:M,cartSubtotal:0,cartTax:0,cartTotal:0},a.setProducts=function(){var e=[];w.forEach(function(t){var a=Object(k.a)({},t);e=[].concat(Object(y.a)(e),[a])}),a.setState(function(){return{products:e}})},a.getItem=function(e){return a.state.products.find(function(t){return t.id===e})},a.handleDetail=function(e){var t=a.getItem(e);a.setState(function(){return{detailProduct:t}})},a.addToCart=function(e){var t=Object(y.a)(a.state.products),n=t.indexOf(a.getItem(e)),r=t[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,a.setState(function(){return{products:t,cart:[].concat(Object(y.a)(a.state.cart),[r])}},function(){a.addTotals()})},a.openModal=function(e){var t=a.getItem(e);a.setState(function(){return{modalProduct:t,modalOpen:!0}})},a.closeModal=function(){a.setState(function(){return{modalOpen:!1}})},a.increment=function(e){var t=Object(y.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count+1,c.total=c.count*c.price,a.setState(function(){return{cart:Object(y.a)(t)}},function(){a.addTotals()})},a.decrement=function(e){var t=Object(y.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count-1,0===c.count?a.removeItem(e):(c.total=c.count*c.price,a.setState(function(){return{cart:Object(y.a)(t)}},function(){a.addTotals()}))},a.removeItem=function(e){var t=Object(y.a)(a.state.products),n=Object(y.a)(a.state.cart);n=n.filter(function(t){return t.id!==e});var r=t.indexOf(a.getItem(e)),c=t[r];c.inCart=!1,c.count=0,c.total=0,a.setState(function(){return{cart:Object(y.a)(n),products:Object(y.a)(t)}},function(){a.addTotals()})},a.clearCart=function(){a.setState(function(){return{cart:[]}},function(){a.setProducts(),a.addTotals()})},a.addTotals=function(){var e=0;a.state.cart.map(function(t){return e+=t.total});var t=parseFloat((.1*e).toFixed(2)),n=e+t;a.setState(function(){return{cartSubtotal:e,cartTax:t,cartTotal:n}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(P.Provider,{value:Object(k.a)({},this.state,{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),t}(n.Component),D=P.Consumer;function L(){var e=Object(v.a)(["\n    .card{\n    border-color:transparent;\n    transition:all 1s linear;\n    }\n    .img-container img{\n    height: 15rem;\n    }\n    .card-footer{\n    background: transparent;\n    border-top: transparent;\n    transition: all 1s linear;\n    }\n    &:hover{\n    .card{\n    border: 0.04rem solid rgba(0,0,0,0.2);\n    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);\n    }\n    .card-footer{\n    background:rgba(247,247,247);\n    }\n    }\n    .img-container{\n    position: relative;\n    overflow:hidden;\n    }\n    \n    .img-container:hover .card-img-top{\n    transform:scale(1.2);\n    }\n    .card-img-top{\n    transition: all 0.5s linear;\n    }\n    .cart-btn{\n    position:absolute;\n    bottom:0;\n    right:0;\n    padding: 0.2rem 0.4rem;\n    background:var(--lightPink);\n    border:none;\n    color:var(--mainWhite);\n    font-size:1.4rem;\n    border-radius:0.5rem 0 0 0;\n    transform:translate(100%,100%);\n     transition: all 0.5s linear;\n    }\n    .img-container:hover .cart-btn{\n    transform:translate(0,0);\n    }\n    .cart-btn:hover{\n    color:var(--mainPink);\n    cursor: pointer;\n    }\n    "]);return L=function(){return e},e}var S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,c=e.price,l=e.inCart;return r.a.createElement(I,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement(D,null,function(e){return r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(h.a,{to:"/details"},r.a.createElement("img",{src:n,alt:"product",className:"card-img-top"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0}," in Cart"):r.a.createElement("i",{className:"fas fa-cart-plus"})))}),r.a.createElement("div",{className:"card-footer d-flex\r justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-pink font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"$"),c))))}}]),t}(n.Component),I=g.a.div(L());function z(e){var t=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},r.a.createElement("strong",{className:"text-pink"},t))))}var F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(z,{title:" Latest Dresses"}),r.a.createElement("div",{className:"row"},r.a.createElement(D,null,function(e){return e.products.map(function(e){return r.a.createElement(S,{key:e.id,product:e})})})))))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title\r text-uppercase pt-5"},r.a.createElement("h1",{className:"display-4"},"404"),r.a.createElement("h1",null,"error"),r.a.createElement("h2",null,"page not found"),r.a.createElement("h3",null,"the requested url",r.a.createElement("span",{className:"text-danger"},this.props.location.pathname)," ","was not found"))))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,function(e){var t=e.detailProduct,a=t.id,n=t.company,c=t.img,l=t.info,o=t.price,i=t.title,s=t.inCart;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center\r text-slanted text-pink my-5"},r.a.createElement("h1",null,i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3\r text-capitalize"},r.a.createElement("h2",null," Model : ",i," "),r.a.createElement("h4",{className:"text-title\r text-uppercase text-muted mt-3 mb-2"},"Made By : ",r.a.createElement("span",{className:"text-uppercase"},n)),r.a.createElement("h4",{className:"text-pink"},r.a.createElement("strong",null,"price : ",r.a.createElement("span",null,"$"),o)),r.a.createElement("p",{className:"text-capitalize font-weight-bold\r mt-3 mb-0"},"some info about product :"),r.a.createElement("p",{className:"text-muted lead"},l),r.a.createElement("div",null,r.a.createElement(h.a,{to:"/"},r.a.createElement(x,null,"back to products")),r.a.createElement(x,{cart:!0,disabled:!!s,onClick:function(){e.addToCart(a),e.openModal(a)}},s?"inCart":"add to cart")))))})}}]),t}(n.Component);function $(){return r.a.createElement("div",{className:"container-fluid text-center d-none\r d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"Product Name")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}function R(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title"},r.a.createElement("h1",null,"you cart is currently empty..!"))))}function Y(e){var t=e.item,a=e.value,n=t.id,c=t.title,l=t.img,o=t.price,i=t.total,s=t.count,m=a.increment,u=a.decrement,d=a.removeItem;return r.a.createElement("div",{className:"row my-2 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:l,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"product:"),c),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"price:"),o),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return u(n)}},"-"),r.a.createElement("span",{className:"btn btn-black mx-1"},s),r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return m(n)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("div",{className:"cart-icon",onClick:function(){return d(n)}},r.a.createElement("i",{className:"fas fa-trash"}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",null," Item Total : ",i)))}function q(e){var t=e.value,a=t.cart;return r.a.createElement("div",{className:"container-fluid"},a.map(function(e){return r.a.createElement(Y,{key:e.id,item:e,value:t})}))}function A(e){var t=e.value,a=t.cartSubtotal,n=t.cartTax,c=t.cartTotal,l=t.clearCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto\r col-sm-8 text-capitalize text-right"},r.a.createElement(h.a,{to:"/"},r.a.createElement(x,{onClick:function(){return l()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal:"),r.a.createElement("strong",null,"$ ",a)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"tax:"),r.a.createElement("strong",null,"$ ",n)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"Total:"),r.a.createElement("strong",null,"$ ",c))))))}var H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(D,null,function(e){return e.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Your Cart"}),r.a.createElement($,null),r.a.createElement(q,{value:e}),r.a.createElement(A,{value:e})):r.a.createElement(R,null)}))}}]),t}(n.Component);function J(){var e=Object(v.a)(["\nposition:fixed;\ntop:0;\nleft:0;\nright:0;\nbottom:0;\nbackground: rgba(0,0,0,0.3);\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n#modal{\nbackground:var(--mainWhite);\n"]);return J=function(){return e},e}var U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,c=n.img,l=n.title,o=n.price;return t?r.a.createElement(Z,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"modal",className:"col-8 mx-auto col-md-6\r col-lg-4 text-center text-capitalize p-5"},r.a.createElement("h5",null,"Item added to cart"),r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"}),r.a.createElement("h5",null,l),r.a.createElement("h5",{className:"text-muted"},"price : $",o),r.a.createElement(h.a,{to:"/"},r.a.createElement(x,{onClick:function(){return a()}},"Continue Shopping")),r.a.createElement(h.a,{to:"/cart"},r.a.createElement(x,{cart:!0,onClick:function(){return a()}},"go to cart")))))):null})}}]),t}(n.Component),Z=g.a.div(J()),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/fashionstore",component:F}),r.a.createElement(p.a,{path:"/fashionstore/details",component:W}),r.a.createElement(p.a,{path:"/fashionstore/cart",component:H}),r.a.createElement(p.a,{component:B})),r.a.createElement(U,null))}}]),t}(n.Component),K=a(43);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null,r.a.createElement(K.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.60ad8606.chunk.js.map