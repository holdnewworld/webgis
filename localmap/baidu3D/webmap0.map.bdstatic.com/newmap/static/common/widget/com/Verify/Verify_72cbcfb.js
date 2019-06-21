define("common:widget/com/Verify/Verify.js",function(require,exports,module){function getQueryParam(e){var n=e.indexOf("&"),t=e.substr(n),a=baidu.url.queryToJson(t);return a.qt=e.substr(0,n),a}function Verify(e){MapComponent.call(this,e)}var componentManager=require("common:widget/com/componentManager.js"),MapComponent=require("common:widget/com/MapComponent.js"),util=require("common:widget/ui/util/util.js"),vCode=function(){function e(n){t.push(n),n.onclick=e.refresh}var n="/v",t=[];return e.refresh=function(){T.Ajax.get(n+"&t="+(new Date).getTime(),{onsuccess:function(a){if(a.responseText){var i=null;try{i=baidu.json.parse(a.responseText)}catch(r){}e.code=i.captcha_vcode_str;for(var o=0;o<t.length;o++)t[o].src=n+"/genimg/"+e.code+"&t="+(new Date).getTime()}},onfailure:function(){}})},e}(),style=".miguan_container{margin:0 auto;margin-top:40px;width:200px}.verline{margin-top:10px}#miguanV{border:1px solid #ddd}.miguan_aler{display:none;color:red;font-weight:700}#miguanB{}";require.loadCss({content:style,name:"Verify"}),T.lang.inherits(Verify,MapComponent,"Verify"),T.object.extend(Verify.prototype,{render:function(){try{var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="miguan_container">您的操作过于频繁，请输入验证码。<div class="miguan_aler">验证码错误，请重新输入</div><div class="verline"><input type="text" id="miguanI"/><input type="button" value="验证" id="miguanB"/></div><div class="verline"><img id="miguanV" class="verify" alt="点击更换数字" title="点击更换数字" src=""/></div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];return template({})}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/Verify/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/com/Verify/Verify.js",ln:62})}},initialize:function(){try{vCode(T("#miguanV")[0]),vCode.refresh(),T("#miguanB").on("click",function(){var e="/?vcode_verify=1&vcode_str="+vCode.code+"&input_str="+T("#miguanI")[0].value;T.ajax(e,{dataType:"json",success:function(e){e&&e.vcode_successed?componentManager.go(componentManager.lastRequest):T(".miguan_aler").show()}})})}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/Verify/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/com/Verify/Verify.js",ln:90})}}}),module.exports=Verify});