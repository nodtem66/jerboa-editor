(function(){try{
var gadgets=window.gadgets;var shindig=window.shindig;var osapi=window.osapi;
var gadgets=gadgets||{},shindig=shindig||{},osapi=osapi||{};
;
gadgets.config=function(){var A={};
var B;
return{register:function(E,D,C){var F=A[E];
if(!F){F=[];
A[E]=F
}F.push({validators:D||{},callback:C})
},get:function(C){if(C){return B[C]||{}
}return B
},init:function(E,L){B=E;
for(var C in A){if(A.hasOwnProperty(C)){var D=A[C],I=E[C];
for(var H=0,G=D.length;
H<G;
++H){var J=D[H];
if(I&&!L){var F=J.validators;
for(var K in F){if(F.hasOwnProperty(K)){if(!F[K](I[K])){throw new Error('Invalid config value "'+I[K]+'" for parameter "'+K+'" in component "'+C+'"')
}}}}if(J.callback){J.callback(E)
}}}}},EnumValidator:function(F){var E=[];
if(arguments.length>1){for(var D=0,C;
(C=arguments[D]);
++D){E.push(C)
}}else{E=F
}return function(H){for(var G=0,I;
(I=E[G]);
++G){if(H===E[G]){return true
}}return false
}
},RegExValidator:function(C){return function(D){return C.test(D)
}
},ExistsValidator:function(C){return typeof C!=="undefined"
},NonEmptyStringValidator:function(C){return typeof C==="string"&&C.length>0
},BooleanValidator:function(C){return typeof C==="boolean"
},LikeValidator:function(C){return function(E){for(var F in C){if(C.hasOwnProperty(F)){var D=C[F];
if(!D(E[F])){return false
}}}return true
}
}}
}();;
gadgets.config.isGadget=false;
gadgets.config.isContainer=true;;
gadgets.util=function(){function G(K){var L;
var I=K.indexOf("?");
var J=K.indexOf("#");
if(J===-1){L=K.substr(I+1)
}else{L=[K.substr(I+1,J-I-1),"&",K.substr(J+1)].join("")
}return L.split("&")
}var E=null;
var D={};
var C={};
var F=[];
var A={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function B(I,J){return String.fromCharCode(J)
}function H(I){D=I["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,H)
}return{getUrlParameters:function(R){var J=typeof R==="undefined";
if(E!==null&&J){return E
}var N={};
var K=G(R||document.location.href);
var P=window.decodeURIComponent?decodeURIComponent:unescape;
for(var M=0,L=K.length;
M<L;
++M){var O=K[M].indexOf("=");
if(O===-1){continue
}var I=K[M].substring(0,O);
var Q=K[M].substring(O+1);
Q=Q.replace(/\+/g," ");
N[I]=P(Q)
}if(J){E=N
}return N
},makeClosure:function(L,N,M){var K=[];
for(var J=2,I=arguments.length;
J<I;
++J){K.push(arguments[J])
}return function(){var O=K.slice();
for(var Q=0,P=arguments.length;
Q<P;
++Q){O.push(arguments[Q])
}return N.apply(L,O)
}
},makeEnum:function(J){var K,I,L={};
for(K=0;
(I=J[K]);
++K){L[I]=I
}return L
},getFeatureParameters:function(I){return typeof D[I]==="undefined"?null:D[I]
},hasFeature:function(I){return typeof D[I]!=="undefined"
},getServices:function(){return C
},registerOnLoadHandler:function(I){F.push(I)
},runOnLoadHandlers:function(){for(var J=0,I=F.length;
J<I;
++J){F[J]()
}},escape:function(I,M){if(!I){return I
}else{if(typeof I==="string"){return gadgets.util.escapeString(I)
}else{if(typeof I==="array"){for(var L=0,J=I.length;
L<J;
++L){I[L]=gadgets.util.escape(I[L])
}}else{if(typeof I==="object"&&M){var K={};
for(var N in I){if(I.hasOwnProperty(N)){K[gadgets.util.escapeString(N)]=gadgets.util.escape(I[N],true)
}}return K
}}}}return I
},escapeString:function(M){if(!M){return M
}var J=[],L,N;
for(var K=0,I=M.length;
K<I;
++K){L=M.charCodeAt(K);
N=A[L];
if(N===true){J.push("&#",L,";")
}else{if(N!==false){J.push(M.charAt(K))
}}}return J.join("")
},unescapeString:function(I){if(!I){return I
}return I.replace(/&#([0-9]+);/g,B)
},attachBrowserEvent:function(K,J,L,I){if(typeof K.addEventListener!="undefined"){K.addEventListener(J,L,I)
}else{if(typeof K.attachEvent!="undefined"){K.attachEvent("on"+J,L)
}else{gadgets.warn("cannot attachBrowserEvent: "+J)
}}},removeBrowserEvent:function(K,J,L,I){if(K.removeEventListener){K.removeEventListener(J,L,I)
}else{if(K.detachEvent){K.detachEvent("on"+J,L)
}else{gadgets.warn("cannot removeBrowserEvent: "+J)
}}}}
}();
gadgets.util.getUrlParameters();;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.util,"escapeString"],[gadgets.util,"getFeatureParameters"],[gadgets.util,"getUrlParameters"],[gadgets.util,"hasFeature"],[gadgets.util,"registerOnLoadHandler"],[gadgets.util,"unescapeString"]])
});;
gadgets.log=(function(){var E=1;
var A=2;
var F=3;
var C=4;
var D=function(I){B(E,I)
};
gadgets.warn=function(I){B(A,I)
};
gadgets.error=function(I){B(F,I)
};
gadgets.setLogLevel=function(I){H=I
};
function B(J,I){if(J<H||!G){return 
}if(J===A&&G.warn){G.warn(I)
}else{if(J===F&&G.error){G.error(I)
}else{if(G.log){G.log(I)
}}}}D.INFO=E;
D.WARNING=A;
D.NONE=C;
var H=E;
var G=window.console?window.console:window.opera?window.opera.postError:undefined;
return D
})();;
var tamings___=tamings___||[];
tamings___.push(function(A){___.grantRead(gadgets.log,"INFO");
___.grantRead(gadgets.log,"WARNING");
___.grantRead(gadgets.log,"ERROR");
___.grantRead(gadgets.log,"NONE");
caja___.whitelistFuncs([[gadgets,"log"],[gadgets,"warn"],[gadgets,"error"],[gadgets,"setLogLevel"]])
});;
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var A=/___$/;
return{parse:function(C){try{return window.JSON.parse(C)
}catch(B){return false
}},stringify:function(C){try{return window.JSON.stringify(C,function(E,D){return !A.test(E)?D:null
})
}catch(B){return null
}}}
})()
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
}gadgets.json.flatten=function(C){var D={};
if(C===null||C===undefined){return D
}for(var A in C){if(C.hasOwnProperty(A)){var B=C[A];
if(null===B||undefined===B){continue
}D[A]=(typeof B==="string")?B:gadgets.json.stringify(B)
}}return D
};;
var tamings___=tamings___||[];
tamings___.push(function(A){___.tamesTo(gadgets.json.stringify,safeJSON.stringify);
___.tamesTo(gadgets.json.parse,safeJSON.parse)
});;
shindig.Auth=function(){var authToken=null;
var trusted=null;
function addParamsToToken(urlParams){var args=authToken.split("&");
for(var i=0;
i<args.length;
i++){var nameAndValue=args[i].split("=");
if(nameAndValue.length===2){var name=nameAndValue[0];
var value=nameAndValue[1];
if(value==="$"){value=encodeURIComponent(urlParams[name]);
args[i]=name+"="+value
}}}authToken=args.join("&")
}function init(configuration){var urlParams=gadgets.util.getUrlParameters();
var config=configuration["shindig.auth"]||{};
if(config.authToken){authToken=config.authToken
}else{if(urlParams.st){authToken=urlParams.st
}}if(authToken!==null){addParamsToToken(urlParams)
}if(config.trustedJson){trusted=eval("("+config.trustedJson+")")
}}gadgets.config.register("shindig.auth",null,init);
return{getSecurityToken:function(){return authToken
},updateSecurityToken:function(newToken){authToken=newToken
},getTrustedData:function(){return trusted
}}
};;
shindig.auth=new shindig.Auth();;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var C,F;
var G;
var I=false;
var H=false;
var D=false;
function A(){var J=false;
function K(L){if(L.data=="postmessage.test"){J=true;
if(typeof L.origin==="undefined"){H=true
}}}gadgets.util.attachBrowserEvent(window,"message",K,false);
window.postMessage("postmessage.test","*");
if(J){I=true
}gadgets.util.removeBrowserEvent(window,"message",K,false)
}function E(L){var M=gadgets.json.parse(L.data);
if(D){if(!M||!M.f){return 
}var K=gadgets.rpc.getRelayUrl(M.f)||gadgets.util.getUrlParameters()["parent"];
var J=gadgets.rpc.getOrigin(K);
if(!H?L.origin!==J:L.domain!==/^.+:\/\/([^:]+).*/.exec(J)[1]){return 
}}C(M)
}function B(L,J){var K=gadgets.rpc._parseSiblingId(L);
if(K){return K.origin
}if(L==".."){return J
}else{return document.getElementById(L).src
}}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(J,K){C=J;
F=K;
A();
if(!I){G=function(M,N,L){M.postMessage(N,L)
}
}else{G=function(M,N,L){window.setTimeout(function(){M.postMessage(N,L)
},0)
}
}gadgets.util.attachBrowserEvent(window,"message",E,false);
F("..",true);
return true
},setup:function(L,K,J){D=J;
if(L===".."){if(D){gadgets.rpc._createRelayIframe(K)
}else{gadgets.rpc.call(L,gadgets.rpc.ACK)
}}return true
},call:function(K,O,N){var M=gadgets.rpc._getTargetWin(K);
var L=gadgets.rpc.getRelayUrl(K)||B(K,gadgets.util.getUrlParameters()["parent"]);
var J=gadgets.rpc.getOrigin(L);
if(J){G(M,gadgets.json.stringify(N),J)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}return true
},relayOnload:function(K,J){F(K,true)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.frameElement){gadgets.rpctx.frameElement=function(){var E="__g2c_rpc";
var B="__c2g_rpc";
var D;
var C;
function A(G,K,J){try{if(K!==".."){var F=window.frameElement;
if(typeof F[E]==="function"){if(typeof F[E][B]!=="function"){F[E][B]=function(L){D(gadgets.json.parse(L))
}
}F[E](gadgets.json.stringify(J));
return true
}}else{var I=document.getElementById(G);
if(typeof I[E]==="function"&&typeof I[E][B]==="function"){I[E][B](gadgets.json.stringify(J));
return true
}}}catch(H){}return false
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(F,G){D=F;
C=G;
return true
},setup:function(J,F){if(J!==".."){try{var I=document.getElementById(J);
I[E]=function(K){D(gadgets.json.parse(K))
}
}catch(H){return false
}}if(J===".."){C("..",true);
var G=function(){window.setTimeout(function(){gadgets.rpc.call(J,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(G)
}return true
},call:function(F,H,G){return A(F,H,G)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.nix){gadgets.rpctx.nix=function(){var C="GRPC____NIXVBS_wrapper";
var D="GRPC____NIXVBS_get_wrapper";
var F="GRPC____NIXVBS_handle_message";
var B="GRPC____NIXVBS_create_channel";
var A=10;
var J=500;
var I={};
var H;
var G=0;
function E(){var L=I[".."];
if(L){return 
}if(++G>A){gadgets.warn("Nix transport setup failed, falling back...");
H("..",false);
return 
}if(!L&&window.opener&&"GetAuthToken" in window.opener){L=window.opener;
if(L.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var K=gadgets.rpc.getAuthToken("..");
L.CreateChannel(window[D]("..",K),K);
I[".."]=L;
window.opener=null;
H("..",true);
return 
}}window.setTimeout(function(){E()
},J)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(L,M){H=M;
if(typeof window[D]!=="unknown"){window[F]=function(O){window.setTimeout(function(){L(gadgets.json.parse(O))
},0)
};
window[B]=function(O,Q,P){if(gadgets.rpc.getAuthToken(O)===P){I[O]=Q;
H(O,true)
}};
var K="Class "+C+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+F+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+B+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+D+"(name, auth)\nDim wrap\nSet wrap = New "+C+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+D+" = wrap\nEnd Function";
try{window.execScript(K,"vbscript")
}catch(N){return false
}}return true
},setup:function(O,K){if(O===".."){E();
return true
}try{var M=document.getElementById(O);
var N=window[D](O,K);
M.contentWindow.opener=N
}catch(L){return false
}return true
},call:function(K,N,M){try{if(I[K]){I[K].SendMessage(gadgets.json.stringify(M))
}}catch(L){return false
}return true
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.rmr){gadgets.rpctx.rmr=function(){var G=500;
var E=10;
var H={};
var B;
var I;
function K(P,N,O,M){var Q=function(){document.body.appendChild(P);
P.src="about:blank";
if(M){P.onload=function(){L(M)
}
}P.src=N+"#"+O
};
if(document.body){Q()
}else{gadgets.util.registerOnLoadHandler(function(){Q()
})
}}function C(O){if(typeof H[O]==="object"){return 
}var P=document.createElement("iframe");
var M=P.style;
M.position="absolute";
M.top="0px";
M.border="0";
M.opacity="0";
M.width="10px";
M.height="1px";
P.id="rmrtransport-"+O;
P.name=P.id;
var N=gadgets.rpc.getRelayUrl(O);
if(!N){N=gadgets.rpc.getOrigin(gadgets.util.getUrlParameters()["parent"])+"/robots.txt"
}H[O]={frame:P,receiveWindow:null,relayUri:N,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(O!==".."){K(P,N,A(O))
}D(O)
}function D(O){var Q=null;
H[O].searchCounter++;
try{var N=gadgets.rpc._getTargetWin(O);
if(O===".."){Q=N.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{Q=N.frames["rmrtransport-.."]
}}catch(P){}var M=false;
if(Q){M=F(O,Q)
}if(!M){if(H[O].searchCounter>E){return 
}window.setTimeout(function(){D(O)
},G)
}}function J(N,P,T,S){var O=null;
if(T!==".."){O=H[".."]
}else{O=H[N]
}if(O){if(P!==gadgets.rpc.ACK){O.queue.push(S)
}if(O.waiting||(O.queue.length===0&&!(P===gadgets.rpc.ACK&&S&&S.ackAlone===true))){return true
}if(O.queue.length>0){O.waiting=true
}var M=O.relayUri+"#"+A(N);
try{O.frame.contentWindow.location=M;
var Q=O.width==10?20:10;
O.frame.style.width=Q+"px";
O.width=Q
}catch(R){return false
}}return true
}function A(N){var O=H[N];
var M={id:O.sendId};
if(O){M.d=Array.prototype.slice.call(O.queue,0);
M.d.push({s:gadgets.rpc.ACK,id:O.recvId})
}return gadgets.json.stringify(M)
}function L(X){var U=H[X];
var Q=U.receiveWindow.location.hash.substring(1);
var Y=gadgets.json.parse(decodeURIComponent(Q))||{};
var N=Y.d||[];
var O=false;
var T=false;
var V=0;
var M=(U.recvId-Y.id);
for(var P=0;
P<N.length;
++P){var S=N[P];
if(S.s===gadgets.rpc.ACK){I(X,true);
if(U.waiting){T=true
}U.waiting=false;
var R=Math.max(0,S.id-U.sendId);
U.queue.splice(0,R);
U.sendId=Math.max(U.sendId,S.id||0);
continue
}O=true;
if(++V<=M){continue
}++U.recvId;
B(S)
}if(O||(T&&U.queue.length>0)){var W=(X==="..")?gadgets.rpc.RPC_ID:"..";
J(X,gadgets.rpc.ACK,W,{ackAlone:O})
}}function F(P,S){var O=H[P];
try{var N=false;
N="document" in S;
if(!N){return false
}N=typeof S.document=="object";
if(!N){return false
}var R=S.location.href;
if(R==="about:blank"){return false
}}catch(M){return false
}O.receiveWindow=S;
function Q(){L(P)
}if(typeof S.attachEvent==="undefined"){S.onresize=Q
}else{S.attachEvent("onresize",Q)
}if(P===".."){K(O.frame,O.relayUri,A(P),P)
}else{L(P)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(M,N){B=M;
I=N;
return true
},setup:function(O,M){try{C(O)
}catch(N){gadgets.warn("Caught exception setting up RMR: "+N);
return false
}return true
},call:function(M,O,N){return J(M,N.s,O,N)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.ifpc){gadgets.rpctx.ifpc=function(){var E=[];
var D=0;
var C;
function B(H){var F=[];
for(var I=0,G=H.length;
I<G;
++I){F.push(encodeURIComponent(gadgets.json.stringify(H[I])))
}return F.join("&")
}function A(I){var G;
for(var F=E.length-1;
F>=0;
--F){var J=E[F];
try{if(J&&(J.recyclable||J.readyState==="complete")){J.parentNode.removeChild(J);
if(window.ActiveXObject){E[F]=J=null;
E.splice(F,1)
}else{J.recyclable=false;
G=J;
break
}}}catch(H){}}if(!G){G=document.createElement("iframe");
G.style.border=G.style.width=G.style.height="0px";
G.style.visibility="hidden";
G.style.position="absolute";
G.onload=function(){this.recyclable=true
};
E.push(G)
}G.src=I;
window.setTimeout(function(){document.body.appendChild(G)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(F,G){C=G;
C("..",true);
return true
},setup:function(G,F){C(G,true);
return true
},call:function(F,K,I){var J=gadgets.rpc.getRelayUrl(F);
++D;
if(!J){gadgets.warn("No relay file assigned for IFPC");
return false
}var H=null;
if(I.l){var G=I.a;
H=[J,"#",B([K,D,1,0,B([K,I.s,"","",K].concat(G))])].join("")
}else{H=[J,"#",F,"&",K,"@",D,"&1&0&",encodeURIComponent(gadgets.json.stringify(I))].join("")
}A(H);
return true
}}
}()
};;
if(!gadgets.rpc){gadgets.rpc=function(){var d="__cb";
var j="";
var k="__ack";
var F=500;
var Y=10;
var C="|";
var N={};
var m={};
var U={};
var T={};
var R=0;
var J={};
var K={};
var h={};
var E={};
var L={};
var V={};
var S=(window.top!==window.self);
var P=window.name;
var b=function(){};
var g=0;
var p=1;
var A=2;
var i=(function(){function t(u){return function(){gadgets.log("gadgets.rpc."+u+"("+gadgets.json.stringify(Array.prototype.slice.call(arguments))+"): call ignored. [caller: "+document.location+", isChild: "+S+"]")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:t("init"),setup:t("setup"),call:t("call")}
})();
if(gadgets.util){E=gadgets.util.getUrlParameters()
}function c(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.nix:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function I(y,w){var u=Z;
if(!w){u=i
}L[y]=u;
var t=V[y]||[];
for(var v=0;
v<t.length;
++v){var x=t[v];
x.t=X(y);
u.call(y,x.f,x)
}V[y]=[]
}var a=false,l=false;
function f(){if(l){return 
}function t(){a=true
}gadgets.util.attachBrowserEvent(window,"unload",t,false);
l=true
}function H(t,x,u,w,v){if(!T[x]||T[x]!==u){gadgets.error("Invalid auth token. "+T[x]+" vs "+u);
b(x,A)
}v.onunload=function(){if(K[x]&&!a){b(x,p);
gadgets.rpc.removeReceiver(x)
}};
f();
w=gadgets.json.parse(decodeURIComponent(w));
Z.relayOnload(x,w)
}function q(u){if(u&&typeof u.s==="string"&&typeof u.f==="string"&&u.a instanceof Array){if(T[u.f]){if(T[u.f]!==u.t){gadgets.error("Invalid auth token. "+T[u.f]+" vs "+u.t);
b(u.f,A)
}}if(u.s===k){window.setTimeout(function(){I(u.f,true)
},0);
return 
}if(u.c){u.callback=function(v){gadgets.rpc.call(u.f,d,null,u.c,v)
}
}var t=(N[u.s]||N[j]).apply(u,u.a);
if(u.c&&typeof t!=="undefined"){gadgets.rpc.call(u.f,d,null,u.c,t)
}}}function O(v){if(!v){return""
}v=v.toLowerCase();
if(v.indexOf("//")==0){v=window.location.protocol+v
}if(v.indexOf("://")==-1){v=window.location.protocol+"//"+v
}var w=v.substring(v.indexOf("://")+3);
var t=w.indexOf("/");
if(t!=-1){w=w.substring(0,t)
}var y=v.substring(0,v.indexOf("://"));
var x="";
var z=w.indexOf(":");
if(z!=-1){var u=w.substring(z+1);
w=w.substring(0,z);
if((y==="http"&&u!=="80")||(y==="https"&&u!=="443")){x=":"+u
}}return y+"://"+w+x
}function W(u,t){return"/"+u+(t?C+t:"")
}function Q(w){if(w[0]=="/"){var u=w.indexOf(C);
var v=u>0?w.substring(1,u):w.substring(1);
var t=u>0?w.substring(u+1):null;
return{id:v,origin:t}
}else{return null
}}function s(v){if(typeof v==="undefined"||v===".."){return window.parent
}var u=Q(v);
if(u){return window.top.frames[u.id]
}v=String(v);
var t=window.frames[v];
if(t){return t
}t=document.getElementById(v);
if(t&&t.contentWindow){return t.contentWindow
}return null
}var Z=c();
N[j]=function(){gadgets.warn("Unknown RPC service: "+this.s)
};
N[d]=function(u,t){var v=J[u];
if(v){delete J[u];
v(t)
}};
function o(w,u,t){if(K[w]===true){return 
}if(typeof K[w]==="undefined"){K[w]=0
}var v=s(w);
if(w===".."||v!=null){if(Z.setup(w,u,t)===true){K[w]=true;
return 
}}if(K[w]!==true&&K[w]++<Y){window.setTimeout(function(){o(w,u,t)
},F)
}else{L[w]=i;
K[w]=true
}}function e(u,x){if(typeof h[u]==="undefined"){h[u]=false;
var w=gadgets.rpc.getRelayUrl(u);
if(O(w)!==O(window.location.href)){return false
}var v=s(u);
try{h[u]=v.gadgets.rpc.receiveSameDomain
}catch(t){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof h[u]==="function"){h[u](x);
return true
}return false
}function r(u,t,v){if(!/http(s)?:\/\/.+/.test(t)){if(t.indexOf("//")==0){t=window.location.protocol+t
}else{if(t.charAt(0)=="/"){t=window.location.protocol+"//"+window.location.host+t
}else{if(t.indexOf("://")==-1){t=window.location.protocol+"//"+t
}}}}m[u]=t;
U[u]=!!v
}function X(t){return T[t]
}function D(t,v,u){v=v||"";
T[t]=String(v);
o(t,v,u)
}function B(t,v){function w(AA){var AC=AA?AA.rpc:{};
var y=AC.parentRelayUrl;
if(y.substring(0,7)!=="http://"&&y.substring(0,8)!=="https://"&&y.substring(0,2)!=="//"){if(typeof E.parent==="string"&&E.parent!==""){if(y.substring(0,1)!=="/"){var x=E.parent.lastIndexOf("/");
y=E.parent.substring(0,x+1)+y
}else{y=O(E.parent)+y
}}}var AB=!!AC.useLegacyProtocol;
r("..",y,AB);
if(AB){Z=gadgets.rpctx.ifpc;
Z.init(q,I)
}var z=v||E.forcesecure||false;
D("..",t,z)
}var u={parentRelayUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("rpc",u,w)
}function n(w,t,x){var u=x||E.forcesecure||false;
var v=t||E.parent;
if(v){r("..",v);
D("..",w,u)
}}function M(v,x,t,w){if(v[0]!="/"){if(!gadgets.util){return 
}var AB=document.getElementById(v);
if(!AB){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+v+", element not found.")
}}var z=x||AB.src;
r(v,z);
var AA=gadgets.util.getUrlParameters(z);
var u=t||AA.rpctoken;
var y=w||AA.forcesecure;
D(v,u,y)
}function G(t,v,x,w){if(t===".."){var u=x||E.rpctoken||E.ifpctok||"";
if(window.__isgadget===true){B(u,w)
}else{n(u,v,w)
}}else{M(t,v,x,w)
}}return{config:function(t){if(typeof t.securityCallback==="function"){b=t.securityCallback
}},register:function(u,t){if(u===d||u===k){throw new Error("Cannot overwrite callback/ack service")
}if(u===j){throw new Error("Cannot overwrite default service: use registerDefault")
}N[u]=t
},unregister:function(t){if(t===d||t===k){throw new Error("Cannot delete callback/ack service")
}if(t===j){throw new Error("Cannot delete default service: use unregisterDefault")
}delete N[t]
},registerDefault:function(t){N[j]=t
},unregisterDefault:function(){delete N[j]
},forceParentVerifiable:function(){if(!Z.isParentVerifiable()){Z=gadgets.rpctx.ifpc
}},call:function(t,u,z,x){t=t||"..";
var y="..";
if(t===".."){y=P
}else{if(t[0]=="/"){y=W(P,gadgets.rpc.getOrigin(location.href))
}}++R;
if(z){J[R]=z
}var w={s:u,f:y,c:z?R:0,a:Array.prototype.slice.call(arguments,3),t:T[t],l:U[t]};
if(t!==".."&&Q(t)==null&&!document.getElementById(t)){gadgets.log("WARNING: attempted send to nonexistent frame: "+t);
return 
}if(e(t,w)){return 
}var v=L[t]||Z;
if(!v){if(!V[t]){V[t]=[w]
}else{V[t].push(w)
}return 
}if(U[t]){v=gadgets.rpctx.ifpc
}if(v.call(t,y,w)===false){L[t]=i;
Z.call(t,y,w)
}},getRelayUrl:function(u){var t=m[u];
if(t&&t.substring(0,1)==="/"){if(t.substring(1,2)==="/"){t=document.location.protocol+t
}else{t=document.location.protocol+"//"+document.location.host+t
}}return t
},setRelayUrl:r,setAuthToken:D,setupReceiver:G,getAuthToken:X,removeReceiver:function(t){delete m[t];
delete U[t];
delete T[t];
delete K[t];
delete h[t];
delete L[t]
},getRelayChannel:function(){return Z.getCode()
},receive:function(u,t){if(u.length>4){q(gadgets.json.parse(decodeURIComponent(u[u.length-1])))
}else{H.apply(null,u.concat(t))
}},receiveSameDomain:function(t){t.a=Array.prototype.slice.call(t.a);
window.setTimeout(function(){q(t)
},0)
},getOrigin:O,getReceiverOrigin:function(v){var u=L[v];
if(!u){return null
}if(!u.isParentVerifiable(v)){return null
}var t=gadgets.rpc.getRelayUrl(v)||gadgets.util.getUrlParameters().parent;
return gadgets.rpc.getOrigin(t)
},init:function(){if(Z.init(q,I)===false){Z=i
}if(S){G("..")
}},_getTargetWin:s,_parseSiblingId:Q,_createRelayIframe:function(t,v){var y=gadgets.rpc.getRelayUrl("..");
if(!y){return null
}var x=y+"#..&"+P+"&"+t+"&"+encodeURIComponent(gadgets.json.stringify(v));
var u=document.createElement("iframe");
u.style.border=u.style.width=u.style.height="0px";
u.style.visibility="hidden";
u.style.position="absolute";
function w(){document.body.appendChild(u);
u.src='javascript:"<html></html>"';
u.src=x
}if(document.body){w()
}else{gadgets.util.registerOnLoadHandler(function(){w()
})
}return u
},ACK:k,RPC_ID:P,SEC_ERROR_LOAD_TIMEOUT:g,SEC_ERROR_FRAME_PHISH:p,SEC_ERROR_FORGED_MSG:A}
}();
gadgets.rpc.init()
};;
gadgets.io=function(){var config={};
var oauthState;
function makeXhr(){var x;
if(typeof shindig!="undefined"&&shindig.xhrwrapper&&shindig.xhrwrapper.createXHR){return shindig.xhrwrapper.createXHR()
}else{if(typeof ActiveXObject!="undefined"){x=new ActiveXObject("Msxml2.XMLHTTP");
if(!x){x=new ActiveXObject("Microsoft.XMLHTTP")
}return x
}else{if(typeof XMLHttpRequest!="undefined"||window.XMLHttpRequest){return new window.XMLHttpRequest()
}else{throw ("no xhr available")
}}}}function hadError(xobj,callback){if(xobj.readyState!==4){return true
}try{if(xobj.status!==200){var error=(""+xobj.status);
if(xobj.responseText){error=error+" "+xobj.responseText
}callback({errors:[error],rc:xobj.status,text:xobj.responseText});
return true
}}catch(e){callback({errors:[e.number+" Error not specified"],rc:e.number,text:e.description});
return true
}return false
}function processNonProxiedResponse(url,callback,params,xobj){if(hadError(xobj,callback)){return 
}var data={body:xobj.responseText};
callback(transformResponseData(params,data))
}var UNPARSEABLE_CRUFT="throw 1; < don't be evil' >";
function processResponse(url,callback,params,xobj){if(hadError(xobj,callback)){return 
}var txt=xobj.responseText;
var offset=txt.indexOf(UNPARSEABLE_CRUFT)+UNPARSEABLE_CRUFT.length;
if(offset<UNPARSEABLE_CRUFT.length){return 
}txt=txt.substr(offset);
var data=eval("("+txt+")");
data=data[url];
if(data.oauthState){oauthState=data.oauthState
}if(data.st){shindig.auth.updateSecurityToken(data.st)
}callback(transformResponseData(params,data))
}function transformResponseData(params,data){var resp={text:data.body,rc:data.rc||200,headers:data.headers,oauthApprovalUrl:data.oauthApprovalUrl,oauthError:data.oauthError,oauthErrorText:data.oauthErrorText,errors:[]};
if(resp.rc<200||resp.rc>=400){resp.errors=[resp.rc+" Error"]
}else{if(resp.text){if(resp.rc>=300&&resp.rc<400){params.CONTENT_TYPE="TEXT"
}switch(params.CONTENT_TYPE){case"JSON":case"FEED":resp.data=gadgets.json.parse(resp.text);
if(!resp.data){resp.errors.push("500 Failed to parse JSON");
resp.rc=500;
resp.data=null
}break;
case"DOM":var dom;
if(typeof ActiveXObject!="undefined"){dom=new ActiveXObject("Microsoft.XMLDOM");
dom.async=false;
dom.validateOnParse=false;
dom.resolveExternals=false;
if(!dom.loadXML(resp.text)){resp.errors.push("500 Failed to parse XML");
resp.rc=500
}else{resp.data=dom
}}else{var parser=new DOMParser();
dom=parser.parseFromString(resp.text,"text/xml");
if("parsererror"===dom.documentElement.nodeName){resp.errors.push("500 Failed to parse XML");
resp.rc=500
}else{resp.data=dom
}}break;
default:resp.data=resp.text;
break
}}}return resp
}function makeXhrRequest(realUrl,proxyUrl,callback,paramData,method,params,processResponseFunction,opt_contentType){var xhr=makeXhr();
if(proxyUrl.indexOf("//")==0){proxyUrl=document.location.protocol+proxyUrl
}xhr.open(method,proxyUrl,true);
if(callback){xhr.onreadystatechange=gadgets.util.makeClosure(null,processResponseFunction,realUrl,callback,params,xhr)
}if(paramData!==null){xhr.setRequestHeader("Content-Type",opt_contentType||"application/x-www-form-urlencoded");
xhr.send(paramData)
}else{xhr.send(null)
}}function respondWithPreload(postData,params,callback){if(gadgets.io.preloaded_&&postData.httpMethod==="GET"){for(var i=0;
i<gadgets.io.preloaded_.length;
i++){var preload=gadgets.io.preloaded_[i];
if(preload&&(preload.id===postData.url)){delete gadgets.io.preloaded_[i];
if(preload.rc!==200){callback({rc:preload.rc,errors:[preload.rc+" Error"]})
}else{if(preload.oauthState){oauthState=preload.oauthState
}var resp={body:preload.body,rc:preload.rc,headers:preload.headers,oauthApprovalUrl:preload.oauthApprovalUrl,oauthError:preload.oauthError,oauthErrorText:preload.oauthErrorText,errors:[]};
callback(transformResponseData(params,resp))
}return true
}}}return false
}function init(configuration){config=configuration["core.io"]||{}
}var requiredConfig={proxyUrl:new gadgets.config.RegExValidator(/.*%(raw)?url%.*/),jsonProxyUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("core.io",requiredConfig,init);
return{makeRequest:function(url,callback,opt_params){var params=opt_params||{};
var httpMethod=params.METHOD||"GET";
var refreshInterval=params.REFRESH_INTERVAL;
var auth,st;
if(params.AUTHORIZATION&&params.AUTHORIZATION!=="NONE"){auth=params.AUTHORIZATION.toLowerCase();
st=shindig.auth.getSecurityToken()
}else{if(httpMethod==="GET"&&refreshInterval===undefined){refreshInterval=3600
}}var signOwner=true;
if(typeof params.OWNER_SIGNED!=="undefined"){signOwner=params.OWNER_SIGNED
}var signViewer=true;
if(typeof params.VIEWER_SIGNED!=="undefined"){signViewer=params.VIEWER_SIGNED
}var headers=params.HEADERS||{};
if(httpMethod==="POST"&&!headers["Content-Type"]){headers["Content-Type"]="application/x-www-form-urlencoded"
}var urlParams=gadgets.util.getUrlParameters();
var paramData={url:url,httpMethod:httpMethod,headers:gadgets.io.encodeValues(headers,false),postData:params.POST_DATA||"",authz:auth||"",st:st||"",contentType:params.CONTENT_TYPE||"TEXT",numEntries:params.NUM_ENTRIES||"3",getSummaries:!!params.GET_SUMMARIES,signOwner:signOwner,signViewer:signViewer,gadget:urlParams.url,container:urlParams.container||urlParams.synd||"default",bypassSpecCache:gadgets.util.getUrlParameters().nocache||"",getFullHeaders:!!params.GET_FULL_HEADERS};
if(auth==="oauth"||auth==="signed"){if(gadgets.io.oauthReceivedCallbackUrl_){paramData.OAUTH_RECEIVED_CALLBACK=gadgets.io.oauthReceivedCallbackUrl_;
gadgets.io.oauthReceivedCallbackUrl_=null
}paramData.oauthState=oauthState||"";
for(var opt in params){if(params.hasOwnProperty(opt)){if(opt.indexOf("OAUTH_")===0){paramData[opt]=params[opt]
}}}}var proxyUrl=config.jsonProxyUrl.replace("%host%",document.location.host);
if(!respondWithPreload(paramData,params,callback,processResponse)){if(httpMethod==="GET"&&refreshInterval>0){var extraparams="?refresh="+refreshInterval+"&"+gadgets.io.encodeValues(paramData);
makeXhrRequest(url,proxyUrl+extraparams,callback,null,"GET",params,processResponse)
}else{makeXhrRequest(url,proxyUrl,callback,gadgets.io.encodeValues(paramData),"POST",params,processResponse)
}}},makeNonProxiedRequest:function(relativeUrl,callback,opt_params,opt_contentType){var params=opt_params||{};
makeXhrRequest(relativeUrl,relativeUrl,callback,params.POST_DATA,params.METHOD,params,processNonProxiedResponse,opt_contentType)
},clearOAuthState:function(){oauthState=undefined
},encodeValues:function(fields,opt_noEscaping){var escape=!opt_noEscaping;
var buf=[];
var first=false;
for(var i in fields){if(fields.hasOwnProperty(i)&&!/___$/.test(i)){if(!first){first=true
}else{buf.push("&")
}buf.push(escape?encodeURIComponent(i):i);
buf.push("=");
buf.push(escape?encodeURIComponent(fields[i]):fields[i])
}}return buf.join("")
},getProxyUrl:function(url,opt_params){var params=opt_params||{};
var refresh=params.REFRESH_INTERVAL;
if(refresh===undefined){refresh="3600"
}var urlParams=gadgets.util.getUrlParameters();
var rewriteMimeParam=params.rewriteMime?"&rewriteMime="+encodeURIComponent(params.rewriteMime):"";
var ret=config.proxyUrl.replace("%url%",encodeURIComponent(url)).replace("%host%",document.location.host).replace("%rawurl%",url).replace("%refresh%",encodeURIComponent(refresh)).replace("%gadget%",encodeURIComponent(urlParams.url)).replace("%container%",encodeURIComponent(urlParams.container||urlParams.synd||"default")).replace("%rewriteMime%",rewriteMimeParam);
if(ret.indexOf("//")==0){ret=window.location.protocol+ret
}return ret
}}
}();
gadgets.io.RequestParameters=gadgets.util.makeEnum(["METHOD","CONTENT_TYPE","POST_DATA","HEADERS","AUTHORIZATION","NUM_ENTRIES","GET_SUMMARIES","GET_FULL_HEADERS","REFRESH_INTERVAL","OAUTH_SERVICE_NAME","OAUTH_USE_TOKEN","OAUTH_TOKEN_NAME","OAUTH_REQUEST_TOKEN","OAUTH_REQUEST_TOKEN_SECRET","OAUTH_RECEIVED_CALLBACK"]);
gadgets.io.MethodType=gadgets.util.makeEnum(["GET","POST","PUT","DELETE","HEAD"]);
gadgets.io.ContentType=gadgets.util.makeEnum(["TEXT","DOM","JSON","FEED"]);
gadgets.io.AuthorizationType=gadgets.util.makeEnum(["NONE","SIGNED","OAUTH"]);;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.io,"encodeValues"],[gadgets.io,"getProxyUrl"],[gadgets.io,"makeRequest"]])
});;
(function(){osapi._registerMethod=function(G,F){var A=typeof ___!=="undefined";
if(G=="newBatch"){return 
}var D=G.split(".");
var C=osapi;
for(var B=0;
B<D.length-1;
B++){C[D[B]]=C[D[B]]||{};
C=C[D[B]]
}var E=function(J){var I=osapi.newBatch();
var H={};
H.execute=function(M){var K=A?___.untame(M):M;
var L=A?___.USELESS:this;
I.add(G,this);
I.execute(function(N){if(N.error){K.call(L,N.error)
}else{K.call(L,N[G])
}})
};
if(A){___.markInnocent(H.execute,"execute")
}J=J||{};
J.userId=J.userId||"@viewer";
J.groupId=J.groupId||"@self";
H.method=G;
H.transport=F;
H.rpc=J;
return H
};
if(A&&typeof ___.markInnocent!=="undefined"){___.markInnocent(E,G)
}if(C[D[D.length-1]]){gadgets.warn("Skipping duplicate osapi method definition "+G+" on transport "+F.name)
}else{C[D[D.length-1]]=E
}}
})();;
(function(){var A=function(){var C={};
var B=[];
var F=function(G,H){if(H&&G){B.push({key:G,request:H})
}return C
};
var E=function(H){var G={method:H.request.method,id:H.key};
if(H.request.rpc){G.params=H.request.rpc
}return G
};
var D=function(G){var H={};
var O={};
var J=0;
var K=[];
for(var M=0;
M<B.length;
M++){var I=B[M].request.transport;
if(!O[I.name]){K.push(I);
J++
}O[I.name]=O[I.name]||[];
O[I.name].push(E(B[M]))
}var N=function(S){if(S.error){H.error=S.error
}for(var R=0;
R<B.length;
R++){var Q=B[R].key;
var P=S[Q];
if(P){if(P.error){H[Q]=P
}else{H[Q]=P.data||P.result
}}}J--;
if(J===0){G(H)
}};
for(var L=0;
L<K.length;
L++){K[L].execute(O[K[L].name],N)
}if(J==0){window.setTimeout(function(){G(H)
},0)
}};
C.execute=D;
C.add=F;
return C
};
osapi.newBatch=A
})();;
(function(){function A(H,G){function F(J){if(J.errors[0]){G({error:{code:J.rc,message:J.text}})
}else{var K=J.result||J.data;
if(K.error){G(K)
}else{var I={};
for(var L=0;
L<K.length;
L++){I[K[L].id]=K[L]
}G(I)
}}}var E={POST_DATA:gadgets.json.stringify(H),CONTENT_TYPE:"JSON",METHOD:"POST",AUTHORIZATION:"SIGNED"};
var C=this.name;
var D=shindig.auth.getSecurityToken();
if(D){C+="?st=";
C+=encodeURIComponent(D)
}gadgets.io.makeNonProxiedRequest(C,F,E,"application/json")
}function B(F){var H=F["osapi.services"];
if(H){for(var E in H){if(H.hasOwnProperty(E)){if(E.indexOf("http")==0||E.indexOf("//")==0){var C=E.replace("%host%",document.location.host);
var I={name:C,execute:A};
var D=H[E];
for(var G=0;
G<D.length;
G++){osapi._registerMethod(D[G],I)
}}}}}}if(gadgets.config){gadgets.config.register("osapi.services",null,B)
}})();;
if(gadgets&&gadgets.rpc){(function(){function A(E,D){var C=function(G){if(!G){D({code:500,message:"Container refused the request"})
}else{if(G.error){D(G)
}else{var F={};
for(var H=0;
H<G.length;
H++){F[G[H].id]=G[H]
}D(F)
}}};
gadgets.rpc.call("..","osapi._handleGadgetRpcMethod",C,E)
}function B(C){var F={name:"gadgets.rpc",execute:A};
var K=C["osapi.services"];
if(K){for(var D in K){if(K.hasOwnProperty(D)){if(D==="gadgets.rpc"){var E=K[D];
for(var H=0;
H<E.length;
H++){osapi._registerMethod(E[H],F)
}}}}}if(osapi.container&&osapi.container.listMethods){var G=gadgets.util.runOnLoadHandlers;
var I=2;
var J=function(){I--;
if(I==0){G()
}};
gadgets.util.runOnLoadHandlers=J;
osapi.container.listMethods({}).execute(function(L){if(!L.error){for(var M=0;
M<L.length;
M++){if(L[M]!="container.listMethods"){osapi._registerMethod(L[M],F)
}}}J()
});
window.setTimeout(J,500)
}}if(gadgets.config&&gadgets.config.isGadget){gadgets.config.register("osapi.services",null,B)
}})()
};;
gadgets.util.registerOnLoadHandler(function(){if(osapi&&osapi.people&&osapi.people.get){osapi.people.getViewer=function(A){A=A||{};
A.userId="@viewer";
A.groupId="@self";
return osapi.people.get(A)
};
osapi.people.getViewerFriends=function(A){A=A||{};
A.userId="@viewer";
A.groupId="@friends";
return osapi.people.get(A)
};
osapi.people.getOwner=function(A){A=A||{};
A.userId="@owner";
A.groupId="@self";
return osapi.people.get(A)
};
osapi.people.getOwnerFriends=function(A){A=A||{};
A.userId="@owner";
A.groupId="@friends";
return osapi.people.get(A)
}
}});;
var tamings___=tamings___||[];
tamings___.push(function(A){___.tamesTo(osapi.newBatch,___.markFuncFreeze(function(){var C=osapi.newBatch();
___.markInnocent(C.add,"add");
___.markInnocent(C.execute,"execute");
return ___.tame(C)
}));
A.outers.osapi=___.tame(osapi);
___.grantRead(A.outers,"osapi");
var B=A;
gadgets.util.registerOnLoadHandler(function(){if(osapi&&osapi.people&&osapi.people.get){caja___.whitelistFuncs([[osapi.people,"getViewer"],[osapi.people,"getViewerFriends"],[osapi.people,"getOwner"],[osapi.people,"getOwnerFriends"]]);
B.outers.osapi.people.getViewer=___.tame(osapi.people.getViewer);
B.outers.osapi.people.getViewerFriends=___.tame(osapi.people.getViewerFriends);
B.outers.osapi.people.getOwner=___.tame(osapi.people.getOwner);
B.outers.osapi.people.getOwnerFriends=___.tame(osapi.people.getOwnerFriends)
}})
});;
gadgets.window=gadgets.window||{};
(function(){gadgets.window.getViewportDimensions=function(){var A=0;
var B=0;
if(self.innerHeight){A=self.innerWidth;
B=self.innerHeight
}else{if(document.documentElement&&document.documentElement.clientHeight){A=document.documentElement.clientWidth;
B=document.documentElement.clientHeight
}else{if(document.body){A=document.body.clientWidth;
B=document.body.clientHeight
}}}return{width:A,height:B}
}
})();;
(function(){var apia=true,api=null,apib=false,apic,apid=this,apie=function(a,b){for(var c=a.split("."),d=b||apid,e;e=c.shift();)if(d[e]!=api)d=d[e];else return api;return d},apiaa=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)==
"[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b};Math.floor(Math.random()*2147483648).toString(36);
var apiba=function(a){return a.call.apply(a.bind,arguments)},apica=function(a,b){var c=b||apid;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},apif=function(){apif=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?apiba:apica;return apif.apply(api,arguments)},apida=Date.now||
function(){return+new Date},apig=function(a,b){var c=a.split("."),d=apid;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)if(!c.length&&b!==undefined)d[e]=b;else d=d[e]?d[e]:d[e]={}},apiea=function(a,b){function c(){}c.prototype=b.prototype;a.z=b.prototype;a.prototype=new c};
Function.prototype.bind=Function.prototype.bind||function(a){if(arguments.length>1){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return apif.apply(api,b)}else return apif(this,a)};var apih=function(a){for(var b=[],c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);e>255;){b[c++]=e&255;e>>=8}b[c++]=e}return b};var apik=function(a){var b=0,c=a.length,d={b:-1640531527,d:-1640531527,e:314159265},e;for(e=c;e>=12;e-=12,b+=12){d.b+=apii(a,b);d.d+=apii(a,b+4);d.e+=apii(a,b+8);apij(d)}d.e+=c;switch(e){case 11:d.e+=a[b+10]<<24;case 10:d.e+=(a[b+9]&255)<<16;case 9:d.e+=(a[b+8]&255)<<8;case 8:d.d+=apii(a,b+4);d.b+=apii(a,b);break;case 7:d.d+=(a[b+6]&255)<<16;case 6:d.d+=(a[b+5]&255)<<8;case 5:d.d+=a[b+4]&255;case 4:d.b+=apii(a,b);break;case 3:d.b+=(a[b+2]&255)<<16;case 2:d.b+=(a[b+1]&255)<<8;case 1:d.b+=a[b+0]&255}return apij(d)},
apij=function(a){var b=a.b,c=a.d,d=a.e;b-=c;b-=d;b^=d>>>13;c-=d;c-=b;c^=b<<8;d-=b;d-=c;d^=c>>>13;b-=c;b-=d;b^=d>>>12;c-=d;c-=b;c^=b<<16;d-=b;d-=c;d^=c>>>5;b-=c;b-=d;b^=d>>>3;c-=d;c-=b;c^=b<<10;d-=b;d-=c;d^=c>>>15;a.b=b;a.d=c;return a.e=d},apii=function(a,b){return(a[b+0]>127?a[b+0]-256:a[b+0])+((a[b+1]>127?a[b+1]-256:a[b+1])<<8)+((a[b+2]>127?a[b+2]-256:a[b+2])<<16)+((a[b+3]>127?a[b+3]-256:a[b+3])<<24)};var apil=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var apim,apin,apio,apip,apiq=function(){return apid.navigator?apid.navigator.userAgent:api},apir=function(){return apid.navigator};apip=apio=apin=apim=apib;var apis;if(apis=apiq()){var apifa=apir();apim=apis.indexOf("Opera")==0;apin=!apim&&apis.indexOf("MSIE")!=-1;(apio=!apim&&apis.indexOf("WebKit")!=-1)&&apis.indexOf("Mobile");apip=!apim&&!apio&&apifa.product=="Gecko"}var apiga=apim,apit=apin,apiha=apip,apiia=apio,apiu=apir(),apiv=apiu&&apiu.platform||"";apiv.indexOf("Mac");apiv.indexOf("Win");apiv.indexOf("Linux");
apir()&&(apir().appVersion||"").indexOf("X11");var apiw;a:{var apix="",apiy;if(apiga&&apid.opera){var apiz=apid.opera.version;apix=typeof apiz=="function"?apiz():apiz}else{if(apiha)apiy=/rv\:([^\);]+)(\)|;)/;else if(apit)apiy=/MSIE\s+([^\);]+)(\)|;)/;else if(apiia)apiy=/WebKit\/(\S+)/;if(apiy){var apiA=apiy.exec(apiq());apix=apiA?apiA[1]:""}}if(apit){var apiB,apiC=apid.document;apiB=apiC?apiC.documentMode:undefined;if(apiB>parseFloat(apix)){apiw=String(apiB);break a}}apiw=apix}
var apija=apiw,apiD={},apika=function(){var a;if(!(a=apiD[8])){var b=0;a=String(apija).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var c=String(8).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(a.length,c.length),e=0;b==0&&e<d;e++){var f=a[e]||"",g=c[e]||"",h=RegExp("(\\d*)(\\D*)","g"),j=RegExp("(\\d*)(\\D*)","g");do{var k=h.exec(f)||["","",""],n=j.exec(g)||["","",""];if(k[0].length==0&&n[0].length==0)break;b=k[1].length==0?0:parseInt(k[1],10);var i=n[1].length==0?0:parseInt(n[1],
10);b=apil(b,i)||apil(k[2].length==0,n[2].length==0)||apil(k[2],n[2])}while(b==0)}a=apiD[8]=b>=0}return a};var apila=/\s*;\s*/,apiE=function(a,b,c,d,e){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');c!==undefined||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";c=c<0?"":c==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(apida()+c*1E3)).toUTCString();document.cookie=a+"="+b+e+d+c+""},apiF=function(a){a=a+"=";for(var b=(document.cookie||"").split(apila),c=0,d;d=b[c];c++)if(d.indexOf(a)==0)return d.substr(a.length)};var apiG=function(a,b){var c=a.lastIndexOf(b);return c!=-1&&c+b.length==a.length},apiH=function(a,b){for(var c=0,d=b.length;c<d;c++)if(apiG(a,b[c]))return apia;return apib},apina=function(){if(apima()){gadgets.rpc.register("set",function(a){a=a;var b=this.callback,c={sid:apiF("SID")};a=a||{};var d=a.value||"";apiI.set(apiJ(a.key||"",c),d);b("true")});gadgets.rpc.register("get",function(a){var b=a;a=this.callback;var c={sid:apiF("SID")};b=b||{};b=apiI.get(apiJ(b.key||"",c));b=gadgets.json.stringify(b);
a(b)});gadgets.rpc.register("remove",function(a){a=a;var b=this.callback,c={sid:apiF("SID")};a=a||{};apiI.remove(apiJ(a.key||"",c));b("true")});gadgets.rpc.register("clear",function(){var a=this.callback;apiI.clear();a("true")})}},apima=function(){var a=gadgets.util.getUrlParameters();return a?a.scache:apib},apiL=function(a,b){return{execute:function(c){apiK(a,b,c||function(){})}}},apiM=gadgets.log;var apiN=function(a,b){for(var c in b){var d=b[c];if(typeof d==="object"&&d!=api)if(typeof a=="object"){a[c]||(a[c]={});apiN(a[c],d)}else typeof a=="boolean"&&apiN(a,d);else if(typeof a=="object")a[c]=d;else a=d}},apiO=function(){var a=gadgets.config.get();window.__GOOGLEAPIS&&apiN(a,window.__GOOGLEAPIS);var b;try{b=window.localStorage&&window.localStorage.__GOOGLEAPIS}catch(c){}b&&apiN(a,gadgets.json.parse(b));b=["proxy","rpc"];for(var d=0;d<b.length;d++){var e=b[d],f;a:{f=e;var g=apiF("MPRF");if(g){g=
g.split("|");for(var h=0;h<g.length;h++){var j=g[h].indexOf("="),k=g[h].substring(0,j);j=g[h].substring(j+1);if(k=="googleapis."+f){f=j;break a}}}f=api}if(f)a.googleapis[e]=f}return a},apiP=function(){return apiO().googleapis||{}},apiQ=function(a){if(!a)return api;var b=a;if(typeof a==="string")b=a.split(".");a=apiP();for(var c=0;c<b.length;c++){if(typeof a!=="object"){a=api;break}var d=b[c];if(d in a)a=a[d];else{a=api;break}}return a},apiR=function(a,b){for(var c in a){window.__GOOGLEAPIS=window.__GOOGLEAPIS||
{};apiN(window.__GOOGLEAPIS,a);if(b){var d=a[c],e="googleapis."+c,f=apiF("MPRF"),g=[];if(f){f=f.split("|");for(var h=0;h<f.length;h++)f[h].indexOf(e)!=0&&g.push(f[h])}g.push(e+"="+d);apiE("MPRF",g.join("|"),36E5,"/","google.com")}}};var apiS=api,apiT=apib,apiU=[],apiV=function(){return apiQ("transport.isProxyShared")},apioa=function(a,b){var c=apiP().proxy,d=apiQ("gcv");if(d)c+=(c.indexOf("?")>=0?"&":"?")+"gcv="+encodeURIComponent(d);c+="#parent="+encodeURIComponent(document.location.href);c+="&rpctoken="+Number(new Date);if(d=window.__PVT)c+="&pvt="+encodeURIComponent(d);if(d=apiQ("requestCache.enabled")?apia:apib)c+="&rcache="+d;if(d=apiQ("sessionCache.enabled")?apia:apib)c+="&scache="+d;if(d=apiV())c+="&isProxyShared="+d;
if(a)c+="&superBatchSize="+a;if(b)c+="&superBatchTimeout="+b;return c},apipa=function(a,b){var c=apioa(a,b);if(apiS){apiS.src=c;gadgets.rpc.call("apiproxy","init")}else{if(window==window.top||!apiV()){apiM("top setting up proxy iframe");var d=document.createElement("iframe");if(!apiQ("debug")){d.style.width="1px";d.style.height="1px";d.style.position="absolute";d.style.left="-100px";d.src="about:blank"}d.name="apiproxy";d.id="apiproxy";document.body.appendChild(d);d.src=c;gadgets.rpc.setupReceiver(d.id,
c);apiS=d}if(apiV())if(window==window.top){c=apiP().proxy;gadgets.rpc.register("notifySharedProxyReady",function(){if(apiT)this.i&&this.i(c);else this.i&&apiW.push(this.i.bind(api,c))})}else gadgets.rpc.call("..","notifySharedProxyReady",function(e){gadgets.rpc.setupReceiver("/apiproxy",e);apiS=window.top.frames.apiproxy;apiX()})}},apiK=function(a,b,c){apiS||apipa();if(apiT){apiM("Transport.sendRequest: gadgets.rpc.call(makeReqeust) "+window.location.href);var d=apiV()?"/apiproxy":"apiproxy";gadgets.rpc.call(d,
a,function(e){e=gadgets.json.parse(e);if(a=="makeRequest"){for(var f={},g=0;g<e.length;g++)f[e[g].id]=e[g];c(f)}else c(e)},b)}else{apiM("Transport.sendRequest: request queued "+window.location.href);apiU.push({rpc:a,r:b,i:c})}},apiW=[],apiX=function(){if(!apiT){apiT=apia;if(apiV()&&window==window.top)for(var a=0;a<apiW.length;a++){apiM("notify proxy ready "+a);apiW[a]()}for(a=0;a<apiU.length;a++){var b=apiU[a];apiM("Transport.onProxyReady: sending queued request "+a+" "+window.location.href);apiK(b.rpc,
b.r,b.i)}}};var apiY=function(a){this.a=a};apic=apiY.prototype;apic.isSupported=function(){try{return this.a in window&&window[this.a]!==api&&typeof window[this.a].length==="number"}catch(a){return apib}};apic.set=function(a,b){window[this.a].setItem(a,b)};apic.get=function(a){return window[this.a].getItem(a)};apic.remove=function(a){window[this.a].removeItem(a)};apic.clear=function(){window[this.a].clear()};
apic.c=function(a){a=a||api;for(var b=[],c=0,d=window[this.a].length;c<d;c++){var e=window[this.a].key(c);if(a==api||e.indexOf(a)===0)b.push(e)}return b};var apiqa=new apiY("localStorage"),apira=new apiY("sessionStorage");var apiZ=function(){var a=document.createElement("div");document.appendChild(a);a.addBehavior("#default#userData");this.a=a};apiea(apiZ,apiY);apic=apiZ.prototype;apic.k="__GOOGLEAPIS";apic.j="__USERDATAKEYS";apic.set=function(a,b){a:{for(var c=this.c(),d=0;d<c.length;d++)if(a==c[d])break a;c.push(a);this.a.setAttribute(this.j,gadgets.json.stringify(c))}this.a.setAttribute(a,b);apisa(this)};apic.get=function(a){apita(this);return this.a.getAttribute(a)};
apic.remove=function(a){for(var b=this.c(),c=0;c<b.length;c++)if(a==b[c]){b.splice(c,1);this.a.setAttribute(this.j,gadgets.json.stringify(b));break}this.a.removeAttribute(a);apisa(this)};apic.clear=function(){for(var a=this.c(),b=0;b<a.length;b++)this.remove(a[b])};apic.c=function(a){a=a||api;apita(this);var b=this.a.getAttribute(this.j);b=gadgets.json.parse(b||"[]");if(!a)return b;for(var c=[],d=0;d<b.length;d++){var e=b[d];e.indexOf(a)===0&&c.push(e)}return c};
var apita=function(a){try{a.a.load(a.k)}catch(b){}},apisa=function(a){try{a.a.save(a.k)}catch(b){}};var api_=function(a){this.f=a||"googleapis.";this.a=api;if(apira.isSupported())this.a=apira;else if(apiqa.isSupported())this.a=apiqa;else if(apit==apia&&apika())this.a=new apiZ;(function(b){window.setTimeout(function(){if(b.a!==api)for(var c=b.c(),d=0;d<c.length;d++)apiua(b,c[d])},1E3)})(this)};api_.prototype.set=function(a,b,c){if(this.a!==api){var d=(new Date).getTime(),e=api;if(c)e=d+c*1E3;this.a.set(this.f+a,gadgets.json.stringify({item:b,added:d,expiration:e})||"")}};
api_.prototype.get=function(a){if(this.a===api)return api;a=apiua(this,a);if(!a)return api;return a.item};var apiua=function(a,b){var c=a.f+b,d=a.a.get(c);if(!d)return api;d=gadgets.json.parse(d);var e=d.expiration;if(e&&(new Date).getTime()>e){a.a.remove(c);return api}return d};api_.prototype.remove=function(a){this.a!==api&&this.a.remove(this.f+a)};
api_.prototype.c=function(){if(this.a===api)return[];var a=this.a.c(this.f);if(this.f)for(var b=0,c=a.length;b<c;b++)a[b]=a[b].substring(this.f.length);return a};api_.prototype.clear=function(){this.a!==api&&this.a.clear()};var apiva=[".count",".get",".list",".search"],apiwa=[".insert",".update",".delete"],api0=api,apixa=function(a,b,c,d){b=b||apiH(a,apiva);c=c||300;if(!(d=d)){d=[];if(apiH(a,apiwa)){a=a.substring(0,a.lastIndexOf("."));d.push(a)}d=d}return{enabled:b,expiration:c,invalidates:d}},apiya=function(a){if(api0==api){var b={},c=apiP(),d;for(d in c.methods){var e=apiQ(["methods",d,"cache"])||{};b[d]=apixa(d,e.enabled,e.expiration,e.invalidates)}api0=b}b=api0[a];if(!b){b=apixa(a);api0[a]=b}return b};var api1=new api_,apiza=function(a,b){b=b||{};var c=gadgets.json.stringify(a),d=b.sid;if(d)c+=d;return(a.method||"")+"__"+apik(apih(c))},apiAa=function(a){for(var b={},c=apib,d=0,e=a.length;d<e;d++)for(var f=apiya(a[d].method).invalidates,g=0,h=f.length;g<h;g++){c=apia;b[f[g]]=apia}if(c){a=api1.c();c=0;for(d=a.length;c<d;c++){e=a[c];for(var j in b)e.indexOf(j)>-1&&api1.remove(e)}}};var apiI=new api_,apiJ=function(a,b){b=b||{};var c=gadgets.json.stringify(a),d=b.sid;if(d)c+=d;return(a.key||"")+"__"+apik(apih(c))};var apiBa={},apiDa=function(a){osapi._registerMethod(a,{name:"googleapis",execute:apiCa});var b=apie(a,osapi);apig(a,b);if(a.indexOf("googleapis.")!=0){a=a.substring(a.indexOf(".")+1);if(apiG(a,".delete"))a=a.replace(".delete",".remove");apig("googleapis."+a,b)}},apiEa=function(a){for(var b in a)if(a.hasOwnProperty(b))apiBa[b]=a[b]},api2=function(a){a=a||{};var b=api,c;c=apiQ("auth.useInterimAuth")===apib?apib:apia;if(c)b="InterimServerLogin service=google,auth="+apiF("SID");else if("auth"in window.googleapis)if(c=
window.googleapis.auth.getToken())b="WRAP access_token="+c.access_token;if(b)a.Authorization=b;return a},apiFa=function(a){a=a||{};if(window.navigator){for(var b=["appVersion","platform","userAgent"],c=[],d=0;d<b.length;d++)window.navigator[b[d]]&&c.push(encodeURIComponent(b[d])+"="+encodeURIComponent(window.navigator[b[d]]));a["X-ClientDetails"]=c.join("&")}return a},apiCa=function(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=d.method.substring(0,d.method.indexOf("."));d.jsonrpc="2.0";d.key=d.id;
if(e=apiBa[e])d.apiVersion=e;delete d.params.userId}c={};c=api2(c);c=apiFa(c);apiK("makeRequest",{requests:a,headers:c},b)},apiGa=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.key=e.id;var f=e.headers||{};f=api2(f);f=apiFa(f);e.headers=f}apiK("makeHttpRequests",a,b)},apiHa=function(){var a=gadgets.util.getUrlParameters(),b=function(d,e){a[d]&&e(a[d]=="true")};b("debug",function(d){apiR({m:{t:d}},void 0)});b("isProxyShared",function(d){apiR({m:{A:{v:d}}},void 0)});b("rcache",function(d){apiR({m:{w:{u:d}}},
void 0)});b=apiP();for(var c in b.methods)apiDa(c);"versions"in b&&apiEa(b.versions);gadgets.rpc.register("ready",function(){apiX()});osapi._registerMethod("googleapis.newHttpRequest",{name:"googleapis",execute:apiGa});apig("googleapis.newHttpRequest",apie("googleapis.newHttpRequest",osapi))};gadgets.config.register("googleapis",api,function(){apiHa()});var api3,api4,api5,api6,api7={AUTHORIZATION:"Authorization",CONTENT_TYPE:"Content-Type",o:"OriginToken",s:"X-ClientDetails",p:"X-JavaScript-User-Agent"},apiIa=function(a){for(var b in api7)if(api7.hasOwnProperty(b))if(api7[b]==a)return apia;return apib},apiJa=function(){try{return new XMLHttpRequest}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(b){}return api},apiKa=function(a){a[api7.p]="google-api-javascript-client/0.1";var b=gadgets.util.getUrlParameters();if(b=b?b.pvt:api)a[api7.o]=
b},apiLa=function(a,b){var c={},d=0;a.length==0&&b(c);var e=function(f){var g=f.key,h=f.params;f=h.headers||{};var j=h.httpMethod||"GET",k=h.url||api;h=h.body||api;apiKa(f);var n=apiaa(h);if(n=="object"||n=="array")h=gadgets.json.stringify(h);var i=apiJa();if(!i)throw Error("XHR not supported");i.open(j,k);i.onreadystatechange=function(){if(i.readyState==4){var p=i.responseText;var l=i.getAllResponseHeaders(),s={};if(l){l=l.split("\r\n");for(var o=0;o<l.length;o++){var m=l[o],r=m.indexOf(": ");if(r>
0){var t=m.substring(0,r);m=m.substring(r+2);s[t]=m}}}c[g]={data:{body:p,headers:s,status:i.status,statusText:i.statusText}};d++;a.length==d?b(gadgets.json.stringify(c)):e(a[d])}};for(var q in f)f.hasOwnProperty(q)&&apiIa(q)&&i.setRequestHeader(q,f[q]);i.send(h)};e(a[d])},apiMa=function(){if(!(api3!=undefined&&api3>0)){api3==undefined&&gadgets.rpc.register("init",function(){apiMa()});api4=gadgets.util.getUrlParameters(window.location.href);api3=api4.isProxyShared?api4.superBatchSize||0:0;api5=[];
api6=[];var a=api4.superBatchTimeout;a&&api4.isProxyShared&&apiNa(a,function(){api3!=0&&apiOa()});apiM("ApiServer.init(): superBatchSize="+api3)}},apiNa=function(a,b){window.setTimeout(b,a)},apiPa=function(){return function(a){a=gadgets.json.parse(a);for(var b={},c=0;c<a.length;c++)b[a[c].id]=a[c];for(c=0;c<api5.length;c++){for(var d=api5[c].g,e=[],f=0;f<d.length;f++){a=b[d[f].id];a.id=a.id.substring(a.id.indexOf("|")+1);e.push(a)}api6[c](gadgets.json.stringify(e))}}},apiQa=function(a,b){for(var c=
0;c<a.g.length;c++){a.g[c].id=api3+"|"+a.g[c].id;apiM("requestId="+a.g[c].id)}api5.push(a);api6.push(b);apiM("ApiServer.makeRequest(): collected batch "+api3)},apiOa=function(){if(api5.length>0){var a;a=[];for(var b=0;b<api5.length;b++)a=a.concat(api5[b].g);a={g:a,headers:api5[0].headers};b=apiPa();apiM("ApiServer.makeRequest(): done collecting batches "+api3);api8(a,b)}api3=0},api8=function(a,b){apiM("ApiServer.makeRequest():");apiM(a);var c=[],d={sid:apiF("SID")};a=a||{};var e=a.headers||{},f=a.requests||
[],g=gadgets.util.getUrlParameters(),h=g?g.rcache||g.cache:apib;apiAa(f);if(h){g=[];for(var j=0;j<f.length;j++){var k=f[j],n=api1.get(apiza(k,d));n?c.push(n):g.push(k)}if(g.length===0){b(gadgets.json.stringify(c));return}f=g}e[api7.CONTENT_TYPE]="application/json";apiKa(e);var i=apiJa();if(!i)throw Error("XHR not supported");i.open("POST","../rpc?pp=1");i.onreadystatechange=function(){if(i.readyState==4){var p=i.responseText;if(h){p=gadgets.json.parse(p);for(var l=f,s={},o=0;o<p.length;o++){var m=
p[o];s[m.id]=m}for(o=0;o<l.length;o++){m=l[o];var r=apiya(m.method);if(r.enabled){var t=s[m.id];if(t)t.error||api1.set(apiza(m,d),t,r.expiration)}}for(l=0;l<c.length;l++)p.push(c[l]);p=gadgets.json.stringify(p)}b(p)}};for(var q in e)e.hasOwnProperty(q)&&apiIa(q)&&i.setRequestHeader(q,e[q]);i.send(gadgets.json.stringify(f))};var api9=function(){this.l={};this.h=osapi.newBatch()};api9.prototype.add=function(a,b,c){this.l[a]=c;this.h.add(a,b);return this};api9.prototype.execute=function(a){var b=this;this.h.execute(function(c){var d={},e=apib,f;for(f in c)if(c.hasOwnProperty(f)){var g=c[f],h=b.l[f];if(h)h(g);else{d[f]=g;e=apia}}e&&a&&a(d)})};var api$=function(){this.h=new api9;this.q=1E4;this.n=api};api$.prototype.add=function(a,b,c){this.h.add(a,b,c);return this};api$.prototype.execute=function(a){if(this.n)throw Error("Polling has already started.");var b=this,c=function(){b.h.execute(a);b.n=window.setTimeout(function(){c()},b.q)};c()};apig("googleapis.clearconfig",function(){apiF("MPRF");apiE("MPRF","",0,"/","google.com")});apig("googleapis.configure",function(a,b){apiR(a,b)});apig("googleapis.getFeatureConfig",function(a){return apiO()[a]});apig("googleapis.init",function(){apiHa()});
apig("googleapis.newRequest",function(a,b){b=b||{};var c={name:"googleapis",execute:apiCa},d=osapi.newBatch(),e=this,f={};f.method=a;f.transport=c;f.rpc=b;f.execute=function(g){d.add(a,{method:a,rpc:b,transport:c});d.execute(function(h){h.error?g.call(e,h.error):g.call(e,h[a])})};return f});apig("googleapis.register",function(a){apiDa(a)});apig("googleapis.setVersions",function(a){apiEa(a)});
apig("googleapis.server.init",function(){gadgets.rpc.register("makeRequest",function(a){var b=this.callback;if(api3>0){if(api5.length>0){var c;a:{c=a.headers;var d=api5[0].headers,e;for(e in c)if(c[e]!=d[e]){apiM("headers different");c=apib;break a}for(e in d)if(d[e]!=c[e]){apiM("headers different");c=apib;break a}apiM("headers the same");c=apia}c?apiQa(a,b):api8(a,b)}else apiQa(a,b);--api3==0&&apiOa()}else api8(a,b)});gadgets.rpc.register("makeHttpRequests",function(a){apiLa(a,this.callback)});apina();
apiMa();gadgets.rpc.call("..","ready")});apig("googleapis.session.clear",function(){var a={headers:api2()};return apiL("clear",a)});apig("googleapis.session.get",function(a){a={headers:api2(),key:a};return apiL("get",a)});apig("googleapis.session.remove",function(a){a={headers:api2(),key:a};return apiL("remove",a)});apig("googleapis.session.set",function(a,b){var c={headers:api2(),key:a,value:b};return apiL("set",c)});api9.prototype.add=api9.prototype.add;api9.prototype.execute=api9.prototype.execute;
apig("googleapis.newBatch",function(){return new api9});api$.prototype.add=api$.prototype.add;api$.prototype.execute=api$.prototype.execute;apig("googleapis.newPoll",function(){return new api$});apig("googleapis.superbatch.start",function(a,b){apipa(a,b)});})();
;
shindig.sha1=(function(){var E=[];
var B=[];
var H=[];
var J=[];
J[0]=128;
for(var D=1;
D<64;
++D){J[D]=0
}function F(){E[0]=1732584193;
E[1]=4023233417;
E[2]=2562383102;
E[3]=271733878;
E[4]=3285377520;
inbuf_=0;
total_=0
}function I(K,L){return((K<<L)|(K>>>(32-L)))&4294967295
}function A(K){var L=H;
for(var N=0;
N<64;
N+=4){var U=(K[N]<<24)|(K[N+1]<<16)|(K[N+2]<<8)|(K[N+3]);
L[N/4]=U
}for(var N=16;
N<80;
N++){L[N]=I(L[N-3]^L[N-8]^L[N-14]^L[N-16],1)
}var T=E[0];
var S=E[1];
var R=E[2];
var Q=E[3];
var P=E[4];
var O,M;
for(var N=0;
N<80;
N++){if(N<40){if(N<20){O=Q^(S&(R^Q));
M=1518500249
}else{O=S^R^Q;
M=1859775393
}}else{if(N<60){O=(S&R)|(Q&(S|R));
M=2400959708
}else{O=S^R^Q;
M=3395469782
}}var V=(I(T,5)+O+P+M+L[N])&4294967295;
P=Q;
Q=R;
R=I(S,30);
S=T;
T=V
}E[0]=(E[0]+T)&4294967295;
E[1]=(E[1]+S)&4294967295;
E[2]=(E[2]+R)&4294967295;
E[3]=(E[3]+Q)&4294967295;
E[4]=(E[4]+P)&4294967295
}function C(K,L){if(!L){L=K.length
}var M=0;
if(inbuf_==0){while(M+64<L){A(K.slice(M,M+64));
M+=64;
total_+=64
}}while(M<L){B[inbuf_++]=K[M++];
total_++;
if(inbuf_==64){inbuf_=0;
A(B);
while(M+64<L){A(K.slice(M,M+64));
M+=64;
total_+=64
}}}}function G(){var N=[];
var M=total_*8;
if(inbuf_<56){C(J,56-inbuf_)
}else{C(J,64-(inbuf_-56))
}for(var L=63;
L>=56;
L--){B[L]=M&255;
M>>>=8
}A(B);
var O=0;
for(var L=0;
L<5;
L++){for(var K=24;
K>=0;
K-=8){N[O++]=(E[L]>>K)&255
}}return N
}F();
return{reset:F,update:C,digest:G}
});;
shindig.random=(function(){var D=Math.random();
var E="0123456789ABCDEF";
var G=1;
var B=((screen.width*screen.width)+screen.height)*1000000;
function F(L){var J=shindig.sha1();
J.update(L);
var H=J.digest();
var K="";
for(var I=0;
I<H.length;
I++){K+=E.charAt(Math.floor(H[I]/16))+E.charAt(H[I]%16)
}return K
}var A=window.onmousemove||function(){return false
};
window.onmousemove=function(I){if(window.event){I=event
}var H=(I.screenX+I.clientX)<<16;
H+=(I.screenY+I.clientY);
H*=new Date().getTime()%1000000;
G=(G*H)%B;
return A.call(window,Array.prototype.slice.call(arguments))
};
var C=F(document.cookie+"|"+document.location+"|"+(new Date()).getTime()+"|"+D);
return function(){var H=G;
H+=parseInt(C.substr(0,20),16);
C=F(C);
return H/(B+Math.pow(16,20))
}
})();;
(function(){function getTopMostAccessibleWindow(r){var s=r.parent,m;if(m=r!=s)m=!!s.document;if(m)return getTopMostAccessibleWindow(s);return r};function newIframesObject(){function r(){var a=getTopMostAccessibleWindow(window),b={height:0,name:"friendlyIframe",style:"left:0;position:absolute;top:0",width:0,zIndex:-1E4},c=a.document.createElement("ins");c.className="friendlyIframeContainer";c.innerHTML=z("","about:blank",b);a.document.body.appendChild(c);a=c.firstChild.contentWindow;A.push(a);return a}function s(a){var b=iframes.getGoogleConnectJsUri();a.open();a.write('<html><body><script src="'+b+'"><\/script></body></html>');a.close()}function m(){D++;
return"I"+D+"_"+(new Date).getTime()}function E(){var a;a=gadgets.window.getViewportDimensions().height;var b=document.body,c=document.documentElement;if(document.compatMode=="CSS1Compat"&&c.scrollHeight)a=c.scrollHeight!=a?c.scrollHeight:c.offsetHeight;else{var e=c.scrollHeight,d=c.offsetHeight;if(c.clientHeight!=d){e=b.scrollHeight;d=b.offsetHeight}a=e>a?e>d?e:d:e<d?e:d}return a}function z(a,b,c){c=c||{};a={allowtransparency:"true",frameborder:0,hspace:0,id:a,marginheight:0,marginwidth:0,name:a,
scrolling:"no",src:b,style:"",tabindex:"-1",vspace:0,width:"100%"};for(var e in c)a[e]=c[e];b=[];b.push("<iframe ");for(e in a)b.push(e+'="'+a[e]+'" ');b.push("></iframe>");return b.join("")}function K(a){if(a.indexOf("http:")==0||a.indexOf("https:")==0)return a;if(a.indexOf("//")==0)return window.location.protocol+a;if(a.indexOf("/")==0)return window.location.protocol+"//"+window.location.host+a;var b=window.location.protocol+"//"+window.location.host+window.location.pathname,c=b.lastIndexOf("/");
return b.substring(0,c+1)+a}function L(a){var b={},c=a.indexOf("#");if(c==-1){b.hash=null;b.base=a}else{b.hash=a.substring(c+1);b.base=a.substring(0,c)}a=b.base.indexOf("?");if(a==-1)b.query=null;else{b.query=b.base.substring(a+1);b.base=b.base.substring(0,a)}b.toString=function(){return this.base+(this.query?"?"+this.query:"")+(this.hash?"#"+this.hash:"")};return b}function F(a,b,c){a=L(a);for(var e in b){var d=b[e];d=d instanceof Array?d.join(","):encodeURIComponent(d);d=encodeURIComponent(e)+"="+
d;if(c){a.hash=a.hash?a.hash+"&":"";a.hash+=d}else{a.query=a.query?a.query+"&":"";a.query+=d}}return a.toString()}function G(){return(googleapis.getFeatureConfig("googleapis")||{}).gcv}function k(a,b){var c=b||{},e;for(e in a)c[e]=a[e];return c}function H(a){if(!t[a]){t[a]={};gadgets.rpc.register(a,function(b){var c=t[a][this.f];if(c=c&&c[b]||v[a]){var e=Array.prototype.slice.call(arguments,1);c._iframe_wrapped_rpc_&&this.callback&&e.push(this.callback);return c.apply(null,e)}else{gadgets.error("Unregistered call in window="+
window.name+" for method="+a+" and proxyId="+b+" from "+this.f);return null}})}return t[a]}function l(a,b,c,e,d){var f=[],g;for(g in a){var j=b,w=c,o=a[g],x=e,B=H(g);B[j]=B[j]||{};x=gadgets.util.makeClosure(x,o);if(o._iframe_wrapped_rpc_)x._iframe_wrapped_rpc_=true;B[j][w]=x;f.push(g)}if(d)for(g in v)f.push(g);return f.join(",")}function M(a,b,c){var e=function(){var d=Array.prototype.slice.call(arguments,0),f=d[d.length-1];if(typeof f==="function"){var g=f;d.pop()}d.unshift(b,a,g,c);(f=N(b))?f.gadgets.rpc.call.apply(f.gadgets.rpc,
d):gadgets.error("RPC not sent: target iframeId="+b+" not found.")};e._iframe_wrapped_rpc_=true;return e}function N(a){if(a=="..")return window;else if(document.getElementById(a))return window;else for(var b=0;b<A.length;b++)try{var c=A[b];if(c&&c.document)if(c.document.getElementById(a))return c}catch(e){}return null}function p(a,b,c){var e={};if(a&&a._methods){a=a._methods.split(",");for(var d=0;d<a.length;d++){var f=a[d];e[f]=M(f,b,c)}}return e}function I(a){var b;if(b=h){if(b=h._open){if(b=a.style!=
"inline"){if(b=a.inline!==true){a:{if(a=a.container)if(typeof a=="string"&&document.getElementById(a)){a=true;break a}else if(document==(a.ownerDocument||a.document)){a=true;break a}a=false}b=!a}b=b}b=b}b=b}return b}function C(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function n(a,b,c,e,d){a=a;if(a.indexOf(":")==0){a=googleapis.getFeatureConfig("iframes")[a.substring(1)]||{};a.params=a.params||{}}else a={url:a};a.url=K(a.url);this.config=a=a;this.openParams=b;this.params=c||{};this.methods=
e;this.callbacks_={};this.openedBy_=d;b&&b.superbatch&&googleapis.superbatch.addIframeParams(this.params)}function J(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c}function i(a,b,c,e,d,f){n.call(this,a,b,c,e,f);this.id=b.id||m();this.usingFixedRpcToken=!!b.rpcToken;this.rpctoken=b.rpcToken||Math.round(shindig.random()*1E9);var g;a=this.params;b={};c=this.config.params||{};for(g in a){if(g.indexOf("#")==0)b[g.substring(1)]=a[g];if(c[g]=="#")b[g]=a[g]}for(var j in b){delete a["#"+j];delete a[j]}this.hashParams=
g=b;this.exposedMethods_={};this.addStyleHandlerAsCallbacks_(O);d&&this.addCallback("close",d);this.handleCallbacks_("open");k(this.exposedMethods_,this)}function q(a,b,c,e,d,f){n.call(this,a,b,c,e,f);this.url=a;this.targetIframeId=null;this.proxyId=m();this.addStyleHandlerAsCallbacks_(P);d&&this.addCallback("close",d);this.handleCallbacks_("beforeparentopen");a=k(this.methods);a._onopen=this.onopen_;a._ready=this.onready_;a._onclose=this.onclose_;this.params._methods=l(a,"..",this.proxyId,this,true);
a={url:this.config.url,openParams:this.openParams,params:this.params,proxyId:this.proxyId};h._open(a)}var u={},D=0,y={},Q={open:function(a){return a.openInto(a.openParams.container||a.openParams.element)},close:function(a){a.remove()}},t={},v={},A=[],h=function(){if(window.parent==window)return null;var a=gadgets.util.getUrlParameters();a.gcv&&googleapis.configure({googleapis:{gcv:a.gcv}});var b=p(a,"..","");k(a,b);return b}();n.prototype.addStyleHandlerAsCallbacks_=function(a){var b=this.openParams.style;
b&&!y[b]&&gadgets.error("missing handler for style: "+b);b=y[b]||Q;var c;if(typeof b==="function")c=b(this);else{b=b;var e={};for(c in b){var d=b[c];e[c]=typeof d==="function"?gadgets.util.makeClosure(b,d,this):d}c=e}c=c;for(var f in a){b=c[f];typeof b==="function"&&this.addCallback(a[f],gadgets.util.makeClosure(c,b))}};n.prototype.addCallback=function(a,b){this.callbacks_[a]=this.callbacks_[a]||[];this.callbacks_[a].push(b)};n.prototype.handleCallbacks_=function(a){var b,c=this.callbacks_[a];if(c)for(var e=
Array.prototype.slice.call(arguments,1),d=0,f=c.length;d<f;++d)try{b=c[d].apply(null,e)}catch(g){gadgets.error("Exception when calling callback: "+a+" : "+g)}return b};J(i,n);var O={open:"open",onready:"ready",close:"close",onresize:"resize"};i.prototype.openInto=function(a,b){var c=this.config.url,e=window.location.protocol+"//"+window.location.host,d=this.id;gadgets.rpc.setAuthToken(d,this.rpctoken);var f=this.params,g=G();if(!f.gcv&&g)f.gcv=g;f=k(this.methods);f._ready=this.onready_;f._close=this.close;
f._open=this.requestedOpen_;f._resizeMe=this.resizeMe_;g=this.hashParams;g.id=d;g.parent=e;g.rpctoken=this.rpctoken;g._methods=l(f,d,"",this,true);c=F(c,this.params,false);c=F(c,g,true);a=typeof a==="string"?document.getElementById(a):a;if(this.usingFixedRpcToken)a.innerHTML=z(d,c,b);else{a.innerHTML=z(d,"about:blank",b);a.firstChild.src=c}this.el=a;this.iframeEl=a.firstChild;u[d]=this;gadgets.rpc.setRelayUrl(d,c);return this};i.prototype.exposeMethod=function(a,b){this.exposedMethods_[a]=b};i.prototype.onready_=
function(a){var b=p(a,this.id,"");if(this.openedBy_&&typeof this.methods._ready=="function"){a._methods=l(b,this.openedBy_.id,this.id,this,false);this.methods._ready(a)}k(a,this);k(b,this);this.handleCallbacks_("ready")};i.prototype.relayRpc_=function(a,b,c){var e=p(c,a,"");c._methods=l(e,this.id,a,this,false);b(c)};i.prototype.close=function(a){a=this.handleCallbacks_("close",a);if(window.frameElement&&window.frameElement.name=="friendlyIframe"){var b=window.frameElement,c=b.parentNode;c.className==
"friendlyIframeContainer"?C(c):C(b)}delete u[this.id];return a};i.prototype.remove=function(){var a=document.getElementById(this.id);C(a)};i.prototype.requestedOpen_=function(a){var b=p(a.params,this.id,a.proxyId);delete a.params._methods;if(a.openParams.anchor=="_parent")a.openParams.anchor=this.el;if(I(a.openParams))new q(a.url,a.openParams,a.params,b,b._onclose,this);else if(getTopMostAccessibleWindow(window)!=window&&a.openParams.inline!==true)this.openInNewFriendlyIframe_(a,b);else{a=new i(a.url,
a.openParams,a.params,b,b._onclose,this);a=this.buildOpenResponseObject_(a);b._onopen(a)}};i.prototype.openInNewFriendlyIframe_=function(a,b){function c(j,w){if(!j.iframes||typeof j.iframes.open!="function")return false;var o=j.iframes.open(a.url,a.openParams,a.params,b,b._onclose,w);o=w.buildOpenResponseObject_(o);b._onopen(o);return true}var e=r();s(e.document);var d=a.openParams.id||m();a.openParams.id=d;d=gadgets.util.makeClosure(this,this.relayRpc_,d,b._ready);b._ready=d;var f=gadgets.util.makeClosure(e,
c,e,this),g=window.setInterval(function(){f()&&window.clearInterval(g)},10)};i.prototype.buildOpenResponseObject_=function(a){var b={childId:a.id},c=a.exposedMethods_;c._toclose=a.close;b._methods=l(c,this.id,a.id,a,false);return b};i.prototype.resizeMe_=function(a){if(this.handleCallbacks_("resize",a)===undefined)if(this.iframeEl){if(typeof a.width!="undefined")this.iframeEl.style.width=a.width+"px";if(typeof a.height!="undefined")this.iframeEl.style.height=a.height+"px"}};J(q,n);var P={onBeforeParentOpen:"beforeparentopen"};
q.prototype.onopen_=function(a){this.targetIframeId=a.childId;var b=p(a,"..",this.targetIframeId);k(b,this);this.close=b._toclose;u[this.targetIframeId]=this;if(this.openedBy_&&this.methods._onopen){a._methods=l(b,this.openedBy_.id,this.targetIframeId,this,false);this.methods._onopen(a)}};q.prototype.onready_=function(a){var b=this.targetIframeId,c=p(a,"..",b);k(a,this);k(c,this);this.handleCallbacks_("ready");if(this.openedBy_&&this.methods._ready){a._methods=l(c,this.openedBy_.id,b,this,false);
this.methods._ready(a)}};q.prototype.onclose_=function(a){if(this.openedBy_&&this.methods._onclose)this.methods._onclose(a);else{a=this.handleCallbacks_("close",a);delete u[this.targetIframeId];return a}};return{handlers:{get:function(a){return y[a]},set:function(a,b){y[a]=b}},allow:function(a,b){H(a);v[a]=b||window[a]},disallow:function(a){delete v[a]},el:function(a){if(typeof a=="string")return document.getElementById(a);return a},open:function(a,b,c,e,d,f){if(arguments.length==3)e={};else if(arguments.length==
4&&typeof e==="function"){d=e;e={}}return I(b)?new q(a,b,c,e,d,f):new i(a,b,c,e,d,f)},close:function(a,b){h&&h._close&&h._close(a,b)},ready:function(a,b,c){if(arguments.length==2&&typeof b==="function"){c=b;b={}}a=a||{};if(!("height"in a))a.height=E();a._methods=l(b,"..","",h,true);h&&h._ready&&h._ready(a,c)},resizeMe:function(a){a=a||{};if(a.height==="auto")a.height=E();h&&h._resizeMe&&h._resizeMe(a)},getGoogleConnectJsUri:function(){if(window.localStorage&&window.localStorage["__GOOGLEAPIS.jsurl"])return window.localStorage["__GOOGLEAPIS.jsurl"];
return"https://ssl.gstatic.com/gb/js/"+G()},setVersionOverride:function(a){googleapis.configure({googleapis:{gcv:a}})},reset:function(){t={};u={}},iframer:h}}window.iframes=window.iframes||newIframesObject();window.iframer=window.iframer||window.iframes.iframer;})();
;
(function(){var ixsa=true,ixsb=null,ixs=false,ixsc,ixsd=this,ixse=function(){},ixsf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!=
"undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},ixsaa=function(a){var b=ixsf(a);return b=="array"||b=="object"&&typeof a.length=="number"},ixsg=function(a){return typeof a=="string"},ixsh=function(a){return ixsf(a)=="function"},ixsba=function(a){a=ixsf(a);return a=="object"||a=="array"||a=="function"},ixsi=function(a){return a[ixsca]||(a[ixsca]=++ixsda)},ixsca="closure_uid_"+Math.floor(Math.random()*
2147483648).toString(36),ixsda=0,ixsea=function(a){return a.call.apply(a.bind,arguments)},ixsfa=function(a,b){var c=b||ixsd;if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,e);return a.apply(c,f)}}else return function(){return a.apply(c,arguments)}},ixsj=function(){ixsj=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ixsea:ixsfa;return ixsj.apply(ixsb,
arguments)},ixsga=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}},ixsk=function(a,b){function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c};Function.prototype.bind=Function.prototype.bind||function(a){if(arguments.length>1){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return ixsj.apply(ixsb,b)}else return ixsj(this,a)};var ixsl=function(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0};ixsl.prototype.C=function(){return new ixsl(this.x,this.y)};ixsl.prototype.toString=function(){return"("+this.x+", "+this.y+")"};var ixsm=function(a,b){return new ixsl(a.x-b.x,a.y-b.y)};var ixsn=function(a,b,c,e){this.top=a;this.right=b;this.bottom=c;this.left=e};ixsn.prototype.C=function(){return new ixsn(this.top,this.right,this.bottom,this.left)};ixsn.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};ixsn.prototype.contains=function(a){a=!this||!a?ixs:a instanceof ixsn?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom;return a};var ixso=function(a,b){this.width=a;this.height=b};ixso.prototype.C=function(){return new ixso(this.width,this.height)};ixso.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};ixso.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};ixso.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var ixsp=function(a){this.stack=Error().stack||"";if(a)this.message=String(a)};ixsk(ixsp,Error);ixsp.prototype.name="CustomError";var ixsha=function(a){for(var b=1;b<arguments.length;b++){var c=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,c)}return a},ixsna=function(a){if(!ixsia.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ixsja,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ixska,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(ixsla,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ixsma,"&quot;");return a},ixsja=/&/g,ixska=/</g,ixsla=/>/g,ixsma=/\"/g,ixsia=/[&<>\"]/,ixspa=function(a,b){for(var c=0,e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,
"").split("."),f=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(e.length,f.length),g=0;c==0&&g<d;g++){var h=e[g]||"",i=f[g]||"",j=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var l=j.exec(h)||["","",""],k=n.exec(i)||["","",""];if(l[0].length==0&&k[0].length==0)break;c=l[1].length==0?0:parseInt(l[1],10);var m=k[1].length==0?0:parseInt(k[1],10);c=ixsoa(c,m)||ixsoa(l[2].length==0,k[2].length==0)||ixsoa(l[2],k[2])}while(c==0)}return c},ixsoa=function(a,b){if(a<b)return-1;
else if(a>b)return 1;return 0};var ixsqa=function(a,b){b.unshift(a);ixsp.call(this,ixsha.apply(ixsb,b));b.shift();this.Fa=a};ixsk(ixsqa,ixsp);ixsqa.prototype.name="AssertionError";var ixsq=function(a,b){if(!a){var c=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(b){e+=": "+b;var f=c}throw new ixsqa(""+e,f||[]);}return a};var ixsr=Array.prototype,ixsra=ixsr.indexOf?function(a,b,c){ixsq(a.length!=ixsb);return ixsr.indexOf.call(a,b,c)}:function(a,b,c){c=c==ixsb?0:c<0?Math.max(0,a.length+c):c;if(ixsg(a)){if(!ixsg(b)||b.length!=1)return-1;return a.indexOf(b,c)}for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ixssa=ixsr.forEach?function(a,b,c){ixsq(a.length!=ixsb);ixsr.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,f=ixsg(a)?a.split(""):a,d=0;d<e;d++)d in f&&b.call(c,f[d],d,a)},ixsta=function(){return ixsr.concat.apply(ixsr,
arguments)},ixsua=function(a){if(ixsf(a)=="array")return ixsta(a);else{for(var b=[],c=0,e=a.length;c<e;c++)b[c]=a[c];return b}},ixsva=function(a,b,c){ixsq(a.length!=ixsb);return arguments.length<=2?ixsr.slice.call(a,b):ixsr.slice.call(a,b,c)};var ixswa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},ixss=function(a,b){for(var c in a)if(a[c]==b)return ixsa;return ixs},ixsxa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ixsya=function(a){for(var b,c,e=1;e<arguments.length;e++){c=arguments[e];for(b in c)a[b]=c[b];for(var f=0;f<ixsxa.length;f++){b=ixsxa[f];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var ixst,ixsza,ixsu,ixsAa,ixsBa,ixsCa,ixsDa=function(){return ixsd.navigator?ixsd.navigator.userAgent:ixsb},ixsv=function(){return ixsd.navigator};ixsBa=ixsAa=ixsu=ixsza=ixst=ixs;var ixsw;if(ixsw=ixsDa()){var ixsEa=ixsv();ixst=ixsw.indexOf("Opera")==0;ixsza=!ixst&&ixsw.indexOf("MSIE")!=-1;ixsAa=(ixsu=!ixst&&ixsw.indexOf("WebKit")!=-1)&&ixsw.indexOf("Mobile")!=-1;ixsBa=!ixst&&!ixsu&&ixsEa.product=="Gecko"}
var ixsx=ixst,ixsy=ixsza,ixsz=ixsBa,ixsA=ixsu,ixsFa=ixsAa,ixsGa=ixsv(),ixsHa=ixsGa&&ixsGa.platform||"";ixsCa=ixsHa.indexOf("Mac")!=-1;ixsHa.indexOf("Win");ixsHa.indexOf("Linux");var ixsIa=!!ixsv()&&(ixsv().appVersion||"").indexOf("X11")!=-1,ixsJa;
a:{var ixsKa="",ixsB;if(ixsx&&ixsd.opera){var ixsLa=ixsd.opera.version;ixsKa=typeof ixsLa=="function"?ixsLa():ixsLa}else{if(ixsz)ixsB=/rv\:([^\);]+)(\)|;)/;else if(ixsy)ixsB=/MSIE\s+([^\);]+)(\)|;)/;else if(ixsA)ixsB=/WebKit\/(\S+)/;if(ixsB){var ixsMa=ixsB.exec(ixsDa());ixsKa=ixsMa?ixsMa[1]:""}}if(ixsy){var ixsNa,ixsOa=ixsd.document;ixsNa=ixsOa?ixsOa.documentMode:undefined;if(ixsNa>parseFloat(ixsKa)){ixsJa=String(ixsNa);break a}}ixsJa=ixsKa}
var ixsPa=ixsJa,ixsQa={},ixsC=function(a){return ixsQa[a]||(ixsQa[a]=ixspa(ixsPa,a)>=0)};var ixsRa,ixsSa=!ixsy||ixsC("9");ixsy&&ixsC("9");var ixsTa=function(a){return(a=a.className)&&typeof a.split=="function"?a.split(/\s+/):[]},ixsUa=function(a){var b=ixsTa(a),c;c=ixsva(arguments,1);for(var e=0,f=0;f<c.length;f++)if(!(ixsra(b,c[f])>=0)){b.push(c[f]);e++}c=e==c.length;a.className=b.join(" ");return c};var ixsF=function(a){return a?new ixsD(ixsE(a)):ixsRa||(ixsRa=new ixsD)},ixsG=function(a){return ixsg(a)?document.getElementById(a):a},ixsWa=function(a,b){ixswa(b,function(c,e){if(e=="style")a.style.cssText=c;else if(e=="class")a.className=c;else if(e=="for")a.htmlFor=c;else if(e in ixsVa)a.setAttribute(ixsVa[e],c);else a[e]=c})},ixsVa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",
type:"type"},ixsXa=function(a){var b=a.document;if(ixsA&&!ixsC("500")&&!ixsFa){if(typeof a.innerHeight=="undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new ixso(a.innerWidth,b)}a=ixsH(b);if(ixsx&&!ixsC("9.50"))a=ixs;a=a?b.documentElement:b.body;return new ixso(a.clientWidth,a.clientHeight)},ixsYa=function(a){a=!ixsA&&ixsH(a)?a.documentElement:a.body;return new ixsl(a.scrollLeft,a.scrollTop)},ixs_a=function(a,b,c){function e(g){if(g)b.appendChild(ixsg(g)?
a.createTextNode(g):g)}for(var f=2;f<c.length;f++){var d=c[f];ixsaa(d)&&!(ixsba(d)&&d.nodeType>0)?ixssa(ixsZa(d)?ixsua(d):d,e):e(d)}},ixsH=function(a){return a.compatMode=="CSS1Compat"},ixs0a=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):ixsb},ixsE=function(a){return a.nodeType==9?a:a.ownerDocument||a.document},ixs2a=function(a,b){var c=[];return ixs1a(a,b,c,ixsa)?c[0]:undefined},ixs1a=function(a,b,c,e){if(a!=ixsb)for(var f=0,d;d=a.childNodes[f];f++){if(b(d)){c.push(d);if(e)return ixsa}if(ixs1a(d,
b,c,e))return ixsa}return ixs},ixsZa=function(a){if(a&&typeof a.length=="number")if(ixsba(a))return typeof a.item=="function"||typeof a.item=="string";else if(ixsh(a))return typeof a.item=="function";return ixs},ixsD=function(a){this.c=a||ixsd.document||document},ixs3a=function(a,b){var c;c=a.c;var e=b&&b!="*"?b.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(!ixsA||ixsH(document)||ixsC("528"))&&e)c=c.querySelectorAll(e+"");else c=c=c.getElementsByTagName(e||"*");return c};
ixsD.prototype.V=function(){var a=this.c,b=arguments,c=b[0],e=b[1];if(!ixsSa&&e&&(e.name||e.type)){c=["<",c];e.name&&c.push(' name="',ixsna(e.name),'"');if(e.type){c.push(' type="',ixsna(e.type),'"');var f={};ixsya(f,e);e=f;delete e.type}c.push(">");c=c.join("")}c=a.createElement(c);if(e)if(ixsg(e))c.className=e;else ixsf(e)=="array"?ixsUa.apply(ixsb,[c].concat(e)):ixsWa(c,e);b.length>2&&ixs_a(a,c,b);return c};ixsD.prototype.createElement=function(a){return this.c.createElement(a)};
ixsD.prototype.createTextNode=function(a){return this.c.createTextNode(a)};var ixs4a=function(a){return ixsYa(a.c)};ixsD.prototype.appendChild=function(a,b){a.appendChild(b)};ixsD.prototype.contains=function(a,b){if(a.contains&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var ixsI=function(a,b,c,e){this.left=a;this.top=b;this.width=c;this.height=e};ixsI.prototype.C=function(){return new ixsI(this.left,this.top,this.width,this.height)};ixsI.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};
ixsI.prototype.contains=function(a){return a instanceof ixsI?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};var ixsJ=function(a,b){ixsg(b)?ixs5a(a,void 0,b):ixswa(b,ixsga(ixs5a,a))},ixs5a=function(a,b,c){a.style[ixs6a(c)]=b},ixs7a=function(a,b){var c=ixsE(a);if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,ixsb))return c[b]||c.getPropertyValue(b);return""},ixsK=function(a,b){return ixs7a(a,b)||(a.currentStyle?a.currentStyle[b]:ixsb)||a.style[b]},ixs8a=function(a){var b=a.getBoundingClientRect();if(ixsy){a=a.ownerDocument;b.left-=a.documentElement.clientLeft+a.body.clientLeft;
b.top-=a.documentElement.clientTop+a.body.clientTop}return b},ixs9a=function(a){if(ixsy)return a.offsetParent;var b=ixsE(a),c=ixsK(a,"position"),e=c=="fixed"||c=="absolute";for(a=a.parentNode;a&&a!=b;a=a.parentNode){c=ixsK(a,"position");e=e&&c=="static"&&a!=b.documentElement&&a!=b.body;if(!e&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||c=="fixed"||c=="absolute"))return a}return ixsb},ixsL=function(a){var b,c=ixsE(a),e=ixsK(a,"position"),f=ixsz&&c.getBoxObjectFor&&!a.getBoundingClientRect&&
e=="absolute"&&(b=c.getBoxObjectFor(a))&&(b.screenX<0||b.screenY<0),d=new ixsl(0,0),g;b=c?c.nodeType==9?c:ixsE(c):document;if(g=ixsy){g=ixsF(b);g=!ixsH(g.c)}g=g?b.body:b.documentElement;if(a==g)return d;if(a.getBoundingClientRect){b=ixs8a(a);a=ixs4a(ixsF(c));d.x=b.left+a.x;d.y=b.top+a.y}else if(c.getBoxObjectFor&&!f){b=c.getBoxObjectFor(a);a=c.getBoxObjectFor(g);d.x=b.screenX-a.screenX;d.y=b.screenY-a.screenY}else{f=a;do{d.x+=f.offsetLeft;d.y+=f.offsetTop;if(f!=a){d.x+=f.clientLeft||0;d.y+=f.clientTop||
0}if(ixsA&&ixsK(f,"position")=="fixed"){d.x+=c.body.scrollLeft;d.y+=c.body.scrollTop;break}f=f.offsetParent}while(f&&f!=a);if(ixsx||ixsA&&e=="absolute")d.y-=c.body.offsetTop;for(f=a;(f=ixs9a(f))&&f!=c.body&&f!=g;){d.x-=f.scrollLeft;if(!ixsx||f.tagName!="TR")d.y-=f.scrollTop}}return d},ixsab=function(a,b){var c=new ixsl(0,0),e=ixsE(a)?ixsE(a).parentWindow||ixsE(a).defaultView:window,f=a;do{var d=e==b?ixsL(f):ixs$a(f);c.x+=d.x;c.y+=d.y}while(e&&e!=b&&(f=e.frameElement)&&(e=e.parent));return c},ixs$a=
function(a){var b=new ixsl;if(a.nodeType==1)if(a.getBoundingClientRect){var c=ixs8a(a);b.x=c.left;b.y=c.top}else{c=ixs4a(ixsF(a));a=ixsL(a);b.x=a.x-c.x;b.y=a.y-c.y}else{b.x=a.clientX;b.y=a.clientY}return b},ixsbb=function(a,b){if(typeof a=="number")a=(b?Math.round(a):a)+"px";return a},ixsM=function(a){var b=ixsx&&!ixsC("10");if(ixsK(a,"display")!="none")return b?new ixso(a.offsetWidth||a.clientWidth,a.offsetHeight||a.clientHeight):new ixso(a.offsetWidth,a.offsetHeight);var c=a.style,e=c.display,f=
c.visibility,d=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";if(b){b=a.offsetWidth||a.clientWidth;a=a.offsetHeight||a.clientHeight}else{b=a.offsetWidth;a=a.offsetHeight}c.display=e;c.position=d;c.visibility=f;return new ixso(b,a)},ixsN=function(a){var b=ixsL(a);a=ixsM(a);return new ixsI(b.x,b.y,a.width,a.height)},ixscb={},ixs6a=function(a){return ixscb[a]||(ixscb[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))},ixsdb=function(a,b){if(ixsy)a.cssText=
b;else a[ixsA?"innerText":"innerHTML"]=b},ixseb=function(a){return"rtl"==ixsK(a,"direction")};var ixsfb;!ixsy||ixsC("9");ixsy&&ixsC("8");var ixsO=function(){};ixsO.prototype.Y=ixs;ixsO.prototype.p=function(){if(!this.Y){this.Y=ixsa;this.h()}};ixsO.prototype.h=function(){};var ixsP=function(a,b){this.type=a;this.currentTarget=this.target=b};ixsk(ixsP,ixsO);ixsP.prototype.h=function(){delete this.type;delete this.target;delete this.currentTarget};ixsP.prototype.v=ixs;ixsP.prototype.F=ixsa;var ixsQ=function(a,b){a&&this.init(a,b)};ixsk(ixsQ,ixsP);ixsc=ixsQ.prototype;ixsc.target=ixsb;ixsc.relatedTarget=ixsb;ixsc.offsetX=0;ixsc.offsetY=0;ixsc.clientX=0;ixsc.clientY=0;ixsc.screenX=0;ixsc.screenY=0;ixsc.button=0;ixsc.keyCode=0;ixsc.charCode=0;ixsc.ctrlKey=ixs;ixsc.altKey=ixs;ixsc.shiftKey=ixs;ixsc.metaKey=ixs;ixsc.za=ixs;ixsc.Z=ixsb;
ixsc.init=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(ixsz)try{e=e.nodeName&&e}catch(f){e=ixsb}}else if(c=="mouseover")e=a.fromElement;else if(c=="mouseout")e=a.toElement;this.relatedTarget=e;this.offsetX=a.offsetX!==undefined?a.offsetX:a.layerX;this.offsetY=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.za=ixsCa?a.metaKey:a.ctrlKey;this.state=a.state;this.Z=a;delete this.F;delete this.v};ixsc.h=function(){ixsQ.G.h.call(this);this.relatedTarget=this.currentTarget=this.target=this.Z=ixsb};var ixsR=function(a,b){this.ba=b;this.q=[];if(a>this.ba)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.q.push(this.k?this.k():{})};ixsk(ixsR,ixsO);ixsR.prototype.k=ixsb;ixsR.prototype.X=ixsb;var ixsS=function(a){if(a.q.length)return a.q.pop();return a.k?a.k():{}},ixsT=function(a,b){a.q.length<a.ba?a.q.push(b):ixsgb(a,b)},ixsgb=function(a,b){if(a.X)a.X(b);else if(ixsba(b))if(ixsh(b.p))b.p();else for(var c in b)delete b[c]};
ixsR.prototype.h=function(){ixsR.G.h.call(this);for(var a=this.q;a.length;)ixsgb(this,a.pop());delete this.q};var ixshb;var ixsib=(ixshb="ScriptEngine"in ixsd&&ixsd.ScriptEngine()=="JScript")?ixsd.ScriptEngineMajorVersion()+"."+ixsd.ScriptEngineMinorVersion()+"."+ixsd.ScriptEngineBuildVersion():"0";var ixsjb=function(){},ixskb=0;ixsc=ixsjb.prototype;ixsc.l=0;ixsc.w=ixs;ixsc.Q=ixs;ixsc.init=function(a,b,c,e,f,d){if(ixsh(a))this.aa=ixsa;else if(a&&a.handleEvent&&ixsh(a.handleEvent))this.aa=ixs;else throw Error("Invalid listener argument");this.A=a;this.da=b;this.src=c;this.type=e;this.B=!!f;this.I=d;this.Q=ixs;this.l=++ixskb;this.w=ixs};ixsc.handleEvent=function(a){if(this.aa)return this.A.call(this.I||this.src,a);return this.A.handleEvent.call(this.A,a)};var ixslb,ixsmb,ixsU,ixsnb,ixsob,ixspb,ixsqb,ixsrb,ixssb,ixstb,ixsub;
(function(){function a(){return{g:0,f:0}}function b(){return[]}function c(){var k=function(m){return g.call(k.src,k.l,m)};return k}function e(){return new ixsjb}function f(){return new ixsQ}var d=ixshb&&!(ixspa(ixsib,"5.7")>=0),g;ixspb=function(k){g=k};if(d){ixslb=function(){return ixsS(h)};ixsmb=function(k){ixsT(h,k)};ixsU=function(){return ixsS(i)};ixsnb=function(k){ixsT(i,k)};ixsob=function(){return ixsS(j)};ixsqb=function(){ixsT(j,c())};ixsrb=function(){return ixsS(n)};ixssb=function(k){ixsT(n,
k)};ixstb=function(){return ixsS(l)};ixsub=function(k){ixsT(l,k)};var h=new ixsR(0,600);h.k=a;var i=new ixsR(0,600);i.k=b;var j=new ixsR(0,600);j.k=c;var n=new ixsR(0,600);n.k=e;var l=new ixsR(0,600);l.k=f}else{ixslb=a;ixsmb=ixse;ixsU=b;ixsnb=ixse;ixsob=c;ixsqb=ixse;ixsrb=e;ixssb=ixse;ixstb=f;ixsub=ixse}})();var ixsV={},ixsW={},ixsX={},ixsvb={},ixsY=function(a,b,c,e,f){if(b)if(ixsf(b)=="array"){for(var d=0;d<b.length;d++)ixsY(a,b[d],c,e,f);return ixsb}else{e=!!e;var g=ixsW;b in g||(g[b]=ixslb());g=g[b];if(!(e in g)){g[e]=ixslb();g.g++}g=g[e];var h=ixsi(a),i;g.f++;if(g[h]){i=g[h];for(d=0;d<i.length;d++){g=i[d];if(g.A==c&&g.I==f){if(g.w)break;return i[d].l}}}else{i=g[h]=ixsU();g.g++}d=ixsob();d.src=a;g=ixsrb();g.init(c,d,a,b,e,f);c=g.l;d.l=c;i.push(g);ixsV[c]=g;ixsX[h]||(ixsX[h]=ixsU());ixsX[h].push(g);
if(a.addEventListener){if(a==ixsd||!a.W)a.addEventListener(b,d,e)}else a.attachEvent(ixswb(b),d);return c}else throw Error("Invalid event type");},ixsxb=function(a,b,c,e,f){if(ixsf(b)=="array"){for(var d=0;d<b.length;d++)ixsxb(a,b[d],c,e,f);return ixsb}e=!!e;a:{d=ixsW;if(b in d){d=d[b];if(e in d){d=d[e];a=ixsi(a);if(d[a]){a=d[a];break a}}}a=ixsb}if(!a)return ixs;for(d=0;d<a.length;d++)if(a[d].A==c&&a[d].B==e&&a[d].I==f)return ixsZ(a[d].l);return ixs},ixsZ=function(a){if(!ixsV[a])return ixs;var b=
ixsV[a];if(b.w)return ixs;var c=b.src,e=b.type,f=b.da,d=b.B;if(c.removeEventListener){if(c==ixsd||!c.W)c.removeEventListener(e,f,d)}else c.detachEvent&&c.detachEvent(ixswb(e),f);c=ixsi(c);f=ixsW[e][d][c];if(ixsX[c]){var g=ixsX[c],h=ixsra(g,b);if(h>=0){ixsq(g.length!=ixsb);ixsr.splice.call(g,h,1)}g.length==0&&delete ixsX[c]}b.w=ixsa;f.ca=ixsa;ixsyb(e,d,c,f);delete ixsV[a];return ixsa},ixsyb=function(a,b,c,e){if(!e.D)if(e.ca){for(var f=0,d=0;f<e.length;f++)if(e[f].w){var g=e[f].da;g.src=ixsb;ixsqb(g);
ixssb(e[f])}else{if(f!=d)e[d]=e[f];d++}e.length=d;e.ca=ixs;if(d==0){ixsnb(e);delete ixsW[a][b][c];ixsW[a][b].g--;if(ixsW[a][b].g==0){ixsmb(ixsW[a][b]);delete ixsW[a][b];ixsW[a].g--}if(ixsW[a].g==0){ixsmb(ixsW[a]);delete ixsW[a]}}}},ixszb=function(a){var b,c=0,e=b==ixsb;b=!!b;if(a==ixsb)ixswa(ixsX,function(g){for(var h=g.length-1;h>=0;h--){var i=g[h];if(e||b==i.B){ixsZ(i.l);c++}}});else{a=ixsi(a);if(ixsX[a]){a=ixsX[a];for(var f=a.length-1;f>=0;f--){var d=a[f];if(e||b==d.B){ixsZ(d.l);c++}}}}return c},
ixswb=function(a){if(a in ixsvb)return ixsvb[a];return ixsvb[a]="on"+a},ixs_=function(a,b,c,e,f){var d=1;b=ixsi(b);if(a[b]){a.f--;a=a[b];if(a.D)a.D++;else a.D=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];if(i&&!i.w)d&=ixsAb(i,f)!==ixs}}finally{a.D--;ixsyb(c,e,b,a)}}return Boolean(d)},ixsAb=function(a,b){var c=a.handleEvent(b);a.Q&&ixsZ(a.l);return c};
ixspb(function(a,b){if(!ixsV[a])return ixsa;var c=ixsV[a],e=c.type,f=ixsW;if(!(e in f))return ixsa;f=f[e];var d,g;if(ixsfb===undefined)ixsfb=ixsy&&!ixsd.addEventListener;if(ixsfb){var h;if(!(h=b))a:{h="window.event".split(".");for(var i=ixsd;d=h.shift();)if(i[d]!=ixsb)i=i[d];else{h=ixsb;break a}h=i}d=h;h=ixsa in f;i=ixs in f;if(h){if(d.keyCode<0||d.returnValue!=undefined)return ixsa;a:{var j=ixs;if(d.keyCode==0)try{d.keyCode=-1;break a}catch(n){j=ixsa}if(j||d.returnValue==undefined)d.returnValue=
ixsa}}j=ixstb();j.init(d,this);d=ixsa;try{if(h){for(var l=ixsU(),k=j.currentTarget;k;k=k.parentNode)l.push(k);g=f[ixsa];g.f=g.g;for(var m=l.length-1;!j.v&&m>=0&&g.f;m--){j.currentTarget=l[m];d&=ixs_(g,l[m],e,ixsa,j)}if(i){g=f[ixs];g.f=g.g;for(m=0;!j.v&&m<l.length&&g.f;m++){j.currentTarget=l[m];d&=ixs_(g,l[m],e,ixs,j)}}}else d=ixsAb(c,j)}finally{if(l){l.length=0;ixsnb(l)}j.p();ixsub(j)}return d}e=new ixsQ(b,this);try{d=ixsAb(c,e)}finally{e.p()}return d});var ixsBb=function(){};ixsk(ixsBb,ixsO);ixsc=ixsBb.prototype;ixsc.W=ixsa;ixsc.N=ixsb;ixsc.addEventListener=function(a,b,c,e){ixsY(this,a,b,c,e)};ixsc.removeEventListener=function(a,b,c,e){ixsxb(this,a,b,c,e)};
ixsc.dispatchEvent=function(a){a=a;if(ixsg(a))a=new ixsP(a,this);else if(a instanceof ixsP)a.target=a.target||this;else{var b=a;a=new ixsP(a.type,this);ixsya(a,b)}b=1;var c,e=a.type,f=ixsW;if(e in f){f=f[e];e=ixsa in f;var d;if(e){c=[];for(d=this;d;d=d.N)c.push(d);d=f[ixsa];d.f=d.g;for(var g=c.length-1;!a.v&&g>=0&&d.f;g--){a.currentTarget=c[g];b&=ixs_(d,c[g],a.type,ixsa,a)&&a.F!=ixs}}if(ixs in f){d=f[ixs];d.f=d.g;if(e)for(g=0;!a.v&&g<c.length&&d.f;g++){a.currentTarget=c[g];b&=ixs_(d,c[g],a.type,ixs,
a)&&a.F!=ixs}else for(c=this;!a.v&&c&&d.f;c=c.N){a.currentTarget=c;b&=ixs_(d,c,a.type,ixs,a)&&a.F!=ixs}}a=Boolean(b)}else a=ixsa;return a};ixsc.h=function(){ixsBb.G.h.call(this);ixszb(this);this.N=ixsb};function ixsCb(a){var b=a.parent;if(a!=b&&b.document)return ixsCb(b);return a}function ixsDb(a){return ixsCb(a)!=a&&a.frameElement&&a.frameElement.name=="friendlyIframe"};var ixs0=function(a){this.a=a;this.ops=a.openParams};ixs0.prototype.onBeforeParentOpen=function(){ixsEb(this)};ixs0.prototype.onBeforeParentOpen=ixs0.prototype.onBeforeParentOpen;
var ixsEb=function(a){if(a.ops.anchorBox&&a.a.openedBy_&&a.a.openedBy_.iframeEl){var b=ixsL(a.a.openedBy_.iframeEl);a.ops.anchorBox.left+=b.x;a.ops.anchorBox.top+=b.y}else{b=a.ops.anchor;if(b!="_default")if(b=="_iframe"){b=ixsXa(window);a.ops.anchorBox=new ixsI(0,0,b.width,b.height)}else{var c=ixsG(b);if(c)a.ops.anchorBox=ixsN(c);else{gadgets.error("Anchor not found in DOM: "+b+'. Falling back to "_default".');a.ops.anchor="_default";return}}}a.ops.anchor=""};
ixs0.prototype.open=function(){var a=document.createElement("ins");iframes.el(this.ops.container).appendChild(a);a.style.display="block";ixsJ(a,this.ops.containerCss);this.a.containerDiv=a;this.a.openInto(a)};ixs0.prototype.onready=function(){document.getElementById(this.a.id).style.height=this.a.height+"px"};ixs0.prototype.close=function(){ixs0a(this.a.containerDiv);ixs0a(this.Ba)};
var ixsFb=function(a){!a.ops.anchorBox&&a.ops.anchor&&ixsEb(a);if(a.ops.anchor=="_default"&&a.a.openedBy_)a.ops.anchorBox=ixsN(ixsG(a.a.openedBy_.containerDiv||a.a.openedBy_.el));if(a.ops.anchorBox){var b=new ixsl(a.ops.anchorBox.left,a.ops.anchorBox.top),c=ixsCb(window);if(a.a.openedBy_){var e=ixsab(a.a.openedBy_.el,c);b.x+=e.x;b.y+=e.y}b={position:"absolute",left:b.x+"px",top:b.y+"px",width:a.ops.anchorBox.width+"px",height:a.ops.anchorBox.height+"px",zIndex:-1E4};c=c.document;e=c.createElement("ins");
ixsJ(e,b);c.body.appendChild(e);return a.Ba=e}else gadgets.error("No anchor box defined.")};var ixsGb={"bottom-center":1,"bottom-end":7,"bottom-left":1,"bottom-right":3,"bottom-start":5,"left-bottom":1,"left-center":0,"left-top":0,"right-bottom":3,"right-center":2,"right-top":2,"top-center":0,"top-end":6,"top-left":0,"top-right":2,"top-start":4},ixsHb={"bottom-center":ixsa,"top-center":ixsa},ixsIb={"left-center":ixsa,"right-center":ixsa},ixsJb=function(a,b,c,e,f){f=f||{x:0,y:0};if(ixsHb[b]){var d=ixsM(a).width/2;if(e=="top-right"||e=="bottom-right")f.x+=d;else f.x-=d}if(ixsHb[e]){d=ixsM(c).width/
2;f.x+=d}if(ixsIb[b]){d=ixsM(a).height/2;if(e=="right-bottom"||e=="left-bottom")f.y+=d;else f.y-=d}if(ixsIb[e])f.y+=ixsM(c).height/2;e=ixsGb[e];b=ixsGb[b];f=new ixsl(f.x,f.y);var g;if(d=a.offsetParent){var h=d.tagName=="HTML"||d.tagName=="BODY";if(!h||ixsK(d,"position")!="static"){g=ixsL(d);h||(g=ixsm(g,new ixsl(d.scrollLeft,d.scrollTop)))}}d=ixsN(c);var i;h=new ixsn(0,Infinity,Infinity,0);for(var j=ixsF(c),n=j.c.body,l=!ixsA&&ixsH(j.c)?j.c.documentElement:j.c.body,k=c;k=ixs9a(k);)if((!ixsy||k.clientWidth!=
0)&&(!ixsA||k.clientHeight!=0||k!=n)&&(k.scrollWidth!=k.clientWidth||k.scrollHeight!=k.clientHeight)&&ixsK(k,"overflow")!="visible"){var m=ixsL(k),o;o=k;if(ixsz&&!ixsC("1.9")){var p=parseFloat(ixs7a(o,"borderLeftWidth"));if(ixseb(o)){var q=o.offsetWidth-o.clientWidth-p-parseFloat(ixs7a(o,"borderRightWidth"));p+=q}o=new ixsl(p,parseFloat(ixs7a(o,"borderTopWidth")))}else o=new ixsl(o.clientLeft,o.clientTop);m.x+=o.x;m.y+=o.y;h.top=Math.max(h.top,m.y);h.right=Math.min(h.right,m.x+k.clientWidth);h.bottom=
Math.min(h.bottom,m.y+k.clientHeight);h.left=Math.max(h.left,m.x);i=i||k!=l}n=l.scrollLeft;l=l.scrollTop;if(ixsA){h.left+=n;h.top+=l}else{h.left=Math.max(h.left,n);h.top=Math.max(h.top,l)}if(!i||ixsA){h.right+=n;h.bottom+=l}i=ixsXa(j.c.parentWindow||j.c.defaultView||window);h.right=Math.min(h.right,n+i.width);h.bottom=Math.min(h.bottom,l+i.height);if(i=h.top>=0&&h.left>=0&&h.bottom>h.top&&h.right>h.left?h:ixsb){l=new ixsI(i.left,i.top,i.right-i.left,i.bottom-i.top);i=Math.max(d.left,l.left);h=Math.min(d.left+
d.width,l.left+l.width);if(i<=h){j=Math.max(d.top,l.top);l=Math.min(d.top+d.height,l.top+l.height);if(j<=l){d.left=i;d.top=j;d.width=h-i;d.height=l-j}}}i=ixsF(c);j=ixsF(a);if(i.c!=j.c){h=i.c.body;j=ixsab(h,j.c.parentWindow||j.c.defaultView);j=ixsm(j,ixsL(h));if(ixsy&&!ixsH(i.c))j=ixsm(j,ixs4a(i));d.left+=j.x;d.top+=j.y}c=(e&4&&ixseb(c)?e^2:e)&-5;e=new ixsl(c&2?d.left+d.width:d.left,c&1?d.top+d.height:d.top);if(g)e=ixsm(e,g);if(f){e.x+=(c&2?-1:1)*f.x;e.y+=(c&1?-1:1)*f.y}c=e.C();b=(b&4&&ixseb(a)?b^
2:b)&-5;g=ixsM(a);if(b!=0){if(b&2)c.x-=g.width+0;if(b&1)c.y-=g.height+0}e=c;b=ixsz&&(ixsCa||ixsIa)&&ixsC("1.9");if(e instanceof ixsl){c=e.x;e=e.y}else{c=e;e=void 0}a.style.left=ixsbb(c,b);a.style.top=ixsbb(e,b);c=g==g?ixsa:!g||!g?ixs:g.width==g.width&&g.height==g.height;if(!c){g=g;if(g instanceof ixso){c=g.height;g=g.width}else throw Error("missing height argument");a.style.width=ixsbb(g,ixsa);a.style.height=ixsbb(c,ixsa)}};var ixsKb=function(a){ixs0.call(this,a.a);this.j=a;this.T=ixsb};ixsk(ixsKb,ixs0);ixsc=ixsKb.prototype;ixsc.onBeforeParentOpen=function(){this.j.onBeforeParentOpen()};ixsc.open=function(){this.j.open()};ixsc.onready=function(){this.j.onready();if(this.ops.closeClickDetection)this.T=ixsY(document,"click",ixsj(this.na,this),ixs)};ixsc.close=function(){if(this.ops.closeClickDetection){ixsZ(this.T);this.Da=ixsb}this.j.close()};
ixsc.na=function(a){var b;b=ixsN(this.a.containerDiv);b=new ixsn(b.top,b.left+b.width,b.top+b.height,b.left);a=new ixsl(a.clientX,a.clientY);b&&b.contains(a)||this.a.close()};(function(){var a={};a.open=function(b){var c=iframes.el(b.openParams.container);return b.openInto(c,{style:"position:absolute;left:-1000px;top:-1000px;width:"+(c.clientWidth||300)+"px;visibility:hidden"})};a.onready=function(b){b.iframeEl.style.height=b.height+"px";b.iframeEl.style.position="static";b.iframeEl.style.left=0;b.iframeEl.style.top=0;b.iframeEl.style.visibility="visible"};a.close=function(b){b.el&&b.el.removeChild(b.iframeEl)};iframes.handlers.set("inline",a)})();var ixsLb=function(a){ixs0.call(this,a)};ixsk(ixsLb,ixs0);
ixsLb.prototype.open=function(){var a=this.ops.widgetWidth||this.ops.width||"200";this.ops.targetPos=this.ops.targetPos||"top-start";this.ops.anchorPos=this.ops.anchorPos||"bottom-start";var b=ixsFb(this,this.a);if(this.a.containerDiv){ixsJ(this.a.containerDiv,{visibility:"hidden",position:"absolute"});b.parentNode.appendChild(this.a.containerDiv)}else{var c=document.createElement("div");this.a.containerDiv=c;ixsJ(c,{left:"-1000px",top:"-1000px",position:"absolute",width:a+"px",zIndex:1E4});ixsJ(c,
this.ops.containerCss||{});b.parentNode.appendChild(c);this.a.openInto(c)}};ixsLb.prototype.onready=function(){var a=this.a.containerDiv||this.a.el;iframes.el(this.a.id).style.height=this.a.height+"px";ixsJb(a,this.ops.targetPos,ixsFb(this,this.a),this.ops.anchorPos,{x:this.ops.Ea||0,y:this.ops.Ga||0});a.style.visibility="visible"};iframes.handlers.set("float",function(a){a=new ixsLb(a);return a=new ixsKb(a)});var ixs1=ixsF(void 0),ixs2=ixsb;
if(ixsy){ixs2=ixs1.c.createStyleSheet();ixsdb(ixs2,'.gc-bubbleDefault{text-align:left;padding:0 !important;margin:0 !important;border:0 !important}.gc-reset{margin:0 !important;border:0 !important;padding:0 !important}.pls-bubbleTop{border-bottom:1px solid #aaa}.pls-topTail{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif") repeat-x;background-position:bottom}.pls-vertShim{background:#fff;text-align:right}.pls-vertShimLeft{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif") repeat-y;background-position:right}.pls-confirm-container .pls-vertShim{background-color:#fff3c2}.pls-contentWrap{background:#fff}.pls-contentLeft{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif") repeat-y;background-position:right;vertical-align:top}.pls-dropRight{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropR.png") repeat-y;vertical-align:top}.pls-dropBottomL,.pls-dropBottom{vertical-align:top}.pls-dropBottomR{vertical-align:top}.pls-dropBottom{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropB.png") repeat-x;width:100%}.pls-topLeft{text-align:right;vertical-align:bottom}.pls-topRight{text-align:left;vertical-align:bottom}.pls-bottomLeft{text-align:right}.pls-bottomRight{text-align:left;vertical-align:top}.pls-tailtop,.pls-tailright,.pls-tailbottom,.pls-tailleft{display:none;position:relative}.pls-tailbottom{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/topTail.png") no-repeat}.pls-confirm-container .pls-tailbottom{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/topTailConfirm.png") no-repeat}.pls-tailtop{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bottomTail.png") no-repeat}.pls-tailright{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/leftTail.png") no-repeat}.pls-tailleft{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/rightTail.png") no-repeat}.pls-tailtop{vertical-align:top}.gc-bubbleDefault td{line-height:1px;font-size:1px}.pls-topLeft img,.pls-topRight img,.pls-tailbottom{vertical-align:bottom}.pls-bottomLeft img,.bubbleDropTR,.pls-dropBottomL img,.pls-dropBottom img,.pls-dropBottomR img,.pls-bottomLeft{vertical-align:top}')}else{var ixsMb=ixs3a(ixs1,
"head")[0];if(!ixsMb){var ixsNb=ixs3a(ixs1,"body")[0];ixsMb=ixs1.V("head");ixsNb.parentNode.insertBefore(ixsMb,ixsNb)}ixs2=ixs1.V("style");ixsdb(ixs2,'.gc-bubbleDefault{text-align:left;padding:0 !important;margin:0 !important;border:0 !important}.gc-reset{margin:0 !important;border:0 !important;padding:0 !important}.pls-bubbleTop{border-bottom:1px solid #aaa}.pls-topTail{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif") repeat-x;background-position:bottom}.pls-vertShim{background:#fff;text-align:right}.pls-vertShimLeft{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif") repeat-y;background-position:right}.pls-confirm-container .pls-vertShim{background-color:#fff3c2}.pls-contentWrap{background:#fff}.pls-contentLeft{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif") repeat-y;background-position:right;vertical-align:top}.pls-dropRight{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropR.png") repeat-y;vertical-align:top}.pls-dropBottomL,.pls-dropBottom{vertical-align:top}.pls-dropBottomR{vertical-align:top}.pls-dropBottom{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropB.png") repeat-x;width:100%}.pls-topLeft{text-align:right;vertical-align:bottom}.pls-topRight{text-align:left;vertical-align:bottom}.pls-bottomLeft{text-align:right}.pls-bottomRight{text-align:left;vertical-align:top}.pls-tailtop,.pls-tailright,.pls-tailbottom,.pls-tailleft{display:none;position:relative}.pls-tailbottom{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/topTail.png") no-repeat}.pls-confirm-container .pls-tailbottom{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/topTailConfirm.png") no-repeat}.pls-tailtop{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bottomTail.png") no-repeat}.pls-tailright{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/leftTail.png") no-repeat}.pls-tailleft{background:url("https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/rightTail.png") no-repeat}.pls-tailtop{vertical-align:top}.gc-bubbleDefault td{line-height:1px;font-size:1px}.pls-topLeft img,.pls-topRight img,.pls-tailbottom{vertical-align:bottom}.pls-bottomLeft img,.bubbleDropTR,.pls-dropBottomL img,.pls-dropBottom img,.pls-dropBottomR img,.pls-bottomLeft{vertical-align:top}');
ixs1.appendChild(ixsMb,ixs2)}var ixs3=function(a){ixs0.call(this,a);if(this.ops.position){if(!ixss(ixsOb,this.ops.position)){gadgets.warn("Invalid position parameter: "+this.ops.position+". Ignoring position and offset params.");ixsPb(this)}}else ixsPb(this)};ixsk(ixs3,ixs0);var ixsOb={ga:"bottom",ia:"left",ja:"right",ka:"top"},ixs4={};ixs4.top="bottom";ixs4.bottom="top";ixs4.left="right";ixs4.right="left";
var ixsQb={ha:"center",ia:"left",ja:"right"},ixsRb={ga:"bottom",ha:"center",ka:"top"},ixsSb={"pls-default":"pls-container","pls-confirm":"pls-confirm-container"},ixsTb=function(a,b){return ixs2a(a,function(c){c=ixsTa(c);return ixsra(c,b)>=0})};
ixs3.prototype.Aa=function(a){var b=parseInt(this.r.style.width,10),c=parseInt(this.r.style.height,10),e=+a.width||b,f=+a.height||c,d=e+1+5,g=f+1+5+4;switch(this.b){case "top":g+=8;break;case "right":d+=8;break;case "bottom":g+=8;break;case "left":d+=7}var h=ixsDb(window),i=window.frameElement;if(this.b=="left"){b=parseInt(this.a.containerDiv.style.left,10)-(e-b);if(h)i.style.left=b+"px";else this.a.containerDiv.style.left=b+"px"}if(this.b=="top"){b=parseInt(this.a.containerDiv.style.top,10)-(f-c);
if(h)i.style.top=b+"px";else this.a.containerDiv.style.top=b+"px"}c=ixsG(this.a.id);if(!c)return ixs;if(a.contentWidth)c.style.width=(a.contentWidth=="auto"?e:a.contentWidth)+"px";if(a.contentHeight)c.style.height=(a.contentHeight=="auto"?f:a.contentHeight)+"px";this.r.style.width=e+"px";this.r.style.height=f+"px";this.m.style.width=d+"px";this.m.style.height=g+"px";this.a.containerDiv.style.width=d+"px";this.a.containerDiv.style.height=g+"px";if(h){i.style.width=d+"px";i.style.height=g+"px"}return ixsa};
var ixsPb=function(a){a.ops.position="bottom";a.ops.offset=ixsb};
ixs3.prototype.open=function(){this.a.addCallback("resize",ixsj(this.Aa,this));var a=document.createElement("div");this.a.exposeMethod("setBubbleType",ixsj(this.ea,this));var b=(Number(this.ops.width)||100)+2,c={visibility:"hidden",position:"absolute",width:b+"px",zIndex:1E4,left:"-1000px",top:"-1000px"};if(this.ops.height)c.height=+this.ops.height+2+"px";ixsJ(a,c);a.innerHTML='<table cellpadding="0" cellspacing="0" style="width:TABLEWIDTHVALUE;" frame="void" rules="none" class="gc-bubbleDefault pls-container"><tr class="gc-reset"><td class="pls-topLeft gc-reset"><img class="gc-reset" width="1" height="1" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif"/></td><td class="pls-topTail gc-reset"><img class="pls-tailbottom gc-reset" width="15" height="9" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/><img class="pls-spacerbottom gc-reset" width="1" height="1"src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/></td><td class="pls-topRight gc-reset"><img class="gc-reset"width="1" height="1" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif"/></td></tr><tr class="gc-reset"><td class="pls-vertShimLeft gc-reset"><img class="gc-reset" width="1" height="1"  src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/></td><td class="pls-vertShim gc-reset"><img class="gc-reset" width="1" height="1" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/></td><td class="gc-reset"><img width="5" height="4" class="bubbleDropTR gc-reset" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropTR.png"/></td></tr><tr class="gc-reset"><td class="pls-contentLeft gc-reset"><img class="pls-tailright gc-reset" width="9" height="15" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"<img class="pls-spacerright gc-reset" width="1" height="1" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/></td><td class="pls-contentWrap gc-reset"><div class="bubble_content gc-reset"></div></td><td class="pls-dropRight gc-reset"><img class="pls-tailleft gc-reset" width="12" height="19" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/><img class="pls-spacerleft gc-reset" width="1" height="1" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/></td></tr><tr class="gc-reset"><td class="pls-bottomLeft gc-reset"><img width="1" height="1" class="gc-reset" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/border.gif"/></td><td class="gc-reset"><table cellpadding="0" cellspacing="0" width="100%" class="gc-reset"><tr class="gc-reset"><td class="pls-dropBottomL gc-reset"><img class="gc-reset" width="4" height="5" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropBL.png"/></td><td class="pls-dropBottom gc-reset"><img class="pls-tailtop gc-reset" width="19" height="13" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/><img class="pls-spacertop gc-reset" width="1" height="1" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/spacer.gif"/></td></tr></table></td><td class="pls-dropBottomR gc-reset"><img width="5" height="5" class="gc-reset" src="https://ssl.gstatic.com/s2/oz/images/stars/po/bubblev1/bubbleDropBR.png"/></td></tr></table>'.replace("TABLEWIDTHVALUE",b?
b+"px":"100%");document.body.appendChild(a);this.m=a.firstChild;this.ops.bubbleType&&this.ea(this.ops.bubbleType);this.r=ixsTb(this.m,"bubble_content");this.a.containerDiv?this.r.appendChild(this.a.containerDiv):this.a.openInto(this.r||ixsb);this.a.containerDiv=a};
ixs3.prototype.onready=function(){var a=ixsCb(window),b=ixsG(this.a.id);b.style.height=(this.a.contentHeight||+this.ops.contentHeight||+this.a.height)+"px";var c=+this.a.contentWidth||+this.ops.contentWidth;b.style.width=c?c+"px":"100%";c=+this.a.width||+this.ops.width;b=this.a.height||this.ops.height;ixsJ(this.r,{width:c+"px",height:b+"px"});var e=c+1+5,f=b+1+5+4;this.m.style.width=e+"px";this.a.containerDiv.style.width=e+"px";b=this.a.containerDiv;if(ixsDb(window)){b.style.left=0;b.style.top=0;
c=window.frameElement;c.style.height=f+"px";c.style.width=e+"px";c.style.zIndex=b.style.zIndex;b=c}c=ixsFb(this,this.a);var d=ixs$a(c),g=ixsN(b),h=ixsN(c);a=ixsXa(a||window);this.b=ixsUb(d,g,h,a,this.ops.position);if(this.b!=this.ops.position)this.ops.offset=ixsb;this.d=this.ops.anchorPosition;this.e=this.ops.targetPosition;if(this.b=="top"||this.b=="bottom"){if(!ixss(ixsQb,this.d)||!ixss(ixsQb,this.e))this.e=this.d="left"}else if(!ixss(ixsRb,this.d)||!ixss(ixsRb,this.e))this.e=this.d="center";if(this.o=
this.ops.arrowPosition)if(this.b=="top"||this.b=="bottom"){if(!ixss(ixsQb,this.o))this.o="center"}else{if(!ixss(ixsRb,this.o))this.o="center"}else this.o="center";g=this.b;var i=this.e,j={};j.anchor=g+"-"+this.d;j.target=ixs4[g]+"-"+i;this.U=j;ixsTb(this.m,"pls-spacer"+this.b).style.display="none";this.P=ixsTb(this.m,"pls-tail"+this.b);this.P.style.display="inline";switch(this.b){case "top":f+=8;break;case "right":e+=8;break;case "bottom":f+=8;break;case "left":e+=7}ixsJ(this.m,{width:e+"px",height:f+
"px"});ixsJ(b,{width:e+"px",height:f+"px"});f=g=ixsN(b);e=this.ops.offset||{x:0,y:0};if(this.b=="top"||this.b=="bottom"){g=15;i=9}else{g=9;i=15}g={x:-(g/2)-1,y:-i/2};i={x:0,y:0};if(this.b=="top"||this.b=="bottom"){d=d.x;j=this.d=="right"?h.width:this.d=="center"?h.width/2:0;var n=this.e=="right"?f.width:this.e=="center"?f.width/2:0;d+=j-n;if(d+f.width>a.width){a=d+f.width-a.width;i.x-=a;d-=a}if(d<0)i.x-=d}else{d=d.y;j=this.d=="bottom"?h.height:this.d=="center"?h.height/2:0;n=this.e=="bottom"?f.height:
this.e=="center"?f.height/2:0;d+=j-n;if(d+f.height>a.height){a=d+f.height-a.height;i.y-=a;d+=a}if(d<0)i.y-=d}e.x+=i.x;e.y+=i.y;g.x-=i.x;g.y-=i.y;if(this.d=="right")e.x*=-1;else if(this.d=="bottom")e.y*=-1;a={x:0,y:0};if(this.b=="top"||this.b=="bottom"){switch(this.o){case "left":a.x=7.5;break;case "right":a.x=h.width-7.5;break;default:a.x=h.width/2-7.5}if(this.e=="center")a.x+=f.width/2;else if(this.e=="right")a.x+=f.width;if(this.d=="center")a.x-=h.width/2;else if(this.d=="right")a.x-=h.width}else{switch(this.o){case "top":a.y+=
7.5;break;case "bottom":a.y+=h.height-7.5;break;default:a.y+=h.height/2-7.5}if(this.e=="center")a.y+=f.height/2;else if(this.e=="bottom")a.y+=f.height;if(this.d=="center")a.y-=h.height/2;else if(this.d=="bottom")a.y-=h.height}h=this.b;h=h=="right"||h=="left"?0:Math.min(Math.max(6,g.x+a.x),f.width-6-15-10);d=this.b;a=d=="top"||d=="bottom"?0:Math.min(Math.max(6,g.y+a.y),f.height-6-15-10);h={la:e,O:{x:h,y:a}};ixsJ(this.P||ixsb,{left:h.O.x+"px",top:h.O.y+"px"});ixsJb(b,this.U.target,c,this.U.anchor,h.la);
this.a.containerDiv.style.visibility="visible"};var ixsUb=function(a,b,c,e,f){var d=[];if(a.y+c.height+b.height<=e.height){d.push("bottom");if(f=="bottom")return f}if(a.y-b.height>=0){d.push("top");if(f=="top")return f}if(a.x-b.width>=0){d.push("left");if(f=="left")return f}if(a.x+b.width+c.width<=e.width){d.push("right");if(f=="right")return f}a=ixs4[f];for(b=0;c=d[b++];)if(c==a)return a;return d[0]?d[0]:f};
ixs3.prototype.ea=function(a){if(this.m&&a in ixsSb)this.m.className="gc-bubbleDefault "+ixsSb[a]};iframes.handlers.set("bubble",function(a){a=new ixs3(a);return a=new ixsKb(a)});var ixs5=function(a){this.t=ixsG(a.triggerElement);this.sa=a.hoverDelay||1500;this.z=ixsb;this.xa=ixsY(this.t,"mouseover",this.u,ixs,this);this.M=ixsY(this.t,"mousemove",this.va,ixs,this);this.wa=ixsY(this.t,"mouseout",this.K,ixs,this)};ixsk(ixs5,ixsBb);var ixsVb=function(a,b){for(;b;){if(b==a.t)return ixsa;b=b.parentNode}return ixs};ixs5.prototype.u=function(a){if(!(a.relatedTarget&&ixsVb(this,a.relatedTarget))){ixsWb(this);ixsXb(this);this.dispatchEvent({type:"mouseEnter",clientX:a.clientX,clientY:a.clientY})}};
ixs5.prototype.va=function(a){this.oa=a.clientX;this.pa=a.clientY;ixsXb(this);this.dispatchEvent({type:"mouseMove",clientX:a.clientX,clientY:a.clientY})};var ixsXb=function(a){if(!a.z)a.z=window.setTimeout(ixsj(a.ra,a),a.sa)},ixsWb=function(a){a.z=ixsd.clearTimeout(a.z)};ixs5.prototype.ra=function(){var a=ixsYa(document);this.dispatchEvent({type:"hover",clientX:this.oa,clientY:this.pa,scrollX:a.x,scrollY:a.y});this.z=ixsb};
ixs5.prototype.K=function(a){if(!(a.relatedTarget&&ixsVb(this,a.relatedTarget))){ixsWb(this);this.dispatchEvent({type:"mouseLeave",clientX:a.clientX,clientY:a.clientY})}};ixs5.prototype.h=function(){ixsZ(this.xa);ixsZ(this.wa);ixsZ(this.M);ixsWb(this);delete this.t;ixs5.G.h.call(this);this.dispatchEvent({type:"dispose"})};ixs5.prototype.get=function(){return this.t};
var ixs6=[],ixsYb=function(a){if(!document||!document.body)return ixs;for(var b=document.body.parentNode;a&&b;){if(a===b)return ixsa;a=a.parentNode}return ixs},ixsZb=function(){var a=window.setInterval(function(){for(var b=ixs6.length-1;b>=0;b--)ixsYb(ixs6[b].get())||ixs6.splice(b,1)[0].p()},1E4);ixsY(window,"unload",function(){window.clearInterval(a);for(var b=ixs6.length-1;b>=0;b--)ixs6.splice(b,1)[0].p()})},ixs_b=ixs;var ixs0b=function(a,b){this.i=b;if(!ixs_b){ixs_b=ixsa;ixsZb()}var c=new ixs5(a);ixs6.push(c);this.n=c;this.J=ixsY(this.n,"mouseEnter",this.u,ixs,this);this.M=ixsY(this.n,"mouseMove",this.u,ixs,this);this.ua=ixsY(this.n,"hover",this.open,ixs,this);this.L=ixsY(this.n,"mouseLeave",this.close,ixs,this);this.qa=ixsY(this.n,"dispose",this.p,ixs,this)};ixsc=ixs0b.prototype;ixsc.u=function(){this.a&&this.a.reenterAnchor&&this.a.reenterAnchor()};ixsc.R=function(){this.a=ixsb};
ixsc.p=function(){this.R();ixsZ(this.J);ixsZ(this.ua);ixsZ(this.M);ixsZ(this.L);ixsZ(this.qa)};ixsc.open=function(a){if(!this.a){if(iframer){this.i.openParams.x=a.clientX;this.i.openParams.y=a.clientY}else{this.i.openParams.x=a.scrollX+a.clientX;this.i.openParams.y=a.scrollY+a.clientY}this.i.openParams.hover=ixsa;this.a=iframes.open(this.i.Ca,this.i.openParams,this.i.ya,this.i.ta,this.i.ma);this.a.addCallback("close",ixsj(this.R,this))}};ixsc.close=function(){this.a&&this.a.leftAnchor&&this.a.leftAnchor()};
var ixs1b=function(a){ixs0.call(this,a.a);this.j=a};ixsk(ixs1b,ixs0);ixs1b.prototype.onBeforeParentOpen=function(){var a=this.a;if(a.openedBy_){if(typeof a.openParams.x=="undefined"){a.openParams.x=0;a.openParams.y=0}var b=ixs$a(ixsG(a.openedBy_.id));a.openParams.x+=b.x||0;a.openParams.y+=b.y||0}this.j.onBeforeParentOpen&&this.j.onBeforeParentOpen()};ixsc=ixs1b.prototype;
ixsc.open=function(){if(this.a.openedBy_){var a=ixsL(ixsG(this.a.openedBy_.id));this.ops.x+=a.x||0;this.ops.y+=a.y||0}this.a.exposeMethod("leftAnchor",ixsj(this.fa,this));this.a.exposeMethod("reenterAnchor",ixsj(this.S,this));this.j.open()};ixsc.onready=function(){this.n=new ixs5({triggerElement:this.a.containerDiv||ixsG(this.a.id)});this.J=ixsY(this.n,"mouseEnter",this.u,ixs,this);this.L=ixsY(this.n,"mouseLeave",this.K,ixs,this);this.j.onready()};ixsc.close=function(){ixsZ(this.J);ixsZ(this.L);this.j.close()};
ixsc.u=function(){this.$=ixsa;this.S()};ixsc.K=function(){this.$=ixs;this.fa()};ixsc.S=function(){this.H&&ixsd.clearTimeout(this.H);this.H=ixsb};ixsc.fa=function(){if(!this.$&&this.a.close)this.H=window.setTimeout(ixsj(this.a.close,this.a),1E3)};var ixs2b=function(a,b,c,e,f,d){return new ixs0b(a,{Ca:b,openParams:c,ya:e,ta:f,ma:d})},ixs7="iframes.styles.hover".split("."),ixs8=ixsd;!(ixs7[0]in ixs8)&&ixs8.execScript&&ixs8.execScript("var "+ixs7[0]);
for(var ixs9;ixs7.length&&(ixs9=ixs7.shift());)if(!ixs7.length&&ixs2b!==undefined)ixs8[ixs9]=ixs2b;else ixs8=ixs8[ixs9]?ixs8[ixs9]:ixs8[ixs9]={};var ixs$=function(a){ixs0.call(this,a)};ixsk(ixs$,ixs0);ixs$.prototype.open=function(){this.s=document.createElement("div");ixsJ(this.s,{width:this.ops.width+"px",position:"absolute",left:"-10000px",top:"-10000px",visibility:"hidden",zIndex:2E4});document.body.appendChild(this.s);this.a.openInto(this.s);this.a.containerDiv=this.s};
ixs$.prototype.onready=function(){if(this.a.height)document.getElementById(this.a.id).style.height=this.a.height+"px";ixsJ(this.s,{left:(this.ops.x||0)+"px",top:(this.ops.y||0)+"px",visibility:"visible"})};ixs$.prototype.close=function(){ixs0a(this.s)};iframes.handlers.set("hover",function(a){var b=new ixs$(a);if(a.openParams.hover)b=new ixs1b(b);return b});})();
;
gadgets.config.init({"iframes":{"annotator":{"params":{"url":"#"},"url":"https://madrelease.google.com/u/0/_/annotator/get"},"annotator.options":{"params":{"url":"#"},"url":"https://madrelease.google.com/u/0/_/annotator/options"}},"osapi.services":{},"googleapis":{"methods":{"chili.people.list":true,"chili.entities.starred.insert":{"cache":{"invalidates":["chili.entities.starred","chili.entitiesDefaultAcl"]}},"chili.people.get":true,"chili.entities.get":true,"chili.entities.starred.delete":true,"chili.entities.list":true,"chili.groups.list":true,"chili.entities.starred.get":true,"chili.activities.list":true,"chili.entitiesDefaultAcl.get":true,"chili.entities.starred.list":true,"chili.activities.get":true,"chili.activities.search":true},"requestCache":{"enabled":true},"rpc":"/rpc","sessionCache":{"enabled":true},"proxy":"https://www-googleapis-test.sandbox.google.com/static/proxy.html"}});
;window.gadgets=window.gadgets||gadgets;
}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e);}})();
(function(){var b=true,g=null,h=false,i=window.gbar;var k=k||{};k.global=this;k.m=b;k.I="en";k.e=g;k.ha=function(a){k.h(a)};k.la=function(a){if(!k.m){a=a||"";throw Error("Importing test-only code into non-debug environment"+a?": "+a:".");}};k.h=function(a,c,d){a=a.split(".");d=d||k.global;!(a[0]in d)&&d.execScript&&d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)if(!a.length&&k.z(c))d[e]=c;else d=d[e]?d[e]:d[e]={}};k.U=function(a,c){for(var d=a.split("."),e=c||k.global,f;f=d.shift();)if(k.A(e[f]))e=e[f];else return g;return e};
k.W=function(a,c){var d=c||k.global,e;for(e in a)d[e]=a[e]};k.K=function(){};k.na=h;k.ja=function(){};k.N="";k.fa=function(){};k.X=function(a){return a};k.J=function(){throw Error("unimplemented abstract method");};k.L=function(a){a.S=function(){return a.w||(a.w=new a)}};
k.b=function(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(c=="function"&&typeof a.call=="undefined")return"object";return c};k.F=function(a,c){if(c in a)for(var d in a)if(d==c&&Object.prototype.hasOwnProperty.call(a,c))return b;return h};k.ga=function(a,c){return a instanceof Object?Object.prototype.propertyIsEnumerable.call(a,c):k.F(a,c)};k.z=function(a){return a!==undefined};k.ca=function(a){return a===g};k.A=function(a){return a!=g};k.Y=function(a){return k.b(a)=="array"};
k.Z=function(a){var c=k.b(a);return c=="array"||c=="object"&&typeof a.length=="number"};k.aa=function(a){return k.C(a)&&typeof a.getFullYear=="function"};k.ea=function(a){return typeof a=="string"};k.$=function(a){return typeof a=="boolean"};k.da=function(a){return typeof a=="number"};k.ba=function(a){return k.b(a)=="function"};k.C=function(a){a=k.b(a);return a=="object"||a=="array"||a=="function"};k.u=function(a){return a[k.c]||(a[k.c]=++k.H)};
k.G=function(a){"removeAttribute"in a&&a.removeAttribute(k.c);try{delete a[k.c]}catch(c){}};k.c="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36);k.H=0;k.R=k.u;k.ia=k.G;k.s=function(a){var c=k.b(a);if(c=="object"||c=="array"){if(a.r)return a.r();c=c=="array"?[]:{};for(var d in a)c[d]=k.s(a[d]);return c}return a};k.p=function(a){return a.call.apply(a.bind,arguments)};
k.o=function(a,c){var d=c||k.global;if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,e);return a.apply(d,f)}}else return function(){return a.apply(d,arguments)}};k.bind=function(){k.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k.p:k.o;return k.bind.apply(g,arguments)};
k.D=function(a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=Array.prototype.slice.call(arguments);d.unshift.apply(d,c);return a.apply(this,d)}};k.j=function(a,c){for(var d in c)a[d]=c[d]};k.now=Date.now||function(){return+new Date};
k.V=function(a){if(k.global.execScript)k.global.execScript(a,"JavaScript");else if(k.global.eval){if(k.e==g){k.global.eval("var _et_ = 1;");if(typeof k.global._et_!="undefined"){delete k.global._et_;k.e=b}else k.e=h}if(k.e)k.global.eval(a);else{var c=k.global.document,d=c.createElement("script");d.type="text/javascript";d.defer=h;d.appendChild(c.createTextNode(a));c.body.appendChild(d);c.body.removeChild(d)}}else throw Error("goog.globalEval not available");};k.ma=b;
k.Q=function(a,c){var d=a+(c?"-"+c:"");return k.g&&d in k.g?k.g[d]:d};k.ka=function(a){k.g=a};k.T=function(a,c){var d=c||{},e;for(e in d){var f=(""+d[e]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+e+"\\}","gi"),f)}return a};k.P=function(a,c,d){k.h(a,c,d)};k.O=function(a,c,d){a[c]=d};k.i=function(a,c){function d(){}d.prototype=c.prototype;a.f=c.prototype;a.prototype=new d;a.prototype.constructor=a};
k.M=function(a,c){var d=arguments.callee.caller;if(d.f)return d.f.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=h,j=a.constructor;j;j=j.f&&j.f.constructor)if(j.prototype[c]===d)f=b;else if(f)return j.prototype[c].apply(a,e);if(a[c]===d)return a.constructor.prototype[c].apply(a,e);else throw Error("goog.base called from a method of one name to a method of a different name");};k.scope=function(a){a.call(k.global)};k.n=h;
if(k.n){Function.prototype.bind=Function.prototype.bind||function(a){if(arguments.length>1){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return k.bind.apply(g,c)}else return k.bind(this,a)};Function.prototype.D=function(){var a=Array.prototype.slice.call(arguments);a.unshift(this,g);return k.bind.apply(g,a)};Function.prototype.i=function(a){k.i(this,a)};Function.prototype.j=function(a){k.j(this.prototype,a)}};var l={};l.a={};l.a.k=[];l.a.d=g;l.a.t=function(a,c){this.k.push([a,c])};l.a.B=function(a){var c=i.mdd;if(c)try{if(!l.a.d){l.a.d={};var d=c.split(/;/);for(c=0;c<d.length;++c)l.a.d[d[c]]=b}return l.a.d[a]}catch(e){i.logger&&i.logger.ml(e)}return h};
l.a.v=function(){var a,c;for(a=0;c=i.bnc[a];++a)if(c[0]=="gc")break;if(c&&!c[1].l){a=i.mdc;for(var d=0,e;e=this.k[d];++d){var f=e[0],j=a[f];if(j&&!l.a.B(f))try{e[1].init(j)}catch(m){i.logger&&i.logger.ml(m)}}if(a=i.qd.gc){i.qd.gc=[];for(d=0;e=a[d];++d)try{e()}catch(n){i.logger&&i.logger.ml(n)}}c[1].l=b}};l.a.t("gc",{init:function(a){window.googleapis.configure({googleapis:{gcv:a.version}})}});window.gbar&&window.gbar.bnc&&l.a.v();})();
