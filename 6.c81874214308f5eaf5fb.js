(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{P5bO:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),o=n("IzEk"),c=n("fXoL"),l=n("jhN1"),r=n("v0EB"),a=n("cLtj");let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-hot-weather-widget-hotel-item"]],inputs:{hotel:"hotel"},decls:14,vars:10,consts:[["role","button","aria-pressed","false","tabindex","0",1,"activity-item"],[1,"activity-item-description"],[3,"href"],[1,"activity-images"],[3,"src","alt"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"h5"),c.wc(3),c.Qb(),c.Rb(4,"h6"),c.wc(5,"Tel: "),c.Rb(6,"a",2),c.wc(7),c.ec(8,"phone"),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"ul",3),c.Rb(10,"li"),c.Nb(11,"img",4),c.Qb(),c.Rb(12,"li"),c.Nb(13,"img",4),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.Bb(3),c.xc(e.hotel.address),c.Bb(3),c.kc("href","tel:",e.hotel.phone,"",c.pc),c.Bb(1),c.xc(c.gc(8,7,e.hotel.phone,"+000-000-000-00")),c.Bb(4),c.jc("src",e.hotel.img,c.pc)("alt",e.hotel.address),c.Bb(2),c.jc("src",e.hotel.social_info.img,c.pc)("alt",e.hotel.address))},pipes:[a.a],styles:[".activity-item[_ngcontent-%COMP%]{padding:1em 0;scroll-snap-align:center;display:flex;width:100%;justify-content:space-between;cursor:pointer}.activity-item[_ngcontent-%COMP%]:focus{animation:outline .25s linear .7s forwards}.activity-item[_ngcontent-%COMP%]   .activity-item-description[_ngcontent-%COMP%]{padding-right:5px}.activity-item[_ngcontent-%COMP%]   .activity-item-description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#000;font-size:1em;font-weight:500;margin:0 0 5px}.activity-item[_ngcontent-%COMP%]   .activity-item-description[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fd7b87;font-size:.8em;margin:1em 0 0;font-weight:700}.activity-item[_ngcontent-%COMP%]   .activity-item-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:grey;font-size:.9em;line-height:1.5}.activity-item[_ngcontent-%COMP%]   .activity-item-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.activity-item[_ngcontent-%COMP%]   .activity-images[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;display:flex}.activity-item[_ngcontent-%COMP%]   .activity-images[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:62px}.activity-item[_ngcontent-%COMP%]   .activity-images[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:100px;object-fit:cover}@keyframes outline{0%{outline-color:#5fb3f9}to{outline-color:rgba(95,179,249,.27)}}"],changeDetection:0}),t})();var g=n("p3b5");function d(t,e){if(1&t&&(c.Rb(0,"div",10),c.Nb(1,"img",11),c.Qb()),2&t){const t=c.dc();c.Bb(1),c.jc("src",null==t.currentHotel?null:t.currentHotel.img,c.pc)("alt",null==t.currentHotel?null:t.currentHotel.address)}}function h(t,e){if(1&t){const t=c.Sb();c.Rb(0,"li"),c.Rb(1,"button",3),c.Zb("click",(function(n){c.oc(t);const i=e.$implicit;return c.dc().filter=i})),c.wc(2),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit;c.Bb(2),c.xc(t)}}function b(t,e){if(1&t){const t=c.Sb();c.Rb(0,"app-hot-weather-widget-hotel-item",12),c.Zb("click",(function(n){c.oc(t);const i=e.$implicit;return c.dc().select(i)}))("keydown.enter",(function(n){c.oc(t);const i=e.$implicit;return c.dc().select(i)})),c.Qb()}2&t&&c.jc("hotel",e.$implicit)}let p=(()=>{class t{constructor(){this.filter="",this.currentHotel=null,this.tags=new Set,this.list=[],this.selectHotel=new c.n}set hotels(t){t&&(this.list=t,t.length&&!this.currentHotel&&(this.select(t[0]),this.tags.clear(),this.list.forEach(t=>{t.tags.forEach(t=>{this.tags.add(t)})})))}select(t){this.currentHotel=t,this.currentHotel&&this.selectHotel.emit(this.currentHotel)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-hot-weather-widget-hotel-list"]],inputs:{hotels:"hotels"},outputs:{selectHotel:"selectHotel"},decls:17,vars:6,consts:[[1,"hotel-list-main"],["class","hero-picture",4,"ngIf"],[1,"links-list"],[3,"click"],[4,"ngFor","ngForOf"],[1,"content"],[1,"w-line"],[1,"activity_box"],[1,"scroll-box"],[3,"hotel","click","keydown.enter",4,"ngFor","ngForOf"],[1,"hero-picture"],[3,"src","alt"],[3,"hotel","click","keydown.enter"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.uc(1,d,2,2,"div",1),c.Rb(2,"div"),c.Rb(3,"div",2),c.Rb(4,"menu"),c.Rb(5,"li"),c.Rb(6,"button",3),c.Zb("click",(function(t){return e.filter=""})),c.wc(7,"All"),c.Qb(),c.Qb(),c.uc(8,h,3,1,"li",4),c.Qb(),c.Qb(),c.Rb(9,"section",5),c.Rb(10,"h3"),c.wc(11,"Righteous indignation & like"),c.Qb(),c.Nb(12,"div",6),c.Rb(13,"div",7),c.Rb(14,"div",8),c.uc(15,b,1,1,"app-hot-weather-widget-hotel-item",9),c.ec(16,"hotelListFilter"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.Bb(1),c.jc("ngIf",null==e.currentHotel?null:e.currentHotel.img),c.Bb(7),c.jc("ngForOf",e.tags),c.Bb(7),c.jc("ngForOf",c.gc(16,3,e.list,e.filter)))},directives:[i.l,i.k,s],pipes:[g.a],styles:[".hotel-list-main[_ngcontent-%COMP%]{width:100%}.hotel-list-main[_ngcontent-%COMP%]   .hero-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px 5px 0 0;width:100%;height:200px;object-fit:cover;display:block}.hotel-list-main[_ngcontent-%COMP%]   .links-list[_ngcontent-%COMP%]{background:#fda660;padding:1em}.hotel-list-main[_ngcontent-%COMP%]   .links-list[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;text-align:center;font-size:.9em}.hotel-list-main[_ngcontent-%COMP%]   .links-list[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 .4em;margin:.1em 0;display:inline-block}.hotel-list-main[_ngcontent-%COMP%]   .links-list[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #fff}.hotel-list-main[_ngcontent-%COMP%]   .links-list[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;display:inline-block;padding:0;cursor:pointer;color:#fff;text-decoration:none}.hotel-list-main[_ngcontent-%COMP%]   .links-list[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:underline}.hotel-list-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1.5em 1em;border-radius:0 0 5px 5px;background:#fff}.hotel-list-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:.95em;color:#000;font-weight:700;margin:0}.hotel-list-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w-line[_ngcontent-%COMP%]{width:100px;margin:.7em auto;border-bottom:2px solid grey}.scroll-box[_ngcontent-%COMP%]{height:140px;overflow-y:scroll;padding:0 1em;scroll-snap-type:y mandatory;scrollbar-color:#fda660 #f5f5f5;scrollbar-width:thin}.scroll-box[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f0f0f0}.scroll-box[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;background-color:#f5f5f5}.scroll-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#fda660}"],changeDetection:0}),t})();function f(t,e){if(1&t&&(c.Rb(0,"div",1),c.Rb(1,"h5"),c.wc(2),c.Qb(),c.Nb(3,"div",2),c.cc(),c.Rb(4,"svg",3),c.Nb(5,"use"),c.Qb(),c.bc(),c.Rb(6,"h2"),c.wc(7),c.Rb(8,"sup",4),c.wc(9,"\xb0"),c.Qb(),c.Qb(),c.Rb(10,"h6"),c.wc(11),c.Rb(12,"sup",4),c.wc(13,"\xb0"),c.Qb(),c.Qb(),c.Qb()),2&t){const t=c.dc();c.Bb(2),c.xc(null==t.weather?null:t.weather.title),c.Bb(2),c.Cb("aria-label",null==t.weather?null:t.weather.title),c.Bb(1),c.Cb("href","./assets/hot-weather-widget/icons.svg#"+t.weather.icon,null,"xlink"),c.Bb(2),c.xc(null==t.weather?null:t.weather.temperature),c.Bb(4),c.yc("Water ",null==t.weather?null:t.weather.water,"")}}let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-hot-weather-widget-weather"]],inputs:{weather:"weather"},decls:1,vars:1,consts:[["class","weather-widget",4,"ngIf"],[1,"weather-widget"],[1,"w-line"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 64 64",1,"icon"],[1,"degree"]],template:function(t,e){1&t&&c.uc(0,f,14,5,"div",0),2&t&&c.jc("ngIf",e.weather)},directives:[i.l],styles:[".weather-widget[_ngcontent-%COMP%]{width:100%;padding:1em;background:#5fb3f9;text-align:center;border-radius:5px;height:100%}.weather-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1em;color:#fff;margin:1em 0 0;font-weight:400}.weather-widget[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff;font-size:1em;margin:0}.weather-widget[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:3.2em;display:inline-block;vertical-align:middle;margin:0;font-weight:400}.weather-widget[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%]{vertical-align:top}.weather-widget[_ngcontent-%COMP%]   .w-line[_ngcontent-%COMP%]{width:100px;margin:.7em auto;border-bottom:2px solid #fff}.weather-widget[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:3.2em;height:3.2em;display:inline-block;vertical-align:middle;background-repeat:no-repeat;color:#fff}"],changeDetection:0}),t})();function m(t,e){if(1&t&&(c.Rb(0,"div",1),c.Rb(1,"div",2),c.Rb(2,"h4"),c.wc(3),c.Qb(),c.Nb(4,"div",3),c.Nb(5,"img",4),c.Qb(),c.Rb(6,"div",5),c.Rb(7,"ul"),c.Rb(8,"li"),c.Rb(9,"h3"),c.wc(10),c.Qb(),c.Rb(11,"p"),c.wc(12,"Followers"),c.Qb(),c.Qb(),c.Rb(13,"li"),c.Rb(14,"h3"),c.wc(15),c.Qb(),c.Rb(16,"p"),c.wc(17,"Following"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t){const t=c.dc();c.Bb(3),c.xc(null==t.social?null:t.social.title),c.Bb(2),c.jc("src",null==t.social?null:t.social.img,c.pc),c.Bb(5),c.xc(null==t.social?null:t.social.followers),c.Bb(5),c.xc(null==t.social?null:t.social.following)}}let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-hot-weather-widget-social"]],inputs:{social:"social"},decls:1,vars:1,consts:[["class","social",4,"ngIf"],[1,"social"],[1,"title"],[1,"w-line"],["alt","Social image",1,"img-responsive",3,"src"],[1,"stats"]],template:function(t,e){1&t&&c.uc(0,m,18,4,"div",0),2&t&&c.jc("ngIf",e.social)},directives:[i.l],styles:[".social[_ngcontent-%COMP%]{background:#fd7b87;border-radius:5px;overflow:hidden;display:flex;flex-direction:column;height:100%;justify-content:space-between}.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;padding:1em}.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff;margin:0}.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .w-line[_ngcontent-%COMP%]{width:100px;margin:.7em auto;border-bottom:2px solid #fff}.social[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100px;border:3px solid #fff;width:100px;height:100px;object-fit:cover;margin:0 auto}.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{background:#fff;padding:.7em 0}.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;display:flex;justify-content:center;align-items:center}.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 1em;text-align:center}.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95em;color:#000;font-weight:700;margin:0}.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em;color:grey;margin:0}.social[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #000}"],changeDetection:0}),t})(),O=(()=>{class t{constructor(t,e){this.titleService=t,this.api=e,this.list$=this.api.getList().pipe(Object(o.a)(1)),this.currentHotel=null,this.title="Hot Weather Widget",this.titleService.setTitle(this.title)}select(t){this.currentHotel=t}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(l.d),c.Mb(r.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-hot-weather-widget-main"]],decls:11,vars:6,consts:[[1,"grid-box"],[3,"hotels","selectHotel"],[3,"weather"],[3,"social"],[1,"copy-right"],["href","http://w3layouts.com/","target","_blank"]],template:function(t,e){1&t&&(c.Rb(0,"h1"),c.wc(1),c.Qb(),c.Rb(2,"div",0),c.Rb(3,"app-hot-weather-widget-hotel-list",1),c.Zb("selectHotel",(function(t){return e.select(t)})),c.ec(4,"async"),c.Qb(),c.Nb(5,"app-hot-weather-widget-weather",2),c.Nb(6,"app-hot-weather-widget-social",3),c.Qb(),c.Rb(7,"p",4),c.wc(8,"\xa9 2015 Hot Weather Widget. All rights reserved | Design by "),c.Rb(9,"a",5),c.wc(10,"W3layouts"),c.Qb(),c.Qb()),2&t&&(c.Bb(1),c.xc(e.title),c.Bb(2),c.jc("hotels",c.fc(4,4,e.list$)),c.Bb(2),c.jc("weather",null==e.currentHotel?null:e.currentHotel.weather),c.Bb(1),c.jc("social",null==e.currentHotel?null:e.currentHotel.social_info))},directives:[p,u,w],pipes:[i.b],styles:['@import"https://fonts.googleapis.com/css?family=Quicksand:300,400,700&display=swap";[_nghost-%COMP%]{font-family:Roboto,sans-serif;font-size:100%;background:#313144;display:block;min-height:100vh;overflow:hidden;padding:16px;opacity:0;animation:fadeIn .25s linear .1s forwards}h1[_ngcontent-%COMP%]{text-align:center;font-size:2em;color:#fff;margin:3em 0 2em;font-family:Quicksand,sans-serif;font-weight:400}.grid-box[_ngcontent-%COMP%]{display:grid;grid-template-areas:"list" "weather" "social";grid-template-columns:1fr;grid-gap:24px;max-width:580px;margin:0 auto}@media(min-width:500px){.grid-box[_ngcontent-%COMP%]{grid-template-areas:"list weather" "list social";grid-template-columns:6fr 4fr}}app-hot-weather-widget-hotel-list[_ngcontent-%COMP%]{grid-area:list}app-hot-weather-widget-weather[_ngcontent-%COMP%]{grid-area:weather}app-hot-weather-widget-social[_ngcontent-%COMP%]{grid-area:social}.copy-right[_ngcontent-%COMP%]{text-align:center;font-size:1em;color:#fff;line-height:1.5;margin-top:120px}a[_ngcontent-%COMP%]{color:#fd7b87;text-decoration:none;transition:color .25s linear}a[_ngcontent-%COMP%]:hover{color:#fff}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}'],changeDetection:0}),t})();var M=n("tyNb"),_=n("FpXt");n.d(e,"HotWeatherWidgetModule",(function(){return C}));let C=(()=>{class t{constructor(){console.log("1. HotWeatherWidgetModule")}}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[i.c,_.a,M.b.forChild([{path:"",component:O},{path:"**",redirectTo:""}])]]}),t})()}}]);