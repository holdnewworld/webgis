define("common:widget/pano/Transition/Context/CanvasContext.js",function(t){var e=t("common:widget/pano/Transition/Context/Context.js"),i=function(t,i,n){var o=e._constrctor.apply(this,arguments),a=1.5,s=i*a,d=n*a,h=this.context=document.createElement("div");h.style.cssText=["position:absolute","width:100%","height:100%"].join(";");var p=this.context=document.createElement("canvas"),r=this._dpx=(s-i)/2,c=this._dpy=(d-n)/2;p.width=s,p.height=d,p.style.cssText=["position:absolute","width:"+s+"px","height:"+d+"px","right:-"+r+"px","bottom:-"+c+"px"].join(";");var x=p.getContext("2d");this.draw=function(t){x.drawImage(t.image,this._dpx+t.drawX,this._dpy+t.drawY,t.width,t.height)},h.appendChild(p),o.appendChild(h)};return i.prototype=e,i});