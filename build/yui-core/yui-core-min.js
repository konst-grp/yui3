if(typeof YUI!="undefined"){YUI._YUI=YUI;}var YUI=function(){var c=0,f=this,b=arguments,a=b.length,e=function(h,g){return(h&&h.hasOwnProperty&&(h instanceof g));},d=(typeof YUI_config!=="undefined")&&YUI_config;if(!(e(f,YUI))){f=new YUI();}else{f._init();if(YUI.GlobalConfig){f.applyConfig(YUI.GlobalConfig);}if(d){f.applyConfig(d);}if(!a){f._setup();}}if(a){for(;c<a;c++){f.applyConfig(b[c]);}f._setup();}f.instanceOf=e;return f;};(function(){var q,b,r="@VERSION@",i=".",o="http://yui.yahooapis.com/",u="yui3-js-enabled",d="yui3-css-stamp",m=function(){},h=Array.prototype.slice,s={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},g=(typeof window!="undefined"),f=(g)?window:null,w=(g)?f.document:null,e=w&&w.documentElement,a=e&&e.className,c={},j=new Date().getTime(),n=function(A,z,y,x){if(A&&A.addEventListener){A.addEventListener(z,y,x);}else{if(A&&A.attachEvent){A.attachEvent("on"+z,y);}}},v=function(B,A,z,x){if(B&&B.removeEventListener){try{B.removeEventListener(A,z,x);}catch(y){}}else{if(B&&B.detachEvent){B.detachEvent("on"+A,z);}}},t=function(){YUI.Env.windowLoaded=true;YUI.Env.DOMReady=true;if(g){v(window,"load",t);}},k=function(C,B){var y=C.Env._loader,A=["loader-base"],x=YUI.Env,z=x.mods;if(y){y.ignoreRegistered=false;y.onEnd=null;y.data=null;y.required=[];y.loadType=null;}else{y=new C.Loader(C.config);C.Env._loader=y;}if(z&&z.loader){A=[].concat(A,YUI.Env.loaderExtras);}YUI.Env.core=C.Array.dedupe([].concat(YUI.Env.core,A));return y;},p=function(z,y){for(var x in y){if(y.hasOwnProperty(x)){z[x]=y[x];}}},l={success:true};if(e&&a.indexOf(u)==-1){if(a){a+=" ";}a+=u;e.className=a;}if(r.indexOf("@")>-1){r="3.5.0";}q={applyConfig:function(E){E=E||m;var z,C,B=this.config,D=B.modules,y=B.groups,A=B.aliases,x=this.Env._loader;for(C in E){if(E.hasOwnProperty(C)){z=E[C];if(D&&C=="modules"){p(D,z);}else{if(A&&C=="aliases"){p(A,z);}else{if(y&&C=="groups"){p(y,z);}else{if(C=="win"){B[C]=(z&&z.contentWindow)||z;B.doc=B[C]?B[C].document:null;}else{if(C=="_yuid"){}else{B[C]=z;}}}}}}}if(x){x._config(E);}},_config:function(x){this.applyConfig(x);},_init:function(){var A,z,B=this,x=YUI.Env,y=B.Env,C;B.version=r;if(!y){B.Env={core:["intl-base"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:o,cdn:o+r+"/build/",_idx:0,_used:{},_attached:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(simpleyui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(H,F){var D=H.match(F),G,E;if(D){G=RegExp.leftContext||H.slice(0,H.indexOf(D[0]));E=D[3];if(D[1]){G+="?"+D[1];}G={filter:E,path:G};}return G;},getBase:x&&x.getBase||function(H){var F=(w&&w.getElementsByTagName("script"))||[],I=y.cdn,E,G,D,J;for(G=0,D=F.length;G<D;++G){J=F[G].src;if(J){E=B.Env.parseBasePath(J,H);if(E){A=E.filter;I=E.path;break;}}}return I;}};y=B.Env;y._loaded[r]={};if(x&&B!==YUI){y._yidx=++x._yidx;y._guidp=("yui_"+r+"_"+y._yidx+"_"+j).replace(/\./g,"_").replace(/-/g,"_");}else{if(YUI._YUI){x=YUI._YUI.Env;y._yidx+=x._yidx;y._uidx+=x._uidx;for(C in x){if(!(C in y)){y[C]=x[C];}}delete YUI._YUI;}}B.id=B.stamp(B);c[B.id]=B;}B.constructor=YUI;B.config=B.config||{bootstrap:true,cacheUse:true,debug:true,doc:w,fetchCSS:true,throwFail:true,useBrowserConsole:true,useNativeES5:true,win:f};if(w&&!w.getElementById(d)){z=w.createElement("div");z.innerHTML='<div id="'+d+'" style="position: absolute !important; visibility: hidden !important"></div>';YUI.Env.cssStampEl=z.firstChild;if(w.body){w.body.appendChild(YUI.Env.cssStampEl);}else{e.insertBefore(YUI.Env.cssStampEl,e.firstChild);}}B.config.lang=B.config.lang||"en-US";B.config.base=YUI.config.base||B.Env.getBase(B.Env._BASE_RE);if(!A||(!("mindebug").indexOf(A))){A="min";}A=(A)?"-"+A:A;B.config.loaderPath=YUI.config.loaderPath||"loader/loader"+A+".js";},_setup:function(C){var y,B=this,x=[],A=YUI.Env.mods,z=B.config.core||[].concat(YUI.Env.core);for(y=0;y<z.length;y++){if(A[z[y]]){x.push(z[y]);}}B._attach(["yui-base"]);B._attach(x);if(B.Loader){k(B);}},applyTo:function(D,C,z){if(!(C in s)){this.log(C+": applyTo not allowed","warn","yui");return null;}var y=c[D],B,x,A;if(y){B=C.split(".");x=y;for(A=0;A<B.length;A=A+1){x=x[B[A]];if(!x){this.log("applyTo not found: "+C,"warn","yui");}}return x&&x.apply(y,z);}return null;},add:function(y,F,E,x){x=x||{};var D=YUI.Env,G={name:y,fn:F,version:E,details:x},A={},H,C,B,z=D.versions;D.mods[y]=G;z[E]=z[E]||{};z[E][y]=G;for(B in c){if(c.hasOwnProperty(B)){C=c[B];if(!A[C.id]){A[C.id]=true;H=C.Env._loader;if(H){if(!H.moduleInfo[y]||H.moduleInfo[y].temp){H.addModule(x,y);}}}}}return this;},_attach:function(E,Q){var J,R,P,M,x,H,z,A=YUI.Env.mods,K=YUI.Env.aliases,y=this,I,D=YUI.Env._renderedMods,B=y.Env._loader,F=y.Env._attached,L=E.length,B,C,G,O=[];for(J=0;J<L;J++){R=E[J];P=A[R];O.push(R);if(B&&B.conditions[R]){for(I in B.conditions[R]){if(B.conditions[R].hasOwnProperty(I)){C=B.conditions[R][I];G=C&&((C.ua&&y.UA[C.ua])||(C.test&&C.test(y)));if(G){O.push(C.name);}}}}}E=O;L=E.length;for(J=0;J<L;J++){if(!F[E[J]]){R=E[J];P=A[R];if(K&&K[R]&&!P){y._attach(K[R]);continue;}if(!P){if(B&&B.moduleInfo[R]){P=B.moduleInfo[R];Q=true;}if(!Q&&R){if((R.indexOf("skin-")===-1)&&(R.indexOf("css")===-1)){y.Env._missed.push(R);y.Env._missed=y.Array.dedupe(y.Env._missed);y.message("NOT loaded: "+R,"warn","yui");}}}else{F[R]=true;for(I=0;I<y.Env._missed.length;I++){if(y.Env._missed[I]===R){y.message("Found: "+R+" (was reported as missing earlier)","warn","yui");y.Env._missed.splice(I,1);}}if(B&&D&&D[R]&&D[R].temp){B.getRequires(D[R]);x=[];for(I in B.moduleInfo[R].expanded_map){if(B.moduleInfo[R].expanded_map.hasOwnProperty(I)){x.push(I);}}y._attach(x);}M=P.details;x=M.requires;H=M.use;z=M.after;if(M.lang){x=x||[];x.unshift("intl");}if(x){for(I=0;I<x.length;I++){if(!F[x[I]]){if(!y._attach(x)){return false;}break;}}}if(z){for(I=0;I<z.length;I++){if(!F[z[I]]){if(!y._attach(z,true)){return false;}break;}}}if(P.fn){if(y.config.throwFail){P.fn(y,R);}else{try{P.fn(y,R);}catch(N){y.error("Attach error: "+R,N,R);return false;}}}if(H){for(I=0;
I<H.length;I++){if(!F[H[I]]){if(!y._attach(H)){return false;}break;}}}}}}return true;},_delayCallback:function(x,A){var z=this,y=["event-base"];A=(z.Lang.isObject(A)?A:{event:A});if(A.event==="load"){y.push("event-synthetic");}return function(){var B=arguments;z._use(y,function(){z.on(A.event,function(){B[1].delayUntil=A.event;x.apply(z,B);},A.args);});};},use:function(){var A=h.call(arguments,0),E=A[A.length-1],D=this,C=0,y=[],z,x=D.Env,B=true;if(D.Lang.isFunction(E)){A.pop();if(D.config.delayUntil){E=D._delayCallback(E,D.config.delayUntil);}}else{E=null;}if(D.Lang.isArray(A[0])){A=A[0];}if(D.config.cacheUse){while((z=A[C++])){if(!x._attached[z]){B=false;break;}}if(B){if(A.length){}D._notify(E,l,A);return D;}}if(D._loading){D._useQueue=D._useQueue||new D.Queue();D._useQueue.add([A,E]);}else{D._use(A,function(G,F){G._notify(E,F,A);});}return D;},_notify:function(A,x,y){if(!x.success&&this.config.loadErrorFn){this.config.loadErrorFn.call(this,this,A,x,y);}else{if(A){if(this.Env._missed&&this.Env._missed.length){x.msg="Missing modules: "+this.Env._missed.join();x.success=false;}if(this.config.throwFail){A(this,x);}else{try{A(this,x);}catch(z){this.error("use callback error",z,y);}}}}},_use:function(z,B){if(!this.Array){this._attach(["yui-base"]);}var P,G,Q,L,y=this,R=YUI.Env,A=R.mods,x=y.Env,D=x._used,O=R.aliases,K=R._loaderQueue,U=z[0],F=y.Array,S=y.config,E=S.bootstrap,M=[],N,I=[],T=true,C=S.fetchCSS,J=function(aa,ad){var Y=0,ac=[],W,Z,X,ab,V;if(!aa.length){return;}if(O){Z=aa.length;for(Y=0;Y<Z;Y++){if(O[aa[Y]]&&!A[aa[Y]]){ac=[].concat(ac,O[aa[Y]]);}else{ac.push(aa[Y]);}}aa=ac;}Z=aa.length;for(Y=0;Y<Z;Y++){W=aa[Y];if(!ad){I.push(W);}if(D[W]){continue;}X=A[W];ab=null;V=null;if(X){D[W]=true;ab=X.details.requires;V=X.details.use;}else{if(!R._loaded[r][W]){M.push(W);}else{D[W]=true;}}if(ab&&ab.length){J(ab);}if(V&&V.length){J(V,1);}}},H=function(Z){var X=Z||{success:true,msg:"not dynamic"},W,V,Y=true,aa=X.data;y._loading=false;if(aa){V=M;M=[];I=[];J(aa);W=M.length;if(W){if([].concat(M).sort().join()==V.sort().join()){W=false;}}}if(W&&aa){y._loading=true;y._use(M,function(){if(y._attach(aa)){y._notify(B,X,aa);}});}else{if(aa){Y=y._attach(aa);}if(Y){y._notify(B,X,z);}}if(y._useQueue&&y._useQueue.size()&&!y._loading){y._use.apply(y,y._useQueue.next());}};if(U==="*"){z=[];for(N in A){if(A.hasOwnProperty(N)){z.push(N);}}T=y._attach(z);if(T){H();}return y;}if((A.loader||A["loader-base"])&&!y.Loader){y._attach(["loader"+((!A.loader)?"-base":"")]);}if(E&&y.Loader&&z.length){G=k(y);G.require(z);G.ignoreRegistered=true;G._boot=true;G.calculate(null,(C)?null:"js");z=G.sorted;G._boot=false;}J(z);P=M.length;if(P){M=F.dedupe(M);P=M.length;}if(E&&P&&y.Loader){y._loading=true;G=k(y);G.onEnd=H;G.context=y;G.data=z;G.ignoreRegistered=false;G.require(z);G.insert(null,(C)?null:"js");}else{if(E&&P&&y.Get&&!x.bootstrapped){y._loading=true;Q=function(){y._loading=false;K.running=false;x.bootstrapped=true;R._bootstrapping=false;if(y._attach(["loader"])){y._use(z,B);}};if(R._bootstrapping){K.add(Q);}else{R._bootstrapping=true;y.Get.script(S.base+S.loaderPath,{onEnd:Q});}}else{T=y._attach(z);if(T){H();}}}return y;},namespace:function(){var y=arguments,C,A=0,z,B,x;for(;A<y.length;A++){C=this;x=y[A];if(x.indexOf(i)>-1){B=x.split(i);for(z=(B[0]=="YAHOO")?1:0;z<B.length;z++){C[B[z]]=C[B[z]]||{};C=C[B[z]];}}else{C[x]=C[x]||{};C=C[x];}}return C;},log:m,message:m,dump:function(x){return""+x;},error:function(B,y,A){var z=this,x;if(z.config.errorFn){x=z.config.errorFn.apply(z,arguments);}if(!x){throw (y||new Error(B));}else{z.message(B,"error",""+A);}return z;},guid:function(x){var y=this.Env._guidp+"_"+(++this.Env._uidx);return(x)?(x+y):y;},stamp:function(z,A){var x;if(!z){return z;}if(z.uniqueID&&z.nodeType&&z.nodeType!==9){x=z.uniqueID;}else{x=(typeof z==="string")?z:z._yuid;}if(!x){x=this.guid();if(!A){try{z._yuid=x;}catch(y){x=null;}}}return x;},destroy:function(){var x=this;if(x.Event){x.Event._unload();}delete c[x.id];delete x.Env;delete x.config;}};YUI.prototype=q;for(b in q){if(q.hasOwnProperty(b)){YUI[b]=q[b];}}YUI.applyConfig=function(x){if(!x){return;}if(YUI.GlobalConfig){this.prototype.applyConfig.call(this,YUI.GlobalConfig);}this.prototype.applyConfig.call(this,x);YUI.GlobalConfig=this.config;};YUI._init();if(g){n(window,"load",t);}else{t();}YUI.Env.add=n;YUI.Env.remove=v;if(typeof exports=="object"){exports.YUI=YUI;}}());YUI.add("yui-base",function(b,h){var j=b.Lang||(b.Lang={}),o=String.prototype,l=Object.prototype.toString,a={"undefined":"undefined","number":"number","boolean":"boolean","string":"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},c=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,s=/^\s+|\s+$/g,e=/\{\s*\[(?:native code|function)\]\s*\}/i;j._isNative=function(w){return !!(b.config.useNativeES5&&w&&e.test(w));};j.isArray=j._isNative(Array.isArray)?Array.isArray:function(w){return j.type(w)==="array";};j.isBoolean=function(w){return typeof w==="boolean";};j.isDate=function(w){return j.type(w)==="date"&&w.toString()!=="Invalid Date"&&!isNaN(w);};j.isFunction=function(w){return j.type(w)==="function";};j.isNull=function(w){return w===null;};j.isNumber=function(w){return typeof w==="number"&&isFinite(w);};j.isObject=function(y,x){var w=typeof y;return(y&&(w==="object"||(!x&&(w==="function"||j.isFunction(y)))))||false;};j.isString=function(w){return typeof w==="string";};j.isUndefined=function(w){return typeof w==="undefined";};j.isValue=function(x){var w=j.type(x);switch(w){case"number":return isFinite(x);case"null":case"undefined":return false;default:return !!w;}};j.now=Date.now||function(){return new Date().getTime();};j.sub=function(w,x){return w.replace?w.replace(c,function(y,z){return j.isUndefined(x[z])?y:x[z];}):w;};j.trim=o.trim?function(w){return w&&w.trim?w.trim():w;}:function(w){try{return w.replace(s,"");}catch(x){return w;}};j.trimLeft=o.trimLeft?function(w){return w.trimLeft();}:function(w){return w.replace(/^\s+/,"");
};j.trimRight=o.trimRight?function(w){return w.trimRight();}:function(w){return w.replace(/\s+$/,"");};j.type=function(w){return a[typeof w]||a[l.call(w)]||(w?"object":"null");};var f=b.Lang,r=Array.prototype,p=Object.prototype.hasOwnProperty;function k(y,B,A){var x,w;B||(B=0);if(A||k.test(y)){try{return r.slice.call(y,B);}catch(z){w=[];for(x=y.length;B<x;++B){w.push(y[B]);}return w;}}return[y];}b.Array=k;k.dedupe=function(B){var A={},y=[],x,z,w;for(x=0,w=B.length;x<w;++x){z=B[x];if(!p.call(A,z)){A[z]=1;y.push(z);}}return y;};k.each=k.forEach=f._isNative(r.forEach)?function(y,w,x){r.forEach.call(y||[],w,x||b);return b;}:function(A,y,z){for(var x=0,w=(A&&A.length)||0;x<w;++x){if(x in A){y.call(z||b,A[x],x,A);}}return b;};k.hash=function(z,x){var A={},B=(x&&x.length)||0,y,w;for(y=0,w=z.length;y<w;++y){if(y in z){A[z[y]]=B>y&&y in x?x[y]:true;}}return A;};k.indexOf=f._isNative(r.indexOf)?function(y,w,x){return r.indexOf.call(y,w,x);}:function(z,x,y){var w=z.length;y=+y||0;y=(y>0||-1)*Math.floor(Math.abs(y));if(y<0){y+=w;if(y<0){y=0;}}for(;y<w;++y){if(y in z&&z[y]===x){return y;}}return -1;};k.numericSort=function(x,w){return x-w;};k.some=f._isNative(r.some)?function(y,w,x){return r.some.call(y,w,x);}:function(A,y,z){for(var x=0,w=A.length;x<w;++x){if(x in A&&y.call(z,A[x],x,A)){return true;}}return false;};k.test=function(y){var w=0;if(f.isArray(y)){w=1;}else{if(f.isObject(y)){try{if("length" in y&&!y.tagName&&!y.alert&&!y.apply){w=2;}}catch(x){}}}return w;};function u(){this._init();this.add.apply(this,arguments);}u.prototype={_init:function(){this._q=[];},next:function(){return this._q.shift();},last:function(){return this._q.pop();},add:function(){this._q.push.apply(this._q,arguments);return this;},size:function(){return this._q.length;}};b.Queue=u;YUI.Env._loaderQueue=YUI.Env._loaderQueue||new u();var n="__",p=Object.prototype.hasOwnProperty,m=b.Lang.isObject;b.cached=function(y,w,x){w||(w={});return function(z){var A=arguments.length>1?Array.prototype.join.call(arguments,n):String(z);if(!(A in w)||(x&&w[A]==x)){w[A]=y.apply(y,arguments);}return w[A];};};b.getLocation=function(){var w=b.config.win;return w&&w.location;};b.merge=function(){var z=0,x=arguments.length,w={},y,A;for(;z<x;++z){A=arguments[z];for(y in A){if(p.call(A,y)){w[y]=A[y];}}}return w;};b.mix=function(w,x,D,y,A,E){var B,H,G,z,I,C,F;if(!w||!x){return w||b;}if(A){if(A===2){b.mix(w.prototype,x.prototype,D,y,0,E);}G=A===1||A===3?x.prototype:x;F=A===1||A===4?w.prototype:w;if(!G||!F){return w;}}else{G=x;F=w;}B=D&&!E;if(y){for(z=0,C=y.length;z<C;++z){I=y[z];if(!p.call(G,I)){continue;}H=B?false:I in F;if(E&&H&&m(F[I],true)&&m(G[I],true)){b.mix(F[I],G[I],D,null,0,E);}else{if(D||!H){F[I]=G[I];}}}}else{for(I in G){if(!p.call(G,I)){continue;}H=B?false:I in F;if(E&&H&&m(F[I],true)&&m(G[I],true)){b.mix(F[I],G[I],D,null,0,E);}else{if(D||!H){F[I]=G[I];}}}if(b.Object._hasEnumBug){b.mix(F,G,D,b.Object._forceEnum,A,E);}}return w;};var f=b.Lang,p=Object.prototype.hasOwnProperty,v,g=b.Object=f._isNative(Object.create)?function(w){return Object.create(w);}:(function(){function w(){}return function(x){w.prototype=x;return new w();};}()),d=g._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],t=g._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),q=g._hasProtoEnumBug=(function(){}).propertyIsEnumerable("prototype"),i=g.owns=function(x,w){return !!x&&p.call(x,w);};g.hasKey=i;g.keys=f._isNative(Object.keys)?Object.keys:function(A){if(!f.isObject(A)){throw new TypeError("Object.keys called on a non-object");}var z=[],y,x,w;if(q&&typeof A==="function"){for(x in A){if(i(A,x)&&x!=="prototype"){z.push(x);}}}else{for(x in A){if(i(A,x)){z.push(x);}}}if(t){for(y=0,w=d.length;y<w;++y){x=d[y];if(i(A,x)){z.push(x);}}}return z;};g.values=function(A){var z=g.keys(A),y=0,w=z.length,x=[];for(;y<w;++y){x.push(A[z[y]]);}return x;};g.size=function(x){try{return g.keys(x).length;}catch(w){return 0;}};g.hasValue=function(x,w){return b.Array.indexOf(g.values(x),w)>-1;};g.each=function(z,x,A,y){var w;for(w in z){if(y||i(z,w)){x.call(A||b,z[w],w,z);}}return b;};g.some=function(z,x,A,y){var w;for(w in z){if(y||i(z,w)){if(x.call(A||b,z[w],w,z)){return true;}}}return false;};g.getValue=function(A,z){if(!f.isObject(A)){return v;}var x,y=b.Array(z),w=y.length;for(x=0;A!==v&&x<w;x++){A=A[y[x]];}return A;};g.setValue=function(C,A,B){var w,z=b.Array(A),y=z.length-1,x=C;if(y>=0){for(w=0;x!==v&&w<y;w++){x=x[z[w]];}if(x!==v){x[z[w]]=B;}else{return v;}}return C;};g.isEmpty=function(w){return !g.keys(Object(w)).length;};YUI.Env.parseUA=function(C){var B=function(F){var G=0;return parseFloat(F.replace(/\./g,function(){return(G++==1)?"":".";}));},E=b.config.win,w=E&&E.navigator,z={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,accel:false,webos:0,caja:w&&w.cajaVersion,secure:false,os:null,nodejs:0},x=C||w&&w.userAgent,D=E&&E.location,y=D&&D.href,A;z.userAgent=x;z.secure=y&&(y.toLowerCase().indexOf("https")===0);if(x){if((/windows|win32/i).test(x)){z.os="windows";}else{if((/macintosh|mac_powerpc/i).test(x)){z.os="macintosh";}else{if((/android/i).test(x)){z.os="android";}else{if((/symbos/i).test(x)){z.os="symbos";}else{if((/linux/i).test(x)){z.os="linux";}else{if((/rhino/i).test(x)){z.os="rhino";}}}}}}if((/KHTML/).test(x)){z.webkit=1;}if((/IEMobile|XBLWP7/).test(x)){z.mobile="windows";}if((/Fennec/).test(x)){z.mobile="gecko";}A=x.match(/AppleWebKit\/([^\s]*)/);if(A&&A[1]){z.webkit=B(A[1]);z.safari=z.webkit;if(/PhantomJS/.test(x)){A=x.match(/PhantomJS\/([^\s]*)/);if(A&&A[1]){z.phantomjs=B(A[1]);}}if(/ Mobile\//.test(x)||(/iPad|iPod|iPhone/).test(x)){z.mobile="Apple";A=x.match(/OS ([^\s]*)/);if(A&&A[1]){A=B(A[1].replace("_","."));}z.ios=A;z.os="ios";z.ipad=z.ipod=z.iphone=0;A=x.match(/iPad|iPod|iPhone/);if(A&&A[0]){z[A[0].toLowerCase()]=z.ios;}}else{A=x.match(/NokiaN[^\/]*|webOS\/\d\.\d/);if(A){z.mobile=A[0];}if(/webOS/.test(x)){z.mobile="WebOS";
A=x.match(/webOS\/([^\s]*);/);if(A&&A[1]){z.webos=B(A[1]);}}if(/ Android/.test(x)){if(/Mobile/.test(x)){z.mobile="Android";}A=x.match(/Android ([^\s]*);/);if(A&&A[1]){z.android=B(A[1]);}}if(/Silk/.test(x)){A=x.match(/Silk\/([^\s]*)\)/);if(A&&A[1]){z.silk=B(A[1]);}if(!z.android){z.android=2.34;z.os="Android";}if(/Accelerated=true/.test(x)){z.accel=true;}}}A=x.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/);if(A&&A[1]&&A[2]){z.chrome=B(A[2]);z.safari=0;if(A[1]==="CrMo"){z.mobile="chrome";}}else{A=x.match(/AdobeAIR\/([^\s]*)/);if(A){z.air=A[0];}}}if(!z.webkit){if(/Opera/.test(x)){A=x.match(/Opera[\s\/]([^\s]*)/);if(A&&A[1]){z.opera=B(A[1]);}A=x.match(/Version\/([^\s]*)/);if(A&&A[1]){z.opera=B(A[1]);}if(/Opera Mobi/.test(x)){z.mobile="opera";A=x.replace("Opera Mobi","").match(/Opera ([^\s]*)/);if(A&&A[1]){z.opera=B(A[1]);}}A=x.match(/Opera Mini[^;]*/);if(A){z.mobile=A[0];}}else{A=x.match(/MSIE\s([^;]*)/);if(A&&A[1]){z.ie=B(A[1]);}else{A=x.match(/Gecko\/([^\s]*)/);if(A){z.gecko=1;A=x.match(/rv:([^\s\)]*)/);if(A&&A[1]){z.gecko=B(A[1]);}}}}}}if(!C){if(typeof process=="object"){if(process.versions&&process.versions.node){z.os=process.platform;z.nodejs=B(process.versions.node);}}YUI.Env.UA=z;}return z;};b.UA=YUI.Env.UA||YUI.Env.parseUA();b.UA.compareVersions=function(y,x){var D,C,A,B,z,w;if(y===x){return 0;}C=(y+"").split(".");B=(x+"").split(".");for(z=0,w=Math.max(C.length,B.length);z<w;++z){D=parseInt(C[z],10);A=parseInt(B[z],10);isNaN(D)&&(D=0);isNaN(A)&&(A=0);if(D<A){return -1;}if(D>A){return 1;}}return 0;};YUI.Env.aliases={"anim":["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"app":["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","router","view","view-node-map"],"attribute":["attribute-base","attribute-complex"],"autocomplete":["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],"base":["base-base","base-pluginhost","base-build"],"cache":["cache-base","cache-offline","cache-plugin"],"collection":["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],"controller":["router"],"dataschema":["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],"datasource":["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],"datatable":["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],"datatable-deprecated":["datatable-base-deprecated","datatable-datasource-deprecated","datatable-sort-deprecated","datatable-scroll-deprecated"],"datatype":["datatype-number","datatype-date","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],"dd":["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],"dom":["dom-base","dom-screen","dom-style","selector-native","selector"],"editor":["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],"event":["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],"handlebars":["handlebars-compiler"],"highlight":["highlight-base","highlight-accentfold"],"history":["history-base","history-hash","history-hash-ie","history-html5"],"io":["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],"json":["json-parse","json-stringify"],"loader":["loader-base","loader-rollup","loader-yui3"],"node":["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],"pluginhost":["pluginhost-base","pluginhost-config"],"querystring":["querystring-parse","querystring-stringify"],"recordset":["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],"resize":["resize-base","resize-proxy","resize-constrain"],"slider":["slider-base","slider-value-range","clickable-rail","range-slider"],"text":["text-accentfold","text-wordbreak"],"widget":["widget-base","widget-htmlparser","widget-skin","widget-uievents"]};},"@VERSION@");