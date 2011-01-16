
function me_moreaction(act){
  if (act == "") {
  } else if (act == 'CN') {
    // new category
  } else if (act == 'CM') {
    //multi category
  } else {
    manageaction(act);
  }
}

function swaprec(){
  o = document.getElementById('recfield');
  i = document.getElementById('recimg');
  
  if (o.value == 1) {
    o.value = 0;
    i.src = "http://g.exteen.com/i/icon_star_newentry_off.gif";
  } else {
    o.value = 1;
    i.src = "http://g.exteen.com/i/icon_star_newentry.gif";
  }
}


function chkcate(obj){
	var t = obj.options[obj.selectedIndex].text;
	if (t == "New Category.."){
		categorywin = window.open('popup_addcategory.php', 'category_add', 'width=300,height=200,resizable=yes');
		categorywin.moveTo(400,100);
		categorywin.focus();
	}
	else if (t == "Multiple Categories..") {
		var url = 'popup_selectcategory.php?';
		url += "catelist=" + ccate;
		
		selectmulwin = window.open(url, 'mulwin', 'width=320,height=280,resizable=no,scrollbars=no');
		selectmulwin.moveTo(100,100);
		selectmulwin.focus();
	} else {
	 ccate = obj.value;
	}
}

function setMulCate (label, value) {
    var s = document.getElementById("entrycategory");
	  var o = s.options;
    // First set of - is always at position 3. check already has?
    for (var i=s.length; i>3; i--) {
        if(o[i - 1].value == value) {
          s.selectedIndex = i - 1;
          ccate = value;
          return;
        }
    }
    var l = s.length;
    o[s.length] = new Option(label, value);
    s.length = l + 1;
    s.selectedIndex = l;
    ccate = value;
}

function addCate (label, value) {
    var s = document.getElementById("entrycategory");
    var l = s.length;
    s.options[s.length] = new Option(label, value);
    s.length = l + 1;
    s.selectedIndex = l;
}

var gf_divid = "browsercontentlist";
var gf_currpath = "";
var gf_data = [''];
var gf_selected = null;

var gf_ftype_swf = new Image();
gf_ftype_swf.src = "http://g.exteen.com/i/image_flash.gif";

var gf_ftype_html = new Image();
gf_ftype_html.src = "http://g.exteen.com/i/image_html.gif";

var gf_loading = false;
var gf_load = new Image();
gf_load.src = "http://g.exteen.com/i/loading_64.gif";

var gf_loadlist = new Image();
gf_loadlist.src = "http://g.exteen.com/i/mock_logoin_animate.gif";

function getfile_editor(path){
//  if (!gf_loading) {
    document.getElementById('imagebox_info').innerHTML = '<br><img src="http://g.exteen.com/i/mock_logoin_animate.gif">';
    opt = "path=" + path;
    gflxhr = new XHR({method:'post', onSuccess : getfile_cb}).send('getfilelist.php', opt);
    gf_loading = true;
//  }
}

function getfile_main(path){
//  if (!gf_loading) {
    opt = "tree=true&path=" + path;
    gflxhr = new XHR({method:'post', onSuccess : getfile_main_cb}).send('getfilelist.php', opt);
    gf_loading = true;
//  }
}

getfile = getfile_editor;

