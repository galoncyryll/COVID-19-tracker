(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{140:function(e,a,t){e.exports=t(280)},145:function(e,a,t){},146:function(e,a,t){},280:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),o=(t(145),t(60)),m=(t(146),t(289)),i=t(290),s=t(286),u=t(288),E=function(e){var a=e.latest,t=a.confirmed,n=a.deaths,r=a.recovered;return l.a.createElement(i.a,{columns:3,divided:!0},l.a.createElement(i.a.Row,null,l.a.createElement(i.a.Column,null,l.a.createElement(s.a,{src:"https://cdn.frankerfacez.com/emoticon/434366/4",size:"small",verticalAlign:"middle"}),l.a.createElement(u.a,{color:"yellow",inverted:!0},l.a.createElement(u.a.Value,null,t),l.a.createElement(u.a.Label,null,"Confirmed Cases"))),l.a.createElement(i.a.Column,null,l.a.createElement(s.a,{src:"https://cdn.frankerfacez.com/emoticon/61496/4",size:"small",verticalAlign:"middle"}),l.a.createElement(u.a,{color:"green",inverted:!0},l.a.createElement(u.a.Value,null,r),l.a.createElement(u.a.Label,null,"Recovered"))),l.a.createElement(i.a.Column,null,l.a.createElement(s.a,{src:"https://cdn.frankerfacez.com/emoticon/425799/4",size:"small",verticalAlign:"middle"}),l.a.createElement(u.a,{color:"red",inverted:!0},l.a.createElement(u.a.Value,null,n),l.a.createElement(u.a.Label,null,"Deaths")))))},d=t(293),h=t(294),p=t(291),g=t(295),f=function(e,a,t,n){var l=e*a;return l<t?t:l>n?n:l},v=function(e){var a=e.data,t=a.confirmed,n=a.deaths,r=a.recovered;return l.a.createElement("div",{id:"mapid"},l.a.createElement(d.a,{center:[35,103],zoom:4},l.a.createElement(h.a,{attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a>, \xa9 <a href="https://openmaptiles.org/">OpenMapTiles</a> \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"}),t.locations.map((function(e,a){return l.a.createElement(p.a,{center:[e.coordinates.lat,e.coordinates.long],radius:f(e.latest,25,15e3,5e5),color:"red",key:a},l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement("h3",null,"".concat(e.province?e.province:"Province not specified",", ").concat(e.country)),l.a.createElement("p",null,"Confirmed Cases: ".concat(e.latest)),l.a.createElement("p",null,"Deaths: ".concat(n.locations[a].latest)),l.a.createElement("p",null,"Recovered: ".concat(r.locations[a].latest)))))}))))},b=t(292),k=t(287),L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(m.a,{pointing:!0,secondary:!0,inverted:!0},l.a.createElement(m.a.Item,{name:"editorials"},l.a.createElement("a",{href:"https://github.com/galoncyryll/COVID-19-tracker",target:"_blank",rel:"noopener noreferrer",className:"github-link"},l.a.createElement("i",{className:"github icon"})))),l.a.createElement(i.a,{columns:3,stackable:!0},l.a.createElement(i.a.Column,null,l.a.createElement(b.a,{raised:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,{image:!0},l.a.createElement(k.a.Line,null),l.a.createElement(k.a.Line,null)),l.a.createElement(k.a.Paragraph,null,l.a.createElement(k.a.Line,{length:"medium"}),l.a.createElement(k.a.Line,{length:"short"}))))),l.a.createElement(i.a.Column,null,l.a.createElement(b.a,{raised:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,{image:!0},l.a.createElement(k.a.Line,null),l.a.createElement(k.a.Line,null)),l.a.createElement(k.a.Paragraph,null,l.a.createElement(k.a.Line,{length:"medium"}),l.a.createElement(k.a.Line,{length:"short"}))))),l.a.createElement(i.a.Column,null,l.a.createElement(b.a,{raised:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,{image:!0},l.a.createElement(k.a.Line,null),l.a.createElement(k.a.Line,null)),l.a.createElement(k.a.Paragraph,null,l.a.createElement(k.a.Line,{length:"medium"}),l.a.createElement(k.a.Line,{length:"short"}))))))))},y=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),i=Object(o.a)(c,2),s=i[0],u=i[1],d=Object(n.useState)(!0),h=Object(o.a)(d,2),p=h[0],g=h[1];return Object(n.useEffect)((function(){fetch("https://coronavirus-tracker-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(e){u(e.latest),r(e),g(!1)})).catch((function(e){console.log("Error fetching: ".concat(e))}))}),[]),p?l.a.createElement(L,null):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(m.a,{pointing:!0,secondary:!0,inverted:!0},l.a.createElement(m.a.Item,{name:"editorials"},l.a.createElement("a",{href:"https://github.com/galoncyryll/COVID-19-tracker",target:"_blank",rel:"noopener noreferrer",className:"github-link"},l.a.createElement("i",{className:"github icon"})))),l.a.createElement(E,{latest:s})),l.a.createElement(v,{data:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.ff66b3b3.chunk.js.map