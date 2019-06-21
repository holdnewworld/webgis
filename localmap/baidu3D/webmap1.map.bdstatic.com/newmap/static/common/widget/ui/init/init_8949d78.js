define("common:widget/ui/init/init.js",function(t,e,i){function n(){}function o(){if(!window.isPrint){var t,e=c.getClientSize().width,i=c.getClientSize().height,n=v.fullScreenMode;c.supportMinHeight()||(document.body.style.width=(window.innerWidth||document.documentElement.clientWidth)<A?A+"px":"auto"),i-=v&&n?0:B-R,v&&!n&&"open"==m.status&&(e-=E),e=0>e?0:e,i=0>i?0:i,M.style.height=i+"px",b.style.height=i-R+"px",t=0>i-P?0:i-P,_.style.height=t+"px";var o=parseInt(M.style.height);o=0>o?0:o,I.style.height=o+"px",j.style.top=parseInt((i-P)/2)+"px"}}function d(){baidu(window).on("load",function(){baidu(window).off("load",arguments.callee)}),baidu(window).resize(function(){o()})}function a(){if(!window.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),e=null;try{e=t.getContext("webgl")}catch(i){return!1}return null===e?!1:!0}var c=t("common:widget/ui/util/util.js"),m=t("common:widget/ui/mapInfo/mapInfo.js"),s=t("common:widget/ui/config/config.js"),u=(t("common:widget/ui/constant/Constant.js"),t("common:widget/ui/indexUtil/IndexUtil.js")),l=t("common:widget/ui/mapInfoScroll/mapInfoScroll.js"),r=t("common:widget/ui/searchBox/searchBox.js"),g=t("common:widget/ui/Weather/Weather.js"),w=(t("common:widget/com/componentManager.js"),t("common:widget/ui/mapRevert/MapRevert.js")),p=t("common:widget/ui/userMgr/userMgr.js"),y=t("common:widget/ui/SyncMgr/SyncMgr.js"),f=t("common:widget/ui/Pc2Mobile/Pc2Mobile.js"),h=t("common:widget/ui/moCMS/moCMS.js"),S=t("common:widget/ui/tools/tools.js"),C=t("common:widget/ui/AQIMgr/AQIMgr.js"),x=s.modelConfig,M=(s.urlConfig,document.getElementById("MapHolder")),j=document.getElementById("MapInfoTab"),b=document.getElementById("MapInfo"),I=document.getElementById("shad_v"),_=document.getElementById("toolsContent"),v=window.map,A=960,E=350,B=142,R=32,P=55,O={init:function(){n(),d(),this.setConfig(),this.setStatus(),addStat("index.index.pc2online2017","show"),addStat("http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/init/index.index.uv","show"),addStat("http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/init/pcmap.basemap.all"),a()&&addStat("pcmap.browser.webgl","show"),window.devicePixelRatio>1&&addStat("pcmap.basemap.retina")},setStatus:function(){w.init(),p.init(function(){y.init()}),l.init(),r.init(),window.isPrint||(f.addTip(),S.init(),t.async(["common:widget/ui/loadCtrls/LoadCtrls.js"],function(t){t.init()}))},setConfig:function(){if(null!=window._OLR){var t=baidu.json.parse(window._OLR.index)||{},e=t.content;1!==e.city_type&&""!==e.city_type&&(x.cityType=e.city_type),x.cityCode=e.code,x.cityName=e.cname,x.defalutCityCode=e.code,x.defalutCityName=e.cname,x.sup=e.sup,T("#curCity").html(e.cname),h.init(),t.current_city&&null!=t.current_city.sup_bus&&u.setSupBus(t.current_city.sup_bus),g.add(t.weather),C.set(t.aqi,t.current_city,"index");var i=x.cityCode;u.isSupportStreetView(i)&&addStat(STAT_CODE.STAT_PANORAMA,{catalog:"pano-city-visit",from:i}),addStat(STAT_CODE.STAT_PANORAMA,{catalog:"city-visit",from:i})}new BMap.Label("shadow");v.temp.toolsElement=[]}};i.exports=O});