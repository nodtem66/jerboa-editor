/**
*
*  AJAX IFRAME METHOD (AIM)
*  http://www.webtoolkit.info/
*
**/

AIM = {

	frame : function(c) {

		var n = 'f' + Math.floor(Math.random() * 99999);
		var d = document.createElement('DIV');
		d.innerHTML = '<iframe style="display:none" src="about:blank" id="'+n+'" name="'+n+'" onload="AIM.loaded(\''+n+'\')"></iframe>';
		document.body.appendChild(d);

		var i = document.getElementById(n);
		if (c && typeof(c.onComplete) == 'function') {
			i.onComplete = c.onComplete;
		}

		return n;
	},

	form : function(f, name) {
		f.setAttribute('target', name);
	},

	submit : function(f, c) {
		AIM.form(f, AIM.frame(c));
		if (c && typeof(c.onStart) == 'function') {
			return c.onStart();
		} else {
			return true;
		}
	},

	loaded : function(id) {
		var i = document.getElementById(id);
		if (i.contentDocument) {
			var d = i.contentDocument;
		} else if (i.contentWindow) {
			var d = i.contentWindow.document;
		} else {
			var d = window.frames[id].document;
		}
		if (d.location.href == "about:blank") {
			return;
		}

		if (typeof(i.onComplete) == 'function') {
			i.onComplete(d.body.innerHTML);
		}
	}

}

function uf_start(){
  document.getElementById('fileuploading').style.display = "inline";
  document.getElementById('fileuploadpath').value = gf_currpath;
  document.getElementById('uploadbutton').disabled = true;
  return true;
}

var uf_gflpath = "";

function uf_callback(resp){
  var data = Json.evaluate(resp);

  if (data[0] == 1) {  
    // clear
    var i = 1;
    var o;
    while ((o = document.getElementById('fileuploadfield_' + i)) != null) {
      o.value = '';
      i++;
    }
  } else if (data[0] == 2) {
    alert("Quota Full");
  } else {
    alert("error");
  }
  
  document.getElementById('uploadbutton').disabled = false;
  document.getElementById('fileuploading').style.display = "none";
  getfile(gf_currpath);
}

var uploadslotcnt = 1;
function uf_adduploadslot(divid){

 if (uploadslotcnt < 5) {
     uploadslotcnt++;
     
     var s = '<input type="file" name="ufile[]" class="file" id="fileuploadfield_' + uploadslotcnt + '" />';
     var n = document.createElement("div");
     n.innerHTML = s;
    
     document.getElementById(divid).appendChild(n);
 }
}

var uploadslotcnt = 1;
function uf_adduploadslot_main(divid){

 if (uploadslotcnt < 5) {
     uploadslotcnt++;
     
     var s = '<input type="file" size="40" name="ufile[]" class="inputfile" id="fileuploadfield_' + uploadslotcnt + '" />';
     var n = document.createElement("div");
     n.innerHTML = s;
    
     document.getElementById(divid).appendChild(n);
 }
}

function uf_main_start(){
  document.getElementById('fileuploading').style.display = "inline";
  document.getElementById('fileuploadpath').value = gf_currpath;
  document.getElementById('uploadbutton').disabled = true;
  
  return true;
}

function uf_main_callback(resp){
  var data = Json.evaluate(resp);

  if (data[0] == 1) {  
    // clear
    var i = 1;
    var o;
    while ((o = document.getElementById('fileuploadfield_' + i)) != null) {
      o.value = '';
      i++;
    }
  } else if (data[0] == 2) {
    alert("Quota Full");
  } else {
    alert("error");
  }
  
  document.getElementById('uploadbutton').disabled = false;
  document.getElementById('fileuploading').style.display = "none";
  getfile_main(gf_currpath);
}
