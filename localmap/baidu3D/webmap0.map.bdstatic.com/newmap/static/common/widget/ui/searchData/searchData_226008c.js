define("common:widget/ui/searchData/searchData.js",function(e,n,r){function o(e){var n="",r=map.getBounds(),o="&l="+map.zoomLevel,i=location.pathname,a=window.isPrint?i.replace("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchData/print.html",""):i;if((-1!=e.indexOf("nav&")||-1!=e.indexOf("nse&"))&&(e+="&extinfo=63"),0!=e.indexOf("bd&")&&window.searchInViewCtrl&&(window.searchInViewCtrl.exit(),window.searchInViewCtrl.curKw=""),document.location.href.indexOf("format=1")>-1&&(n="&format=1"),e.indexOf("&l=")>-1&&(o=""),(0===e.indexOf("s&")||0===e.indexOf("con&")||0===e.indexOf("nb&")||0===e.indexOf("bd&"))&&(-1===e.indexOf("&pn=")&&(e+="&pn=0"),-1===e.indexOf("&auth=")&&(e=e+"&auth="+window.AUTH)),e=e.replace(/%3C/gi,encodeURIComponent(" ")).replace(/%3E/gi,encodeURIComponent(" "))+"&tn="+map.mapType,e.indexOf("&nn=")<0&&(e+="&nn=0"),e.indexOf("b=(")>-1)e=a+t.DATA_URL+e+n+mapDebug.getParam(e)+"&ie=utf-8"+o+"&t="+(new Date).getTime();else{var d=Math.min(r.minX,r.maxX),l=Math.max(r.minX,r.maxX),s=Math.min(r.minY,r.maxY),u=Math.max(r.minY,r.maxY);e=a+t.DATA_URL+e+n+mapDebug.getParam(e)+"&ie=utf-8"+o+"&b=("+d+","+s+";"+l+","+u+")&t="+(new Date).getTime()}return e}var i=e("common:widget/ui/config/config.js"),t=i.modelConfig,a={fetch:function(e,n,r){var i=e.substring(0,e.indexOf("&"));e=o(e),T.ajax(e,{dataType:"json",success:function(o,t){var a=t.getResponseHeader("HTTP_X_BD_LOGID");a&&window.mapDebug&&window.mapDebug.onDebugResp&&window.mapDebug.onDebugResp(a,t);var a=t.getResponseHeader("HTTP_X_BD_LOGID");return o&&o.result?(1===o.result.current_null&&!o.place_info||t.slow?(1!==o.result.current_null||o.place_info||"bse"===i||ErrorMonitor("qt_"+i,"res_null",a+"$$no content$$"+e,void 0,{xhr:t,url:e,type:"fail"}),t.slow&&ErrorMonitor("qt_"+i,"req_slow"+t.slow,a,void 0,{xhr:t,url:e,type:"slow"})):ErrorMonitor("qt_"+i,"succ","",void 0,{xhr:t,url:e,type:"succ"}),void(n&&n(o))):(ErrorMonitor("qt_"+i,"res_null",a+"$$no res$$"+e,void 0,{xhr:t,url:e,type:"fail"}),void(r&&r()))},error:function(n){ErrorMonitor("qt_"+i,"req_fail",n.status,void 0,{xhr:n,url:e,type:"fail"}),r&&r()}}),ErrorMonitor("qt_"+i,"BASE","")},setUrl:o};r.exports=a});