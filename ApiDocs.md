# Table of Content #

# Base Library #
## env ##
> An Object to tell what kind of a browse is

> _Properties_
  * env.ie  `true` if browser is IE
  * env.ie6 `true` if browser is IE6
  * env.ie7 `true` if browser is IE7
  * env.ie8 `true` if browser is IE8
  * env.firefox `true` if browser is firefox
  * env.opera `true` if browser is opera
  * env.webkit `true` if browser uses webkit engine
  * env.camino `true` if browser uses Camino engine

> _Exmaple_
```
if(lib.env.ie){
 //Do something
}
```
## onDomReady(callback) ##
> When Webpage has loaded already, run function callback

> _Example_
```
lib.onDomReady(function(){
 //javascript code here
});
```
## addEvent(element,eventType,callback) ##
> Add function callback that will run when event(eventType) occurs

> _Parameters_
  * `element` = node or element in Dom Tree
  * `eventType` such as click, dblclick, keypress, keydown, et al
  * `callback` function that will run when event occurs

> _example_

```
var node = document.getElementsByTagName("div")[0];
lib.addEvent(node, "click", function(){
 //Do something
});
```
## removeEvent(element,eventType,callback) ##
> Remove function callback that will run when event(eventType) occurs

> _Parameters_
  * `element` = node or element in Dom Tree
  * `eventType` such as click, dblclick, keypress, keydown, et al
  * `callback` function that will delete

> _example_

```
var node = document.getElementsByTagName("div")[0];
function clickIt(){
 //Do something
}
lib.removeEvent(node, "click", clickIt);
```
## getEvent(eventVariable) ##
> Get the Deeper Information of event

> _Parameters_
  * `eventVariable` = variable that pass in last argument when every events occurs
> _example_
```
lib.addEvent(node, "click", function(e) {
 var event = lib.getEvent(e), target = event.target;
 event.preventDefault();
});
```
## addClass(element,strClassName) ##
> add class having name `strClassName` to `element`

> _example_
```
 lib.addClass(element, "hide");
```
## removeClass(element,strClassName) ##
> remove class having name `strClassName` in `element`

> _example_
```
 lib.removeClass(element, "hide");
```
## hasClass(element,strClassName) ##
> check that the element have `strClassName` class

> _return_
  * boolean `true` when element have `strClassName` class

> _example_
```
 if(lib.hasClass(element, "hide")){
 //Do something
}
```
## addStyle(element,objStyle) ##
> Add CSS style in element

> _Parameters_
  * `objStyle` such as `{width: "50px",height: "60px", float: "left"}`

> _example_
```
lib.addStyle(element,{width: "199px",height: "auto"});
```
## removeStyle(element,objStyle) ##
> Remove CSS style in element

> _Parameters_
  * `objStyle` such as `{width: "50px",height: "60px", float: "left"}`

> _example_
```
lib.removeStyle(element,{width: "199px",height: "auto"});
```
## setNode(element,objSetting) ##
> Build or Edit element with `objSetting`

> _Parameters_
  * `element` node or element in DOM Tree
  * `objSetting` is object
    * `objSetting.html` set HTML text in element
    * `objSetting.tag` create `tag` element
    * `objSetting.attr` set attribute in element
    * `objSetting.event` add/remove event on element

> _example_
```
//create new div tag
node1 = lib.setNode({tag:"div"}); //or
node1 = lib.setNode();

//create new div tag with test id
node2 = lib.setNode({tag:"div",attr:{id:"test"}}); //or
node2 = lib.setNode(attr:{id:"test"});

//create new p tag with style "display:none;float:left;" and jerboa-a class
node3 = lib.setNode({tag:"p",attr:{"class":jerboa-a",style:"display:none;float:left;"}});

//create new span tag with text "Insert Your name"
node4 = lib.setNode({tag:"span",html:"Insert Your name"});

//create new input tag with alert the text "A" when click inputbox
node5 = lib.setNode({tag: "input",event: {add:"click",fn: function(){\
 alert("a");
}
}});

//edit node1 element with class jerboa-hide
lib.setNode(node1,attr:{"class","jerboa-hide"});
```
## request(objSetting) ##
> send AJAX with `objSetting`

> _Parameters_
  * `objSetting` setting object
    * `objSetting.url` url to send data
    * `objSetting.method` method to send (GET or POST) default is GET

> _example_
```
lib.request({url:"test.php?key1=1&key2=2", method:"post", key3:"3", key4:"4"});
```
## detectMedia(element) ##
> detect type of the element

> _Parameters_
  * `element` a node or a element in DOM tree

> _return_
  * String such as text, media, image, et al

> _example_
```
var typeNode = lib.detectMedia(node1);
```
## curry(callback,scope,time\_to\_throttle,...) ##
> Build the function When
    1. Want to change scope of variables
    1. Want to setting Static arguments
    1. Want ti limit speed to repeat the function for preventing the Old Browser (such as IE) crashes.

> _Parameters_
  * `callback` function that will be edited
  * `scope` value of `this` variable in new function
  * `time_to_throttle` delay time (number in millisecond) to run function

> _return_
  * function that has edited

