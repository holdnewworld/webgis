define("common:widget/pano/base/MapContext.js",function(e,t,o){function i(e){this._moduleHash=e}var n=e("common:widget/ui/config/config.js"),r=n.modelConfig;T.object.extend(i.prototype,{getLevel:function(){return map.getZoom()},getOverviewLevel:function(){var e=this._moduleHash.PanoOverviewModule;return e?e.getLevel():16},getPCMapCity:function(){return{cityId:r.cityCode,cityName:r.cityName}},getCurrentCity:function(e){var t=this._moduleHash.PanoOverviewModule;t?t.getCurrentCity(e):e({cityId:r.cityCode,cityName:r.cityName})},getPoint:function(){var e=this._moduleHash.PanoOverviewModule;return e?e.getPoint():null}}),o.exports=i});