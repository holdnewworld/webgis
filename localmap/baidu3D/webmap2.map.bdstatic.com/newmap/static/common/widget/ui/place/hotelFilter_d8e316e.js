define("common:widget/ui/place/hotelFilter.js",function(t,e,i){{var o=t("common:widget/ui/util/util.js"),r=t("common:widget/ui/config/config.js");r.modelConfig,r.mapConfig}place=window.place||{},place.hotel=place.hotel||{},T.extend(place.hotel,{filterHtml:function(t,e){var i;return this.guid=t,this.json=e,this.current_city=null,e&&e.current_city&&(2===e.current_city.type?this.current_city=e.current_city.code:3===e.current_city.type&&(this.current_city=e.current_city.up_cityid)),i='<div class="hotel-filter-new" data-c='+e.current_city.code+' data-wd="'+e.result.wd+'"><dl><dt></dt><dd><p class="hotel-filter-new-title"><a href="javascript:void(0)">更多筛选排序功能</a></p><p>帮您从<span class="hotel-filter-poi-count">'+e.result.total+"</span>个结果中精挑细选 </p></dd></dl></div>"},openList:function(t){window.open("http://hotel.baidu.com/detail?qt=template&detail=hotel_list&from=home&s="+encodeURIComponent("s&wd=酒店&c="+t.curCity.code))},initialize:function(){try{T.dom(".go_back_clear").remove(),T(".hotel-filter-new").on("click",function(){var t=o.getParam("?qt="+window.currentComponent.modelQuery),e=T(".hotel-filter-new").attr("data-c"),i=T(".hotel-filter-new").attr("data-wd"),r=T(".hotel-filter-new").attr("data-brand"),a="",c=map.getBounds();t&&"nb"==t.qt&&t.uid&&(a=t.uid),window.open(r?"http://hotel.baidu.com/detail?qt=template&detail=hotel_list_third&from=list&s="+encodeURIComponent("s&c="+e+"&b=("+c.minX+","+c.minY+";"+c.maxX+","+c.maxY+")&brand="+r+(a?"&uid="+a:"")):"http://hotel.baidu.com/detail?qt=template&detail=hotel_list&from=list&s="+encodeURIComponent("s&wd="+i+"&c="+e+"&b=("+c.minX+","+c.minY+";"+c.maxX+","+c.maxY+")"+(a?"&uid="+a:"")))})}catch(t){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/exception.fire","catch",{msg:t.message||t.description,path:"common:widget/ui/place/hotelFilter.js",ln:70})}},otaDataDecode:function(t){var e,i,o,r;for(r=function(t){var e,i,o,r,a,c,n,l=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);for(c=t.length,a=0,n="";c>a;){do e=l[255&t.charCodeAt(a++)];while(c>a&&-1==e);if(-1==e)break;do i=l[255&t.charCodeAt(a++)];while(c>a&&-1==i);if(-1==i)break;n+=String.fromCharCode(e<<2|(48&i)>>4);do{if(o=255&t.charCodeAt(a++),61==o)return n;o=l[o]}while(c>a&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&i)<<4|(60&o)>>2);do{if(r=255&t.charCodeAt(a++),61==r)return n;r=l[r]}while(c>a&&-1==r);if(-1==r)break;n+=String.fromCharCode((3&o)<<6|r)}return n},o=function(t){var e,i,o,r,a,c;for(e="",o=t.length,i=0;o>i;)switch(r=t.charCodeAt(i++),r>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=t.charAt(i-1);break;case 12:case 13:a=t.charCodeAt(i++),e+=String.fromCharCode((31&r)<<6|63&a);break;case 14:a=t.charCodeAt(i++),c=t.charCodeAt(i++),e+=String.fromCharCode((15&r)<<12|(63&a)<<6|(63&c)<<0)}return e},i=function(t){var e,i,a="";for(e=0;e<t.length;e++)i=t.charCodeAt(e),128>i&&(i=7^i),a+=String.fromCharCode(i);return o(r(a))},e=0;e<t.length;e++){if(t[e].basic_info){var a;for(a in t[e].basic_info)t[e].basic_info[a]&&(t[e].basic_info[a]=i(t[e].basic_info[a]))}if(t[e].ota_list){var c;for(c=0;c<t[e].ota_list.length;c++)if(t[e].ota_list[c].price_info){var n;for(n=0;n<t[e].ota_list[c].price_info.length;n++)t[e].ota_list[c].price_info[n].book_state&&(t[e].ota_list[c].price_info[n].book_state=i(t[e].ota_list[c].price_info[n].book_state)),t[e].ota_list[c].price_info[n].room_name&&(t[e].ota_list[c].price_info[n].room_name=i(t[e].ota_list[c].price_info[n].room_name)),t[e].ota_list[c].price_info[n].room_price&&t[e].ota_list[c].price_info[n].room_price.price&&(t[e].ota_list[c].price_info[n].room_price.price=i(t[e].ota_list[c].price_info[n].room_price.price)),t[e].ota_list[c].price_info[n].coupons&&t[e].ota_list[c].price_info[n].coupons.price&&(t[e].ota_list[c].price_info[n].coupons.price=i(t[e].ota_list[c].price_info[n].coupons.price))}}}}}),i.exports=place.hotel});