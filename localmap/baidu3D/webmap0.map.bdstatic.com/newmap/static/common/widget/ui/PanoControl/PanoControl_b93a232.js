define("common:widget/ui/PanoControl/PanoControl.js",function(o,n,e){var t=window.Pano=t||{},i=null,a=function(){this.defaultAnchor=BMAP_ANCHOR_TOP_RIGHT,this.defaultOffset=new BMap.Size(40,8)};i=a.prototype=new BMap.Control,i.initialize=function(o){try{var n=this;n._map=o,n.NORMAL_OFFSET=["0px 0px","0px -22px","0px -44px"],n.SATELL_OFFSET=["-40px 0px","-40px -22px","-40px -44px"];var e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div");return baidu.extend(e.style,{position:"absolute",cursor:"pointer",height:"22px",width:"80px"}),baidu(t).addClass("pano-control"),baidu(i).addClass("pano-control"),t.style.backgroundPosition=n.NORMAL_OFFSET[2],i.style.backgroundPosition=n.SATELL_OFFSET[0],t.appendChild(document.createTextNode("地图")),i.appendChild(document.createTextNode("卫星")),e.appendChild(t),e.appendChild(i),t.onmouseover=function(){switch(t.style.backgroundPosition){case n.NORMAL_OFFSET[2]:break;case n.NORMAL_OFFSET[0]:t.style.backgroundPosition=n.NORMAL_OFFSET[1]}},t.onmouseout=function(){switch(t.style.backgroundPosition){case n.NORMAL_OFFSET[2]:break;case n.NORMAL_OFFSET[1]:t.style.backgroundPosition=n.NORMAL_OFFSET[0]}},i.onmouseover=function(){switch(i.style.backgroundPosition){case n.SATELL_OFFSET[2]:break;case n.SATELL_OFFSET[0]:i.style.backgroundPosition=n.SATELL_OFFSET[1]}},i.onmouseout=function(){switch(i.style.backgroundPosition){case n.SATELL_OFFSET[2]:break;case n.SATELL_OFFSET[1]:i.style.backgroundPosition=n.SATELL_OFFSET[0]}},t.onclick=function(){n._map.setMapType(BMAP_NORMAL_MAP),t.style.backgroundPosition=n.NORMAL_OFFSET[2],i.style.backgroundPosition=n.SATELL_OFFSET[0]},i.onclick=function(){n._map.setMapType(BMAP_SATELLITE_MAP),t.style.backgroundPosition=n.NORMAL_OFFSET[0],i.style.backgroundPosition=n.SATELL_OFFSET[2]},n._map.getContainer().appendChild(e),e}catch(a){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/PanoControl/exception.fire","catch",{msg:a.message||a.description,path:"common:widget/ui/PanoControl/PanoControl.js",ln:104})}},e.exports=t.PanoControl=a});