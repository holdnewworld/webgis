define("common:widget/ui/CMSUtil/cmsControl.js",function(require,exports,module){var config=require("common:widget/ui/config/config.js"),MapConfig=config.mapConfig,CmsControl={getPc2MoStr:function(type){var json=_OLR?baidu.json.parse(_OLR.index)||{}:{},compileStr="",imgMap={bus:"banner_bus",nav:"banner_driving",poi:"banner_poi"},cnMap={bus:"公交",nav:"驾车",poi:"POI"},imgStr=imgMap[type]?imgMap[type]:"",imgUrl="",template="",cn=cnMap[type]?cnMap[type]:"";return json.mo&&json.mo.data&&("city"==type?json.mo.data.banner_home&&(imgUrl=MapConfig.host(json.mo.data.banner_home),template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="addrBottomImg" ><a onclick="PcToMobile.open(\'IMG\', \'城市推广图片\');return false;" ><img src="',"undefined"==typeof img_url?"":img_url,'" width="323" height="100" /></a>    <a onclick="PcToMobile.open(\'BTN\', \'城市推广安卓按钮\', {qudao: \'1009177q\'});" class="pc2MoAndriod" href="http://www.baidu.com/search/error.html" target="andriodApk" title="点击将安装包下载到电脑，通过数据线安装到手机"></a>    <a onclick="PcToMobile.open(\'BTN\', \'城市推广ios按钮\');" class="pc2MoIphone" href="http://itunes.apple.com/cn/app/id452186370?ls=1&mt=8" title="点击前往苹果官方商店下载" target="_blank"></a></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],compileStr=template({img_url:imgUrl})):imgStr&&json.mo.data[imgStr]&&(imgUrl=MapConfig.host(json.mo.data[imgStr]),template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<a onclick="addStat(&#39;downloadapp.infowin.searchresultpromote&#39;);PcToMobile.open(&#39;IMG&#39;, &#39;',"undefined"==typeof log?"":log,'推广图片&#39;);" href="javascript:void(0);">    <img src="',"undefined"==typeof img_url?"":img_url,'" width="316" height="100"/></a><a class="pc2MoAndriodSearch" onclick="addStat(&#39;downloadappsucess.infowin.android&#39;);PcToMobile.open(&#39;BTN&#39;, &#39;',"undefined"==typeof log?"":log,'安卓按钮&#39;, {qudao: &#39;1009177q&#39;});" href="http://www.baidu.com/search/error.html"  target="andriodApk" title="点击将安装包下载到电脑，通过数据线安装到手机"></a><a class="pc2MoIphoneSearch" onclick="addStat(&#39;downloadappsucess.infowin.ios&#39;);PcToMobile.open(&#39;BTN&#39;, &#39;',"undefined"==typeof log?"":log,'ios按钮&#39;);" href="http://itunes.apple.com/cn/app/id452186370?ls=1&mt=8" title="点击前往苹果官方商店下载" target="_blank"></a>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],compileStr=template({img_url:imgUrl,log:cn}))),compileStr}};module.exports=CmsControl});