function getfile_cb(resp){
  var dataa = Json.evaluate(resp);
  var data = dataa.filelist;
  
  var o = document.getElementById(gf_divid);
  
  
  gf_currpath = data[0];

  var path;
  var ipath;
  
  if (gf_currpath != ""){
    path = gf_currpath.replace(/\|/g,"/");
    ipath = path + '/';
  } else {
    path = "[images]";
    ipath = "";
  }

  code = "\
                        <li>\
                            <span class='name folder parent'>" + path + "</span>\
                        </li>\
                        <li>\
                            <span class='name newfolder'><a href='#' onclick=\"createfolder(); return false;\">[New Folder]</a></span>\
                        </li>\
  ";
  
  if (gf_currpath != "") {
    updir = gf_currpath.substr(0,gf_currpath.lastIndexOf("|"));
    code += "\
                          <li>\
                              <span class='name folderup'><a href='#' onclick=\"getfile('" + updir + "'); return false;\">[up]</a></span>\
                          </li>\
    ";
  }

  limit = data.length;

  // change info box
  document.getElementById('imagebox_info').innerHTML = "<ul><li>"+path + "</li><li>" + data[1] + " Files and Folders</li></ul>";
  document.getElementById('imagebox_image').src = "http://g.exteen.com/i/image_blank.gif"

  for(i=2;i<limit;i++) {
    even = (i%2 == 0)?'even':'';
    ext  = (data[i][0].substr(data[i][0].lastIndexOf(".") + 1)).toLowerCase();
  
    if (data[i][1] == 0) {
      if ((ext == 'jpg') || (ext == 'png') || (ext == 'gif') || (ext == 'swf')) {
          code += '<li class="' + even + '" id="fl_li_' + i + '">\
            <span class="name ' + ext + '"><a href="#" onclick=\"showfiledetail(\'' + i + '\');return false;\">' + data[i][0] + '</a></span>\
            <span class="tool">\
            <a href="#del" onclick="delfile(\'' + ipath + data[i][0] + '\'); return false;" class="delete">delete</a>\
            <a href="#send" class="send" onclick="gf_insertimg(\'' + gf_blogbase + 'images/' + ipath + data[i][0] + '\'); return false;">send</a>\
            </span>\
            </li>';
      } else {
          code += '<li class="' + even + '" id="fl_li_' + i + '">\
            <span class="name ' + ext + '"><a href="#" onclick=\"showfiledetail(\'' + i + '\');return false;\">' + data[i][0] + '</a></span>\
            <span class="tool">\
            <a href="#del" onclick="delfile(\'' + ipath + data[i][0] + '\'); return false;" class="delete">delete</a>\
            </span>\
            </li>';
      }
    } else {
      dir = ((gf_currpath != "")?(gf_currpath + "|"):'') + data[i][0];
      code += '<li class="' + even + '">\
        <span class="name folder"><a href="#" onclick=\"getfile(\'' + dir + '\');return false;\">' + data[i][0] + '</a></span>\
        <span class="tool">\
        <a href="#del" onclick="delfile(\'' + ipath + data[i][0] + '\'); return false;" class="delete">delete</a>\
        </span>\
        </li>';
    }
  }

  gf_data = data;
  o.innerHTML = code;
  gf_loading = false;
}

function ctree(node, prefix, current){
  var limit = node.length;
  var r = "";
  for(var i=0;i<limit;i++) {
    pref = ((prefix != "")?(prefix + "|"):'') + node[i][0];
    r += "<li class='" + ((current == pref)?'selected':'') + "'><a href='#' onclick=\"getfile('" + pref + "');return false;\">" + node[i][0] + "</a>";
      
    if (node[i][1].length > 0) {
      r += "<ul>" + ctree(node[i][1], pref, current) + "</ul>\n";
    }
    
    r += "</li>\n";
  }
  return r;
}

