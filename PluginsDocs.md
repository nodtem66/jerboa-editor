# Program Strcuture #

Browser `<===>` Base Library `<===` Application Core `<>` Sandbox

Plugins / Modules `<===>`  Sandbox `<>` Application Core

# Plugins Structure #
**Rules**
  1. **Every plugins implements with [Module Interface](ApiDocs#Module.md)**

**Code Structure**
```
Jerboa.register("moduleName",function(sandbox){
 /*In this scope your module have to connect to application core or base 
library through only a sandbox*/

 var lib = sandbox.lib; 
 var init = function(){
  //this code will run when plugin loaded
 }
 var destroy = function(){
  //this code will run when plugin ended
 }
});
```

**More Information about API function see [Sandbox](ApiDocs#Sandbox.md) and [Base Library](ApiDocs#Base_Library.md)**