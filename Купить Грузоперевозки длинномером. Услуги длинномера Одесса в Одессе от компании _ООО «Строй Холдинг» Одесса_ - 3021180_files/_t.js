"use strict";if(!("bind" in Function.prototype)){Function.prototype.bind=function(a){var c=this;if(arguments.length<=1){return function(){return c.apply(a,arguments)}}else{var b=Array.prototype.slice.call(arguments,1);return function(){return c.apply(a,arguments.length===0?b:b.concat(Array.prototype.slice.call(arguments)))}}}}if(!("trim" in String.prototype)){String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}}if(!("indexOf" in Array.prototype)){Array.prototype.indexOf=function(b,a){if(a===undefined){a=0}if(a<0){a+=this.length}if(a<0){a=0}for(var c=this.length;a<c;a++){if(a in this&&this[a]===b){return a}}return -1}}if(!("lastIndexOf" in Array.prototype)){Array.prototype.lastIndexOf=function(b,a){if(a===undefined){a=this.length-1}if(a<0){a+=this.length}if(a>this.length-1){a=this.length-1}for(a++;a-->0;){if(a in this&&this[a]===b){return a}}return -1}}if(!("forEach" in Array.prototype)){Array.prototype.forEach=function(c,b){for(var a=0,d=this.length;a<d;a++){if(a in this){c.call(b,this[a],a,this)}}}}if(!("map" in Array.prototype)){Array.prototype.map=function(d,c){var a=new Array(this.length);for(var b=0,e=this.length;b<e;b++){if(b in this){a[b]=d.call(c,this[b],b,this)}}return a}}if(!("filter" in Array.prototype)){Array.prototype.filter=function(d,e){var a=[],b;for(var c=0,f=this.length;c<f;c++){if(c in this&&d.call(e,b=this[c],c,this)){a.push(b)}}return a}}if(!("every" in Array.prototype)){Array.prototype.every=function(a,c){for(var b=0,d=this.length;b<d;b++){if(b in this&&!a.call(c,this[b],b,this)){return false}}return true}}if(!("some" in Array.prototype)){Array.prototype.some=function(a,c){for(var b=0,d=this.length;b<d;b++){if(b in this&&a.call(c,this[b],b,this)){return true}}return false}}function yottos_Snowball(d){function e(g,h,f,i){this.s_size=g.length;this.s=this.toCharArray(g);this.substring_i=h;this.result=f;this.method=i}e.prototype.toCharArray=function(g){var j=g.length,h=new Array(j),f=0;for(f=0;f<j;f++){h[f]=g.charCodeAt(f)}return h};function a(){var f;return{b:0,k:0,l:0,c:0,lb:0,s_c:function(g){f=g;this.c=0;this.l=g.length;this.lb=0;this.b=this.c;this.k=this.l},g_c:function(){var g=f;f=null;return g},i_g:function(j,h,g){if(this.c<this.l){var i=f.charCodeAt(this.c);if(i<=g&&i>=h){i-=h;if(j[i>>3]&(1<<(i&7))){this.c++;return true}}}return false},i_g_b:function(j,h,g){if(this.c>this.lb){var i=f.charCodeAt(this.c-1);if(i<=g&&i>=h){i-=h;if(j[i>>3]&(1<<(i&7))){this.c--;return true}}}return false},o_g:function(j,h,g){if(this.c<this.l){var i=f.charCodeAt(this.c);if(i>g||i<h){this.c++;return true}i-=h;if(!(j[i>>3]&(1<<(i&7)))){this.c++;return true}}return false},o_g_b:function(j,h,g){if(this.c>this.lb){var i=f.charCodeAt(this.c-1);if(i>g||i<h){this.c--;return true}i-=h;if(!(j[i>>3]&(1<<(i&7)))){this.c--;return true}}return false},e_s:function(j,h){var g;if(this.l-this.c<j){return false}for(g=0;g<j;g++){if(f.charCodeAt(this.c+g)!=h.charCodeAt(g)){return false}}this.c+=j;return true},e_s_b:function(j,h){var g;if(this.c-this.lb<j){return false}for(g=0;g<j;g++){if(f.charCodeAt(this.c-j+g)!=h.charCodeAt(g)){return false}}this.c-=j;return true},f_a:function(z,A){var o=0,n=A,t=this.c,h=this.l,u=0,s=0,p=false,m,y,g,r,x,q;while(true){m=o+((n-o)>>1),x=0,q=u<s?u:s,y=z[m];for(g=q;g<y.s_size;g++){if(t+q==h){x=-1;break}x=f.charCodeAt(t+q)-y.s[g];if(x){break}q++}if(x<0){n=m;s=q}else{o=m;u=q}if(n-o<=1){if(o>0||n==o||p){break}p=true}}while(true){y=z[o];if(u>=y.s_size){this.c=t+y.s_size;if(!y.method){return y.result}r=y.method();this.c=t+y.s_size;if(r){return y.result}}o=y.substring_i;if(o<0){return 0}}},f_a_b:function(y,z){var n=0,m=z,s=this.c,g=this.lb,t=0,r=0,o=false,l,h,x,q,u,p;while(true){l=n+((m-n)>>1),u=0,p=t<r?t:r,x=y[l];for(h=x.s_size-1-p;h>=0;h--){if(s-p==g){u=-1;break}u=f.charCodeAt(s-1-p)-x.s[h];if(u){break}p++}if(u<0){m=l;r=p}else{n=l;t=p}if(m-n<=1){if(n>0||m==n||o){break}o=true}}while(true){x=y[n];if(t>=x.s_size){this.c=s-x.s_size;if(!x.method){return x.result}q=x.method();this.c=s-x.s_size;if(q){return x.result}}n=x.substring_i;if(n<0){return 0}}},r_s:function(h,l,j){var g=j.length-(l-h),k=f.substring(0,h),i=f.substring(l);f=k+j+i;this.l+=g;if(this.c>=l){this.c+=g}else{if(this.c>h){this.c=h}}return g},s_ch:function(){if(this.b<0||this.b>this.k||this.k>this.l||this.l>f.length){throw ("faulty slice operation")}},s_f:function(g){this.s_ch();this.r_s(this.b,this.k,g)},s_d:function(){this.s_f("")},i_:function(h,j,i){var g=this.r_s(h,j,i);if(h<=this.b){this.b+=g}if(h<=this.k){this.k+=g}},s_t:function(){this.s_ch();return f.substring(this.b,this.k)},e_v_b:function(g){return this.e_s_b(g.length,g)}}}var c,b={RussianStemmer:function(){var E=[new e("\u0432",-1,1),new e("\u0438\u0432",0,2),new e("\u044B\u0432",0,2),new e("\u0432\u0448\u0438",-1,1),new e("\u0438\u0432\u0448\u0438",3,2),new e("\u044B\u0432\u0448\u0438",3,2),new e("\u0432\u0448\u0438\u0441\u044C",-1,1),new e("\u0438\u0432\u0448\u0438\u0441\u044C",6,2),new e("\u044B\u0432\u0448\u0438\u0441\u044C",6,2)],D=[new e("\u0435\u0435",-1,1),new e("\u0438\u0435",-1,1),new e("\u043E\u0435",-1,1),new e("\u044B\u0435",-1,1),new e("\u0438\u043C\u0438",-1,1),new e("\u044B\u043C\u0438",-1,1),new e("\u0435\u0439",-1,1),new e("\u0438\u0439",-1,1),new e("\u043E\u0439",-1,1),new e("\u044B\u0439",-1,1),new e("\u0435\u043C",-1,1),new e("\u0438\u043C",-1,1),new e("\u043E\u043C",-1,1),new e("\u044B\u043C",-1,1),new e("\u0435\u0433\u043E",-1,1),new e("\u043E\u0433\u043E",-1,1),new e("\u0435\u043C\u0443",-1,1),new e("\u043E\u043C\u0443",-1,1),new e("\u0438\u0445",-1,1),new e("\u044B\u0445",-1,1),new e("\u0435\u044E",-1,1),new e("\u043E\u044E",-1,1),new e("\u0443\u044E",-1,1),new e("\u044E\u044E",-1,1),new e("\u0430\u044F",-1,1),new e("\u044F\u044F",-1,1)],C=[new e("\u0435\u043C",-1,1),new e("\u043D\u043D",-1,1),new e("\u0432\u0448",-1,1),new e("\u0438\u0432\u0448",2,2),new e("\u044B\u0432\u0448",2,2),new e("\u0449",-1,1),new e("\u044E\u0449",5,1),new e("\u0443\u044E\u0449",6,2)],B=[new e("\u0441\u044C",-1,1),new e("\u0441\u044F",-1,1)],A=[new e("\u043B\u0430",-1,1),new e("\u0438\u043B\u0430",0,2),new e("\u044B\u043B\u0430",0,2),new e("\u043D\u0430",-1,1),new e("\u0435\u043D\u0430",3,2),new e("\u0435\u0442\u0435",-1,1),new e("\u0438\u0442\u0435",-1,2),new e("\u0439\u0442\u0435",-1,1),new e("\u0435\u0439\u0442\u0435",7,2),new e("\u0443\u0439\u0442\u0435",7,2),new e("\u043B\u0438",-1,1),new e("\u0438\u043B\u0438",10,2),new e("\u044B\u043B\u0438",10,2),new e("\u0439",-1,1),new e("\u0435\u0439",13,2),new e("\u0443\u0439",13,2),new e("\u043B",-1,1),new e("\u0438\u043B",16,2),new e("\u044B\u043B",16,2),new e("\u0435\u043C",-1,1),new e("\u0438\u043C",-1,2),new e("\u044B\u043C",-1,2),new e("\u043D",-1,1),new e("\u0435\u043D",22,2),new e("\u043B\u043E",-1,1),new e("\u0438\u043B\u043E",24,2),new e("\u044B\u043B\u043E",24,2),new e("\u043D\u043E",-1,1),new e("\u0435\u043D\u043E",27,2),new e("\u043D\u043D\u043E",27,1),new e("\u0435\u0442",-1,1),new e("\u0443\u0435\u0442",30,2),new e("\u0438\u0442",-1,2),new e("\u044B\u0442",-1,2),new e("\u044E\u0442",-1,1),new e("\u0443\u044E\u0442",34,2),new e("\u044F\u0442",-1,2),new e("\u043D\u044B",-1,1),new e("\u0435\u043D\u044B",37,2),new e("\u0442\u044C",-1,1),new e("\u0438\u0442\u044C",39,2),new e("\u044B\u0442\u044C",39,2),new e("\u0435\u0448\u044C",-1,1),new e("\u0438\u0448\u044C",-1,2),new e("\u044E",-1,2),new e("\u0443\u044E",44,2)],y=[new e("\u0430",-1,1),new e("\u0435\u0432",-1,1),new e("\u043E\u0432",-1,1),new e("\u0435",-1,1),new e("\u0438\u0435",3,1),new e("\u044C\u0435",3,1),new e("\u0438",-1,1),new e("\u0435\u0438",6,1),new e("\u0438\u0438",6,1),new e("\u0430\u043C\u0438",6,1),new e("\u044F\u043C\u0438",6,1),new e("\u0438\u044F\u043C\u0438",10,1),new e("\u0439",-1,1),new e("\u0435\u0439",12,1),new e("\u0438\u0435\u0439",13,1),new e("\u0438\u0439",12,1),new e("\u043E\u0439",12,1),new e("\u0430\u043C",-1,1),new e("\u0435\u043C",-1,1),new e("\u0438\u0435\u043C",18,1),new e("\u043E\u043C",-1,1),new e("\u044F\u043C",-1,1),new e("\u0438\u044F\u043C",21,1),new e("\u043E",-1,1),new e("\u0443",-1,1),new e("\u0430\u0445",-1,1),new e("\u044F\u0445",-1,1),new e("\u0438\u044F\u0445",26,1),new e("\u044B",-1,1),new e("\u044C",-1,1),new e("\u044E",-1,1),new e("\u0438\u044E",30,1),new e("\u044C\u044E",30,1),new e("\u044F",-1,1),new e("\u0438\u044F",33,1),new e("\u044C\u044F",33,1)],x=[new e("\u043E\u0441\u0442",-1,1),new e("\u043E\u0441\u0442\u044C",-1,1)],w=[new e("\u0435\u0439\u0448\u0435",-1,1),new e("\u043D",-1,2),new e("\u0435\u0439\u0448",-1,1),new e("\u044C",-1,3)],v=[33,65,8,232],m,t,r=new a();this.setCurrent=function(F){r.s_c(F)};this.getCurrent=function(){return r.g_c()};function o(){while(!r.i_g(v,1072,1103)){if(r.c>=r.l){return false}r.c++}return true}function n(){while(!r.o_g(v,1072,1103)){if(r.c>=r.l){return false}r.c++}return true}function f(){t=r.l;m=t;if(o()){t=r.c;if(n()){if(o()){if(n()){m=r.c}}}}}function i(){return m<=r.c}function p(F,I){var G,H;r.k=r.c;G=r.f_a_b(F,I);if(G){r.b=r.c;switch(G){case 1:H=r.l-r.c;if(!r.e_s_b(1,"\u0430")){r.c=r.l-H;if(!r.e_s_b(1,"\u044F")){return false}}case 2:r.s_d();break}return true}return false}function k(){return p(E,9)}function q(F,H){var G;r.k=r.c;G=r.f_a_b(F,H);if(G){r.b=r.c;if(G==1){r.s_d()}return true}return false}function g(){return q(D,26)}function j(){if(g()){p(C,8);return true}return false}function l(){return q(B,2)}function u(){return p(A,46)}function z(){q(y,36)}function s(){var F;r.k=r.c;F=r.f_a_b(x,2);if(F){r.b=r.c;if(i()&&F==1){r.s_d()}}}function h(){var F;r.k=r.c;F=r.f_a_b(w,4);if(F){r.b=r.c;switch(F){case 1:r.s_d();r.k=r.c;if(!r.e_s_b(1,"\u043D")){break}r.b=r.c;case 2:if(!r.e_s_b(1,"\u043D")){break}case 3:r.s_d();break}}}this.stem=function(){f();r.c=r.l;if(r.c<t){return false}r.lb=t;if(!k()){r.c=r.l;if(!l()){r.c=r.l}if(!j()){r.c=r.l;if(!u()){r.c=r.l;z()}}}r.c=r.l;r.k=r.c;if(r.e_s_b(1,"\u0438")){r.b=r.c;r.s_d()}else{r.c=r.l}s();r.c=r.l;h();return true}}};c=d.substring(0,1).toUpperCase()+d.substring(1).toLowerCase()+"Stemmer";return new b[c]()}function YottosTracker(){this.snowball_cache={};this.y_url=window.location;this.parser=document.createElement("a");this.parser.href=this.y_url;this.referrer=document.referrer;this.parser_ref=document.createElement("a");this.parser_ref.href=this.referrer;this.title=document.title.replace(/[^a-zA-Zа-яА-Я]/g," ").replace(/\s+$/g,"").replace(/^\s+/g,"").replace(/[\n\t\r\f\s]{2,}/g," ");this.keyword_ignore=(function(){var b={},c=0,e,d=["бол","больш","будет","будут","как","пок","коментар","будт","был","быт","вдруг","вед","впроч","всегд","всег","всех","говор","главн","даж","друг","дальш","добав","есл","ест","жизн","зач","зде","иногд","кажет","кажд","как","когд","конечн","котор","куд","лучш","либ","межд","мен","долж","смысл","след","чита","люб","постара","помим","числ","соб","ждат","част","использ","велик","член","некотор","мног","может","можн","наконец","нег","нельз","нибуд","никогд","нич","один","опя","опубликова","перед","посл","пот","почт","разв","сво","себ","сегодн","сейчас","сказа","совс","так","теб","тепер","тогд","тог","тож","тольк","хорош","хот","чег","человек","пут","вполн","возможн","через","чтоб","чут","эт","позж","все","поэт","точн","этот","над","итог","недел","сведен","тем","город","гроз","зон","принят","балл","перв","вход","лент","оста","мир","образ","идет","выйт","нол","сил","наш","мнен","одн","ищ","выш","взял","откр","нов","удив","всем","важн","ожида","сам","ход","пущ","тег","выж","комментар","ваш","цен","коснут","слаб","ситуац","назов","уход","дол","основн","ряд","заверш","дополнен","влия","описа","меньш","двум","слаб","стал","новост","отраз","вопрос","выбор","сдела","смерт","последн","поворот","высок","опозор","текст","назов","основн","причин","групп","похож","with","that","this","about","above","after","again","against","because","been","before","being","below","between","both","cannot","could","does","down","than","that","important","partner","border","link","text","radius","none","document","height","color","title","normal","font","down","display","width","block","margin","yandex","item","type","left","padding","auto","inner","function","decorati","google","position","http","align","webkit","inherit","direct","hover","referrer","write","size","math","spacing","line","sizing","float","bottom","vert","charset","vertical","background","underline","visited","inline","unescape","value","style","visible","address","else","true","tail","iframe","adriver","white","space","collapse","content","list","window","absolute","script","random","transparent","repeat","scroll","container","piclayout","email","site","form","location","place","table","show","indent","visibility","clickable","last","agewarn","opts","toggler","errormsg","getcode","href","relative","overflow","clear","cursor","outline","index","full","baseline","hide","focus","catch","async","https","escape","round","target","blank","frameborder","scrolling","click","hidden","empty","cells","letter","static","layout","transform","word","right","weight","warn","active","used","context","undefined","counter","page","mail","body","domain","region","pointer","nowrap","family","first","data","online","push","metrika","callbacks","image","classname","protocol","init","icon","wrap","root","solid","facebook","options","defaults","offset","false","return","like","opera","frames","typeof","decoration","куп","магазин","каталог"];e=d.length;for(c=0;c<e;c++){b[d[c]]=true}return b}());this.rus_Snowball=new yottos_Snowball("russian");this.getSW=function(c){var b="";if(this.snowball_cache[c]){b=this.snowball_cache[c]}else{this.rus_Snowball.setCurrent(c);this.rus_Snowball.stem();b=this.rus_Snowball.getCurrent();this.snowball_cache[c]=b}return b};this.getText=function(){var p=(document.title.replace(/[^a-zA-Zа-яА-Я]/g," ").replace(/\s+$/g,"").replace(/^\s+/g,"").replace(/[\n\t\r\f\s]{2,}/g," ")),k=document.getElementsByTagName("meta"),m,n,l=[],j={},b={},o,d,h=[],c=[],e,g,f;if(k){for(n=0,m=k.length;n<m;n++){if(k[n].name.toLowerCase()=="description"){p+=" "+(k[n].content.replace(/[^a-zA-Zа-яА-Я]/g," ").replace(/\s+$/g,"").replace(/^\s+/g,"").replace(/[\n\t\r\f\s]{2,}/g," "))+" "}if(k[n].name.toLowerCase()=="keywords"){p+=" "+(k[n].content.replace(/[^a-zA-Zа-яА-Я]/g," ").replace(/\s+$/g,"").replace(/^\s+/g,"").replace(/[\n\t\r\f\s]{2,}/g," "))+" "}}}l=p.toLowerCase().split(" ");for(g=0;g<l.length;g++){o=l[g].replace(/^\s*/,"").replace(/\s*$/,"");if(o.length>3){d=this.getSW(o);if(!this.keyword_ignore[d]){j[d]=o;b[d]=b[d]||0;b[d]++}}}h=[];for(f in b){if(b[f]>1){h.push({t:j[f],s:f,f:b[f]})}}c=h.sort(function(q,i){return(q.f>i.f)?-1:((q.f<i.f)?1:0)});e=[];for(g=0;g<c.length;g++){e.push(c[g].t)}return e.join(" ")};this.rand=Math.floor(Math.random()*1000000);this.iframe_id="yottos_remarketing"+this.rand;try{this.el=document.createElement("<iframe name="+this.iframe_id+">")}catch(a){this.el=document.createElement("iframe");this.el.name=this.iframe_id}this.elf=document.createElement("form");this.el.id=this.iframe_id;this.elf.id="f"+this.iframe_id;this.elf.name="f"+this.iframe_id;this.elf.target=this.iframe_id;this.elf.method="POST";this.el.style.width="0px";this.el.marginHeight="0px";this.el.marginWidth="0px";this.el.style.height="0px";this.elf.style.width="0px";this.elf.style.height="0px";this.elf.style.border="0px";this.el.style.border="0px";this.el.style.margin="0px";this.elf.style.margin="0px";this.el.style.display="none";this.elf.style.display="none";this.el.style.visibility="hidden";this.elf.style.visibility="hidden";this.el.style.position="absolute";this.elf.style.position="absolute";this.el.scrolling="no";this.el.vspace="0";this.el.hspace="0";this.el.frameborder="0";this.el.allowtransparency="true";this.yottos_remarketing_time=typeof yottos_remarketing_time=="number"?yottos_remarketing_time:365;this.yottos_price=typeof yottos_price=="number"?yottos_price:0;this.yottos_gender=typeof yottos_gender=="string"?yottos_gender:"n";this.yottos_ac=typeof yottos_ac=="string"?yottos_ac:"";this.yottos_remarketing_offer_id=typeof yottos_remarketing_offer_id=="string"||typeof yottos_remarketing_offer_id=="number"||typeof yottos_remarketing_offer_id=="object"?yottos_remarketing_offer_id:undefined;this.yottos_exclude_offer_id=typeof yottos_exclude_offer_id=="string"||typeof yottos_exclude_offer_id=="number"||typeof yottos_exclude_offer_id=="object"?yottos_exclude_offer_id:undefined;this.offer_id=typeof yottos_offer_id=="string"||typeof yottos_offer_id=="number"||typeof yottos_offer_id=="object"?yottos_offer_id:undefined;this.yottos_target=typeof yottos_target=="string"?yottos_target:"";this.yottos_action=typeof yottos_action=="string"?yottos_action:"add";this.cid="";this.getQueryVariable=function(b){var d=window.location.search.substring(1);var e=d.split("&");for(var c=0;c<e.length;c++){var f=e[c].split("=");if(decodeURIComponent(f[0])===b){return decodeURIComponent(f[1])}}return""};this.getCook=function(b){var c=new RegExp(""+b+"[^;]+").exec(document.cookie);return decodeURIComponent(!!c?c.toString().replace(/^[^=]+./,""):"")};this.setCook=function(e,f,d){d=d||{};if(d.expires&&d.expires.toUTCString){d.expires=d.expires.toUTCString()}var b=encodeURIComponent(e)+"="+encodeURIComponent(f);for(var c in d){if(d.hasOwnProperty(c)){b+="; "+c;var g=d[c];if(g!==true){b+="="+g}}}document.cookie=b};this.isGuid=function(c){if(c[0]==="{"){c=c.substring(1,c.length-1)}var b=/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;return b.test(c)};this.load_cid=function(){var b=this.getQueryVariable("yt_cid");var c=this.getCook("yt_cid");if(this.isGuid(b)){this.cid=b}else{if(this.isGuid(c)){this.cid=c}}if(this.isGuid(this.cid)){this.setCook("yt_cid",this.cid,{"max-age":7200,path:"/"})}};this.strVal=function(d){var f,e=0,b="";for(e=0;e<d.length;e++){f=d.charCodeAt(e);if((f>47)&&(f<58)){b+=String.fromCharCode(f)}else{if((f>64)&&(f<91)){b+=String.fromCharCode(f)}else{if((f>96)&&(f<123)){b+=String.fromCharCode(f)}else{if((f>1039)&&(f<1104)){b+=String.fromCharCode(f)}else{b+=String.fromCharCode(32)}}}}}return b};this.getCost=function(){return this.yottos_price};this.getGender=function(){var b=this.yottos_gender.toLowerCase();if(b=="m"){return"m"}else{if(b=="w"){return"w"}else{return"n"}}};this.getSearch=function(d){var h=0,g="",c=0,f=0,b=[],e=[{name:"Mail",pattern:"go.mail.ru",param:"q"},{name:"Google",pattern:"google.",param:"q"},{name:"Google",pattern:"google.",param:"as_q"},{name:"Live Search",pattern:"search.live.com",param:"q"},{name:"Bing",pattern:"bing",param:"q"},{name:"Rambler",pattern:"rambler.ru",param:"query"},{name:"Rambler",pattern:"rambler.ru",param:"words"},{name:"Yahoo!",pattern:"search.yahoo.com",param:"p"},{name:"Nigma",pattern:"nigma.ru",param:"s"},{name:"Nigma",pattern:"nigma.ru",param:"q"},{name:"MSN",pattern:"search.msn.com",param:"q"},{name:"Ask",pattern:"ask.com",param:"q"},{name:"QIP",pattern:"search.qip.ru",param:"query"},{name:"RapidAll",pattern:"rapidall.com",param:"keyword"},{name:"Яндекс.Картинки",pattern:"images.yandex",param:"text"},{name:"Яндекс.Mobile",pattern:"m.yandex",param:"query"},{name:"Яндекс",pattern:"hghltd.yandex",param:"text"},{name:"Яндекс",pattern:"yandex",param:"text"},{name:"УкрНет",pattern:"ukr.net",param:"q"},{name:"УкрНет",pattern:"ukr.net",param:"q"},{name:"meta",pattern:"meta.ua",param:"q"},{name:"findes",pattern:"findes.com.ua",param:"q"},{name:"webalta",pattern:"webalta",param:"q"},{name:"bigmir",pattern:"bigmir.net",param:"z"},{name:"i.ua",pattern:"i.ua",param:"q"},{name:"online.ua",pattern:"online.ua",param:"q"},{name:"liveinternet.ru",pattern:"liveinternet.ru",param:"q"},{name:"all.by",pattern:"all.by",param:"query"}];for(f=0;f<d.length;f++){for(c=0;c<e.length;c++){if(-1<d[f].hostname.indexOf(e[c]["pattern"])){g=d[f].search.replace(new RegExp("\\?","g"),"").split("&");for(h=0;h<g.length;h++){if(g[h].split("=")[0]==e[c]["param"]){b.push(decodeURIComponent(g[h].split("=")[1]))}}}}}return b.join(" ")};this.elfs=function(f){var c,b,d={url:this.y_url,referrer:this.referrer,title:this.title,offer_id:this.offer_id,time:this.yottos_remarketing_time,ac:this.yottos_ac,gender:this.getGender(),cost:this.getCost(),context:this.getText(),search:this.getSearch([this.parser,this.parser_ref])};while(f.firstChild){f.removeChild(f.firstChild)}for(c in d){b=document.createElement("input");b.setAttribute("type","hidden");b.setAttribute("name",c);b.setAttribute("value",d[c]);f.appendChild(b)}};this.setOfferId=function(b,e,f,d){var c=[];d=typeof d=="string"&&(d=="retargeting"||d=="exclude_advertizer")?d:"retargeting";if(!(typeof b=="string"||typeof b=="number"||b instanceof Array)){if(typeof this.yottos_remarketing_offer_id!="undefined"){b=this.yottos_remarketing_offer_id;d="remarketing"}else{if(typeof this.yottos_remarketing_offer_id=="undefined"&&typeof this.yottos_exclude_offer_id!="undefined"){b=this.yottos_exclude_offer_id;d="exclude_advertizer"}else{d="remarketing";if(typeof product!="undefined"){if(typeof product.identifier!="undefined"){b=product.identifier}}if(typeof google_tag_params!="undefined"){if(typeof google_tag_params.ecomm_prodid!="undefined"){b=google_tag_params.ecomm_prodid}}if(b===undefined){b=""}}}}e=typeof e=="string"&&(e=="add"||e=="remove")?e:this.yottos_action;f=typeof f=="string"?f:this.yottos_target;if(typeof b=="string"){c=b.replace(new RegExp("\\|","g"),",").split(",")}else{if(typeof b=="number"){c=[b.toString(),]}else{if(b instanceof Array){c=b}}}c=c.map(function(g){if(typeof g=="string"){return g}else{if(typeof g=="number"){return g.toString()}else{return""}}});c=c.map(function(g){return e+"~"+g+"~"+f+"~"+d});this.offer_id=c.join(",")};this.get_utm=function(){var j,i,g=["",],c="",k="",f="",e="",h="",d=this.parser.search;d=d.substring(1,d.length);d=d.split("&");for(j in d){if(d.hasOwnProperty(j)){i=d[j].split("=");if(i[0]=="utm_source"){if(c.length==0){c=i[1]}}if(i[0]=="utm_medium"){if(k.length==0){k=i[1]}}if(i[0]=="utm_campaign"){if(f.length==0){f=i[1]}}if(i[0]=="utm_term"){if(e.length==0){e=i[1]}}if(i[0]=="utm_content"){if(h.length==0){h=i[1]}}}}d=this.parser_ref.search;d=d.substring(1,d.length);d=d.split("&");for(j in d){if(d.hasOwnProperty(j)){i=d[j].split("=");if(i[0]=="utm_source"){if(c.length==0){c=i[1]}}if(i[0]=="utm_medium"){if(k.length==0){k=i[1]}}if(i[0]=="utm_campaign"){if(f.length==0){f=i[1]}}if(i[0]=="utm_term"){if(e.length==0){e=i[1]}}if(i[0]=="utm_content"){if(h.length==0){h=i[1]}}}}if(c.length>0){g.push("utm_source="+c)}if(k.length>0){g.push("utm_medium="+k)}if(f.length>0){g.push("utm_campaign="+f)}if(e.length>0){g.push("utm_term="+e)}if(h.length>0){g.push("utm_content="+h)}return g.join("&")};this.query=function(){return"?rand="+this.rand+this.get_utm()};this.elf.action="https://rg.yottos.com/track.fcgi"+this.query();this.send=function(){if(document.body!=null){if(window.yhhIntervalID){clearInterval(window.yhhIntervalID);window.yhhIntervalID=false}document.body.appendChild(this.elf);document.body.appendChild(this.el);this.elfs(this.elf);document.forms[this.elf.id].submit()}else{if(window.yhhIntervalID==null){window.yhhIntervalID=setInterval((function(b){return function(){b.send()}})(this),2000)}}};this.revent=function(d,b,c){this.setOfferId(d,b,c,"retargeting");this.send()};this.aevent=function(d,b,c){this.setOfferId(d,b,c,"exclude_advertizer");this.send()};this.event=this.revent;this.start=function(){this.setOfferId();this.send();this.load_cid()};this.goal=function(d,b){b=b||"UAH";b=b+"";if(b.length!==3){b="UAH"}d=d||"0";d=d+"";var c=new Image();c.src="https://rg.yottos.com/pixel/track.png?id="+this.yottos_ac+"&price="+d+"&currency="+b+"&action=goal&cid="+this.cid}}window.yhhIntervalID=window.yhhIntervalID||null;(window.ytt=window.ytt||new YottosTracker()).start();