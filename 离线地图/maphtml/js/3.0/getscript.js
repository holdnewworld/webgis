//https://blog.csdn.net/wml00000/article/details/82219015
//https://map.baidu.com/@13222595.106061013,3744155.98504176,21z
window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20190402"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20190402"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20190402"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20190402"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20190402"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20190402"
        },
        "panoClick": {
            "version": "1033",
            "updateDate": "20190404"
        },
        "panoUdt": {
            "version": "20190404",
            "updateDate": "20190404"
        },
        "panoSwfAPI": {
            "version": "20150123",
            "updateDate": "20150123"
        },
        "panoSwfPlace": {
            "version": "20141112",
            "updateDate": "20141112"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20190402"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20190402"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20190402"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20190402"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20190402"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "";
(function() {
    function ba(a) {
        throw a;
    }
    var l = void 0
      , p = !0
      , s = null
      , t = !1;
    function u() {
        return function() {}
    }
    function ca(a) {
        return function(b) {
            this[a] = b
        }
    }
    function x(a) {
        return function() {
            return this[a]
        }
    }
    function ea(a) {
        return function() {
            return a
        }
    }
    var fa, ga = [];
    function ha(a) {
        return function() {
            return ga[a].apply(this, arguments)
        }
    }
    function ia(a, b) {
        return ga[a] = b
    }
    var ja, z = ja = z || {
        version: "1.3.4"
    };
    z.aa = "$BAIDU$";
    window[z.aa] = window[z.aa] || {};
    z.object = z.object || {};
    z.extend = z.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    ;
    z.D = z.D || {};
    z.D.$ = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : s
    }
    ;
    z.$ = z.zc = z.D.$;
    z.D.U = function(a) {
        a = z.D.$(a);
        if (a === s)
            return a;
        a.style.display = "none";
        return a
    }
    ;
    z.U = z.D.U;
    z.lang = z.lang || {};
    z.lang.kg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    z.kg = z.lang.kg;
    z.lang.gm = function(a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a)
                return t;
            return p
        }
        return t
    }
    ;
    z.gm = z.lang.gm;
    z.D.zj = function(a) {
        return z.lang.kg(a) ? document.getElementById(a) : a
    }
    ;
    z.zj = z.D.zj;
    z.D.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == s && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"), f = e.length, g = RegExp("(^|\\s)" + b + "(\\s|$)"), i, k;
            for (k = i = 0; i < f; i++)
                g.test(e[i].className) && (c[k] = e[i],
                k++)
        }
        return c
    }
    ;
    z.getElementsByClassName = z.D.getElementsByClassName;
    z.D.contains = function(a, b) {
        var c = z.D.zj
          , a = c(a)
          , b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    z.ca = z.ca || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (z.ca.ia = z.ia = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > z.ca.ia ? (ka["for"] = "htmlFor",
    ka["class"] = "className") : (ka.htmlFor = "for",
    ka.className = "class");
    z.D.EF = ka;
    z.D.jE = function(a, b, c) {
        a = z.D.$(a);
        if (a === s)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = z.D.EF[b] || b;
            a.setAttribute(b, c)
        }
        return a
    }
    ;
    z.jE = z.D.jE;
    z.D.kE = function(a, b) {
        a = z.D.$(a);
        if (a === s)
            return a;
        for (var c in b)
            z.D.jE(a, c, b[c]);
        return a
    }
    ;
    z.kE = z.D.kE;
    z.Dk = z.Dk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        z.Dk.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    }
    )();
    z.trim = z.Dk.trim;
    z.Dk.uo = function(a, b) {
        var a = "" + a
          , c = Array.prototype.slice.call(arguments, 1)
          , e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    }
    ;
    z.uo = z.Dk.uo;
    z.D.nc = function(a, b) {
        a = z.D.$(a);
        if (a === s)
            return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    }
    ;
    z.nc = z.D.nc;
    z.D.Ww = function(a, b, c) {
        a = z.D.$(a);
        if (a === s)
            return a;
        var e;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    }
    ;
    z.Ww = z.D.Ww;
    z.D.show = function(a) {
        a = z.D.$(a);
        if (a === s)
            return a;
        a.style.display = "";
        return a
    }
    ;
    z.show = z.D.show;
    z.D.HC = function(a) {
        a = z.D.$(a);
        return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    z.D.Za = function(a, b) {
        a = z.D.$(a);
        if (a === s)
            return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++)
            f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    }
    ;
    z.Za = z.D.Za;
    z.D.LA = z.D.LA || {};
    z.D.vl = z.D.vl || [];
    z.D.vl.filter = function(a, b, c) {
        for (var e = 0, f = z.D.vl, g; g = f[e]; e++)
            if (g = g[c])
                b = g(a, b);
        return b
    }
    ;
    z.Dk.vN = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    ;
    z.D.h_ = function(a) {
        z.D.ns(a, "expand") ? z.D.nc(a, "expand") : z.D.Za(a, "expand")
    }
    ;
    z.D.ns = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        z.forEach(this, function(a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                }
            c !== t && (c = p)
        });
        return c
    }
    ;
    z.D.jg = function(a, b) {
        var c = z.D
          , a = c.$(a);
        if (a === s)
            return a;
        var b = z.Dk.vN(b)
          , e = a.style[b];
        if (!e)
            var f = c.LA[b]
              , e = a.currentStyle || (z.ca.ia ? a.style : getComputedStyle(a, s))
              , e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.vl)
            e = f.filter(b, e, "get");
        return e
    }
    ;
    z.jg = z.D.jg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.opera = +RegExp.$1);
    z.ca.jL = /webkit/i.test(navigator.userAgent);
    z.ca.EX = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    z.ca.vD = "CSS1Compat" == document.compatMode;
    z.D.fa = function(a) {
        a = z.D.$(a);
        if (a === s)
            return a;
        var b = z.D.HC(a)
          , c = z.ca
          , e = z.D.jg;
        c.EX > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
            left: 0,
            top: 0
        }, g;
        if (a == (c.ia && !c.vD ? b.body : b.documentElement))
            return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.ia && !c.vD) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.jL > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);if (c.opera > 0 || c.jL > 0 && e(a, "position") == "absolute")
                f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body; ) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR")
                    f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.Me = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (z.ca.h1 = p);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (z.ca.Fx = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.Tv = +RegExp.$1);
    z.cc = z.cc || {};
    z.cc.Jb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t)
                    break
            }
        return a
    }
    ;
    z.Jb = z.cc.Jb;
    z.lang.aa = function() {
        return "TANGRAM__" + (window[z.aa]._counter++).toString(36)
    }
    ;
    window[z.aa]._counter = window[z.aa]._counter || 1;
    window[z.aa]._instances = window[z.aa]._instances || {};
    z.lang.As = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    z.lang.Ca = function(a) {
        this.aa = a || z.lang.aa();
        window[z.aa]._instances[this.aa] = this
    }
    ;
    window[z.aa]._instances = window[z.aa]._instances || {};
    z.lang.Ca.prototype.Mh = ha(0);
    z.lang.Ca.prototype.toString = function() {
        return "[object " + (this.tP || "Object") + "]"
    }
    ;
    z.lang.Tt = function(a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || s;
        this.currentTarget = s
    }
    ;
    z.lang.Ca.prototype.addEventListener = function(a, b, c) {
        if (z.lang.As(b)) {
            !b.Nk && (b.Nk = {});
            !this.ri && (this.ri = {});
            var e = this.ri, f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && ba("nonstandard key:" + c);
                f = b.Nw = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.Nk[a] != "object" && (b.Nk[a] = {});
            f = f || z.lang.aa();
            b.Nk[a].Nw = f;
            e[a][f] = b
        }
    }
    ;
    z.lang.Ca.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (z.lang.As(b)) {
            if (!b.Nk || !b.Nk[a])
                return;
            b = b.Nk[a].Nw
        } else if (!z.lang.kg(b))
            return;
        !this.ri && (this.ri = {});
        var c = this.ri;
        c[a] && c[a][b] && delete c[a][b]
    }
    ;
    z.lang.Ca.prototype.dispatchEvent = function(a, b) {
        z.lang.kg(a) && (a = new z.lang.Tt(a));
        !this.ri && (this.ri = {});
        var b = b || {}, c;
        for (c in b)
            a[c] = b[c];
        var e = this.ri
          , f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        z.lang.As(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f])
                e[f][c].apply(this, arguments);
        return a.returnValue
    }
    ;
    z.lang.sa = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g)
            f[e] = g[e];
        a.prototype.constructor = a;
        a.VZ = b.prototype;
        if ("string" == typeof c)
            f.tP = c
    }
    ;
    z.sa = z.lang.sa;
    z.lang.Hc = function(a) {
        return window[z.aa]._instances[a] || s
    }
    ;
    z.platform = z.platform || {};
    z.platform.cL = /macintosh/i.test(navigator.userAgent);
    z.platform.m3 = /MicroMessenger/i.test(navigator.userAgent);
    z.platform.kL = /windows/i.test(navigator.userAgent);
    z.platform.OX = /x11/i.test(navigator.userAgent);
    z.platform.fj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.eB = z.eB = RegExp.$1);
    z.platform.GX = /ipad/i.test(navigator.userAgent);
    z.platform.rD = /iphone/i.test(navigator.userAgent);
    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    z.lang.kw = function(a) {
        var b = window[z.aa];
        b.zR && delete b.zR[a]
    }
    ;
    z.event = {};
    z.M = z.event.M = function(a, b, c) {
        if (!(a = z.$(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    }
    ;
    z.Yc = z.event.Yc = function(a, b, c) {
        if (!(a = z.$(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    }
    ;
    z.D.ns = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    }
    ;
    z.OJ = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
            this.RJ = this.mk ? "touchstart" : "mousedown",
            this.pC = this.mk ? "touchmove" : "mousemove",
            this.oC = this.mk ? "touchend" : "mouseup",
            this.$g = t,
            this.yt = this.xt = 0,
            this.element.addEventListener(this.RJ, this, t),
            ja.M(this.element, "mousedown", u()),
            this.handleEvent(s))
        }
        a.prototype = {
            mk: "ontouchstart"in window || "createTouch"in document,
            start: function(a) {
                na(a);
                this.$g = t;
                this.xt = this.mk ? a.touches[0].clientX : a.clientX;
                this.yt = this.mk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.pC, this, t);
                this.element.addEventListener(this.oC, this, t)
            },
            move: function(a) {
                oa(a);
                var c = this.mk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.mk ? a.touches[0].clientX : a.clientX) - this.xt) || 10 < Math.abs(c - this.yt))
                    this.$g = p
            },
            end: function(a) {
                oa(a);
                this.$g || (a = document.createEvent("Event"),
                a.initEvent("tap", t, p),
                this.element.dispatchEvent(a));
                this.element.removeEventListener(this.pC, this, t);
                this.element.removeEventListener(this.oC, this, t)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                    case this.RJ:
                        this.start(a);
                        break;
                    case this.pC:
                        this.move(a);
                        break;
                    case this.oC:
                        this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var D = window.BMap || {};
    D.version = "3.0";
    D.Z0 = 0.34 > Math.random();
    0 <= D.version.indexOf("#") && (D.version = "3.0");
    D.Rq = [];
    D.Se = function(a) {
        this.Rq.push(a)
    }
    ;
    D.Hq = [];
    D.pm = function(a) {
        this.Hq.push(a)
    }
    ;
    D.NT = D.apiLoad || u();
    D.G_ = D.verify || function() {
        //cqy 屏蔽ak验证
        return;
        D.version && D.version >= 1.5 && pa(D.Ud + "?qt=verify&ak=" + qa, function(a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.Qa().innerHTML = "";
                    map.ri = {}
                }
                D = s;
                var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                switch (a.error) {
                case 101:
                    b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    break;
                case 102:
                    b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                }
                alert(b)
            }
        })
    }
    ;
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = s;
    var sa = window.BMap_loadScriptTime
      , ta = (new Date).getTime()
      , ua = s
      , wa = p
      , xa = 5042
      , za = 5002
      , Aa = 5003
      , Ba = "load_mapclick"
      , Ca = 5038
      , Da = 5041
      , Fa = 5047
      , Ga = 5036
      , Ia = 5039
      , Ja = 5037
      , Ka = 5040
      , La = 5011
      , Ma = 7E3;
    var Na = 0;
    function Oa(a, b) {
        if (a = z.$(a)) {
            var c = this;
            z.lang.Ca.call(c);
            b = b || {};
            c.K = {
                rB: 200,
                Rb: p,
                qw: t,
                eC: p,
                po: p,
                ro: b.enableWheelZoom || t,
                MJ: p,
                hC: p,
                Sr: p,
                Rr: p,
                lC: p,
                no: b.enable3DBuilding || t,
                Cc: 25,
                T_: 240,
                AT: 450,
                tc: H.tc,
                zd: H.zd,
                Bs: !!b.Bs,
                Zb: Math.round(b.minZoom) || 1,
                jc: Math.round(b.maxZoom) || 19,
                wb: b.mapType || Pa,
                o4: t,
                JJ: b.drawer || Na,
                ow: p,
                nw: 500,
                DV: b.enableHighResolution !== t,
                gC: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                TE: 99,
                se: b.mapStyle || s,
                WX: b.logoControl === t ? t : p,
                UT: [],
                k1: b.beforeClickIcon || s,
                Ti: t,
                qo: t,
                io: t,
                UL: p
            };
            c.K.se && (this.sX(c.K.se.controls),
            this.YK(c.K.se.geotableId));
            c.K.se && c.K.se.styleId && c.J2(c.K.se.styleId);
            c.K.uB = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.K.Rr = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.K.lC = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.K.MJ = b.enableDeepZoom);
            var e = c.K.UT;
            if (I())
                for (var f = 0, g = e.length; f < g; f++)
                    if (z.ca[e[f]]) {
                        c.K.devicePixelRatio = 1;
                        break
                    }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f)
                c.K.TE = 99;
            c.Ua = a;
            c.EA(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.va());
            b.size && this.we(b.size);
            e = c.Ab();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.te = c.platform.firstChild;
            c.te.style.width = c.width + "px";
            c.te.style.height = c.height + "px";
            c.Qd = {};
            c.le = new J(0,0);
            c.mc = new J(0,0);
            c.Sa = 3;
            c.wc = 0;
            c.FB = s;
            c.EB = s;
            c.Qb = "";
            c.Uv = "";
            c.uh = {};
            c.uh.custom = {};
            c.ti = {};
            c.Ra = 0;
            b.useWebGL === t && Qa(t);
            c.P = new Ra(a,{
                df: "api",
                ER: p
            });
            c.P.U();
            c.P.pE(c);
            b = b || {};
            e = c.wb = c.K.wb;
            c.Kc = e.jk();
            e === Sa && Ta(za);
            e === Va && Ta(Aa);
            e = c.K;
            e.ON = Math.round(b.minZoom);
            e.NN = Math.round(b.maxZoom);
            c.lu();
            c.R = {
                Dc: t,
                dc: 0,
                Gs: 0,
                qL: 0,
                r3: 0,
                jB: t,
                ZD: -1,
                ne: []
            };
            c.platform.style.cursor = c.K.tc;
            for (f = 0; f < D.Rq.length; f++)
                D.Rq[f](c);
            c.R.ZD = f;
            c.ba();
            L.load("map", function() {
                c.fb()
            });
            c.K.gC && (setTimeout(function() {
                Ta(Ba)
            }, 1E3),
            L.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.aa] = new Wa(c)
            }, p));
            Xa() && L.load("oppc", function() {
                c.bu()
            });
            I() && L.load("opmb", function() {
                c.bu()
            });
            a = s;
            c.SA = []
        }
    }
    z.lang.sa(Oa, z.lang.Ca, "Map");
    z.extend(Oa.prototype, {
        va: function() {
            var a = O("div")
              , b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = O("div", {
                "class": "BMap_mask"
            })
              , c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        EA: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Ya(a).position && (b.position = "relative",
            b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ba: function() {
            var a = this;
            a.On = function() {
                var b = a.Ab();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new P(a.width,a.height)
                      , e = new Q("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.Sj((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.te.style.width = (a.width = b.width) + "px";
                    a.te.style.height = (a.height = b.height) + "px";
                    c = new Q("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            }
            ;
            a.K.Rr && (a.R.Fl = setInterval(a.On, 80))
        },
        Sj: function(a, b, c, e) {
            var f = this.ra().hc(this.ga())
              , g = this.Kc
              , i = p;
            c && J.bL(c) && (this.le = new J(c.lng,c.lat),
            i = t);
            if (c = c && e ? g.Xh(c, this.Qb) : this.mc)
                if (this.mc = new J(c.lng + a * f,c.lat - b * f),
                (a = g.Zg(this.mc, this.Qb)) && i)
                    this.le = a
        },
        ug: function(a, b) {
            if (Za(a) && (this.lu(),
            this.dispatchEvent(new Q("onzoomstart")),
            a = this.ln(a).zoom,
            a !== this.Sa)) {
                this.wc = this.Sa;
                this.Sa = a;
                var c;
                b ? c = b : this.Vg() && (c = this.Vg().fa());
                c && (c = this.Nb(c, this.wc),
                this.Sj(this.width / 2 - c.x, this.height / 2 - c.y, this.Bb(c, this.wc), p));
                this.dispatchEvent(new Q("onzoomstartcode"))
            }
        },
        Lc: function(a) {
            this.ug(a)
        },
        ZE: function(a) {
            this.ug(this.Sa + 1, a)
        },
        $E: function(a) {
            this.ug(this.Sa - 1, a)
        },
        ei: function(a) {
            a instanceof J && (this.mc = this.Kc.Xh(a, this.Qb),
            this.le = J.bL(a) ? new J(a.lng,a.lat) : this.Kc.Zg(this.mc, this.Qb))
        },
        pg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.Sj(-a, -b)
        },
        Gv: function(a) {
            a && $a(a.Be) && (a.Be(this),
            this.dispatchEvent(new Q("onaddcontrol",a)))
        },
        DM: function(a) {
            a && $a(a.remove) && (a.remove(),
            this.dispatchEvent(new Q("onremovecontrol",a)))
        },
        Sn: function(a) {
            a && $a(a.ta) && (a.ta(this),
            this.dispatchEvent(new Q("onaddcontextmenu",a)))
        },
        Xo: function(a) {
            a && $a(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu",a)),
            a.remove())
        },
        La: function(a) {
            a && $a(a.Be) && (a.Be(this),
            this.dispatchEvent(new Q("onaddoverlay",a)))
        },
        Ob: function(a) {
            a && $a(a.remove) && (a.remove(),
            this.dispatchEvent(new Q("onremoveoverlay",a)))
        },
        eJ: function() {
            this.dispatchEvent(new Q("onclearoverlays"))
        },
        Ie: function(a) {
            a && this.dispatchEvent(new Q("onaddtilelayer",a))
        },
        Pf: function(a) {
            a && this.dispatchEvent(new Q("onremovetilelayer",a))
        },
        sg: function(a) {
            if (this.wb !== a) {
                var b = new Q("onsetmaptype");
                b.g4 = this.wb;
                this.wb = this.K.wb = a;
                this.Kc = this.wb.jk();
                this.Sj(0, 0, this.ub(), p);
                this.lu();
                var c = this.ln(this.ga()).zoom;
                this.ug(c);
                this.dispatchEvent(b);
                b = new Q("onmaptypechange");
                b.Sa = c;
                b.wb = a;
                this.dispatchEvent(b);
                (a === ab || a === Va) && Ta(Aa)
            }
        },
        lf: function(a) {
            var b = this;
            if (a instanceof J)
                b.ei(a, {
                    noAnimation: p
                });
            else if (bb(a))
                if (b.wb === Sa) {
                    var c = H.nB[a];
                    c && (pt = c.k,
                    b.lf(pt))
                } else {
                    var e = this.HG();
                    e.it(function(c) {
                        0 === e.Xl() && 2 === e.Ia.result.type && (b.lf(c.ik(0).point),
                        Sa.ek(a) && b.mE(a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        xd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            D.Lp("cus.fire", "time", {
                z_loadscripttime: ta - sa
            });
            var c = this;
            if (bb(a))
                if (c.wb === Sa) {
                    var e = H.nB[a];
                    e && (pt = e.k,
                    c.xd(pt, b))
                } else {
                    var f = c.HG();
                    f.it(function(e) {
                        if (0 === f.Xl() && (2 === f.Ia.result.type || 11 === f.Ia.result.type)) {
                            var e = e.ik(0).point
                              , g = b || db.uw(f.Ia.content.level, c);
                            c.xd(e, g);
                            Sa.ek(a) && c.mE(a)
                        }
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if (a instanceof J && b) {
                b = c.ln(b).zoom;
                c.wc = c.Sa || b;
                c.Sa = b;
                e = c.le;
                c.le = new J(a.lng,a.lat);
                c.mc = c.Kc.Xh(c.le, c.Qb);
                c.FB = c.FB || c.Sa;
                c.EB = c.EB || c.le;
                var g = new Q("onload")
                  , i = new Q("onloadcode");
                g.point = new J(a.lng,a.lat);
                g.pixel = c.Nb(c.le, c.Sa);
                g.zoom = b;
                c.loaded || (c.loaded = p,
                c.dispatchEvent(g),
                ua || (ua = eb()));
                c.dispatchEvent(i);
                g = new Q("onmoveend");
                g.az = "centerAndZoom";
                e.gc(c.le) || c.dispatchEvent(g);
                c.dispatchEvent(new Q("onmoveend"));
                c.wc !== c.Sa && (e = new Q("onzoomend"),
                e.az = "centerAndZoom",
                c.dispatchEvent(e));
                c.K.no && c.no()
            }
        },
        HG: function() {
            this.R.CL || (this.R.CL = new fb(1));
            return this.R.CL
        },
        reset: function() {
            this.xd(this.EB, this.FB, p)
        },
        enableDragging: function() {
            this.K.Rb = p
        },
        disableDragging: function() {
            this.K.Rb = t
        },
        enableInertialDragging: function() {
            this.K.ow = p
        },
        disableInertialDragging: function() {
            this.K.ow = t
        },
        enableScrollWheelZoom: function() {
            this.K.ro = p
        },
        disableScrollWheelZoom: function() {
            this.K.ro = t
        },
        enableContinuousZoom: function() {
            this.K.po = p
        },
        disableContinuousZoom: function() {
            this.K.po = t
        },
        enableDoubleClickZoom: function() {
            this.K.eC = p
        },
        disableDoubleClickZoom: function() {
            this.K.eC = t
        },
        enableKeyboard: function() {
            this.K.qw = p
        },
        disableKeyboard: function() {
            this.K.qw = t
        },
        enablePinchToZoom: function() {
            this.K.Sr = p
        },
        disablePinchToZoom: function() {
            this.K.Sr = t
        },
        enableAutoResize: function() {
            this.K.Rr = p;
            this.On();
            this.R.Fl || (this.R.Fl = setInterval(this.On, 80))
        },
        disableAutoResize: function() {
            this.K.Rr = t;
            this.R.Fl && (clearInterval(this.R.Fl),
            this.R.Fl = s)
        },
        no: function() {
            this.K.no = p;
            this.Ym || (this.Ym = new BuildingLayer({
                T1: p
            }),
            this.Ie(this.Ym))
        },
        dV: function() {
            this.K.no = t;
            this.Ym && (this.Pf(this.Ym),
            this.Ym = s,
            delete this.Ym)
        },
        Ab: function() {
            return this.Er && this.Er instanceof P ? new P(this.Er.width,this.Er.height) : new P(this.Ua.clientWidth,this.Ua.clientHeight)
        },
        we: function(a) {
            a && a instanceof P ? (this.Er = a,
            this.Ua.style.width = a.width + "px",
            this.Ua.style.height = a.height + "px") : this.Er = s
        },
        ub: x("le"),
        ga: x("Sa"),
        sU: function() {
            this.On()
        },
        ln: function(a) {
            var b = this.K.Zb
              , c = this.K.jc
              , e = t
              , a = Math.round(a);
            a < b && (e = p,
            a = b);
            a > c && (e = p,
            a = c);
            return {
                zoom: a,
                qC: e
            }
        },
        Qa: x("Ua"),
        Nb: function(a, b) {
            b = b || this.ga();
            return this.Kc.Nb(a, b, this.mc, this.Ab(), this.Qb)
        },
        Bb: function(a, b) {
            b = b || this.ga();
            return this.Kc.Bb(a, b, this.mc, this.Ab(), this.Qb)
        },
        Re: function(a, b) {
            if (a) {
                var c = this.Nb(new J(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        mM: function(a, b) {
            if (a) {
                var c = new R(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Bb(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Qb;
            this.wb === Sa && c && gb.kJ(a, this, b)
        },
        X3: function(a, b) {
            var c = map.Qb;
            this.wb === Sa && c && gb.jJ(a, this, b)
        },
        Y3: function(a, b) {
            var c = this
              , e = map.Qb;
            c.wb === Sa && e && gb.kJ(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        U3: function(a, b) {
            var c = map.Qb;
            this.wb === Sa && c && (a.x += this.offsetX,
            a.y += this.offsetY,
            gb.jJ(a, this, b))
        },
        pe: function(a) {
            if (!this.Zw())
                return new hb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || s
              , b = this.Bb({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.Bb({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new hb(b,a)
        },
        Zw: function() {
            return !!this.loaded
        },
        IQ: function(a, b) {
            for (var c = this.ra(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.Xi(), k = c = c.Sh(); k >= i; k--) {
                var m = this.ra().hc(k);
                if (a.KE().lng / m < this.width - g && a.KE().lat / m < this.height - e)
                    break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        ls: function(a, b) {
            var c = {
                center: this.ub(),
                zoom: this.ga()
            };
            if (!a || !a instanceof hb && 0 === a.length || a instanceof hb && a.hj())
                return c;
            var e = [];
            a instanceof hb ? (e.push(a.Hf()),
            e.push(a.Oe())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++)
                f.push(this.Kc.Xh(e[g], this.Qb));
            e = new hb;
            for (g = f.length - 1; 0 <= g; g--)
                e.extend(f[g]);
            if (e.hj())
                return c;
            c = e.ub();
            f = this.IQ(e, b);
            b.margins && (e = b.margins,
            g = (e[1] - e[3]) / 2,
            e = (e[0] - e[2]) / 2,
            i = this.ra().hc(f),
            b.offset && (g = b.offset.width,
            e = b.offset.height),
            c.lng += i * g,
            c.lat += i * e);
            c = this.Kc.Zg(c, this.Qb);
            return {
                center: c,
                zoom: f
            }
        },
        hh: function(a, b) {
            var c;
            c = a && a.center ? a : this.ls(a, b);
            var b = b || {}
              , e = b.delay || 200;
            if (c.zoom === this.Sa && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() {
                    f.ei(c.center, {
                        duration: 210
                    })
                }, e)
            } else
                this.xd(c.center, c.zoom)
        },
        If: x("Qd"),
        Vg: function() {
            return this.R.nb && this.R.nb.Va() ? this.R.nb : s
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.gc(b))
                    return 0;
                var c = 0
                  , c = S.yo(a, b);
                if (c === s || c === l)
                    c = 0;
                return c
            }
        },
        Gw: function() {
            var a = []
              , b = this.xa
              , c = this.ye;
            if (b)
                for (var e in b)
                    b[e]instanceof ib && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++)
                    a.push(c[e])
            }
            return a
        },
        ra: x("wb"),
        UW: x("ud"),
        bu: function() {
            for (var a = this.R.ZD; a < D.Rq.length; a++)
                D.Rq[a](this);
            this.R.ZD = a
        },
        mE: function(a) {
            this.Qb = Sa.ek(a);
            this.Uv = Sa.fK(this.Qb);
            this.wb === Sa && this.Kc instanceof jb && (this.Kc.Pi = this.Qb)
        },
        setDefaultCursor: function(a) {
            this.K.tc = a;
            this.platform && (this.platform.style.cursor = this.K.tc)
        },
        getDefaultCursor: function() {
            return this.K.tc
        },
        setDraggingCursor: function(a) {
            this.K.zd = a
        },
        getDraggingCursor: function() {
            return this.K.zd
        },
        Sw: function() {
            return this.K.DV && 1.5 <= this.K.devicePixelRatio
        },
        XA: function(a, b) {
            b ? this.uh[b] || (this.uh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof kb && (this.uh[b][a.aa] = a,
            a.ta(this));
            var c = this;
            L.load("hotspot", function() {
                c.bu()
            }, p)
        },
        RY: function(a, b) {
            b || (b = "custom");
            this.uh[b][a.aa] && delete this.uh[b][a.aa]
        },
        Wv: function(a) {
            a || (a = "custom");
            this.uh[a] = {}
        },
        lu: function() {
            var a = this.wb.Xi()
              , b = this.wb.Sh()
              , c = this.K;
            c.Zb = c.ON || a;
            c.jc = c.NN || b;
            c.Zb < a && (c.Zb = a);
            c.jc > b && (c.jc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.K.jc && (a = this.K.jc);
            this.K.ON = a;
            this.pI()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.K.Zb && (a = this.K.Zb);
            this.K.NN = a;
            this.pI()
        },
        pI: function() {
            this.lu();
            var a = this.K;
            this.Sa < a.Zb ? this.Lc(a.Zb) : this.Sa > a.jc && this.Lc(a.jc);
            var b = new Q("onzoomspanchange");
            b.Zb = a.Zb;
            b.jc = a.jc;
            this.dispatchEvent(b)
        },
        L2: x("SA"),
        getKey: function() {
            return qa
        },
        vZ: function(a) {
            var b = this;
            D.Lp("cus.fire", "count", "z_setmapstylev2count");
            this.$M(t);
            this.addEventListener("hidecopyright", function() {
                b.Xj.U();
                b.K.io = !!a.customEditor;
                b.K.io === t && b.lE(new P(1,1))
            });
            b.Xj && b.Xj.U();
            this.K.io = !!a.customEditor;
            this.K.io === t && this.lE(new P(1,1));
            L.load("hotspot", function() {
                b.bu()
            }, p);
            window.kh = {};
            window.Mt = [];
            window.Ha = {};
            var c = this.ga()
              , e = {};
            z.extend(e, a);
            window.cb = function(a) {
                if (z.gm(window.kh))
                    window.iy = a,
                    b.QE(c);
                else {
                    b.KN(a, c);
                    b.QE(c);
                    var a = b.lU(window.kh, c), f;
                    for (f in a) {
                        var k = {};
                        z.extend(k, e);
                        b.DW(f, k)
                    }
                }
                b.zX()
            }
            ;
            var f = D.Ud + "custom/v2/mapstyle?ak=" + qa + "&callback=cb&";
            a.styleJson ? f += "styles=" + encodeURIComponent(b.mN(a.styleJson, c)) : a.style && (f += "customid=" + a.style);
            window.iconSetInfo_high || pa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi");
            pa(f)
        },
        DW: function(a, b) {
            var c = this
              , e = (1E5 * Math.random()).toFixed(0);
            window["_cbk" + e] = function(b) {
                c.KN(b, a);
                c.QE(a);
                b = new Q("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window["_cbk" + e]
            }
            ;
            var f = D.Ud + "custom/v2/mapstyle?ak=" + qa + "&callback=_cbk" + e + "&";
            b.styleJson ? f += "styles=" + encodeURIComponent(this.mN(b.styleJson, parseInt(a, 10))) : b.style && (f += "customid=" + b.style);
            pa(f)
        },
        lE: function(a, b) {
            var c = new Q("oncopyrightoffsetchange",{
                VX: a,
                NU: b
            });
            this.K.oJ = b;
            this.dispatchEvent(c)
        },
        dt: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.aa] && window.MPC_Mgr[b.aa].close();
            b.K.gC = t;
            D.Lp("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.SZ(a.styleJson));
                I() && z.ca.Fx ? setTimeout(function() {
                    b.K.se = a;
                    b.dispatchEvent(new Q("onsetcustomstyles",a))
                }, 50) : (this.K.se = a,
                this.dispatchEvent(new Q("onsetcustomstyles",a)),
                this.YK(b.K.se.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Ta(5050, c);
                a.style && (c = b.K.uB[a.style] ? b.K.uB[a.style].backColor : b.K.uB.normal.backColor) && (this.Qa().style.backgroundColor = c)
            }
        },
        sX: function(a) {
            this.controls || (this.controls = {
                navigationControl: new lb,
                scaleControl: new mb,
                overviewMapControl: new nb,
                mapTypeControl: new ob
            });
            var b = this, c;
            for (c in this.controls)
                b.DM(b.controls[c]);
            a = a || [];
            z.cc.Jb(a, function(a) {
                b.Gv(b.controls[a])
            })
        },
        YK: function(a) {
            a ? this.Cr && this.Cr.tf === a || (this.Pf(this.Cr),
            this.Cr = new pb({
                geotableId: a
            }),
            this.Ie(this.Cr)) : this.Pf(this.Cr)
        },
        Hd: function() {
            var a = this.ga() >= this.K.TE && this.ra() === Pa && 18 >= this.ga()
              , b = t;
            try {
                document.createElement("canvas").getContext("2d"),
                b = p
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.Og,
                code: this.qr
            }
        },
        hs: function() {
            this.P.vn();
            return this.P
        },
        wX: function(a) {
            Pa.setMaxZoom(a.maxZoom || 19);
            var b = new Q("oninitindoorlayer");
            b.Pe = a;
            this.dispatchEvent(b);
            this.K.Ti = t
        },
        zX: function(a) {
            if (this.K.Ti) {
                var b = new Q("onupdatestyles");
                this.dispatchEvent(b)
            } else
                b = new Q("oninitindoorlayer"),
                b.Pe = a,
                this.dispatchEvent(b),
                this.K.Ti = p,
                this.K.qo = p
        },
        $M: function(a) {
            this.K.UL = a;
            this.ki.$b.parentElement.style.display = a ? "block" : "none"
        },
        setPanorama: function(a) {
            this.P = a;
            this.P.pE(this)
        },
        mN: function(a, b) {
            var c = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            }
              , e = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i"
            }
              , f = [];
            window.Ha[b] = {};
            for (var g = 0, i; i = a[g]; g++)
                if (!this.HX(i) && (window.kh = this.bX(i, window.kh),
                this.IX(i, b))) {
                    if (("land" === i.featureType || "all" === i.featureType || "background" === i.featureType) && "string" === typeof i.elementType && ("geometry" === i.elementType || "geometry.fill" === i.elementType || "all" === i.elementType) && i.stylers)
                        if (i.stylers.color && (window.Ha[b].bmapLandColor = i.stylers.color,
                        window.Ha[b].pL = p,
                        window.bmapLandColor = i.stylers.color),
                        i.stylers.visibility && "off" === i.stylers.visibility)
                            window.Ha[b].bmapLandColor = "#00000000",
                            window.Ha[b].pL = p,
                            window.bmapLandColor = "#00000000";
                    if ("railway" === i.featureType && "string" === typeof i.elementType && i.stylers) {
                        if (i.stylers.color && ("geometry" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color,
                        window.bmapRailwayStrokeColor = i.stylers.color,
                        window.Ha[b].bmapRailwayFillColor = i.stylers.color,
                        window.Ha[b].bmapRailwayStrokeColor = i.stylers.color,
                        window.Ha[b].zM = p,
                        window.Ha[b].AM = p),
                        "geometry.fill" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color,
                        window.Ha[b].bmapRailwayFillColor = i.stylers.color,
                        window.Ha[b].zM = p),
                        "geometry.stroke" === i.elementType))
                            window.bmapRailwayStrokeColor = i.stylers.color,
                            window.Ha[b].bmapRailwayStrokeColor = i.stylers.color,
                            window.Ha[b].AM = p;
                        i.stylers.visibility && (window.bmapRailwayVisibility = i.stylers.visibility,
                        window.Ha[b].bmapRailwayVisibility = i.stylers.visibility,
                        window.Ha[b].OY = p)
                    }
                    "roadarrow" === i.featureType && ("labels.icon" === i.elementType && i.stylers) && (window.bmapRoadarrowVisibility = i.stylers.visibility,
                    window.Ha[b].bmapRoadarrowVisibility = i.stylers.visibility,
                    window.Ha[b].YY = p);
                    var k = {};
                    z.extend(k, i);
                    i = k.stylers;
                    delete k.stylers;
                    z.extend(k, i);
                    i = [];
                    for (var m in c)
                        if (k[m] && !this.DX(m))
                            if ("elementType" === m)
                                i.push(c[m] + ":" + e[k[m]]);
                            else {
                                switch (k[m]) {
                                case "poilabel":
                                    k[m] = "poi";
                                    break;
                                case "districtlabel":
                                    k[m] = "label"
                                }
                                i.push(c[m] + ":" + k[m])
                            }
                    2 < i.length && f.push(i.join("|"))
                }
            !window.Ha[b].pL && window.Ha[b].bmapLandColor && delete window.Ha[b].bmapLandColor;
            !window.Ha[b].zM && window.Ha[b].bmapRailwayFillColor && delete window.Ha[b].bmapRailwayFillColor;
            !window.Ha[b].AM && window.Ha[b].bmapRailwayStrokeColor && delete window.Ha[b].bmapRailwayStrokeColor;
            !window.Ha[b].OY && window.Ha[b].bmapRailwayVisibility && delete window.Ha[b].bmapRailwayVisibility;
            !window.Ha[b].YY && window.Ha[b].bmapRoadarrowVisibility && delete window.Ha[b].bmapRoadarrowVisibility;
            return f.join(",")
        },
        SZ: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                z.extend(g, i);
                var i = [], k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k)
                            i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                            case "poilabel":
                                g[k] = "poi";
                                break;
                            case "districtlabel":
                                g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        HX: function(a) {
            var b = {};
            z.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return z.gm(b) ? p : t
        },
        IX: function(a, b) {
            var c = a.stylers.level;
            return c === l ? p : c === b + "" ? p : t
        },
        DX: function(a) {
            return {
                curZoomRegionId: p,
                curZoomRegion: p
            }[a] ? p : t
        },
        bX: function(a, b) {
            var c = a.stylers.level
              , e = {};
            z.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = p);
            return e
        },
        KN: function(a, b) {
            window.Mt[b] = a;
            if (!window.kh[b])
                for (var c = this.wb.Xi(), e = this.wb.Sh(); c <= e; c++)
                    window.kh[c] || (window.Mt[c] = a)
        },
        QE: function(a) {
            if (!window.kh[a])
                for (var b = this.wb.Xi(), c = this.wb.Sh(); b <= c; b++)
                    window.kh[b] || (window.Ha[b] || (window.Ha[b] = {}),
                    window.Ha[b].bmapLandColor = window.Ha[a].bmapLandColor,
                    window.Ha[b].bmapRailwayFillColor = window.Ha[a].bmapRailwayFillColor,
                    window.Ha[b].bmapRailwayStrokeColor = window.Ha[a].bmapRailwayStrokeColor)
        },
        lU: function(a, b) {
            var c = {};
            z.extend(c, a);
            if (c[b]) {
                for (var e = this.wb.Xi(), f = this.wb.Sh(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = p;
                        break
                    }
                delete c[b]
            }
            return c
        },
        h3: function(a) {
            return a.zs || "0" === a.uid ? t : p
        },
        wU: function() {
            delete this.ti.GY
        },
        r1: function() {
            this.ti = {}
        },
        Rn: function(a, b, c) {
            if (!this.K.io)
                return t;
            a = a || "sp" + this.R.G4++;
            if (b && 0 !== b.length)
                return c = c || {},
                this.ti[a] = this.ti[a] || {
                    polygon: [],
                    polyline: []
                },
                this.ti = this.ti || {},
                this.ti[a][c.type].push({
                    yE: b,
                    jd: c.jd,
                    type: c.type,
                    style: c.style
                }),
                a
        }
    });
    function Ta(a, b) {
        if (a) {
            var b = b || {}, c = "", e;
            for (e in b)
                c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) {
                a && (qb = p,
                setTimeout(function() {
                    rb.src = D.Ud + "images/blank.gif?" + a.src
                }, 50))
            }
              , g = function() {
                var a = sb.shift();
                a && f(a)
            };
            e = (1E8 * Math.random()).toFixed(0);
            qb ? sb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            tb || (z.M(rb, "load", function() {
                qb = t;
                g()
            }),
            z.M(rb, "error", function() {
                qb = t;
                g()
            }),
            tb = p)
        }
    }
    var qb, tb, sb = [], rb = new Image;
    Ta(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    D.SK = {
        TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["gss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    D.jX = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "pcsv0.map.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    D.w_ = {
        "0": {
            proto: "http://",
            domain: D.jX
        },
        1: {
            proto: "https://",
            domain: D.SK
        },
        2: {
            proto: "https://",
            domain: D.SK
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    D.Ht = window.HOST_TYPE || "0";
    D.url = D.w_[D.Ht];
    D.Qo = D.url.proto + D.url.domain.baidumap + "/";
    D.Ud = D.url.proto + ("2" == D.Ht ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
    D.ka = D.url.proto + ("2" == D.Ht ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_cdn.baidu[0]) + "/";
    D.Ni = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
    D.Th = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = D.Ud + b;
            break;
        case "main_domain_cdn":
            c = D.ka + b;
            break;
        default:
            e = D.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(e) ? (c = [],
            z.cc.Jb(e, function(a, e) {
                c[e] = D.url.proto + a + "/" + b
            })) : c = D.url.proto + D.url.domain[a] + "/" + b
        }
        return c
    }
    ;
    function ub(a) {
        var b = {
            duration: 1E3,
            Cc: 30,
            ko: 0,
            Vb: vb.yL,
            Qs: u()
        };
        this.Sf = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.j = b;
        if (Za(b.ko)) {
            var e = this;
            setTimeout(function() {
                e.start()
            }, b.ko)
        } else
            b.ko != wb && this.start()
    }
    var wb = "INFINITE";
    ub.prototype.start = function() {
        this.du = eb();
        this.$y = this.du + this.j.duration;
        xb(this)
    }
    ;
    ub.prototype.add = function(a) {
        this.Sf.push(a)
    }
    ;
    function xb(a) {
        var b = eb();
        b >= a.$y ? ($a(a.j.va) && a.j.va(a.j.Vb(1)),
        $a(a.j.finish) && a.j.finish(),
        0 < a.Sf.length && (b = a.Sf[0],
        b.Sf = [].concat(a.Sf.slice(1)),
        b.start())) : (a.Gx = a.j.Vb((b - a.du) / a.j.duration),
        $a(a.j.va) && a.j.va(a.Gx),
        a.EE || (a.kr = setTimeout(function() {
            xb(a)
        }, 1E3 / a.j.Cc)))
    }
    ub.prototype.stop = function(a) {
        this.EE = p;
        for (var b = 0; b < this.Sf.length; b++)
            this.Sf[b].stop(),
            this.Sf[b] = s;
        this.Sf.length = 0;
        this.kr && (clearTimeout(this.kr),
        this.kr = s);
        this.j.Qs(this.Gx);
        a && (this.$y = this.du,
        xb(this))
    }
    ;
    ub.prototype.cancel = ha(1);
    var vb = {
        yL: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        $B: function(a) {
            return a * a
        },
        YB: function(a) {
            return Math.pow(a, 3)
        },
        Pr: function(a) {
            return -(a * (a - 2))
        },
        KJ: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        ZB: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        J1: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        K1: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    vb["ease-in"] = vb.$B;
    vb["ease-out"] = vb.Pr;
    var H = {
        cF: 34,
        dF: 21,
        eF: new P(21,32),
        dO: new P(10,32),
        cO: new P(24,36),
        bO: new P(12,36),
        aF: new P(13,1),
        oa: D.ka + "images/",
        b3: "http://api0.map.bdimg.com/images/",
        bF: D.ka + "images/markers_new.png",
        $N: 24,
        aO: 73,
        nB: {
            "\u5317\u4eac": {
                wx: "bj",
                k: new J(116.403874,39.914889)
            },
            "\u4e0a\u6d77": {
                wx: "sh",
                k: new J(121.487899,31.249162)
            },
            "\u6df1\u5733": {
                wx: "sz",
                k: new J(114.025974,22.546054)
            },
            "\u5e7f\u5dde": {
                wx: "gz",
                k: new J(113.30765,23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    z.ca.Me ? (z.extend(H, {
        wJ: "url(" + H.oa + "ruler.cur),crosshair",
        tc: "-moz-grab",
        zd: "-moz-grabbing"
    }),
    z.platform.kL && (H.fontFamily = "arial,simsun,sans-serif")) : z.ca.Tv || z.ca.Fx ? z.extend(H, {
        wJ: "url(" + H.oa + "ruler.cur) 2 6,crosshair",
        tc: "url(" + H.oa + "openhand.cur) 8 8,default",
        zd: "url(" + H.oa + "closedhand.cur) 8 8,move"
    }) : z.extend(H, {
        wJ: "url(" + H.oa + "ruler.cur),crosshair",
        tc: "url(" + H.oa + "openhand.cur),default",
        zd: "url(" + H.oa + "closedhand.cur),move"
    });
    function yb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function zb(a) {
        0 < z.ca.ia ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function Ab(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Bb(a, b) {
        z.D.Ww(a, "beforeEnd", b);
        return a.lastChild
    }
    function Cb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent; )
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }
    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }
    function Db(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }
    function oa(a) {
        na(a);
        return Db(a)
    }
    function Eb() {
        var a = document.documentElement
          , b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Fb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Gb(a, b) {
        var c = [], b = b || function(a) {
            return a
        }
        , e;
        for (e in a)
            c.push(e + "=" + b(a[e]));
        return c.join("&")
    }
    function O(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return z.D.kE(e, b || {})
    }
    function Ya(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, s)
    }
    function $a(a) {
        return "function" === typeof a
    }
    function Za(a) {
        return "number" === typeof a
    }
    function bb(a) {
        return "string" == typeof a
    }
    function Hb(a) {
        return "undefined" != typeof a
    }
    function Ib(a) {
        return "object" == typeof a
    }
    var Jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Kb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1
              , f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e,
            f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++)
            e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++)
            e = b.substr(5 * c, 5),
            f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }
    function Lb(a) {
        var b = "", c, e, f = "", g, i = "", k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Jb.indexOf(a.charAt(k++)),
            e = Jb.indexOf(a.charAt(k++)),
            g = Jb.indexOf(a.charAt(k++)),
            i = Jb.indexOf(a.charAt(k++)),
            c = c << 2 | e >> 4,
            e = (e & 15) << 4 | g >> 2,
            f = (g & 3) << 6 | i,
            b += String.fromCharCode(c),
            64 != g && (b += String.fromCharCode(e)),
            64 != i && (b += String.fromCharCode(f));
        while (k < a.length);return b
    }
    var Q = z.lang.Tt;
    function I() {
        return !(!z.platform.rD && !z.platform.GX && !z.platform.fj)
    }
    function Xa() {
        return !(!z.platform.kL && !z.platform.cL && !z.platform.OX)
    }
    function eb() {
        return (new Date).getTime()
    }
    function Mb() {
        var a = document.body.appendChild(O("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : p;
        a.parentNode.removeChild(a);
        return b
    }
    function Nb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Ob() {
        return !!O("canvas").getContext
    }
    function Pb(a) {
        return a * Math.PI / 180
    }
    D.UX = function() {
        var a = p
          , b = p
          , c = p
          , e = p
          , f = 0
          , g = 0
          , i = 0
          , k = 0;
        return {
            EP: function() {
                f += 1;
                a && (a = t,
                setTimeout(function() {
                    Ta(5054, {
                        pic: f
                    });
                    a = p;
                    f = 0
                }, 1E4))
            },
            m0: function() {
                g += 1;
                b && (b = t,
                setTimeout(function() {
                    Ta(5055, {
                        move: g
                    });
                    b = p;
                    g = 0
                }, 1E4))
            },
            o0: function() {
                i += 1;
                c && (c = t,
                setTimeout(function() {
                    Ta(5056, {
                        zoom: i
                    });
                    c = p;
                    i = 0
                }, 1E4))
            },
            n0: function(a) {
                k += a;
                e && (e = t,
                setTimeout(function() {
                    Ta(5057, {
                        tile: k
                    });
                    e = p;
                    k = 0
                }, 5E3))
            }
        }
    }();
    D.Bp = {
        rF: "#83a1ff",
        Dp: "#808080"
    };
    function Qb(a, b, c) {
        b.HD || (b.HD = [],
        b.handle = {});
        b.HD.push({
            filter: c,
            Wr: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        }
        );
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b; ) {
                Rb(b.HD, function(b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.Wr.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t),
        b.handle.click = p)
    }
    function Rb(a, b) {
        for (var c = 0, e = a.length; c < e; c++)
            b(c, a[c])
    }
    void function(a, b, c) {
        void function(a, b, c) {
            function i(a) {
                if (!a.jo) {
                    for (var c = p, e = [], g = a.UY, k = 0; g && k < g.length; k++) {
                        var m = g[k]
                          , n = da[m] = da[m] || {};
                        if (n.jo || n == a)
                            e.push(n.Hc);
                        else {
                            c = t;
                            if (!n.ZU && (m = (va.get("alias") || {})[m] || m + ".js",
                            !N[m])) {
                                N[m] = p;
                                var o = b.createElement("script")
                                  , q = b.getElementsByTagName("script")[0];
                                o.async = p;
                                o.src = m;
                                q.parentNode.insertBefore(o, q)
                            }
                            n.Zx = n.Zx || {};
                            n.Zx[a.name] = a
                        }
                    }
                    if (c) {
                        a.jo = p;
                        a.rJ && (a.Hc = a.rJ.apply(a, e));
                        for (var v in a.Zx)
                            i(a.Zx[v])
                    }
                }
            }
            function k(a) {
                return (a || new Date) - F
            }
            function m(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = K);
                    try {
                        a == K ? (M[b] = M[b] || [],
                        M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (e) {}
                }
            }
            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = K);
                    try {
                        if (a == K) {
                            var e = M[b];
                            if (e)
                                for (var f = e.length; f--; )
                                    e[f] === c && e.splice(f, 1)
                        } else
                            a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (g) {}
                }
            }
            function o(a) {
                var b = M[a]
                  , c = 0;
                if (b) {
                    for (var e = [], f = arguments, g = 1; g < f.length; g++)
                        e.push(f[g]);
                    for (g = b.length; g--; )
                        b[g].apply(this, e) && c++;
                    return c
                }
            }
            function q(a, b) {
                if (a && b) {
                    var c = new Image(1,1), e = [], f = "img_" + +new Date, g;
                    for (g in b)
                        b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    K[f] = c;
                    c.onload = c.onerror = function() {
                        K[f] = c = c.onload = c.onerror = s;
                        delete K[f]
                    }
                    ;
                    c.src = a + "?" + e.join("&")
                }
            }
            function v() {
                var a = arguments
                  , b = a[0];
                if (this.qJ || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++)
                        c.push(a[e]);
                    "function" == typeof b && b.apply(this, c)
                } else
                    this.QI.push(a)
            }
            function w(a, b) {
                var c = {}, e;
                for (e in a)
                    a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b)
                    b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }
            function y(a) {
                this.name = a;
                this.Ur = {
                    protocolParameter: {
                        postUrl: s,
                        protocolParameter: s
                    }
                };
                this.QI = [];
                this.alog = K
            }
            function A(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [], b;
                    for (b in T)
                        a.push(T[b]);
                    return a
                }
                (b = T[a]) || (b = T[a] = new y(a));
                return b
            }
            var B = c.alog;
            if (!B || !B.jo) {
                var C = b.all && a.attachEvent
                  , F = B && B.zD || +new Date
                  , E = a.u3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3)
                  , G = 0
                  , N = {}
                  , K = function(a) {
                    var b = arguments, c, e, f, g;
                    if ("define" == a || "require" == a) {
                        for (e = 1; e < b.length; e++)
                            switch (typeof b[e]) {
                            case "string":
                                c = b[e];
                                break;
                            case "object":
                                f = b[e];
                                break;
                            case "function":
                                g = b[e]
                            }
                        "require" == a && (c && !f && (f = [c]),
                        c = s);
                        c = !c ? "#" + G++ : c;
                        e = da[c] = da[c] || {};
                        e.jo || (e.name = c,
                        e.UY = f,
                        e.rJ = g,
                        "define" == a && (e.ZU = p),
                        i(e))
                    } else
                        "function" == typeof a ? a(K) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, e) {
                            b[0] = e;
                            v.apply(K.OE(c), b)
                        })
                }
                  , M = {}
                  , T = {}
                  , da = {
                    b1: {
                        name: "alog",
                        jo: p,
                        Hc: K
                    }
                };
                y.prototype.start = y.prototype.create = function(a) {
                    if (!this.qJ) {
                        "object" == typeof a && this.set(a);
                        this.qJ = new Date;
                        for (this.Vr("create", this); a = this.QI.shift(); )
                            v.apply(this, a)
                    }
                }
                ;
                y.prototype.send = function(a, b) {
                    var c = w({
                        ts: k().toString(36),
                        t: a,
                        sid: E
                    }, this.Ur);
                    if ("object" == typeof b)
                        c = w(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                        case "pageview":
                            e[1] && (c.page = e[1]);
                            e[2] && (c.title = e[2]);
                            break;
                        case "event":
                            e[1] && (c.eventCategory = e[1]);
                            e[2] && (c.eventAction = e[2]);
                            e[3] && (c.eventLabel = e[3]);
                            e[4] && (c.eventValue = e[4]);
                            break;
                        case "timing":
                            e[1] && (c.timingCategory = e[1]);
                            e[2] && (c.timingVar = e[2]);
                            e[3] && (c.timingValue = e[3]);
                            e[4] && (c.timingLabel = e[4]);
                            break;
                        case "exception":
                            e[1] && (c.exDescription = e[1]);
                            e[2] && (c.exFatal = e[2]);
                            break;
                        default:
                            return
                        }
                    }
                    this.Vr("send", c);
                    var f;
                    if (e = this.Ur.protocolParameter) {
                        var g = {};
                        for (f in c)
                            e[f] !== s && (g[e[f] || f] = c[f]);
                        f = g
                    } else
                        f = c;
                    q(this.Ur.postUrl, f)
                }
                ;
                y.prototype.set = function(a, b) {
                    if ("string" == typeof a)
                        "protocolParameter" == a && (b = w({
                            postUrl: s,
                            protocolParameter: s
                        }, b)),
                        this.Ur[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a)
                            this.set(c, a[c])
                }
                ;
                y.prototype.get = function(a, b) {
                    var c = this.Ur[a];
                    "function" == typeof b && b(c);
                    return c
                }
                ;
                y.prototype.Vr = function(a, b) {
                    return K.Vr(this.name + "." + a, b)
                }
                ;
                y.prototype.M = function(a, b) {
                    K.M(this.name + "." + a, b)
                }
                ;
                y.prototype.Yc = function(a, b) {
                    K.Yc(this.name + "." + a, b)
                }
                ;
                K.name = "alog";
                K.jd = E;
                K.jo = p;
                K.timestamp = k;
                K.Yc = n;
                K.M = m;
                K.Vr = o;
                K.OE = A;
                K("init");
                var aa = y.prototype;
                U(aa, {
                    start: aa.start,
                    create: aa.create,
                    send: aa.send,
                    set: aa.set,
                    get: aa.get,
                    on: aa.M,
                    un: aa.Yc,
                    fire: aa.Vr
                });
                var va = A();
                va.set("protocolParameter", {
                    a1: s
                });
                if (B) {
                    aa = [].concat(B.tb || [], B.Xs || []);
                    B.tb = B.Xs = s;
                    for (var ya in K)
                        K.hasOwnProperty(ya) && (B[ya] = K[ya]);
                    K.tb = K.Xs = {
                        push: function(a) {
                            K.apply(K, a)
                        }
                    };
                    for (B = 0; B < aa.length; B++)
                        K.apply(K, aa[B])
                }
                c.alog = K;
                C && m(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ea = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (Ea ? i = t : Ea = p);
                    i && c.alog("exception.send", "exception", {
                        Ms: a,
                        yD: b,
                        Is: e,
                        Kl: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        Ms: a.Ms,
                        yD: a.path,
                        Is: a.Is,
                        method: a.method,
                        VJ: "catch"
                    })
                })
            }
        }(a, b, c);
        void function(a, b, c) {
            var i = "18_3";
            I() && (i = "18_4");
            var k = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random
              , k = k + "/tb/pms/img/st.gif"
              , n = {
                fh: "0.1"
            }
              , o = {
                fh: "0.1"
            }
              , q = {
                fh: "0.1"
            }
              , v = {
                fh: "0"
            };
            if (n && n.fh && m() < n.fh) {
                var w = c.alog.OE("monkey"), y, n = a.screen, A = b.referrer;
                w.set("ver", 5);
                w.set("pid", 241);
                n && w.set("px", n.width + "*" + n.height);
                w.set("ref", A);
                c.alog("monkey.on", "create", function() {
                    y = c.alog.timestamp;
                    w.set("protocolParameter", {
                        reports: s
                    })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36),
                    a.now = "")
                });
                c.alog("monkey.create", {
                    page: i,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: k,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (o && o.fh && m() < o.fh) {
                var B = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (B ? i = t : B = p);
                    i && c.alog("exception.send", "exception", {
                        Ms: a,
                        yD: b,
                        Is: e,
                        Kl: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        Ms: a.Ms,
                        yD: a.path,
                        Is: a.Is,
                        method: a.method,
                        VJ: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: k,
                    dv: 7,
                    page: i,
                    pid: "170",
                    p: "18"
                })
            }
            q && (q.fh && m() < q.fh) && (c.alog("cus.on", "time", function(a) {
                var b = {}, e = t, f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a)
                        "page" == i ? b.page = a[i] : (f = parseInt(a[i]),
                        0 < f && /^z_/.test(i) && (e = p,
                        b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }),
            c.alog("cus.on", "count", function(a) {
                var b = {}
                  , e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var f = 0; f < a.length; f++)
                        /^z_/.test(a[f]) ? (e = p,
                        b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }),
            c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
            }));
            if (v && v.fh && m() < v.fh) {
                var C = ["Moz", "O", "ms", "Webkit"]
                  , F = ["-webkit-", "-moz-", "-o-", "-ms-"]
                  , E = function() {
                    return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                }
                  , G = E("dpFeatureTest").style
                  , N = function(a) {
                    return K(a, l, l)
                }
                  , K = function(a, b, c) {
                    var e = a.charAt(0).toUpperCase() + a.slice(1)
                      , f = (a + " " + C.join(e + " ") + e).split(" ");
                    if (typeof b === "string" || typeof b === "undefined")
                        return M(f, b);
                    f = (a + " " + C.join(e + " ") + e).split(" ");
                    a: {
                        var a = f, g;
                        for (g in a)
                            if (a[g]in b) {
                                if (c === t) {
                                    b = a[g];
                                    break a
                                }
                                g = b[a[g]];
                                b = typeof g === "function" ? fnBind(g, c || b) : g;
                                break a
                            }
                        b = t
                    }
                    return b
                }
                  , M = function(a, b) {
                    var c, e, f;
                    e = a.length;
                    for (c = 0; c < e; c++) {
                        f = a[c];
                        ~("" + f).indexOf("-") && (f = T(f));
                        if (G[f] !== l)
                            return b == "pfx" ? f : p
                    }
                    return t
                }
                  , T = function(a) {
                    return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                        return b + c.toUpperCase()
                    }).replace(/^-/, "")
                }
                  , da = function(a, b, c) {
                    if (a.indexOf("@") === 0)
                        return atRule(a);
                    a.indexOf("-") != -1 && (a = T(a));
                    return !b ? K(a, "pfx") : K(a, b, c)
                }
                  , aa = function() {
                    var a = E("canvas");
                    return !(!a.getContext || !a.getContext("2d"))
                }
                  , va = function() {
                    var a = E("div");
                    return "draggable"in a || "ondragstart"in a && "ondrop"in a
                }
                  , ya = function() {
                    try {
                        localStorage.setItem("localStorage", "localStorage");
                        localStorage.removeItem("localStorage");
                        return p
                    } catch (a) {
                        return t
                    }
                }
                  , Ea = function() {
                    return "content"in b.createElement("template")
                }
                  , ra = function() {
                    return "createShadowRoot"in b.createElement("a")
                }
                  , Ua = function() {
                    return "registerElement"in b
                }
                  , re = function() {
                    return "import"in b.createElement("link")
                }
                  , Oc = function() {
                    return "getItems"in b
                }
                  , Di = function() {
                    return "EventSource"in window
                }
                  , se = function(a, b) {
                    var c = new Image;
                    c.onload = function() {
                        b(a, c.width > 0 && c.height > 0)
                    }
                    ;
                    c.onerror = function() {
                        b(a, t)
                    }
                    ;
                    c.src = "data:image/webp;base64," + {
                        x3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        w3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        Uj: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    }[a]
                }
                  , te = function(a, b) {
                    return Vb.Oh["WebP-" + a] = b
                }
                  , Ei = function() {
                    return "openDatabase"in a
                }
                  , Fi = function() {
                    return "performance"in a && "timing"in a.performance
                }
                  , Gi = function() {
                    return "performance"in a && "mark"in a.performance
                }
                  , Hi = function() {
                    return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                }
                  , Ii = function() {
                    return "Promise"in a && "cast"in a.Ep && "resolve"in a.Ep && "reject"in a.Ep && "all"in a.Ep && "race"in a.Ep && function() {
                        var b;
                        new a.Ep(function(a) {
                            b = a
                        }
                        );
                        return typeof b === "function"
                    }()
                }
                  , Ji = function() {
                    var b = !!a.$_
                      , c = a.XMLHttpRequest && "withCredentials"in new XMLHttpRequest;
                    return !!a.d0 && b && c
                }
                  , Ki = function() {
                    return "geolocation"in navigator
                }
                  , Li = function() {
                    var b = E("canvas")
                      , c = "probablySupportsContext"in b ? "probablySupportsContext" : "supportsContext";
                    return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext"in a
                }
                  , Mi = function() {
                    return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").w1
                }
                  , Ni = function() {
                    return !!a.k0
                }
                  , Oi = function() {
                    return "WebSocket"in a && a.h0.X_ === 2
                }
                  , Pi = function() {
                    return !!b.createElement("video").canPlayType
                }
                  , Qi = function() {
                    return !!b.createElement("audio").canPlayType
                }
                  , Ri = function() {
                    return !!(a.history && "pushState"in a.history)
                }
                  , Si = function() {
                    return !(!a.Y_ || !a.Z_)
                }
                  , Ti = function() {
                    return "postMessage"in window
                }
                  , Ui = function() {
                    return !!a.webkitNotifications || "Notification"in a && "permission"in a.wO && "requestPermission"in a.wO
                }
                  , Vi = function() {
                    for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f)
                        c = a[b[f] + "RequestAnimationFrame"];
                    return !!c
                }
                  , Wi = function() {
                    return "JSON"in a && "parse"in JSON && "stringify"in JSON
                }
                  , Xi = function() {
                    return !(!da("exitFullscreen", b, t) && !da("cancelFullScreen", b, t))
                }
                  , Yi = function() {
                    return !!da("Intl", a)
                }
                  , Zi = function() {
                    return N("flexBasis")
                }
                  , $i = function() {
                    return !!N("perspective")
                }
                  , aj = function() {
                    return N("shapeOutside")
                }
                  , bj = function() {
                    var a = E("div");
                    a.style.cssText = F.join("filter:blur(2px); ");
                    return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                }
                  , cj = function() {
                    return "XMLHttpRequest"in a && "withCredentials"in new XMLHttpRequest
                }
                  , dj = function() {
                    return E("progress").max !== l
                }
                  , ej = function() {
                    return E("meter").max !== l
                }
                  , fj = function() {
                    return "sendBeacon"in navigator
                }
                  , gj = function() {
                    return N("borderRadius")
                }
                  , hj = function() {
                    return N("boxShadow")
                }
                  , ij = function() {
                    var a = E("div").style;
                    a.cssText = F.join("opacity:.55;");
                    return /^0.55$/.test(a.opacity)
                }
                  , jj = function() {
                    return M(["textShadow"], l)
                }
                  , kj = function() {
                    return N("animationName")
                }
                  , lj = function() {
                    return N("transition")
                }
                  , mj = function() {
                    return navigator.userAgent.indexOf("Android 2.") === -1 && N("transform")
                }
                  , Vb = {
                    Oh: {},
                    na: function(a, b, c) {
                        this.Oh[a] = b.apply(this, [].slice.call(arguments, 2))
                    },
                    vd: function(a, b) {
                        a.apply(this, [].slice.call(arguments, 1))
                    },
                    $Y: function() {
                        this.na("bdrs", gj);
                        this.na("bxsd", hj);
                        this.na("opat", ij);
                        this.na("txsd", jj);
                        this.na("anim", kj);
                        this.na("trsi", lj);
                        this.na("trfm", mj);
                        this.na("flex", Zi);
                        this.na("3dtr", $i);
                        this.na("shpe", aj);
                        this.na("fltr", bj);
                        this.na("cavs", aa);
                        this.na("dgdp", va);
                        this.na("locs", ya);
                        this.na("wctem", Ea);
                        this.na("wcsdd", ra);
                        this.na("wccse", Ua);
                        this.na("wchti", re);
                        this.vd(se, "lossy", te);
                        this.vd(se, "lossless", te);
                        this.vd(se, "alpha", te);
                        this.vd(se, "animation", te);
                        this.na("wsql", Ei);
                        this.na("natm", Fi);
                        this.na("ustm", Gi);
                        this.na("arra", Hi);
                        this.na("prms", Ii);
                        this.na("xhr2", Ji);
                        this.na("wbgl", Li);
                        this.na("geol", Ki);
                        this.na("svg", Mi);
                        this.na("work", Ni);
                        this.na("wbsk", Oi);
                        this.na("vido", Pi);
                        this.na("audo", Qi);
                        this.na("hsty", Ri);
                        this.na("file", Si);
                        this.na("psmg", Ti);
                        this.na("wknf", Ui);
                        this.na("rqaf", Vi);
                        this.na("json", Wi);
                        this.na("flsc", Xi);
                        this.na("i18n", Yi);
                        this.na("cors", cj);
                        this.na("prog", dj);
                        this.na("metr", ej);
                        this.na("becn", fj);
                        this.na("mcrd", Oc);
                        this.na("esrc", Di)
                    }
                }
                  , w = c.alog.OE("feature");
                w.M("commit", function() {
                    Vb.$Y();
                    var a = setInterval(function() {
                        if ("WebP-lossy"in Vb.Oh && "WebP-lossless"in Vb.Oh && "WebP-alpha"in Vb.Oh && "WebP-animation"in Vb.Oh) {
                            for (var b in Vb.Oh)
                                Vb.Oh[b] = Vb.Oh[b] ? "y" : "n";
                            w.send("feature", Vb.Oh);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", {
                    H1: 4,
                    c4: k,
                    page: i,
                    tb: "18"
                });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, D);
    D.Lp = D.alog || u();
    D.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");
    function Sb(a) {
        var b = window.TILE_VERSION
          , c = "20170927";
        b && b.ditu && (b = b.ditu,
        b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    ;function pa(a, b) {
        //if (/^http/.test(a))  return;//cqy修改  屏蔽ak验证，若调用外部资源直接返回
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete D._rd["_cbk" + c]
            }
            ;
            a += "&callback=BMap._rd._cbk" + c
        }
        var e = O("script", {
            type: "text/javascript"
        });
        e.charset = "utf-8";
        e.src = a;
        e.addEventListener ? e.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(e);
            e = s
        }, 1)
    }
    ;var Tb = {
        map: "wyz2kl",
        common: "fg5m5w",
        style: "zogfyg",
        tile: "1f5x1d",
        groundoverlay: "gtkye4",
        pointcollection: "umykm1",
        marker: "pgokqn",
        symbol: "r5shqt",
        canvablepath: "fckbbh",
        vmlcontext: "5nirzq",
        markeranimation: "mntuuz",
        poly: "airezy",
        draw: "nbxwoz",
        drawbysvg: "ffhomk",
        drawbyvml: "nius3m",
        drawbycanvas: "estnbk",
        infowindow: "grea4q",
        oppc: "3z0xdl",
        opmb: "0jcs3b",
        menu: "vzwp0n",
        control: "sbbfnu",
        navictrl: "1zf43j",
        geoctrl: "ka3hyd",
        copyrightctrl: "3ye5lo",
        citylistcontrol: "uplgf4",
        scommon: "j0jtop",
        local: "oebxfg",
        route: "qqxaot",
        othersearch: "2bowtd",
        mapclick: "aw42p1",
        buslinesearch: "sgztn3",
        hotspot: "eih5pk",
        autocomplete: "gkuaex",
        coordtrans: "bnkq4y",
        coordtransutils: "qeme0s",
        convertor: "jj2uip",
        clayer: "j31s4l",
        pservice: "eu1gfy",
        pcommon: "urk1py",
        panorama: "mbz3vg",
        panoramaflash: "w4ciry"
    };
    z.Sx = function() {
        function a(a) {
            return e && !!c[b + a + "_" + Tb[a]]
        }
        var b = "BMap_"
          , c = window.localStorage
          , e = "localStorage"in window && c !== s && c !== l;
        return {
            JX: e,
            set: function(a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--; )
                        m = c.key(k),
                        -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Tb[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function(f) {
                return e && a(f) ? c.getItem(b + f + "_" + Tb[f]) : t
            },
            bJ: a
        }
    }();
    function L() {}
    z.object.extend(L, {
        pj: {
            sF: -1,
            KO: 0,
            xp: 1
        },
        iK: function() {
            var a = "canvablepath";
            if (!I() || !Ob())
                Nb() || (Mb() ? a = "vmlcontext" : Ob());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        f4: {},
        kF: {
            TO: D.ka + "getmodules?v=3.0",
            pT: 5E3
        },
        GB: t,
        Jd: {
            el: {},
            Sm: [],
            kv: []
        },
        load: function(a, b, c) {
            var e = this.hb(a);
            if (e.Ge == this.pj.xp)
                c && b();
            else {
                if (e.Ge == this.pj.sF) {
                    this.gJ(a);
                    this.xM(a);
                    var f = this;
                    f.GB == t && (f.GB = p,
                    setTimeout(function() {
                        for (var a = [], b = 0, c = f.Jd.Sm.length; b < c; b++) {
                            var e = f.Jd.Sm[b]
                              , n = "";
                            ja.Sx.bJ(e) ? n = ja.Sx.get(e) : (n = "",
                            a.push(e + "_" + Tb[e]));
                            f.Jd.kv.push({
                                OL: e,
                                MD: n
                            })
                        }
                        f.GB = t;
                        f.Jd.Sm.length = 0;
                        0 == a.length ? f.QJ() : pa(f.kF.TO + "&mod=" + a.join(","))
                    }, 1));
                    e.Ge = this.pj.KO
                }
                e.hu.push(b)
            }
        },
        gJ: function(a) {
            if (a && this.iK()[a])
                for (var a = this.iK()[a], b = 0; b < a.length; b++)
                    this.gJ(a[b]),
                    this.Jd.el[a[b]] || this.xM(a[b])
        },
        xM: function(a) {
            for (var b = 0; b < this.Jd.Sm.length; b++)
                if (this.Jd.Sm[b] == a)
                    return;
            this.Jd.Sm.push(a)
        },
        ZY: function(a, b) {
            var c = this.hb(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Ge = this.pj.xp;
            for (var f = 0, g = c.hu.length; f < g; f++)
                c.hu[f]();
            c.hu.length = 0
        },
        bJ: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Jd.el[a].Ge != c.pj.xp ? (c.remove(a),
                c.load(a, b)) : clearTimeout(c.timeout)
            }, c.kF.pT)
        },
        hb: function(a) {
            this.Jd.el[a] || (this.Jd.el[a] = {},
            this.Jd.el[a].Ge = this.pj.sF,
            this.Jd.el[a].hu = []);
            return this.Jd.el[a]
        },
        remove: function(a) {
            delete this.hb(a)
        },
        pU: function(a, b) {
            for (var c = this.Jd.kv, e = p, f = 0, g = c.length; f < g; f++)
                "" == c[f].MD && (c[f].OL == a ? c[f].MD = b : e = t);
            e && this.QJ()
        },
        QJ: function() {
            for (var a = this.Jd.kv, b = 0, c = a.length; b < c; b++)
                this.ZY(a[b].OL, a[b].MD);
            this.Jd.kv.length = 0
        }
    });
    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    R.prototype.gc = function(a) {
        return a && a.x == this.x && a.y == this.y
    }
    ;
    function P(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    P.prototype.gc = function(a) {
        return a && this.width == a.width && this.height == a.height
    }
    ;
    function kb(a, b) {
        a && (this.Hb = a,
        this.aa = "spot" + kb.aa++,
        b = b || {},
        this.Kg = b.text || "",
        this.Qu = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.QA = b.userData || s,
        this.xh = b.minZoom || s,
        this.yf = b.maxZoom || s)
    }
    kb.aa = 0;
    z.extend(kb.prototype, {
        ta: function(a) {
            this.xh == s && (this.xh = a.K.Zb);
            this.yf == s && (this.yf = a.K.jc)
        },
        qa: function(a) {
            a instanceof J && (this.Hb = a)
        },
        fa: x("Hb"),
        jt: ca("Kg"),
        XC: x("Kg"),
        setUserData: ca("QA"),
        getUserData: x("QA")
    });
    function Ub() {
        this.B = s;
        this.Ib = "control";
        this.Oa = this.VI = p
    }
    z.lang.sa(Ub, z.lang.Ca, "Control");
    z.extend(Ub.prototype, {
        initialize: function(a) {
            this.B = a;
            if (this.C)
                return a.Ua.appendChild(this.C),
                this.C
        },
        Be: function(a) {
            !this.C && (this.initialize && $a(this.initialize)) && (this.C = this.initialize(a));
            this.j = this.j || {
                rg: t
            };
            this.EA();
            this.Zq();
            this.C && (this.C.zq = this)
        },
        EA: function() {
            var a = this.C;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.By || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.j.rg || z.D.Za(a, "BMap_noprint");
                I() || z.M(a, "contextmenu", oa)
            }
        },
        remove: function() {
            this.B = s;
            this.C && (this.C.parentNode && this.C.parentNode.removeChild(this.C),
            this.C = this.C.zq = s)
        },
        Aa: function() {
            this.C = Bb(this.B.Ua, "<div unselectable='on'></div>");
            this.Oa == t && z.D.U(this.C);
            return this.C
        },
        Zq: function() {
            this.oc(this.j.anchor)
        },
        oc: function(a) {
            if (this.c1 || !Za(a) || isNaN(a) || a < Wb || 3 < a)
                a = this.defaultAnchor;
            this.j = this.j || {
                rg: t
            };
            this.j.za = this.j.za || this.defaultOffset;
            var b = this.j.anchor;
            this.j.anchor = a;
            if (this.C) {
                var c = this.C
                  , e = this.j.za.width
                  , f = this.j.za.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case Wb:
                    c.style.top = f + "px";
                    c.style.left = e + "px";
                    break;
                case Xb:
                    c.style.top = f + "px";
                    c.style.right = e + "px";
                    break;
                case Yb:
                    c.style.bottom = f + "px";
                    c.style.left = e + "px";
                    break;
                case 3:
                    c.style.bottom = f + "px",
                    c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                z.D.nc(this.C, "anchor" + c[b]);
                z.D.Za(this.C, "anchor" + c[a])
            }
        },
        zC: function() {
            return this.j.anchor
        },
        getContainer: x("C"),
        de: function(a) {
            a instanceof P && (this.j = this.j || {
                rg: t
            },
            this.j.za = new P(a.width,a.height),
            this.C && this.oc(this.j.anchor))
        },
        Yi: function() {
            return this.j.za
        },
        Bd: x("C"),
        show: function() {
            this.Oa != p && (this.Oa = p,
            this.C && z.D.show(this.C))
        },
        U: function() {
            this.Oa != t && (this.Oa = t,
            this.C && z.D.U(this.C))
        },
        isPrintable: function() {
            return !!this.j.rg
        },
        Ic: function() {
            return !this.C && !this.B ? t : !!this.Oa
        }
    });
    var Wb = 0
      , Xb = 1
      , Yb = 2;
    function lb(a) {
        Ub.call(this);
        a = a || {};
        this.j = {
            rg: t,
            xE: a.showZoomInfo || p,
            anchor: a.anchor,
            za: a.offset,
            type: a.type,
            CV: a.enableGeolocation || t
        };
        this.defaultAnchor = I() ? 3 : Wb;
        this.defaultOffset = new P(10,10);
        this.oc(a.anchor);
        this.Cm(a.type);
        this.qf()
    }
    z.lang.sa(lb, Ub, "NavigationControl");
    z.extend(lb.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        Cm: function(a) {
            this.j.type = Za(a) && 0 <= a && 3 >= a ? a : 0
        },
        Go: function() {
            return this.j.type
        },
        qf: function() {
            var a = this;
            L.load("navictrl", function() {
                a.pf()
            })
        }
    });
    function Zb(a) {
        Ub.call(this);
        a = a || {};
        this.j = {
            anchor: a.anchor || Yb,
            za: a.offset || new P(10,30),
            IZ: a.showAddressBar !== t,
            M1: a.enableAutoLocation || t,
            GL: a.locationIcon || s
        };
        var b = this;
        this.By = 1200;
        b.z_ = [];
        this.je = [];
        L.load("geoctrl", function() {
            (function e() {
                if (0 !== b.je.length) {
                    var a = b.je.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            }
            )();
            b.SO()
        });
        Ta(Ma)
    }
    z.lang.sa(Zb, Ub, "GeolocationControl");
    z.extend(Zb.prototype, {
        location: function() {
            this.je.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: ea(s)
    });
    function $b(a) {
        Ub.call(this);
        a = a || {};
        this.j = {
            rg: t,
            anchor: a.anchor,
            za: a.offset
        };
        this.Xb = [];
        this.defaultAnchor = Yb;
        this.defaultOffset = new P(5,2);
        this.oc(a.anchor);
        this.VI = t;
        this.qf()
    }
    z.lang.sa($b, Ub, "CopyrightControl");
    z.object.extend($b.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        Hv: function(a) {
            if (a && Za(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: s,
                    content: ""
                }, c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.Sl(a.id))
                    for (var e in b)
                        a[e] = b[e];
                else
                    this.Xb.push(b)
            }
        },
        Sl: function(a) {
            for (var b = 0, c = this.Xb.length; b < c; b++)
                if (this.Xb[b].id == a)
                    return this.Xb[b]
        },
        GC: x("Xb"),
        $D: function(a) {
            for (var b = 0, c = this.Xb.length; b < c; b++)
                this.Xb[b].id == a && (r = this.Xb.splice(b, 1),
                b--,
                c = this.Xb.length)
        },
        qf: function() {
            var a = this;
            L.load("copyrightctrl", function() {
                a.pf()
            })
        }
    });
    function nb(a) {
        Ub.call(this);
        a = a || {};
        this.j = {
            rg: t,
            size: a.size || new P(150,150),
            padding: 5,
            Va: a.isOpen === p ? p : t,
            R_: 4,
            za: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new P(0,0);
        this.Qp = this.Rp = 13;
        this.oc(a.anchor);
        this.we(this.j.size);
        this.qf()
    }
    z.lang.sa(nb, Ub, "OverviewMapControl");
    z.extend(nb.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        oc: function(a) {
            Ub.prototype.oc.call(this, a)
        },
        me: function() {
            this.me.Dn = p;
            this.j.Va = !this.j.Va;
            this.C || (this.me.Dn = t)
        },
        we: function(a) {
            a instanceof P || (a = new P(150,150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.j.size = a
        },
        Ab: function() {
            return this.j.size
        },
        Va: function() {
            return this.j.Va
        },
        qf: function() {
            var a = this;
            L.load("control", function() {
                a.pf()
            })
        }
    });
    function ac(a) {
        Ub.call(this);
        a = a || {};
        this.defaultAnchor = Wb;
        this.nU = a.canCheckSize === t ? t : p;
        this.Pi = "";
        this.defaultOffset = new P(10,10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.j = {
            rg: t,
            za: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && $a(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && $a(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && $a(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.oc(a.anchor);
        this.qf()
    }
    z.lang.sa(ac, Ub, "CityListControl");
    z.object.extend(ac.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        qf: function() {
            var a = this;
            L.load("citylistcontrol", function() {
                a.pf()
            }, p)
        }
    });
    function mb(a) {
        Ub.call(this);
        a = a || {};
        this.j = {
            rg: t,
            color: "black",
            Zc: "metric",
            za: a.offset
        };
        this.defaultAnchor = Yb;
        this.defaultOffset = new P(81,18);
        this.oc(a.anchor);
        this.Fh = {
            metric: {
                name: "metric",
                iJ: 1,
                XK: 1E3,
                HN: "\u7c73",
                IN: "\u516c\u91cc"
            },
            us: {
                name: "us",
                iJ: 3.2808,
                XK: 5280,
                HN: "\u82f1\u5c3a",
                IN: "\u82f1\u91cc"
            }
        };
        this.Fh[this.j.Zc] || (this.j.Zc = "metric");
        this.PH = s;
        this.oH = {};
        this.qf()
    }
    z.lang.sa(mb, Ub, "ScaleControl");
    z.object.extend(mb.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        wk: function(a) {
            this.j.color = a + ""
        },
        i2: function() {
            return this.j.color
        },
        tE: function(a) {
            this.j.Zc = this.Fh[a] && this.Fh[a].name || this.j.Zc
        },
        YW: function() {
            return this.j.Zc
        },
        qf: function() {
            var a = this;
            L.load("control", function() {
                a.pf()
            })
        }
    });
    var bc = 0;
    function ob(a) {
        Ub.call(this);
        a = a || {};
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(10,10);
        this.j = {
            rg: t,
            Yg: [Pa, ab, Va, Sa],
            YU: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || bc,
            za: a.offset || this.defaultOffset,
            GV: p
        };
        this.oc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.j.Yg = a.mapTypes.slice(0));
        this.qf()
    }
    z.lang.sa(ob, Ub, "MapTypeControl");
    z.object.extend(ob.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        Tx: function(a) {
            this.B.qn = a
        },
        qf: function() {
            var a = this;
            L.load("control", function() {
                a.pf()
            }, p)
        }
    });
    function cc(a) {
        Ub.call(this);
        a = a || {};
        this.j = {
            rg: t,
            za: a.offset,
            anchor: a.anchor
        };
        this.Ci = t;
        this.ov = s;
        this.xH = new dc({
            df: "api"
        });
        this.yH = new ec(s,{
            df: "api"
        });
        this.defaultAnchor = Xb;
        this.defaultOffset = new P(10,10);
        this.oc(a.anchor);
        this.qf();
        Ta(xa)
    }
    z.lang.sa(cc, Ub, "PanoramaControl");
    z.extend(cc.prototype, {
        initialize: function(a) {
            this.B = a;
            return this.C
        },
        qf: function() {
            var a = this;
            L.load("control", function() {
                a.pf()
            })
        }
    });
    function fc(a) {
        z.lang.Ca.call(this);
        this.j = {
            Ua: s,
            cursor: "default"
        };
        this.j = z.extend(this.j, a);
        this.Ib = "contextmenu";
        this.B = s;
        this.wa = [];
        this.Af = [];
        this.ze = [];
        this.gw = this.yr = s;
        this.wh = t;
        var b = this;
        L.load("menu", function() {
            b.fb()
        })
    }
    z.lang.sa(fc, z.lang.Ca, "ContextMenu");
    z.object.extend(fc.prototype, {
        ta: function(a, b) {
            this.B = a;
            this.jl = b || s
        },
        remove: function() {
            this.B = this.jl = s
        },
        Iv: function(a) {
            if (a && !("menuitem" != a.Ib || "" == a.Kg || 0 >= a.Ki)) {
                for (var b = 0, c = this.wa.length; b < c; b++)
                    if (this.wa[b] === a)
                        return;
                this.wa.push(a);
                this.Af.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Ib) {
                for (var b = 0, c = this.wa.length; b < c; b++)
                    this.wa[b] === a && (this.wa[b].remove(),
                    this.wa.splice(b, 1),
                    c--);
                b = 0;
                for (c = this.Af.length; b < c; b++)
                    this.Af[b] === a && (this.Af[b].remove(),
                    this.Af.splice(b, 1),
                    c--)
            }
        },
        $A: function() {
            this.wa.push({
                Ib: "divider",
                wj: this.ze.length
            });
            this.ze.push({
                D: s
            })
        },
        bE: function(a) {
            if (this.ze[a]) {
                for (var b = 0, c = this.wa.length; b < c; b++)
                    this.wa[b] && ("divider" == this.wa[b].Ib && this.wa[b].wj == a) && (this.wa.splice(b, 1),
                    c--),
                    this.wa[b] && ("divider" == this.wa[b].Ib && this.wa[b].wj > a) && this.wa[b].wj--;
                this.ze.splice(a, 1)
            }
        },
        Bd: x("C"),
        show: function() {
            this.wh != p && (this.wh = p)
        },
        U: function() {
            this.wh != t && (this.wh = t)
        },
        nZ: function(a) {
            a && (this.j.cursor = a)
        },
        getItem: function(a) {
            return this.Af[a]
        }
    });
    var gc = H.oa + "menu_zoom_in.png"
      , hc = H.oa + "menu_zoom_out.png";
    function ic(a, b, c) {
        if (a && $a(b)) {
            z.lang.Ca.call(this);
            this.j = {
                width: 100,
                id: "",
                bm: ""
            };
            c = c || {};
            this.j.width = 1 * c.width ? c.width : 100;
            this.j.id = c.id ? c.id : "";
            this.j.bm = c.iconUrl ? c.iconUrl : "";
            this.Kg = a + "";
            this.Ey = b;
            this.B = s;
            this.Ib = "menuitem";
            this.hr = this.Fu = this.C = this.ph = s;
            this.th = p;
            var e = this;
            L.load("menu", function() {
                e.fb()
            })
        }
    }
    z.lang.sa(ic, z.lang.Ca, "MenuItem");
    z.object.extend(ic.prototype, {
        ta: function(a, b) {
            this.B = a;
            this.ph = b
        },
        remove: function() {
            this.B = this.ph = s
        },
        jt: function(a) {
            a && (this.Kg = a + "")
        },
        Pb: function(a) {
            a && (this.j.bm = a)
        },
        Bd: x("C"),
        enable: function() {
            this.th = p
        },
        disable: function() {
            this.th = t
        }
    });
    function hb(a, b) {
        a && !b && (b = a);
        this.Ce = this.Pd = this.He = this.Rd = this.wl = this.hl = s;
        a && (this.wl = new J(a.lng,a.lat),
        this.hl = new J(b.lng,b.lat),
        this.He = a.lng,
        this.Rd = a.lat,
        this.Ce = b.lng,
        this.Pd = b.lat)
    }
    z.object.extend(hb.prototype, {
        hj: function() {
            return !this.wl || !this.hl
        },
        gc: function(a) {
            return !(a instanceof hb) || this.hj() ? t : this.Oe().gc(a.Oe()) && this.Hf().gc(a.Hf())
        },
        Oe: x("wl"),
        Hf: x("hl"),
        EU: function(a) {
            return !(a instanceof hb) || this.hj() || a.hj() ? t : a.He > this.He && a.Ce < this.Ce && a.Rd > this.Rd && a.Pd < this.Pd
        },
        ub: function() {
            return this.hj() ? s : new J((this.He + this.Ce) / 2,(this.Rd + this.Pd) / 2)
        },
        xs: function(a) {
            if (!(a instanceof hb) || Math.max(a.He, a.Ce) < Math.min(this.He, this.Ce) || Math.min(a.He, a.Ce) > Math.max(this.He, this.Ce) || Math.max(a.Rd, a.Pd) < Math.min(this.Rd, this.Pd) || Math.min(a.Rd, a.Pd) > Math.max(this.Rd, this.Pd))
                return s;
            var b = Math.max(this.He, a.He)
              , c = Math.min(this.Ce, a.Ce)
              , e = Math.max(this.Rd, a.Rd)
              , a = Math.min(this.Pd, a.Pd);
            return new hb(new J(b,e),new J(c,a))
        },
        ur: function(a) {
            return !(a instanceof J) || this.hj() ? t : a.lng >= this.He && a.lng <= this.Ce && a.lat >= this.Rd && a.lat <= this.Pd
        },
        extend: function(a) {
            if (a instanceof J) {
                var b = a.lng
                  , a = a.lat;
                this.wl || (this.wl = new J(0,0));
                this.hl || (this.hl = new J(0,0));
                if (!this.He || this.He > b)
                    this.wl.lng = this.He = b;
                if (!this.Ce || this.Ce < b)
                    this.hl.lng = this.Ce = b;
                if (!this.Rd || this.Rd > a)
                    this.wl.lat = this.Rd = a;
                if (!this.Pd || this.Pd < a)
                    this.hl.lat = this.Pd = a
            }
        },
        KE: function() {
            return this.hj() ? new J(0,0) : new J(Math.abs(this.Ce - this.He),Math.abs(this.Pd - this.Rd))
        }
    });
    function J(a, b) {
        isNaN(a) && (a = Lb(a),
        a = isNaN(a) ? 0 : a);
        bb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Lb(b),
        b = isNaN(b) ? 0 : b);
        bb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    J.bL = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    J.prototype.gc = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function jc() {}
    jc.prototype.mg = function() {
        ba("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    jc.prototype.kj = function() {
        ba("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function kc() {}
    ;var gb = {
        kJ: function(a, b, c) {
            L.load("coordtransutils", function() {
                gb.QT(a, b, c)
            }, p)
        },
        jJ: function(a, b, c) {
            L.load("coordtransutils", function() {
                gb.PT(a, b, c)
            }, p)
        }
    };
    function lc() {
        this.Na = [];
        var a = this;
        L.load("convertor", function() {
            a.QO()
        })
    }
    z.sa(lc, z.lang.Ca, "Convertor");
    z.extend(lc.prototype, {
        translate: function(a, b, c, e) {
            this.Na.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    U(lc.prototype, {
        translate: lc.prototype.translate
    });
    function S() {}
    S.prototype = new jc;
    z.extend(S, {
        nO: 6370996.81,
        wF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Xt: [75, 60, 45, 30, 15, 0],
        tO: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        tF: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        o2: function(a, b) {
            if (!a || !b)
                return 0;
            var c, e, a = this.Yb(a);
            if (!a)
                return 0;
            c = this.Fk(a.lng);
            e = this.Fk(a.lat);
            b = this.Yb(b);
            return !b ? 0 : this.ef(c, this.Fk(b.lng), e, this.Fk(b.lat))
        },
        yo: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.NC(a.lng, -180, 180);
            a.lat = this.TC(a.lat, -74, 74);
            b.lng = this.NC(b.lng, -180, 180);
            b.lat = this.TC(b.lat, -74, 74);
            return this.ef(this.Fk(a.lng), this.Fk(b.lng), this.Fk(a.lat), this.Fk(b.lat))
        },
        Yb: function(a) {
            if (a === s || a === l)
                return new J(0,0);
            var b, c;
            b = new J(Math.abs(a.lng),Math.abs(a.lat));
            for (var e = 0; e < this.wF.length; e++)
                if (b.lat >= this.wF[e]) {
                    c = this.tO[e];
                    break
                }
            a = this.lJ(a, c);
            return a = new J(a.lng.toFixed(6),a.lat.toFixed(6))
        },
        zb: function(a) {
            if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new J(0,0);
            var b, c;
            a.lng = this.NC(a.lng, -180, 180);
            a.lat = this.TC(a.lat, -74, 74);
            b = new J(a.lng,a.lat);
            for (var e = 0; e < this.Xt.length; e++)
                if (b.lat >= this.Xt[e]) {
                    c = this.tF[e];
                    break
                }
            if (!c)
                for (e = 0; e < this.Xt.length; e++)
                    if (b.lat <= -this.Xt[e]) {
                        c = this.tF[e];
                        break
                    }
            a = this.lJ(a, c);
            return a = new J(a.lng.toFixed(2),a.lat.toFixed(2))
        },
        lJ: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng)
                  , e = Math.abs(a.lat) / b[9]
                  , e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e
                  , c = c * (0 > a.lng ? -1 : 1)
                  , e = e * (0 > a.lat ? -1 : 1);
                return new J(c,e)
            }
        },
        ef: function(a, b, c, e) {
            return this.nO * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        Fk: function(a) {
            return Math.PI * a / 180
        },
        N4: function(a) {
            return 180 * a / Math.PI
        },
        TC: function(a, b, c) {
            b != s && (a = Math.max(a, b));
            c != s && (a = Math.min(a, c));
            return a
        },
        NC: function(a, b, c) {
            for (; a > c; )
                a -= c - b;
            for (; a < b; )
                a += c - b;
            return a
        }
    });
    z.extend(S.prototype, {
        Xh: function(a) {
            return S.zb(a)
        },
        mg: function(a) {
            a = S.zb(a);
            return new R(a.lng,a.lat)
        },
        Zg: function(a) {
            return S.Yb(a)
        },
        kj: function(a) {
            a = new J(a.x,a.y);
            return S.Yb(a)
        },
        Nb: function(a, b, c, e, f) {
            if (a)
                return a = this.Xh(a, f),
                b = this.hc(b),
                new R(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        Bb: function(a, b, c, e, f) {
            if (a)
                return b = this.hc(b),
                this.Zg(new J(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2)), f)
        },
        hc: function(a) {
            return Math.pow(2, 18 - a)
        }
    });
    function jb() {
        this.Pi = "bj"
    }
    jb.prototype = new S;
    z.extend(jb.prototype, {
        Xh: function(a, b) {
            return this.BP(b, S.zb(a))
        },
        Zg: function(a, b) {
            return S.Yb(this.CP(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this
              , e = S.zb(a);
            L.load("coordtrans", function() {
                var a = kc.RC(c.Pi || "bj", e)
                  , a = new R(a.x,a.y);
                b && b(a)
            }, p)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this
              , e = new J(a.x,a.y);
            L.load("coordtrans", function() {
                var a = kc.OC(c.Pi || "bj", e)
                  , a = new J(a.lng,a.lat)
                  , a = S.Yb(a);
                b && b(a)
            }, p)
        },
        BP: function(a, b) {
            if (L.hb("coordtrans").Ge == L.pj.xp) {
                var c = kc.RC(a || "bj", b);
                return new J(c.x,c.y)
            }
            L.load("coordtrans", u());
            return new J(0,0)
        },
        CP: function(a, b) {
            if (L.hb("coordtrans").Ge == L.pj.xp) {
                var c = kc.OC(a || "bj", b);
                return new J(c.lng,c.lat)
            }
            L.load("coordtrans", u());
            return new J(0,0)
        },
        hc: function(a) {
            return Math.pow(2, 20 - a)
        }
    });
    function mc() {
        this.Ib = "overlay"
    }
    z.lang.sa(mc, z.lang.Ca, "Overlay");
    mc.lk = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    }
    ;
    z.extend(mc.prototype, {
        Be: function(a) {
            if (!this.V && $a(this.initialize) && (this.V = this.initialize(a)))
                this.V.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            ba("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
            this.V = s;
            this.dispatchEvent(new Q("onremove"))
        },
        U: function() {
            this.V && z.D.U(this.V)
        },
        show: function() {
            this.V && z.D.show(this.V)
        },
        Ic: function() {
            return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? t : p
        }
    });
    D.Se(function(a) {
        function b(a, b) {
            var c = O("div")
              , i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.R;
        c.Jc = a.Jc = b(a.platform, 200);
        a.Qd.tC = b(c.Jc, 800);
        a.Qd.GD = b(c.Jc, 700);
        a.Qd.WJ = b(c.Jc, 600);
        a.Qd.AD = b(c.Jc, 500);
        a.Qd.KL = b(c.Jc, 400);
        a.Qd.LL = b(c.Jc, 300);
        a.Qd.TN = b(c.Jc, 201);
        a.Qd.Js = b(c.Jc, 200)
    });
    function ib() {
        z.lang.Ca.call(this);
        mc.call(this);
        this.map = s;
        this.Oa = p;
        this.vb = s;
        this.gG = 0
    }
    z.lang.sa(ib, mc, "OverlayInternal");
    z.extend(ib.prototype, {
        initialize: function(a) {
            this.map = a;
            z.lang.Ca.call(this, this.aa);
            return s
        },
        Cw: x("map"),
        draw: u(),
        qj: u(),
        remove: function() {
            this.map = s;
            z.lang.kw(this.aa);
            mc.prototype.remove.call(this)
        },
        U: function() {
            this.Oa !== t && (this.Oa = t)
        },
        show: function() {
            this.Oa !== p && (this.Oa = p)
        },
        Ic: function() {
            return !this.V ? t : !!this.Oa
        },
        Qa: x("V"),
        TM: function(a) {
            var a = a || {}, b;
            for (b in a)
                this.z[b] = a[b]
        },
        lp: ca("zIndex"),
        Ui: function() {
            this.z.Ui = p
        },
        fV: function() {
            this.z.Ui = t
        },
        Sn: ca("$f"),
        Xo: function() {
            this.$f = s
        }
    });
    function nc() {
        this.map = s;
        this.xa = {};
        this.ye = []
    }
    D.Se(function(a) {
        var b = new nc;
        b.map = a;
        a.xa = b.xa;
        a.ye = b.ye;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        z.ca.ia && 8 > z.ca.ia || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof ib)
                b.xa[a.aa] || (b.xa[a.aa] = a);
            else {
                for (var e = t, f = 0, g = b.ye.length; f < g; f++)
                    if (b.ye[f] === a) {
                        e = p;
                        break
                    }
                e || b.ye.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof ib)
                delete b.xa[a.aa];
            else
                for (var e = 0, f = b.ye.length; e < f; e++)
                    if (b.ye[e] === a) {
                        b.ye.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Sc();
            for (var a in b.xa)
                b.xa[a].z.Ui && (b.xa[a].remove(),
                delete b.xa[a]);
            a = 0;
            for (var e = b.ye.length; a < e; a++)
                b.ye[a].enableMassClear !== t && (b.ye[a].remove(),
                b.ye[a] = s,
                b.ye.splice(a, 1),
                a--,
                e--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.vb;
            a && (z.D.U(a.uc),
            z.D.U(a.Ub))
        });
        a.addEventListener("movestart", function() {
            this.Vg() && this.Vg().VH()
        });
        a.addEventListener("moveend", function() {
            this.Vg() && this.Vg().KH()
        })
    });
    nc.prototype.draw = function(a) {
        if (D.Ap) {
            var b = D.Ap.bs(this.map);
            "canvas" === b.Ib && b.canvas && b.wP(b.canvas.getContext("2d"))
        }
        for (var c in this.xa)
            this.xa[c].draw(a);
        z.cc.Jb(this.ye, function(a) {
            a.draw()
        });
        this.map.R.nb && this.map.R.nb.qa();
        D.Ap && b.rE()
    }
    ;
    function oc(a) {
        ib.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            kc: a.strokeWeight || 5,
            ld: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            Ui: a.enableMassClear === t ? t : p,
            hk: s,
            Vl: s,
            bf: a.enableEditing === p ? p : t,
            PL: 5,
            x_: t,
            Ze: a.enableClicking === t ? t : p,
            Vh: a.icons && 0 < a.icons.length ? a.icons : s
        };
        0 >= this.z.kc && (this.z.kc = 5);
        if (0 > this.z.ld || 1 < this.z.ld)
            this.z.ld = 0.65;
        if (0 > this.z.hg || 1 < this.z.hg)
            this.z.hg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = s;
        this.eu = new hb(0,0);
        this.Xe = [];
        this.lc = [];
        this.Pa = {}
    }
    z.lang.sa(oc, ib, "Graph");
    oc.zw = function(a) {
        var b = [];
        if (!a)
            return b;
        bb(a) && z.cc.Jb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new J(a[0],a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    }
    ;
    oc.RD = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    z.extend(oc.prototype, {
        initialize: function(a) {
            this.map = a;
            return s
        },
        draw: u(),
        Yq: function(a) {
            this.Xe.length = 0;
            this.ja = oc.zw(a).slice(0);
            this.mh()
        },
        ee: function(a) {
            this.Yq(a)
        },
        mh: function() {
            if (this.ja) {
                var a = this;
                a.eu = new hb;
                z.cc.Jb(this.ja, function(b) {
                    a.eu.extend(b)
                })
            }
        },
        Ne: x("ja"),
        Bm: function(a, b) {
            b && this.ja[a] && (this.Xe.length = 0,
            this.ja[a] = new J(b.lng,b.lat),
            this.mh())
        },
        setStrokeColor: function(a) {
            this.z.strokeColor = a
        },
        QW: function() {
            return this.z.strokeColor
        },
        kp: function(a) {
            0 < a && (this.z.kc = a)
        },
        yK: function() {
            return this.z.kc
        },
        ip: function(a) {
            a == l || (1 < a || 0 > a) || (this.z.ld = a)
        },
        RW: function() {
            return this.z.ld
        },
        bt: function(a) {
            1 < a || 0 > a || (this.z.hg = a)
        },
        lW: function() {
            return this.z.hg
        },
        jp: function(a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        },
        xK: function() {
            return this.z.strokeStyle
        },
        setFillColor: function(a) {
            this.z.fillColor = a || ""
        },
        kW: function() {
            return this.z.fillColor
        },
        pe: x("eu"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.Cu);
            ib.prototype.remove.call(this);
            this.Xe.length = 0
        },
        bf: function() {
            if (!(2 > this.ja.length)) {
                this.z.bf = p;
                var a = this;
                L.load("poly", function() {
                    a.Bl()
                }, p)
            }
        },
        eV: function() {
            this.z.bf = t;
            var a = this;
            L.load("poly", function() {
                a.Wj()
            }, p)
        },
        hW: function() {
            return this.z.bf
        }
    });
    function pc(a) {
        ib.call(this);
        this.V = this.map = s;
        this.z = {
            width: 0,
            height: 0,
            za: new P(0,0),
            opacity: 1,
            background: "transparent",
            ex: 1,
            wL: "#000",
            TX: "solid",
            point: s
        };
        this.TM(a);
        this.point = this.z.point
    }
    z.lang.sa(pc, ib, "Division");
    z.extend(pc.prototype, {
        qj: function() {
            var a = this.z
              , b = this.content
              , c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.ex + "px " + a.TX + " " + a.wL + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.V = Bb(this.map.If().GD, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.qj();
            this.V && z.M(this.V, I() ? "touchstart" : "mousedown", function(a) {
                na(a)
            });
            return this.V
        },
        draw: function() {
            var a = this.map.Re(this.z.point);
            this.z.za = new P(-Math.round(this.z.width / 2) - Math.round(this.z.ex),-Math.round(this.z.height / 2) - Math.round(this.z.ex));
            this.V.style.left = a.x + this.z.za.width + "px";
            this.V.style.top = a.y + this.z.za.height + "px"
        },
        fa: function() {
            return this.z.point
        },
        C0: function() {
            return this.map.Nb(this.fa())
        },
        qa: function(a) {
            this.z.point = a;
            this.draw()
        },
        oZ: function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.V && (this.V.style.width = this.z.width + "px",
            this.V.style.height = this.z.height + "px",
            this.draw())
        }
    });
    function qc(a, b, c) {
        a && b && (this.imageUrl = a,
        this.size = b,
        a = new P(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new P(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    z.extend(qc.prototype, {
        UM: function(a) {
            a && (this.imageUrl = a)
        },
        EZ: function(a) {
            a && (this.printImageUrl = a)
        },
        we: function(a) {
            a && (this.size = new P(a.width,a.height))
        },
        oc: function(a) {
            a && (this.anchor = new P(a.width,a.height))
        },
        ct: function(a) {
            a && (this.imageOffset = new P(a.width,a.height))
        },
        tZ: function(a) {
            a && (this.infoWindowAnchor = new P(a.width,a.height))
        },
        qZ: function(a) {
            a && (this.imageSize = new P(a.width,a.height))
        },
        toString: ea("Icon")
    });
    function rc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new P(0,0),
                fillColor: b.fillColor || "#000",
                hg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                ld: b.strokeOpacity || 1,
                kc: b.strokeWeight
            };
            this.Ib = "number" === typeof a ? a : "UserDefined";
            this.si = this.style.anchor;
            this.Eq = new P(0,0);
            this.anchor = s;
            this.rA = a;
            var c = this;
            L.load("symbol", function() {
                c.Xm()
            }, p)
        }
    }
    z.extend(rc.prototype, {
        setPath: ca("rA"),
        setAnchor: function(a) {
            this.si = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.kc = a
        },
        setStrokeColor: function(a) {
            a = z.sr.xB(a, this.style.ld);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.ld = a
        },
        setFillOpacity: function(a) {
            this.style.hg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function sc(a, b, c, e) {
        a && (this.Vu = {},
        this.UJ = e ? !!e : t,
        this.Pc = [],
        this.WZ = a instanceof rc ? a : s,
        this.DH = b === l ? p : !!(b.indexOf("%") + 1),
        this.Jj = isNaN(parseFloat(b)) ? 1 : this.DH ? parseFloat(b) / 100 : parseFloat(b),
        this.EH = !!(c.indexOf("%") + 1),
        this.repeat = c != l ? this.EH ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function tc(a, b) {
        z.lang.Ca.call(this);
        this.content = a;
        this.map = s;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            za: b.offset || new P(0,0),
            title: b.title || "",
            JD: b.maxContent || "",
            Sg: b.enableMaximize || t,
            Qr: b.enableAutoPan === t ? t : p,
            cC: b.enableCloseOnClick === t ? t : p,
            margin: b.margin || [10, 10, 40, 10],
            tB: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            mX: t,
            nY: b.onClosing || ea(p),
            NJ: t,
            iC: b.enableParano === p ? p : t,
            message: b.message,
            kC: b.enableSearchTool === p ? p : t,
            Ow: b.headerContent || "",
            dC: b.enableContentScroll || t
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220),
        730 < this.z.width))
            this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60),
        650 < this.z.height))
            this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220),
        730 < this.z.maxWidth))
            this.z.maxWidth = 730;
        this.Xd = t;
        this.ni = H.oa;
        this.ob = s;
        var c = this;
        L.load("infowindow", function() {
            c.fb()
        })
    }
    z.lang.sa(tc, z.lang.Ca, "InfoWindow");
    z.extend(tc.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.z.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
            650 < a && (a = 650)),
            this.z.height = a)
        },
        YM: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.z.maxWidth = a)
        },
        yc: function(a) {
            this.z.title = a
        },
        getTitle: function() {
            return this.z.title
        },
        Xc: ca("content"),
        fk: x("content"),
        ft: function(a) {
            this.z.JD = a + ""
        },
        ce: u(),
        Qr: function() {
            this.z.Qr = p
        },
        disableAutoPan: function() {
            this.z.Qr = t
        },
        enableCloseOnClick: function() {
            this.z.cC = p
        },
        disableCloseOnClick: function() {
            this.z.cC = t
        },
        Sg: function() {
            this.z.Sg = p
        },
        mw: function() {
            this.z.Sg = t
        },
        show: function() {
            this.Oa = p
        },
        U: function() {
            this.Oa = t
        },
        close: function() {
            this.U()
        },
        hx: function() {
            this.Xd = p
        },
        restore: function() {
            this.Xd = t
        },
        Ic: function() {
            return this.Va()
        },
        Va: ea(t),
        fa: function() {
            if (this.ob && this.ob.fa)
                return this.ob.fa()
        },
        Yi: function() {
            return this.z.za
        }
    });
    Oa.prototype.Vc = function(a, b) {
        if (a instanceof tc && b instanceof J) {
            var c = this.R;
            c.jm ? c.jm.qa(b) : (c.jm = new V(b,{
                icon: new qc(H.oa + "blank.gif",{
                    width: 1,
                    height: 1
                }),
                offset: new P(0,0),
                clickable: t
            }),
            c.jm.wQ = 1);
            this.La(c.jm);
            c.jm.Vc(a)
        }
    }
    ;
    Oa.prototype.Sc = function() {
        var a = this.R.nb || this.R.Zk;
        a && a.ob && a.ob.Sc()
    }
    ;
    ib.prototype.Vc = function(a) {
        this.map && (this.map.Sc(),
        a.Oa = p,
        this.map.R.Zk = a,
        a.ob = this,
        z.lang.Ca.call(a, a.aa))
    }
    ;
    ib.prototype.Sc = function() {
        this.map && this.map.R.Zk && (this.map.R.Zk.Oa = t,
        z.lang.kw(this.map.R.Zk.aa),
        this.map.R.Zk = s)
    }
    ;
    function uc(a, b) {
        ib.call(this);
        this.content = a;
        this.V = this.map = s;
        b = b || {};
        this.z = {
            width: 0,
            za: b.offset || new P(0,0),
            pp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + H.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || s,
            Ui: b.enableMassClear === t ? t : p,
            Ze: p
        };
        0 > this.z.width && (this.z.width = 0);
        Hb(b.enableClicking) && (this.z.Ze = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        L.load("marker", function() {
            c.fb()
        })
    }
    z.lang.sa(uc, ib, "Label");
    z.extend(uc.prototype, {
        fa: function() {
            return this.Ku ? this.Ku.fa() : this.point
        },
        qa: function(a) {
            a instanceof J && !this.Dw() && (this.point = this.z.position = new J(a.lng,a.lat))
        },
        Xc: ca("content"),
        qE: function(a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        },
        de: function(a) {
            a instanceof P && (this.z.za = new P(a.width,a.height))
        },
        Yi: function() {
            return this.z.za
        },
        Fd: function(a) {
            a = a || {};
            this.z.pp = z.extend(this.z.pp, a)
        },
        hi: function(a) {
            return this.Fd(a)
        },
        yc: function(a) {
            this.z.title = a || ""
        },
        getTitle: function() {
            return this.z.title
        },
        XM: function(a) {
            this.point = (this.Ku = a) ? this.z.position = a.fa() : this.z.position = s
        },
        Dw: function() {
            return this.Ku || s
        },
        fk: x("content")
    });
    function vc(a, b) {
        if (0 !== arguments.length) {
            ib.apply(this, arguments);
            b = b || {};
            this.z = {
                $a: a,
                opacity: b.opacity || 1,
                em: b.em || "",
                Hr: b.displayOnMinLevel || 1,
                Ui: b.enableMassClear === t ? t : p,
                Gr: b.displayOnMaxLevel || 19,
                RZ: b.stretch || t
            };
            var c = this;
            L.load("groundoverlay", function() {
                c.fb()
            })
        }
    }
    z.lang.sa(vc, ib, "GroundOverlay");
    z.extend(vc.prototype, {
        setBounds: function(a) {
            this.z.$a = a
        },
        getBounds: function() {
            return this.z.$a
        },
        setOpacity: function(a) {
            this.z.opacity = a
        },
        getOpacity: function() {
            return this.z.opacity
        },
        setImageURL: function(a) {
            this.z.em = a
        },
        getImageURL: function() {
            return this.z.em
        },
        setDisplayOnMinLevel: function(a) {
            this.z.Hr = a
        },
        getDisplayOnMinLevel: function() {
            return this.z.Hr
        },
        setDisplayOnMaxLevel: function(a) {
            this.z.Gr = a
        },
        getDisplayOnMaxLevel: function() {
            return this.z.Gr
        }
    });
    var wc = 3
      , xc = 4;
    function yc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    function zc(a, b) {
        var c = this;
        yc() && (a === l && ba(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
        "[object Array]" !== Object.prototype.toString.call(a) && ba(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        ib.apply(c, arguments),
        c.ea = {
            ja: a
        },
        c.z = {
            shape: b.shape || wc,
            size: b.size || xc,
            color: b.color || "#fa937e",
            Ui: p
        },
        this.oA = [],
        this.je = [],
        L.load("pointcollection", function() {
            for (var a = 0, b; b = c.oA[a]; a++)
                c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.je[a]; a++)
                c[b.method].apply(c, b.arguments)
        }))
    }
    z.lang.sa(zc, ib, "PointCollection");
    z.extend(zc.prototype, {
        initialize: function(a) {
            this.oA && this.oA.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.je && this.je.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.je && this.je.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.je && this.je.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.je && this.je.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var Ac = new qc(H.oa + "marker_red_sprite.png",new P(19,25),{
        anchor: new P(10,25),
        infoWindowAnchor: new P(10,0)
    })
      , Bc = new qc(H.oa + "marker_red_sprite.png",new P(20,11),{
        anchor: new P(6,11),
        imageOffset: new P(-19,-13)
    });
    function V(a, b) {
        ib.call(this);
        b = b || {};
        this.point = a;
        this.Np = this.map = s;
        this.z = {
            za: b.offset || new P(0,0),
            qe: b.icon || Ac,
            zk: Bc,
            title: b.title || "",
            label: s,
            TI: b.baseZIndex || 0,
            Ze: p,
            n5: t,
            wD: t,
            Ui: b.enableMassClear === t ? t : p,
            Rb: t,
            BM: b.raiseOnDrag === p ? p : t,
            JM: t,
            zd: b.draggingCursor || H.zd,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.zk = s);
        b.enableDragging && (this.z.Rb = b.enableDragging);
        Hb(b.enableClicking) && (this.z.Ze = b.enableClicking);
        var c = this;
        L.load("marker", function() {
            c.fb()
        })
    }
    V.$t = mc.lk(-90) + 1E6;
    V.oF = V.$t + 1E6;
    z.lang.sa(V, ib, "Marker");
    z.extend(V.prototype, {
        Pb: function(a) {
            if (a instanceof qc || a instanceof rc)
                this.z.qe = a
        },
        zo: function() {
            return this.z.qe
        },
        Lx: function(a) {
            a instanceof qc && (this.z.zk = a)
        },
        getShadow: function() {
            return this.z.zk
        },
        zm: function(a) {
            this.z.label = a || s
        },
        MC: function() {
            return this.z.label
        },
        Rb: function() {
            this.z.Rb = p
        },
        MB: function() {
            this.z.Rb = t
        },
        fa: x("point"),
        qa: function(a) {
            a instanceof J && (this.point = new J(a.lng,a.lat))
        },
        ii: function(a, b) {
            this.z.wD = !!a;
            a && (this.JF = b || 0)
        },
        yc: function(a) {
            this.z.title = a + ""
        },
        getTitle: function() {
            return this.z.title
        },
        de: function(a) {
            a instanceof P && (this.z.za = a)
        },
        Yi: function() {
            return this.z.za
        },
        ym: ca("Np"),
        hp: function(a) {
            this.z.rotation = a
        },
        vK: function() {
            return this.z.rotation
        }
    });
    function Cc(a) {
        this.options = a || {};
        this.rY = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.FU = this.options.contextType || "2d"
    }
    Cc.prototype = new mc;
    Cc.prototype.initialize = function(a) {
        this.B = a;
        var b = this.canvas = document.createElement("canvas")
          , c = this.canvas.getContext(this.FU);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        Dc(this);
        Ec(c);
        a.getPanes()[this.rY].appendChild(b);
        var e = this;
        a.addEventListener("resize", function() {
            Dc(e);
            Ec(c);
            e.fb()
        });
        return this.canvas
    }
    ;
    function Dc(a) {
        var b = a.B.Ab()
          , a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }
    function Ec(a) {
        var b = (window.devicePixelRatio || 1) / (a.TT || a.h5 || a.F3 || a.G3 || a.K3 || a.TT || 1)
          , c = a.canvas.width
          , e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    Cc.prototype.draw = function() {
        var a = this
          , b = arguments;
        clearTimeout(a.e_);
        a.e_ = setTimeout(function() {
            a.fb.apply(a, b)
        }, 15)
    }
    ;
    fa = Cc.prototype;
    fa.fb = function() {
        var a = this.B;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    }
    ;
    fa.Qa = x("canvas");
    fa.show = function() {
        this.canvas || this.B.La(this);
        this.canvas.style.display = "block"
    }
    ;
    fa.U = function() {
        this.canvas.style.display = "none"
    }
    ;
    fa.lp = function(a) {
        this.canvas.style.zIndex = a
    }
    ;
    fa.lk = x("zIndex");
    function Fc(a, b) {
        oc.call(this, b);
        b = b || {};
        this.z.hg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.ee(a);
        var c = this;
        L.load("poly", function() {
            c.fb()
        })
    }
    z.lang.sa(Fc, oc, "Polygon");
    z.extend(Fc.prototype, {
        ee: function(a, b) {
            this.Mn = oc.zw(a).slice(0);
            var c = oc.zw(a).slice(0);
            1 < c.length && c.push(new J(c[0].lng,c[0].lat));
            oc.prototype.ee.call(this, c, b)
        },
        Bm: function(a, b) {
            this.Mn[a] && (this.Mn[a] = new J(b.lng,b.lat),
            this.ja[a] = new J(b.lng,b.lat),
            0 == a && !this.ja[0].gc(this.ja[this.ja.length - 1]) && (this.ja[this.ja.length - 1] = new J(b.lng,b.lat)),
            this.mh())
        },
        Ne: function() {
            var a = this.Mn;
            0 == a.length && (a = this.ja);
            return a
        }
    });
    function Gc(a, b) {
        oc.call(this, b);
        this.Yq(a);
        var c = this;
        L.load("poly", function() {
            c.fb()
        })
    }
    z.lang.sa(Gc, oc, "Polyline");
    function Hc(a, b, c) {
        this.point = a;
        this.ya = Math.abs(b);
        Fc.call(this, [], c)
    }
    Hc.RD = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    z.lang.sa(Hc, Fc, "Circle");
    z.extend(Hc.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ja = this.xu(this.point, this.ya);
            this.mh();
            return s
        },
        ub: x("point"),
        lf: function(a) {
            a && (this.point = a)
        },
        tK: x("ya"),
        mf: function(a) {
            this.ya = Math.abs(a)
        },
        xu: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i
                  , m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k))
                  , k = new J(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new J(e.lng,e.lat));
            return c
        }
    });
    var Ic = {};
    function Jc(a) {
        this.map = a;
        this.im = [];
        this.Qf = [];
        this.tg = [];
        this.hU = 300;
        this.YD = 0;
        this.ng = {};
        this.Oi = {};
        this.pk = 0;
        this.qD = p;
        this.VU = {};
        this.wn = this.Xp(1);
        this.dg = this.Xp(2);
        this.il = this.Xp(3);
        this.vh = this.Xp(4);
        a.platform.appendChild(this.wn);
        a.platform.appendChild(this.dg);
        a.platform.appendChild(this.il);
        a.platform.appendChild(this.vh);
        var b = 256 * Math.pow(2, 15)
          , c = 3 * b
          , a = S.zb(new J(180,0)).lng
          , c = c - a
          , b = -3 * b
          , e = S.zb(new J(-180,0)).lng;
        this.gH = a;
        this.hH = e;
        this.Vz = c + (e - b);
        this.iH = a - e
    }
    D.Se(function(a) {
        var b = new Jc(a);
        b.ta();
        a.ki = b
    });
    z.extend(Jc.prototype, {
        ta: function() {
            var a = this
              , b = a.map;
            b.addEventListener("loadcode", function() {
                a.Po()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Ie(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.Pf(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.sg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Fc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.dt(b.target);
                a.Nf(p)
            });
            b.addEventListener("initindoorlayer", function(b) {
                a.mD(b)
            })
        },
        Po: function() {
            var a = this;
            if (z.ca.ia)
                try {
                    document.execCommand("BackgroundImageCache", t, p)
                } catch (b) {}
            this.loaded || a.Vw();
            a.Nf();
            this.loaded || (this.loaded = p,
            L.load("tile", function() {
                a.RO()
            }))
        },
        mD: function(a) {
            this.It = new Kc(this);
            this.It.Ie(new Lc(this.map,this.It,a.Pe))
        },
        Vw: function() {
            for (var a = this.map.ra().We, b = 0; b < a.length; b++) {
                var c = new Mc;
                z.extend(c, a[b]);
                this.im.push(c);
                c.ta(this.map, this.wn)
            }
            this.dt()
        },
        Xp: function(a) {
            var b = O("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        rf: function() {
            this.pk--;
            var a = this;
            this.qD && (this.map.dispatchEvent(new Q("onfirsttileloaded")),
            this.qD = t);
            0 == this.pk && (this.xi && (clearTimeout(this.xi),
            this.xi = s),
            this.xi = setTimeout(function() {
                if (a.pk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    a.qD = p
                }
                a.xi = s
            }, 80))
        },
        YC: function(a, b) {
            return "TILE-" + b.aa + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Rw: function(a) {
            var b = a.Fb;
            b && Ab(b) && b.parentNode.removeChild(b);
            delete this.ng[a.name];
            a.loaded || (Nc(a),
            a.Fb = s,
            a.km = s)
        },
        DK: function(a, b, c) {
            var e = this.map
              , f = e.ra()
              , g = e.Sa
              , i = e.mc
              , k = f.hc(g)
              , m = this.eW()
              , n = m[0]
              , o = m[1]
              , q = m[2]
              , v = m[3]
              , w = m[4]
              , c = "undefined" != typeof c ? c : 0
              , f = f.Cd()
              , m = e.aa.replace(/^TANGRAM_/, "");
            for (this.xe ? this.xe.length = 0 : this.xe = []; n < q; n++)
                for (var y = o; y < v; y++) {
                    var A = n
                      , B = y;
                    this.xe.push([A, B]);
                    A = m + "_" + b + "_" + A + "_" + B + "_" + g;
                    this.VU[A] = A
                }
            this.xe.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Je ? this.Je.length = 0 : this.Je = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++)
                y = a.childNodes[n],
                y.wq = t,
                this.Je.push(y);
            if (n = this.nm)
                for (var C in n)
                    delete n[C];
            else
                this.nm = {};
            this.Ke ? this.Ke.length = 0 : this.Ke = [];
            n = 0;
            for (e = this.xe.length; n < e; n++) {
                C = this.xe[n][0];
                k = this.xe[n][1];
                y = 0;
                for (o = this.Je.length; y < o; y++)
                    if (q = this.Je[y],
                    q.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
                        q.wq = p;
                        this.nm[q.id] = q;
                        break
                    }
            }
            n = 0;
            for (e = this.Je.length; n < e; n++)
                q = this.Je[n],
                q.wq || this.Ke.push(q);
            this.HE = [];
            y = (f + c) * this.map.K.devicePixelRatio;
            n = 0;
            for (e = this.xe.length; n < e; n++)
                C = this.xe[n][0],
                k = this.xe[n][1],
                v = C * f + i[0] - c / 2,
                w = (-1 - k) * f + i[1] - c / 2,
                A = m + "_" + b + "_" + C + "_" + k + "_" + g,
                o = this.nm[A],
                q = s,
                o ? (q = o.style,
                q.left = v + "px",
                q.top = w + "px",
                o.dn || this.HE.push([C, k, o])) : (0 < this.Ke.length ? (o = this.Ke.shift(),
                o.getContext("2d").clearRect(-c / 2, -c / 2, y, y),
                q = o.style) : (o = document.createElement("canvas"),
                q = o.style,
                q.position = "absolute",
                q.width = f + c + "px",
                q.height = f + c + "px",
                this.MX() && (q.WebkitTransform = "scale(1.001)"),
                o.setAttribute("width", y),
                o.setAttribute("height", y),
                a.appendChild(o)),
                o.id = A,
                q.left = v + "px",
                q.top = w + "px",
                -1 < A.indexOf("bg") && (v = "#F3F1EC",
                this.map.K.RT && (v = this.map.K.RT),
                q.background = v ? v : ""),
                this.HE.push([C, k, o])),
                o.style.visibility = "";
            n = 0;
            for (e = this.Ke.length; n < e; n++)
                this.Ke[n].style.visibility = "hidden";
            return this.HE
        },
        MX: function() {
            return /M040/i.test(navigator.userAgent)
        },
        eW: function() {
            var a = this.map
              , b = a.ra()
              , c = b.IK(a.Sa)
              , e = a.mc
              , f = Math.ceil(e.lng / c)
              , g = Math.ceil(e.lat / c)
              , b = b.Cd()
              , c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        LZ: function(a, b, c, e) {
            var f = this;
            f.p1 = b;
            var g = this.map.ra()
              , i = f.YC(a, c)
              , k = g.Cd()
              , b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]]
              , m = this.ng[i];
            if (this.map.ra() !== ab && this.map.ra() !== Va) {
                var n = this.Ov(a[0], a[2]).offsetX;
                b[0] += n;
                b.J0 = n
            }
            m && m.Fb ? (yb(m.Fb, b),
            e && (e = new R(a[0],a[1]),
            g = this.map.K.se ? this.map.K.se.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Pc(m, e)),
            m.loaded ? this.rf() : Qc(m, function() {
                f.rf()
            })) : (m = this.Oi[i]) && m.Fb ? (c.$b.insertBefore(m.Fb, c.$b.lastChild),
            this.ng[i] = m,
            yb(m.Fb, b),
            e && (e = new R(a[0],a[1]),
            g = this.map.K.se ? this.map.K.se.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Pc(m, e)),
            m.loaded ? this.rf() : Qc(m, function() {
                f.rf()
            })) : (m = k * Math.pow(2, g.Sh() - a[2]),
            new J(a[0] * m,a[1] * m),
            e = new R(a[0],a[1]),
            g = this.map.K.se ? this.map.K.se.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m = new Rc(this,e,b,a,c),
            Qc(m, function() {
                f.rf()
            }),
            m.vn(),
            this.ng[i] = m)
        },
        rf: function() {
            this.pk--;
            var a = this;
            0 == this.pk && (this.xi && (clearTimeout(this.xi),
            this.xi = s),
            this.xi = setTimeout(function() {
                if (a.pk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    if (wa) {
                        if (sa && ta && ua) {
                            var b = eb()
                              , c = a.map.Ab();
                            setTimeout(function() {
                                Ta(5030, {
                                    load_script_time: ta - sa,
                                    load_tiles_time: b - ua,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            D.Lp("cus.fire", "time", {
                                z_imgfirstloaded: b - ua
                            })
                        }
                        wa = t
                    }
                }
                a.xi = s
            }, 80))
        },
        YC: function(a, b) {
            return this.map.ra() === Sa ? "TILE-" + b.aa + "-" + this.map.Uv + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.aa + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Rw: function(a) {
            var b = a.Fb;
            b && (Sc(b),
            Ab(b) && b.parentNode.removeChild(b));
            delete this.ng[a.name];
            a.loaded || (Sc(b),
            Nc(a),
            a.Fb = s,
            a.km = s)
        },
        Ov: function(a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f; )
                a -= e,
                c -= this.Vz;
            for (; a < g; )
                a += e,
                c += this.Vz;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                Kl: a
            }
        },
        jU: function(a) {
            for (var b = a.lng; b > this.gH; )
                b -= this.iH;
            for (; b < this.hH; )
                b += this.iH;
            a.lng = b;
            return a
        },
        kU: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.gH / c), f = Math.floor(this.hH / c), c = Math.floor(this.Vz / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i]
                  , m = k[0]
                  , k = k[1];
                if (m >= e) {
                    var m = m + c
                      , n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p,
                    g.push([m, k]))
                } else
                    m <= f && (m -= c,
                    n = "id_" + m + "_" + k + "_" + b,
                    a[n] || (a[n] = p,
                    g.push([m, k])))
            }
            for (i = 0; i < g.length; i++)
                a.push(g[i]);
            return a
        },
        Nf: function(a) {
            if (!this.map.K.Ti) {
                var b = this;
                if (b.map.ra() == Sa)
                    L.load("coordtrans", function() {
                        b.map.Qb || (b.map.Qb = Sa.ek(b.map.Og),
                        b.map.Uv = Sa.fK(b.map.Qb));
                        b.kH()
                    }, p);
                else {
                    if (a && a)
                        for (var c in this.Oi)
                            delete this.Oi[c];
                    b.kH(a)
                }
            }
        },
        kH: function(a) {
            var b = this.im.concat(this.Qf)
              , c = b.length
              , e = this.map
              , f = e.ra()
              , g = e.mc;
            this.map.ra() !== ab && this.map.ra() !== Va && (g = this.jU(g));
            for (var i = 0; i < c; i++) {
                var k = b[i];
                if (k.Zb && e.Sa < k.Zb)
                    break;
                if (k.Nv) {
                    var m = this.$b = k.$b;
                    if (a) {
                        var n = m;
                        if (n && n.childNodes)
                            for (var o = n.childNodes.length, q = o - 1; 0 <= q; q--)
                                o = n.childNodes[q],
                                n.removeChild(o),
                                o = s
                    }
                    if (this.map.Hd()) {
                        this.dg.style.display = "block";
                        m.style.display = "none";
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: p
                        });
                        continue
                    } else
                        m.style.display = "block",
                        this.dg.style.display = "none",
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: t
                        })
                }
                if (!k.I0 && !(k.$w && !this.map.Hd() || k.iL && this.map.Hd())) {
                    e = this.map;
                    f = e.ra();
                    m = f.jk();
                    o = e.Sa;
                    g = e.mc;
                    f == Sa && g.gc(new J(0,0)) && (g = e.mc = m.Xh(e.le, e.Qb));
                    var v = f.hc(o)
                      , m = f.IK(o)
                      , n = Math.ceil(g.lng / m)
                      , w = Math.ceil(g.lat / m)
                      , y = f.Cd()
                      , m = [n, w, (g.lng - n * m) / m * y, (g.lat - w * m) / m * y]
                      , q = m[0] - Math.ceil((e.width / 2 - m[2]) / y)
                      , n = m[1] - Math.ceil((e.height / 2 - m[3]) / y)
                      , w = m[0] + Math.ceil((e.width / 2 + m[2]) / y)
                      , A = 0;
                    f === Sa && 15 == e.ga() && (A = 1);
                    f = m[1] + Math.ceil((e.height / 2 + m[3]) / y) + A;
                    this.NI = new J(g.lng,g.lat);
                    var B = this.ng, y = -this.NI.lng / v, A = this.NI.lat / v, v = [Math.ceil(y), Math.ceil(A)], g = e.ga(), C;
                    for (C in B) {
                        var F = B[C]
                          , E = F.info;
                        (E[2] != g || E[2] == g && (q > E[0] || w <= E[0] || n > E[1] || f <= E[1])) && this.Rw(F)
                    }
                    B = -e.offsetX + e.width / 2;
                    F = -e.offsetY + e.height / 2;
                    k.$b && (k.$b.style.left = Math.ceil(y + B) - v[0] + "px",
                    k.$b.style.top = Math.ceil(A + F) - v[1] + "px",
                    k.$b.style.WebkitTransform = "translate3d(0,0,0)");
                    y = [];
                    for (e.SA = []; q < w; q++)
                        for (A = n; A < f; A++)
                            y.push([q, A]),
                            e.SA.push({
                                x: q,
                                y: A
                            });
                    this.map.ra() !== ab && this.map.ra() !== Va && (y = this.kU(y, o));
                    y.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([m[0] - 1, m[1] - 1]));
                    o = y.length;
                    this.pk += o;
                    for (q = 0; q < o; q++)
                        this.LZ([y[q][0], y[q][1], g], v, k, a)
                }
            }
        },
        Ie: function(a) {
            var b = this
              , c = a.target;
            b.map.Hd();
            c.Jm && this.map.Ie(c.Jm);
            if (c.$w) {
                for (a = 0; a < b.tg.length; a++)
                    if (b.tg[a] == c)
                        return;
                L.load("vector", function() {
                    c.ta(b.map, b.dg);
                    b.tg.push(c)
                }, p)
            } else {
                for (a = 0; a < b.Qf.length; a++)
                    if (b.Qf[a] == c)
                        return;
                c.ta(this.map, this.il);
                b.Qf.push(c)
            }
        },
        Pf: function(a) {
            a = a.target;
            this.map.Hd();
            a.Jm && this.map.Pf(a.Jm);
            if (a.$w)
                for (var b = 0, c = this.tg.length; b < c; b++)
                    a == this.tg[b] && this.tg.splice(b, 1);
            else {
                b = 0;
                for (c = this.Qf.length; b < c; b++)
                    a == this.Qf[b] && this.Qf.splice(b, 1)
            }
            a.remove()
        },
        sg: function() {
            for (var a = this.im, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.$b;
            this.im = [];
            this.Oi = this.ng = {};
            this.Vw();
            this.Nf()
        },
        Fc: function() {
            var a = this;
            a.nd && z.D.U(a.nd);
            setTimeout(function() {
                a.Nf();
                a.map.dispatchEvent(new Q("onzoomend"))
            }, 10)
        },
        a5: u(),
        dt: function(a) {
            var b = this.map.ra();
            if (!this.map.Hd() && (a ? this.map.K.TZ = a : a = this.map.K.TZ,
            a))
                for (var c = s, c = "2" == D.Ht ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.im[e]; e++)
                    if (f.GZ == p) {
                        b.j.jc = 18;
                        f.getTilesUrl = function(b, e) {
                            var f = b.x
                              , f = this.map.ki.Ov(f, e).Kl
                              , m = b.y
                              , n = Sb("normal")
                              , o = 1;
                            this.map.Sw() && (o = 2);
                            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            return c[Math.abs(f + m) % c.length] + n
                        }
                        ;
                        break
                    }
        }
    });
    function Rc(a, b, c, e, f) {
        this.km = a;
        this.position = c;
        this.ju = [];
        this.name = a.YC(e, f);
        this.info = e;
        this.oI = f.Es();
        e = O("img");
        zb(e);
        e.ZJ = t;
        var g = e.style
          , a = a.map.ra();
        g.position = "absolute";
        g.border = "none";
        g.width = a.Cd() + "px";
        g.height = a.Cd() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Fb = e;
        this.src = b;
        Tc && (this.Fb.style.opacity = 0);
        var i = this;
        this.Fb.onload = function() {
            D.UX.EP();
            i.loaded = p;
            if (i.km) {
                var a = i.km
                  , b = a.Oi;
                if (!b[i.name]) {
                    a.YD++;
                    b[i.name] = i
                }
                if (i.Fb && !Ab(i.Fb) && f.$b) {
                    f.$b.appendChild(i.Fb);
                    if (z.ca.ia <= 6 && z.ca.ia > 0 && i.oI)
                        i.Fb.style.cssText = i.Fb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.YD - a.hU, e;
                for (e in b) {
                    if (c <= 0)
                        break;
                    if (!a.ng[e]) {
                        b[e].km = s;
                        var g = b[e].Fb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Sc(g)
                        }
                        g = s;
                        b[e].Fb = s;
                        delete b[e];
                        a.YD--;
                        c--
                    }
                }
                Tc && new ub({
                    Cc: 20,
                    duration: 200,
                    va: function(a) {
                        if (i.Fb && i.Fb.style)
                            i.Fb.style.opacity = a * 1
                    },
                    finish: function() {
                        i.Fb && i.Fb.style && delete i.Fb.style.opacity
                    }
                });
                Nc(i)
            }
        }
        ;
        this.Fb.onerror = function() {
            Nc(i);
            if (i.km) {
                var a = i.km.map.ra();
                if (a.j.nC) {
                    i.error = p;
                    i.Fb.src = a.j.nC;
                    i.Fb && !Ab(i.Fb) && f.$b.appendChild(i.Fb)
                }
            }
        }
        ;
        e = s
    }
    function Qc(a, b) {
        a.ju.push(b)
    }
    Rc.prototype.vn = function() {
        this.Fb.src = 0 < z.ca.ia && 6 >= z.ca.ia && this.oI ? H.oa + "blank.gif" : "" !== this.src && this.Fb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function Nc(a) {
        for (var b = 0; b < a.ju.length; b++)
            a.ju[b]();
        a.ju.length = 0
    }
    function Sc(a) {
        if (a) {
            a.onload = a.onerror = s;
            var b = a.attributes, c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    f = b[c].name,
                    $a(a[f]) && (a[f] = s)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    Sc(a.children[c])
            }
        }
    }
    function Pc(a, b) {
        a.src = b;
        a.vn()
    }
    var Tc = !z.ca.ia || 8 < z.ca.ia;
    function Mc(a) {
        this.Pe = a || {};
        this.HU = this.Pe.copyright || s;
        this.t_ = this.Pe.transparentPng || t;
        this.Nv = this.Pe.baseLayer || t;
        this.zIndex = this.Pe.zIndex || 0;
        this.aa = Mc.nR++
    }
    Mc.nR = 0;
    z.lang.sa(Mc, z.lang.Ca, "TileLayer");
    z.extend(Mc.prototype, {
        ta: function(a, b) {
            this.Nv && (this.zIndex = -100);
            this.map = a;
            if (!this.$b) {
                var c = O("div")
                  , e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.$b = c
            }
        },
        remove: function() {
            this.$b && this.$b.parentNode && (this.$b.innerHTML = "",
            this.$b.parentNode.removeChild(this.$b));
            delete this.$b
        },
        Es: x("t_"),
        getTilesUrl: function(a, b) {
            if (this.map.ra() !== ab && this.map.ra() !== Va)
                var c = this.map.ki.Ov(a.x, b).Kl;
            var e = "";
            this.Pe.tileUrlTemplate && (e = this.Pe.tileUrlTemplate.replace(/\{X\}/, c),
            e = e.replace(/\{Y\}/, a.y),
            e = e.replace(/\{Z\}/, b));
            return e
        },
        Sl: x("HU"),
        ra: function() {
            return this.wb || Pa
        }
    });
    function Uc(a) {
        Mc.call(this, a);
        this.j = a || {};
        this.iL = p;
        if (this.j.predictDate) {
            if (1 > this.j.predictDate.weekday || 7 < this.j.predictDate.weekday)
                this.j.predictDate = 1;
            if (0 > this.j.predictDate.hour || 23 < this.j.predictDate.hour)
                this.j.predictDate.hour = 0
        }
        this.oT = D.url.proto + D.url.domain.traffic + "/traffic/"
    }
    Uc.prototype = new Mc;
    Uc.prototype.ta = function(a, b) {
        Mc.prototype.ta.call(this, a, b);
        this.B = a
    }
    ;
    Uc.prototype.Es = ea(p);
    Uc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.j.predictDate ? c = "HistoryService?day=" + (this.j.predictDate.weekday - 1) + "&hour=" + this.j.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c += "label=web2D&v=016&");
        var c = this.oT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y
          , e = 1;
        this.B.Sw() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Vc = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , Wc = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , Xc = 100;
    function pb(a, b) {
        Mc.call(this);
        var c = this;
        this.iL = p;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {}
        Ib(a) ? b = a || {} : (c.bn = a,
        b = b || {});
        b.geotableId && (c.tf = b.geotableId);
        b.databoxId && (c.bn = b.databoxId);
        var f = D.Ud + "geosearch";
        c.Wa = {
            tM: b.pointDensity || Xc,
            hX: f + "/detail/",
            iX: f + "/v2/detail/",
            KI: b.age || 36E5,
            Xs: b.q || "",
            d_: "png",
            Y2: [5, 5, 5, 5],
            QX: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            dB: b.ak || qa,
            DE: b.tags || "",
            filter: b.filter || "",
            iN: b.sortby || "",
            eD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            SE: p
        };
        L.load("clayer", function() {
            c.Kd()
        })
    }
    pb.prototype = new Mc;
    pb.prototype.ta = function(a, b) {
        Mc.prototype.ta.call(this, a, b);
        this.B = a
    }
    ;
    pb.prototype.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = this.Wa
          , c = Vc[Math.abs(c + e) % Vc.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.Xs + "&tags=" + f.DE + "&filter=" + f.filter + "&sortby=" + f.iN + "&ak=" + this.Wa.dB + "&age=" + f.KI + "&page_size=" + f.tM + "&format=" + f.d_;
        f.SE || (f = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + f);
        this.tf ? c += "&geotable_id=" + this.tf : this.bn && (c += "&databox_id=" + this.bn);
        return c
    }
    ;
    pb.prototype.enableUseCache = function() {
        this.Wa.SE = p
    }
    ;
    pb.prototype.disableUseCache = function() {
        this.Wa.SE = t
    }
    ;
    pb.NS = /^point\(|\)$/ig;
    pb.OS = /\s+/;
    pb.QS = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Yc = {};
    function Zc(a, b) {
        this.cd = a;
        this.UO = 18;
        this.j = {
            Wx: 256,
            Kc: new S
        };
        z.extend(this.j, b || {})
    }
    var $c = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0]
      , ad = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608]
      , bd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19]
      , cd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    Zc.prototype = {
        getName: x("cd"),
        Cd: function(a) {
            return "na" === this.cd ? cd[a] : this.j.Wx
        },
        as: function(a) {
            return "na" === this.cd ? bd[a] : a
        },
        jk: function() {
            return this.j.Kc
        },
        hc: function(a) {
            return Math.pow(2, this.UO - a)
        },
        PC: function(a) {
            return "na" === this.cd ? ad[$c[a]] : this.hc(a) * this.Cd(a)
        }
    };
    var dd = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0]
                      , n = f.dj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], q = 0; q < o.length; q++) {
                            var v = o[q][1];
                            f.Ic(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.qm(v[1], c, e, a)),
                            v = v["cache" + c],
                            f.B.Rn(b.canvas.id, v, {
                                type: "polygon",
                                jd: m,
                                style: n
                            }),
                            this.wV(b, v, n))
                        }
                }
        },
        wV: function(a, b, c) {
            c = c[0];
            a.fillStyle = c.tw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2)
                a.lineTo(b[e], b[e + 1]);
            a.closePath();
            c.borderWidth && (a.strokeStyle = c.Zn,
            a.lineWidth = c.borderWidth / 2,
            a.stroke());
            a.fill()
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.dj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var q = n[o][1];
                            f.Ic(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.qm(q[1], c, e, a)),
                            q = q["cache" + c],
                            f.B.Rn(b.canvas.id, q, {
                                type: "polygon",
                                jd: k,
                                style: m
                            }),
                            this.yV(b, q, m))
                        }
                }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.dj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var q = n[o][1];
                            f.Ic(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.qm(q[1], c, e, a)),
                            q = q["cache" + c],
                            f.B.Rn(b.canvas.id, q, {
                                type: "polygon",
                                jd: k,
                                style: m
                            }),
                            this.zV(b, q, m))
                        }
                }
        },
        yV: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2)
                a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.Zn;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        zV: function(a, b, c) {
            a.fillStyle = c[0].tw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var ed = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.qm(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Ic(a[i], c)) {
                        var k = e[4 * i]
                          , m = e[4 * i + 1]
                          , n = e[4 * i + 2]
                          , o = e[4 * i + 3]
                          , q = (k + n) / 2
                          , v = (m + o) / 2
                          , n = (k - n) / f
                          , o = (m - o) / f
                          , k = q + n / 2
                          , n = q - n / 2
                          , m = v + o / 2
                          , o = v - o / 2;
                        this.pV(b, k, m, n, o)
                    }
            }
        },
        pV: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.iU([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        iU: function(a, b) {
            var c = b[0] - a[0]
              , e = b[1] - a[1]
              , f = 1.8 * Math.sqrt(c * c + e * e)
              , g = b[0] + 4.8410665352790705 * (c / f)
              , f = b[1] + 4.8410665352790705 * (e / f)
              , c = Math.atan2(e, c) + Math.PI;
            return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
        }
    };
    var fd = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.dj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var q = n[o][2];
                            if (f.Ic(q[0], c)) {
                                var v = q[2];
                                q["cache" + c] || (q["cache" + c] = f.qm(q[1], c, e, a));
                                q = q["cache" + c];
                                f.B.Rn(b.canvas.id, q, {
                                    type: "polygon",
                                    jd: k,
                                    style: m
                                });
                                this.xV(b, q, v, m)
                            }
                        }
                }
        },
        xV: function(a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.PV;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.Zn,
                a.lineWidth = e.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        }
    };
    var gd = {
        parse: function(a, b, c, e, f) {
            for (var g = e.B, i = g.ga(), k = Math.pow(2, 18 - i), m = g.Kc.Xh(g.ub()), n = m.lng, o = m.lat, m = g.Ab(), q = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = []
                  , A = a[w].b_;
                y.x = A[0];
                y.y = A[1];
                y.m5 = A[2];
                for (var B = (A[0] * c * k - n) / k + q / 2, C = (o - (A[1] + 1) * c * k) / k + v / 2, F = 0; F < a[w].length; F++)
                    a[w][F].oL ? this.pM(a[w][F].oL, A, e, b, c, B, C, i, k, q, v, y) : a[w][F].oX ? this.pM(a[w][F].oX, A, e, b, c, B, C, i, k, q, v, y, p, window.c3) : this.xY(a[w][F].RX, A, e, b, c, B, C, i, k, q, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++)
                    for (F = 0; F < m[w].length; F++)
                        a.push(m[w][F])
            } else
                a = this.KY(m, e.B.ga());
            g.wU();
            for (w = 0; w < a.length; w++)
                if (c = a[w],
                !c.zs)
                    if (F = [c.Lf, c.Mf, c.Lf, c.ai, c.$h, c.ai, c.$h, c.Mf, c.Lf, c.Mf],
                    c.style && g.Rn("poi", F, {
                        type: "polygon",
                        jd: c.style.jd,
                        style: c.style
                    }),
                    "fixed" === c.type) {
                        F = t;
                        c.qe && (c.style && 4 === c.direction) && (F = p);
                        if (c.qe)
                            if (F) {
                                var E = this;
                                this.Or(b, c, e, F, function(a) {
                                    for (var c = 0; c < a.nf.length; c++)
                                        E.HJ(b, a.nf[c].Vd, a.nf[c].Wd, a.nf[c].text, a.style, e)
                                })
                            } else
                                this.Or(b, c, e);
                        if (c.style && !F)
                            for (F = 0; F < c.nf.length; F++)
                                this.HJ(b, c.nf[F].Vd, c.nf[F].Wd, c.nf[F].text, c.style, e)
                    } else if ("line" === c.type)
                        for (F = 0; F < c.YN.length; F++)
                            f = c.YN[F],
                            gd.sV(b, f.Vd, f.Wd, f.MT, f.WN, f.width, f.height, c.style, e);
            return m
        },
        pM: function(a, b, c, e, f, g, i, k, m, n, o, q, v, w) {
            a = a[1];
            for (b = 0; b < a.length; b++) {
                var y = a[b]
                  , A = y[0]
                  , B = c.dj(A, "point", k, w)
                  , A = c.dj(A, "pointText", k, w)
                  , y = y[1]
                  , C = s
                  , F = 100
                  , E = 0
                  , G = 0;
                B && B[0] && (B = B[0],
                C = B.qe,
                F = B.zoom || 100);
                A = A && A[0] ? A[0] : s;
                for (B = 0; B < y.length; B++) {
                    var N = y[B][4];
                    if (N && c.Ic(N[2], k)) {
                        var K = Math.round(N[0] / 100) / m + g
                          , M = f - Math.round(N[1] / 100) / m + i;
                        if (v || !(-50 > K || -50 > M || K > n + 50 || M > o + 50)) {
                            var T = N[7] || ""
                              , da = {
                                type: "fixed",
                                uid: N[3] || "",
                                name: T,
                                Bx: N[4],
                                ss: s,
                                nf: [],
                                px: [K, M],
                                style: A
                            };
                            if (C) {
                                var aa = window.iconSetInfo_high[C];
                                if (!aa) {
                                    var va = C.charCodeAt(0);
                                    48 <= va && 57 >= va && (aa = window.iconSetInfo_high["_" + C])
                                }
                                aa && (E = aa[2],
                                G = aa[3],
                                E = E / 2 * F / 100,
                                G = G / 2 * F / 100,
                                da.ss = {
                                    Vd: K - E / 2,
                                    Wd: M - G / 2,
                                    width: E,
                                    height: G
                                },
                                da.qe = C)
                            }
                            if (A) {
                                N = N[5];
                                "number" !== typeof N && (N = 0);
                                var ya = aa = 0
                                  , va = (A.fontSize || 12) / 2
                                  , Ea = 0.2 * va;
                                e.font = gd.yw(A, c);
                                var T = T.split("\\")
                                  , ra = T.length;
                                da.direction = N;
                                for (var Ua = 0; Ua < ra; Ua++) {
                                    var re = T[Ua]
                                      , Oc = e.measureText(re).width;
                                    switch (N) {
                                    case 3:
                                        ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                        aa = K - Oc - E / 2;
                                        ya = ya + va * Ua + Ea * Ua;
                                        break;
                                    case 1:
                                        ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
                                        aa = K + E / 2;
                                        ya = ya + va * Ua + Ea * Ua;
                                        break;
                                    case 2:
                                        ya = M - G / 2 - va * ra - Ea * (ra - 1) - Ea;
                                        aa = K - Oc / 2;
                                        ya = ya + va * Ua + Ea * Ua;
                                        break;
                                    case 0:
                                        ya = M + G / 2 + Ea / 2;
                                        aa = K - Oc / 2;
                                        ya = ya + va * Ua + Ea * Ua;
                                        break;
                                    case 4:
                                        ya = M - va / 2 * ra - Ea * (ra - 1) / 2,
                                        aa = K - Oc / 2,
                                        ya = ya + va * Ua + Ea * Ua
                                    }
                                    da.nf.push({
                                        Vd: aa,
                                        Wd: ya,
                                        width: Oc,
                                        height: va,
                                        text: re
                                    })
                                }
                            }
                            q.push(da)
                        }
                    }
                }
            }
        },
        xY: function(a, b, c, e, f, g, i, k, m, n, o, q, v) {
            b = a[7].length;
            if ((n = c.dj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = gd.yw(n, c);
                for (var o = n.fontSize / 2, w = a[1], y = a[2], A = y.split("").length, B = a[4], C = B.slice(0, 2), F = 2; F < B.length; F += 2)
                    C[F] = C[F - 2] + B[F],
                    C[F + 1] = C[F - 1] + B[F + 1];
                for (F = 2; F < B.length; F += 2)
                    0 === F % (2 * A) || 1 === F % (2 * A) || (C[F] = C[F - 2] + B[F] / v,
                    C[F + 1] = C[F - 1] + B[F + 1] / v);
                for (v = 0; v < b; v++)
                    if (c.Ic(a[7][v], k)) {
                        var F = []
                          , E = l
                          , G = l
                          , N = l
                          , K = l
                          , M = y.split("");
                        a[6][v] && M.reverse();
                        for (var B = 2 * v * A, B = C.slice(B, B + 2 * A), T = 0; T < A; T++) {
                            var da = a[5][A * v + T]
                              , aa = B[2 * T] / 100 / m + g
                              , va = f - B[2 * T + 1] / 100 / m + i
                              , ya = M[T]
                              , Ea = e.measureText(ya).width;
                            if (E === l)
                                E = aa - Ea / 2,
                                G = va - o / 2,
                                N = E + Ea,
                                K = G + o;
                            else {
                                var ra = aa - Ea / 2
                                  , Ua = va - o / 2;
                                ra < E && (E = ra);
                                Ua < G && (G = Ua);
                                ra + Ea > N && (N = ra + Ea);
                                Ua + o > K && (K = Ua + o)
                            }
                            F.push({
                                WN: ya,
                                Vd: aa,
                                Wd: va,
                                MT: da,
                                width: Ea,
                                height: o
                            })
                        }
                        q.push({
                            type: "line",
                            Bx: w,
                            style: n,
                            YN: F,
                            Lf: E,
                            Mf: G,
                            $h: N,
                            ai: K
                        })
                    }
            }
        },
        Or: function(a, b, c, e, f) {
            var g = b.qe;
            if ("lanche" !== g)
                if (gd.Tw[g])
                    this.EJ(a, b, gd.Tw[g], e, f);
                else {
                    var c = c.mK(g)
                      , i = new Image
                      , k = this;
                    i.onload = function() {
                        gd.Tw[g] = this;
                        k.EJ(a, b, this, e, f);
                        i.onload = s
                    }
                    ;
                    i.src = c
                }
        },
        EJ: function(a, b, c, e, f) {
            var g = b.ss
              , i = g.Vd
              , k = g.Wd
              , m = s
              , n = s
              , o = p
              , q = b.style ? b.style.jd : s;
            if (b.style && 62203 === q) {
                for (var v = n = m = 0; v < b.nf.length; v++)
                    m < b.nf[v].width && (m = b.nf[v].width),
                    n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === q && (o = t);
            m !== s && n !== s ? this.vV(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.nf[0].width) + 6,
            this.oV(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        vV: function(a, b, c, e, f, g) {
            var i = b.px[0] - f / 2
              , b = b.px[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        oV: function(a, b, c, e, f, g) {
            var i = b.px[0] - f / 2
              , b = b.px[1] - g / 2
              , g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        sV: function(a, b, c, e, f, g, i, k, m) {
            a.font = gd.yw(k, m);
            a.fillStyle = k.XJ;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Lw && (a.lineWidth = k.Lw,
            a.strokeStyle = k.NK,
            a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        HJ: function(a, b, c, e, f, g) {
            a.font = gd.yw(f, g);
            a.fillStyle = f.XJ;
            0 < f.Lw && (a.lineWidth = f.Lw,
            a.strokeStyle = f.NK,
            a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        yw: function(a, b) {
            var c = a.fontSize / 2
              , e = 10 * a.fontWeight;
            return e = b.rD ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        KY: function(a, b) {
            var c = []
              , e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k]
                      , o = l
                      , q = l
                      , v = l
                      , w = l;
                    if ("fixed" === n.type) {
                        var y = n.ss
                          , A = n.nf;
                        y && (o = y.Vd,
                        q = y.Wd,
                        v = y.Vd + y.width,
                        w = y.Wd + y.height);
                        for (y = 0; y < A.length; y++) {
                            var B = A[y];
                            o !== l ? (B.Vd < o && (o = B.Vd),
                            B.Wd < q && (q = B.Wd),
                            B.Vd + B.width > v && (v = B.Vd + B.width),
                            B.Wd + B.height > w && (w = B.Wd + B.height)) : (o = B.Vd,
                            q = B.Wd,
                            v = B.Vd + B.width,
                            w = B.Wd + B.height)
                        }
                    } else
                        "line" === n.type ? (o = n.Lf,
                        q = n.Mf,
                        v = n.$h,
                        w = n.ai) : "biaopai" === n.type && (w = n.b4,
                        o = w.Vd,
                        q = w.Wd,
                        v = w.Vd + w.width,
                        w = w.Wd + w.height);
                    o !== l && (n.Lf = o,
                    n.Mf = q,
                    n.$h = v,
                    n.ai = w,
                    c.push(n))
                }
            c.sort(function(a, b) {
                return b.Bx - a.Bx || b.Lf - a.Lf || b.Mf - a.Mf
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.zs = t;
                m.RI = [];
                for (k = f + 1; k < g; k++)
                    i = c[k],
                    m.$h - e < i.Lf || (m.Lf > i.$h - e || m.ai - e < i.Mf || m.Mf > i.ai - e) || m.RI.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f],
                k.zs === t) {
                    e = k.RI;
                    k = 0;
                    for (m = e.length; k < m; k++)
                        c[e[k]].zs = p
                }
            return c
        },
        Tw: {}
    };
    var hd = ["round", "butt", "square"]
      , id = ["miter", "round", "bevel"]
      , jd = {
        z1: [{
            stroke: "#FF6600",
            Eb: 1,
            Cb: "round",
            Db: "round",
            fe: [4, 3]
        }],
        A1: [{
            stroke: "#f5f3f0",
            Eb: 1,
            Cb: "round",
            Db: "round",
            fe: [4, 3]
        }],
        o3: [{
            stroke: "#DB7093",
            Eb: 1,
            Cb: "round",
            Db: "round",
            fe: [4, 3]
        }],
        y3: [{
            stroke: "#5c91c5",
            Eb: 1,
            Cb: "round",
            Db: "round",
            fe: [10, 11]
        }],
        D4: [{
            stroke: "#737373",
            Eb: 1,
            Cb: "round",
            Db: "round",
            fe: [6, 3]
        }],
        k5: [{
            stroke: "#aea08a",
            Eb: 1,
            Cb: "round",
            Db: "round",
            fe: [4, 3]
        }]
    }
      , kd = {};
    function ld(a, b) {
        if ("tielu" === a || "tielu_0" === a) {
            if ("off" === window.Ha[b].bmapRailwayVisibility)
                return [];
            var c = "#ffffff"
              , e = "#949494";
            window.Ha[b].bmapRailwayStrokeColor && (c = window.Ha[b].bmapRailwayStrokeColor);
            window.Ha[b].bmapRailwayFillColor && (e = window.Ha[b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b)
                return [{
                    stroke: c,
                    Eb: 1.5,
                    Cb: "butt",
                    Db: "round",
                    fe: [10, 11]
                }, {
                    stroke: e,
                    Eb: 2,
                    Cb: "round",
                    Db: "round"
                }];
            if (17 <= b && 18 >= b)
                return [{
                    stroke: c,
                    Eb: 2.5,
                    Cb: "butt",
                    Db: "round",
                    fe: [15, 16]
                }, {
                    stroke: e,
                    Eb: 5,
                    Cb: "round",
                    Db: "round"
                }];
            if (19 <= b && 20 >= b)
                return [{
                    stroke: c,
                    Eb: 4.5,
                    Cb: "butt",
                    Db: "round",
                    fe: [25, 26]
                }, {
                    stroke: e,
                    Eb: 5,
                    Cb: "round",
                    Db: "round"
                }]
        } else if (0 === a.indexOf("ditie_zj")) {
            if (12 <= b && 16 >= b)
                return [{
                    stroke: "#868686",
                    Eb: 1,
                    Cb: "round",
                    Db: "round",
                    fe: [7, 4]
                }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b)
                return [{
                    stroke: "#6e6e6e",
                    Eb: 1,
                    Cb: "round",
                    Db: "round",
                    fe: [7, 4]
                }]
        } else if (/^tongdaomian/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    Eb: 4,
                    Cb: "square",
                    Db: "round"
                }, {
                    stroke: "#a8a8a8",
                    Eb: 6,
                    Cb: "square",
                    Db: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    Eb: 6,
                    Cb: "square",
                    Db: "round"
                }, {
                    stroke: "#a8a8a8",
                    Eb: 8,
                    Cb: "square",
                    Db: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    Eb: 8,
                    Cb: "square",
                    Db: "round"
                }, {
                    stroke: "#a8a8a8",
                    Eb: 10,
                    Cb: "square",
                    Db: "round"
                }]
        } else if (/^jietizhongduan|^dixiatongdaojieti/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    Eb: 4,
                    Cb: "butt",
                    Db: "round",
                    fe: [2, 1]
                }, {
                    stroke: "#bebebe",
                    Eb: 6,
                    Cb: "butt",
                    Db: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    Eb: 6,
                    Cb: "butt",
                    Db: "round",
                    fe: [3, 1]
                }, {
                    stroke: "#bebebe",
                    Eb: 8,
                    Cb: "butt",
                    Db: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    Eb: 8,
                    Cb: "butt",
                    Db: "round",
                    fe: [4, 2]
                }, {
                    stroke: "#bebebe",
                    Eb: 10,
                    Cb: "butt",
                    Db: "round"
                }]
        } else if (/^guojietianqiao/.test(a))
            return 18 === b ? [{
                stroke: "#ffffff",
                Eb: 6,
                Cb: "butt",
                Db: "round",
                fe: [4, 2]
            }, {
                stroke: "#bebebe",
                Eb: 8,
                Cb: "butt",
                Db: "round"
            }] : [{
                stroke: "#ffffff",
                Eb: 8,
                Cb: "butt",
                Db: "round",
                fe: [4, 2]
            }, {
                stroke: "#bebebe",
                Eb: 10,
                Cb: "butt",
                Db: "round"
            }];
        return jd[a]
    }
    var md = {
        drawLink: function(a, b, c, e, f) {
            var g = a[1];
            g && (a = a[6],
            this.GN(g, c, e, b, a, f, p),
            this.GN(g, c, e, b, a, f, t))
        },
        GN: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0]
                  , n = g.dj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].to || ld(n[0].to, b))
                        for (var o = a[k][1], q = 0; q < o.length; q++) {
                            var v = o[q][3];
                            g.Ic(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.qm(v[1], b, c, f)),
                            v = v["cache" + b],
                            g.B.Rn(e.canvas.id, v, {
                                type: "polyline",
                                jd: m,
                                style: n
                            }),
                            this.tV(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.dj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Ic(o[0], c)) {
                                var q;
                                o["cache" + c] || (o["cache" + c] = f.qm(o[1], c, e, a));
                                q = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.Q_[c].Gc);
                                this.uV(b, q, k, o, f)
                            }
                        }
                }
        },
        uV: function(a, b, c, e, f) {
            var g = c[0].to
              , i = this;
            if (kd[g])
                i.Or(b, e, a, kd[g]);
            else {
                var c = f.mK(g)
                  , k = new Image;
                k.onload = function() {
                    kd[g] = k;
                    i.Or(b, e, a, k);
                    k.onload = s
                }
                ;
                k.src = c
            }
        },
        Or: function(a, b, c, e) {
            var f = [a[0], a[1]]
              , g = [a[2], a[3]]
              , a = g[0] - f[0]
              , g = g[1] - f[1]
              , f = [f[0] + a / 2, f[1] + g / 2]
              , i = Math.sqrt(a * a + g * g)
              , b = b / 10
              , a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        tV: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.to && ld(c.to, f))
                this.AV(a, b, c, ld(c.to, f));
            else {
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var f = 2, g = b.length; f < g; f += 2)
                    a.lineTo(b[f], b[f + 1]);
                c.borderWidth && e ? (a.strokeStyle = c.Zn,
                a.lineCap = hd[c.bU],
                a.lineJoin = id[1],
                a.lineWidth = c.borderWidth / 2,
                a.stroke()) : e || (a.strokeStyle = c.tw,
                a.lineCap = hd[c.OV],
                a.lineJoin = id[1],
                a.lineWidth = c.TJ / 2,
                a.stroke())
            }
        },
        AV: function(a, b, c, e) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.Cb;
                a.lineJoin = c.Db;
                a.lineWidth = c.Eb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.fe)
                    this.rV(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.Cb;
                    a.lineJoin = e.Db;
                    a.lineWidth = e.Eb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (f = b.length; c < f; c += 2)
                        a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        rV: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.Cb;
            a.lineJoin = c.Db;
            a.lineWidth = c.Eb;
            var e = p
              , c = c.fe[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f]
                  , i = b[f + 1]
                  , k = b[f + 2] - g
                  , m = b[f + 3] - i
                  , n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15
                  , m = Math.sqrt(k * k + m * m)
                  , o = c;
                for (a.moveTo(g, i); 0.1 <= m; ) {
                    o > m && (o = m);
                    var q = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (q = -q);
                    g += q;
                    i += n * q;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var nd = 3, od = 4, pd = 7, qd = 8, rd = 15, sd = 16, td = {}, ud = {}, vd = {}, wd = {}, xd, yd = {
        3: {
            start: 3,
            Gc: 3
        },
        4: {
            start: 4,
            Gc: 5
        },
        5: {
            start: 4,
            Gc: 5
        },
        6: {
            start: 6,
            Gc: 7
        },
        7: {
            start: 6,
            Gc: 7
        },
        8: {
            start: 8,
            Gc: 9
        },
        9: {
            start: 8,
            Gc: 9
        },
        10: {
            start: 10,
            Gc: 10
        },
        11: {
            start: 11,
            Gc: 12
        },
        12: {
            start: 11,
            Gc: 12
        },
        13: {
            start: 11,
            Gc: 12
        },
        14: {
            start: 14,
            Gc: 15
        },
        15: {
            start: 14,
            Gc: 15
        },
        16: {
            start: 16,
            Gc: 17
        },
        17: {
            start: 16,
            Gc: 17
        },
        18: {
            start: 18,
            Gc: 19
        },
        19: {
            start: 18,
            Gc: 19
        },
        20: {
            start: 18,
            Gc: 19
        },
        21: {
            start: 18,
            Gc: 19
        }
    };
    function zd(a) {
        this.B = a;
        this.Qc = a.K.devicePixelRatio;
        this.Q_ = yd
    }
    zd.prototype = {
        UB: function(a, b, c, e, f, g, i, k, m) {
            var n = this;
            m || (m = 0);
            if (!(z.gm(window.kh) ? window.iy : window.Mt[f]) && 100 > m)
                setTimeout(function() {
                    n.UB(a, b, c, e, f, g, i, k, m + 1)
                }, 100);
            else {
                xd || (xd = k);
                var o = b.getContext("2d")
                  , q = b.parentNode;
                q.removeChild(b);
                o.clearRect(0, 0, g, g);
                q.appendChild(b);
                q = this.Qc;
                1 < q && !b._scale && (o.scale(q, q),
                b._scale = p);
                o.fillStyle = this.oM("#F5F3F0");
                window.Ha[f].bmapLandColor && (o.fillStyle = this.oM(window.Ha[f].bmapLandColor));
                q = b.style.width;
                b.style.width = "0px";
                b.style.width = q;
                o.fillRect(0, 0, g, g);
                if (a[0])
                    for (q = 0; q < a[0].length; q++) {
                        var v = a[0][q];
                        v[0] === pd && dd.drawPoly(v, o, f, g, this)
                    }
                17 <= this.B.ga() ? (n.GJ(a, o, f, g, i, c, e),
                b.dn = p) : setTimeout(function() {
                    if (!b.kG) {
                        n.GJ(a, o, f, g, i, c, e);
                        b.dn = p
                    }
                }, 1)
            }
        },
        GJ: function(a, b, c, e) {
            if (a[0])
                for (var f = 0; f < a[0].length; f++) {
                    var g = a[0][f]
                      , i = g[0];
                    i === od ? md.drawLink(g, b, c, e, this) : i === sd ? md.drawLink(g, b, c, e, this) : i === rd ? (dd.drawGaoqingRoadBorder(g, b, c, e, this),
                    dd.drawGaoqingRoadFill(g, b, c, e, this)) : 18 === i ? "off" !== window.Ha[c].bmapRoadarrowVisibility && ed.drawArrow(g, b, c, e, Math.pow(2, c - yd[c].Gc), this) : i === qd ? fd.drawHregion(g, b, c, e, this) : 19 === i && md.drawSingleTexture(g, b, c, e, this)
                }
        },
        FJ: function(a, b, c, e, f, g, i) {
            var k = this;
            i || (i = 0);
            !(z.gm(window.kh) ? window.iy : window.Mt[g]) && 100 > i ? setTimeout(function() {
                k.FJ(a, b, c, e, f, g, i + 1)
            }, 100) : (xd || (xd = b),
            a.EY = gd.parse(a, c, e, this, f))
        },
        dj: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e)
                return ud[f] || (ud[f] = this.jg(a, b, c, e)),
                ud[f];
            td[f] = this.jg(a, b, c);
            return td[f]
        },
        jg: function(a, b, c, e) {
            var f;
            f = z.gm(window.kh) ? e || window.iy : e || window.Mt[c];
            e = f[2];
            if ("arrow" === b)
                return this.tY(e[2]);
            switch (b) {
            case "point":
                e = e[0];
                break;
            case "pointText":
                e = e[1];
                break;
            case "line":
                e = e[3];
                break;
            case "polygon":
                e = e[4];
                break;
            case "polygon3d":
                e = e[5]
            }
            var g = []
              , c = f[1][c - 1][0][a];
            if (!c)
                return g;
            for (f = 0; f < c.length; f++) {
                var i = e[c[f]];
                if (i) {
                    switch (b) {
                    case "polygon":
                        i = this.CY(i, a);
                        break;
                    case "line":
                        i = this.yY(i, a);
                        break;
                    case "pointText":
                        i = this.AY(i, a);
                        break;
                    case "point":
                        i = this.zY(i, a);
                        break;
                    case "polygon3d":
                        i = this.BY(i, a)
                    }
                    i.H4 = c[f];
                    g[g.length] = i
                }
            }
            return g
        },
        AY: function(a, b) {
            return {
                jd: b,
                XJ: this.qg(a[0]),
                NK: this.qg(a[1]),
                g1: this.qg(a[2]),
                fontSize: a[3],
                Lw: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                aV: a[7]
            }
        },
        zY: function(a, b) {
            return {
                jd: b,
                Bx: a[0],
                Y4: a[1],
                qe: a[2],
                kX: a[3],
                I3: a[4],
                aV: a[5],
                zoom: a[6]
            }
        },
        yY: function(a, b) {
            return {
                jd: b,
                Zn: this.qg(a[0]),
                tw: this.qg(a[1]),
                borderWidth: a[2],
                TJ: a[3],
                bU: a[4],
                OV: a[5],
                Q2: a[6],
                R2: a[7],
                S2: a[8],
                j3: a[9],
                k3: a[10],
                cU: a[11],
                to: a[12],
                dU: a[13],
                S1: a[14],
                i3: a[15],
                O2: a[16],
                H3: a[17],
                m4: a[18]
            }
        },
        CY: function(a, b) {
            return {
                jd: b,
                tw: this.qg(a[0]),
                Zn: this.qg(a[1]),
                borderWidth: a[2],
                cU: a[3],
                dU: a[4],
                g5: a[5],
                N2: a[6],
                L4: a[7],
                M4: this.qg(a[8])
            }
        },
        BY: function(a, b) {
            return {
                jd: b,
                filter: a[0],
                CM: a[1],
                P2: a[2],
                borderWidth: a[3],
                Zn: this.qg(a[4]),
                PV: this.qg(a[5]),
                R1: this.qg(a[6]),
                Z3: a[7]
            }
        },
        tY: function(a) {
            for (var b in a)
                return a = a[b],
                {
                    color: this.qg(a[0]),
                    kX: a[1],
                    qe: a[2]
                }
        },
        qg: function(a) {
            var b = a;
            if (wd[b])
                return wd[b];
            a >>>= 0;
            wd[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return wd[b]
        },
        oM: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2)
                b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Ic: function(a, b) {
            var c;
            vd[a] || (c = a.toString(2),
            8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
            vd[a] = c);
            c = vd[a];
            return "1" === c[b - yd[b].start]
        },
        qm: function(a, b, c) {
            var e = []
              , b = Math.pow(2, b - yd[b].Gc) / 100
              , f = a[0] * b
              , g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2)
                f += a[i] * b,
                g += a[i + 1] * b,
                e[e.length] = f,
                e[e.length] = c - g;
            return e
        },
        mK: function(a) {
            var b = a.length % xd.length
              , c = this.oW();
            return xd[b] + a + ".png?v=" + c.UE + "&udt=" + c.PE
        },
        oW: function() {
            if (this.hD)
                return this.hD;
            var a = "undefined" !== typeof MSV ? MSV.A3 : {};
            return this.hD = {
                UE: a.version ? a.version : "001",
                PE: a.u_ ? a.u_ : "20150621"
            }
        }
    };
    Q = z.lang.Tt;
    nd = 3;
    od = 4;
    pd = 7;
    qd = 8;
    rd = 15;
    sd = 16;
    function Lc(a, b, c) {
        c = c || {};
        this.B = a;
        this.vv = b;
        this.Qc = b.CM;
        this.Wa = {
            c_: "na",
            zIndex: 0,
            sN: c.tileUrls || {
                http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile", "http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile", "http://online4.map.bdimg.com/pvd/?qt=vtile"],
                https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"]
            },
            gD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"],
            vE: p
        };
        this.PA = "";
        this.LR = {};
        var c = c.urlOpts || {
            styles: "pl",
            extdata: 1,
            textimg: 0,
            mesh3d: 0,
            limit: 30
        }, e;
        for (e in c)
            c.hasOwnProperty(e) && (this.PA = this.PA + "&" + e + "=" + c[e]);
        this.Pg = {};
        this.zr = [];
        this.Fs = 0;
        this.Yw = t;
        this.Tw = {};
        a = this.Wa.c_;
        Yc[a] ? a = Yc[a] : (b = new Zc(a,l),
        a = Yc[a] = b);
        this.ud = a;
        this.B.ud = this.ud
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    fa = Lc.prototype;
    fa.ta = function() {
        var a = this.B
          , b = a.ki;
        if (!this.Nn) {
            var c = b.Xp(this.Wa.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Nn = c
        }
        b.vh.appendChild(this.Nn);
        b.d3 = c;
        if (this.Wa.vE) {
            Ad(this);
            var e = this;
            a.addEventListener("checkvectorclick", function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY
                      , k = e.zr.EY;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o],
                                !a.zs && a.ss && b > a.Lf && b < a.$h && c > a.Mf && c < a.ai) {
                                    b = a.ss;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.Vd + b.width / 2,
                                            y: b.Wd + 6
                                        }
                                    };
                                    break a
                                }
                    b = s
                }
                b && (a = new Q("onvectorclick"),
                a.Z2 = b,
                a.df = "base",
                this.dispatchEvent(a))
            })
        }
    }
    ;
    function Ad(a) {
        var b = a.B
          , c = b.ki
          , e = a.Qc
          , f = b.Ab()
          , g = f.width
          , f = f.height
          , i = O("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.bx = i;
        a.Mo = i.getContext("2d");
        a.Mo.scale(e, e);
        a.Mo.textBaseline = "top";
        c.vh.appendChild(i);
        b.uR = i
    }
    fa.UW = x("ud");
    fa.update = function(a, b) {
        b = b || {};
        this.RE = b.RE;
        if (this.Wa.vE && (b.eo && this.eo(),
        b.MZ)) {
            var c = this.Qc
              , e = this.B.Ab()
              , f = e.width
              , e = e.height
              , g = this.bx
              , i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Mo.scale(c, c);
            this.Mo.textBaseline = "top"
        }
        if (b.b5) {
            c = this.Nn;
            f = 0;
            for (e = c.childNodes.length; f < e; f++)
                c.childNodes[f].dn = t
        }
        this.hw = a;
        this.Po(a)
    }
    ;
    fa.Po = function(a) {
        this.zr = [];
        var b = this.B
          , c = b.ga()
          , e = b.Kc.Xh(b.le)
          , f = this.ud.hc(c)
          , e = [Math.round(-e.lng / f), Math.round(e.lat / f)]
          , f = this.ud.Cd(c)
          , g = b.aa.replace(/^TANGRAM_/, "")
          , i = this.ud.as(c)
          , b = this.B
          , k = -b.offsetY + b.height / 2
          , m = this.Nn;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Je ? this.Je.length = 0 : this.Je = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.wq = t;
            this.Je.push(n)
        }
        if (b = this.nm)
            for (var o in b)
                delete b[o];
        else
            this.nm = {};
        this.Ke ? this.Ke.length = 0 : this.Ke = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , q = a[b][1];
            o = 0;
            for (var v = this.Je.length; o < v; o++) {
                var w = this.Je[o];
                if (w.id === g + "_" + n + "_" + q + "_" + i + "_" + c) {
                    w.wq = p;
                    this.nm[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Je.length; b < k; b++)
            w = this.Je[b],
            w.wq || (w.TA = s,
            delete w.TA,
            w.dn = t,
            this.Ke.push(w));
        o = [];
        v = f * this.Qc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , q = a[b][1]
              , w = n * f + e[0]
              , y = (-1 - q) * f + e[1]
              , A = g + "_" + n + "_" + q + "_" + i + "_" + c
              , B = this.nm[A]
              , C = s;
            if (B)
                C = B.style,
                C.left = w + "px",
                C.top = y + "px",
                C.width = f + "px",
                C.height = f + "px",
                B.dn ? B.GE && B.GE && this.zr.push(B.GE) : (B.kG = p,
                B.TA = s,
                delete B.TA,
                o.push([n, q, B]));
            else {
                if (0 < this.Ke.length) {
                    var B = this.Ke.shift()
                      , F = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    C = B.style;
                    C.width = f + "px";
                    C.height = f + "px";
                    F.clearRect(0, 0, v, v)
                } else
                    B = document.createElement("canvas"),
                    C = B.style,
                    C.position = "absolute",
                    this.Wa.backgroundColor && (C.background = this.Wa.backgroundColor),
                    C.width = f + "px",
                    C.height = f + "px",
                    B.setAttribute("width", v),
                    B.setAttribute("height", v),
                    m.appendChild(B);
                B.id = A;
                C.left = w + "px";
                C.top = y + "px";
                o.push([n, q, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.Ke.length; b < k; b++)
            this.Ke[b].style.visibility = "hidden";
        if (0 === o.length) {
            Bd(this);
            a = this.B.aa.replace(/^TANGRAM_/, "");
            c = this.B.ga();
            e = this.ud.as(c);
            f = {};
            for (g = 0; g < this.hw.length; g++)
                i = this.hw[g],
                i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
                this.Pg[i] && (f[i] = this.Pg[i],
                this.RE && this.vv.VB.UB(this.Pg[i].H_, this.Pg[i].a_, this.Pg[i].Kl, this.Pg[i].wm, this.Pg[i].FD, this.ud.Cd(this.Pg[i].FD), this.ud.PC(this.Pg[i].FD), this.Wa.gD));
            this.Pg = f
        } else {
            this.Fs = o.length;
            this.Yw = t;
            c = this.ud.as(this.B.ga());
            for (e = 0; e < a.length; e++)
                a[e][3] = c;
            for (e = 0; e < o.length; e++)
                a = o[e][2],
                f = o[e][0],
                g = o[e][1],
                o[e][3] = c,
                a.dn = t,
                a.kG = t,
                Cd(this, f, g, c, a)
        }
    }
    ;
    function Cd(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e
          , i = a.LR;
        if (i[g]) {
            if ("loading" === i[g].status)
                return
        } else
            i[g] = {
                status: "init",
                KM: 0
            };
        var k = a
          , m = k.B
          , n = []
          , n = "0" === D.Ht ? k.Wa.sN.http : k.Wa.sN.https
          , o = Math.abs(b + c) % n.length
          , q = "x=" + b + "&y=" + c + "&z=" + e
          , v = Dd(a.vv)
          , w = v.UE
          , v = v.PE
          , y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36)
          , q = q + a.PA + "v=" + w + "&udt=" + v + "&fn=window." + y
          , w = n[o] + "&" + q
          , w = n[o] + "&param=" + window.encodeURIComponent(Kb(q));
        window[y] = function(a) {
            clearTimeout(i[g].Ek);
            i[g] = s;
            if (a) {
                var n = m.ga(), o;
                a: {
                    for (o = 0; o < k.hw.length; o++) {
                        var q = k.hw[o];
                        if (q[0] === b && q[1] === c && q[3] === e) {
                            o = p;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new Q("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Qc
                    });
                    m.dispatchEvent(o);
                    if (m.K.qo) {
                        if (k.Pg[f.id] = {
                            H_: a,
                            a_: f,
                            Kl: b,
                            wm: c,
                            FD: n
                        },
                        k.vv.VB.UB(a, f, b, c, n, k.ud.Cd(n), k.ud.PC(n), k.Wa.gD),
                        k.Wa.vE) {
                            n = [];
                            n.b_ = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++)
                                    a[0][o][0] === nd && n.push({
                                        oL: a[0][o]
                                    });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++)
                                    n.push({
                                        RX: a[2][o]
                                    });
                            f.GE = n;
                            k.zr.push(n);
                            k.Yw === t && k.Fs--;
                            (0 === k.Fs || k.Yw === p) && Bd(k)
                        }
                    } else
                        k.Fs--,
                        (0 === k.Fs || k.Yw === p) && Bd(k);
                    delete window[y]
                }
            }
        }
        ;
        pa(w);
        i[g].status = "loading";
        k = a;
        i[g].Ek = setTimeout(function() {
            3 > i[g].KM ? (i[g].KM++,
            i[g].status = "init",
            Cd(k, b, c, e, f)) : i[g] = s
        }, 4E3)
    }
    function Bd(a) {
        if (a.bx) {
            var b = a.B;
            a.bx.style.left = -b.offsetX + "px";
            a.bx.style.top = -b.offsetY + "px";
            var c = new Q("updateindoorlabel");
            c.labelCanvasDom = b.uR;
            b.dispatchEvent(c);
            if (b.K.qo) {
                a.eo();
                var c = a.ud
                  , e = b.ga()
                  , b = c.as(b.ga());
                a.vv.VB.FJ(a.zr, a.Wa.gD, a.Mo, c.Cd(e), Math.pow(2, e - b), e)
            }
        }
    }
    fa.eo = function() {
        var a = this.B.Ab()
          , b = this.Qc;
        this.Mo.clearRect(0, 0, a.width * b, a.height * b)
    }
    ;
    fa.remove = function() {
        var a = this.B.ki;
        this.Nn && a.vh.removeChild(this.Nn)
    }
    ;
    function Kc(a) {
        this.B = a.map;
        this.We = [];
        this.jr = {};
        this.CM = this.B.K.devicePixelRatio;
        this.VB = new zd(this.B);
        this.ta()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    fa = Kc.prototype;
    fa.ta = function() {
        var a = this
          , b = this.B;
        b.addEventListener("addtilelayer", function(b) {
            a.Ie(b.target)
        });
        b.addEventListener("removetilelayer", function(b) {
            a.Pf(b.target)
        });
        setTimeout(function() {
            b.addEventListener("onmoveend", function(b) {
                "centerAndZoom" !== b.az && a.update()
            });
            b.addEventListener("onmoving", function() {
                a.update()
            });
            b.addEventListener("onzoomend", function(b) {
                "centerAndZoom" !== b.az && a.update({
                    eo: p
                })
            });
            b.addEventListener("centerandzoom", function() {
                a.update({
                    eo: p
                })
            });
            b.addEventListener("onupdatestyles", function() {
                a.update({
                    eo: p,
                    RE: p
                });
                a.B.lf(a.B.ub());
                a.B.dispatchEvent(new Q("ontilesloaded"))
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize", function() {
            a.update({
                MZ: p
            })
        });
        a.update()
    }
    ;
    fa.Ie = function(a) {
        if (a instanceof Lc) {
            for (var b = 0; b < this.We.length; b++)
                if (this.We[b] === a)
                    return;
            this.We.push(a);
            a.ta();
            this.B.loaded && this.update()
        }
    }
    ;
    fa.Pf = function(a) {
        if (a instanceof Lc) {
            for (var b = 0; b < this.We.length; b++)
                if (this.We[b] === a) {
                    this.We.splice(b, 1);
                    break
                }
            a.remove()
        }
    }
    ;
    fa.DK = function(a) {
        var b = a.getName();
        if (this.jr[b])
            return this.jr[b];
        var c = this.B
          , e = c.ga()
          , f = c.mc
          , g = a.PC(e);
        c.aa.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g)
          , k = Math.ceil(f.lat / g)
          , a = a.Cd(e)
          , m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a]
          , e = m[0] - Math.ceil((c.width / 2 - m[2]) / a)
          , f = m[1] - Math.ceil((c.height / 2 - m[3]) / a)
          , g = m[0] + Math.ceil((c.width / 2 + m[2]) / a)
          , c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.xe ? this.xe.length = 0 : this.xe = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++)
                this.xe.push([a, e]);
        this.xe.sort(function(a) {
            return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([i, k]));
        this.jr[b] = this.xe.slice(0);
        return this.jr[b]
    }
    ;
    function Dd(a) {
        if (a.VE)
            return a.VE;
        a.VE = {
            UE: "001",
            PE: Sb("normal")
        };
        return a.VE
    }
    fa.update = function(a) {
        this.jr = {};
        for (var b = 0; b < this.We.length; b++) {
            var c = this.We[b]
              , e = this.DK(c.ud);
            c.update(e, a)
        }
    }
    ;
    function Ed(a, b, c) {
        this.cd = a;
        this.We = b instanceof Mc ? [b] : b.slice(0);
        c = c || {};
        this.j = {
            f_: c.tips || "",
            BD: "",
            Zb: c.minZoom || 3,
            jc: c.maxZoom || 18,
            X2: c.minZoom || 3,
            W2: c.maxZoom || 18,
            Wx: 256,
            FE: c.textColor || "black",
            nC: c.errorImageUrl || "",
            $a: new hb(new J(-21364736,-16023552),new J(23855104,19431424)),
            Kc: c.projection || new S
        };
        1 <= this.We.length && (this.We[0].Nv = p);
        z.extend(this.j, c)
    }
    z.extend(Ed.prototype, {
        getName: x("cd"),
        ks: function() {
            return this.j.f_
        },
        w2: function() {
            return this.j.BD
        },
        TW: function() {
            return this.We[0]
        },
        K2: x("We"),
        Cd: function() {
            return this.j.Wx
        },
        Xi: function() {
            return this.j.Zb
        },
        Sh: function() {
            return this.j.jc
        },
        setMaxZoom: function(a) {
            this.j.jc = a
        },
        Zl: function() {
            return this.j.FE
        },
        jk: function() {
            return this.j.Kc
        },
        p2: function() {
            return this.j.nC
        },
        Cd: function() {
            return this.j.Wx
        },
        hc: function(a) {
            return Math.pow(2, 18 - a)
        },
        IK: function(a) {
            return this.hc(a) * this.Cd()
        }
    });
    var Fd = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"]
      , Gd = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[4] + "/tile/"]
      , Hd = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }
      , Id = new Mc;
    Id.GZ = p;
    Id.getTilesUrl = function(a, b, c) {
        var e = a.x
          , a = a.y
          , f = Sb("normal")
          , g = 1
          , c = Hd[c];
        this.map.Sw() && (g = 2);
        e = this.map.ki.Ov(e, b).Kl;
        //cqy 使用离线瓦片
        return (Gd[Math.abs(e + a) % Gd.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == z.ca.ia ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
        //return "../maptile/" + b + "/" + e + "/" + a + ".png";
    }
    ;
    var Pa = new Ed("\u5730\u56fe",Id,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    })
      , Jd = new Mc;
    Jd.rN = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Jd.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = 256 * Math.pow(2, 20 - b)
          , e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.rN[Math.abs(c + e) % this.rN.length] + this.map.Qb + "/" + this.map.Uv + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    }
    ;
    var Sa = new Ed("\u4e09\u7ef4",Jd,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new jb
    });
    Sa.hc = function(a) {
        return Math.pow(2, 20 - a)
    }
    ;
    Sa.ek = function(a) {
        if (!a)
            return "";
        var b = H.nB, c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].wx;
        return ""
    }
    ;
    Sa.fK = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    }
    ;
    var Kd = new Mc({
        Nv: p
    });
    Kd.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y;
        return (Fd[Math.abs(c + e) % Fd.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Sb("satellite")).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var ab = new Ed("\u536b\u661f",Kd,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    })
      , Ld = new Mc({
        transparentPng: p
    });
    Ld.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = Sb("satelliteStreet");
        return (Gd[Math.abs(c + e) % Gd.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == z.ca.ia ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Va = new Ed("\u6df7\u5408",[Kd, Ld],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var Md = 1
      , W = {};
    window.U_ = W;
    function X(a, b) {
        z.lang.Ca.call(this);
        this.rd = {};
        this.Am(a);
        b = b || {};
        b.la = b.renderOptions || {};
        this.j = {
            la: {
                Ka: b.la.panel || s,
                map: b.la.map || s,
                Ng: b.la.autoViewport || p,
                $s: b.la.selectFirstResult,
                qs: b.la.highlightMode,
                Rb: b.la.enableDragging || t
            },
            Ps: b.onSearchComplete || u(),
            eM: b.onMarkersSet || u(),
            dM: b.onInfoHtmlSet || u(),
            gM: b.onResultsHtmlSet || u(),
            cM: b.onGetBusListComplete || u(),
            bM: b.onGetBusLineComplete || u(),
            $L: b.onBusListHtmlSet || u(),
            ZL: b.onBusLineHtmlSet || u(),
            PD: b.onPolylinesSet || u(),
            Yo: b.reqFrom || ""
        };
        this.j.la.Ng = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
        this.j.la.Ka = z.zc(this.j.la.Ka)
    }
    z.sa(X, z.lang.Ca);
    z.extend(X.prototype, {
        getResults: function() {
            return this.Bc ? this.ui : this.ha
        },
        enableAutoViewport: function() {
            this.j.la.Ng = p
        },
        disableAutoViewport: function() {
            this.j.la.Ng = t
        },
        Am: function(a) {
            a && (this.rd.src = a)
        },
        it: function(a) {
            this.j.Ps = a || u()
        },
        setMarkersSetCallback: function(a) {
            this.j.eM = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.j.PD = a || u()
        },
        setInfoHtmlSetCallback: function(a) {
            this.j.dM = a || u()
        },
        setResultsHtmlSetCallback: function(a) {
            this.j.gM = a || u()
        },
        Xl: x("Ge")
    });
    var Nd = {
        xF: D.Ud,
        jb: function(a, b, c, e, f) {
            this.NY(b);
            var g = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + g] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
                a && a(b, c),
                delete D._rd["_cbk" + g])
            }
            ;
            e = e || "";
            b = c && c.y_ ? Gb(b, encodeURI) : Gb(b, encodeURIComponent);
            this.xF = c && c.PJ ? c.IM ? c.IM : D.Qo : D.Ud;
            e = this.xF + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + qa);
            pa(e)
        },
        NY: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                case "bt":
                    b = "z_qt|bt";
                    break;
                case "nav":
                    b = "z_qt|nav";
                    break;
                case "walk":
                    b = "z_qt|walk";
                    break;
                case "bse":
                    b = "z_qt|bse";
                    break;
                case "nse":
                    b = "z_qt|nse";
                    break;
                case "drag":
                    b = "z_qt|drag"
                }
                "" !== b && D.alog("cus.fire", "count", b)
            }
        }
    };
    window.g0 = Nd;
    D._rd = {};
    var db = {};
    window.f0 = db;
    db.EM = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    db.uY = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    db.vY = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var Od = 2
      , Pd = 6
      , Qd = 8
      , Rd = 2
      , Sd = 3
      , Td = 6
      , Ud = 0
      , Vd = "bt"
      , Wd = "nav"
      , Xd = "walk"
      , Yd = "bl"
      , Zd = "bsl"
      , $d = "ride"
      , ae = 15
      , be = 18;
    D.I = window.Instance = z.lang.Hc;
    function ce(a, b, c) {
        z.lang.Ca.call(this);
        if (a) {
            this.Ua = "object" == typeof a ? a : z.zc(a);
            this.page = 1;
            this.Dd = 100;
            this.OI = "pg";
            this.Of = 4;
            this.YI = b;
            this.update = p;
            a = {
                page: 1,
                R4: 100,
                Dd: 100,
                Of: 4,
                OI: "pg",
                update: p
            };
            c || (c = a);
            for (var e in c)
                "undefined" != typeof c[e] && (this[e] = c[e]);
            this.va()
        }
    }
    z.extend(ce.prototype, {
        va: function() {
            this.ta()
        },
        ta: function() {
            this.rU();
            this.Ua.innerHTML = this.QU()
        },
        rU: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Dd)) && (this.Dd = 1);
            1 > this.page && (this.page = 1);
            1 > this.Dd && (this.Dd = 1);
            this.page > this.Dd && (this.page = this.Dd);
            this.page = parseInt(this.page);
            this.Dd = parseInt(this.Dd)
        },
        B2: function() {
            location.search.match(RegExp("[?&]?" + this.OI + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        QU: function() {
            var a = []
              , b = this.page - 1
              , c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Of) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.aa + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.aa + "').toPage(" + b + ");"))
            }
            if (this.page < this.Of)
                e = 0 == this.page % this.Of ? this.page - this.Of - 1 : this.page - this.page % this.Of + 1,
                b = e + this.Of - 1;
            else {
                e = Math.floor(this.Of / 2);
                var f = this.Of % 2 - 1
                  , b = this.Dd > this.page + e ? this.page + e : this.Dd;
                e = this.page - e - f
            }
            this.page > this.Dd - this.Of && this.page >= this.Of && (e = this.Dd - this.Of + 1,
            b = this.Dd);
            for (f = e; f <= b; f++)
                0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Dd && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>",
                a.push(e.replace("{temp3}", "BMap.I('" + this.aa + "').toPage(" + f + ");"))));
            c > this.Dd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.aa + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.YI && (this.YI(a),
            this.page = a);
            this.update && this.va()
        }
    });
    function fb(a, b) {
        X.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.gp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.NB() : this.fC();
        this.xa = [];
        this.of = [];
        this.kb = -1;
        this.Na = [];
        var c = this;
        L.load("local", function() {
            c.Hy()
        }, p)
    }
    z.sa(fb, X, "LocalSearch");
    fb.zp = 10;
    fb.b0 = 1;
    fb.Qm = 100;
    fb.nF = 2E3;
    fb.vF = 1E5;
    z.extend(fb.prototype, {
        search: function(a, b) {
            this.Na.push({
                method: "search",
                arguments: [a, b]
            })
        },
        xm: function(a, b, c) {
            this.Na.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        dp: function(a, b, c, e) {
            this.Na.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        Le: function() {
            delete this.Ia;
            delete this.Ge;
            delete this.ha;
            delete this.ua;
            this.kb = -1;
            this.Ta();
            this.j.la.Ka && (this.j.la.Ka.innerHTML = "")
        },
        $l: u(),
        fC: function() {
            this.j.la.$s = p
        },
        NB: function() {
            this.j.la.$s = t
        },
        gp: function(a) {
            this.j.rk = "number" == typeof a && !isNaN(a) ? 1 > a ? fb.zp : a > fb.Qm ? fb.zp : a : fb.zp
        },
        ff: function() {
            return this.j.rk
        },
        toString: ea("LocalSearch")
    });
    var de = fb.prototype;
    U(de, {
        clearResults: de.Le,
        setPageCapacity: de.gp,
        getPageCapacity: de.ff,
        gotoPage: de.$l,
        searchNearby: de.dp,
        searchInBounds: de.xm,
        search: de.search,
        enableFirstResultSelection: de.fC,
        disableFirstResultSelection: de.NB
    });
    function ee(a, b) {
        X.call(this, a, b)
    }
    z.sa(ee, X, "BaseRoute");
    z.extend(ee.prototype, {
        Le: u()
    });
    function fe(a, b) {
        X.call(this, a, b);
        b = b || {};
        this.ht(b.policy);
        this.WM(b.intercityPolicy);
        this.eN(b.transitTypePolicy);
        this.gp(b.pageCapacity);
        this.xb = Vd;
        this.Fp = Md;
        this.xa = [];
        this.kb = -1;
        this.j.hn = b.enableTraffic || t;
        this.Na = [];
        var c = this;
        L.load("route", function() {
            c.Kd()
        })
    }
    fe.Qm = 100;
    fe.oO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    fe.pO = [0, 3, 4, 0, 0, 0, 5];
    z.sa(fe, ee, "TransitRoute");
    z.extend(fe.prototype, {
        ht: function(a) {
            this.j.be = 0 <= a && 5 >= a ? a : 0
        },
        WM: function(a) {
            this.j.fm = 0 <= a && 2 >= a ? a : 0
        },
        eN: function(a) {
            this.j.Gm = 0 <= a && 2 >= a ? a : 0
        },
        Jz: function(a, b) {
            this.Na.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Na.push({
                method: "search",
                arguments: [a, b]
            })
        },
        gp: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
            isNaN(a))) {
                this.j.rk = fe.Qm;
                return
            }
            this.j.rk = "number" !== typeof a ? fe.Qm : 1 <= a && a <= fe.Qm ? Math.round(a) : fe.Qm
        },
        toString: ea("TransitRoute"),
        S0: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var ge = fe.prototype;
    U(ge, {
        _internalSearch: ge.Jz
    });
    function he(a, b) {
        X.call(this, a, b);
        this.xa = [];
        this.kb = -1;
        this.Na = [];
        var c = this
          , e = this.j.la;
        1 !== e.qs && 2 !== e.qs && (e.qs = 1);
        this.su = this.j.la.Rb ? p : t;
        L.load("route", function() {
            c.Kd()
        });
        this.oD && this.oD()
    }
    he.DO = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    z.sa(he, ee, "DWRoute");
    z.extend(he.prototype, {
        search: function(a, b, c) {
            this.Na.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function ie(a, b) {
        he.call(this, a, b);
        b = b || {};
        this.j.hn = b.enableTraffic || t;
        this.ht(b.policy);
        this.xb = Wd;
        this.Fp = Sd
    }
    z.sa(ie, he, "DrivingRoute");
    ie.prototype.ht = function(a) {
        this.j.be = 0 <= a && 5 >= a ? a : 0
    }
    ;
    function je(a, b) {
        he.call(this, a, b);
        this.xb = Xd;
        this.Fp = Rd;
        this.su = t
    }
    z.sa(je, he, "WalkingRoute");
    function ke(a, b) {
        he.call(this, a, b);
        this.xb = $d;
        this.Fp = Td;
        this.su = t
    }
    z.sa(ke, he, "RidingRoute");
    function le(a, b) {
        z.lang.Ca.call(this);
        this.Kf = [];
        this.sk = [];
        this.j = b;
        this.ij = a;
        this.map = this.j.la.map || s;
        this.QM = this.j.QM;
        this.vb = s;
        this.Yj = 0;
        this.CE = "";
        this.cf = 1;
        this.mC = "";
        this.Zo = [0, 0, 0, 0, 0, 0, 0];
        this.BL = [];
        this.xr = [1, 1, 1, 1, 1, 1, 1];
        this.zN = [1, 1, 1, 1, 1, 1, 1];
        this.$o = [0, 0, 0, 0, 0, 0, 0];
        this.vm = [0, 0, 0, 0, 0, 0, 0];
        this.Gb = [{
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }, {
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }, {
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }, {
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }, {
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }, {
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }, {
            m: "",
            vd: 0,
            Hm: 0,
            x: 0,
            y: 0,
            na: -1
        }];
        this.Lh = -1;
        this.Ct = [];
        this.NE = [];
        L.load("route", u())
    }
    z.lang.sa(le, z.lang.Ca, "RouteAddr");
    var ne = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(ne);
    var oe = /android/i.test(ne);
    function pe(a) {
        this.Pe = a || {}
    }
    z.extend(pe.prototype, {
        PM: function(a, b, c) {
            var e = this;
            L.load("route", function() {
                e.Kd(a, b, c)
            })
        }
    });
    function qe(a) {
        this.j = {};
        z.extend(this.j, a);
        this.Na = [];
        var b = this;
        L.load("othersearch", function() {
            b.Kd()
        })
    }
    z.sa(qe, z.lang.Ca, "Geocoder");
    z.extend(qe.prototype, {
        Wl: function(a, b, c) {
            this.Na.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Ul: function(a, b, c) {
            this.Na.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: ea("Geocoder")
    });
    var ue = qe.prototype;
    U(ue, {
        getPoint: ue.Wl,
        getLocation: ue.Ul
    });
    function Geolocation(a) {
        a = a || {};
        this.K = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            oi: a.SDKLocation || t
        };
        this.je = [];
        var b = this;
        L.load("othersearch", function() {
            for (var a = 0, e; e = b.je[a]; a++)
                b[e.method].apply(b, e.arguments)
        })
    }
    z.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.je.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return Od
        },
        enableSDKLocation: function() {
            I() && (this.K.oi = p)
        },
        disableSDKLocation: function() {
            this.K.oi = t
        }
    });
    function ve(a) {
        a = a || {};
        a.la = a.renderOptions || {};
        this.j = {
            la: {
                map: a.la.map || s
            }
        };
        this.Na = [];
        var b = this;
        L.load("othersearch", function() {
            b.Kd()
        })
    }
    z.sa(ve, z.lang.Ca, "LocalCity");
    z.extend(ve.prototype, {
        get: function(a) {
            this.Na.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: ea("LocalCity")
    });
    function we() {
        this.Na = [];
        var a = this;
        L.load("othersearch", function() {
            a.Kd()
        })
    }
    z.sa(we, z.lang.Ca, "Boundary");
    z.extend(we.prototype, {
        get: function(a, b) {
            this.Na.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: ea("Boundary")
    });
    function xe(a, b) {
        X.call(this, a, b);
        this.AO = Yd;
        this.CO = ae;
        this.zO = Zd;
        this.BO = be;
        this.Na = [];
        var c = this;
        L.load("buslinesearch", function() {
            c.Kd()
        })
    }
    xe.Gu = H.oa + "iw_plus.gif";
    xe.tR = H.oa + "iw_minus.gif";
    xe.kT = H.oa + "stop_icon.png";
    z.sa(xe, X);
    z.extend(xe.prototype, {
        getBusList: function(a) {
            this.Na.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Na.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.j.cM = a || u()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.j.bM = a || u()
        },
        setBusListHtmlSetCallback: function(a) {
            this.j.$L = a || u()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.j.ZL = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.j.PD = a || u()
        }
    });
    function ye(a) {
        X.call(this, a);
        a = a || {};
        this.Wa = {
            input: a.input || s,
            gB: a.baseDom || s,
            types: a.types || [],
            Ps: a.onSearchComplete || u()
        };
        this.rd.src = a.location || "\u5168\u56fd";
        this.Li = "";
        this.cg = s;
        this.VG = "";
        this.Bi();
        Ta(La);
        var b = this;
        L.load("autocomplete", function() {
            b.Kd()
        })
    }
    z.sa(ye, X, "Autocomplete");
    z.extend(ye.prototype, {
        Bi: u(),
        show: u(),
        U: u(),
        sE: function(a) {
            this.Wa.types = a
        },
        Am: function(a) {
            this.rd.src = a
        },
        search: ca("Li"),
        Ix: ca("VG"),
        it: function(a) {
            this.Wa.Ps = a
        }
    });
    var Wa;
    function Ra(a, b) {
        function c() {
            f.j.visible ? ("inter" === f.Ee && f.j.haveBreakId && f.j.indoorExitControl === p ? z.D.show(f.Cz) : z.D.U(f.Cz),
            this.j.closeControl && this.sf && this.B && this.B.Qa() === this.C ? z.D.show(f.sf) : z.D.U(f.sf),
            this.j.forceCloseControl && z.D.show(f.sf)) : (z.D.U(f.sf),
            z.D.U(f.Cz))
        }
        this.C = "string" == typeof a ? z.$(a) : a;
        this.aa = ze++;
        this.j = {
            enableScrollWheelZoom: p,
            panoramaRenderer: "flash",
            swfSrc: D.Th("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: p,
            indoorExitControl: p,
            indoorFloorControl: t,
            linksControl: p,
            clickOnRoad: p,
            navigationControl: p,
            closeControl: p,
            indoorSceneSwitchControl: p,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {}, e;
        for (e in b)
            this.j[e] = b[e];
        b.closeControl === p && (this.j.forceCloseControl = p);
        b.useWebGL === t && Qa(t);
        this.Da = {
            heading: 0,
            pitch: 0
        };
        this.tn = [];
        this.Hb = this.Ya = s;
        this.Nj = this.qq();
        this.xa = [];
        this.Fc = 1;
        this.Ee = this.SR = this.Rk = "";
        this.De = {};
        this.Ef = s;
        this.Gg = [];
        this.Jq = [];
        "cvsRender" == this.Nj || Qa() ? (this.Fj = 90,
        this.Hj = -90) : "cssRender" == this.Nj && (this.Fj = 45,
        this.Hj = -45);
        this.Nq = t;
        var f = this;
        this.vn = function() {
            this.Nj === "flashRender" ? L.load("panoramaflash", function() {
                f.Bi()
            }, p) : L.load("panorama", function() {
                f.fb()
            }, p);
            b.df == "api" ? Ta(Ga) : Ta(Ia);
            this.vn = u()
        }
        ;
        this.j.ER !== p && (this.vn(),
        D.Lp("cus.fire", "count", "z_loadpanoramacount"));
        this.vS(this.C);
        this.addEventListener("id_changed", function() {
            Ta(Fa, {
                from: b.df
            })
        });
        this.NO();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Ae = 4
      , Be = 1
      , ze = 0;
    z.lang.sa(Ra, z.lang.Ca, "Panorama");
    z.extend(Ra.prototype, {
        NO: function() {
            var a = this
              , b = this.sf = O("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.U()
            }
            ;
            this.C.appendChild(b);
            var c = this.Cz = O("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.so()
            }
            ;
            this.C.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
            c.style.backgroundColor = "rgb(37,37,37)")
        },
        so: u(),
        vS: function(a) {
            var b, c;
            b = a.style;
            c = Ya(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
            b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Ya(a).zIndex,
                !a || "auto" === a)
                    b.zIndex = 0
        },
        tW: x("tn"),
        Sb: x("Ya"),
        VW: x("pv"),
        dN: x("pv"),
        fa: x("Hb"),
        Ea: x("Da"),
        ga: x("Fc"),
        Wi: x("Rk"),
        D2: function() {
            return this.N0 || []
        },
        y2: x("SR"),
        js: x("Ee"),
        Kx: function(a) {
            a !== this.Ee && (this.Ee = a,
            this.dispatchEvent(new Q("onscene_type_changed")))
        },
        xc: function(a, b, c) {
            "object" === typeof b && (c = b,
            b = l);
            a != this.Ya && (this.bl = this.Ya,
            this.cl = this.Hb,
            this.Ya = a,
            this.Ee = b || "street",
            this.Hb = s,
            c && c.pov && this.hd(c.pov))
        },
        qa: function(a) {
            a.gc(this.Hb) || (this.bl = this.Ya,
            this.cl = this.Hb,
            this.Hb = a,
            this.Ya = s)
        },
        hd: function(a) {
            a && (this.Da = a,
            a = this.Da.pitch,
            a > this.Fj ? a = this.Fj : a < this.Hj && (a = this.Hj),
            this.Nq = p,
            this.Da.pitch = a)
        },
        BZ: function(a, b) {
            this.Hj = 0 <= a ? 0 : a;
            this.Fj = 0 >= b ? 0 : b
        },
        Lc: function(a) {
            a != this.Fc && (a > Ae && (a = Ae),
            a < Be && (a = Be),
            a != this.Fc && (this.Fc = a),
            "cssRender" === this.Nj && this.hd(this.Da))
        },
        CA: function() {
            if (this.B)
                for (var a = this.B.Gw(), b = 0; b < a.length; b++)
                    (a[b]instanceof V || a[b]instanceof uc) && a[b].point && this.xa.push(a[b])
        },
        pE: ca("B"),
        gt: function(a) {
            this.Ef = a || "none"
        },
        xk: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.j[b][c] = a[b][c];
                else
                    this.j[b] = a[b];
                a.closeControl === p && (this.j.forceCloseControl = p);
                a.closeControl === t && (this.j.forceCloseControl = t);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new Q("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new Q("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new Q("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new Q("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new Q("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new Q("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new Q("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new Q("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new Q("onindoorfloor_options_changed"))
                }
            }
        },
        nk: function() {
            this.kl.style.visibility = "hidden"
        },
        Ox: function() {
            this.kl.style.visibility = "visible"
        },
        FV: function() {
            this.j.enableScrollWheelZoom = p
        },
        gV: function() {
            this.j.enableScrollWheelZoom = t
        },
        show: function() {
            this.j.visible = p
        },
        U: function() {
            this.j.visible = t
        },
        qq: function() {
            return Xa() && !I() && "javascript" != this.j.panoramaRenderer ? "flashRender" : !I() && Ob() ? "cvsRender" : "cssRender"
        },
        La: function(a) {
            this.De[a.dd] = a
        },
        Ob: function(a) {
            delete this.De[a]
        },
        cD: function() {
            return this.j.visible
        },
        Tg: function() {
            return new P(this.C.clientWidth,this.C.clientHeight)
        },
        Qa: x("C"),
        cK: function() {
            var a = D.Th("baidumap", "?")
              , b = this.Sb();
            if (b) {
                var b = {
                    panotype: this.js(),
                    heading: this.Ea().heading,
                    pitch: this.Ea().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Pw: function() {
            this.xk({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        wE: function() {
            this.xk({
                copyrightControlOptions: {
                    logoVisible: p
                }
            })
        },
        ZA: function(a) {
            function b(a, b) {
                return function() {
                    a.Jq.push({
                        NL: b,
                        ML: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++)
                e = c[f],
                this[e] = b(this, e);
            this.Gg.push(a)
        },
        aE: function(a) {
            for (var b = this.Gg.length; b--; )
                this.Gg[b] === a && this.Gg.splice(b, 1)
        },
        oE: u()
    });
    var Ce = Ra.prototype;
    U(Ce, {
        setId: Ce.xc,
        setPosition: Ce.qa,
        setPov: Ce.hd,
        setZoom: Ce.Lc,
        setOptions: Ce.xk,
        getId: Ce.Sb,
        getPosition: Ce.fa,
        getPov: Ce.Ea,
        getZoom: Ce.ga,
        getLinks: Ce.tW,
        getBaiduMapUrl: Ce.cK,
        hideMapLogo: Ce.Pw,
        showMapLogo: Ce.wE,
        enableDoubleClickZoom: Ce.O1,
        disableDoubleClickZoom: Ce.F1,
        enableScrollWheelZoom: Ce.FV,
        disableScrollWheelZoom: Ce.gV,
        show: Ce.show,
        hide: Ce.U,
        addPlugin: Ce.ZA,
        removePlugin: Ce.aE,
        getVisible: Ce.cD,
        addOverlay: Ce.La,
        removeOverlay: Ce.Ob,
        getSceneType: Ce.js,
        setPanoramaPOIType: Ce.gt,
        exitInter: Ce.so,
        setInteractiveState: Ce.oE
    });
    U(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function De() {
        z.lang.Ca.call(this);
        this.dd = "PanoramaOverlay_" + this.aa;
        this.P = s;
        this.Oa = p
    }
    z.lang.sa(De, z.lang.Ca, "PanoramaOverlayBase");
    z.extend(De.prototype, {
        z2: x("dd"),
        ta: function() {
            ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            ba("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Df: function() {
            ba("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function Ee(a, b) {
        De.call(this);
        var c = {
            position: s,
            altitude: 2,
            displayDistance: p
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Hb = c.position;
        this.uj = a;
        this.Mp = c.altitude;
        this.YP = c.displayDistance;
        this.FE = c.color;
        this.QK = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.SI = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.WI = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.iD = c.imageUrl;
        this.size = c.size;
        this.re = c.image;
        this.width = c.width;
        this.height = c.height;
        this.nX = c.imageData;
        this.borderWidth = c.borderWidth
    }
    z.lang.sa(Ee, De, "PanoramaLabel");
    z.extend(Ee.prototype, {
        e2: x("borderWidth"),
        getImageData: x("nX"),
        Zl: x("FE"),
        t2: x("QK"),
        a2: x("backgroundColor"),
        b2: x("SI"),
        c2: x("borderColor"),
        d2: x("WI"),
        r2: x("fontSize"),
        A2: x("padding"),
        u2: x("iD"),
        Ab: x("size"),
        Aw: x("re"),
        qa: function(a) {
            this.Hb = a;
            this.Df("position", a)
        },
        fa: x("Hb"),
        Xc: function(a) {
            this.uj = a;
            this.Df("content", a)
        },
        fk: x("uj"),
        iE: function(a) {
            this.Mp = a;
            this.Df("altitude", a)
        },
        wo: x("Mp"),
        Ea: function() {
            var a = this.fa()
              , b = s
              , c = s;
            this.P && (c = this.P.fa());
            if (a && c)
                if (a.gc(c))
                    b = this.P.Ea();
                else {
                    b = {};
                    b.heading = Fe(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b
                      , c = this.wo()
                      , e = this.kn();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                }
            return b
        },
        kn: function() {
            var a = 0, b, c;
            this.P && (b = this.P.fa(),
            (c = this.fa()) && !c.gc(b) && (a = S.yo(b, c)));
            return a
        },
        U: function() {
            ba("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            ba("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Df: u()
    });
    var Ge = Ee.prototype;
    U(Ge, {
        setPosition: Ge.qa,
        getPosition: Ge.fa,
        setContent: Ge.Xc,
        getContent: Ge.fk,
        setAltitude: Ge.iE,
        getAltitude: Ge.wo,
        getPov: Ge.Ea,
        show: Ge.show,
        hide: Ge.U
    });
    function He(a, b) {
        De.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: s,
            altitude: 2
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Hb = a;
        this.SG = c.icon;
        this.lI = c.title;
        this.Mp = c.altitude;
        this.iS = c.panoInfo;
        this.Da = {
            heading: 0,
            pitch: 0
        }
    }
    z.lang.sa(He, De, "PanoramaMarker");
    z.extend(He.prototype, {
        qa: function(a) {
            this.Hb = a;
            this.Df("position", a)
        },
        fa: x("Hb"),
        yc: function(a) {
            this.lI = a;
            this.Df("title", a)
        },
        Eo: x("lI"),
        Pb: function(a) {
            this.SG = icon;
            this.Df("icon", a)
        },
        zo: x("SG"),
        iE: function(a) {
            this.Mp = a;
            this.Df("altitude", a)
        },
        wo: x("Mp"),
        SC: x("iS"),
        Ea: function() {
            var a = s;
            if (this.P) {
                var a = this.P.fa()
                  , b = this.fa()
                  , a = Fe(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.Da;
            return a
        },
        Df: u()
    });
    var Ie = He.prototype;
    U(Ie, {
        setPosition: Ie.qa,
        getPosition: Ie.fa,
        setTitle: Ie.yc,
        getTitle: Ie.Eo,
        setAltitude: Ie.iE,
        getAltitude: Ie.wo,
        getPanoInfo: Ie.SC,
        getIcon: Ie.zo,
        setIcon: Ie.Pb,
        getPov: Ie.Ea
    });
    function Fe(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI)
              , e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Qa(a) {
        if ("boolean" === typeof Je)
            return Je;
        if (a === t || !window.WebGLRenderingContext)
            return Je = t;
        if (z.platform.fj) {
            a = 0;
            try {
                a = navigator.userAgent.split("Android ")[1].charAt(0)
            } catch (b) {}
            if (5 > a)
                return Je = t
        }
        var a = document.createElement("canvas")
          , c = s;
        try {
            c = a.getContext("webgl")
        } catch (e) {
            Je = t
        }
        return Je = c === s ? t : p
    }
    var Je;
    function Ke() {
        if ("boolean" === typeof Le)
            return Le;
        Le = p;
        if (z.platform.rD)
            return p;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : Le = t
    }
    var Le;
    function ec(a, b) {
        this.P = a || s;
        var c = this;
        c.P && c.ba();
        L.load("pservice", function() {
            c.rP()
        });
        "api" == (b || {}).df ? Ta(Ja) : Ta(Ka);
        this.od = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    D.pm(function(a) {
        "flashRender" !== a.qq() && new ec(a,{
            df: "api"
        })
    });
    z.extend(ec.prototype, {
        ba: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.pv) {
                        b.dN(a.id);
                        b.ea = a;
                        Ke() || b.dispatchEvent(new Q("onthumbnail_complete"));
                        b.Ya != s && (b.cl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                c) {
                                case "position":
                                    b.Hb = a[c];
                                    break;
                                case "id":
                                    b.Ya = a[c];
                                    break;
                                case "links":
                                    b.tn = a[c];
                                    break;
                                case "zoom":
                                    b.Fc = a[c]
                                }
                        if (b.cl) {
                            var g = b.cl
                              , i = b._position;
                            c = g.lat;
                            var k = i.lat
                              , m = Pb(k - c)
                              , g = Pb(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(Pb(c)) * Math.cos(Pb(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.hG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new Q("ondataload");
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new Q("onposition_changed"));
                        b.dispatchEvent(new Q("onlinks_changed"));
                        b.dispatchEvent(new Q("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.Hl && b.j.closeControl ? z.D.show(b.qQ) : z.D.U(b.qQ)
                    }
                } else
                    b.Ya = b.bl,
                    b.Hb = b.cl,
                    b.dispatchEvent(new Q("onnoresult"))
            }
            var b = this.P
              , c = this;
            b.addEventListener("id_changed", function() {
                c.Co(b.Sb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.Hg(ec.Mk + "qt=idata&iid=" + b.yz + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo
                          , f = {};
                        f.Hl = b.BreakID;
                        for (var g = b.Defaultfloor, i = s, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            }
                        f.id = i.StartID || i.Points[0].PID;
                        c.Co(f.id, a, f)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.Zi(b.fa(), a)
            })
        },
        Co: function(a, b) {
            this.od.getPanoramaById.push(arguments)
        },
        Zi: function(a, b, c) {
            this.od.getPanoramaByLocation.push(arguments)
        },
        dD: function(a, b, c, e) {
            this.od.getVisiblePOIs.push(arguments)
        },
        Jw: function(a, b) {
            this.od.getRecommendPanosById.push(arguments)
        },
        Iw: function(a) {
            this.od.getPanoramaVersions.push(arguments)
        },
        lB: function(a, b) {
            this.od.checkPanoSupportByCityCode.push(arguments)
        },
        Hw: function(a, b) {
            this.od.getPanoramaByPOIId.push(arguments)
        },
        gK: function(a) {
            this.od.getCopyrightProviders.push(arguments)
        }
    });
    var Me = ec.prototype;
    U(Me, {
        getPanoramaById: Me.Co,
        getPanoramaByLocation: Me.Zi,
        getPanoramaByPOIId: Me.Hw
    });
    function dc(a) {
        Mc.call(this);
        "api" == (a || {}).df ? Ta(Ca) : Ta(Da)
    }
    dc.BF = D.Th("pano", "tile/");
    dc.prototype = new Mc;
    dc.prototype.getTilesUrl = function(a, b) {
        var c = dc.BF[(a.x + a.y) % dc.BF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        z.ca.ia && 6 >= z.ca.ia && (c += "&color_dep=32");
        return c
    }
    ;
    dc.prototype.Es = ea(p);
    Ne.Od = new S;
    function Ne() {}
    z.extend(Ne, {
        hV: function(a, b, c) {
            c = z.lang.Hc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Ne.Od.kj(new R(b.data.mercatorX,b.data.mercatorY)));
            c.dispatchEvent(new Q("on" + a), b)
        }
    });
    var Oe = Ne;
    U(Oe, {
        dispatchFlashEvent: Oe.hV
    });
    var Pe = {
        rO: 50
    };
    Pe.Yt = D.Th("pano")[0];
    Pe.Wt = {
        width: 220,
        height: 60
    };
    z.extend(Pe, {
        ZK: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                e();
            else {
                this.An === l && (this.An = new ec(s,{
                    df: "api"
                }));
                var f = this;
                this.An.lB(b, function(b) {
                    b ? f.An.Zi(c.lngLat, Pe.rO, function(b) {
                        if (b && b.id) {
                            var g = b.id
                              , m = b.ah
                              , b = b.bh
                              , n = ec.Od.mg(c.lngLat)
                              , o = f.WQ(n, {
                                x: m,
                                y: b
                            })
                              , m = f.rK(g, o, 0, Pe.Wt.width, Pe.Wt.height);
                            a.content = f.XQ(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ja.M(z.zc("infoWndPano"), "click", function() {
                                    c.panoInstance.xc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.hd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        XQ: function(a, b, c, e) {
            var c = c || "", f;
            !e || !a.split(e)[0] ? (e = a,
            a = "") : (e = a.split(e)[0],
            f = e.lastIndexOf("<"),
            e = a.substring(0, f),
            a = a.substring(f));
            f = [];
            var g = Pe.Wt.width
              , i = Pe.Wt.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        WQ: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        rK: function(a, b, c, e, f) {
            var g = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            };
            return (Pe.Yt + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return g[b]
            })
        }
    });
    var Qe = document, Re = Math, Se = Qe.createElement("div").style, Te;
    a: {
        for (var Ue = ["t", "webkitT", "MozT", "msT", "OT"], Ve, We = 0, Xe = Ue.length; We < Xe; We++)
            if (Ve = Ue[We] + "ransform",
            Ve in Se) {
                Te = Ue[We].substr(0, Ue[We].length - 1);
                break a
            }
        Te = t
    }
    var Ye = Te ? "-" + Te.toLowerCase() + "-" : ""
      , $e = Ze("transform")
      , af = Ze("transitionProperty")
      , bf = Ze("transitionDuration")
      , cf = Ze("transformOrigin")
      , df = Ze("transitionTimingFunction")
      , ef = Ze("transitionDelay")
      , oe = /android/gi.test(navigator.appVersion)
      , ff = /iphone|ipad/gi.test(navigator.appVersion)
      , gf = /hp-tablet/gi.test(navigator.appVersion)
      , hf = Ze("perspective")in Se
      , jf = "ontouchstart"in window && !gf
      , kf = Te !== t
      , lf = Ze("transition")in Se
      , mf = "onorientationchange"in window ? "orientationchange" : "resize"
      , nf = jf ? "touchstart" : "mousedown"
      , of = jf ? "touchmove" : "mousemove"
      , pf = jf ? "touchend" : "mouseup"
      , qf = jf ? "touchcancel" : "mouseup"
      , rf = Te === t ? t : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[Te]
      , sf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        return setTimeout(a, 1)
    }
      , tf = window.cancelRequestAnimationFrame || window.i5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , uf = hf ? " translateZ(0)" : "";
    function vf(a, b) {
        var c = this, e;
        c.Lm = "object" == typeof a ? a : Qe.getElementById(a);
        c.Lm.style.overflow = "hidden";
        c.Kb = c.Lm.children[0];
        c.options = {
            Io: p,
            Im: p,
            x: 0,
            y: 0,
            $n: p,
            eU: t,
            ix: p,
            ED: p,
            Gk: p,
            li: t,
            i_: 0,
            Sv: t,
            Mw: p,
            Uh: p,
            mi: p,
            sC: oe,
            Qw: ff,
            NV: ff && hf,
            fE: "",
            zoom: t,
            Ik: 1,
            vp: 4,
            jV: 2,
            XN: "scroll",
            ut: t,
            Rx: 1,
            fM: s,
            YL: function(a) {
                a.preventDefault()
            },
            iM: s,
            XL: s,
            hM: s,
            WL: s,
            ox: s,
            jM: s,
            aM: s,
            Uo: s,
            kM: s,
            To: s
        };
        for (e in b)
            c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Gk = kf && c.options.Gk;
        c.options.Uh = c.options.Io && c.options.Uh;
        c.options.mi = c.options.Im && c.options.mi;
        c.options.zoom = c.options.Gk && c.options.zoom;
        c.options.li = lf && c.options.li;
        c.options.zoom && oe && (uf = "");
        c.Kb.style[af] = c.options.Gk ? Ye + "transform" : "top left";
        c.Kb.style[bf] = "0";
        c.Kb.style[cf] = "0 0";
        c.options.li && (c.Kb.style[df] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Gk ? c.Kb.style[$e] = "translate(" + c.x + "px," + c.y + "px)" + uf : c.Kb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.li && (c.options.sC = p);
        c.refresh();
        c.ba(mf, window);
        c.ba(nf);
        !jf && "none" != c.options.XN && (c.ba("DOMMouseScroll"),
        c.ba("mousewheel"));
        c.options.Sv && (c.qU = setInterval(function() {
            c.pP()
        }, 500));
        this.options.Mw && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.PK || b, c) : e.call(document.body, a, b, c)
        }
        ,
        document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.PK || (b.PK = function(a) {
                a.MY || b(a)
            }
            ), c) : e.call(document.body, a, b, c)
        }
        ),
        c.ba("click", document.body, p))
    }
    vf.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        lj: [],
        scale: 1,
        BB: 0,
        CB: 0,
        Qe: [],
        kf: [],
        fB: s,
        $x: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case nf:
                if (!jf && 0 !== a.button)
                    break;
                this.iv(a);
                break;
            case of:
                this.UR(a);
                break;
            case pf:
            case qf:
                this.tu(a);
                break;
            case mf:
                this.vA();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.xT(a);
                break;
            case rf:
                this.tT(a);
                break;
            case "click":
                this.zP(a)
            }
        },
        pP: function() {
            !this.$g && (!this.Jk && !(this.El || this.Hx == this.Kb.offsetWidth * this.scale && this.cp == this.Kb.offsetHeight * this.scale)) && this.refresh()
        },
        Zu: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Qe.createElement("div"),
            this.options.fE ? b.className = this.options.fE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.mi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.Uh ? "7" : "2") + "px;top:2px;right:1px"),
            b.style.cssText += ";pointer-events:none;" + Ye + "transition-property:opacity;" + Ye + "transition-duration:" + (this.options.NV ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Qw ? "0" : "1"),
            this.Lm.appendChild(b),
            this[a + "ScrollbarWrapper"] = b,
            b = Qe.createElement("div"),
            this.options.fE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Ye + "background-clip:padding-box;" + Ye + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Ye + "border-radius:3px;border-radius:3px"),
            b.style.cssText += ";pointer-events:none;" + Ye + "transition-property:" + Ye + "transform;" + Ye + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Ye + "transition-duration:0;" + Ye + "transform: translate(0,0)" + uf,
            this.options.li && (b.style.cssText += ";" + Ye + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            this[a + "ScrollbarIndicator"] = b),
            "h" == a ? (this.LK = this.MK.clientWidth,
            this.eX = Re.max(Re.round(this.LK * this.LK / this.Hx), 8),
            this.dX.style.width = this.eX + "px") : (this.PN = this.QN.clientHeight,
            this.C_ = Re.max(Re.round(this.PN * this.PN / this.cp), 8),
            this.B_.style.height = this.C_ + "px"),
            this.wA(a, p)) : this[a + "ScrollbarWrapper"] && (kf && (this[a + "ScrollbarIndicator"].style[$e] = ""),
            this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
            this[a + "ScrollbarWrapper"] = s,
            this[a + "ScrollbarIndicator"] = s)
        },
        vA: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, oe ? 200 : 0)
        },
        Mq: function(a, b) {
            this.Jk || (a = this.Io ? a : 0,
            b = this.Im ? b : 0,
            this.options.Gk ? this.Kb.style[$e] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + uf : (a = Re.round(a),
            b = Re.round(b),
            this.Kb.style.left = a + "px",
            this.Kb.style.top = b + "px"),
            this.x = a,
            this.y = b,
            this.wA("h"),
            this.wA("v"))
        },
        wA: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
            0 > c ? (this.options.sC || (c = this[a + "ScrollbarIndicatorSize"] + Re.round(3 * c),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.sC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Re.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
            this[a + "ScrollbarWrapper"].style[ef] = "0",
            this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Qw ? "0" : "1",
            this[a + "ScrollbarIndicator"].style[$e] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + uf)
        },
        zP: function(a) {
            if (a.rQ === p)
                return this.VA = a.target,
                this.sw = Date.now(),
                p;
            if (this.VA && this.sw) {
                if (600 < Date.now() - this.sw)
                    return this.sw = this.VA = s,
                    p
            } else {
                for (var b = a.target; b != this.Kb && b != document.body; )
                    b = b.parentNode;
                if (b == document.body)
                    return p
            }
            for (b = a.target; 1 != b.nodeType; )
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.MY = p,
                a.stopPropagation(),
                a.preventDefault(),
                this.sw = this.VA = s,
                t
        },
        iv: function(a) {
            var b = jf ? a.touches[0] : a, c, e;
            if (this.enabled) {
                this.options.YL && this.options.YL.call(this, a);
                (this.options.li || this.options.zoom) && this.nI(0);
                this.Jk = this.El = this.$g = t;
                this.KB = this.JB = this.Bv = this.Av = this.QB = this.PB = 0;
                this.options.zoom && (jf && 1 < a.touches.length) && (e = Re.abs(a.touches[0].pageX - a.touches[1].pageX),
                c = Re.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.k_ = Re.sqrt(e * e + c * c),
                this.qx = Re.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.XE) / 2 - this.x,
                this.sx = Re.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.YE) / 2 - this.y,
                this.options.Uo && this.options.Uo.call(this, a));
                if (this.options.ix && (this.options.Gk ? (c = getComputedStyle(this.Kb, s)[$e].replace(/[^0-9\-.,]/g, "").split(","),
                e = +(c[12] || c[4]),
                c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Kb, s).left.replace(/[^0-9-]/g, ""),
                c = +getComputedStyle(this.Kb, s).top.replace(/[^0-9-]/g, "")),
                e != this.x || c != this.y))
                    this.options.li ? this.Sd(rf) : tf(this.fB),
                    this.lj = [],
                    this.Mq(e, c),
                    this.options.ox && this.options.ox.call(this);
                this.Cv = this.x;
                this.Dv = this.y;
                this.xt = this.x;
                this.yt = this.y;
                this.ah = b.pageX;
                this.bh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.iM && this.options.iM.call(this, a);
                this.ba(of, window);
                this.ba(pf, window);
                this.ba(qf, window)
            }
        },
        UR: function(a) {
            var b = jf ? a.touches[0] : a
              , c = b.pageX - this.ah
              , e = b.pageY - this.bh
              , f = this.x + c
              , g = this.y + e
              , i = a.timeStamp || Date.now();
            this.options.XL && this.options.XL.call(this, a);
            if (this.options.zoom && jf && 1 < a.touches.length)
                f = Re.abs(a.touches[0].pageX - a.touches[1].pageX),
                g = Re.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.j_ = Re.sqrt(f * f + g * g),
                this.Jk = p,
                b = 1 / this.k_ * this.j_ * this.scale,
                b < this.options.Ik ? b = 0.5 * this.options.Ik * Math.pow(2, b / this.options.Ik) : b > this.options.vp && (b = 2 * this.options.vp * Math.pow(0.5, this.options.vp / b)),
                this.No = b / this.scale,
                f = this.qx - this.qx * this.No + this.x,
                g = this.sx - this.sx * this.No + this.y,
                this.Kb.style[$e] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + uf,
                this.options.kM && this.options.kM.call(this, a);
            else {
                this.ah = b.pageX;
                this.bh = b.pageY;
                if (0 < f || f < this.ae)
                    f = this.options.$n ? this.x + c / 2 : 0 <= f || 0 <= this.ae ? 0 : this.ae;
                if (g > this.hf || g < this.gd)
                    g = this.options.$n ? this.y + e / 2 : g >= this.hf || 0 <= this.gd ? this.hf : this.gd;
                this.PB += c;
                this.QB += e;
                this.Av = Re.abs(this.PB);
                this.Bv = Re.abs(this.QB);
                6 > this.Av && 6 > this.Bv || (this.options.ED && (this.Av > this.Bv + 5 ? (g = this.y,
                e = 0) : this.Bv > this.Av + 5 && (f = this.x,
                c = 0)),
                this.$g = p,
                this.Mq(f, g),
                this.JB = 0 < c ? -1 : 0 > c ? 1 : 0,
                this.KB = 0 < e ? -1 : 0 > e ? 1 : 0,
                300 < i - this.startTime && (this.startTime = i,
                this.xt = this.x,
                this.yt = this.y),
                this.options.hM && this.options.hM.call(this, a))
            }
        },
        tu: function(a) {
            if (!(jf && 0 !== a.touches.length)) {
                var b = this, c = jf ? a.changedTouches[0] : a, e, f, g = {
                    Ba: 0,
                    time: 0
                }, i = {
                    Ba: 0,
                    time: 0
                }, k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.Sd(of, window);
                b.Sd(pf, window);
                b.Sd(qf, window);
                b.options.WL && b.options.WL.call(b, a);
                if (b.Jk)
                    e = b.scale * b.No,
                    e = Math.max(b.options.Ik, e),
                    e = Math.min(b.options.vp, e),
                    b.No = e / b.scale,
                    b.scale = e,
                    b.x = b.qx - b.qx * b.No + b.x,
                    b.y = b.sx - b.sx * b.No + b.y,
                    b.Kb.style[bf] = "200ms",
                    b.Kb.style[$e] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + uf,
                    b.Jk = t,
                    b.refresh(),
                    b.options.To && b.options.To.call(b, a);
                else {
                    if (b.$g) {
                        if (300 > k && b.options.ix) {
                            g = e ? b.jH(e - b.xt, k, -b.x, b.Hx - b.Lt + b.x, b.options.$n ? b.Lt : 0) : g;
                            i = f ? b.jH(f - b.yt, k, -b.y, 0 > b.gd ? b.cp - b.Mm + b.y - b.hf : 0, b.options.$n ? b.Mm : 0) : i;
                            e = b.x + g.Ba;
                            f = b.y + i.Ba;
                            if (0 < b.x && 0 < e || b.x < b.ae && e < b.ae)
                                g = {
                                    Ba: 0,
                                    time: 0
                                };
                            if (b.y > b.hf && f > b.hf || b.y < b.gd && f < b.gd)
                                i = {
                                    Ba: 0,
                                    time: 0
                                }
                        }
                        g.Ba || i.Ba ? (c = Re.max(Re.max(g.time, i.time), 10),
                        b.options.ut && (g = e - b.Cv,
                        i = f - b.Dv,
                        Re.abs(g) < b.options.Rx && Re.abs(i) < b.options.Rx ? b.scrollTo(b.Cv, b.Dv, 200) : (g = b.dI(e, f),
                        e = g.x,
                        f = g.y,
                        c = Re.max(g.time, c))),
                        b.scrollTo(Re.round(e), Re.round(f), c)) : b.options.ut ? (g = e - b.Cv,
                        i = f - b.Dv,
                        Re.abs(g) < b.options.Rx && Re.abs(i) < b.options.Rx ? b.scrollTo(b.Cv, b.Dv, 200) : (g = b.dI(b.x, b.y),
                        (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.Cn(200)
                    } else {
                        if (jf)
                            if (b.yJ && b.options.zoom)
                                clearTimeout(b.yJ),
                                b.yJ = s,
                                b.options.Uo && b.options.Uo.call(b, a),
                                b.zoom(b.ah, b.bh, 1 == b.scale ? b.options.jV : 1),
                                b.options.To && setTimeout(function() {
                                    b.options.To.call(b, a)
                                }, 200);
                            else if (this.options.Mw) {
                                for (e = c.target; 1 != e.nodeType; )
                                    e = e.parentNode;
                                f = e.tagName.toLowerCase();
                                "select" != f && "input" != f && "textarea" != f ? (f = Qe.createEvent("MouseEvents"),
                                f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, s),
                                f.rQ = p,
                                e.dispatchEvent(f)) : e.focus()
                            }
                        b.Cn(400)
                    }
                    b.options.jM && b.options.jM.call(b, a)
                }
            }
        },
        Cn: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.ae ? this.ae : this.x
              , c = this.y >= this.hf || 0 < this.gd ? this.hf : this.y < this.gd ? this.gd : this.y;
            if (b == this.x && c == this.y) {
                if (this.$g && (this.$g = t,
                this.options.ox && this.options.ox.call(this)),
                this.Uh && this.options.Qw && ("webkit" == Te && (this.MK.style[ef] = "300ms"),
                this.MK.style.opacity = "0"),
                this.mi && this.options.Qw)
                    "webkit" == Te && (this.QN.style[ef] = "300ms"),
                    this.QN.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        xT: function(a) {
            var b = this, c, e;
            if ("wheelDeltaX"in a)
                c = a.wheelDeltaX / 12,
                e = a.wheelDeltaY / 12;
            else if ("wheelDelta"in a)
                c = e = a.wheelDelta / 12;
            else if ("detail"in a)
                c = e = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.XN) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)),
                e < b.options.Ik && (e = b.options.Ik),
                e > b.options.vp && (e = b.options.vp),
                e != b.scale)
                    !b.$x && b.options.Uo && b.options.Uo.call(b, a),
                    b.$x++,
                    b.zoom(a.pageX, a.pageY, e, 400),
                    setTimeout(function() {
                        b.$x--;
                        !b.$x && b.options.To && b.options.To.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                e = b.y + e,
                0 < c ? c = 0 : c < b.ae && (c = b.ae),
                e > b.hf ? e = b.hf : e < b.gd && (e = b.gd),
                0 > b.gd && b.scrollTo(c, e, 0)
        },
        tT: function(a) {
            a.target == this.Kb && (this.Sd(rf),
            this.IA())
        },
        IA: function() {
            var a = this, b = a.x, c = a.y, e = Date.now(), f, g, i;
            a.El || (a.lj.length ? (f = a.lj.shift(),
            f.x == b && f.y == c && (f.time = 0),
            a.El = p,
            a.$g = p,
            a.options.li) ? (a.nI(f.time),
            a.Mq(f.x, f.y),
            a.El = t,
            f.time ? a.ba(rf) : a.Cn(0)) : (i = function() {
                var k = Date.now(), m;
                if (k >= e + f.time) {
                    a.Mq(f.x, f.y);
                    a.El = t;
                    a.options.mY && a.options.mY.call(a);
                    a.IA()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Re.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Mq(k, m);
                    if (a.El)
                        a.fB = sf(i)
                }
            }
            ,
            i()) : a.Cn(400))
        },
        nI: function(a) {
            a += "ms";
            this.Kb.style[bf] = a;
            this.Uh && (this.dX.style[bf] = a);
            this.mi && (this.B_.style[bf] = a)
        },
        jH: function(a, b, c, e, f) {
            var b = Re.abs(a) / b
              , g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))),
            b = b * c / g,
            g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))),
            b = b * e / g,
            g = e);
            return {
                Ba: g * (0 > a ? -1 : 1),
                time: Re.round(b / 6.0E-4)
            }
        },
        Jj: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.Lm && (b *= this.scale,
            c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        dI: function(a, b) {
            var c, e, f;
            f = this.Qe.length - 1;
            c = 0;
            for (e = this.Qe.length; c < e; c++)
                if (a >= this.Qe[c]) {
                    f = c;
                    break
                }
            f == this.BB && (0 < f && 0 > this.JB) && f--;
            a = this.Qe[f];
            e = (e = Re.abs(a - this.Qe[this.BB])) ? 500 * (Re.abs(this.x - a) / e) : 0;
            this.BB = f;
            f = this.kf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.kf[c]) {
                    f = c;
                    break
                }
            f == this.CB && (0 < f && 0 > this.KB) && f--;
            b = this.kf[f];
            c = (c = Re.abs(b - this.kf[this.CB])) ? 500 * (Re.abs(this.y - b) / c) : 0;
            this.CB = f;
            f = Re.round(Re.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ba: function(a, b, c) {
            (b || this.Kb).addEventListener(a, this, !!c)
        },
        Sd: function(a, b, c) {
            (b || this.Kb).removeEventListener(a, this, !!c)
        },
        HB: ha(2),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.Ik && (this.scale = this.options.Ik);
            this.Lt = this.Lm.clientWidth || 1;
            this.Mm = this.Lm.clientHeight || 1;
            this.hf = -this.options.i_ || 0;
            this.Hx = Re.round(this.Kb.offsetWidth * this.scale);
            this.cp = Re.round((this.Kb.offsetHeight + this.hf) * this.scale);
            this.ae = this.Lt - this.Hx;
            this.gd = this.Mm - this.cp + this.hf;
            this.KB = this.JB = 0;
            this.options.fM && this.options.fM.call(this);
            this.Io = this.options.Io && 0 > this.ae;
            this.Im = this.options.Im && (!this.options.eU && !this.Io || this.cp > this.Mm);
            this.Uh = this.Io && this.options.Uh;
            this.mi = this.Im && this.options.mi && this.cp > this.Mm;
            a = this.Jj(this.Lm);
            this.XE = -a.left;
            this.YE = -a.top;
            if ("string" == typeof this.options.ut) {
                this.Qe = [];
                this.kf = [];
                c = this.Kb.querySelectorAll(this.options.ut);
                a = 0;
                for (b = c.length; a < b; a++)
                    e = this.Jj(c[a]),
                    e.left += this.XE,
                    e.top += this.YE,
                    this.Qe[a] = e.left < this.ae ? this.ae : e.left * this.scale,
                    this.kf[a] = e.top < this.gd ? this.gd : e.top * this.scale
            } else if (this.options.ut) {
                for (this.Qe = []; e >= this.ae; )
                    this.Qe[b] = e,
                    e -= this.Lt,
                    b++;
                this.ae % this.Lt && (this.Qe[this.Qe.length] = this.ae - this.Qe[this.Qe.length - 1] + this.Qe[this.Qe.length - 1]);
                b = e = 0;
                for (this.kf = []; e >= this.gd; )
                    this.kf[b] = e,
                    e -= this.Mm,
                    b++;
                this.gd % this.Mm && (this.kf[this.kf.length] = this.gd - this.kf[this.kf.length - 1] + this.kf[this.kf.length - 1])
            }
            this.Zu("h");
            this.Zu("v");
            this.Jk || (this.Kb.style[bf] = "0",
            this.Cn(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                PY: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++)
                f[a].PY && (f[a].x = this.x - f[a].x,
                f[a].y = this.y - f[a].y),
                this.lj.push({
                    x: f[a].x,
                    y: f[a].y,
                    time: f[a].time || 0
                });
            this.IA()
        },
        disable: function() {
            this.stop();
            this.Cn(0);
            this.enabled = t;
            this.Sd(of, window);
            this.Sd(pf, window);
            this.Sd(qf, window)
        },
        enable: function() {
            this.enabled = p
        },
        stop: function() {
            this.options.li ? this.Sd(rf) : tf(this.fB);
            this.lj = [];
            this.El = this.$g = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.Gk && (this.Jk = p,
            e = e === l ? 200 : e,
            a = a - this.XE - this.x,
            b = b - this.YE - this.y,
            this.x = a - a * f + this.x,
            this.y = b - b * f + this.y,
            this.scale = c,
            this.refresh(),
            this.x = 0 < this.x ? 0 : this.x < this.ae ? this.ae : this.x,
            this.y = this.y > this.hf ? this.hf : this.y < this.gd ? this.gd : this.y,
            this.Kb.style[bf] = e + "ms",
            this.Kb.style[$e] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + uf,
            this.Jk = t)
        }
    };
    function Ze(a) {
        if ("" === Te)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Te + a
    }
    Se = s;
    function wf(a) {
        this.j = {
            anchor: Yb,
            offset: new P(0,0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {}, b;
        for (b in a)
            this.j[b] = a[b];
        this.sl = new ec(s,{
            df: "api"
        });
        this.Lj = [];
        this.P = s;
        this.Xf = {
            height: this.j.imageHeight,
            width: this.j.imageHeight * xf
        };
        this.Mc = this.xA = this.Hl = this.Tc = s
    }
    var yf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , zf = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    D.pm(function(a) {
        var b = s;
        a.addEventListener("position_changed", function() {
            a.j.visible && a.j.albumsControl === p && (b ? b.Cx(a.Sb()) : (b = new wf(a.j.albumsControlOptions),
            b.ta(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.j.albumsControl === p ? (b ? b.Cx(a.Sb()) : (b = new wf(a.j.albumsControlOptions),
            b.ta(a)),
            b.show()) : b.U()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.xk(a.j.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.cD() ? a.j.albumsControl === p && (b.C.style.visibility = "visible") : b.C.style.visibility = "hidden")
        })
    });
    var xf = 1.8;
    I() && (xf = 1);
    z.extend(wf.prototype, {
        xk: function(a) {
            for (var b in a)
                this.j[b] = a[b];
            a = this.j.imageHeight + "px";
            this.oc(this.j.anchor);
            this.C.style.width = isNaN(Number(this.j.maxWidth)) === p ? this.j.maxWidth : this.j.maxWidth + "px";
            this.C.style.height = a;
            this.Qj.style.height = a;
            this.Dh.style.height = a;
            this.Xf = {
                height: this.j.imageHeight,
                width: this.j.imageHeight * xf
            };
            this.Pj.style.height = this.Xf.height - 6 + "px";
            this.Pj.style.width = this.Xf.width - 6 + "px";
            this.Cx(this.P.Sb(), p)
        },
        ta: function(a) {
            this.P = a;
            this.wr();
            this.YO();
            this.vX();
            this.Cx(a.Sb())
        },
        wr: function() {
            var a = this.j.imageHeight + "px";
            this.C = O("div");
            var b = this.C.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.j.maxWidth)) === p ? this.j.maxWidth : this.j.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.Qj = O("div");
            b = this.Qj.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Dh = O("div");
            b = this.Dh.style;
            b.height = a;
            this.Qj.appendChild(this.Dh);
            this.C.appendChild(this.Qj);
            this.P.C.appendChild(this.C);
            this.Pj = O("div", {
                "class": "pano_photo_item_seleted"
            });
            this.Pj.style.height = this.Xf.height - 6 + "px";
            this.Pj.style.width = this.Xf.width - 6 + "px";
            this.oc(this.j.anchor)
        },
        CG: function(a) {
            for (var b = this.Lj, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        Cx: function(a, b) {
            if (b || !this.Lj[this.Tc] || !(this.Lj[this.Tc].panoId == a && 3 !== this.Lj[this.Tc].recoType)) {
                var c = this
                  , e = this.CG(a);
                !b && -1 !== e && this.Lj[e] && 3 !== this.Lj[e].recoType ? this.fp(e) : this.KW(function(a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, q = a.length; o < q; o++)
                        e = a[o].catlog,
                        k = a[o].floor,
                        l !== e && ("" === e && l !== k ? (m = p,
                        b[k] || (b[k] = []),
                        b[k].push(a[o])) : (b[yf[e]] || (b[yf[e]] = []),
                        b[yf[e]].push(a[o])));
                    for (var v in b)
                        m ? n.push({
                            data: v + "F",
                            index: v
                        }) : n.push({
                            data: zf[v],
                            index: v
                        });
                    c.WF = b;
                    c.zi = n;
                    c.pl(a);
                    0 == a.length ? c.U() : c.show()
                })
            }
        },
        RU: function() {
            if (!this.wi) {
                var a = this.wW(this.zi)
                  , b = O("div");
                b.style.cssText = ["width:" + 134 * this.zi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = O("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new vf(a,{
                    $n: t,
                    ix: p,
                    Uh: t,
                    mi: t,
                    Im: t,
                    ED: p,
                    Sv: p,
                    Mw: p
                });
                this.C.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
                    b = e[f],
                    z.M(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.pl(c.WF[this.getAttribute("dataindex")]);
                            for (var a = 0, b = e.length; a < b; a++)
                                e[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.wi = a
            }
        },
        OU: function() {
            if (this.wi)
                a = this.eK(this.zi),
                this.nP.innerHTML = a;
            else {
                var a = this.eK(this.zi)
                  , b = O("ul")
                  , c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                z.M(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.pl(c.WF[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++)
                            e[f].childNodes[0].getAttribute("dataindex") === a ? z.D.Za(e[f], "pano_catlogLiActive") : z.D.nc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = O("div")
                  , e = O("a")
                  , f = O("span")
                  , g = O("a")
                  , i = O("span")
                  , k = ["background:url(" + H.oa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.j.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                z.M(e, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new ub({
                        Cc: 60,
                        Vb: vb.Pr,
                        duration: 300,
                        va: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                z.M(e, "mouseout", function() {
                    f.style.backgroundPosition = "-18px 0"
                });
                z.M(g, "mouseover", function() {
                    var a = parseInt(b.style.top, 10)
                      , e = c.j.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new ub({
                            Cc: 60,
                            Vb: vb.Pr,
                            duration: 300,
                            va: function(c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                z.M(g, "mouseout", function() {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = O("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.j.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.wi = e;
                this.nP = b;
                this.C.appendChild(e)
            }
        },
        PU: function() {
            if (this.zi && !(0 >= this.zi.length)) {
                var a = O("div");
                a.innerHTML = this.bz;
                a.style.cssText = "position:absolute;background:#252525";
                this.C.appendChild(a);
                this.Tr = a;
                this.Mc.Yf.style.left = this.Xf.width + 8 + "px";
                this.wi && (this.wi.style.left = parseInt(this.wi.style.left, 10) + this.Xf.width + 8 + "px");
                var b = this;
                z.M(a, "click", function() {
                    b.P.xc(b.JV)
                })
            }
        },
        pl: function(a) {
            this.Lj = a;
            this.j.showCatalog && (0 < this.zi.length ? (Xa() ? this.OU() : this.RU(),
            this.Mc.offsetLeft = 60) : (this.Tr && (this.C.removeChild(this.Tr),
            this.Tr = s,
            this.Mc.Yf.style.left = "0px"),
            this.wi && (this.C.removeChild(this.wi),
            this.wi = s),
            this.Mc.offsetLeft = 0));
            var b = this.qW(a);
            Xa() && (this.zi && 0 < this.zi.length && this.j.showExit && this.bz) && (this.Mc.offsetLeft += this.Xf.width + 8,
            this.Tr ? this.Tr.innerHTML = this.bz : this.PU());
            this.Dh.innerHTML = b;
            this.Dh.style.width = (this.Xf.width + 8) * a.length + 8 + "px";
            a = this.C.offsetWidth;
            b = this.Dh.offsetWidth;
            this.Mc.$r && (b += this.Mc.$r());
            b < a - 2 * this.Mc.pi - this.Mc.offsetLeft ? this.C.style.width = b + this.Mc.offsetLeft + "px" : (this.C.style.width = isNaN(Number(this.j.maxWidth)) === p ? this.j.maxWidth : this.j.maxWidth + "px",
            b < this.C.offsetWidth - 2 * this.Mc.pi - this.Mc.offsetLeft && (this.C.style.width = b + this.Mc.offsetLeft + "px"));
            this.Mc.refresh();
            this.xA = this.Dh.children;
            this.Dh.appendChild(this.Pj);
            this.Pj.style.left = "-100000px";
            a = this.CG(this.P.Sb(), this.R0);
            -1 !== a && this.fp(a)
        },
        wW: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
                b += c;
            return b
        },
        eK: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
                b += c;
            return b
        },
        qW: function(a) {
            for (var b, c, e, f, g = [], i = this.Xf.height, k = this.Xf.width, m = 0; m < a.length; m++)
                b = a[m],
                recoType = b.recoType,
                e = b.panoId,
                f = b.name,
                c = b.heading,
                b = b.pitch,
                c = Pe.rK(e, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
                3 === recoType ? Xa() ? (this.bz = b,
                this.JV = e,
                a.splice(m, 1),
                m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.j.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.oa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>',
                g.push(b)) : g.push(b);
            return g.join("")
        },
        KW: function(a) {
            var b = this
              , c = this.P.Sb();
            c && this.sl.Jw(c, function(e) {
                b.P.Sb() === c && a(e)
            })
        },
        oc: function(a) {
            if (!Za(a) || isNaN(a) || a < Wb || 3 < a)
                a = this.defaultAnchor;
            var b = this.C
              , c = this.j.offset.width
              , e = this.j.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case Wb:
                b.style.top = e + "px";
                b.style.left = c + "px";
                break;
            case Xb:
                b.style.top = e + "px";
                b.style.right = c + "px";
                break;
            case Yb:
                b.style.bottom = e + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = e + "px",
                b.style.right = c + "px"
            }
        },
        YO: function() {
            this.WO()
        },
        WO: function() {
            var a = this;
            z.M(this.C, "touchstart", function(a) {
                a.stopPropagation()
            });
            z.M(this.Qj, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Tc)
                    a.fp(b),
                    a.P.xc(a.Lj[b].panoId)
            });
            z.M(this.Dh, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== s && a.hJ(b, p)
            });
            this.P.addEventListener("size_changed", function() {
                isNaN(Number(a.j.maxWidth)) && a.xk({
                    maxWidth: a.j.maxWidth
                })
            })
        },
        fp: function(a) {
            this.Pj.style.left = this.xA[a].offsetLeft + 8 + "px";
            this.Pj.setAttribute("data-index", this.xA[a].getAttribute("data-index"));
            this.Tc = a;
            this.hJ(a)
        },
        hJ: function(a, b) {
            var c = this.Xf.width + 8
              , e = 0;
            this.Mc.$r && (e = this.Mc.$r() / 2);
            var f = this.Qj.offsetWidth - 2 * e
              , g = this.Dh.offsetLeft || this.Mc.x
              , g = g - e
              , i = -a * c;
            i > g && this.Mc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Mc.scrollTo(c + f + e)
        },
        vX: function() {
            this.Mc = I() ? new vf(this.Qj,{
                $n: t,
                ix: p,
                Uh: t,
                mi: t,
                Im: t,
                ED: p,
                Sv: p,
                Mw: p
            }) : new Af(this.Qj)
        },
        U: function() {
            this.C.style.visibility = "hidden"
        },
        show: function() {
            this.C.style.visibility = "visible"
        }
    });
    function Af(a) {
        this.C = a;
        this.Jg = a.children[0];
        this.br = s;
        this.pi = 20;
        this.offsetLeft = 0;
        this.ta()
    }
    Af.prototype = {
        ta: function() {
            this.Jg.style.position = "relative";
            this.refresh();
            this.wr();
            this.hB()
        },
        refresh: function() {
            this.yn = this.C.offsetWidth - this.$r();
            this.Xz = -(this.Jg.offsetWidth - this.yn - this.pi);
            this.Lu = this.pi + this.offsetLeft;
            this.Jg.style.left = this.Lu + "px";
            this.Jg.children[0] && (this.br = this.Jg.children[0].offsetWidth);
            this.Yf && (this.Yf.children[0].style.marginTop = this.Tq.children[0].style.marginTop = this.Yf.offsetHeight / 2 - this.Yf.children[0].offsetHeight / 2 + "px")
        },
        $r: function() {
            return 2 * this.pi
        },
        wr: function() {
            this.$u = O("div");
            this.$u.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.Yf = this.$u.children[0];
            this.Tq = this.$u.children[1];
            this.C.appendChild(this.$u);
            this.Yf.children[0].style.marginTop = this.Tq.children[0].style.marginTop = this.Yf.offsetHeight / 2 - this.Yf.children[0].offsetHeight / 2 + "px"
        },
        hB: function() {
            var a = this;
            z.M(this.Yf, "click", function() {
                a.scrollTo(a.Jg.offsetLeft + a.yn)
            });
            z.M(this.Tq, "click", function() {
                a.scrollTo(a.Jg.offsetLeft - a.yn)
            })
        },
        uT: function() {
            z.D.nc(this.Yf, "pano_arrow_disable");
            z.D.nc(this.Tq, "pano_arrow_disable");
            var a = this.Jg.offsetLeft;
            a >= this.Lu && z.D.Za(this.Yf, "pano_arrow_disable");
            a - this.yn <= this.Xz && z.D.Za(this.Tq, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Jg.offsetLeft ? Math.ceil((a - this.pi - this.yn) / this.br) * this.br + this.yn + this.pi - 8 : Math.ceil((a - this.pi) / this.br) * this.br + this.pi;
            a < this.Xz ? a = this.Xz : a > this.Lu && (a = this.Lu);
            var b = this.Jg.offsetLeft
              , c = this;
            new ub({
                Cc: 60,
                Vb: vb.Pr,
                duration: 300,
                va: function(e) {
                    c.Jg.style.left = b + (a - b) * e + "px"
                },
                finish: function() {
                    c.uT()
                }
            })
        }
    };
    D.Map = Oa;
    D.Hotspot = kb;
    D.MapType = Ed;
    D.Point = J;
    D.Pixel = R;
    D.Size = P;
    D.Bounds = hb;
    D.TileLayer = Mc;
    D.Projection = jc;
    D.MercatorProjection = S;
    D.PerspectiveProjection = jb;
    D.Copyright = function(a, b, c) {
        this.id = a;
        this.$a = b;
        this.content = c
    }
    ;
    D.Overlay = mc;
    D.Label = uc;
    D.GroundOverlay = vc;
    D.PointCollection = zc;
    D.Marker = V;
    D.CanvasLayer = Cc;
    D.Icon = qc;
    D.IconSequence = sc;
    D.Symbol = rc;
    D.Polyline = Gc;
    D.Polygon = Fc;
    D.InfoWindow = tc;
    D.Circle = Hc;
    D.Control = Ub;
    D.NavigationControl = lb;
    D.GeolocationControl = Zb;
    D.OverviewMapControl = nb;
    D.CopyrightControl = $b;
    D.ScaleControl = mb;
    D.MapTypeControl = ob;
    D.CityListControl = ac;
    D.PanoramaControl = cc;
    D.TrafficLayer = Uc;
    D.CustomLayer = pb;
    D.ContextMenu = fc;
    D.MenuItem = ic;
    D.LocalSearch = fb;
    D.TransitRoute = fe;
    D.DrivingRoute = ie;
    D.WalkingRoute = je;
    D.RidingRoute = ke;
    D.Autocomplete = ye;
    D.RouteSearch = pe;
    D.Geocoder = qe;
    D.LocalCity = ve;
    D.Geolocation = Geolocation;
    D.Convertor = lc;
    D.BusLineSearch = xe;
    D.Boundary = we;
    D.Panorama = Ra;
    D.PanoramaLabel = Ee;
    D.PanoramaService = ec;
    D.PanoramaCoverageLayer = dc;
    D.PanoramaFlashInterface = Ne;
    function U(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    U(window, {
        BMap: D,
        _jsload2: function(a, b) {
            ja.Sx.JX && ja.Sx.set(a, b);
            L.pU(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Bf = Oa.prototype;
    U(Bf, {
        getBounds: Bf.pe,
        getCenter: Bf.ub,
        getMapType: Bf.ra,
        getSize: Bf.Ab,
        setSize: Bf.we,
        getViewport: Bf.ls,
        getZoom: Bf.ga,
        centerAndZoom: Bf.xd,
        panTo: Bf.ei,
        panBy: Bf.pg,
        setCenter: Bf.lf,
        setCurrentCity: Bf.mE,
        setMapType: Bf.sg,
        setViewport: Bf.hh,
        setZoom: Bf.Lc,
        highResolutionEnabled: Bf.Sw,
        zoomTo: Bf.ug,
        zoomIn: Bf.ZE,
        zoomOut: Bf.$E,
        addHotspot: Bf.XA,
        removeHotspot: Bf.RY,
        clearHotspots: Bf.Wv,
        checkResize: Bf.sU,
        addControl: Bf.Gv,
        removeControl: Bf.DM,
        getContainer: Bf.Qa,
        addContextMenu: Bf.Sn,
        removeContextMenu: Bf.Xo,
        addOverlay: Bf.La,
        removeOverlay: Bf.Ob,
        clearOverlays: Bf.eJ,
        openInfoWindow: Bf.Vc,
        closeInfoWindow: Bf.Sc,
        pointToOverlayPixel: Bf.Re,
        overlayPixelToPoint: Bf.mM,
        getInfoWindow: Bf.Vg,
        getOverlays: Bf.Gw,
        getPanes: function() {
            return {
                floatPane: this.Qd.tC,
                markerMouseTarget: this.Qd.GD,
                floatShadow: this.Qd.WJ,
                labelPane: this.Qd.AD,
                markerPane: this.Qd.KL,
                markerShadow: this.Qd.LL,
                mapPane: this.Qd.Js,
                vertexPane: this.Qd.TN
            }
        },
        addTileLayer: Bf.Ie,
        removeTileLayer: Bf.Pf,
        pixelToPoint: Bf.Bb,
        pointToPixel: Bf.Nb,
        setFeatureStyle: Bf.A4,
        selectBaseElement: Bf.t4,
        setMapStyle: Bf.dt,
        enable3DBuilding: Bf.no,
        disable3DBuilding: Bf.dV,
        getPanorama: Bf.hs,
        initIndoorLayer: Bf.wX,
        setNormalMapDisplay: Bf.$M,
        setMapStyleV2: Bf.vZ,
        setBMapCopyrightOffset: Bf.lE
    });
    var Cf = Ed.prototype;
    U(Cf, {
        getTileLayer: Cf.TW,
        getMinZoom: Cf.Xi,
        getMaxZoom: Cf.Sh,
        getProjection: Cf.jk,
        getTextColor: Cf.Zl,
        getTips: Cf.ks
    });
    U(window, {
        BMAP_NORMAL_MAP: Pa,
        BMAP_PERSPECTIVE_MAP: Sa,
        BMAP_SATELLITE_MAP: ab,
        BMAP_HYBRID_MAP: Va
    });
    var Df = S.prototype;
    U(Df, {
        lngLatToPoint: Df.mg,
        pointToLngLat: Df.kj
    });
    var Ef = jb.prototype;
    U(Ef, {
        lngLatToPoint: Ef.mg,
        pointToLngLat: Ef.kj
    });
    var Ff = hb.prototype;
    U(Ff, {
        equals: Ff.gc,
        containsPoint: Ff.ur,
        containsBounds: Ff.EU,
        intersects: Ff.xs,
        extend: Ff.extend,
        getCenter: Ff.ub,
        isEmpty: Ff.hj,
        getSouthWest: Ff.Oe,
        getNorthEast: Ff.Hf,
        toSpan: Ff.KE
    });
    var Gf = mc.prototype;
    U(Gf, {
        isVisible: Gf.Ic,
        show: Gf.show,
        hide: Gf.U
    });
    mc.getZIndex = mc.lk;
    var Hf = ib.prototype;
    U(Hf, {
        openInfoWindow: Hf.Vc,
        closeInfoWindow: Hf.Sc,
        enableMassClear: Hf.Ui,
        disableMassClear: Hf.fV,
        show: Hf.show,
        hide: Hf.U,
        getMap: Hf.Cw,
        addContextMenu: Hf.Sn,
        removeContextMenu: Hf.Xo
    });
    var If = V.prototype;
    U(If, {
        setIcon: If.Pb,
        getIcon: If.zo,
        setPosition: If.qa,
        getPosition: If.fa,
        setOffset: If.de,
        getOffset: If.Yi,
        getLabel: If.MC,
        setLabel: If.zm,
        setTitle: If.yc,
        setTop: If.ii,
        enableDragging: If.Rb,
        disableDragging: If.MB,
        setZIndex: If.lp,
        getMap: If.Cw,
        setAnimation: If.ym,
        setShadow: If.Lx,
        hide: If.U,
        setRotation: If.hp,
        getRotation: If.vK
    });
    U(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Jf = uc.prototype;
    U(Jf, {
        setStyle: Jf.Fd,
        setStyles: Jf.hi,
        setContent: Jf.Xc,
        setPosition: Jf.qa,
        getPosition: Jf.fa,
        setOffset: Jf.de,
        getOffset: Jf.Yi,
        setTitle: Jf.yc,
        setZIndex: Jf.lp,
        getMap: Jf.Cw,
        getContent: Jf.fk
    });
    var Kf = qc.prototype;
    U(Kf, {
        setImageUrl: Kf.UM,
        setSize: Kf.we,
        setAnchor: Kf.oc,
        setImageOffset: Kf.ct,
        setImageSize: Kf.qZ,
        setInfoWindowAnchor: Kf.tZ,
        setPrintImageUrl: Kf.EZ
    });
    var Lf = tc.prototype;
    U(Lf, {
        redraw: Lf.ce,
        setTitle: Lf.yc,
        setContent: Lf.Xc,
        getContent: Lf.fk,
        getPosition: Lf.fa,
        enableMaximize: Lf.Sg,
        disableMaximize: Lf.mw,
        isOpen: Lf.Va,
        setMaxContent: Lf.ft,
        maximize: Lf.hx,
        enableAutoPan: Lf.Qr
    });
    var Mf = oc.prototype;
    U(Mf, {
        getPath: Mf.Ne,
        setPath: Mf.ee,
        setPositionAt: Mf.Bm,
        getStrokeColor: Mf.QW,
        setStrokeWeight: Mf.kp,
        getStrokeWeight: Mf.yK,
        setStrokeOpacity: Mf.ip,
        getStrokeOpacity: Mf.RW,
        setFillOpacity: Mf.bt,
        getFillOpacity: Mf.lW,
        setStrokeStyle: Mf.jp,
        getStrokeStyle: Mf.xK,
        getFillColor: Mf.kW,
        getBounds: Mf.pe,
        enableEditing: Mf.bf,
        disableEditing: Mf.eV,
        getEditing: Mf.hW
    });
    var Nf = Hc.prototype;
    U(Nf, {
        setCenter: Nf.lf,
        getCenter: Nf.ub,
        getRadius: Nf.tK,
        setRadius: Nf.mf
    });
    var Of = Fc.prototype;
    U(Of, {
        getPath: Of.Ne,
        setPath: Of.ee,
        setPositionAt: Of.Bm
    });
    var Pf = kb.prototype;
    U(Pf, {
        getPosition: Pf.fa,
        setPosition: Pf.qa,
        getText: Pf.XC,
        setText: Pf.jt
    });
    J.prototype.equals = J.prototype.gc;
    R.prototype.equals = R.prototype.gc;
    P.prototype.equals = P.prototype.gc;
    U(window, {
        BMAP_ANCHOR_TOP_LEFT: Wb,
        BMAP_ANCHOR_TOP_RIGHT: Xb,
        BMAP_ANCHOR_BOTTOM_LEFT: Yb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Qf = Ub.prototype;
    U(Qf, {
        setAnchor: Qf.oc,
        getAnchor: Qf.zC,
        setOffset: Qf.de,
        getOffset: Qf.Yi,
        show: Qf.show,
        hide: Qf.U,
        isVisible: Qf.Ic,
        toString: Qf.toString
    });
    var Rf = lb.prototype;
    U(Rf, {
        getType: Rf.Go,
        setType: Rf.Cm
    });
    U(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Sf = nb.prototype;
    U(Sf, {
        changeView: Sf.me,
        setSize: Sf.we,
        getSize: Sf.Ab
    });
    var Tf = mb.prototype;
    U(Tf, {
        getUnit: Tf.YW,
        setUnit: Tf.tE
    });
    U(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Uf = $b.prototype;
    U(Uf, {
        addCopyright: Uf.Hv,
        removeCopyright: Uf.$D,
        getCopyright: Uf.Sl,
        getCopyrightCollection: Uf.GC
    });
    U(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: bc,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Vf = Mc.prototype;
    U(Vf, {
        getMapType: Vf.ra,
        getCopyright: Vf.Sl,
        isTransparentPng: Vf.Es
    });
    var Wf = fc.prototype;
    U(Wf, {
        addItem: Wf.Iv,
        addSeparator: Wf.$A,
        removeSeparator: Wf.bE
    });
    var Xf = ic.prototype;
    U(Xf, {
        setText: Xf.jt
    });
    var Yf = X.prototype;
    U(Yf, {
        getStatus: Yf.Xl,
        setSearchCompleteCallback: Yf.it,
        getPageCapacity: Yf.ff,
        setPageCapacity: Yf.gp,
        setLocation: Yf.Am,
        disableFirstResultSelection: Yf.NB,
        enableFirstResultSelection: Yf.fC,
        gotoPage: Yf.$l,
        searchNearby: Yf.dp,
        searchInBounds: Yf.xm,
        search: Yf.search
    });
    U(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: Od,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: Pd,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: Qd
    });
    U(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    U(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    U(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    U(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    U(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    U(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var Zf = ee.prototype;
    U(Zf, {
        clearResults: Zf.Le
    });
    ge = fe.prototype;
    U(ge, {
        setPolicy: ge.ht,
        toString: ge.toString,
        setPageCapacity: ge.gp,
        setIntercityPolicy: ge.WM,
        setTransitTypePolicy: ge.eN
    });
    U(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    U(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var $f = pe.prototype;
    U($f, {
        routeCall: $f.PM
    });
    U(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    U(window, {
        BMAP_ROUTE_TYPE_DRIVING: Sd,
        BMAP_ROUTE_TYPE_WALKING: Rd,
        BMAP_ROUTE_TYPE_RIDING: Td
    });
    U(window, {
        BMAP_ROUTE_STATUS_NORMAL: Ud,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var ag = ie.prototype;
    U(ag, {
        setPolicy: ag.ht
    });
    var cg = ye.prototype;
    U(cg, {
        show: cg.show,
        hide: cg.U,
        setTypes: cg.sE,
        setLocation: cg.Am,
        search: cg.search,
        setInputValue: cg.Ix
    });
    U(pb.prototype, {});
    var dg = we.prototype;
    U(dg, {
        get: dg.get
    });
    U(dc.prototype, {});
    U(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Xc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    U(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: wc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    U(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: xc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    U(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    U(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: gc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: hc
    });
    U(window, {
        BMAP_SYS_DRAWER: Na,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    D.NT();
    D.G_();
}
)()
