define("common:widget/ui/StreetViewTool/StreetViewTool.js",function(t,e,i){function o(t){this._map=t.map||map,this.defaultCursor=this._map.config.defaultCursor,this.draggingCursor=this._map.config.draggingCursor,this.isOpen=!1,this.isBtnActionOpen=!1,this.startTop=70,this.startRight=13,this.defaultAnchor=BMAP_ANCHOR_TOP_RIGHT,this.defaultOffset=new BMap.Size(this.startRight,this.startTop),this.ICON=["-50px -152px","0px -152px"]}var s,n,a=(t("common:widget/ui/util/util.js"),t("common:widget/ui/stat/CodeStat.js"),t("common:widget/ui/indexUtil/IndexUtil.js")),r=t("common:widget/ui/PanoService/PanoService.js"),p=t("common:widget/ui/config/config.js"),u=p.modelConfig,d=(p.mapConfig,18);o.prototype=new BMap.Control,o.prototype.initialize=function(){try{var t=document.createElement("div"),e=this.streetTool=document.createElement("div"),i=this._map.getContainer(),o="../../../images/street_tool_c1d9c10.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/street_tool_c1d9c10.png*/;return baidu.setStyles(t,{width:"50px",height:"52px",margin:0,padding:0,cursor:"pointer"}),baidu.setStyles(e,{width:"50px",height:"52px",backgroundImage:'url("'+o+'")',backgroundRepeat:"no-repeat",backgroundPosition:this.ICON[1]}),t.appendChild(e),i.appendChild(t),this.addEvents(),t}catch(s){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/StreetViewTool/exception.fire","catch",{msg:s.message||s.description,path:"common:widget/ui/StreetViewTool/StreetViewTool.js",ln:80})}},o.prototype.addEvents=function(){var e=this,i=window,o=this.streetTool;baidu.on(o,"click",function(){return a.isSupportStreetView()?(s=null,e._setMouseOver(),void e.setStatus()):void t.async("common:widget/pano/module/PanoCityPageModule/PanoCityPageModule.js",function(t){var e=new t;e.initialize(u.cityCode)})}),baidu.on(o,"mouseover",function(){e.isOpen||e._setMouseOver()}),baidu.on(o,"mouseout",function(){e.isOpen||e._setMouseOut()}),this._map.addEventListener("maptypechange",function(t){if(a.isSupportStreetView()){var i=t.mapType;i===BMAP_TYPE_DIMENSIONAL?(e.hide(),e.resetStatus()):(e.show(),e.setPostion(),e.isOpen&&e.roadLayer&&e.roadLayer.update())}});this._map.addEventListener("zoomend",function(){var t=e._map.getZoom();a.isSupportStreetView()&&d>=t&&e.isOpen&&!n&&"mouseScroll"==s&&(e.resetStatus(),e.streetViewUtil.resetStatus())}),this._map.addEventListener("zoomexceeded",function(t){if(a.isSupportStreetView()){var i=t.targetZoom;20!==i||e.isOpen||(s="mouseScroll",e.setPostion(),e.resetStatus(),e.setStatus(),s="mouseScroll",n||addStat(STAT_CODE.STAT_PANORAMA,{item:"mousewheel-raodnet-open"}))}}),i.maptypeCtrl.addEventListener("hide",function(){e.setPostion()}),i.maptypeCtrl.addEventListener("show",function(){e.setPostion()})},o.prototype.bindKeyEvent=function(){this.isEnableKey=!0;var t=this,e=T.browser.ie&&T.browser.ie<=7?"keypress":"keydown";baidu.on(document,e,function(i){if(27==i.keyCode){t.isOpen&&t.isEnableKey&&(t.resetStatus(),t.streetViewUtil&&t.streetViewUtil.resetStatus());var o=arguments.callee;T.un(document,e,o),o=null}})},o.prototype._setMouseOver=function(){this.streetTool.style.backgroundPosition=this.ICON[0]},o.prototype._setMouseOut=function(){this.streetTool.style.backgroundPosition=this.ICON[1]};var l=function(){var t=T.G("defCityTip");t&&(t.style.display="none")};o.prototype.setStatus=function(t){var e=this;n=t,this.isOpen?(this.isOpen=!1,this.streetViewUtil&&this.streetViewUtil.resetStatus(),this.roadLayer&&this.roadLayer.hide(),this._setMouseOut(),this._map.setDefaultCursor(this.defaultCursor),e._panoPoiClick&&(e._panoPoiClick.removeSpotEvent(),e._panoPoiClick.hideOverlays(),e._panoPoiClick.clearPoiCache(),MPC_Mgr.bindMouseMove(),MPC_Mgr.bindSpotEvent()),l()):(this.isOpen=!0,this._setMouseOver(),this.checkPanoInfo(),addStat(STAT_CODE.STAT_PANORAMA,{catalog:"tool",func:"click"}))},o.prototype.checkPanoInfo=function(){var t=this,e=this._map.getBounds();r.checkBounds(e,function(e){e&&0==e.error&&e.content?(t.loadStreetView(),t.setTools()):(t.isEnableKey=!1,t.isOpen=!1,t._setMouseOut(),map.setDefaultCursor(t.defaultCursor))},t)},o.prototype.resetStatus=function(){var t=window;this._setMouseOut(),this.isOpen=!1,resetStatus=null,l(),this._map.setDefaultCursor(this.defaultCursor),this._map.setDraggingCursor(this.draggingCursor),this.setPostion(),this.streetViewUtil&&this.streetViewUtil.removeEvents(),this.roadLayer&&this.roadLayer.hide(),this._panoPoiClick&&(this._panoPoiClick.removeSpotEvent(),this._panoPoiClick.hideOverlays(),this._panoPoiClick.clearPoiCache()),t.MPC_Mgr&&(t.MPC_Mgr.bindMouseMove(),t.MPC_Mgr.bindSpotEvent())},o.prototype.setTools=function(){var t=window;t.captureCtrl&&t.captureCtrl.endCapture(),t.MapSignInst&&t.MapSignInst.exituserSign()},o.prototype.loadStreetView=function(){this._map.closeInfoWindow();var e=this,i=window;t.async(["common:widget/ui/StreetViewLayer/StreetViewLayer.js","common:widget/ui/StreetViewUtil/StreetViewUtil.js","common:widget/ui/PanoPoiClick/PanoPoiClick.js"],function(t,o,s){if(i.MPC_Mgr&&i.MPC_Mgr.removeSpotEvent(),i.weipaiTool){{i.weipaiTool.wpClick}i.weipaiTool.isOpen&&i.weipaiTool.resetStatus()}e.streetViewUtil=new o({map:e._map,panoTool:e,exitLargeMapMode:!1}),e.roadLayer||(e.roadLayer=new t({map:e._map})),e.roadLayer.show(),e._panoPoiClick?e._panoPoiClick.refresh(e._map):e._panoPoiClick=new s(e._map,"_panoPoiClick"),e.bindKeyEvent()})},o.prototype.setPostion=function(){if(this.isVisible()){var t=window,e=this._map.getMapType(),i=maptypeCtrl.isVisible(),o=this.startTop,s=this.startRight;o="B_SATELLITE_MAP"==e?i?132:45:i?102:45,this.setOffset(new BMap.Size(s,o)),t.weipaiTool&&t.weipaiTool.isVisible()&&t.weipaiTool.setPostion()}},o.prototype.getToolPos=function(){var t=T.dom.getPosition(this._map.getContainer()),e=this.getDom(),i=this.getOffset(),o=i.width+e.clientWidth+10,s=i.height+t.top;return{top:s,right:o}},i.exports=o});