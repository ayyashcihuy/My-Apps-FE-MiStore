(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(t,e,a){},42:function(t,e,a){},78:function(t,e,a){},83:function(t,e,a){},84:function(t,e,a){},85:function(t,e,a){},86:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),r=a(17),i=a.n(r),s=(a(41),a(42),a(10)),u=a(3),o={TAMBAH_TOKO:"TAMBAH_TOKO",FETCH_DATA:"FETCH_DATA",SET_STATUS:"SET_STATUS",SET_PRODUCT:"SET_PRODUCT",RESET_DATA:"RESET_DATA"},j=a(16),l=a.n(j),d=a(11),b=a.n(d),h=function(t){return{type:o.FETCH_DATA,payload:t}},O=function(){return{type:o.RESET_DATA}},x=function(){return{type:o.SET_STATUS}},m=function(t){return function(e){l.a.get("https://dev.dummy-api.alamisharia.co.id/searchProductByKeyword?keyword=".concat(t)).then((function(t){var a=t.data;e(function(t){return{type:o.SET_PRODUCT,payload:t}}(a.data))})).catch((function(){e(h([]))}))}},f=a(7),p=a(1);var v=function(){var t=Object(f.c)((function(t){return{listProduct:t.listProduct}})).listProduct;return Object(p.jsx)("div",{children:t&&t.length>0?Object(p.jsxs)("table",{className:"container",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Nama Produk"}),Object(p.jsx)("th",{children:"Satuan"}),Object(p.jsx)("th",{children:"Harga Satuan"}),Object(p.jsx)("th",{children:"Deskripsi"})]})}),Object(p.jsx)("tbody",{children:t.map((function(t,e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.nama}),Object(p.jsx)("td",{children:t.satuan}),Object(p.jsx)("td",{children:t.hargaSatuan}),Object(p.jsx)("td",{children:t.deskripsi})]},e)}))})]}):Object(p.jsx)("h4",{children:" Produk yang anda Cari Belum Tersedia :( "})})};a(78);var T=function(){var t=Object(f.b)(),e=Object(u.f)(),a=Object(c.useState)("searchByKeyword"),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(""),j=Object(s.a)(o,2),d=j[0],b=j[1],x=Object(f.c)((function(t){return{listToko:t.listToko,listProduct:t.listProduct}})).listProduct;return Object(c.useEffect)((function(){var e;"searchByKeyword"===r&&r?(t(O()),t(m(d))):"searchById"===r&&r&&(t(O()),t((e=d,function(t){l.a.get("https://dev.dummy-api.alamisharia.co.id/listProductBySellerId?seller_id=".concat(e,"\n      ")).then((function(e){var a=e.data;t(h(a.data))})).catch((function(){t(h([]))}))})))}),[d,r,t]),Object(p.jsx)("section",{children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"textBox",children:[Object(p.jsx)("h1",{children:"AlamiStore"}),Object(p.jsx)("p",{children:"Alami Store adalah tempat kamu bisa membuka tokomu sendiri serta menambahkan produk yang kamu inginkan"}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"#",className:"addProduct",onClick:function(){e.push("/tambah-produk")},children:"Tambah Produkmu"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsxs)("select",{className:"box",id:"searchBy",name:"searchBy",onChange:function(t){i(t.target.value)},children:[Object(p.jsx)("option",{value:"searchByKeyword",children:"Search By Keyword"}),Object(p.jsx)("option",{value:"searchById",children:"Search By Seller Id"})]})}),Object(p.jsx)("input",{type:"text",placeholder:"Cari yang kamu mau",className:"searchBox",value:d,onChange:function(t){b(t.target.value)}}),d?Object(p.jsx)("div",{children:x?Object(p.jsx)(v,{}):Object(p.jsx)("h4",{children:" Produk yang anda Cari Belum Tersedia :( "})}):null]})]})})})},S=(a(83),a(14));var g=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("header",{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("nav",{className:"navbar",children:Object(p.jsxs)("div",{className:"navbar__brand",children:[Object(p.jsx)(S.b,{to:"/",className:"navbar__brand__logo",children:"AlamiStore"}),Object(p.jsx)("div",{id:"bars",children:Object(p.jsx)(S.b,{to:"/tambah-toko",className:"navbar__brand__add",children:"Tambah Toko"})})]})})})})})};a(84);var y=function(){var t=Object(f.b)(),e=Object(u.f)(),a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(""),j=Object(s.a)(o,2),d=j[0],h=j[1],O=Object(f.c)((function(t){return{status:t.status}})).status;function m(){""!==r&&""!==d?t(function(t){return function(e){l()({method:"POST",url:"https://dev.dummy-api.alamisharia.co.id/addSeller",data:t}).then((function(t){var a=t.data;e(x()),b.a.fire({icon:"success",title:"Success",html:"<p>Berhasil Menambahkan Toko!</p></br><p>ID Toko: ".concat(a.data.id,"</p></br><small>Mohon simpan ID Toko untuk menggunakan fitur lainnya.</small>")})})).catch((function(){b.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}))}}({nama:r,kota:d})):b.a.fire("Fail!!","Kamu belum mengisi form dengan lengkap")}return Object(c.useEffect)((function(){O&&(e.push("/"),t(x()))}),[O,t,e]),Object(p.jsxs)("div",{className:"textBox",children:[Object(p.jsx)("h1",{children:"Tambah Toko"}),Object(p.jsxs)("div",{className:"form-box",children:[Object(p.jsx)("label",{children:"Nama Toko"}),Object(p.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}}),Object(p.jsx)("label",{children:"Kota Asal"}),Object(p.jsx)("input",{type:"text",value:d,onChange:function(t){h(t.target.value)}}),Object(p.jsx)("button",{onClick:function(){m()},children:"Simpan"})]})]})};a(85);var k=function(){var t=Object(f.b)(),e=Object(u.f)(),a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(""),j=Object(s.a)(o,2),d=j[0],h=j[1],O=Object(c.useState)(""),m=Object(s.a)(O,2),v=m[0],T=m[1],S=Object(c.useState)(""),g=Object(s.a)(S,2),y=g[0],k=g[1],A=Object(c.useState)(""),P=Object(s.a)(A,2),_=P[0],C=P[1],E=Object(f.c)((function(t){return{status:t.status}})).status;function B(){d&&v&&y&&_?t(function(t){return function(e){l()({method:"POST",url:"https://dev.dummy-api.alamisharia.co.id/addProduct",data:t}).then((function(){b.a.fire("Success!","Berhasil Menambah Produk"),e(x())})).catch((function(){b.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}))}}({sellerId:+r,nama:d,satuan:v,hargaSatuan:+y,deskripsi:_})):b.a.fire("Fail!!","Kamu belum mengisi form dengan lengkap")}return Object(c.useEffect)((function(){E&&(e.push("/"),t(x()))}),[E,t,e]),Object(p.jsxs)("div",{className:"textBox",children:[Object(p.jsx)("h1",{children:"Tambah Produk"}),Object(p.jsxs)("div",{className:"form-box",children:[Object(p.jsx)("label",{children:"Id Penjual"}),Object(p.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}}),Object(p.jsx)("label",{children:"Nama Produk"}),Object(p.jsx)("input",{type:"text",value:d,onChange:function(t){h(t.target.value)}}),Object(p.jsx)("label",{children:"Satuan"}),Object(p.jsx)("input",{type:"text",value:v,onChange:function(t){T(t.target.value)}}),Object(p.jsx)("label",{children:"Harga Satuan"}),Object(p.jsx)("input",{type:"number",value:y,onChange:function(t){k(t.target.value)}}),Object(p.jsx)("label",{children:"Deskripsi"}),Object(p.jsx)("input",{type:"text",value:_,onChange:function(t){C(t.target.value)}}),Object(p.jsx)("button",{className:"button",onClick:function(){B()},children:"Tambah"})]})]})},A=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/tambah-produk",children:Object(p.jsx)(k,{})}),Object(p.jsx)(u.a,{path:"/tambah-toko",children:Object(p.jsx)(y,{})}),Object(p.jsx)(u.a,{path:"/",children:Object(p.jsx)(T,{})})]})]})},P=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),r(t),i(t)}))},_=a(23),C=a(12),E={Nama:"",listToko:[],listProduct:[],status:!1};var B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.FETCH_DATA:return Object(C.a)(Object(C.a)({},t),{},{listToko:e.payload});case o.SET_STATUS:return Object(C.a)(Object(C.a)({},t),{},{status:!t.status});case o.SET_PRODUCT:return Object(C.a)(Object(C.a)({},t),{},{listProduct:e.payload});case o.RESET_DATA:return Object(C.a)(Object(C.a)({},t),{},{listProduct:[]});default:return t}},N=a(36),D=Object(_.b)(B,Object(_.a)(N.a));i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(f.a,{store:D,children:Object(p.jsx)(S.a,{children:Object(p.jsx)(A,{})})})}),document.getElementById("root")),P()}},[[86,1,2]]]);
//# sourceMappingURL=main.9e207dcf.chunk.js.map