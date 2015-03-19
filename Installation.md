# General #
For more installation details see
http://code.google.com/p/jerboa-editor/downloads/detail?name=UserGuide.pdf
### Step 1 ###
Open your console
  * **Google Chrome** press _Ctrl+Shift+i_
  * **Opera** press _Ctrl+Shift+i_
  * **Safari** press _Ctrl+Shift+i_
  * **Firefox** press _F12_ (Firebug)

### Step 2 ###
Enter Code
```
var a = document.createElement("script"),b;
                a.setAttribute("src","http://www.mwit.ac.th/~fieldtrip/jb/build/loader.js");
                document.getElementsByTagName("head")[0].appendChild(a);
```
_thanks MWIT school for hosting ;)_

### Step 3 ###
Login and Click **Enable Jerboa**

And Enjoy :)

---


---

# Exteen #
## Using GreaseMonkey ##
### Step 1 ###
Download [jerboa\_for\_exteen.user.js](http://jerboa-editor.googlecode.com/files/jerboa_for_exteen.user.js)

### Step 2 ###
Install **jerboa\_for\_exteen.user.js** in your [GreaseMonkey](http://userscripts.org/about/installing)

### Step 3 ###
Login and Click **Enable Jerboa**

And Enjoy :)

---

## Other ways ##
### Step 1 ###
Open your console
  * **Google Chrome** press _Ctrl+Shift+i_
  * **Opera** press _Ctrl+Shift+i_
  * **Safari** press _Ctrl+Shift+i_
  * **Firefox** press _F12_ (Firebug)

### Step 2 ###
Enter Code
```
var a = document.createElement("script"),b;
		a.setAttribute("src","http://jerboa-editor.googlecode.com/svn/trunk/build/loader.js");
		document.getElementsByTagName("head")[0].appendChild(a);
		a = document.createElement("script");
		a.innerHTML = "toggleJerboa = function(){"+
			"var a=document.getElementById(\"jb-toggle\");if(a.innerHTML == \"Enable Jerboa\"){"+
			"Jerboa.apply(\"elm1\");a.innerHTML=\"Disable Jerboa\";} else {a.innerHTML = \"Enable Jerboa\";Jerboa.dismiss();}"+
			"};"+
			"loadExteen = function(){"+
			"if(window.Jerboa){window.Jerboa.load(\"plugins/exteen\");}"+
			"else{setTimeout(loadExteen,1000);}"+
			"};"+
			"loadExteen();";
		document.getElementsByTagName("head")[0].appendChild(a);
		a = document.createElement("div");
		a.setAttribute("style","float:right;cursor:pointer;");
		a.setAttribute("onclick","toggleJerboa();return false;");
		a.innerHTML = "<a id=\"jb-toggle\" href=\"#\">Enable Jerboa</a>";
		b = document.getElementById("errormsg");
		b.removeChild(b.children[1]);
		b.insertBefore(a,b.children[1]);
```

### Step 3 ###
Login and Click **Enable Jerboa**

And Enjoy :)

---