function getfile_main_cb(resp) {
  var dataa = Json.evaluate(resp);
  var data = dataa.filelist;
  
  var o = document.getElementById(gf_divid);

  var treehtml = "<h3><a href='#' onclick=\"getfile('');return false;\">[Images]</a></h3>" + ctree(dataa.tree, "", data[0]);

  document.getElementById('treelist').innerHTML = treehtml;

  gf_currpath = data[0];

  var path;
  var ipath;
  
  if (gf_currpath != ""){
    path = gf_currpath.replace(/\|/g,"/");
    ipath = path + '/';
  } else {
    path = "[images]";
    ipath = "";
  }

  limit = data.length;

  while(o.hasChildNodes()) o.removeChild(o.lastChild);

  for(i=2;i<limit;i++) {
    even = (i%2 == 0)?'even':'';
    ext  = data[i][0].substr(data[i][0].lastIndexOf(".") + 1);
  
    newnode = document.createElement("tr");
    newnode.className = even;

    if (data[i][1] == 0) {
      if ((ext == 'jpg') || (ext == 'png') || (ext == 'gif')) {
         di = data[i][3] + 'x' + data[i][4];
         w = data[i][3] + 20;
         h = data[i][4] + 20;
      } else {
         di = "-";
         w = 800;
         h = 600;
      }
       code =  '  <tr class="' + even + '">\
                      	<td class="checkbox"><input type="checkbox" class="filechkbox" id="filechkbox_' + data[i][0] + '" /></td>\
                          <td class="filename"><a href="' + gf_blogbase + 'images/' + ipath + data[i][0] +  '" class="name ' + ext + '">' + data[i][0] + '</a></td>\
                          <td class="filesize">' + Math.ceil((data[i][2]/1024)) + 'KB</td>\
                          <td class="filedimension">' + di + '</td>\
                          <td class="filetools"><a href="#" class="delete" onclick="delfile(\'' + ipath + data[i][0] + '\')">Delete</a></td>\
                      </tr>';

        cell = document.createElement("td");
        cell.className = "checkbox";
        cell.innerHTML = '<input type="checkbox" class="filechkbox" id="filechkbox_' + data[i][0] + '" />';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filename";
        cell.innerHTML = '<a onclick="window.open(\'' + gf_blogbase + 'images/' + ipath + data[i][0] +  '\',\'picture\',\'scrollbars=0,resizable=1,menubar=0,location=0,toolbar=0,status=0,width=' + w + ',height=' + h + '\'); return false;" href="' + gf_blogbase + 'images/' + ipath + data[i][0] +  '" class="name ' + ext + '">' + data[i][0] + '</a>';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filesize";
        cell.innerHTML = '' + Math.ceil((data[i][2]/1024)) + 'KB';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filedimension";
        cell.innerHTML = di;
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filetools";
        cell.innerHTML = '<a href="#" class="delete" onclick="delfile(\'' + ipath + data[i][0] + '\')">Delete</a>';
        newnode.appendChild(cell);
      
    } else {
      dir = ((gf_currpath != "")?(gf_currpath + "|"):'') + data[i][0];

       code =  '  <tr class="' + even + '">\
                      	<td class="checkbox"><input type="checkbox" class="filechkbox" id="filechkbox_' + data[i][0] + '" /></td>\
                          <td class="filename"><a href="#" class="name folder" onclick=\"getfile_main(\'' + dir + '\');return false;\">' + data[i][0] + '</a></td>\
                          <td class="filesize">' + data[i][2] + ' Files</td>\
                          <td class="filedimension"> - </td>\
                          <td class="filetools"><a href="#" class="delete" onclick="delfile(\'' + ipath + data[i][0] + '\')">Delete</a></td>\
                      </tr>';


        cell = document.createElement("td");
        cell.className = "checkbox";
        cell.innerHTML = '<input type="checkbox" class="filechkbox" id="filechkbox_' + data[i][0] + '" />';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filename";
        cell.innerHTML = '<a href="#" class="name folder" onclick=\"getfile_main(\'' + dir + '\');return false;\">' + data[i][0] + '</a>';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filesize";
        cell.innerHTML = '' + data[i][2] + ' Files';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filedimension";
        cell.innerHTML = ' - ';
        newnode.appendChild(cell);
        
        cell = document.createElement("td");
        cell.className = "filetools";
        cell.innerHTML = '<a href="#" class="delete" onclick="delfile(\'' + ipath + data[i][0] + '\')">Delete</a>';
        newnode.appendChild(cell);

    }
    //alert(newnode);
    o.appendChild(newnode);
  }

  // update stat
  var stat = dataa.quota;
  document.getElementById("stat_percent").innerHTML = Math.round(stat[0]/stat[1]*1000)/10 + "%";
  document.getElementById("stat_used").innerHTML = Math.round(stat[0]/10000)/100 + " MB";
  document.getElementById("stat_limit").innerHTML = Math.round(stat[1]/1000000) + " MB";
  document.getElementById("stat_byte").innerHTML = Math.round(stat[2]/100000)/10 + " MB";

  gf_data = data;
  //o.innerHTML = code;
  
  gf_loading = false;
}

