var Jerboa=(function(a){a.lib={};a.lib.env={ie:/MSIE/i.test(navigator.userAgent),ie6:/MSIE 6/i.test(navigator.userAgent),ie7:/MSIE 7/i.test(navigator.userAgent),ie8:/MSIE 8/i.test(navigator.userAgent),firefox:/Firefox/i.test(navigator.userAgent),opera:/Opera/i.test(navigator.userAgent),webkit:/Webkit/i.test(navigator.userAgent),camino:/Camino/i.test(navigator.userAgent)};a.lib.onDomReady=function(b){if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false)}else{if(document.body&&document.body.lastChild){b()}else{setTimeout(function(){a.lib.onDomReady(b)},50)}}};a.lib.addEvent=function(c,b,d){b=b.toLowerCase();if(c.addEventListener){c.addEventListener(b,d,false)}else{if(c.attachEvent){c.attachEvent("on"+b,d)}}};a.lib.removeEvent=function(c,b,d){b=b.toLowerCase();if(c.removeEventListener){c.removeEventListener(b,d,false)}else{if(c.detachEvent){c.detachEvent("on"+b,d)}}};a.lib.getEvent=function(b){if(b.stopPropagation){b.stopPropagation()}else{b.cancelBubble=true}return{target:this.getTargetFromEvent(b),preventDefault:function(){if(b.preventDefault){b.preventDefault()}else{b.returnValue=false}}}};a.lib.getTargetFromEvent=function(b){var c=b.srcElement||b.target;if(c.nodeType==3){c=c.parentNode}return c};a.lib.getArrayOfClassNames=function(b){var c=[];if(b.className){c=b.className.split(" ")}return c};a.lib.addClass=function(b,c){var d=this.getArrayOfClassNames(b);d.push(c);b.className=d.join(" ")};a.lib.removeClass=function(d,e){var f=this.getArrayOfClassNames(d);var b=[];for(var c=0;c<f.length;c++){if(e!=f[c]){b.push(f[c])}}d.className=b.join(" ")};a.lib.hasClass=function(c,d){var b=new RegExp(d);return c.className&&b.test(c.className)};a.lib.getObjectOfStyle=function(e){var g=e.getAttribute("style")||"",d=0,b=0,f={},c="";if(g){g=g.split(";");for(d=0,b=g.length;d<b;d++){if(g[d]){c=g[d].split(":");if(c.length==2){c[0]=c[0].replace(/^[\s]+/g,"");c[1]=c[1].replace(/^[\s]+/g,"");c[0]=c[0].replace(/[\s]+$/g,"");c[1]=c[1].replace(/[\s]+$/g,"");f[c[0]]=c[1]}}}}return f};a.lib.setObjectOfStyle=function(b,e){var d="",c;for(c in e){if(c.substr(0,1)!="_"){d=d.concat(c+":"+e[c]+";")}}b.setAttribute("style",d)};a.lib.addStyle=function(d,c){var b=this.getObjectOfStyle(d),e;for(e in c){if(e.substr(0,1)!="_"){b[e]=c[e]}}this.setObjectOfStyle(d,b)};a.lib.removeStyle=function(f,e){var c=this.getObjectOfStyle(f),d,b;for(d=0,b=e.length;d<b;d++){if(c[e[d]]){delete c[e[d]]}}this.setObjectOfStyle(f,c)};a.lib.setNode=function(f,e){if(arguments.length===0){return document.createElement("div")}if(arguments.length==1){e=arguments[0];f=document.createElement(e.tag||e.Tag||"div")}var c=e.Attr||e.attr||{},b=e.event||e.Event||{};if(b.add){this.addEvent(f,b.add,b.fn)}else{if(b.remove){this.removeEvent(f,b.remove,b.fn)}}for(var d in c){if(d.substr(0,1)!="_"){f.setAttribute(d,c[d])}}if(e.html){f.innerHTML=e.html}return f};a.lib.request=function(g){var c=null,f=(g.method)?g.method.toUpperCase():"GET",b=g.url,e="",d="";delete g.method;delete g.url;if(window.XMLHttpRequest){c=new XMLHttpRequest()}else{c=new ActiveXObject("Microsoft.XMLHTTP")}for(e in g){if(e.substr(0.1)!="_"){d+=e+"="+g[e]+"&"}}d=d.substr(0,d.length-1);if(f=="GET"){if(/\?/.test(b)){b=b+"&"+d}else{b=b+"?"+d}}c.open(f,encodeURI(b),true);c.onreadystatechange=function(){if(c.readyState==4){if(c.status==200){alert("send")}else{alert("fail")}}};if(f=="POST"){c.setRequestHeader("Content-type","application/x-www-form-urlencoded");c.setRequestHeader("Content-length",d.split("&").length);c.setRequestHeader("Connection","close");c.send(encodeURI(d))}else{c.send()}};a.lib.detectMedia=function(d){var c={p:1,span:1,div:1},e={object:1,embed:1,video:1};if(typeof d==="object"){if(d.nodeName.toLowerCase()=="div"&&d.getAttribute("role")){return d.getAttribute("role")}else{if(d.nodeName.toLowerCase()=="img"){return"image"}else{if(e[d.nodeName.toLowerCase()]||d.getAttribute("class")=="jb-media-touch"){return"media"}else{if(d.nodeName.toLowerCase()=="iframe"){return"iframe"}else{return"text"}}}}}else{if(typeof d==="string"){if(/^<img/i.test(d)){return"image"}else{if(/^<iframe/.test(d)){return"iframe"}else{for(var b in e){if((new RegExp("^<"+b)).test(d)){return"media"}}}}return"text"}}};a.lib.curry=function(f,e,d){var b=e||window,c=Array.prototype.slice.call(arguments,3);if(d){return function(){var g=arguments;clearTimeout(f.tId);f.tId=setTimeout(function(){f.apply(b,c.concat(Array.prototype.slice.call(g,0)))},d)}}else{return function(){f.apply(e,c.concat(Array.prototype.slice.call(arguments,0)))}}};return a}(Jerboa||{}));var Jerboa=(function(my){var Interface=function(_name,_array){this.name=_name;this.methods=[];for(var i=0,len=_array.length;i<len;i++){if(typeof _array[i]!=="string"){throw new Error("Interface Error: Method names should be string.")}this.methods.push(_array[i])}};function hasImplements(_object){if(arguments.length<2){throw new Error("hasImplement Error: Please use hasImplement(Object, Interface1 [, Interface2, ...])")}for(var i=1,arglen=arguments.length,j,intflen;i<arglen;i++){var _interface=arguments[i];for(j=0,intflen=_interface.methods.length;j<intflen;j++){var _method=_interface.methods[j];if(!_object[_method]){throw new Error("hasImplement Error: object did not implement "+_interface.name+" interface. Method "+_method+" was not found.")}}}}function extend(subclass,superclass){var F=function(){};F.prototype=superclass.prototype;subclass.prototype=new F();subclass.prototype.constructor=subclass}var Panel=function(rawPanelName){var node,childs={},panelName=rawPanelName.toLowerCase();if(usedModule[panelName]){throw new Error("Module "+panelName+" have been used")}node=lib.setNode({attr:{id:"jb-"+panelName.toLowerCase(),"class":"jb-panel jb-ignore hide"}});usedModule[panelName.toLowerCase()]=true;this.getElement=function(){return node};this.add=function(menuObject){node.appendChild(menuObject.getElement());childs[menuObject.name]=menuObject;return node.children.length-1};this.remove=function(childId){node.removeChild(this.getChild(childId))};this.getChild=function(childName){if(childName){return childs[childName]}};this.show=function(){if(lib.hasClass(node,"hide")){lib.removeClass(node,"hide")}};this.hide=function(){if(!lib.hasClass(node,"hide")){lib.addClass(node,"hide")}}};var Stage=function(eleTextArea){var textHTML="",stage=null,layer=[],node,screen={},old_content,stageHeight=config.height||eleTextArea.offsetHeight,stageWidth=config.width||eleTextArea.offsetWidth;if(eleTextArea.nodeName.toLowerCase()=="textarea"){textHTML=eleTextArea.value.replace(/&lt;/ig,"<").replace(/&gt;/ig,">");stage=lib.setNode({attr:{id:"jb-stage"},html:textHTML})}else{stage=eleTextArea;mode="native"}if(stage.children[0]&&stage.children[0].className=="jb-ignore"){node=stage.children[0];old_content=node.innerHTML}else{node=lib.setNode({tag:"div",attr:{"class":"jb-ignore",style:"position:relative;top:0;left:0;padding:0;width:"+stageWidth+"px;height:"+stageHeight+"px;overflow:hidden;"}});old_content=stage.innerHTML;stage.innerHTML="";stage.appendChild(node)}if(node.children[0]&&lib.hasClass(node.children[0],"jb-layer")){layer.push(node.children[0])}else{layer.push(lib.setNode({attr:{index:0,"class":"jb-layer jb-ignore",style:"position:absolute;top:0;left:0;width:100%;height:100%;z-index:2000;"},html:old_content}));node.appendChild(layer[0])}this.currentEditingNode="";this.currentState="";this.getElement=function(){return stage};this.getLayer=function(){return layer[0]};this.setHeight=function(height){lib.addStyle(node,{height:height+"px"})};this.autoHeight=function(){var height=0,i;for(i=0,len=layer[0].children.length;i<len;i++){height+=layer[0].children[i].offsetHeight}height=(height>300)?height:300;this.setHeight(height);if(mode=="editor"){ui.option.setValue([height,0,0])}};this.normalizeTree=function(_root){if(!_root){return""}var queue=[],queue2=[],i,j,len2,len,currentNode,flagFloor1=true,tempNode2,tempNode,newTree=_root.cloneNode(true);queue.push(newTree);queue2.push(_root);while(queue.length>0){currentNode=queue.pop();currentNode2=queue2.pop();if(currentNode.childNodes.length===0){continue}for(i=0,j=0,len2=currentNode2.childNodes.length,len=currentNode.childNodes.length;i<len&&j<len2;i++,j++){if(currentNode.childNodes[i].nodeName!="#text"&&currentNode.childNodes[i].nodeName!="#comment"){if(currentNode.childNodes[i].getAttribute("role")){continue}switch(lib.detectMedia(currentNode.childNodes[i])){case"image":if(!flagFloor1&&currentNode.childNodes.length==1){tempNode=currentNode;while(tempNode.parentNode.childNodes.length==1&&!lib.hasClass(tempNode.parentNode,"jb-ignore")){tempNode=tempNode.parentNode}tempNode2=currentNode.childNodes[i].cloneNode(true);tempNode2=lib.setNode({tag:"div",attr:{role:"image",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"}}).appendChild(tempNode2).parentNode;newTree.appendChild(tempNode2);tempNode.parentNode.removeChild(tempNode)}else{tempNode=currentNode.childNodes[i].cloneNode(true);tempNode=lib.setNode({tag:"div",attr:{role:"image",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"}}).appendChild(tempNode).parentNode;newTree.appendChild(tempNode);currentNode.removeChild(currentNode.childNodes[i]);i--;len--}break;case"iframe":if(!flagFloor1&&currentNode.childNodes.length==1){tempNode=currentNode;while(tempNode.parentNode.childNodes.length==1&&!tempNode.parentNode.getAttribute("index")){tempNode=tempNode.parentNode}tempNode2=currentNode.childNodes[i].cloneNode(true);tempNode2=lib.setNode({tag:"div",attr:{role:"iframe",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"},html:'<div class="jb-media-touch">&#160;</div>'}).appendChild(tempNode2).parentNode;newTree.appendChild(tempNode2);tempNode.parentNode.removeChild(tempNode)}else{tempNode=currentNode.childNodes[i].cloneNode(true);tempNode=lib.setNode({tag:"div",attr:{role:"iframe",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"},html:'<div class="jb-media-touch">&#160;</div>'}).appendChild(tempNode).parentNode;newTree.appendChild(tempNode);currentNode.removeChild(currentNode.childNodes[i]);i--;len--}break;case"media":if(!flagFloor1&&currentNode.childNodes.length==1){tempNode=currentNode;while(tempNode.parentNode.childNodes.length==1&&!tempNode.parentNode.getAttribute("index")){tempNode=tempNode.parentNode}tempNode2=currentNode.childNodes[i].cloneNode(true);tempNode2=lib.setNode({tag:"div",attr:{role:"media",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"},html:'<div class="jb-media-touch">&#160;</div>'}).appendChild(tempNode2).parentNode;newTree.appendChild(tempNode2);tempNode.parentNode.removeChild(tempNode);if(tempNode2.childNodes[1].nodeName.toLowerCase()=="object"){tempNode2.childNodes[1].insertBefore(lib.setNode({tag:"param",attr:{name:"wmode",value:"opaque"}}),tempNode.childNodes[1].childNodes[0]);tempNode2.childNodes[1].lastChild.setAttribute("wmode","opaque")}}else{tempNode=currentNode.childNodes[i].cloneNode(true);tempNode=lib.setNode({tag:"div",attr:{role:"media",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"},html:'<div class="jb-media-touch">&#160;</div>'}).appendChild(tempNode).parentNode;if(tempNode.childNodes[1].nodeName.toLowerCase()=="object"){tempNode.childNodes[1].insertBefore(lib.setNode({tag:"param",attr:{name:"wmode",value:"opaque"}}),tempNode.childNodes[1].childNodes[0]);tempNode.childNodes[1].lastChild.setAttribute("wmode","opaque")}newTree.appendChild(tempNode);currentNode.removeChild(currentNode.childNodes[i]);i--;len--}break;case"text":if(currentNode.childNodes[i].innerHTML===""&&currentNode.childNodes[i].nodeName.toLowerCase()!="div"){currentNode.removeChild(currentNode.childNodes[i]);i--;len--;continue}else{if(flagFloor1){if(currentNode.childNodes[i].nodeName.toLowerCase()!="div"){tempNode=currentNode.childNodes[i].cloneNode(true);tempNode=lib.setNode().appendChild(tempNode).parentNode;tempNode=lib.setNode({tag:"div",attr:{role:"text",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"}}).appendChild(tempNode).parentNode;if(newTree.childNodes.length===0){newTree.appendChild(tempNode)}else{newTree.insertBefore(tempNode,newTree.childNodes[i]);newTree.removeChild(newTree.childNodes[i+1])}}else{lib.setNode(newTree.childNodes[i],{attr:{role:"text",style:"position:absolute;top:"+currentNode2.childNodes[j].offsetTop+"px;left:"+currentNode2.childNodes[j].offsetLeft+"px;"}})}}}queue.push(currentNode.childNodes[i]);queue2.push(currentNode2.childNodes[j]);break;default:break}}}if(flagFloor1){flagFloor1=false}}for(i=0,len=newTree.childNodes.length;i<len;i++){if(newTree.childNodes[i].nodeName=="#text"){if(/[\S]/ig.test(newTree.childNodes[i].nodeValue)){tempNode=lib.setNode({tag:"div",attr:{role:"text",style:"position:absolute;top:"+newTree.childNodes[i].offsetTop+"px;left:"+newTree.childNodes[i].offsetLeft+"px;"},html:"<div>"+newTree.childNodes[i].nodeValue+"</div>"});newTree.removeChild(newTree.childNodes[i]);newTree.appendChild(tempNode)}else{newTree.removeChild(newTree.childNodes[i]);len--}i--;continue}lib.addStyle(newTree.childNodes[i],{position:"absolute",overflow:"hidden",padding:0,margin:0,display:"inline-block"})}_root.innerHTML=newTree.innerHTML;return true};var self=this;setTimeout(function(){self.autoHeight();self.normalizeTree(layer[0]);history.save(layer[0].innerHTML)},100)};var History=function(rawSize,callback){var circularList=[],self=this,index=-1,flen=0,blen=0,enable=true;size=rawSize||10;this.save=function(data){if(!enable){return false}if(blen!=size){blen++}index=(index+1)%size;flen=1;circularList[index]=data};this.undo=function(){if(!enable){return false}if(blen-1>0){index=(index-1>=0)?index-1:size-1;blen--;flen++;callback(circularList[index])}};this.redo=function(){if(!enable){return false}if(flen-1>0){index=(index+1)%size;blen++;flen--;callback(circularList[index])}};this.clear=function(){circularList=[];flen=0;blen=0;index=-1};this.freeze=function(msec){enable=false};this.unfreeze=function(){enable=true}};var BoxManager=function(){var node=lib.setNode({attr:{id:"jb-box","class":"jb-ignore hide"}}),childrenBox={},currentBox="";this.getElement=function(){return node};this.add=function(objBox){hasImplements(objBox,BoxInterface);childrenBox[objBox.name]=objBox;node.appendChild(objBox.getElement())};this.remove=function(nameBox){if(childrenBox[nameBox]){node.removeChild(childrenBox[nameBox]);delete childrenBox[nameBox]}};this.getBox=function(nameBox){if(childrenBox[nameBox]){return childrenBox[nameBox]}};this.show=function(nameBox){currentBox=nameBox;lib.removeClass(node,"hide");lib.removeClass(childrenBox[nameBox].getElement(),"hide");var boxTop=Math.min(document.body.clientHeight,document.documentElement.clientHeight),boxLeft=Math.min(document.body.clientWidth,document.documentElement.clientWidth);boxTop=(boxTop-node.offsetHeight>0)?(boxTop-node.offsetHeight)/2:0;boxLeft=(boxLeft-node.offsetWidth>0)?(boxLeft-node.offsetWidth)/2:0;lib.setNode(node,{attr:{style:"top:"+boxTop+"px;left:"+boxLeft+"px;"}})};this.hide=function(){lib.addClass(node,"hide");lib.addClass(childrenBox[currentBox].getElement(),"hide")}};var Box=function(name){if(!name){throw new Error("name of Box missing")}name=name.toLowerCase();var node=lib.setNode({attr:{id:"jb-"+name,"class":"jb-ignore hide"}}),children=[];this.name=name;this.getElement=function(){return node};this.getValue=function(){var returnValue=[];for(var i=0,len=children.length;i<len;i++){returnValue.push(children[i].getValue())}return returnValue};this.setValue=function(_array){if(_array.length==children.length){for(var i=0,len=_array.length;i<len;i++){children[i].setValue(_array[i])}}};this.add=function(objUI){children.push(objUI);node.appendChild(objUI.getElement());return children[children.length-1]};this.remove=function(indexUI){if(children[indexUI]){node.removeChild(children[indexUI]);delete children[indexUI]}}};var Button=function(label,name,className){var node=lib.setNode({attr:{"class":"jb-button jb-ignore "+((className)?className:"")},html:label,event:{add:"click",fn:function(e){sandbox.notify("click-button-"+name,e)}}});this.name=name;this.getValue=function(){return label};this.setValue=function(name){lib.setNode(node,{html:name})};this.getElement=function(){return node}};var FlipSwitch=function(label,className){var wrapper=lib.setNode({attr:{"class":"jb-flipswitch jb-ignore"}}),node=lib.setNode({attr:{"class":"jb-button jerboa-ignore"}}),switchOn=lib.setNode({attr:{"class":"hide"},html:"on"}),switchOff=lib.setNode({html:"off"}),labelnode=lib.setNode({tag:"label",attr:{"class":"jb-ignore"},html:label}),value=false;wrapper.appendChild(labelnode);wrapper.appendChild(node);node.appendChild(switchOn);node.appendChild(switchOff);this.name=label;this.toggle=function(e){if(e){lib.getEvent(e).preventDefault()}if(value){value=false;lib.removeClass(switchOff,"hide");lib.addClass(switchOn,"hide")}else{value=true;lib.removeClass(switchOn,"hide");lib.addClass(switchOff,"hide")}sandbox.notify("click-flipswitch-"+label,value)};this.getElement=function(){return wrapper};this.getValue=function(){return value};this.setValue=function(_value){if(value!=_value){this.toggle()}};lib.setNode(node,{event:{add:"mousedown",fn:lib.curry(this.toggle,this)}})};var HLine=function(className){var node=lib.setNode({attr:{"class":"hline "+((className)?className:"")}});this.name="jb-hline"+Date();this.getElement=function(){return node};this.getValue=function(){return""};this.setValue=function(){}};var TextField=function(label,text,className){var wrapper=lib.setNode(),node=lib.setNode({tag:"input",attr:{value:(text)?text:"",type:"text","class":(className)?className:""}}),labelnode=lib.setNode({tag:"label",html:label});wrapper.appendChild(labelnode);wrapper.appendChild(node);this.name=label;this.setClass=function(className){lib.setNode(node,{attr:{"class":className}})};this.getValue=function(){return node.value};this.setValue=function(value){node.value=value};this.getElement=function(){return wrapper}};var TextArea=function(label,text,className){var wrapper=lib.setNode(),node=lib.setNode({tag:"textarea",attr:{"class":(className)?className:""},html:(text)?text:""}),labelnode=lib.setNode({tag:"label",html:label});wrapper.appendChild(labelnode);wrapper.appendChild(node);this.name=label;this.setClass=function(className){lib.setNode(node,{attr:{"class":className}})};this.getValue=function(){return node.innerHTML};this.setValue=function(value){node.innerHTML=value};this.getElement=function(){return wrapper}};var SelectBox=function(label,arrayData,styleMain,styleDropdown,className){label=label||"selectbox";className=className&&" "+className||"";var node=lib.setNode({attr:{"class":"jb-selectbox"+className,style:styleMain},html:"<span>"+label+"</span>"}),dropdownNode=lib.setNode({attr:{"class":"hide",style:styleDropdown}}),value="",self=this;if(arrayData){for(var i=0,len=arrayData.length;i<len;i++){dropdownNode.appendChild(lib.setNode({tag:"span",html:arrayData[i]}))}node.appendChild(dropdownNode)}this.name=label;this.getElement=function(){return node};this.toggle=function(){if(lib.hasClass(dropdownNode,"hide")){lib.removeClass(dropdownNode,"hide")}else{lib.addClass(dropdownNode,"hide")}};this.getValue=function(){return _value};this.setValue=function(data){_value=data;sandbox.notify("change-selectbox-"+label,data)};lib.setNode(node,{event:{add:"mousedown",fn:function(e){var event=lib.getEvent(e);event.preventDefault();self.toggle();if(event.target.innerHTML!=label){self.setValue(event.target.innerHTML)}}}})};var Input=function(config){if(!config){throw new Error("Using UI({....})")}var typeUI=config.type.toLowerCase()||"button",randomNum=new Date().getTime(),className=config["class"]||config.align;switch(typeUI){case"button":return new Button(config.label||"button",config.name||"button"+randomNum,className);case"flipswitch":return new FlipSwitch(config.label||"FlipSwitch",className);case"textfield":return new TextField(config.label||"TextField",config.text||config.value,className);case"textarea":return new TextArea(config.label||"TextArea",config.text||config.value,className);case"hline":return new HLine(className);case"selectbox":return new SelectBox(config.label,config.text||config.value,config.styleMain,config.styleDropdown,className);default:throw new Error('check "type" in UI({....})')}};var SandBox=function(){var events={};this.lib=lib;this.Class=function(nameClass){var allowClass={Panel:1,Button:1,FlipSwitch:1,Hline:1,TextField:1,TextArea:1,History:1,Input:1};if(!allowClass[nameClass]){throw new Error("sandbox: not found "+nameClass+" in Class")}return eval(nameClass)};this.getPath=function(){return path};this.getHistory=function(){return history};this.getStage=function(){return stage};this.getUI=function(nameUI){if(!ui[nameUI]){throw new Error("sandbox: not found "+nameUI+" in UI")}return ui[nameUI]};this.addPanel=function(namePanel){var panelObject=new Panel(namePanel);ui.panelbar.appendChild(panelObject.getElement());return panelObject};this.notify=function(eventName,eventData){var data=eventName.split("-"),i,len;data={event:data[0]||"",subevent:data[1]||"",name:data[2]||"",data:eventData};if(events[eventName]){for(i=0,len=events[eventName].length;i<len;i++){events[eventName][i](data)}}if(events[data.event+"-"+data.ui]){for(i=0,len=events[data.event+"-"+data.ui].length;i<len;i++){events[data.event+"-"+data.ui][i](data)}}if(events[data.event]){for(i=0,len=events[data.event].length;i<len;i++){events[data.event][i](data)}}};this.listen=function(arrayEventName,callback,scope){if(typeof arrayEventName==="string"){if(!events[arrayEventName]){events[arrayEventName]=[]}events[arrayEventName].push(lib.curry(callback,scope))}for(var i=0,len=arrayEventName.length;i<len;i++){if(!events[arrayEventName[i]]){events[arrayEventName[i]]=[]}events[arrayEventName[i]].push(lib.curry(callback,scope))}};this.hasModule=function(nameModule){if(modules[nameModule]){return true}return false};this.insertHTML=function(html){var returnNode;if(/^<div role/i.test(html)){returnNode=lib.setNode({html:html}).children[0]}else{typeMedia=lib.detectMedia(html);if(typeMedia=="media"||typeMedia=="iframe"){html='<div class="jb-media-touch"> </div>'+html}returnNode=lib.setNode({html:html,attr:{role:typeMedia,style:"position:absolute;top:0px;left:0px;"}})}stage.getLayer().appendChild(returnNode)}};var Library=new Interface("Library",["onDomReady","addEvent","removeEvent","getEvent","addClass","removeClass","hasClass","addStyle","removeStyle","setNode","curry","request"]),Module=new Interface("Module",["init","destroy"]),BoxInterface=new Interface("Box",["add","remove","getValue","setValue","getElement","name"]),UI=new Interface("UI",["getValue","setValue","name"]);hasImplements(my.lib,Library);var lib=my.lib;delete my.lib;var path=my.path;delete my.path;var usedModule={},ui={},config={},modules={},stage=null,textarea=null,cache={},box=new BoxManager(),history=new History(10,function(data){stage.getLayer().innerHTML=data}),sandbox=new SandBox(),mode="editor";my.version=0.001;my.register=function(moduleName,moduleCreator){var moduleObject=new moduleCreator(sandbox);hasImplements(moduleObject,Module);moduleName=moduleName.toLowerCase();if(modules[moduleName]){throw new Error("Duplicate Module: "+moduleName)}modules[moduleName]=moduleObject;if(ui.core){modules[moduleName].init(config[moduleName])}};for(var i=0,len=my.tempRegister.length;i<len;i++){my.register.apply(null,my.tempRegister[i])}delete my.tempRegister;my.apply=function(domId,_config){var _;if(!(_=document.getElementById(domId))){return false}textarea=_;if(_config){config=_config}init()};my.dismiss=function(){destroy();history.clear();mode="editor";usedModule={};ui={};config={};modules={};stage=null;textarea=null;cache={}};my.getContent=function(){var returnHTML="";returnHTML=stage.getElement().innerHTML;return returnHTML};var startModule=function(moduleName){if(!modules[moduleName]){throw new Error("Not Found "+moduleName+" Module")}modules[moduleName].init()};var stopModule=function(moduleName){if(!modules[moduleName]){throw new Error("Not found "+moduleName+" Module")}modules[moduleName].destroy()};var touch=function(e){var data=cache,event=lib.getEvent(e),sizeBorder=1;if(stage.currentState!="textedit"){event.preventDefault()}if(e.type=="mousedown"){if(stage.currentState!="textedit"||(e.shiftKey)){event.preventDefault();data.x=e.pageX;data.y=e.pageY;data.isMove=false;lib.addEvent(document,"mousemove",touch);lib.addEvent(document,"mouseup",touch)}}else{if(e.type=="mousemove"){data.isMove=true;if(e.shiftKey){data.root_w+=e.pageX-data.x;data.root_h+=e.pageY-data.y}else{if(/move$/i.test(stage.currentState)){data.root_left+=e.pageX-data.x;data.root_top+=e.pageY-data.y}}if(data.root_top+data.root_h+2*sizeBorder>data.screen_h){if(e.shiftKey){data.root_h=data.screen_h-data.root_top-(2*sizeBorder)}else{data.root_top-=e.pageY-data.y}}else{if(data.root_top<0){data.root_top-=e.pageY-data.y}}if(data.root_left+data.root_w+2*sizeBorder>data.screen_w){if(e.shiftKey){data.root_w=data.screen_w-data.root_left-(2*sizeBorder)}else{data.root_left-=e.pageX-data.x}}else{if(data.root_left<0){data.root_left-=e.pageX-data.x}}if(e.shiftKey){lib.addStyle(stage.currentEditingNode,{width:data.root_w+"px",height:data.root_h+"px"});if(/^image/i.test(stage.currentState)){lib.addStyle(stage.currentEditingNode.children[0],{width:data.root_w+"px",height:data.root_h+"px"})}else{if(/^media/i.test(stage.currentState)&&stage.currentEditingNode.children.length>=2){lib.addStyle(stage.currentEditingNode.children[1],{width:data.root_w+"px",height:data.root_h+"px"});lib.setNode(stage.currentEditingNode.children[1],{attr:{width:data.root_w,height:data.root_h}});lib.addStyle(stage.currentEditingNode.getElementsByTagName("embed")[0],{width:data.root_w+"px",height:data.root_h+"px"})}else{if(/^iframe/i.test(stage.currentState)){lib.setNode(stage.currentEditingNode.children[1],{attr:{width:data.root_w,height:data.root_h}});lib.addStyle(stage.currentEditingNode.children[1],{width:data.root_w+"px",height:data.root_h+"px"})}}}}else{if(/move$/i.test(stage.currentState)){lib.addStyle(stage.currentEditingNode,{top:data.root_top+"px",left:data.root_left+"px"})}}data.x=e.pageX;data.y=e.pageY}else{if(e.type=="mouseup"){if(data.isMove){history.save(stage.getLayer().innerHTML)}lib.removeEvent(document,"mousemove",touch);lib.removeEvent(document,"mouseup",touch)}}}};var restoreNormalState=function(){if(!stage.currentState){var childNode=stage.getLayer().children;for(var i=0,len=childNode.length;i<len;i++){if(lib.hasClass(childNode[i],"jb-touch")){lib.removeClass(childNode[i],"jb-touch")}}return false}lib.removeClass(stage.currentEditingNode,"jb-touch");lib.removeEvent(stage.currentEditingNode,"mousedown",touch);switch(stage.currentState){case"textmove":break;case"textedit":var textNode=stage.currentEditingNode.children[0];textNode.setAttribute("contenteditable","false");textNode.blur();window.getSelection().removeAllRanges();history.save(stage.getLayer().innerHTML);break;case"imagemove":break;case"imageedit":break;default:break}stage.currentEditingNode=null;stage.currentState="";sandbox.notify("restorestate")};var click=function(e){var event=lib.getEvent(e),mediaType="",tempStageStage=null,exit=false;if(stage.currentState=="textedit"){if(lib.hasClass(event.target,"jb-ignore")){restoreNormalState()}}if(!lib.hasClass(event.target,"jb-ignore")){var _root=event.target;if(!_root.parentNode){exit=true}else{while(!(_root.parentNode.getAttribute("class")&&lib.hasClass(_root.parentNode,"jb-ignore"))){if(_root.parentNode.nodeName&&_root.parentNode.getAttribute("id")=="jb-a"){restoreNormalState();event.preventDefault();return false}if(!_root.parentNode.nodeName||_root.parentNode.nodeName.toLowerCase()=="html"||_root.parentNode.nodeName.toLowerCase()=="body"){restoreNormalState();exit=true;break}_root=_root.parentNode;if(!_root.parentNode){restoreNormalState();exit=true;break}}}if(!exit){event.preventDefault()}if(!_root.parentNode.getAttribute("index")){return false}if(stage.currentEditingNode==_root){return false}if(!exit){if(stage.currentEditingNode!==null){restoreNormalState()}mediaType=lib.detectMedia(_root);stage.currentEditingNode=_root;lib.addClass(_root,"jb-touch");lib.addEvent(_root,"mousedown",touch);stage.currentState=mediaType+"move";sandbox.notify(mediaType+"move");tempStage=stage.getElement();cache.isMove=false;cache.screen_top=tempStage.offsetTop;cache.screen_left=tempStage.offsetLeft;cache.screen_w=tempStage.offsetWidth;cache.screen_h=tempStage.offsetHeight;cache.root_top=_root.offsetTop;cache.root_left=_root.offsetLeft;cache.root_w=_root.offsetWidth;cache.root_h=_root.offsetHeight;return false}}restoreNormalState()};var dbclick=function(e){var event=lib.getEvent(e),exit=false;if(!lib.hasClass(event.target,"jb-ignore")){var _root=event.target;if(!_root.parentNode){exit=true}else{while(!(_root.parentNode.getAttribute("class")&&lib.hasClass(_root.parentNode,"jb-ignore"))){if(_root.parentNode.nodeName&&_root.parentNode.getAttribute("id")=="jb-a"){restoreNormalState();event.preventDefault();return false}if(!_root.parentNode.nodeName||_root.parentNode.nodeName.toLowerCase()=="html"||_root.parentNode.nodeName.toLowerCase()=="body"){restoreNormalState();exit=true;break}_root=_root.parentNode;if(!_root.parentNode){restoreNormalState();exit=true;break}}}if(!exit){event.preventDefault()}if(!_root.parentNode.getAttribute("index")){return false}if(!exit){switch(lib.detectMedia(_root)){case"text":if(stage.currentEditingNode==_root&&stage.currentState=="textedit"){return false}if(stage.currentEditingNode!==null){restoreNormalState()}stage.currentEditingNode=_root;lib.addClass(_root,"jb-touch");lib.addEvent(_root,"mousedown",touch);if(_root.children.length!=1){_root.innerHTML="<div>"+_root.innerHTML+"</div>"}_root.children[0].setAttribute("contenteditable","true");_root.children[0].focus();stage.currentState="textedit";sandbox.notify("textedit");break;case"image":break;default:break}return false}}};var keyboard=function(e){var event=lib.getEvent(e),_root,tempStage;if(event.target.nodeName.toLowerCase()=="input"){return false}if(e.keyCode==27){restoreNormalState()}else{if(e.metaKey||e.ctrlKey){if(e.keyCode==90){sandbox.notify("keydown-normal-undo");restoreNormalState()}else{if(e.keyCode==89){sandbox.notify("keydown-normal-redo");restoreNormalState()}else{if(e.keyCode==86&&!(/edit$/i.test(stage.currentState))){sandbox.notify("keydown-noediting-paste",e);restoreNormalState()}}}}}if(/move$/i.test(stage.currentState)){if(e.metaKey||e.ctrlKey){if(e.keyCode==67){sandbox.notify("keydown-move-copy");restoreNormalState()}else{if(e.keyCode==88){sandbox.notify("keydown-move-copy");stage.getLayer().removeChild(stage.currentEditingNode);restoreNormalState()}}}else{if((e.keyCode==8||e.keyCode==46)){stage.getLayer().removeChild(stage.currentEditingNode);history.save(stage.getLayer().innerHTML);restoreNormalState()}else{if(e.keyCode==9){if(stage.currentEditingNode.nextSibling){_root=stage.currentEditingNode.nextSibling}else{_root=stage.getLayer().firstChild}restoreNormalState();mediaType=lib.detectMedia(_root);stage.currentEditingNode=_root;lib.addClass(_root,"jb-touch");lib.addEvent(_root,"mousedown",touch);stage.currentState=mediaType+"move";sandbox.notify(mediaType+"move");tempStage=stage.getElement();cache.isMove=false;cache.screen_top=tempStage.offsetTop;cache.screen_left=tempStage.offsetLeft;cache.screen_w=tempStage.offsetWidth;cache.screen_h=tempStage.offsetHeight;cache.root_top=_root.offsetTop;cache.root_left=_root.offsetLeft;cache.root_w=_root.offsetWidth;cache.root_h=_root.offsetHeight;event.preventDefault()}}}}};var onSubmit=function(){textarea.value=my.getContent()};var init=function(){var documentFragment=document.createDocumentFragment(),tempNode,uicoreWidth=config.width||textarea.offsetWidth-2;stage=new Stage(textarea);if(mode=="native"){tempNode=null}else{ui.core=lib.setNode({attr:{id:"jb-a",style:"width:"+uicoreWidth+"px;"},event:{add:"mousedown",fn:function(e){lib.getEvent(e).preventDefault();return false}}});ui.panelbar=lib.setNode({attr:{id:"jb-b"}});ui.bottom=lib.setNode({attr:{"class":"jb-hline"},event:{add:"click",fn:function(){box.show("option")}}});ui.core.appendChild(ui.panelbar);ui.core.appendChild(stage.getElement());ui.core.appendChild(ui.bottom);ui.option=new Box("option");ui.option.add(new Input({type:"TextField",label:"Height <span>input the height which you want</span>",align:"last bigger"}));ui.option.add(new Input({type:"hline"}));ui.option.add(new Input({type:"button",label:"Set Height",name:"option",align:"right bottom"}));box.add(ui.option);ui.mainmenu=sandbox.addPanel("mainmenu");tempNode=ui.mainmenu.getElement();tempNode.appendChild(lib.setNode().appendChild(lib.setNode({tag:"button",html:'<span style="background: url('+path+'/img/inserttextbox.png) no-repeat">Insert TextBox</span>',event:{add:"click",fn:function(){restoreNormalState();stage.getLayer().appendChild(lib.setNode({attr:{role:"text",style:"position:absolute;top:0;left:0;"},html:"<div>Insert Text Here</div>"}));history.save(stage.getLayer().innerHTML)}}})).parentNode);ui.mainmenu.show();for(var plugin in modules){if(plugin.substr(0,1)!="_"){modules[plugin].init(config[plugin])}}sandbox.listen("click-button-option",function(){var _height=ui.option.getValue()[0];if(!isNaN(_height)){stage.setHeight(_height)}box.hide()});lib.addEvent(document,"submit",onSubmit);lib.addClass(textarea,"hide");documentFragment.appendChild(ui.core);textarea.parentNode.insertBefore(documentFragment,textarea);document.body.appendChild(box.getElement())}sandbox.listen("keydown-normal-undo",function(){history.undo()});sandbox.listen("keydown-normal-redo",function(){history.redo()});lib.addEvent(document,"click",click);lib.addEvent(document,"dblclick",dbclick);lib.addEvent(document,"keydown",keyboard)};var destroy=function(){restoreNormalState();console.log(ui.core.parentNode);ui.core.parentNode.removeChild(ui.core);for(i=0,len=document.styleSheets.length;i<len;i++){if(/core\.css/i.test(document.styleSheets[i].href)){document.getElementsByTagName("head")[0].removeChild(document.styleSheets[i].ownerNode);break}}if(mode=="editor"){lib.removeEvent(document,"submit",onSubmit)}document.body.removeChild(box.getElement());if(mode=="editor"){textarea.value=my.getContent()}else{textarea.innerHTML=my.getContent()}lib.removeClass(textarea,"hide");lib.removeEvent(document,"click",click);lib.removeEvent(document,"dblclick",dbclick);lib.removeEvent(document,"keydown",keyboard)};if(my.tempApply){my.apply(my.tempApply[0],my.tempApply[1])}delete my.tempApply;return my}(Jerboa||{}));