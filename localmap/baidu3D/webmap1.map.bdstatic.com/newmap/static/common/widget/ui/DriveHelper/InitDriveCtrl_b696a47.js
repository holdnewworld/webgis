define("common:widget/ui/DriveHelper/InitDriveCtrl.js",function(t,e,n){function i(t,e,n,i){function o(t){return 0>=t?void 0:2>=t?z:3===t?j:G}function a(t){return t.replace(/[\u0100-\uffff]/g,"##").length>25?t.substring(0,11)+"...":t}function s(t){t&&(t.style.color="#666",t.style.cursor="default")}function u(t){t&&(t.style.color="",t.style.cursor="")}function f(t,e){t&&(t.style.display=e?"inline":"none")}function d(t,e){var n=w(e,!1),i=w(e,!0),o={type:e.__t};return t.addEventListener("open",function(){var e=$.G(ie),r=$.G(ne);i?($.on(e,"click",function(){p({target:i},!0),O.everytime(b.INFOW_NEXT,o)}),u(e)):s(e),n?($.on(r,"click",function(){p({target:n},!0),O.everytime(b.INFOW_PREV,o)}),u(r)):s(r);var a=T.G(ee),l=T.G(te),d=x.getZoom();d===D?(f(a,!1),f(l,!0)):(f(a,!0),f(l,!1)),T.on(a,"click",function(){x.zoomTo(D),f(a,!1),f(l,!0),O.everytime(b.INFOW_ZOOMIN,o)}),T.on(l,"click",function(){x.zoomTo(S),f(a,!0),f(l,!1),O.everytime(b.INFOW_ZOOMOUT,o)}),x.addEventListener("zoomend",function(){var t=x.getZoom();t===D?(f(a,!1),f(l,!0)):(f(a,!0),f(l,!1))});var c=W(t,"map.infoWindowDoms.closeButton");if(c){var v=c.onclick;c.onclick=function(){O.everytime(b.INFOW_CLOSE,o),v.apply(this,arguments)}}}),t}function p(t,e){var n=t.target,i=n.__t,o=ae[i];if(o){var r=o(n);n.openInfoWindow(r),O.set(b.OPERATED,!0),e||O.everytime(b.MARKER_CLICK,{type:i})}}function c(t){var e=t.target,n=null;e&&e.__label&&(n=e.__label,n&&(n.__hide?n.show():n.hide(),n.__hide=!n.__hide))}function v(t){var e=t.target;e.setZIndex(V),e.__label&&e.__label.setZIndex(V),M.tipLabel&&x.removeOverlay(M.tipLabel)}function g(t){var e=t.target;e.setZIndex(X),e.__label&&e.__label.setZIndex(X),M.tipLabel&&x.removeOverlay(M.tipLabel)}function _(t,e,n,i,o){var r=t.getPoint(),a=W(e,n);if(o&&(a=o(a)),a){var l=H.width/2+J.width,s=-H.height/2+J.height-2,u=new BMap.Label(a,{point:r,offset:new BMap.Size(l,s)}),f={border:"1px solid #999",color:"#666",padding:"2px",background:"#fff"};u.setStyles(f),u.setZIndex(X),u.__hide=i,t.__label=u}}function h(t,e,n,i){var o=[],r=null,a=null;return B(t,function(t,l){if(i(t,l)){if(a=W(t,n),"undefined"==typeof a)return;if("string"==typeof a){if(0===a.length)return;a=parse2Geo(a).points.split(",")}r=new BMap.Marker(new BMap.Point(a[0],a[1]),{icon:q[e]}),r.__i=l,r.__t=e,r.__info=t,r.__ctn=o,r.setZIndex(X),r.setOffset(J),r.addEventListener("click",p),r.addEventListener("mouseover",v),r.addEventListener("mouseout",g),o.push(r)}}),o}function m(t,e){for(var n=0,i=null,o=null,r=[];n<t.length;++n)i=t[n],i[e]&&(o=i[e],o&&B(o,function(t){if(pt=t.g,"undefined"!=typeof pt){if("string"==typeof pt){if(0===pt.length)return;pt=mapUtil.parse2Geo(pt).points.split(",")}var o=new BMap.Marker(new BMap.Point(pt[0],pt[1]),{icon:q[A[e]||e]});o.__i=n,o.__t=e,o.__info=i,o.__item=t,o.__ctn=r,o.setZIndex(X),o.setOffset(J),o.addEventListener("click",p),o.addEventListener("mouseover",v),o.addEventListener("mouseout",g),r.push(o)}}));return r}function w(t,e){var n=e?1:-1,i=t.__ctn,o=null;if(Array.prototype.indexOf)o=i.indexOf(t);else for(var r=0;r<i.length;++r)if(i[r]===t){o=r;break}for(var a=o+n,l=i[a];l&&t.getPoint().equals(l.getPoint());)a+=n,l=i[a];return l}function y(t){var e=t.content||[];B(e,function(t){var e=getPointByStr(parseGeo(t.geo).points),n=new BMap.Marker(e,{icon:q.park});n.__t="park",n.__ctn=ue,n.__info=t,n.setZIndex(X),n.setOffset(J),n.addEventListener("click",p),n.addEventListener("mouseover",c),n.addEventListener("mouseover",v),n.addEventListener("mouseout",g),_(n,t,"name",!1),ue.push(n)}),I.setNum("park",ue.length),I.isPushed()&&I.isChecked("park")&&B(ue,function(t){x.addOverlay(t)})}t=t||window;var k=l,M=e,x=n,I=i,O=DriveControl.Stat,b=DriveControl.Const;k.NaviTrans=k.NaviTrans||{};var L=(k.amap,k.omap,k.aselect),B=k.aeach,E=k.oeach,N=k.uniq,W=k.tryget,P=k.fmt,C=k.NaviTrans,R=BMap.MapType[x.getMapType()],D="object"==typeof R?R.zoomLevelMax:18,S=D-3,Z={0:"摄像头",1:"限速摄像头",2:"交通信号灯摄像头",4:"雷达测速摄像头",5:"单行线摄像头",6:"非机动车道摄像头",7:"出入口摄像头",8:"公交车道摄像头",10:"移动式测速摄像头",11:"禁止左转摄像头",12:"禁止右转摄像头",15:"其他摄像头"},z={strokeColor:"#018607",strokeWeight:4,strokeOpacity:.65},j={strokeColor:"#004eff",strokeWeight:4,strokeOpacity:.65},G={strokeColor:"#fc5e20",strokeWeight:4,strokeOpacity:.65},A={lgt:"light",tol:"toll"},F="../../../../../../../webmap0.map.bdstatic.com/newmap/static/common/images/route_markers_f9cdc45.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/route_markers_f9cdc45.png*/,U=23,q={},H=new BMap.Size(22,29),K=["ferry","light","cam","toll","entry","sapa","park","gas","poi","road"],V=1024,X=1023,J=new BMap.Size(8,-8);B(K,function(t,e){q[t]=new BMap.Icon(F,H,{imageOffset:new BMap.Size(-51-U*e,-1)})});var Q=function(t,e){B(this,function(n){e?t.addOverlay(n):t.removeOverlay(n)})};C.getColorizedRoutes=function(t){var e=[],n=[];if(t.content&&!t.content.rss)return n;var i={rank:null,points:[]};return E(t.content.rss,function(t,n){var r=n.rr,a=n.g;if("string"==typeof a&&r&&a){var l=parse2Geo(a).points;if(null===i.rank||o(i.rank)===o(r))i.points.push(l),i.rank=r;else{if(e.push(i),i.points.length>0){var s=i.points[i.points.length-1].split(";");s=prevLastPoint=s[s.length-1],s&&(l=s+";"+l)}i={rank:r,points:[l]}}}}),e.push(i),B(e,function(t){var e=null;if(0!==t.length){e=o(t.rank);var i=t.points.join(";");n.push(new BMap.Polyline(i,e))}}),n.toggle=Q,n};var Y=DriveControl.ID||"DriveCtrl",te="zoomOut_"+Y,ee="zoomIn_"+Y,ne="prev_"+Y,ie="next_"+Y,oe=['<p class="iw_poi_title" title="{title0}">{title}','<a id="'+te+'" style="display:none" href="javascript:void(0)">缩小</a>','<a id="'+ee+'" href="javascript:void(0)">放大</a>',"</p>"],re=['<div class="iw_poi_content">','<div class="iw_trans_content">{info}</div>','<table width="99%" cols="2" class="iw_trans_nav">',"<tbody><tr>",'<td nowrap="nowrap" width="50%" align="left">','<a id="'+ne+'" href="javascript:void(0);">上一个</a>',"</td>",'<td nowrap="nowrap" width="50%" align="right">','<a id="'+ie+'"  href="javascript:void(0);">下一个</a>',"<span>{next}</span>","</td>","</tr></tbody>","</table>","</div>"],ae=InfoWindowMaker={lgt:function(t){var e=(t.__info,P(oe,{title0:"",title:"红绿灯"})),n=P(re,{next:"",info:""});return d(new BMap.InfoWindow(n,{title:e,width:240,height:0}),t)},tol:function(t){var e=t.__item,n=P(oe,{title0:e.n||"",title:a(e.n)}),i=P(re,{next:"",info:""});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},sapa:function(t){var e=t.__item,n=P(oe,{title0:e.n||"",title:a(e.n)}),i=P(re,{next:"",info:""});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},gas:function(t){var e=t.__item,n=P(oe,{title0:e.n||"",title:a(e.n)}),i=P(re,{next:"",info:""});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},poi:function(t){var e=t.__info[t.__t],n=P(oe,{title0:e.n||"",title:a(e.pn)}),i=P(re,{next:"",info:""});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},entry:function(t){var e=M.popInfos[t.__i],n=P(oe,{title0:e.n||"",title:a(e.title)}),i=P(re,{info:e.info,next:e.next?"("+e.next+")":""});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},road:function(t){var e=t.__info,n=P(oe,{title0:e.n||"",title:a(e.n)}),i=P(re,{next:"",info:"该路段长约"+M.roundDis(e.mn.ml)});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},park:function(t){var e=t.__info,n=P(oe,{title0:e.name||"",title:a(e.name)}),i=P(re,{next:"",info:P("地址：{addr}",e)});return d(new BMap.InfoWindow(i,{title:n,width:240,height:0}),t)},cam:function(t){var e=t.__item,n=Z[e.t];n=n||Z[0];var i=P(oe,{title0:n,title:n}),o=P(re,{next:"",info:P(e.s?"限速：{s}公里/小时":"",e)});return d(new BMap.InfoWindow(o,{title:i,width:240,height:0}),t)}};C.getMarkersAlongRoute=function(t){var e={},n=t.content.rss,i=t.content.kps,o=null;return o=e.light=m(n,"lgt"),I.setNum("light",o.length),o=e.gas=m(n,"gas"),I.setNum("gas",o.length),o=e.toll=m(n,"tol"),I.setNum("toll",o.length),o=e.cam=m(n,"cam"),I.setNum("cam",o.length),B(o,function(t){_(t,t.__item,"t",!0,function(t){var t=Z[t];return t||Z[0]}),t.addEventListener("mouseover",c),t.addEventListener("mouseout",c)}),o=e.sapa=m(n,"sapa"),B(o,function(t){_(t,t.__item,"n",!0),t.addEventListener("mouseover",c),t.addEventListener("mouseout",c)}),I.setNum("sapa",o.length),o=e.poi=h(n,"poi","http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/DriveHelper/poi.pg",function(t){return t.poi}),B(o,function(t){_(t,t.__info,"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/DriveHelper/poi.pn",!0),t.addEventListener("mouseover",c),t.addEventListener("mouseout",c)}),I.setNum("poi",N(o,function(t){return""+t.getPoint().lng+t.getPoint().lat}).length),o=e.road=h(n,"road","http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/DriveHelper/mn.mg",function(t){return t.mn&&1==t.mn.m}),B(o,function(t){_(t,t.__info,"n",!1)}),I.setNum("road",o.length),o=e.entry=h(i,"entry","pt",function(t){return t.ic}),I.setNum("entry",o.length),o=e.ferry=h(i,"ferry","pt",function(t,e){if(9==n[e].rr&&0==e)return r.ShowRoadTypeRoute=!0,!0;if(e-1>=0&&e+1<=n.length-1){if(9!=n[e].rr&&9==n[e+1].rr)return r.ShowRoadTypeRoute=!0,!0;if(9!=n[e+1].rr&&9==n[e].rr)return r.ShowRoadTypeRoute=!0,!0}return!1}),I.setNum("ferry",o.length),r.ShowRoadTypeRoute=0==o.length?!1:!0,r.ShowRoadTypeRoute&&I.check("ferry",!0),e},C.getMarkersByIndex=function(t,e){return L(t,function(t){return t.__i==e})},C.getMarkersByLabelText=function(t,e){return L(t,function(t){var n=t.__label;return n?n.content===e:!1})},C.toggleMarkers=function(t,e,n,i){if("undefined"!=typeof e){var o=null;B(e,function(e){o=e.__label,n?(t.addOverlay(e),o&&(t.addOverlay(o),o.__hide&&o.hide())):(t.removeOverlay(e),o&&t.removeOverlay(o)),i&&i(t,e,n)})}};var le=12;C.isNearAnyMarker=function(t,e,n,i){if(n.count<=0)return!1;var o=null,r=null;n=n.status;for(var a in n)if(n[a]&&(o=t[a],o&&0!==o.length))for(var l=0;l<o.length;++l){r=i.pointToPixel(o[l].getPoint());var s=getDistanceByPixel(e,r);if(le>=s)return!0}return!1};var se=2e3,ue=[];C.toggleDestParks=function(t,e,n){if(e)if(0===ue.length||n){ue.length=0;var i=se,o=P(["nb&wd={wd}&nb_x={x}&nb_y={y}&r={r}","&b=({lng1},{lat1};{lng2},{lat2})&from=webnav"],{r:i,x:t.lng,y:t.lat,wd:encodeURIComponent("停车场"),lng1:t.lng-i,lat1:t.lat-i,lng2:t.lng+i,lat2:t.lat+i});go(o,y)}else B(ue,function(t){x.addOverlay(t)});else B(ue,function(t){x.removeOverlay(t)})},C.requestDestParks=function(t){C.toggleDestParks(t,!0,!0)}}var o=t("common:widget/ui/config/config.js"),r=o.modelConfig,a=(o.mapConfig,t("common:widget/ui/DriveHelper/DriveUtil.js")),l=a.driveHelper;n.exports=i});