function showfiledetail(i){
  var idat = gf_data[i];
  var cpath = "";

  var info = document.getElementById('imagebox_info');
  var img = document.getElementById('imagebox_image');
  
  var ext = idat[0].substr(idat[0].lastIndexOf(".") + 1).toLowerCase();

  var path;
  if (gf_currpath != ""){
    path = gf_currpath.replace(/\|/g,"/") + "/";
  } else {
    path = "";
  }
  
  if (gf_selected != null) {
    if (a = document.getElementById("fl_li_"+gf_selected))
      a.className = (i%2 == 0)?'even':'';
  }
  if (a = document.getElementById("fl_li_"+i)){
    a.className = 'selected';
    gf_selected = i;
  }

  
  if ((ext == 'jpg') || (ext == 'png') || (ext == 'gif')) {
    img.src = gf_load.src;
    
    txt = gf_blogbase + 'images/' + path + idat[0];
    var setsize = "";
    if (idat[3] > idat[4]) {
      setsize = "document.getElementById('imagebox_image').style.height = '';";
      if (idat[3] > 64)
        setsize += "document.getElementById('imagebox_image').style.width = '64px';";
      else
        setsize += "document.getElementById('imagebox_image').style.width = '';";
    } else {
      setsize = "document.getElementById('imagebox_image').style.width = '';";
      if (idat[4] > 64)
        setsize += "document.getElementById('imagebox_image').style.height = '64px';";
      else
        setsize += "document.getElementById('imagebox_image').style.height = '';";
    }
    
    setTimeout(setsize, 50);
    setTimeout("document.getElementById('imagebox_image').src = \"" + txt.replace(/\"/g, '\\\"') + "\";", 100);    
    
    icode = '<ul>\
          <li class="bold">' + idat[0] + '</li>\
          <li>'+ idat[3] +'x'+ idat[4] +' px, ' + Math.ceil((idat[2]/1024)) + 'KB</li>\
          <li><a href="#" class="send" onclick="gf_insertimg(\'' + txt.replace(/'/g, '\\\'').replace(/"/g,'&quot;') + '\'); return false;">Send to editor</a></li>\
      </ul>';

    info.innerHTML = icode;
  } else if (ext == 'swf'){
    img.src = gf_ftype_swf.src;
    img.style.width = '';
    img.style.height = '';
    
    txt = gf_blogbase + 'images/' + path + idat[0];
    
    icode = '<ul>\
          <li class="bold">' + idat[0] + '</li>\
          <li> ' + Math.ceil((idat[2]/1024)) + 'KBs</li>\
          <li><a href="#" class="send" onclick="gf_insertimg(\'' + txt.replace(/'/g, '\\\'').replace(/"/g,'&quot;') + '\'); return false;">Send to editor</a></li>\
      </ul>';
          
    info.innerHTML = icode;
  } else if (ext == 'html'){
    img.src = gf_ftype_html.src;
    img.style.width = '';
    img.style.height = '';

    icode = '<ul>\
          <li class="bold">' + idat[0] + '</li>\
          <li> ' + Math.ceil((idat[2]/1024)) + 'KBs</li>\
      </ul>';
          
    info.innerHTML = icode;
  }
  
}

function gf_insertimg(url) {
  ext  = url.substr(url.lastIndexOf(".") + 1).toLowerCase();
  
  if ((ext == 'jpg') || (ext == 'png') || (ext == 'gif')) {
    tinyMCE.execCommand('mceFocus',false,'elm1');
    tinyMCE.execCommand('mceInsertContent',false,'<img src="' + url + '"/>')
  } else if (ext == 'swf') {
    code = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="100" height="100">\
        <param name="movie" value="' + url + '" />\
        <param name="quality" value="high" />\
        <embed src="' + url + '" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="100"></embed>\
      </object>';

    code = '<div class="flash"><embed src="' + url + '" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="100"></embed></div>';

code = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="100" height="100">\
	<param name="movie" value="http://ipats.exteen.com/images/[images]/flash/header.swf" />\
	<param name="quality" value="high" />\
	<param name="menu" value="false" />\
	<param name="wmode" value="" />\
	<embed src="http://ipats.exteen.com/images/[images]/flash/header.swf" wmode="" quality="high" menu="false" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100" height="100"></embed>\
</object>';

  code = "<img alt='" + url + "' title='"+url+"' width='100' height='100' src='http://g.exteen.com/i/spacer.gif' class='mceItemFlash'>";

    tinyMCE.execCommand('mceFocus',false,'elm1');
    tinyMCE.execCommand('mceInsertContent',false, code)

  }
}

function delfile(path){
  c = confirm("Do you want to delete '"+path+"' ?");
  if (c) {
    opt = "mode=d&path=" + path;
    gflxhr = new XHR({method:'post', onSuccess : delfile_cb}).send('mfile.php', opt);
  }
}

function delfile_cb(resp){
  var data = Json.evaluate(resp);
  if (data[0] == 1) {
    // file deleted
    getfile(gf_currpath);
  } else if (data[0] == 3) {
    alert("Cannot delete, make sure the folder is empty.");
  } else {
    //error
    alert("error");
  }
}

function delfilemulti() {
  filelist = "";
  $$(".filechkbox").each(
      function (el) {
        if (el.checked) {
          fn = el.id.substr(11);
          filelist += gf_currpath.replace(/\|/g,"/") + '/' + fn + "|";
        }
      }
  );
  
  if (filelist != "") {
    var c = confirm("Do you want to delete the selected files ?");
    if (c) {
      opt = "mode=d&path=" + filelist;
      gflxhr = new XHR({method:'post', onSuccess : delfile_cb}).send('mfile.php', opt);
    }
  }
}

function createfolder(){
  fname = prompt("Folder Name?", "");
  if ((fname != null) && fname.match(/^[a-z0-9]+$/i)) {
    opt = "mode=c&path=" + gf_currpath + "&name=" + fname;
    gflxhr = new XHR({method:'post', onSuccess : createfolder_cb}).send('mfile.php', opt);
  } else if (fname != null) {
    alert("invalid folder name");
  }
}

function createfolder_cb(resp){
  var data = Json.evaluate(resp);
  
  if (data[0] == 2) {
    // created    
    getfile(gf_currpath);
  } else if (data[0] == 5) {
    alert("invalid folder name");
  } else {
    //error
    alert("error");
  }
}

// -------------

function deletecategory(cid, cname) {
  a = confirm("Are you sure to delete category '"+cname+"' ? ");
  if (a) {
      opt = "a=d&c=" + cid;
      gflxhr = new XHR({method:'post', onSuccess : deletecategory_cb}).send('savecategory.php', opt);
  }
}

function deletecategory_cb(resp){
  var data = Json.evaluate(resp);
  if (data[0] == 1) {
    cid = data[1];
    if (document.getElementById("categoryrow_" + cid)) {
      document.getElementById("categoryrow_" + cid).parentNode.removeChild(document.getElementById("categoryrow_" + cid));
      document.getElementById("category_count").innerHTML = parseInt(document.getElementById("category_count").innerHTML) - 1;
    }
  } else {
    alert("Error!!!");
  }
}

ac_adding = false;
ac_n = "";
ac_d = "";

function addcategory(){
  var n = document.getElementById("catename").value;
  var d = document.getElementById("catedesc").value;
  if (parseInt(document.getElementById("category_count").innerHTML) < 20) {
    if (!ac_adding && (n != "")) {
      ac_adding = true;
      opt = "a=n&n=" + n.replace(/&/g,'%26') + "&d=" + d.replace(/&/g,'%26');
      ac_n = n;
      ac_d = d;
      gflxhr = new XHR({method:'post', onSuccess : addcategory_cb}).send('savecategory.php', opt);
    }
  } else {
    alert("limit exceeded");
  }
}

function addcategory_cb(resp){
  var data = Json.evaluate(resp);
  if (data[0] == 1) {
    var o = document.getElementById("categorytable_tbody");
    o.innerHTML += "<tr id=\"categoryrow_" + data[1] + "\">\
                            <td class=\"name\">" + ac_n + "</td>\
                            <td>" + ac_d + "</td>\
                            <td><a href=\"manageentry.php?q=C" + data[1] + "\">0</a></td>\
                            <td class=\"tools\">\
                                <a href=\"editcategory.php?c=" + data[1] + "\" class=\"edit\">Edit</a>\
                                <a href=\"#\" onclick=\"deletecategory(" + data[1] + ",'" + ac_n + "')\" class=\"delete\">Delete</a>\
                            </td>\
                        </tr>";
                        
    document.getElementById("category_count").innerHTML = parseInt(document.getElementById("category_count").innerHTML) + 1;
  } else {
    alert("Cannot add category. Please correct your input.");
  }
  
  ac_adding = false;
}

function manageentryfilter(q){
  window.location = "http://www.exteen.com/manage/manageentry.php?q=" + q;
}

function showhelp(){
  $$(".help").setStyle('display','block');
    
  $$('.hidetooltip').setStyle('display','block');
  $$('.showtooltip').setStyle('display','none');
}


function hidehelp(){
  $$(".help").setStyle('display','none');
    
  $$('.hidetooltip').setStyle('display','none');
  $$('.showtooltip').setStyle('display','block');
}



function manageaction(act){
  var eid = "";
  if (act =='DL') {
    c = confirm("Do you want to delete the selected entries?");
    if (!c) return false;
  }
  
  var l = $$('.entrychkbox').each(function (el) {
      if (el.checked) {
        id = el.id.substr(7);
        eid += id + "|";
      }
    }
  );
  
  opt = "s=" + act + "|" + eid;
  gflxhr = new XHR({method:'post', onSuccess : manageaction_cb}).send('setentry.php', opt);
}

function manageaction_one(act, eid){
  if (act =='DL') {
    c = confirm("Do you want to delete this entry?");
    if (!c) return false;
  }

  opt = "s=" + act + "|" + eid;
  gflxhr = new XHR({method:'post', onSuccess : manageaction_cb}).send('setentry.php', opt);
}

function manageaction_cb(resp) {
  msg = "";
  if (resp != "") {
    var data = Json.evaluate(resp);
    if (data[0] == 1) {
      var cnt = data.length;
      for(var i = 2;i < cnt;i++) {
        var o = document.getElementById('trow_' + data[i][0]);
        if (o) {
          switch (data[1]) {// AC & NC --
            case 'S0' :
                o.cells[6].innerHTML = '<a class="togglestatus drafted" href="#" onclick="manageaction_one(\'S1\',' + data[i][0] + '); return false;">Drafted</a>';

                if (o.cells[2].innerHTML.lastIndexOf('<span class="recommend"></span>') == -1) {
                  o.cells[2].innerHTML = decodeURIComponent(data[i][1]);
                }
                
                break; 
            case 'S1' :
                o.cells[6].innerHTML = '<a class="togglestatus published" href="#" onclick="manageaction_one(\'S0\',' + data[i][0] + '); return false;">Published</a>';

                if (o.cells[2].innerHTML.lastIndexOf('<span class="recommend"></span>') == -1) {
                  o.cells[2].innerHTML = '<a href="'+decodeURIComponent(data[i][2])+'">'+decodeURIComponent(data[i][1])+'</a>';
                } 
                break; 
            case 'DL' :
                  // delete
                break;
            case 'R0' :
                var a;
                // use regex for ie auto code modification
                a = o.cells[2].innerHTML.replace(/<span[^>]+recommend[^>]*><\/span>/i,'');
                o.cells[2].innerHTML = a;
                
                if (o.cells[6].innerHTML.lastIndexOf('Published') == -1) {
                  o.cells[2].innerHTML = decodeURIComponent(data[i][1]);
                }

                break; 
            case 'R1' :
                var ihtml = o.cells[2].innerHTML;
                var a;
                
                if ((a = ihtml.lastIndexOf('<span class="recommend"></span>')) == -1) {
                  o.cells[2].innerHTML = '<a href="'+decodeURIComponent(data[i][2])+'">'+decodeURIComponent(data[i][1])+'</a><span class="recommend"></span>'; 
                }
                
                break;
            default:
                var s = "";
                if (data[1].substr(0,1) == "C") {
                  if (data[1].substr(1,1) == "R") {
                      o.cells[3].innerHTML = "";
                  } else {
                      if (o.cells[3].innerHTML != "") s = ", ";
                      
                      s += "<a href='" + gf_blogbase + "category/" + data[1].substr(1) + "'>" + data[1].substr(1) + "</a>";
                      
                      o.cells[3].innerHTML += s;
                  }
                }
          }
        }
      } // end for
      //messagenotifier
      
      // show message
      switch(data[1]){
        case 'S0':
              document.getElementById("messagenotifier").innerHTML = (cnt - 2) + ' Entries Drafted';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              break;
        case 'S1':
              document.getElementById("messagenotifier").innerHTML = (cnt - 2) + ' Entries Published';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              break;
        case 'DL':
              document.getElementById("messagenotifier").innerHMTL = (cnt - 2) + ' Entries Deleted';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              window.location.reload();
              break;
        case 'R0':
              document.getElementById("messagenotifier").innerHTML = (cnt - 2) + ' Recommend Removed';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              break;
        case 'R1':
              document.getElementById("messagenotifier").innerHTML = (cnt - 2) + ' Entries Recommended';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              break;
        case 'AC':
              document.getElementById("messagenotifier").innerHTML = (cnt - 2) + ' Allow Comment';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              break;
        case 'NC':
              document.getElementById("messagenotifier").innerHTML = (cnt - 2) + ' Not Allow Comment';
              document.getElementById("messagenotifier").style.visibility = 'visible';
              break;
      }
      
      
    }
  }
}

function togglebrowser(){
  var oc = document.getElementById('browsercontent');
  var ob = document.getElementById('browserresizebtn');
  
  var ch = oc.offsetHeight;
  if (ch < 300) {
    oc.style.height = "480px";
    ob.style.backgroundPosition = "left bottom";
  } else {
    oc.style.height = "280px";
    ob.style.backgroundPosition = "left top";
  }   
}


function setepp(obj){
  url = "manageentry.php?q=" + manageentry_q + "&eppv=" + obj.value + "&page=" + manageentry_page + "&s=" + manageentry_s;
  window.location.href = url;
}
