(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),c=a("O40h"),s=a("q1tI"),i=a.n(s),o=a("I0qz"),l=function(e){var t=e.precio,a=t.price,n=t.percent_change_1h,r=t.percent_change_7d,c=t.percent_change_24h;return i.a.createElement("div",{className:"card text-white bg-success mb-3"},i.a.createElement("div",{className:"card-header"},"Precio del Bitcoin"),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Precio Actual: $ ",a," "),i.a.createElement("div",{className:"d-md-flex justify-content-between"},i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Última Hora: ")," ",n," %"),i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Últimas 24 horas: ")," ",c," %"),i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Últimos 7 Días: ")," ",r," %"))))},m=function(e){var t,a=e.noticia,n=a.urlToImage,r=a.url,c=a.title,s=a.description,o=a.source;return t=""!==n?i.a.createElement("img",{src:n,alt:c,className:"card-img-top"}):i.a.createElement("p",{className:"text-center my-5"},"Imagen No Disponible"),i.a.createElement("div",{className:"col-md-6 col-12 mb-4"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},t),i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},c),i.a.createElement("p",{className:"card-text"},s),i.a.createElement("p",{className:"card-text"},o.name),i.a.createElement("a",{href:r,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticia"))))},u=function(e){return i.a.createElement("div",{className:"row"},e.noticias.map(function(e){return i.a.createElement(m,{key:e.url,noticia:e})}))},d=a("pLtp"),p=a.n(d),f=function(e){var t=e.info,a=t.name,n=t.url,r=t.description,c=a.text;c.length>100&&(c=c.substr(0,100)+"...");var s=r.text;return s&&(s=s.substr(0,250)+"..."),i.a.createElement("a",{href:n,target:"_blank",className:"list-group-item active text-light mb-1"},i.a.createElement("h3",{className:"mb-3"},c),i.a.createElement("p",{className:"mb-1"},s))},v=function(e){var t=p()(e.eventos);return i.a.createElement("div",{className:"list-group"},t.map(function(t){return i.a.createElement(f,{key:t,info:e.eventos[t]})}))},h=a("zgjP"),E=a.n(h),N=function(e){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"Precio del bitcoin"),i.a.createElement(l,{precio:e.precioBitcoin})),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("h2",{className:"my-4"},"Noticias sobre Bitcoin"),i.a.createElement(u,{noticias:e.noticias})),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h2",{className:"my-4"},"Próximos Eventos Bitcoin"),i.a.createElement(v,{eventos:e.eventos}))))};N.getInitialProps=Object(c.default)(r.a.mark(function e(){var t,a,n,c,s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://api.coinmarketcap.com/v2/ticker/1/");case 2:return t=e.sent,e.next=5,E()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6c1c1dfcb4a943c7bf481bc628b80153&language=es");case 5:return a=e.sent,e.next=8,E()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Spain&token=4M7VDFZWO3VAGXJ2S7UU");case 8:return n=e.sent,e.next=11,t.json();case 11:return c=e.sent,e.next=14,a.json();case 14:return s=e.sent,e.next=17,n.json();case 17:return i=e.sent,e.abrupt("return",{precioBitcoin:c.data.quotes.USD,noticias:s.articles,eventos:i.events});case 19:case"end":return e.stop()}},e)}));t.default=N},"W/7i":function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return t=t||{},new Promise(function(a,n){var r=new XMLHttpRequest,c=[],s=[],i={},o=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:o,headers:{keys:function(){return c},entries:function(){return s},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,a){c.push(t=t.toLowerCase()),s.push([t,a]),i[t]=i[t]?i[t]+","+a:a}),a(o())},r.onerror=n,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(l,t.headers[l]);r.send(t.body||null)})}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("W/7i").default||a("W/7i"))}},[["vlRD",1,0]]]);