> _example_
```
//1.1 Change scope to "Jerboa" Object
lib.curry(function,Jerboa,false) 

//1.2 Change scope to "window" Object
lib.curry(function,window,false)

//1.3 use default scope
lib.curry(function,null,false)

//2. function foo(a,b,c) { alert(a+b-c); }
bar = lib.curry(foo,null,false,5)
//bar(6,1)=> 10 (from 5+6-1) 

bar = lib.curry(foo,null,false,5,8)
//bar(9)=> 4 (from 5+8-9)

//3.1 Limit in 100 msec can run function in 1 time.
lib.curry(function,null,100)

//3.2 Limit in 1000 msec can run function in 1 time.
lib.curry(function,null,1000)

//3.3 No limit
lib.curry(function,null,0) //or
lib.curry(function,null,false)
```

---

# Application Core #
## Interfaces ##
### Library ###
> Base Library Interface

> _methods_
  * onDomReady
  * addEvent
  * removeEvent
  * getEvent
  * addClass
  * removeClass
  * hasClass
  * addStyle
  * removeStyle
  * setNode
  * curry
  * request
  * detectMedia
### Module ###
> Module Interface

> _methods_
  * init
  * destroy

### Box Interface ###
> _methods_
  * add
  * remove
  * getValue
  * setValue
  * getElement

> _properties_
  * name
### UI ###
> _methods_
  * getValue
  * setValue

> _properties_
  * name
## Classes ##
### Panel ###
> Class to build the top menu (grey area) that contains the buttons

### Stage ###
> Class to build the editable area in white background

### History ###
> Class to build a history controller that has ability to undo or redo

### Box Manager ###
> Class to build a popup box

### Box ###
> Class to build a section in a popup box

### Button ###
> Class to build a button

### Flip Switch ###
> Class to build a flip-switch input

### H line ###
> Class to build a Horizontal line

### Text Field ###
> class to build a textfield (text input)

### Text Area ###
> class to build a large textfield

### Select Box ###
> class to build a switch input

### Input ###
> class to build a UI input

> this is a decoration pattern to wrap all classes of UI

> _example_
```
var input1 = new input({type: "textfield", label:"Height", class:"hide"});
var button1= new input({type: "button", label:"Click Me", name:"button1"});
```

### Sand Box ###
> Class to build a sandbox

## Functions ##
### register(moduleName,moduleConstruct) ###
> public function used to register modules

> _example_
```
Jerboa.register("Google Form",function(sandbox){
 var privateVariable = "";
 var init = function(config){
  //do something
 };
 var destroy = function(){

 };
});
```
### apply(id,objConfig) ###
> public function used to enable program

> _example_
```
Jerboa.apply("elm1",{width:150,height:200});
```
### dismiss() ###
> public function used to disable program

> _example_
```
Jerboa.dismiss();
```

### getContent() ###
> public function used to return HTML text from editable area in program

> _example_
```
alert(Jerboa.getContent())
```
### touch ###
> Private function controlling the drag event
### restoreNormalStage ###
> Private function used to restore to the regular event
### click ###
> Private function controlling the click event
### dbclick ###
> Private function controlling the double-click event
### keyboard ###
> Private function controlling the keypress event
### onSubmit ###
> Private function controlling the submit event
### init ###
> Private function that will run when program start
### destroy ###
> Private function that will run when program close

---

# Sandbox #
## Methods ##
### getPath() ###
> _return_
> a String that show path where program is
### getHistory() ###
> _return_
> a History object built by [History Class](ApiDocs#History.md)
### getStage() ###
> _return_
> a Stage object built by [Stage Class](ApiDocs#Stage.md)
### getUI(strUIName) ###
> _return_
> a UI object in application core
### addPanel(strPanelName) ###
> _return_
> a panel object built by [Panel Class](ApiDocs#Panel.md)
### notify(strEventName,strEventData) ###
> run functions that was in a particular `strEventName` event

> _Parameters_
  * `strEventName` Name of event
  * `strEventData` data to send to function in `strEventName` event

> _example_
```
sandbox.notify("click","data to send");
sandbox.notify("ui-button1-click","test");
```
### listen(arrayEventName,callback,scope) ###
> add function in particular events in `arrayEventName` list

> _Parameters_
  * `arrayEventName` or `strEventName` Name of event in array or string format
  * `callback` function to save in event list
  * `scope` value of `this` when run `callback`

> _Example_
```
sandbox.listen("keydown-normal-redo",function(){
 //Do something
});
```
### hasModule(strModuleName) ###
> check that a `strModuleName` module has been loaded into program already

> _Return_
  * boolean `true` when `strModuleName` has been loaded already

> _Example_
```
if(sandbox.hasModule("fanzyInsert")){
 //Do something
}
```
### insertHTML(strHTML) ###
> Insert `strHTML` text into the editable area

> _Parameters_
  * `strHTML` text or url that will insert into editable area

> _Example_
```
sandbox.insertHTML("http://test.com/1.png");
sandbox.insertHTML("test");
```
## Properties ##
### lib ###
> a Base Libray Object [Base Library](ApiDocs#Base_Library.md)

> _Example_
```
sandbox.lib.curry(callback,sandbox,0);
```

---
