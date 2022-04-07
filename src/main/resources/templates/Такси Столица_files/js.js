// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{"function": "__e"}, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "IS_OUTBOUND",
                "vtp_affiliatedDomains": ["list"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {"function": "__v", "vtp_name": "gtm.elementId", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {"function": "__aev", "vtp_varType": "URL", "vtp_component": "URL_NO_FRAGMENT"}, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "HOST",
                "vtp_stripWww": true
            }, {"function": "__aev", "vtp_varType": "URL", "vtp_component": "EXTENSION"}, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {"function": "__aev", "vtp_varType": "URL", "vtp_component": "PATH"}, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {"function": "__v", "vtp_name": "gtm.videoUrl", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {"function": "__v", "vtp_name": "gtm.videoProvider", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {"function": "__v", "vtp_name": "gtm.videoDuration", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {"function": "__v", "vtp_name": "gtm.videoVisible", "vtp_dataLayerVersion": 1}, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "q,s,search,query,keyword",
                "vtp_multiQueryKeys": true,
                "vtp_ignoreEmptyQueryParam": true,
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {"function": "__v", "vtp_name": "gtm.scrollThreshold", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {"function": "__v", "vtp_name": "gtm.oldUrl", "vtp_dataLayerVersion": 1}, {
                "function": "__v",
                "vtp_name": "gtm.newUrl",
                "vtp_dataLayerVersion": 1
            }, {"function": "__c", "vtp_value": "google.by"}, {"function": "__c", "vtp_value": 0}],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-W280663TPN",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__get",
                "vtp_eventName": "click",
                "vtp_settings": ["map", "streamId", "G-W280663TPN", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]],
                "vtp_deferrable": false,
                "tag_id": 11
            }, {
                "function": "__get",
                "vtp_eventName": "file_download",
                "vtp_settings": ["map", "streamId", "G-W280663TPN", "eventParameters", ["map", "link_id", ["macro", 3], "link_text", ["macro", 8], "link_url", ["macro", 5], "file_name", ["macro", 9], "file_extension", ["macro", 7]]],
                "vtp_deferrable": false,
                "tag_id": 18
            }, {
                "function": "__get",
                "vtp_eventName": ["template", "video_", ["macro", 10]],
                "vtp_settings": ["map", "streamId", "G-W280663TPN", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]],
                "vtp_deferrable": false,
                "tag_id": 21
            }, {
                "function": "__get",
                "vtp_eventName": "view_search_results",
                "vtp_settings": ["map", "streamId", "G-W280663TPN", "eventParameters", ["map", "search_term", ["macro", 18]]],
                "vtp_deferrable": true,
                "tag_id": 26
            }, {
                "function": "__get",
                "vtp_eventName": "scroll",
                "vtp_settings": ["map", "streamId", "G-W280663TPN", "eventParameters", ["map", "percent_scrolled", ["macro", 19]]],
                "vtp_deferrable": false,
                "tag_id": 29
            }, {
                "function": "__get",
                "vtp_eventName": "page_view",
                "vtp_settings": ["map", "streamId", "G-W280663TPN", "eventParameters", ["map", "page_referrer", ["macro", 21]]],
                "vtp_deferrable": false,
                "tag_id": 32
            }, {
                "function": "__dlm",
                "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-W280663TPN", "value", ["macro", 21]]],
                "tag_id": 33
            }, {
                "function": "__ogt_event_create",
                "original_activity_id": 2,
                "vtp_eventName": "TaxiOrder",
                "vtp_isCopy": true,
                "vtp_precompiledRule": ["map", "new_event_name", "TaxiOrder", "merge_source_event_params", true, "event_name_predicate", ["map", "values", ["list", ["map", "type", "event_name"], ["map", "type", "const", "const_value", "ORDER_SEARCH"]], "type", "eq"], "conditions", ["list", ["map", "predicates", ["list"]]]],
                "tag_id": 36
            }, {
                "function": "__set_product_settings",
                "original_activity_id": 3,
                "vtp_foreignTldMacroResult": ["macro", 23],
                "vtp_isChinaVipRegionMacroResult": ["macro", 24],
                "tag_id": 37
            }, {
                "function": "__ogt_event_settings",
                "original_activity_id": 4,
                "vtp_eventSettings": ["list", ["map", "name", "first_open", "conversion", true], ["map", "name", "in_app_purchase", "conversion", true], ["map", "name", "ecommerce_purchase", "conversion", true], ["map", "name", "add_to_cart", "conversion", true], ["map", "name", "add_to_wishlist", "conversion", true], ["map", "name", "begin_checkout", "conversion", true], ["map", "name", "session_start", "conversion", true], ["map", "name", "view_item", "conversion", true], ["map", "name", "view_item_list", "conversion", true], ["map", "name", "view_search_results", "conversion", true], ["map", "name", "first_visit", "conversion", true], ["map", "name", "app_store_subscription_convert", "conversion", true], ["map", "name", "app_store_subscription_renew", "conversion", true], ["map", "name", "purchase", "conversion", true], ["map", "name", "ORDER_SEARCH", "conversion", true], ["map", "name", "TaxiOrder", "conversion", true]],
                "tag_id": 38
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_9",
                "tag_id": 39
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_16",
                "tag_id": 40
            }, {
                "function": "__ytl",
                "vtp_captureStart": true,
                "vtp_captureComplete": true,
                "vtp_captureProgress": true,
                "vtp_progressThresholdsPercent": "10,25,50,75",
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_uniqueTriggerId": "1_19",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 41
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "90",
                "vtp_verticalThresholdOn": true,
                "vtp_horizontalThresholdOn": false,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_uniqueTriggerId": "1_27",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 42
            }, {
                "function": "__ehl",
                "vtp_groupEvents": true,
                "vtp_groupEventsInterval": 1000,
                "vtp_uniqueTriggerId": "1_30",
                "tag_id": 43
            }],
            "predicates": [{"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js"}, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": true
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick"}, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_9($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
                "ignore_case": true
            }, {"function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_16($|,)))"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {"function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_19($|,)))"}, {
                "function": "_eq",
                "arg0": ["macro", 18],
                "arg1": "undefined"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.scrollDepth"}, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_27($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 20],
                "arg1": ["list", "pushState", "popstate", "replaceState"],
                "any_of": true
            }, {"function": "_eq", "arg0": ["macro", 21], "arg1": ["macro", 22]}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange-v2"
            }, {"function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_30($|,)))"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.dom"}, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }],
            "rules": [[["if", 0], ["add", 0, 11, 12, 15]], [["if", 1, 2, 3], ["add", 1]], [["if", 2, 4, 5], ["add", 2]], [["if", 6, 7], ["add", 3]], [["if", 0], ["unless", 8], ["add", 4]], [["if", 9, 10], ["add", 5]], [["if", 11, 13, 14], ["unless", 12], ["add", 6, 7]], [["if", 15], ["add", 8, 9, 10]], [["if", 16], ["add", 13]], [["if", 17], ["add", 14]]]
        },
        "runtime": [[50, "__ogt_event_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [8]], [53, [41, "f"], [3, "f", 0], [63, [7, "f"], [23, [15, "f"], [17, [17, [15, "a"], "eventSettings"], "length"]], [33, [15, "f"], [3, "f", [0, [15, "f"], 1]]], [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "name"]], [43, [15, "d"], [15, "g"], [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "conversion"]]]]]]], [52, "e", [17, ["c"], "containerId"]], ["b", [15, "e"], "event_settings", [15, "d"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_event_create", [46, "a"], [52, "b", ["require", "internal.appendRemoteConfigParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "dynamic_event_settings.synthesis_rules", [17, [15, "a"], "precompiledRule"]], [2, [15, "a"], "gtmOnSuccess", [7]]]]
        ,
        "permissions": {
            "__ogt_event_settings": {"read_container_data": {}},
            "__set_product_settings": {"read_container_data": {}},
            "__ogt_event_create": {"read_container_data": {}}
        }

        ,
        "security_groups": {
            "google": ["__ogt_event_settings", "__set_product_settings", "__ogt_event_create"]
        }

    };


    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l, aa = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, da = function (a) {
        return a.raw = a
    }, ea = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: aa(a)}
    }, fa = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf; else {
        var ja;
        a:{
            var la = {a: !0}, ma = {};
            try {
                ma.__proto__ = la;
                ja = ma.a;
                break a
            } catch (a) {
            }
            ja = !1
        }
        ia = ja ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ia, oa = function (a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Tk = b.prototype
    }, qa = this || self, ra = function (a) {
        return a
    };
    var sa = function (a, b) {
        this.g = a;
        this.o = b
    };
    var ua = function (a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }, va = function () {
        this.C = {};
        this.s = !1;
        this.F = {}
    }, wa = function (a, b) {
        var c = [], d;
        for (d in a.C) if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
            case 1:
                c.push(d);
                break;
            case 2:
                c.push(a.get(d));
                break;
            case 3:
                c.push([d, a.get(d)])
        }
        return c
    };
    va.prototype.get = function (a) {
        return this.C["dust." + a]
    };
    va.prototype.set = function (a, b) {
        this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.C[a] = b))
    };
    va.prototype.has = function (a) {
        return this.C.hasOwnProperty("dust." + a)
    };
    var xa = function (a, b) {
        b = "dust." + b;
        a.s || a.F.hasOwnProperty(b) || delete a.C[b]
    };
    va.prototype.Kb = function () {
        this.s = !0
    };
    var ya = function (a) {
        this.o = new va;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ua(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = ya.prototype;
    l.toString = function (a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof ya ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    l.set = function (a, b) {
        if (!this.s) if ("length" === a) {
            if (!ua(b)) throw Error("RangeError: Length property must be a valid integer.");
            this.g.length = Number(b)
        } else ua(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    l.get = function (a) {
        return "length" === a ? this.length() : ua(a) ? this.g[Number(a)] : this.o.get(a)
    };
    l.length = function () {
        return this.g.length
    };
    l.Jb = function () {
        for (var a = wa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new ya(a)
    };
    var za = function (a, b) {
        ua(b) ? delete a.g[Number(b)] : xa(a.o, b)
    };
    l = ya.prototype;
    l.pop = function () {
        return this.g.pop()
    };
    l.push = function (a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.shift = function () {
        return this.g.shift()
    };
    l.splice = function (a, b, c) {
        return new ya(this.g.splice.apply(this.g, arguments))
    };
    l.unshift = function (a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.has = function (a) {
        return ua(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    };
    l.Kb = function () {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Kb()
    };
    var Ba = function () {
        function a(f, g) {
            if (b[f]) {
                if (b[f].Yd + g > b[f].max) throw Error("Quota exceeded");
                b[f].Yd += g
            }
        }

        var b = {}, c = void 0, d = void 0, e = {
            Wj: function (f) {
                c = f
            }, fh: function () {
                c && a(c, 1)
            }, Yj: function (f) {
                d = f
            }, Mb: function (f) {
                d && a(d, f)
            }, wk: function (f, g) {
                b[f] = b[f] || {Yd: 0};
                b[f].max = g
            }, xj: function (f) {
                return b[f] && b[f].Yd || 0
            }, reset: function () {
                b = {}
            }, jj: a
        };
        e.onFnConsume = e.Wj;
        e.consumeFn = e.fh;
        e.onStorageConsume = e.Yj;
        e.consumeStorage = e.Mb;
        e.setMax = e.wk;
        e.getConsumed = e.xj;
        e.reset = e.reset;
        e.consume = e.jj;
        return e
    };
    var Ca = function (a, b) {
        this.s = a;
        this.P = function (c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.o = new va;
        this.g = this.F = void 0
    };
    Ca.prototype.add = function (a, b) {
        Ea(this, a, b, !1)
    };
    var Ea = function (a, b, c, d) {
        if (!a.o.s) if (a.s.Mb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
            var e = a.o;
            e.set(b, c);
            e.F["dust." + b] = !0
        } else a.o.set(b, c)
    };
    Ca.prototype.set = function (a, b) {
        this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Mb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
    };
    Ca.prototype.get = function (a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
    };
    Ca.prototype.has = function (a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a))
    };
    var Fa = function (a) {
        var b = new Ca(a.s, a);
        a.F && (b.F = a.F);
        b.P = a.P;
        b.g = a.g;
        return b
    };
    var Ga = function () {
        }, Ha = function (a) {
            return "function" == typeof a
        }, Ia = function (a) {
            return "string" == typeof a
        }, Ka = function (a) {
            return "number" == typeof a && !isNaN(a)
        }, Na = Array.isArray, Oa = function (a, b) {
            if (a && Na(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
        }, Pa = function (a, b) {
            if (!Ka(a) || !Ka(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        }, Ra = function (a, b) {
            for (var c = new Qa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
            return !1
        }, Sa = function (a,
                          b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        }, Ta = function (a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        }, Ua = function (a) {
            return Math.round(Number(a)) || 0
        }, Va = function (a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        }, Wa = function (a) {
            var b = [];
            if (Na(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        }, Xa = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        }, Ya = function () {
            return new Date(Date.now())
        },
        Za = function () {
            return Ya().getTime()
        }, Qa = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
    Qa.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Qa.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    var $a = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, ab = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {
                }
            }
        }
    }, bb = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }, cb = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) return !0;
        return !1
    }, db = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }, eb = function (a, b) {
        var c = m;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (0 <=
                b.indexOf(d)) return
        }
        return d
    }, fb = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }, gb = /^\w{1,9}$/, hb = function (a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        Sa(a, function (d, e) {
            gb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }, ib = function (a, b) {
        function c() {
            ++d === b && (e(), e = null, c.done = !0)
        }

        var d = 0, e = a;
        c.done = !1;
        return c
    };
    var jb = function (a, b) {
        va.call(this);
        this.P = a;
        this.Za = b
    };
    oa(jb, va);
    jb.prototype.toString = function () {
        return this.P
    };
    jb.prototype.Jb = function () {
        return new ya(wa(this, 1))
    };
    jb.prototype.g = function (a, b) {
        a.s.fh();
        return this.Za.apply(new kb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    jb.prototype.o = function (a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {
        }
    };
    var mb = function (a, b) {
        for (var c, d = 0; d < b.length && !(c = lb(a, b[d]), c instanceof sa); d++) ;
        return c
    }, lb = function (a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof jb)) throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.g.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {id: b[0], line: b.context.line} : null);
            throw e;
        }
    }, kb = function (a, b) {
        this.o = a;
        this.g = b
    }, z = function (a, b) {
        return Na(b) ? lb(a.g, b) : b
    }, G = function (a) {
        return a.o.P
    };
    var nb = function () {
        va.call(this)
    };
    oa(nb, va);
    nb.prototype.Jb = function () {
        return new ya(wa(this, 1))
    };
    var ob = {
        control: function (a, b) {
            return new sa(a, z(this, b))
        }, fn: function (a, b, c) {
            var d = this.g, e = z(this, b);
            if (!(e instanceof ya)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Mb(a.length + f.length);
            return new jb(a, function () {
                return function (g) {
                    var h = Fa(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++) if (k[n] = z(this, k[n]), k[n] instanceof sa) return k[n];
                    for (var p = e.get("length"), q =
                        0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new ya(k));
                    var t = mb(h, f);
                    if (t instanceof sa) return "return" === t.g ? t.o : t
                }
            }())
        }, list: function (a) {
            var b = this.g.s;
            b.Mb(arguments.length);
            for (var c = new ya, d = 0; d < arguments.length; d++) {
                var e = z(this, arguments[d]);
                "string" === typeof e && b.Mb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        }, map: function (a) {
            for (var b = this.g.s, c = new nb, d = 0; d < arguments.length - 1; d += 2) {
                var e = z(this, arguments[d]) + "", f = z(this, arguments[d + 1]), g = e.length;
                g += "string" ===
                typeof f ? f.length : 1;
                b.Mb(g);
                c.set(e, f)
            }
            return c
        }, undefined: function () {
        }
    };
    var pb = function () {
        this.s = Ba();
        this.g = new Ca(this.s)
    }, qb = function (a, b, c) {
        var d = new jb(b, c);
        d.Kb();
        a.g.set(b, d)
    }, rb = function (a, b, c) {
        ob.hasOwnProperty(b) && qb(a, c || b, ob[b])
    };
    pb.prototype.execute = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    };
    pb.prototype.o = function (a) {
        for (var b, c = 0; c < arguments.length; c++) b = lb(this.g, arguments[c]);
        return b
    };
    pb.prototype.C = function (a, b) {
        var c = Fa(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = lb(c, arguments[e]);
        return d
    };
    var sb, tb = function () {
        if (void 0 === sb) {
            var a = null, b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: ra, createScript: ra, createScriptURL: ra})
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                sb = a
            } else sb = a
        }
        return sb
    };
    var vb = function (a, b) {
        this.s = b === ub ? a : ""
    };
    vb.prototype.o = !0;
    vb.prototype.g = function () {
        return this.s.toString()
    };
    vb.prototype.toString = function () {
        return this.s + ""
    };
    var wb = function (a) {
        return a instanceof vb && a.constructor === vb ? a.s : "type_error:TrustedResourceUrl"
    }, ub = {}, yb = function (a) {
        var b = tb(), c = b ? b.createScriptURL(a) : a;
        return new vb(c, ub)
    };
    var Ab = function (a, b) {
        this.s = b === zb ? a : ""
    };
    Ab.prototype.o = !0;
    Ab.prototype.g = function () {
        return this.s.toString()
    };
    Ab.prototype.toString = function () {
        return this.s.toString()
    };
    var Bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, zb = {};

    function Cb() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Db(a) {
        return -1 != Cb().indexOf(a)
    };var Eb = {}, Fb = function (a, b, c) {
        this.s = c === Eb ? a : "";
        this.o = !0
    };
    Fb.prototype.g = function () {
        return this.s.toString()
    };
    Fb.prototype.toString = function () {
        return this.s.toString()
    };
    var Gb = function (a) {
        return a instanceof Fb && a.constructor === Fb ? a.s : "type_error:SafeHtml"
    }, Hb = function (a) {
        var b = tb(), c = b ? b.createHTML(a) : a;
        return new Fb(c, null, Eb)
    };/*

 SPDX-License-Identifier: Apache-2.0
*/
    var Ib = {};
    var Kb = function () {
    }, Lb = function (a) {
        this.g = a
    };
    oa(Lb, Kb);
    Lb.prototype.toString = function () {
        return this.g
    };

    function Mb(a, b) {
        var c = [new Lb(Nb[0].toLowerCase(), Ib)];
        if (0 === c.length) throw Error("No prefixes are provided");
        var d = c.map(function (f) {
            var g;
            if (f instanceof Lb) g = f.g; else throw Error("");
            return g
        }), e = b.toLowerCase();
        if (d.every(function (f) {
            return 0 !== e.indexOf(f)
        })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function Pb(a) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
    };var m = window, H = document, Qb = navigator, Rb = H.currentScript && H.currentScript.src, Sb = function (a, b) {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a]
        }, Tb = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, Ub = {async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1},
        Vb = {onload: 1, src: 1, width: 1, height: 1, style: 1};

    function Wb(a, b, c) {
        b && Sa(b, function (d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    var Xb = function (a, b, c, d) {
        var e = H.createElement("script");
        Wb(e, d, Ub);
        e.type = "text/javascript";
        e.async = !0;
        var f = yb(a);
        e.src = wb(f);
        var g, h, k = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
            n = null === (h = k.querySelector) || void 0 === h ? void 0 : h.call(k, "script[nonce]");
        (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
        Tb(e, b);
        c && (e.onerror = c);
        var p = H.getElementsByTagName("script")[0] || H.body || H.head;
        p.parentNode.insertBefore(e, p);
        return e
    }, Yb = function () {
        if (Rb) {
            var a = Rb.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
        }
        return 1
    }, Zb = function (a, b, c, d, e) {
        var f = e, g = !1;
        f || (f = H.createElement("iframe"), g = !0);
        Wb(f, c, Vb);
        d && Sa(d, function (k, n) {
            f.dataset[k] = n
        });
        f.height = "0";
        f.width = "0";
        f.style.display = "none";
        f.style.visibility = "hidden";
        if (g) {
            var h = H.body && H.body.lastChild || H.body || H.head;
            h.parentNode.insertBefore(f, h)
        }
        Tb(f, b);
        void 0 !== a && (f.src = a);
        return f
    }, $b = function (a, b, c) {
        var d = new Image(1, 1);
        d.onload = function () {
            d.onload = null;
            b && b()
        };
        d.onerror =
            function () {
                d.onerror = null;
                c && c()
            };
        d.src = a;
        return d
    }, ac = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, bc = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, I = function (a) {
        m.setTimeout(a, 0)
    }, dc = function (a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }, ec = function (a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b &&
        (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }, fc = function (a) {
        var b = H.createElement("div"), c = b, d = Hb("A<div>" + a + "</div>");
        void 0 !== c.tagName && Pb(c);
        c.innerHTML = Gb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
        return e
    }, gc = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }, hc = function (a) {
        var b;
        try {
            b = Qb.sendBeacon && Qb.sendBeacon(a)
        } catch (c) {
        }
        b ||
        $b(a)
    }, ic = function (a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }, jc = function (a) {
        var b = H.featurePolicy;
        return b && Ha(b.allowsFeature) ? b.allowsFeature(a) : !1
    };
    var kc = function (a, b) {
        return z(this, a) && z(this, b)
    }, lc = function (a, b) {
        return z(this, a) === z(this, b)
    }, mc = function (a, b) {
        return z(this, a) || z(this, b)
    }, nc = function (a, b) {
        a = z(this, a);
        b = z(this, b);
        return -1 < String(a).indexOf(String(b))
    }, oc = function (a, b) {
        a = String(z(this, a));
        b = String(z(this, b));
        return a.substring(0, b.length) === b
    }, pc = function (a, b) {
        a = z(this, a);
        b = z(this, b);
        switch (a) {
            case "pageLocation":
                var c = m.location.href;
                b instanceof nb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    var rc = function () {
        this.g = new pb;
        qc(this)
    };
    rc.prototype.execute = function (a) {
        return this.g.o(a)
    };
    var qc = function (a) {
        rb(a.g, "map");
        var b = function (c, d) {
            qb(a.g, c, d)
        };
        b("and", kc);
        b("contains", nc);
        b("equals", lc);
        b("or", mc);
        b("startsWith", oc);
        b("variable", pc)
    };
    var sc = function (a) {
        if (a instanceof sc) return a;
        this.fb = a
    };
    sc.prototype.toString = function () {
        return String(this.fb)
    };
    var uc = function (a) {
        va.call(this);
        this.g = a;
        this.set("then", tc(this));
        this.set("catch", tc(this, !0));
        this.set("finally", tc(this, !1, !0))
    };
    oa(uc, nb);
    var tc = function (a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new jb("", function (d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof jb || (d = void 0);
            e instanceof jb || (e = void 0);
            var f = Fa(this.g), g = function (k) {
                return function (n) {
                    return c ? (k.g(f), a.g) : k.g(f, n)
                }
            }, h = a.g.then(d && g(d), e && g(e));
            return new uc(h)
        })
    };/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var vc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, wc = function (a) {
        if (null == a) return String(a);
        var b = vc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, xc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, yc = function (a) {
        if (!a || "object" != wc(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !xc(a, "constructor") && !xc(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || xc(a, b)
    }, zc = function (a, b) {
        var c = b || ("array" == wc(a) ? [] : {}), d;
        for (d in a) if (xc(a, d)) {
            var e = a[d];
            "array" == wc(e) ? ("array" != wc(c[d]) && (c[d] = []), c[d] = zc(e, c[d])) : yc(e) ? (yc(c[d]) || (c[d] = {}), c[d] = zc(e, c[d])) : c[d] = e
        }
        return c
    };
    var Bc = function (a, b, c) {
        var d = [], e = [], f = function (h, k) {
            for (var n = wa(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
        }, g = function (h) {
            var k = d.indexOf(h);
            if (-1 < k) return e[k];
            if (h instanceof ya) {
                var n = [];
                d.push(h);
                e.push(n);
                for (var p = h.Jb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                return n
            }
            if (h instanceof uc) return h.g;
            if (h instanceof nb) {
                var t = {};
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            if (h instanceof jb) {
                var u = function () {
                    for (var r = Array.prototype.slice.call(arguments, 0), v = 0; v < r.length; v++) r[v] = Ac(r[v],
                        b, !!c);
                    var w = b ? b.s : Ba(), y = new Ca(w);
                    b && (y.g = b.g);
                    return g(h.g.apply(h, [y].concat(r)))
                };
                d.push(h);
                e.push(u);
                f(h, u);
                return u
            }
            switch (typeof h) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return h;
                case "object":
                    if (null === h) return null
            }
        };
        return g(a)
    }, Ac = function (a, b, c) {
        var d = [], e = [], f = function (h, k) {
            for (var n in h) h.hasOwnProperty(n) && k.set(n,
                g(h[n]))
        }, g = function (h) {
            var k = d.indexOf(h);
            if (-1 < k) return e[k];
            if (Na(h) || Ta(h)) {
                var n = new ya([]);
                d.push(h);
                e.push(n);
                for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                return n
            }
            if (yc(h)) {
                var q = new nb;
                d.push(h);
                e.push(q);
                f(h, q);
                return q
            }
            if ("function" === typeof h) {
                var t = new jb("", function (y) {
                    for (var x = Array.prototype.slice.call(arguments, 0), B = 0; B < x.length; B++) x[B] = Bc(z(this, x[B]), b, !!c);
                    return g((0, this.g.P)(h, h, x))
                });
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            var w = typeof h;
            if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
        };
        return g(a)
    };
    var Cc = function (a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    }, Dc = function (a) {
        if (void 0 === a || Na(a) || yc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Ec = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof ya) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g)); else c.push(arguments[e]);
            return new ya(c)
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
            d < c; d++) if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ya(d)
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function (a, b) {
            return this.has(b)
        },
        indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++) if (this.has(f) &&
                this.get(f) === b) return f;
            return -1
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(), e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ya(d)
        },
        pop: function () {
            return this.pop()
        },
        push: function (a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function (a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c) e = c; else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++) if (this.has(g)) {
                    e = this.get(g);
                    f = g + 1;
                    break
                }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function (a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c) e = c; else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++) if (this.has(d - g)) {
                    e = this.get(d - g);
                    f = d - (g + 1);
                    break
                }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function () {
            for (var a = Cc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : za(this, c);
            return this
        },
        shift: function () {
            return this.shift()
        },
        slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ya(e)
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function (a, b) {
            var c = Cc(this);
            void 0 === b ? c.sort() : c.sort(function (e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : za(this, d);
            return this
        },
        splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function () {
            return this.toString()
        },
        unshift: function (a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Fc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Gc = new sa("break"), Hc = new sa("continue"), Ic = function (a, b) {
            return z(this, a) + z(this, b)
        }, Jc = function (a, b) {
            return z(this, a) && z(this, b)
        }, Mc = function (a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (!(c instanceof ya)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Bc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {
                        }
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Fc.indexOf(b)) {
                    var f = Bc(c);
                    return Ac(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof ya) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof jb) {
                        var h = Cc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Ec.supportedMethods.indexOf(b)) {
                    var k = Cc(c);
                    k.unshift(this.g);
                    return Ec[b].apply(a, k)
                }
            }
            if (a instanceof jb || a instanceof nb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof jb) {
                        var p = Cc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof jb ? a.P : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Cc(c))
            }
            if (a instanceof sc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        }, Nc = function (a, b) {
            a = z(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = z(this, b);
            c.set(a, d);
            return d
        }, Oc = function (a) {
            var b = Fa(this.g), c = mb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof sa) return c
        }, Pc = function () {
            return Gc
        }, Qc = function (a) {
            for (var b = z(this, a), c = 0; c < b.length; c++) {
                var d = z(this, b[c]);
                if (d instanceof sa) return d
            }
        }, Rc = function (a) {
            for (var b =
                this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = z(this, arguments[c + 1]);
                    Ea(b, d, e, !0)
                }
            }
        }, Sc = function () {
            return Hc
        }, Tc = function (a, b, c) {
            var d = new ya;
            b = z(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, z(this, f))
        }, Uc = function (a, b) {
            return z(this, a) / z(this, b)
        }, Vc = function (a, b) {
            a = z(this, a);
            b = z(this, b);
            var c = a instanceof sc, d = b instanceof sc;
            return c || d ? c && d ? a.fb == b.fb : !1 : a ==
                b
        }, Wc = function (a) {
            for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]);
            return b
        };

    function Xc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)), g = mb(f, d);
            if (g instanceof sa) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function Yc(a, b, c) {
        if ("string" === typeof b) return Xc(a, function () {
            return b.length
        }, function (f) {
            return f
        }, c);
        if (b instanceof nb || b instanceof ya || b instanceof jb) {
            var d = b.Jb(), e = d.length();
            return Xc(a, function () {
                return e
            }, function (f) {
                return d.get(f)
            }, c)
        }
    }

    var Zc = function (a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.g;
        return Yc(function (e) {
            d.set(a, e);
            return d
        }, b, c)
    }, $c = function (a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.g;
        return Yc(function (e) {
            var f = Fa(d);
            Ea(f, a, e, !0);
            return f
        }, b, c)
    }, ad = function (a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.g;
        return Yc(function (e) {
            var f = Fa(d);
            f.add(a, e);
            return f
        }, b, c)
    }, cd = function (a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.g;
        return bd(function (e) {
            d.set(a, e);
            return d
        }, b, c)
    }, dd =
        function (a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return bd(function (e) {
                var f = Fa(d);
                Ea(f, a, e, !0);
                return f
            }, b, c)
        }, ed = function (a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.g;
        return bd(function (e) {
            var f = Fa(d);
            f.add(a, e);
            return f
        }, b, c)
    };

    function bd(a, b, c) {
        if ("string" === typeof b) return Xc(a, function () {
            return b.length
        }, function (d) {
            return b[d]
        }, c);
        if (b instanceof ya) return Xc(a, function () {
            return b.length()
        }, function (d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }

    var id = function (a, b, c, d) {
        function e(p, q) {
            for (var t = 0; t < f.length(); t++) {
                var u = f.get(t);
                q.add(u, p.get(u))
            }
        }

        var f = z(this, a);
        if (!(f instanceof ya)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.g;
        d = z(this, d);
        var h = Fa(g);
        for (e(g, h); lb(h, b);) {
            var k = mb(h, d);
            if (k instanceof sa) {
                if ("break" === k.g) break;
                if ("return" === k.g) return k
            }
            var n = Fa(g);
            e(h, n);
            lb(n, c);
            h = n
        }
    }, jd = function (a) {
        a = z(this, a);
        var b = this.g, c = !1;
        if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }, kd = function (a, b) {
        var c;
        a = z(this, a);
        b = z(this, b);
        if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof nb || a instanceof ya || a instanceof jb) c = a.get(b); else if ("string" === typeof a) "length" === b ? c = a.length : ua(b) && (c = a[b]); else if (a instanceof sc) return;
        return c
    }, ld = function (a, b) {
        return z(this, a) > z(this,
            b)
    }, md = function (a, b) {
        return z(this, a) >= z(this, b)
    }, nd = function (a, b) {
        a = z(this, a);
        b = z(this, b);
        a instanceof sc && (a = a.fb);
        b instanceof sc && (b = b.fb);
        return a === b
    }, od = function (a, b) {
        return !nd.call(this, a, b)
    }, pd = function (a, b, c) {
        var d = [];
        z(this, a) ? d = z(this, b) : c && (d = z(this, c));
        var e = mb(this.g, d);
        if (e instanceof sa) return e
    }, qd = function (a, b) {
        return z(this, a) < z(this, b)
    }, rd = function (a, b) {
        return z(this, a) <= z(this, b)
    }, sd = function (a, b) {
        return z(this, a) % z(this, b)
    }, td = function (a, b) {
        return z(this, a) * z(this, b)
    }, ud = function (a) {
        return -z(this,
            a)
    }, vd = function (a) {
        return !z(this, a)
    }, wd = function (a, b) {
        return !Vc.call(this, a, b)
    }, xd = function () {
        return null
    }, yd = function (a, b) {
        return z(this, a) || z(this, b)
    }, zd = function (a, b) {
        var c = z(this, a);
        z(this, b);
        return c
    }, Ad = function (a) {
        return z(this, a)
    }, Bd = function (a) {
        return Array.prototype.slice.apply(arguments)
    }, Cd = function (a) {
        return new sa("return", z(this, a))
    }, Dd = function (a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof
            jb || a instanceof ya || a instanceof nb) && a.set(b, c);
        return c
    }, Ed = function (a, b) {
        return z(this, a) - z(this, b)
    }, Fd = function (a, b, c) {
        a = z(this, a);
        var d = z(this, b), e = z(this, c);
        if (!Na(d) || !Na(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++) if (g || a === z(this, d[h])) if (f = z(this, e[h]), f instanceof sa) {
            var k = f.g;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f
        } else g = !0;
        if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]), f instanceof sa && ("return" === f.g || "continue" ===
            f.g))) return f
    }, Gd = function (a, b, c) {
        return z(this, a) ? z(this, b) : z(this, c)
    }, Ld = function (a) {
        a = z(this, a);
        return a instanceof jb ? "function" : typeof a
    }, Md = function (a) {
        for (var b = this.g, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }, Nd = function (a, b, c, d) {
        var e = z(this, d);
        if (z(this, c)) {
            var f = mb(this.g, e);
            if (f instanceof sa) {
                if ("break" === f.g) return;
                if ("return" === f.g) return f
            }
        }
        for (; z(this, a);) {
            var g = mb(this.g, e);
            if (g instanceof sa) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
            z(this,
                b)
        }
    }, Od = function (a) {
        return ~Number(z(this, a))
    }, Pd = function (a, b) {
        return Number(z(this, a)) << Number(z(this, b))
    }, Qd = function (a, b) {
        return Number(z(this, a)) >> Number(z(this, b))
    }, Rd = function (a, b) {
        return Number(z(this, a)) >>> Number(z(this, b))
    }, Sd = function (a, b) {
        return Number(z(this, a)) & Number(z(this, b))
    }, Td = function (a, b) {
        return Number(z(this, a)) ^ Number(z(this, b))
    }, Ud = function (a, b) {
        return Number(z(this, a)) | Number(z(this, b))
    };
    var Wd = function () {
        this.g = new pb;
        Vd(this)
    };
    Wd.prototype.execute = function (a) {
        return Xd(this.g.o(a))
    };
    var Yd = function (a, b, c) {
        return Xd(a.g.C(b, c))
    }, Vd = function (a) {
        var b = function (d, e) {
            rb(a.g, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function (d, e) {
            qb(a.g, String(d), e)
        };
        c(0, Ic);
        c(1, Jc);
        c(2, Mc);
        c(3, Nc);
        c(53, Oc);
        c(4, Pc);
        c(5, Qc);
        c(52, Rc);
        c(6, Sc);
        c(9, Qc);
        c(50, Tc);
        c(10, Uc);
        c(12, Vc);
        c(13, Wc);
        c(47, Zc);
        c(54, $c);
        c(55, ad);
        c(63, id);
        c(64, cd);
        c(65, dd);
        c(66, ed);
        c(15, jd);
        c(16, kd);
        c(17, kd);
        c(18, ld);
        c(19, md);
        c(20, nd);
        c(21, od);
        c(22, pd);
        c(23, qd);
        c(24, rd);
        c(25, sd);
        c(26, td);
        c(27,
            ud);
        c(28, vd);
        c(29, wd);
        c(45, xd);
        c(30, yd);
        c(32, zd);
        c(33, zd);
        c(34, Ad);
        c(35, Ad);
        c(46, Bd);
        c(36, Cd);
        c(43, Dd);
        c(37, Ed);
        c(38, Fd);
        c(39, Gd);
        c(40, Ld);
        c(41, Md);
        c(42, Nd);
        c(58, Od);
        c(57, Pd);
        c(60, Qd);
        c(61, Rd);
        c(56, Sd);
        c(62, Td);
        c(59, Ud)
    };

    function Xd(a) {
        if (a instanceof sa || a instanceof jb || a instanceof ya || a instanceof nb || a instanceof sc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };var Zd = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            Yh: a("consent"),
            ve: a("consent_always_fire"),
            Wf: a("convert_case_to"),
            Xf: a("convert_false_to"),
            Yf: a("convert_null_to"),
            Zf: a("convert_true_to"),
            $f: a("convert_undefined_to"),
            Gk: a("debug_mode_metadata"),
            Ib: a("function"),
            Ki: a("instance_name"),
            Oi: a("live_only"),
            Pi: a("malware_disabled"),
            Qi: a("metadata"),
            Vi: a("original_activity_id"),
            Lk: a("original_vendor_template_id"),
            Kk: a("once_on_load"),
            Ui: a("once_per_event"),
            Jg: a("once_per_load"),
            Nk: a("priority_override"),
            Ok: a("respected_consent_types"),
            Pg: a("setup_tags"),
            Rg: a("tag_id"),
            Sg: a("teardown_tags")
        }
    }();
    var we;
    var xe = [], ye = [], ze = [], Ae = [], Be = [], Ce = {}, De, Ee, Fe, Ge = function (a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, He = function (a, b) {
        var c = a["function"], d = b && b.event;
        if (!c) throw Error("Error: No function name given for function call.");
        var e = Ce[c], f = {}, g;
        for (g in a) if (a.hasOwnProperty(g)) if (0 === g.indexOf("vtp_")) e && d && d.eh && d.eh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]; else if (g === Zd.ve.toString() && a[g]) {
        }
        e && d && d.dh && (f.vtp_gtmCachedValues = d.dh);
        return void 0 !== e ? e(f) : we(c, f, b)
    }, Je = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = Ie(a[e], b, c));
        return d
    }, Ie = function (a, b, c) {
        if (Na(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(Ie(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var g = xe[f];
                    if (!g || b.Cf(g)) return;
                    c[f] = !0;
                    try {
                        var h = Je(g, b, c);
                        h.vtp_gtmEventId =
                            b.id;
                        d = He(h, {event: b, index: f, type: 2});
                        Fe && (d = Fe.kj(d, h))
                    } catch (y) {
                        b.xh && b.xh(y, Number(f)), d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var k = 1; k < a.length; k += 2) d[Ie(a[k], b, c)] = Ie(a[k + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                        var q = Ie(a[p], b, c);
                        Ee && (n = n || q === Ee.Nd);
                        d.push(q)
                    }
                    return Ee && n ? Ee.oj(d) : d.join("");
                case "escape":
                    d = Ie(a[1], b, c);
                    if (Ee && Na(a[1]) && "macro" === a[1][0] && Ee.Kj(a)) return Ee.dk(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) $d[a[t]] && (d = $d[a[t]](d));
                    return d;
                case "tag":
                    var u =
                        a[1];
                    if (!Ae[u]) throw Error("Unable to resolve tag reference " + u + ".");
                    return d = {lh: a[2], index: u};
                case "zb":
                    var r = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                    r["function"] = a[1];
                    var v = Ke(r, b, c), w = !!a[4];
                    return w || 2 !== v ? w !== (1 === v) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Ke = function (a, b, c) {
        try {
            return De(Je(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Le = function (a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    oa(Le, Error);

    function Me(a, b) {
        if (Na(a)) {
            Object.defineProperty(a, "context", {value: {line: b[0]}});
            for (var c = 1; c < a.length; c++) Me(a[c], b[c])
        }
    };var Ne = function (a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Zj = a;
        this.o = b;
        this.g = []
    };
    oa(Ne, Error);
    var Pe = function () {
        return function (a, b) {
            a instanceof Ne || (a = new Ne(a, Oe));
            b && a.g.push(b);
            throw a;
        }
    };

    function Oe(a) {
        if (!a.length) return a;
        a.push({id: "main", line: 0});
        for (var b = a.length - 1; 0 < b; b--) Ka(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };var Se = function (a) {
        function b(t) {
            for (var u = 0; u < t.length; u++) d[t[u]] = !0
        }

        for (var c = [], d = [], e = Qe(a), f = 0; f < ye.length; f++) {
            var g = ye[f], h = Re(g, e);
            if (h) {
                for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                b(g.block || [])
            } else null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < Ae.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }, Re = function (a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e) return !1;
            if (2 === e) return null
        }
        for (var f =
            a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h) return null;
            if (1 === h) return !1
        }
        return !0
    }, Qe = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = Ke(ze[c], a));
            return b[c]
        }
    };
    var Te = {
        kj: function (a, b) {
            b[Zd.Wf] && "string" === typeof a && (a = 1 == b[Zd.Wf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Zd.Yf) && null === a && (a = b[Zd.Yf]);
            b.hasOwnProperty(Zd.$f) && void 0 === a && (a = b[Zd.$f]);
            b.hasOwnProperty(Zd.Zf) && !0 === a && (a = b[Zd.Zf]);
            b.hasOwnProperty(Zd.Xf) && !1 === a && (a = b[Zd.Xf]);
            return a
        }
    };
    var Ue = function () {
        this.g = {}
    };

    function Ve(a, b, c, d) {
        if (a) for (var e = 0; e < a.length; e++) {
            var f = void 0, g = "A policy function denied the permission request";
            try {
                f = a[e].call(void 0, b, c, d), g += "."
            } catch (h) {
                g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
            }
            if (!f) throw new Le(c, d, g);
        }
    }

    function We(a, b, c) {
        return function () {
            var d = arguments[0];
            if (d) {
                var e = a.g[d], f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ve(e, b, d, g);
                    Ve(f, b, d, g)
                }
            }
        }
    };var Ze = function () {
        var a = data.permissions || {}, b = K.I, c = this;
        this.o = new Ue;
        this.g = {};
        var d = {}, e = We(this.o, b, function () {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        Sa(a, function (f, g) {
            var h = {};
            Sa(g, function (k, n) {
                var p = Xe(k, n);
                h[k] = p.assert;
                d[k] || (d[k] = p.T)
            });
            c.g[f] = function (k, n) {
                var p = h[k];
                if (!p) throw Ye(k, {}, "The requested permission " + k + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }, af =
        function (a) {
            return $e.g[a] || function () {
            }
        };

    function Xe(a, b) {
        var c = Ge(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ye;
        try {
            return He(c)
        } catch (d) {
            return {
                assert: function (e) {
                    throw new Le(e, {}, "Permission " + e + " is unknown.");
                }, T: function () {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Ye(a, b, c) {
        return new Le(a, b, c)
    };var bf = !1;
    var cf = {};
    cf.Fk = Va('');
    cf.rj = Va('');
    var df = bf, ef = cf.rj, ff = cf.Fk;
    var gf = function (a, b) {
        var c = String(a);
        return c
    };
    var mf = function (a) {
            var b = {}, c = 0;
            Sa(a, function (e, f) {
                if (void 0 !== f) if (f = gf(f, 100), hf.hasOwnProperty(e)) b[hf[e]] = jf(f); else if (kf.hasOwnProperty(e)) {
                    var g = kf[e], h = jf(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e) for (var k = jf(f).split("/", 5), n = 0; n < k.length; n++) {
                    var p = lf[n], q = k[n];
                    b.hasOwnProperty(p) || (b[p] = q)
                } else 10 > c && (b["k" + c] = jf(gf(e, 40)), b["v" + c] = jf(f), c++)
            });
            var d = [];
            Sa(b, function (e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        }, jf = function (a) {
            return ("" + a).replace(/~/g, function () {
                return "~~"
            })
        },
        hf = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        }, kf = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        }, lf = ["ca",
            "c2", "c3", "c4", "c5"];
    var nf = function (a) {
        var b = [];
        Sa(a, function (c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }, of = function (a, b, c, d) {
        this.Ba = a.Ba;
        this.Wb = a.Wb;
        this.J = a.J;
        this.o = b;
        this.C = c;
        this.s = nf(a.Ba);
        this.g = nf(a.J);
        this.F = this.g.length;
        if (d && 16384 < this.F) throw Error("EVENT_TOO_LARGE");
    };
    var pf = function () {
        this.events = [];
        this.g = this.Ba = "";
        this.s = 0;
        this.o = !1
    };
    pf.prototype.add = function (a) {
        return this.C(a) ? (this.events.push(a), this.Ba = a.s, this.g = a.o, this.s += a.F, this.o = a.C, !0) : !1
    };
    pf.prototype.C = function (a) {
        var b = 20 > this.events.length && 16384 > a.F + this.s,
            c = this.Ba === a.s && this.g === a.o && this.o === a.C;
        return 0 == this.events.length || b && c
    };

    var qf = function (a, b) {
        Sa(a, function (c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }, rf = function (a, b) {
        var c = [];
        a.s && c.push(a.s);
        b && c.push("_s=" + b);
        qf(a.Wb, c);
        var d = !1;
        a.g && (c.push(a.g), d = !0);
        var e = c.join("&"), f = "", g = e.length + a.o.length + 1;
        d && 2048 < g && (f = c.pop(), e = c.join("&"));
        return {Lf: e, body: f}
    }, sf = function (a, b) {
        var c = a.events;
        if (1 == c.length) return rf(c[0], b);
        var d = [];
        a.Ba && d.push(a.Ba);
        for (var e = {}, f = 0; f < c.length; f++) Sa(c[f].Wb, function (u, r) {
            null != r && (e[u] = e[u] || {}, e[u][String(r)] =
                e[u][String(r)] + 1 || 1)
        });
        var g = {};
        Sa(e, function (u, r) {
            var v, w = -1, y = 0;
            Sa(r, function (x, B) {
                y += B;
                var A = (x.length + u.length + 2) * (B - 1);
                A > w && (v = x, w = A)
            });
            y == c.length && (g[u] = v)
        });
        qf(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = {zd: n.zd}, p++) {
            var q = [];
            n.zd = {};
            Sa(c[p].Wb, function (u) {
                return function (r, v) {
                    g[r] != "" + v && (u.zd[r] = v)
                }
            }(n));
            c[p].g && q.push(c[p].g);
            qf(n.zd, q);
            k.push(q.join("&"))
        }
        var t = k.join("\r\n");
        return {Lf: h, body: t}
    };
    var Ef = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        Ff = {Fn: "function", DustMap: "Object", List: "Array"}, M = function (a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Ef.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1], g = "!" === e[2], h = e[3], k = c[d];
                if (null == k) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof k;
                    k instanceof jb ? n = "Fn" : k instanceof ya ? n = "List" : k instanceof nb ? n = "DustMap" : k instanceof sc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Ff[n] || n) + ", which does not match required type " + (Ff[h] || h) + ".");
                }
            }
        };

    function Gf(a) {
        return "" + a
    }

    function Hf(a, b) {
        var c = [];
        return c
    };var If = function (a, b) {
        var c = new jb(a, function () {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = z(this, d[e]);
            return b.apply(this, d)
        });
        c.Kb();
        return c
    }, Jf = function (a, b) {
        var c = new nb, d;
        for (d in b) if (b.hasOwnProperty(d)) {
            var e = b[d];
            Ha(e) ? c.set(d, If(a + "_" + d, e)) : (Ka(e) || Ia(e) || "boolean" == typeof e) && c.set(d, e)
        }
        c.Kb();
        return c
    };
    var Kf = function (a, b) {
        M(G(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}, d = new nb;
        return d = Jf("AssertApiSubject", c)
    };
    var Lf = function (a, b) {
        M(G(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof uc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported yet.");
        var c = {}, d = new nb;
        return d = Jf("AssertThatSubject", c)
    };

    function Mf(a) {
        return function () {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Bc(arguments[d], c));
            return Ac(a.apply(null, b))
        }
    }

    var Of = function () {
        for (var a = Math, b = Nf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Mf(a[e].bind(a)))
        }
        return c
    };
    var Pf = function (a) {
        var b;
        return b
    };
    var Qf = function (a) {
        var b;
        return b
    };
    var Rf = function (a) {
        return encodeURI(a)
    };
    var Sf = function (a) {
        return encodeURIComponent(a)
    };
    var Tf = function (a) {
        M(G(this), ["message:?string"], arguments);
    };
    var Uf = function (a, b) {
        M(G(this), ["min:!number", "max:!number"], arguments);
        return Pa(a, b)
    };
    var N = function (a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.dj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Vf = function () {
        N(this, "read_container_data");
        var a = new nb;
        a.set("containerId", 'G-W280663TPN');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", df);
        a.set("previewMode", ff);
        a.set("environmentMode", ef);
        a.Kb();
        return a
    };
    var Wf = {};
    Wf.sstECEnableData = !0;
    Wf.enableAdsEc = !0;
    Wf.sstFFConversionEnabled = !0;
    Wf.sstEnableAuid = !0;
    Wf.enableGbraidUpdate = !0;
    Wf.enable1pScripts = !0;
    Wf.enableGlobalEventDeveloperIds = !1;
    Wf.enableGa4OnoRemarketing = !1;
    Wf.omitAuidIfWbraidPresent = !1;
    Wf.sstEnableDclid = !0;
    Wf.reconcileCampaignFields = !1;
    Wf.enableEmFormCcd = !1;
    Wf.enableEmFormCcdPart2 = !1;
    Wf.enableUrlPassthrough = !0;
    Wf.requireGtagUserDataTos = !0;

    function Xf() {
        return Ac(Wf)
    };var Yf = function () {
        return (new Date).getTime()
    };
    var Zf = function (a) {
        if (null === a) return "null";
        if (a instanceof ya) return "array";
        if (a instanceof jb) return "function";
        if (a instanceof sc) {
            a = a.fb;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var $f = function (a) {
        function b(c) {
            return function (d) {
                try {
                    return c(d)
                } catch (e) {
                    (df || ff) && a.call(this, e.message)
                }
            }
        }

        return {
            parse: b(function (c) {
                return Ac(JSON.parse(c))
            }), stringify: b(function (c) {
                return JSON.stringify(Bc(c))
            })
        }
    };
    var ag = function (a) {
        return Ua(Bc(a, this.g))
    };
    var bg = function (a) {
        return Number(Bc(a, this.g))
    };
    var cg = function (a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var dg = function (a, b, c) {
        var d = null, e = !1;
        return e ? d : null
    };
    var Nf = "floor ceil round max min abs pow sqrt".split(" ");
    var eg = function () {
        var a = {};
        return {
            zj: function (b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            }, xk: function (b, c) {
                a[b] = c
            }, reset: function () {
                a = {}
            }
        }
    }, fg = function (a, b) {
        return function () {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return jb.prototype.g.apply(a, c)
        }
    }, gg = function (a, b) {
        M(G(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var hg = {};
    hg.keys = function (a) {
        return new ya
    };
    hg.values = function (a) {
        return new ya
    };
    hg.entries = function (a) {
        return new ya
    };
    hg.freeze = function (a) {
        return a
    };
    hg.delete = function (a, b) {
        return !1
    };
    var jg = function () {
        this.g = {};
        this.o = {};
    };
    jg.prototype.get = function (a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    jg.prototype.add = function (a, b, c) {
        if (this.g.hasOwnProperty(a)) throw"Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw"Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ha(b) ? If(a, b) : Jf(a, b)
    };
    var lg = function (a, b, c) {
        if (a.o.hasOwnProperty(b)) throw"Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw"Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ha(c) ? If(b, c) : Jf(b, c)
    };

    function kg(a, b) {
        var c = void 0;
        return c
    };

    function mg() {
        var a = {};
        return a
    };var S = {
        Hb: "_ee",
        Rc: "_syn_or_mod",
        Pk: "_uei",
        Pc: "_eu",
        Mk: "_pci",
        jc: "event_callback",
        Gd: "event_timeout",
        Fa: "gtag.config",
        $a: "gtag.get",
        Da: "purchase",
        fc: "refund",
        Cb: "begin_checkout",
        ac: "add_to_cart",
        bc: "remove_from_cart",
        gi: "view_cart",
        bg: "add_to_wishlist",
        Ea: "view_item",
        cc: "view_promotion",
        Be: "select_promotion",
        Ae: "select_item",
        Db: "view_item_list",
        ag: "add_payment_info",
        fi: "add_shipping_info",
        cb: "value_key",
        pb: "value_callback",
        Z: "allow_ad_personalization_signals",
        Kc: "restricted_data_processing",
        Dc: "allow_google_signals",
        xa: "cookie_expires",
        ic: "cookie_update",
        Lc: "session_duration",
        Kd: "session_engaged_time",
        Ed: "engagement_time_msec",
        Ja: "user_properties",
        ya: "transport_url",
        X: "ads_data_redaction",
        za: "user_data",
        Hc: "first_party_collection",
        D: "ad_storage",
        O: "analytics_storage",
        we: "region",
        Vf: "wait_for_update",
        wa: "conversion_linker",
        Oa: "conversion_cookie_prefix",
        ma: "value",
        ka: "currency",
        Eg: "trip_type",
        da: "items",
        ug: "passengers",
        Ee: "allow_custom_scripts",
        Gb: "session_id",
        zg: "quantity",
        sb: "transaction_id",
        rb: "language",
        Dd: "country",
        Cd: "allow_enhanced_conversions",
        Je: "aw_merchant_id",
        He: "aw_feed_country",
        Ie: "aw_feed_language",
        Ge: "discount",
        aa: "developer_id",
        qg: "global_developer_id_string",
        ng: "event_developer_id_string",
        Ld: "delivery_postal_code",
        Pe: "estimated_delivery_date",
        Ne: "shipping",
        Ve: "new_customer",
        Ke: "customer_lifetime_value",
        Oe: "enhanced_conversions",
        Cc: "page_view",
        qa: "linker",
        R: "domains",
        mc: "decorate_forms",
        mg: "enhanced_conversions_automatic_settings",
        ni: "auto_detection_enabled",
        og: "ga_temp_client_id",
        Ce: "user_engagement",
        ai: "app_remove",
        bi: "app_store_refund",
        ci: "app_store_subscription_cancel",
        di: "app_store_subscription_convert",
        ei: "app_store_subscription_renew",
        hi: "first_open",
        ii: "first_visit",
        ji: "in_app_purchase",
        ki: "session_start",
        li: "allow_display_features",
        Ec: "campaign",
        cg: "campaign_content",
        dg: "campaign_id",
        eg: "campaign_medium",
        fg: "campaign_name",
        gg: "campaign_source",
        hg: "campaign_term",
        Ga: "client_id",
        oa: "cookie_domain",
        hc: "cookie_name",
        nb: "cookie_path",
        Pa: "cookie_flags",
        Fc: "custom_map",
        Se: "groups",
        sg: "non_interaction",
        eb: "page_location",
        We: "page_path",
        Qa: "page_referrer",
        Jc: "page_title",
        ra: "send_page_view",
        Fb: "send_to",
        Mc: "session_engaged",
        Gc: "euid_logged_in_state",
        Nc: "session_number",
        Gi: "tracking_id",
        tb: "url_passthrough",
        kc: "accept_incoming",
        Ic: "url_position",
        xg: "phone_conversion_number",
        vg: "phone_conversion_callback",
        wg: "phone_conversion_css_class",
        yg: "phone_conversion_options",
        Bi: "phone_conversion_ids",
        Ai: "phone_conversion_country_code",
        ab: "aw_remarketing",
        Fe: "aw_remarketing_only",
        De: "gclid",
        mi: "auid",
        vi: "affiliation",
        lg: "tax",
        Me: "list_name",
        kg: "checkout_step",
        jg: "checkout_option",
        wi: "coupon",
        xi: "promotions",
        Ia: "user_id",
        Ei: "retoken",
        Ha: "cookie_prefix",
        ig: "disable_merchant_reported_purchases",
        ui: "dc_natural_search",
        si: "dc_custom_params",
        rg: "method",
        Fi: "search_term",
        ri: "content_type",
        zi: "optimize_id",
        yi: "experiments",
        qb: "google_signals"
    };
    S.Id = "google_tld";
    S.Md = "update";
    S.Qe = "firebase_id";
    S.Re = "ga_restrict_domain";
    S.Fd = "event_settings";
    S.Le = "dynamic_event_settings";
    S.Oc = "user_data_settings";
    S.Bg = "screen_name";
    S.Ye = "screen_resolution";
    S.Eb = "_x_19";
    S.ob = "enhanced_client_id";
    S.Hd = "_x_20";
    S.Ue = "internal_traffic_results";
    S.Dg = "traffic_type";
    S.Jd = "referral_exclusion_definition";
    S.Te = "ignore_referrer";
    S.oi = "content_group";
    S.la = "allow_interest_groups";
    var ng = {};
    S.Hi = Object.freeze((ng[S.Z] = 1, ng[S.Cd] = 1, ng[S.Dc] = 1, ng[S.da] = 1, ng[S.oa] = 1, ng[S.xa] = 1, ng[S.Pa] = 1, ng[S.hc] = 1, ng[S.nb] = 1, ng[S.Ha] = 1, ng[S.ic] = 1, ng[S.Fc] = 1, ng[S.aa] = 1, ng[S.Le] = 1, ng[S.jc] = 1, ng[S.Fd] = 1, ng[S.Gd] = 1, ng[S.Hc] = 1, ng[S.Re] = 1, ng[S.qb] = 1, ng[S.Id] = 1, ng[S.Se] = 1, ng[S.Ue] = 1, ng[S.qa] = 1, ng[S.Jd] = 1, ng[S.Kc] = 1, ng[S.ra] = 1, ng[S.Fb] = 1, ng[S.Lc] = 1, ng[S.Kd] = 1, ng[S.Ld] = 1, ng[S.ya] = 1, ng[S.Md] = 1, ng[S.Oc] = 1, ng[S.Ja] = 1, ng[S.Pc] = 1, ng));
    S.Fg = Object.freeze([S.eb, S.Qa, S.Jc, S.rb, S.Bg, S.Ia, S.Qe, S.oi]);
    var og = {};
    S.Ji = Object.freeze((og[S.ai] = 1, og[S.bi] = 1, og[S.ci] = 1, og[S.di] = 1, og[S.ei] = 1, og[S.hi] = 1, og[S.ii] = 1, og[S.ji] = 1, og[S.ki] = 1, og[S.Ce] = 1, og));
    var pg = {};
    S.Gg = Object.freeze((pg[S.ag] = 1, pg[S.fi] = 1, pg[S.ac] = 1, pg[S.bc] = 1, pg[S.gi] = 1, pg[S.Cb] = 1, pg[S.Ae] = 1, pg[S.Db] = 1, pg[S.Be] = 1, pg[S.cc] = 1, pg[S.Da] = 1, pg[S.fc] = 1, pg[S.Ea] = 1, pg[S.bg] = 1, pg));
    S.$e = Object.freeze([S.Z, S.Dc, S.ic]);
    S.Si = Object.freeze([].concat(S.$e));
    S.af = Object.freeze([S.xa, S.Gd, S.Lc, S.Kd, S.Ed]);
    S.Ti = Object.freeze([].concat(S.af));
    var qg = {};
    S.xe = (qg[S.D] = "1", qg[S.O] = "2", qg);
    var sg = {hh: "BY", Fh: "BY-MI"};
    var tg = {}, ug = function (a, b) {
        tg[a] = tg[a] || [];
        tg[a][b] = !0
    }, vg = function (a) {
        for (var b = [], c = tg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    }, wg = function () {
        for (var a = [], b = tg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var xg = function (a) {
        ug("GTM", a)
    };
    var yg = new function (a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Ag = function () {
        var a = zg, b = "zf";
        if (a.zf && a.hasOwnProperty(b)) return a.zf;
        var c = new a;
        a.zf = c;
        a.hasOwnProperty(b);
        return c
    };
    var zg = function () {
        var a = {};
        this.g = function () {
            var b = yg.g, c = yg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function () {
            a[yg.g] = !0
        }
    };
    var Bg = [];

    function Cg() {
        var a = Sb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Dg,
            update: Eg,
            addListener: Fg,
            notifyListeners: Gg,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Dg(a, b, c, d, e, f) {
        var g = Cg();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries, k = h[a] || {}, n = k.region, p = c && Ia(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    t = {region: p, initial: "granted" === b, update: k.update, quiet: q};
                if ("" !== d || !1 !== k.initial) h[a] = t;
                q && m.setTimeout(function () {
                    h[a] ===
                    t && t.quiet && (t.quiet = !1, Hg(a), Gg(), ug("TAGGING", 2))
                }, f)
            }
        }
    }

    function Eg(a, b) {
        var c = Cg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ig(a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ig(a);
            f.quiet ? (f.quiet = !1, Hg(a)) : g !== d && Hg(a)
        }
    }

    function Fg(a, b) {
        Bg.push({rf: a, uj: b})
    }

    function Hg(a) {
        for (var b = 0; b < Bg.length; ++b) {
            var c = Bg[b];
            Na(c.rf) && -1 !== c.rf.indexOf(a) && (c.Bh = !0)
        }
    }

    function Gg(a) {
        for (var b = 0; b < Bg.length; ++b) {
            var c = Bg[b];
            if (c.Bh) {
                c.Bh = !1;
                try {
                    c.uj({consentEventId: a})
                } catch (d) {
                }
            }
        }
    }

    var Ig = function (a) {
            var b = Cg();
            b.accessedAny = !0;
            var c = b.entries[a] || {};
            return void 0 !== c.update ? c.update : c.initial
        }, Jg = function (a) {
            var b = Cg();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        }, Kg = function (a) {
            var b = Cg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        }, Lg = function () {
            if (!Ag().g()) return !1;
            var a = Cg();
            a.accessedAny = !0;
            return a.active
        }, Mg = function () {
            var a = Cg();
            a.accessedDefault = !0;
            return a.usedDefault
        }, Ng = function (a, b) {
            Cg().addListener(a, b)
        }, Og = function (a) {
            Cg().notifyListeners(a)
        },
        Pg = function (a, b) {
            function c() {
                for (var e = 0; e < b.length; e++) if (!Kg(b[e])) return !0;
                return !1
            }

            if (c()) {
                var d = !1;
                Ng(b, function (e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        }, Qg = function (a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Ig(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }

            var d = Ia(b) ? [b] : b, e = {};
            c().length !== d.length && Ng(d, function (f) {
                var g = c();
                0 < g.length && (f.rf = g, a(f))
            })
        };

    function Rg() {
    }

    function Sg() {
    };

    function Tg(a) {
        for (var b = [], c = 0; c < Ug.length; c++) {
            var d = a(Ug[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }

    var Ug = [S.D, S.O], Vg = function (a) {
        var b = a[S.we];
        b && xg(40);
        var c = a[S.Vf];
        c && xg(41);
        for (var d = Na(b) ? b : [b], e = {yc: 0}; e.yc < d.length; e = {yc: e.yc}, ++e.yc) Sa(a, function (f) {
            return function (g, h) {
                if (g !== S.we && g !== S.Vf) {
                    var k = d[f.yc], n = sg.hh, p = sg.Fh;
                    Cg().set(g, h, k, n, p, c)
                }
            }
        }(e))
    }, Wg = 0, Xg = function (a, b) {
        Sa(a, function (e, f) {
            Cg().update(e, f)
        });
        Og(b);
        var c = Za(), d = c - Wg;
        Wg && 0 <= d && 1E3 > d && xg(66);
        Wg = c
    }, Yg = function (a) {
        var b = Ig(a);
        return void 0 != b ? b : !0
    }, Zg = function () {
        return "G1" + Tg(Ig)
    }, $g = function () {
        return "G1" + Tg(Jg)
    }, ah = function (a,
                      b) {
        Ng(a, b)
    }, bh = function (a, b) {
        Qg(a, b)
    }, ch = function (a, b) {
        Pg(a, b)
    };
    var eh = function (a) {
        return dh ? H.querySelectorAll(a) : null
    }, fh = function (a, b) {
        if (!dh) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!H.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, gh = !1;
    if (H.querySelectorAll) try {
        var hh = H.querySelectorAll(":root");
        hh && 1 == hh.length && hh[0] == H.documentElement && (gh = !0)
    } catch (a) {
    }
    var dh = gh;
    var ih = function (a) {
            return null == a ? "" : Ia(a) ? Xa(String(a)) : "e0"
        }, kh = function (a) {
            return a.replace(jh, "")
        }, mh = function (a) {
            return lh(a.replace(/\s/g, ""))
        }, lh = function (a) {
            return Xa(a.replace(nh, "").toLowerCase())
        }, ph = function (a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return oh.test(a) ? a : "e0"
        }, rh = function (a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (qh.test(c)) return c
            }
            return "e0"
        }, uh = function (a,
                          b) {
            window.Promise || b([]);
            Promise.all(a.map(function (c) {
                return c.value && -1 !== sh.indexOf(c.name) ? th(c.value).then(function (d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function () {
                b(a)
            }).catch(function () {
                b([])
            })
        }, th = function (a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) try {
                var b = vh(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function (c) {
                    var d = Array.from(new Uint8Array(c)).map(function (e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return m.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function () {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        }, vh = function (a) {
            var b;
            if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a); else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        nh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, qh = /^\S+@\S+\.\S+$/, oh = /^\+\d{11,15}$/, jh = /[.~]/g,
        wh = {},
        xh = (wh.email = "em", wh.phone_number = "pn", wh.first_name = "fn", wh.last_name = "ln", wh.street = "sa", wh.city = "ct", wh.region = "rg", wh.country = "co", wh.postal_code = "pc", wh.error_code = "ec", wh),
        yh = function (a, b) {
            function c(n, p, q) {
                var t = n[p];
                Na(t) || (t = [t]);
                for (var u = 0; u < t.length; ++u) {
                    var r = ih(t[u]);
                    "" !== r && f.push({name: p, value: q(r), index: void 0})
                }
            }

            function d(n, p, q, t) {
                var u = ih(n[p]);
                "" !== u && f.push({name: p, value: q(u), index: t})
            }

            function e(n) {
                return function (p) {
                    xg(64);
                    return n(p)
                }
            }

            var f = [];
            if ("https:" === m.location.protocol) {
                c(a, "email", rh);
                c(a, "phone_number", ph);
                c(a, "first_name", e(mh));
                c(a, "last_name", e(mh));
                var g = a.home_address || {};
                c(g, "street", e(lh));
                c(g, "city", e(lh));
                c(g, "postal_code", e(kh));
                c(g, "region", e(lh));
                c(g, "country", e(kh));
                var h = a.address || {};
                Na(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", mh, k), d(h[k], "last_name", mh, k), d(h[k], "street", lh, k), d(h[k], "city", lh, k), d(h[k], "postal_code", kh, k), d(h[k],
                    "region", lh, k), d(h[k], "country", kh, k);
                uh(f, b)
            } else f.push({name: "error_code", value: "e3", index: void 0}), b(f)
        }, zh = function (a, b) {
            yh(a, function (c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name, h = c[f].value, k = c[f].index, n = xh[g];
                    n && h && (-1 === sh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        }, Ah = function (a) {
            if (m.Promise) try {
                return new Promise(function (b) {
                    zh(a,
                        function (c, d) {
                            b({md: c, Sk: d})
                        })
                })
            } catch (b) {
            }
        }, sh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var K = {}, T = m.google_tag_manager = m.google_tag_manager || {}, Bh = Math.random();
    K.I = "G-W280663TPN";
    K.Rd = "2g0";
    K.ba = "dataLayer";
    K.$h = "ChAIgIG4kAYQ3cC98Zyb3NQUEiUAwiLODY2zMFojSdw9a5nBGxwjXLSyptlBeUHqPSGISnesjoM6GgL3KA\x3d\x3d";
    var Ch = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Hh = {__paused: !0, __tg: !0}, Ih;
    for (Ih in Ch) Ch.hasOwnProperty(Ih) && (Hh[Ih] = !0);
    K.ye = "www.googletagmanager.com";
    var Jh, Kh = K.ye + "/gtm.js";
    Kh = K.ye + "/gtag/js";
    Jh = Kh;
    var Lh = Va(""), Mh = null, Nh = null, Oh = "https://www.googletagmanager.com/a?id=" + K.I + "&cv=1", Ph = {},
        Qh = {}, Rh = function () {
            var a = T.sequence || 1;
            T.sequence = a + 1;
            return a
        };
    K.Zh = "";
    var Sh = "";
    K.Sd = Sh;
    var Th = new Qa, Uh = {}, Vh = {}, Yh = {
        name: K.ba, set: function (a, b) {
            zc(fb(a, b), Uh);
            Wh()
        }, get: function (a) {
            return Xh(a, 2)
        }, reset: function () {
            Th = new Qa;
            Uh = {};
            Wh()
        }
    }, Xh = function (a, b) {
        return 2 != b ? Th.get(a) : Zh(a)
    }, Zh = function (a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Uh, e = 0; e < c.length; e++) {
            if (null === d) return !1;
            if (void 0 === d) break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d)) return
        }
        return d
    }, $h = function (a, b) {
        Vh.hasOwnProperty(a) || (Th.set(a, b), zc(fb(a, b), Uh), Wh())
    }, ai = function () {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
            "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b], d = Xh(c, 1);
            if (Na(d) || yc(d)) d = zc(d);
            Vh[c] = d
        }
    }, Wh = function (a) {
        Sa(Vh, function (b, c) {
            Th.set(b, c);
            zc(fb(b, void 0), Uh);
            zc(fb(b, c), Uh);
            a && delete Vh[b]
        })
    }, bi = function (a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Zh(a) : Th.get(a);
        "array" === wc(d) || "object" === wc(d) ? c = zc(d) : c = d;
        return c
    };
    var ci, di = !1;

    function ei() {
        di = !0;
        ci = ci || {}
    }

    var fi = function (a) {
        di || ei();
        return ci[a]
    };
    var gi = function (a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity, g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
                null))
        }
        return !1
    };
    var hi = function () {
        var a = H.body, b = H.documentElement || a && a.parentElement, c, d;
        if (H.compatMode && "BackCompat" !== H.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0; else {
            var e = function (f, g) {
                return f && g ? Math.min(f, g) : Math.max(f, g)
            };
            xg(7);
            c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
            d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
        }
        return {width: d, height: c}
    }, ii = function (a) {
        var b = hi(), c = b.height, d = b.width, e = a.getBoundingClientRect(), f = e.bottom - e.top,
            g = e.right - e.left;
        return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
            d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
    };
    var pi = /:[0-9]+$/, qi = function (a, b, c, d) {
        for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
            var h = f[g].split("=");
            if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                var k = h.slice(1).join("=");
                if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
            }
        }
        return c ? e : void 0
    }, ti = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = ri(a.protocol) || ri(m.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port :
            m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(pi, "").toLowerCase());
        return si(a, b, c, d, e)
    }, si = function (a, b, c, d, e) {
        var f, g = ri(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = ui(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(pi, "").toLowerCase();
                if (c) {
                    var h = /^www\d*\./.exec(f);
                    h && h[0] && (f = f.substr(h[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" ==
                g ? 80 : "https" == g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || ug("TAGGING", 1);
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var k = f.split("/");
                0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                f = k.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = qi(f, e, !1, void 0));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, ri = function (a) {
        return a ?
            a.replace(":", "").toLowerCase() : ""
    }, ui = function (a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }, vi = function (a) {
        var b = H.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || ug("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(pi, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }, wi = function (a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function (p) {
                return void 0 !=
                    p
            }).join("&")
        }

        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), e = vi(a),
            f = a.split(/[?#]/)[0], g = e.search, h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var k = "" + f + g + h;
        "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
        return k
    };
    var xi = {};
    var Ai = function (a) {
        if (0 == a.length) return null;
        var b;
        b = yi(a, function (c) {
            return !zi.test(c.Xa)
        });
        b = yi(b, function (c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = yi(b, function (c) {
            return !gi(c.element)
        });
        return b[0]
    }, yi = function (a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }, Bi = function (a) {
        var b;
        if (a === H.body) b = "body"; else {
            var c;
            if (a.id) c = "#" + a.id; else {
                var d;
                if (a.parentElement) {
                    var e;
                    a:{
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                                e =
                                    g + 1;
                                break a
                            }
                            e = -1
                        } else e = 1
                    }
                    d = Bi(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }, Ci = !0, Di = !1;
    xi.Wh = "true";
    var Ei = function (a) {
            if ("false" === xi.Wh || !Ci) return !1;
            if (Di) return !0;
            var b = fi("AW-" +
                a);
            return !!b && !!b.preAutoPii
        }, Fi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), Gi = new RegExp(/@(gmail|googlemail)\./i),
        zi = new RegExp(/support|noreply/i), Hi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "), Ii = ["BR"],
        Ji = {}, Ki = function (a) {
            a = a || {ke: !0, me: !0};
            a.vb = a.vb || {email: !0, phone: !0, Zg: !0};
            var b, c = a, d = !!c.ke + "." + !!c.me;
            c && c.bd && c.bd.length && (d += "." + c.bd.join("."));
            c && c.vb && (d += "." + c.vb.email + "." + c.vb.phone + "." + c.vb.Zg);
            b = d;
            var e = Ji[b];
            if (e && 200 > Za() - e.timestamp) return e.result;
            var f;
            var g =
                [], h = H.body;
            if (h) {
                for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= Hi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++) if (!(0 <= Ii.indexOf(p.children[t].tagName.toUpperCase()))) {
                            q = !0;
                            break
                        }
                        q || g.push(p)
                    }
                }
                f = {elements: g, status: 1E4 < k.length ? "2" : "1"}
            } else f = {elements: g, status: "4"};
            var u = f, r = u.status, v;
            if (a.vb && a.vb.email) {
                for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                    var B = w[x], A = B.textContent;
                    "INPUT" ===
                    B.tagName.toUpperCase() && B.value && (A = B.value);
                    if (A) {
                        var D = A.match(Fi);
                        if (D) {
                            var C = D[0], E;
                            if (m.location) {
                                var F = si(m.location, "host", !0);
                                E = 0 <= C.toLowerCase().indexOf(F)
                            } else E = !1;
                            E || y.push({element: B, Xa: C})
                        }
                    }
                }
                var R;
                var L = a && a.bd;
                if (L && 0 !== L.length) {
                    for (var J = [], O = 0; O < y.length; O++) {
                        for (var P = !0, Q = 0; Q < L.length; Q++) {
                            var V = L[Q];
                            if (V && fh(y[O].element, V)) {
                                P = !1;
                                break
                            }
                        }
                        P && J.push(y[O])
                    }
                    R = J
                } else R = y;
                v = Ai(R);
                10 < y.length && (r = "3")
            }
            var ka = [];
            if (v) {
                var U = v.element, Da = {Xa: v.Xa, tagName: U.tagName, type: 1};
                a.ke && (Da.querySelector =
                    Bi(U));
                a.me && (Da.isVisible = !gi(U));
                ka.push(Da)
            }
            var Ja = {elements: ka, status: r};
            Ji[b] = {timestamp: Za(), result: Ja};
            return Ja
        }, Li = function (a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Xa.length + ":" + Gi.test(a.Xa)
        };
    var Mi = function (a, b, c) {
        if (c) {
            var d = c.selector_type, e = String(c.value), f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var k = g[h].trim();
                    if (k) {
                        if (0 === k.indexOf("dataLayer.")) f = Xh(k.substring(10)); else {
                            var n = k.split(".");
                            f = m[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && dh) {
                var q = eh(e);
                q && 0 < q.length && (f = ec(q[0]) || Xa(q[0].value))
            }
            f && (a[b] = f)
        }
    }, Ni = function (a) {
        if (a) {
            var b = {};
            Mi(b, "email",
                a.email);
            Mi(b, "phone_number", a.phone);
            b.address = [];
            for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                var e = {};
                Mi(e, "first_name", c[d].first_name);
                Mi(e, "last_name", c[d].last_name);
                Mi(e, "street", c[d].street);
                Mi(e, "city", c[d].city);
                Mi(e, "region", c[d].region);
                Mi(e, "country", c[d].country);
                Mi(e, "postal_code", c[d].postal_code);
                b.address.push(e)
            }
            return b
        }
    }, Oi = function (a) {
        if (a) switch (a.mode) {
            case "selectors":
                return Ni(a.selectors);
            case "auto_detect":
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = Ki({
                        ke: !1, me: !1,
                        bd: c.exclude_element_selectors, vb: {email: !!c.email, phone: !!c.phone, Zg: !!c.address}
                    }).elements, e = {};
                    if (0 < d.length) for (var f = 0; f < d.length; f++) {
                        var g = d[f];
                        if (1 === g.type) {
                            e.email = g.Xa;
                            break
                        }
                    }
                    b = e
                } else b = void 0;
                return b
        }
    }, Pi = function (a) {
        switch (a.enhanced_conversions_mode) {
            case "manual":
                var b = a.enhanced_conversions_manual_var;
                return void 0 !== b ? b : m.enhanced_conversion_data;
            case "automatic":
                return Ni(a[S.mg])
        }
    };
    var Qi = {}, Ri = function (a, b) {
        if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
        void 0 === Qi[a] && (Qi[a] = Math.floor(Math.random() * b));
        return Qi[a]
    };
    var Si = function (a) {
        var b = 1, c, d, e;
        if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Ti = function (a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="), h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };
    var Ui = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }, Vi = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Wi(a) {
        return "null" !== a.origin
    };var Zi = function (a, b, c, d) {
        return Xi(d) ? Ti(a, String(b || Yi()), c) : []
    }, bj = function (a, b, c, d, e) {
        if (Xi(e)) {
            var f = $i(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = aj(f, function (g) {
                    return g.ae
                }, b);
                if (1 === f.length) return f[0].id;
                f = aj(f, function (g) {
                    return g.nd
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function cj(a, b, c, d) {
        var e = Yi(), f = window;
        Wi(f) && (f.document.cookie = a);
        var g = Yi();
        return e != g || void 0 != c && 0 <= Zi(b, g, !1, d).indexOf(c)
    }

    var gj = function (a, b, c, d) {
        function e(w, y, x) {
            if (null == x) return delete h[y], w;
            h[y] = x;
            return w + "; " + y + "=" + x
        }

        function f(w, y) {
            if (null == y) return delete h[y], w;
            h[y] = !0;
            return w + "; " + y
        }

        if (!Xi(c.jb)) return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = dj(b), g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        g = e(g, "expires", k);
        g = e(g, "max-age", c.Tj);
        g = e(g, "samesite",
            c.nk);
        c.qk && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = ej(), q = void 0, t = !1, u = 0; u < p.length; ++u) {
                var r = "none" !== p[u] ? p[u] : void 0, v = e(g, "domain", r);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                t = !0;
                if (!fj(r, c.path) && cj(v, a, b, c.jb)) return 0
            }
            if (q && !t) throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return fj(n, c.path) ? 1 : cj(g, a, b, c.jb) ? 0 : 1
    }, hj = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return gj(a,
            b, c)
    };

    function aj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g], k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function $i(a, b, c) {
        for (var d = [], e = Zi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."), h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({id: g.join("."), ae: 1 * k[0] || 1, nd: 1 * k[1] || 1}))
            }
        }
        return d
    }

    var dj = function (a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }, ij = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, jj = /(^|\.)doubleclick\.net$/i, fj = function (a, b) {
        return jj.test(window.document.location.hostname) || "/" === b && ij.test(a)
    }, Yi = function () {
        return Wi(window) ? window.document.cookie : ""
    }, ej = function () {
        var a = [], b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        jj.test(e) || ij.test(e) || a.push("none");
        return a
    }, Xi = function (a) {
        if (!Ag().g() || !a || !Lg()) return !0;
        if (!Kg(a)) return !1;
        var b = Ig(a);
        return null == b ? !0 : !!b
    };
    var kj = function (a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ Si(a) & 2147483647) : String(b)
    }, lj = function (a) {
        return [kj(a), Math.round(Za() / 1E3)].join(".")
    }, oj = function (a, b, c, d, e) {
        var f = mj(b);
        return bj(a, f, nj(c), d, e)
    }, pj = function (a, b, c, d) {
        var e = "" + mj(c), f = nj(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }, mj = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, nj = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length -
            1
    };

    function qj(a, b, c) {
        var d, e = Number(null != a.Ub ? a.Ub : void 0);
        0 !== e && (d = new Date((b || Za()) + 1E3 * (e || 7776E3)));
        return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d}
    };var rj = ["1"], sj = {}, tj = {}, xj = function (a, b) {
        b = void 0 === b ? !0 : b;
        var c = uj(a.prefix);
        if (!sj[c] && !vj(c, a.path, a.domain) && b) {
            var d = uj(a.prefix), e = lj();
            if (0 === wj(d, e, a)) {
                var f = Sb("google_tag_data", {});
                f._gcl_au ? ug("GTM", 57) : f._gcl_au = e
            }
            vj(c, a.path, a.domain)
        }
    };

    function wj(a, b, c, d) {
        var e = pj(b, "1", c.domain, c.path), f = qj(c, d);
        f.jb = "ad_storage";
        return hj(a, e, f)
    }

    function vj(a, b, c) {
        var d = oj(a, b, c, rj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (sj[a] = e.slice(0, 2).join("."), tj[a] = {
            id: e.slice(2, 4).join("."),
            vh: Number(e[4]) || 0
        }) : 3 === e.length ? tj[a] = {id: e.slice(0, 2).join("."), vh: Number(e[2]) || 0} : sj[a] = d;
        return !0
    }

    function uj(a) {
        return (a || "_gcl") + "_au"
    };var yj = function (a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({Sf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0})
        }
        b.sort(function (g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function zj(a, b) {
        var c = yj(a), d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Sf] || (d[c[e].Sf] = []);
                var g = {version: f[0], timestamp: 1E3 * Number(f[1]), Aa: f[2]};
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Sf].push(g)
            }
        }
        return d
    };

    function Aj() {
        for (var a = Bj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Cj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var Bj, Dj;

    function Ej(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++), p = Dj[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }

        Bj = Bj || Cj();
        Dj = Dj || Aj();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), g = b(64), h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };var Fj;
    var Jj = function () {
        var a = Gj, b = Hj, c = Ij(), d = function (g) {
            a(g.target || g.srcElement || {})
        }, e = function (g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            ac(H, "mousedown", d);
            ac(H, "keyup", d);
            ac(H, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this)
            };
            c.init = !0
        }
    }, Kj = function (a, b, c, d, e) {
        var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
        Ij().decorators.push(f)
    }, Lj = function (a, b, c) {
        for (var d = Ij().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g =
                d[f], h;
            if (h = !c || g.forms) a:{
                var k = g.domains, n = a, p = !!g.sameHost;
                if (k && (p || n !== H.location.hostname)) for (var q = 0; q < k.length; q++) if (k[q] instanceof RegExp) {
                    if (k[q].test(n)) {
                        h = !0;
                        break a
                    }
                } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
                    h = !0;
                    break a
                }
                h = !1
            }
            if (h) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && bb(e, g.callback())
            }
        }
        return e
    };

    function Ij() {
        var a = Sb("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };var Mj = /(.*?)\*(.*?)\*(.*)/, Nj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Oj = /^(?:www\.|m\.|amp\.)+/, Pj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Qj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    var Sj = function (a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                b.push(c);
                var e = b, f = e.push, g, h = String(d);
                Bj = Bj || Cj();
                Dj = Dj || Aj();
                for (var k = [], n = 0; n < h.length; n += 3) {
                    var p = n + 1 < h.length, q = n + 2 < h.length, t = h.charCodeAt(n),
                        u = p ? h.charCodeAt(n + 1) : 0, r = q ? h.charCodeAt(n + 2) : 0, v = t >> 2,
                        w = (t & 3) << 4 | u >> 4, y = (u & 15) << 2 | r >> 6, x = r & 63;
                    q || (x = 64, p || (y = 64));
                    k.push(Bj[v], Bj[w], Bj[y], Bj[x])
                }
                g = k.join("");
                f.call(e, g)
            }
        }
        var B = b.join("*");
        return ["1", Rj(B),
            B].join("*")
    };

    function Rj(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(Za() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Fj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Fj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ Fj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }

    function Tj() {
        return function (a) {
            var b = vi(m.location.href), c = b.search.replace("?", ""), d = qi(c, "_gl", !1, !0) || "";
            a.query = Uj(d) || {};
            var e = ti(b, "fragment").match(Qj("_gl"));
            a.fragment = Uj(e && e[3] || "") || {}
        }
    }

    function Vj(a, b) {
        var c = Qj(a).exec(b), d = b;
        if (c) {
            var e = c[2], f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    var Wj = function (a, b) {
        b || (b = "_gl");
        var c = Pj.exec(a);
        if (!c) return "";
        var d = c[1], e = Vj(b, (c[2] || "").slice(1)), f = Vj(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }, Xj = function (a) {
        var b = Tj(), c = Ij();
        c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
        var d = {}, e = c.data;
        e && (bb(d, e.query), a && bb(d, e.fragment));
        return d
    }, Uj = function (a) {
        try {
            var b = Yj(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e], g = Ej(d[e + 1]);
                    c[f] = g
                }
                ug("TAGGING", 6);
                return c
            }
        } catch (h) {
            ug("TAGGING",
                8)
        }
    };

    function Yj(a, b) {
        if (a) {
            var c;
            a:{
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Mj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], k;
                a:{
                    for (var n = g[2], p = 0; p < b; ++p) if (n === Rj(h, p)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) return h;
                ug("TAGGING", 7)
            }
        }
    }

    function Zj(a, b, c, d) {
        function e(p) {
            p = Vj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }

        d = void 0 === d ? !1 : d;
        var f = Pj.exec(c);
        if (!f) return "";
        var g = f[1], h = f[2] || "", k = f[3] || "", n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }

    function ak(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = Lj(b, 1, c), e = Lj(b, 2, c), f = Lj(b, 3, c);
        if (cb(d)) {
            var g = Sj(d);
            c ? bk("_gl", g, a) : ck("_gl", g, a, !1)
        }
        if (!c && cb(e)) {
            var h = Sj(e);
            ck("_gl", h, a, !0)
        }
        for (var k in f) if (f.hasOwnProperty(k)) a:{
            var n = k, p = f[k], q = a;
            if (q.tagName) {
                if ("a" === q.tagName.toLowerCase()) {
                    ck(n, p, q, void 0);
                    break a
                }
                if ("form" === q.tagName.toLowerCase()) {
                    bk(n, p, q);
                    break a
                }
            }
            "string" == typeof q && Zj(n, p, q, void 0)
        }
    }

    function ck(a, b, c, d) {
        if (c.href) {
            var e = Zj(a, b, c.href, void 0 === d ? !1 : d);
            Bb.test(e) && (c.href = e)
        }
    }

    function bk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = H.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Zj(a, b, c.action);
                Bb.test(n) && (c.action = n)
            }
        }
    }

    function Gj(a) {
        try {
            var b;
            a:{
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || ak(e, e.hostname)
            }
        } catch (g) {
        }
    }

    function Hj(a) {
        try {
            if (a.action) {
                var b = ti(vi(a.action), "host");
                ak(a, b)
            }
        } catch (c) {
        }
    }

    var dk = function (a, b, c, d) {
        Jj();
        Kj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }, ek = function (a, b) {
        Jj();
        Kj(a, [si(m.location, "host", !0)], b, !0, !0)
    }, fk = function () {
        var a = H.location.hostname, b = Nj.exec(H.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(Oj, ""), k = e.replace(Oj, ""), n;
        if (!(n = h === k)) {
            var p = "." + k;
            n = h.substring(h.length - p.length,
                h.length) === p
        }
        return n
    }, gk = function (a, b) {
        return !1 === a ? !1 : a || b || fk()
    };
    var hk = {};
    var ik = /^\w+$/, jk = /^[\w-]+$/, kk = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb"},
        lk = function () {
            if (!Ag().g() || !Lg()) return !0;
            var a = Ig("ad_storage");
            return null == a ? !0 : !!a
        }, mk = function (a, b) {
            Kg("ad_storage") ? lk() ? a() : Qg(a, "ad_storage") : b ? ug("TAGGING", 3) : Pg(function () {
                mk(a, !0)
            }, ["ad_storage"])
        }, ok = function (a) {
            return nk(a).map(function (b) {
                return b.Aa
            })
        }, nk = function (a) {
            var b = [];
            if (!Wi(m) || !H.cookie) return b;
            var c = Zi(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d =
                {yd: d.yd}, e++) {
                var f = pk(c[e]);
                if (null != f) {
                    var g = f, h = g.version;
                    d.yd = g.Aa;
                    var k = g.timestamp, n = g.labels, p = Oa(b, function (q) {
                        return function (t) {
                            return t.Aa === q.yd
                        }
                    }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = qk(p.labels, n || [])) : b.push({
                        version: h,
                        Aa: d.yd,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function (q, t) {
                return t.timestamp - q.timestamp
            });
            return rk(b)
        };

    function qk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function sk(a) {
        return a && "string" == typeof a && a.match(ik) ? a : "_gcl"
    }

    var uk = function () {
        var a = vi(m.location.href), b = ti(a, "query", !1, void 0, "gclid"), c = ti(a, "query", !1, void 0, "gclsrc"),
            d = ti(a, "query", !1, void 0, "wbraid"), e = ti(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || qi(f, "gclid", !1, void 0);
            c = c || qi(f, "gclsrc", !1, void 0);
            d = d || qi(f, "wbraid", !1, void 0)
        }
        return tk(b, c, e, d)
    }, tk = function (a, b, c, d) {
        var e = {}, f = function (g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && jk.test(d) && (e.gbraid = d, f(d, "gb"));
        if (void 0 !==
            a && a.match(jk)) switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
        }
        c && f(c, "dc");
        return e
    }, wk = function (a) {
        var b = uk();
        mk(function () {
            vk(b, !1, a)
        })
    };

    function vk(a, b, c, d, e) {
        function f(w, y) {
            var x = xk(w, g);
            x && (hj(x, y, h), k = !0)
        }

        c = c || {};
        e = e || [];
        var g = sk(c.prefix);
        d = d || Za();
        var h = qj(c, d, !0);
        h.jb = "ad_storage";
        var k = !1, n = Math.round(d / 1E3), p = function (w) {
            var y = ["GCL", n, w];
            0 < e.length && y.push(e.join("."));
            return y.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == hk.enable_gbraid_cookie_write ? 0 : hk.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0], t = xk("gb",
                g), u = !1;
            if (!b) for (var r = nk(t), v = 0; v < r.length; v++) r[v].Aa === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }

    var zk = function (a, b) {
        var c = Xj(!0);
        mk(function () {
            for (var d = sk(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== kk[f]) {
                    var g = xk(f, d), h = c[g];
                    if (h) {
                        var k = Math.min(yk(h), Za()), n;
                        b:{
                            var p = k;
                            if (Wi(m)) for (var q = Zi(g, H.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t) if (yk(q[t]) > p) {
                                n = !0;
                                break b
                            }
                            n = !1
                        }
                        if (!n) {
                            var u = qj(b, k, !0);
                            u.jb = "ad_storage";
                            hj(g, h, u)
                        }
                    }
                }
            }
            vk(tk(c.gclid, c.gclsrc), !1, b)
        })
    }, xk = function (a, b) {
        var c = kk[a];
        if (void 0 !== c) return b + c
    }, yk = function (a) {
        return 0 !== Ak(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
    };

    function pk(a) {
        var b = Ak(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Ak(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !jk.test(a[2]) ? [] : a
    }

    var Bk = function (a, b, c, d, e) {
        if (Na(b) && Wi(m)) {
            var f = sk(e), g = function () {
                for (var h = {}, k = 0; k < a.length; ++k) {
                    var n = xk(a[k], f);
                    if (n) {
                        var p = Zi(n, H.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            mk(function () {
                dk(g, b, c, d)
            })
        }
    }, rk = function (a) {
        return a.filter(function (b) {
            return jk.test(b.Aa)
        })
    }, Ck = function (a, b) {
        if (Wi(m)) {
            for (var c = sk(b.prefix), d = {}, e = 0; e < a.length; e++) kk[a[e]] && (d[a[e]] = kk[a[e]]);
            mk(function () {
                Sa(d, function (f, g) {
                    var h = Zi(c + g, H.cookie, void 0, "ad_storage");
                    h.sort(function (u,
                                     r) {
                        return yk(r) - yk(u)
                    });
                    if (h.length) {
                        var k = h[0], n = yk(k), p = 0 !== Ak(k.split(".")).length ? k.split(".").slice(3) : [], q = {},
                            t;
                        t = 0 !== Ak(k.split(".")).length ? k.split(".")[2] : void 0;
                        q[f] = [t];
                        vk(q, !0, b, n, p)
                    }
                })
            })
        }
    };

    function Dk(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1
    }

    var Ek = function (a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }

        if (Lg()) {
            var c = uk();
            if (Dk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                ek(function () {
                    return d
                }, 3);
                ek(function () {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Fk(a, b) {
        var c = sk(b), d = xk(a, c);
        if (!d) return 0;
        for (var e = nk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Gk(a) {
        var b = 0, c;
        for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };var ml = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), nl = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, ol = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, pl = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var ql = function () {
        var a = !1;
        a = !0;
        return a
    }, sl = function (a) {
        var b = Xh("gtm.allowlist") || Xh("gtm.whitelist");
        b && xg(9);
        ql() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && db(Wa(b), nl), d = Xh("gtm.blocklist") ||
            Xh("gtm.blacklist");
        d || (d = Xh("tagTypeBlacklist")) && xg(3);
        d ? xg(8) : d = [];
        rl() && (d = Wa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Wa(d).indexOf("google") && xg(2);
        var e = d && db(Wa(d), ol), f = {};
        return function (g) {
            var h = g && g[Zd.Ib];
            if (!h || "string" != typeof h) return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h]) return f[h];
            var k = Qh[h] || [], n = a(h, k);
            if (b) {
                var p;
                if (p = n) a:{
                    if (0 > c.indexOf(h)) if (k && 0 < k.length) for (var q = 0; q < k.length; q++) {
                        if (0 > c.indexOf(k[q])) {
                            xg(11);
                            p = !1;
                            break a
                        }
                    } else {
                        p = !1;
                        break a
                    }
                    p = !0
                }
                n = p
            }
            var t = !1;
            if (d) {
                var u = 0 <= e.indexOf(h);
                if (u) t = u; else {
                    var r = Ra(e, k || []);
                    r && xg(10);
                    t = r
                }
            }
            var v = !n || t;
            v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ra(e, pl));
            return f[h] = v
        }
    }, rl = function () {
        return ml.test(m.location && m.location.hostname)
    };
    var tl = !1, ul = 0, vl = [];

    function wl(a) {
        if (!tl) {
            var b = H.createEventObject, c = "complete" == H.readyState, d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                tl = !0;
                for (var e = 0; e < vl.length; e++) I(vl[e])
            }
            vl.push = function () {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function xl() {
        if (!tl && 140 > ul) {
            ul++;
            try {
                H.documentElement.doScroll("left"), wl()
            } catch (a) {
                m.setTimeout(xl, 50)
            }
        }
    }

    var yl = function (a) {
        tl ? a() : vl.push(a)
    };
    var Bl = function (a, b) {
        this.g = !1;
        this.C = [];
        this.F = {tags: []};
        this.P = !1;
        this.o = this.s = 0;
        Al(this, a, b)
    }, Cl = function (a, b, c, d) {
        if (Hh.hasOwnProperty(b) || "__zone" === b) return -1;
        var e = {};
        yc(d) && (e = zc(d, e));
        e.id = c;
        e.status = "timeout";
        return a.F.tags.push(e) - 1
    }, Dl = function (a, b, c, d) {
        var e = a.F.tags[b];
        e && (e.status = c, e.executionTime = d)
    }, El = function (a) {
        if (!a.g) {
            for (var b = a.C, c = 0; c < b.length; c++) b[c]();
            a.g = !0;
            a.C.length = 0
        }
    }, Al = function (a, b, c) {
        Ha(b) && a.Vd(b);
        c && m.setTimeout(function () {
            return El(a)
        }, Number(c))
    };
    Bl.prototype.Vd = function (a) {
        var b = this, c = ab(function () {
            return I(function () {
                a(K.I, b.F)
            })
        });
        this.g ? c() : this.C.push(c)
    };
    var Fl = function (a) {
        a.s++;
        return ab(function () {
            a.o++;
            a.P && a.o >= a.s && El(a)
        })
    };
    var Gl = function () {
        function a(d) {
            return !Ka(d) || 0 > d ? 0 : d
        }

        if (!T._li && m.performance && m.performance.timing) {
            var b = m.performance.timing.navigationStart, c = Ka(Yh.get("gtm.start")) ? Yh.get("gtm.start") : 0;
            T._li = {cst: a(c - b), cbt: a(Nh - b)}
        }
    }, Hl = function (a) {
        m.performance && m.performance.mark(K.I + "_" + a + "_start")
    }, Il = function (a) {
        if (m.performance) {
            var b = K.I + "_" + a + "_start", c = K.I + "_" + a + "_duration";
            m.performance.measure(c, b);
            var d = m.performance.getEntriesByName(c)[0];
            m.performance.clearMarks(b);
            m.performance.clearMeasures(c);
            var e = T._p || {};
            void 0 === e[a] && (e[a] = d.duration, T._p = e);
            return d.duration
        }
    }, Jl = function () {
        if (m.performance && m.performance.now) {
            var a = T._p || {};
            a.PAGEVIEW = m.performance.now();
            T._p = a
        }
    };
    var Kl = {}, Ll = function () {
        return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
    }, Ml = !1;

    function Pl() {
        return m.GoogleAnalyticsObject || "ga"
    }

    var Ql = function (a) {
    }, Rl = function (a, b) {
        return function () {
            var c = Ll(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), h = f.get("hitCallback"), k = 0 > g.indexOf("&tid=" + b);
                    k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    k && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };
    var Yl = function (a) {
        }, bm = function (a) {
        }, cm =
            function () {
                return "&tc=" + Ae.filter(function (a) {
                    return a
                }).length
            }, fm = function () {
            2022 <= dm().length && em()
        }, gm = function (a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        }, im = function () {
            hm || (hm = m.setTimeout(em, 500))
        }, em = function () {
            hm && (m.clearTimeout(hm), hm = void 0);
            void 0 === jm || km[jm] && !lm && !mm || (nm[jm] || om.Lj() || 0 >= pm-- ? (xg(1), nm[jm] = !0) : (om.ik(), $b(dm(!0)), km[jm] = !0, qm = rm = sm = mm = lm = ""))
        }, dm = function (a) {
            var b = jm;
            if (void 0 === b) return "";
            var c = vg("GTM"), d = vg("TAGGING");
            return [tm, km[b] ? "" : "&es=1",
                um[b], Yl(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", cm(), lm, mm, sm, rm, bm(a), qm, "&z=0"].join("")
        }, wm = function () {
            tm = vm()
        }, vm = function () {
            return [Oh, "&v=3&t=t", "&pid=" + Pa(), "&rv=" + K.Rd].join("")
        }, am = ["L", "S", "Y"], Xl = ["S", "E"], xm = {sampleRate: "0.005000", Th: "", Sh: Number("5")},
        ym = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="), zm;
    if (!(zm = ym)) {
        var Am = Math.random(), Bm = xm.sampleRate;
        zm = Am < Bm
    }
    var Cm = zm, Dm = {label: K.I + " Container", children: [{label: "Initialization", children: []}]}, tm = vm(),
        km = {}, lm = "", mm = "", qm = "", rm = "", $l = {}, Zl = !1, Wl = {}, Em = {}, sm = "", jm = void 0, um = {},
        nm = {}, hm = void 0, Fm = 5;
    0 < xm.Sh && (Fm = xm.Sh);
    var om = function (a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
        return {
            Lj: function () {
                return c < a ? !1 : Za() - d[c % a] < b
            }, ik: function () {
                var f = c++ % a;
                d[f] = Za()
            }
        }
    }(Fm, 1E3), pm = 1E3, Hm = function (a, b) {
        if (Cm && !nm[a] && jm !==
            a) {
            em();
            jm = a;
            qm = lm = "";
            um[a] = "&e=" + gm(b) + "&eid=" + a;
            im();
        }
    }, Im = function (a, b, c, d) {
        if (Cm && b) {
            var e, f = String(b[Zd.Ib] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!nm[a]) {
                a !== jm && (em(), jm = a);
                lm = lm ? lm + "." + g : "&tr=" + g;
                var h = b["function"];
                if (!h) throw Error("Error: No function name given for function call.");
                var k = (Ce[h] ? "1" : "2") + e;
                qm = qm ? qm + "." + k : "&ti=" + k;
                im();
                fm()
            }
        }
    };
    var Pm = function (a, b, c) {
        if (Cm && !nm[a]) {
            a !== jm && (em(), jm = a);
            var d = c + b;
            mm = mm ? mm + "." + d : "&epr=" + d;
            im();
            fm()
        }
    }, Qm = function (a, b, c) {
    };

    function Rm(a, b, c, d) {
        var e = Ae[a], f = Sm(a, b, c, d);
        if (!f) return null;
        var g = Ie(e[Zd.Pg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Rm(h.index, {onSuccess: f, onFailure: 1 === h.lh ? b.terminate : f, terminate: b.terminate}, c, d)
        }
        return f
    }

    function Sm(a, b, c, d) {
        function e() {
            if (f[Zd.Pi]) h(); else {
                var w = Je(f, c, []);
                var y = w[Zd.Yh];
                if (null != y) for (var x = 0; x < y.length; x++) if (!Yg(y[x])) {
                    h();
                    return
                }
                var B = Cl(c.Lb, String(f[Zd.Ib]), Number(f[Zd.Rg]), w[Zd.Qi]), A = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!A) {
                        A = !0;
                        var E = Za() - C;
                        Im(c.id, Ae[a], "5", E);
                        Dl(c.Lb, B, "success",
                            E);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function () {
                    if (!A) {
                        A = !0;
                        var E = Za() - C;
                        Im(c.id, Ae[a], "6", E);
                        Dl(c.Lb, B, "failure", E);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Im(c.id, f, "1");
                var D = function () {
                    var E = Za() - C;
                    Im(c.id, f, "7", E);
                    Dl(c.Lb, B, "exception", E);
                    A || (A = !0, h())
                };
                var C = Za();
                try {
                    He(w, {event: c, index: a, type: 1})
                } catch (E) {
                    D(E)
                }
            }
        }

        var f = Ae[a], g = b.onSuccess, h = b.onFailure, k = b.terminate;
        if (c.Cf(f)) return null;
        var n = Ie(f[Zd.Sg], c, []);
        if (n && n.length) {
            var p = n[0], q = Rm(p.index, {onSuccess: g, onFailure: h, terminate: k}, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.lh ? k : q
        }
        if (f[Zd.Jg] || f[Zd.Ui]) {
            var t =
                f[Zd.Jg] ? Be : c.yk, u = g, r = h;
            if (!t[a]) {
                e = ab(e);
                var v = Tm(a, t, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function () {
                t[a](u, r)
            }
        }
        return e
    }

    function Tm(a, b, c) {
        var d = [], e = [];
        b[a] = Um(d, e, c);
        return {
            onSuccess: function () {
                b[a] = Vm;
                for (var f = 0; f < d.length; f++) d[f]()
            }, onFailure: function () {
                b[a] = Wm;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Um(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Vm(a) {
        a()
    }

    function Wm(a, b) {
        b()
    };

    function Xm(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return vi("" + c + b).href
        }
    }

    function Ym(a, b) {
        return Zm() ? Xm(a, b) : void 0
    }

    function Zm() {
        var a = !1;
        return a
    }

    function $m() {
        return !!K.Sd && "SGTM_TOKEN" !== K.Sd.replaceAll("@@", "")
    };var an = function () {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.globalConfig = {};
        this.remoteConfig = {};
        this.onSuccess = function () {
        };
        this.onFailure = function () {
        };
        this.setContainerTypeLoaded = function () {
        };
        this.getContainerTypeLoaded = function () {
        };
        this.eventId = void 0;
        this.isGtmEvent = !1
    }, bn = function (a) {
        var b = new an;
        b.eventModel = a;
        return b
    }, cn = function (a, b) {
        a.targetConfig = b;
        return a
    }, dn = function (a, b) {
        a.containerConfig = b;
        return a
    }, en = function (a, b) {
        a.globalConfig = b;
        return a
    }, fn = function (a,
                      b) {
        a.remoteConfig = b;
        return a
    }, gn = function (a, b) {
        a.onSuccess = b;
        return a
    }, hn = function (a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }, jn = function (a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }, kn = function (a, b) {
        a.onFailure = b;
        return a
    };
    l = an.prototype;
    l.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    l.getTopLevelKeys = function () {
        function a(c) {
            for (var d = Object.keys(c), e = 0; e < d.length; ++e) b[d[e]] = 1
        }

        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        return Object.keys(b)
    };
    l.getMergedValues = function (a, b) {
        function c(f) {
            yc(f) && Sa(f, function (g, h) {
                e = !0;
                d[g] = h
            })
        }

        var d = {}, e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        return e ? d : void 0
    };
    l.getKeysFromFirstOfAnyScope = function (a) {
        var b = {}, c = !1, d = function (e) {
            for (var f = 0; f < a.length; f++) void 0 !== e[a[f]] && (b[a[f]] = e[a[f]], c = !0);
            return c
        };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig) || d(this.globalConfig)) return b;
        d(this.remoteConfig);
        return b
    };
    l.getEventModelKeys = function () {
        var a = [], b;
        for (b in this.eventModel) b !== S.Hb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
        return a
    };

    function ln(a) {
        function b(d) {
            for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
        }

        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        return Object.keys(c)
    }

    function mn(a, b, c) {
        function d(g) {
            yc(g) && Sa(g, function (h, k) {
                f = !0;
                e[h] = k
            })
        }

        var e = {}, f = !1;
        c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
        c && 2 !== c || d(a.eventModel[b]);
        return f ? e : void 0
    }

    function nn(a) {
        var b = [S.Ec, S.cg, S.dg, S.eg, S.fg, S.gg, S.hg], c = {}, d = !1, e = function (f) {
            for (var g = 0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
            return d
        };
        if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
        e(a.remoteConfig);
        return c
    }

    function on(a) {
        var b = [], c;
        for (c in a.eventModel) c !== S.Hb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
        return b
    };var pn = function () {
        var a = !1;
        return a
    };
    var qn;
    if (3 === K.Rd.length) qn = "g"; else {
        var rn = "G";
        rn = "g";
        qn = rn
    }
    var sn = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: qn, OPT: "o"}, tn = function (a) {
        var b = K.I.split("-"), c = b[0].toUpperCase(), d = sn[c] || "i",
            e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === K.Rd.length) {
            var g = "w";
            g = pn() ? "s" : "o";
            f = "2" + g
        } else f = "";
        return f + d + K.Rd + e
    };

    function un(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };var vn = function (a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function wn() {
        return Db("iPhone") && !Db("iPod") && !Db("iPad")
    };Db("Opera");
    Db("Trident") || Db("MSIE");
    Db("Edge");
    !Db("Gecko") || -1 != Cb().toLowerCase().indexOf("webkit") && !Db("Edge") || Db("Trident") || Db("MSIE") || Db("Edge");
    -1 != Cb().toLowerCase().indexOf("webkit") && !Db("Edge") && Db("Mobile");
    Db("Macintosh");
    Db("Windows");
    Db("Linux") || Db("CrOS");
    var xn = qa.navigator || null;
    xn && (xn.appVersion || "").indexOf("X11");
    Db("Android");
    wn();
    Db("iPad");
    Db("iPod");
    wn() || Db("iPad") || Db("iPod");
    Cb().toLowerCase().indexOf("kaios");
    var yn = function (a) {
        if (!a || !H.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var zn = function () {
    };
    var An = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, Bn = function (a, b) {
        this.o = a;
        this.g = null;
        this.C = {};
        this.P = 0;
        this.F = void 0 === b ? 500 : b;
        this.s = null
    };
    oa(Bn, zn);
    Bn.prototype.addEventListener = function (a) {
        var b = {}, c = Vi(function () {
            return a(b)
        }), d = 0;
        -1 !== this.F && (d = setTimeout(function () {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.F));
        var e = function (f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = An(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Cn(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Bn.prototype.removeEventListener = function (a) {
        a && a.listenerId && Cn(this, "removeEventListener", null, a.listenerId)
    };
    var En = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g) return !1;
        var h = c;
        2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
        var k;
        if (0 === h) if (a.purpose && a.vendor) {
            var n = Dn(a.vendor.consents, void 0 === d ? "755" : d);
            k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Dn(a.purpose.consents, b)
        } else k = !0; else k = 1 === h ? a.purpose && a.vendor ? Dn(a.purpose.legitimateInterests,
            b) && Dn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return k
    }, Dn = function (a, b) {
        return !(!a || !a[b])
    }, Cn = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.o.__tcfapi) {
            var e = a.o.__tcfapi;
            e(b, 2, c, d)
        } else if (Fn(a)) {
            Gn(a);
            var f = ++a.P;
            a.C[f] = c;
            if (a.g) {
                var g = {};
                a.g.postMessage((g.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, g), "*")
            }
        } else c({}, !1)
    }, Fn = function (a) {
        if (a.g) return a.g;
        var b;
        a:{
            for (var c = a.o, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e =
                        !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b:{
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {
                    }
                    f = null
                }
                if (!(c = f)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }, Gn = function (a) {
        a.s || (a.s = function (b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, vn(a.o, a.s))
    };
    var Hn = !0;
    Hn = !1;
    var In = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3}, Jn = un("", 550), Kn = un("", 500);

    function Ln() {
        var a = T.tcf || {};
        return T.tcf = a
    }

    var Qn = function () {
        var a = Ln(), b = new Bn(m, Hn ? 3E3 : -1);
        if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.o.__tcfapi || null != Fn(b))) {
            a.active = !0;
            a.sd = {};
            Mn();
            var c = null;
            Hn ? c = m.setTimeout(function () {
                Nn(a);
                On(a);
                c = null
            }, Kn) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function (d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Nn(a), On(a); else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Pn(), b.removeEventListener(d); else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in In) if (In.hasOwnProperty(g)) if ("1" === g) {
                                var h = d, k = !0;
                                k = void 0 === k ? !1 : k;
                                var n;
                                var p = h;
                                !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = An(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                                !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : En(h, "1", 0) : !1
                            } else f[g] = En(d, g, In[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.sd = e, On(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Nn(a), On(a)
            }
        }
    };

    function Nn(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Hn && (a.sd = Pn())
    }

    function Mn() {
        var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = Jn, a);
        Vg(b)
    }

    function Pn() {
        var a = {}, b;
        for (b in In) In.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function On(a) {
        var b = {}, c = (b.ad_storage = a.sd["1"] ? "granted" : "denied", b);
        Xg(c, 0, {gdprApplies: a ? a.gdprApplies : void 0, tcString: Rn()})
    }

    var Rn = function () {
        var a = Ln();
        return a.active ? a.tcString || "" : ""
    }, Sn = function () {
        var a = Ln();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }, Tn = function (a) {
        if (!In.hasOwnProperty(String(a))) return !0;
        var b = Ln();
        return b.active && b.sd ? !!b.sd[String(a)] : !0
    };
    var $n = !1;
    var ao = function () {
        this.g = {}
    }, bo = function (a, b, c) {
        null != c && (a.g[b] = c)
    }, co = function (a) {
        return Object.keys(a.g).map(function (b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
        }).join("&")
    }, fo = function (a, b, c, d, e) {
    };
    var ho = /[A-Z]+/, io = /\s/, jo = function (a) {
        if (Ia(a)) {
            a = Xa(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (ho.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || io.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], N: d}
                }
            }
        }
    }, lo = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = jo(a[c]);
            d && (b[d.id] = d)
        }
        ko(b);
        var e = [];
        Sa(b, function (f, g) {
            e.push(g)
        });
        return e
    };

    function ko(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.N[1] && b.push(d.containerId)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var no = function (a, b, c, d) {
        return (2 === mo() || d || "http:" != m.location.protocol ? a : b) + c
    }, mo = function () {
        var a = Yb(), b;
        if (1 === a) a:{
            var c = Jh;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                var k = g[h].src;
                if (k) {
                    k = k.toLowerCase();
                    if (0 === k.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === f && 0 === k.indexOf(d) && (f = 2)
                }
            }
            b = f
        } else b = a;
        return b
    };
    var Go = !1;

    function Ho() {
        if (Ha(Qb.joinAdInterestGroup)) return !0;
        Go || (yn(''), Go = !0);
        return Ha(Qb.joinAdInterestGroup)
    }

    function Io(a, b) {
        var c = void 0;
        try {
            c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {
        }
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Za() - d) {
                ug("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                ug("TAGGING", 10);
                return
            }
        } catch (e) {
        }
        Zb(a, void 0, {allow: "join-ad-interest-group"}, {taggingId: b, loadTime: Za()}, c)
    };var Ep = function () {
        var a = !0;
        Tn(7) && Tn(9) && Tn(10) || (a = !1);
        return a
    }, Fp = function () {
        var a = !0;
        Tn(3) && Tn(4) || (a = !1);
        return a
    };

    function yq() {
        return T.gcq = T.gcq || new zq
    }

    var Aq = function (a, b, c) {
        yq().register(a, b, c)
    }, Bq = function (a, b, c, d) {
        yq().push("event", [b, a], c, d)
    }, Cq = function (a, b, c) {
        yq().insert("event", [b, a], c)
    }, Dq = function (a, b) {
        yq().push("config", [a], b)
    }, Eq = function (a, b, c, d) {
        yq().push("get", [a, b], c, d)
    }, Fq = function (a) {
        return yq().getRemoteConfig(a)
    }, Gq = {}, Hq = function () {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.o = {};
        this.s = null;
        this.g = !1
    }, Iq = function (a, b, c, d, e) {
        this.type = a;
        this.s = b;
        this.W = c || "";
        this.g = d;
        this.o = e
    }, zq = function () {
        this.o =
            {};
        this.s = {};
        this.g = [];
        this.C = {AW: !1, UA: !1}
    }, Jq = function (a, b) {
        var c = jo(b);
        return a.o[c.containerId] = a.o[c.containerId] || new Hq
    }, Kq = function (a, b, c) {
        if (b) {
            var d = jo(b);
            if (d && 1 === Jq(a, b).status) {
                Jq(a, b).status = 2;
                var e = {};
                Cm && (e.timeoutId = m.setTimeout(function () {
                    xg(38);
                    im()
                }, 3E3));
                a.push("require", [e], d.containerId);
                Gq[d.containerId] = Za();
                if (pn()) {
                } else {
                    var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + K.ba + "&cx=c";
                    $m() && (g += "&sign=" + K.Sd);
                    var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                        k = Ym(c, g) || h;
                    Xb(k)
                }
            }
        }
    }, Lq = function (a, b, c, d) {
        if (d.W) {
            var e = Jq(a, d.W), f = e.s;
            if (f) {
                var g = zc(c), h = zc(e.targetConfig[d.W]), k = zc(e.containerConfig), n = zc(e.remoteConfig),
                    p = zc(a.s), q = Xh("gtm.uniqueEventId"), t = jo(d.W).prefix, u = ab(function () {
                        var v =
                            g[S.jc];
                        v && I(v)
                    }), r = jn(hn(kn(gn(en(fn(dn(cn(bn(g), h), k), n), p), function () {
                        Pm(q, t, "2");
                        u()
                    }), function () {
                        Pm(q, t, "3");
                        u()
                    }), function (v, w) {
                        a.C[v] = w
                    }), function (v) {
                        return a.C[v]
                    });
                try {
                    Pm(q, t, "1");
                    f(d.W, b, d.s, r)
                } catch (v) {
                    Pm(q, t, "4");
                }
            }
        }
    };
    zq.prototype.register = function (a, b, c) {
        var d = Jq(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (zc(d.remoteConfig, c), d.remoteConfig = c);
            var e = jo(a), f = Gq[e.containerId];
            if (void 0 !== f) {
                var g = T[e.containerId].bootstrap, h = e.prefix.toUpperCase();
                T[e.containerId]._spx && (h = h.toLowerCase());
                var k = Xh("gtm.uniqueEventId"), n = h, p = Za() - g;
                if (Cm && !nm[k]) {
                    k !== jm && (em(), jm = k);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    rm = rm ? rm + "," + q : "&cl=" + q
                }
                delete Gq[e.containerId]
            }
            this.flush()
        }
    };
    zq.prototype.push = function (a, b, c, d) {
        var e = Math.floor(Za() / 1E3);
        Kq(this, c, b[0][S.ya] || this.s[S.ya]);
        c && Jq(this, c).g && (d = !1);
        this.g.push(new Iq(a, e, c, b, d));
        d || this.flush()
    };
    zq.prototype.insert = function (a, b, c) {
        var d = Math.floor(Za() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Iq(a, d, c, b, !1)) : this.g.push(new Iq(a, d, c, b, !1))
    };
    zq.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o) !f.W || Jq(this, f.W).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift(); else {
                switch (f.type) {
                    case "require":
                        if (3 !== Jq(this, f.W).status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        Cm && m.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Sa(f.g[0], function (t, u) {
                            zc(fb(t, u), b.s)
                        });
                        break;
                    case "config":
                        e.Ya = {};
                        Sa(f.g[0], function (t) {
                            return function (u, r) {
                                zc(fb(u, r), t.Ya)
                            }
                        }(e));
                        var g = !!e.Ya[S.Md];
                        delete e.Ya[S.Md];
                        var h =
                            Jq(this, f.W), k = jo(f.W), n = k.containerId === k.id;
                        g || (n ? h.containerConfig = {} : h.targetConfig[f.W] = {});
                        h.g && g || Lq(this, S.Fa, e.Ya, f);
                        h.g = !0;
                        delete e.Ya[S.Hb];
                        n ? zc(e.Ya, h.containerConfig) : zc(e.Ya, h.targetConfig[f.W]);
                        d = !0;
                        break;
                    case "event":
                        e.xd = {};
                        Sa(f.g[0], function (t) {
                            return function (u, r) {
                                zc(fb(u, r), t.xd)
                            }
                        }(e));
                        Lq(this, f.g[1], e.xd, f);
                        break;
                    case "get":
                        var p = {}, q = (p[S.cb] = f.g[0], p[S.pb] = f.g[1], p);
                        Lq(this, S.$a, q, f)
                }
                this.g.shift();
                Mq(this, f)
            }
            e = {Ya: e.Ya, xd: e.xd}
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var Mq = function (a, b) {
        if ("require" !== b.type) if (b.W) for (var c = a.getCommandListeners(b.W)[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.o) if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o) for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
        }
    };
    zq.prototype.getRemoteConfig = function (a) {
        return Jq(this, a).remoteConfig
    };
    zq.prototype.getCommandListeners = function (a) {
        return Jq(this, a).o
    };
    var Nq = !1;
    var Oq = {}, Pq = {}, Qq = function (a, b) {
        var c = Pq[b] || [];
        c.push(a);
        Pq[b] = c
    }, Sq = function () {
        T.addTargetToGroup = function (e) {
            Rq(e, "default")
        };
        T.addDestinationToContainer = function (e, f) {
            Qq(e, f)
        };
        var a = T.pendingDefaultTargets;
        delete T.pendingDefaultTargets;
        if (Array.isArray(a)) for (var b = 0; b < a.length; ++b) Rq(a[b], "default");
        var c = T.pendingDestinationIds;
        delete T.pendingDestinationIds;
        if (Array.isArray(c)) for (var d = 0; d < c.length; ++d) Qq(c[d][0], c[d][1])
    }, Rq = function (a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d =
                Oq[b[c]] || [];
            Oq[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }, Tq = function (a) {
        Sa(Oq, function (b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Uq = {
            active: !1, isAllowed: function () {
                return !1
            }
        }, Vq = {
            active: !0, isAllowed: function () {
                return !0
            }
        }, Wq = {zone: !0, cn: !0, css: !0, ew: !0, eq: !0, ge: !0, gt: !0, lc: !0, le: !0, lt: !0, re: !0, sw: !0, um: !0},
        Xq = {cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"]};

    function Yq() {
        var a = T.zones;
        a || (a = T.zones = new Zq);
        return a
    }

    function $q(a) {
        if (pn()) {
        } else {
            var b = Jh, c = "?id=" + encodeURIComponent(a) + "&l=" + K.ba;
            $m() && (c += "&sign=" + K.Sd, Rb && (b = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = no("https://", "http://", b + c);
            Xb(d)
        }
    }

    var Zq = function () {
        this.o = {};
        this.g = {};
        this.s = 0
    };
    l = Zq.prototype;
    l.isActive = function (a, b) {
        var c = this.o[a];
        if (!c) return !0;
        if (!this.checkState(c.ne, b).active) return !1;
        for (var d = 0; d < c.Xb.length; d++) if (this.g[c.Xb[d]].Rb(b)) return !0;
        return !1
    };
    l.getIsAllowedFn = function (a, b) {
        if (!this.isActive(a, b)) return function () {
            return !1
        };
        var c = this.o[a];
        if (!c) return function () {
            return !0
        };
        for (var d = [], e = 0; e < c.Xb.length; e++) {
            var f = this.g[c.Xb[e]];
            f.Rb(b) && d.push(f)
        }
        if (!d.length) return function () {
            return !1
        };
        var g = this.getIsAllowedFn(c.ne, b);
        return function (h, k) {
            k = k || [];
            if (!g(h, k)) return !1;
            for (var n = 0; n < d.length; ++n) if (d[n].isAllowed(h, k)) return !0;
            return !1
        }
    };
    l.checkState = function (a, b) {
        var c = this.o[a];
        if (!c) return Vq;
        var d = this.checkState(c.ne, b);
        if (!d.active) return Uq;
        for (var e = [], f = 0; f < c.Xb.length; f++) {
            var g = this.g[c.Xb[f]];
            g.Rb(b) && e.push(g)
        }
        return e.length ? {
            active: !0, isAllowed: function (h, k) {
                k = k || [];
                var n = d.isAllowed;
                if (!n(h, k)) return !1;
                for (var p = 0; p < e.length; ++p) if (e[p].isAllowed(h, k)) return !0;
                return !1
            }
        } : Uq
    };
    l.unregisterChild = function (a) {
        delete this.o[a]
    };
    l.createZone = function (a, b) {
        var c = String(++this.s);
        this.g[c] = new ar(a, b || null);
        return c
    };
    l.updateZone = function (a, b, c) {
        var d = this.g[a];
        d && br(d, b, c)
    };
    l.registerZone = function (a, b, c, d) {
        var e = this.g[a];
        if (e) return br(e, b, c), !1;
        if (!c) return !1;
        this.g[a] = new ar(b, d);
        return !0
    };
    l.registerChild = function (a, b, c) {
        var d = this.o[a];
        if (!d && T[a] || d && d.ne !== b) return !1;
        if (d) return d.Xb.push(c), !1;
        this.o[a] = {ne: b, Xb: [c]};
        return !0
    };
    var ar = function (a, b) {
        this.g = [{eventId: a, Rb: !0}];
        this.o = null;
        if (b) {
            this.o = {};
            for (var c = 0; c < b.length; c++) this.o[b[c]] = !0
        }
    }, br = function (a, b, c) {
        var d = a.g[a.g.length - 1];
        b <= d.eventId || d.Rb !== c && a.g.push({eventId: b, Rb: c})
    };
    ar.prototype.Rb = function (a) {
        for (var b = this.g.length - 1; 0 <= b; b--) if (this.g[b].eventId <= a) return this.g[b].Rb;
        return !1
    };
    ar.prototype.isAllowed = function (a, b) {
        b = b || [];
        if (!this.o || Wq[a] || this.o[a]) return !0;
        for (var c = 0; c < b.length; ++c) if (this.o[b[c]]) return !0;
        return !1
    };
    var cr = function (a, b, c, d, e) {
        var f = K.I + ":" + b, g = Xh("gtm.uniqueEventId", 2) || 0, h = Yq();
        c = c && db(c, Xq);
        if (h.registerZone(f, g, a, c)) for (var k = 0; k < d.length; k++) {
            var n = String(d[k]);
            h.registerChild(n, K.I, f) && (0 === n.indexOf("GTM-") ? $q(n) : (function (p, q) {
                m[K.ba].push(arguments)
            }("js", Ya()), T.addTargetToGroup ? T.addTargetToGroup(n) : (T.pendingDefaultTargets = T.pendingDefaultTargets || [], T.pendingDefaultTargets.push(n)), Dq(e, n)))
        }
    }, dr = function (a) {
        var b = T.zones;
        return b ? b.checkState(K.I, a) : Vq
    };
    var er = function (a) {
        return arguments
    }, hr = function (a, b) {
        for (var c = [], d = 0; d < Ae.length; d++) if (a[d]) {
            var e = Ae[d];
            var f = Fl(b.Lb);
            try {
                var g = Rm(d, {onSuccess: f, onFailure: f, terminate: f}, b, d);
                if (g) {
                    var h = c, k = h.push, n = d, p = e["function"];
                    if (!p) throw"Error: No function name given for function call.";
                    var q = Ce[p];
                    k.call(h, {Lh: n, Ch: q ? q.priorityOverride || 0 : 0, execute: g})
                } else fr(d, b), f()
            } catch (r) {
                f()
            }
        }
        var t = b.Lb;
        t.P = !0;
        t.o >= t.s &&
        El(t);
        c.sort(gr);
        for (var u = 0; u < c.length; u++) c[u].execute();
        return 0 < c.length
    };

    function gr(a, b) {
        var c, d = b.Ch, e = a.Ch;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var g = a.Lh, h = b.Lh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function fr(a, b) {
        if (!Cm) return;
        var c = function (d) {
            var e = b.Cf(Ae[d]) ? "3" : "4", f = Ie(Ae[d][Zd.Pg], b, []);
            f && f.length && c(f[0].index);
            Im(b.id, Ae[d], e);
            var g = Ie(Ae[d][Zd.Sg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }

    var ir = !1, jr;
    var pr = function (a) {
        var b = Za(), c = a["gtm.uniqueEventId"], d = a.event;
        if ("gtm.js" === d) {
            if (ir) return !1;
            ir = !0;
        }
        var g = dr(c), h = !1;
        if (!g.active) {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            h = !0;
            g = dr(Number.MAX_SAFE_INTEGER)
        }
        Hm(c, d);
        var k = a.eventCallback, n = a.eventTimeout, p = k;
        var q = {
            id: c, name: d, Cf: sl(g.isAllowed), yk: [], xh: function () {
                xg(6)
            }, dh: lr(), eh: mr(c), Lb: new Bl(p, n)
        }, t = Se(q);
        h && (t = nr(t));
        var u = hr(t, q);
        "gtm.js" !==
        d && "gtm.sync" !== d || Ql(K.I);
        return or(t, u)
    };

    function mr(a) {
        return function (b) {
            Cm && (Dc(b) || Qm(a, "input", b))
        }
    }

    function lr() {
        var a = {};
        a.event = bi("event", 1);
        a.ecommerce = bi("ecommerce", 1);
        a.gtm = bi("gtm");
        a.eventModel = bi("eventModel");
        return a
    }

    function nr(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && (Ch[String(Ae[c][Zd.Ib])] && (b[c] = !0), void 0 !== Ae[c][Zd.Vi] && (b[c] = !0));
        return b
    }

    function or(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && Ae[c] && !Hh[String(Ae[c][Zd.Ib])]) return !0;
        return !1
    }

    var $e;
    var qr = "HA GF G UA AW DC".split(" "), rr = !1, sr = !1, tr = 0;

    function ur(a, b) {
        var c = {event: a};
        b && (c.eventModel = zc(b), b[S.jc] && (c.eventCallback = b[S.jc]), b[S.Gd] && (c.eventTimeout = b[S.Gd]));
        return c
    }

    function vr(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {value: Rh()});
        return a["gtm.uniqueEventId"]
    }

    function wr() {
        rr || T.gtagRegistered || (rr = T.gtagRegistered = !0, Sq());
        return rr
    }

    var xr = {
        config: function (a) {
            var b, c = vr(a);
            if (2 > a.length || !Ia(a[1])) return;
            var d = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !yc(a[2]) || 3 < a.length) return;
                d = a[2]
            }
            var e = jo(a[1]);
            if (!e) return;
            var f = wr();
            Tq(e.id);
            Rq(e.id, d[S.Se] || "default");
            delete d[S.Se];
            sr || xg(43);
            if (f && -1 !== qr.indexOf(e.prefix)) {
                "G" === e.prefix && (d[S.Hb] = !0);
                delete d[S.jc];
                e.id === e.containerId && (T.configCount = ++tr);
                Dq(d, e.id);
                return
            }
            $h("gtag.targets." + e.id, void 0);
            $h("gtag.targets." + e.id, zc(d));
            var g = {};
            g[S.Fb] =
                e.id;
            b = ur(S.Fa, g);
            b["gtm.uniqueEventId"] = c;
            return b
        }, consent: function (a) {
            if (3 === a.length) {
                xg(39);
                var b = Rh(), c = a[1];
                "default" === c ? Vg(a[2]) : "update" === c && Xg(a[2], b)
            }
        }, event: function (a) {
            var b = a[1];
            if (!(2 > a.length) && Ia(b)) {
                var c;
                if (2 < a.length) {
                    if (!yc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                    c = a[2]
                }
                var d = ur(b, c), e = vr(a);
                d["gtm.uniqueEventId"] = e;
                if ("optimize.callback" === b) return d.eventModel = d.eventModel || {}, d;
                var f;
                var g = c && c[S.Fb];
                void 0 === g &&
                (g = Xh(S.Fb, 2), void 0 === g && (g = "default"));
                if (Ia(g) || Na(g)) {
                    for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++) if (0 <= h[n].indexOf("-")) k.push(h[n]); else {
                        var p = Oq[h[n]];
                        if (Nq) for (var q = 0; p && q < p.length; q++) {
                            var t = Pq[p[q]];
                            t && t.length && (k = k.concat(t))
                        } else p && p.length && (k = k.concat(p))
                    }
                    f = lo(k)
                } else f = void 0;
                var u = f;
                if (!u) return;
                for (var r = wr(), v = [], w = 0; r && w < u.length; w++) {
                    var y = u[w];
                    if (-1 !== qr.indexOf(y.prefix)) {
                        var x = zc(c);
                        "G" === y.prefix && (x[S.Hb] = !0);
                        delete x[S.jc];
                        Bq(b, x, y.id)
                    }
                    v.push(y.id)
                }
                d.eventModel =
                    d.eventModel || {};
                0 < u.length ? d.eventModel[S.Fb] = v.join() : delete d.eventModel[S.Fb];
                sr || xg(43);
                return d
            }
        }, get: function (a) {
            xg(53);
            if (4 !== a.length || !Ia(a[1]) || !Ia(a[2]) || !Ha(a[3])) return;
            var b = jo(a[1]), c = String(a[2]), d = a[3];
            if (!b) return;
            sr || xg(43);
            if (!wr() || -1 === qr.indexOf(b.prefix)) return;
            Rh();
            var e = {};
            Rg(zc((e[S.cb] = c, e[S.pb] = d, e)));
            Eq(c, function (f) {
                I(function () {
                    return d(f)
                })
            }, b.id);
        }, js: function (a) {
            if (2 == a.length &&
                a[1].getTime) {
                sr = !0;
                wr();
                var b = {};
                return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = vr(a), b
            }
        }, policy: function (a) {
            if (3 === a.length) {
                var b = a[1], c = a[2], d = $e.o;
                d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
            }
        }, set: function (a) {
            var b;
            2 == a.length && yc(a[1]) ? b = zc(a[1]) : 3 == a.length && Ia(a[1]) && (b = {}, yc(a[2]) || Na(a[2]) ? b[a[1]] = zc(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (Rh(), zc(b), wr()) {
                    var c = zc(b);
                    yq().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    }, yr = {policy: !0};
    var zr = function () {
        this.g = [];
        this.o = []
    };
    zr.prototype.push = function (a, b, c) {
        var d = {debugContext: c, message: a, notBeforeEventId: b, priorityId: this.g.length + 1};
        this.g.push(d);
        for (var e = 0; e < this.o.length; e++) try {
            this.o[e](d)
        } catch (f) {
        }
    };
    zr.prototype.listen = function (a) {
        this.o.push(a)
    };
    zr.prototype.get = function () {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b], d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };

    function Ar(a, b) {
        return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
    };var Br = function (a) {
        var b = m[K.ba].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1;
                break
            }
            c && (b.end(), b.end = null)
        }
    }, Cr = function (a) {
        var b = m[K.ba], c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Dr = !1, Er = [];

    function Fr() {
        if (!Dr) {
            Dr = !0;
            for (var a = 0; a < Er.length; a++) I(Er[a])
        }
    }

    var Gr = function (a) {
        Dr ? I(a) : Er.push(a)
    };
    var hs = function (a) {
        if (gs(a)) return a;
        this.g = a
    };
    hs.prototype.Ej = function () {
        return this.g
    };
    var gs = function (a) {
        return !a || "object" !== wc(a) || yc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    hs.prototype.getUntrustedMessageValue = hs.prototype.Ej;
    var is = 0, js, ks = {}, ls = [], ms = [], ns = !1, os = !1, ps = function (a) {
        return m[K.ba].push(a)
    }, qs = function (a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return ps(a)
    }, rs = function (a, b) {
        var c = T[K.ba], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0;
        b && (g = m.setTimeout(function () {
            f || (f = !0, a());
            g = void 0
        }, b));
        return function () {
            ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
        }
    };

    function ss(a) {
        var b = a._clear;
        Sa(a, function (d, e) {
            "_clear" !== d && (b && $h(d, void 0), $h(d, e))
        });
        Mh || (Mh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Rh(), a["gtm.uniqueEventId"] = c, $h("gtm.uniqueEventId", c));
        return pr(a)
    }

    function ts(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ta(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function us() {
        for (var a = !1; !os && (0 < ls.length || 0 < ms.length);) {
            if (!ns && ts(ls[0])) {
                var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d),
                    f = ls[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                ls.unshift(c, e);
                ns = !0
            }
            os = !0;
            delete Uh.eventModel;
            Wh();
            var g = null, h = void 0;
            null == g && (g = ls.shift());
            if (null != g) {
                var n = gs(g);
                if (n) {
                    var p = g;
                    g = gs(p) ? p.getUntrustedMessageValue() : void 0;
                    ai()
                }
                try {
                    if (Ha(g)) try {
                        g.call(Yh)
                    } catch (A) {
                    } else if (Na(g)) {
                        var q = g;
                        if (Ia(q[0])) {
                            var t = q[0].split("."), u = t.pop(), r = q.slice(1), v = Xh(t.join("."), 2);
                            if (null != v) try {
                                v[u].apply(v, r)
                            } catch (A) {
                            }
                        }
                    } else {
                        if (Ta(g)) {
                            a:{
                                var w = g, y = h;
                                if (w.length && Ia(w[0])) {
                                    var x = xr[w[0]];
                                    if (x && (!n || !yr[w[0]])) {
                                        g = x(w, y);
                                        break a
                                    }
                                }
                                g =
                                    void 0
                            }
                            if (!g) {
                                os = !1;
                                continue
                            }
                        }
                        a = ss(g) || a;
                    }
                } finally {
                    n && Wh(!0)
                }
            }
            os = !1
        }
        return !a
    }

    function ws() {
        var b = us();
        try {
            Br(K.I)
        } catch (c) {
        }
        return b
    }

    var zs = function () {
        var a = Sb(K.ba, []), b = Sb("google_tag_manager", {});
        b = b[K.ba] = b[K.ba] || {};
        yl(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        Gr(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function () {
            var e;
            if (0 < T.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++) e[f] = new hs(arguments[f])
            } else e = [].slice.call(arguments, 0);
            ls.push.apply(ls, e);
            var g = c.apply(a, e);
            if (300 < this.length) for (xg(4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof g || g;
            return us() && h
        };
        var d = a.slice(0);
        ls.push.apply(ls, d);
        if (xs()) {
            I(ws)
        }
    };
    var xs = function () {
        var a = !0;
        a = !1;
        return a
    };

    function As(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a), c = Za();
        return b < c + 3E5 && b > c - 9E5
    };var Bs = {Ah: "G-W280663TPN"}, Cs = function () {
        var a = [];
        return a
    };
    var Ds = {};
    Ds.Nd = new String("undefined");
    var Gs = function (a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": ic(a, "className"),
            "gtm.elementId": a["for"] || dc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || ic(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || ic(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }, Hs = function (a) {
        T.hasOwnProperty("autoEventsSettings") || (T.autoEventsSettings = {});
        var b = T.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, Is = function (a, b, c) {
        Hs(a)[b] = c
    }, Js = function (a, b, c, d) {
        var e = Hs(a), f = $a(e, b, d);
        e[b] = c(f)
    }, Ks = function (a, b, c) {
        var d = Hs(a);
        return $a(d, b, c)
    }, Ls = function (a) {
        return "string" === typeof a ? a : String(Rh())
    };
    var Rs = !!m.MutationObserver, Ss = void 0, Ts = function (a) {
        if (!Ss) {
            var b = function () {
                var c = H.body;
                if (c) if (Rs) (new MutationObserver(function () {
                    for (var e = 0; e < Ss.length; e++) I(Ss[e])
                })).observe(c, {childList: !0, subtree: !0}); else {
                    var d = !1;
                    ac(c, "DOMNodeInserted", function () {
                        d || (d = !0, I(function () {
                            d = !1;
                            for (var e = 0; e < Ss.length; e++) I(Ss[e])
                        }))
                    })
                }
            };
            Ss = [];
            H.body ? b() : I(b)
        }
        Ss.push(a)
    };
    var dt = function (a, b, c) {
        function d() {
            var g = a();
            f += e ? (Za() - e) * g.playbackRate / 1E3 : 0;
            e = Za()
        }

        var e = 0, f = 0;
        return {
            createEvent: function (g, h, k) {
                var n = a(), p = n.be,
                    q = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(n.be * h) : Math.round(n.tf),
                    t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = H.hidden ? !1 : .5 <= ii(c);
                d();
                var r = void 0;
                void 0 !== b && (r = [b]);
                var v = Gs(c, "gtm.video", r);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = u;
                return v
            }, Of: function () {
                e = Za()
            }, hb: function () {
                d()
            }
        }
    };
    var et = m.clearTimeout, ft = m.setTimeout, W = function (a, b, c, d) {
            if (pn()) {
                b && I(b)
            } else return Xb(a, b, c, d)
        }, gt = function () {
            return new Date
        }, ht = function () {
            return m.location.href
        }, it = function (a) {
            return ti(vi(a), "fragment")
        }, jt = function (a) {
            return ui(vi(a))
        }, kt = function (a, b) {
            return Xh(a, b || 2)
        }, lt = function (a, b, c) {
            return b ? qs(a, b, c) : ps(a)
        }, mt = function (a, b) {
            m[a] = b
        }, X = function (a, b, c) {
            b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
            return m[a]
        },
        nt = function (a, b, c) {
            return Zi(a, b, void 0 === c ? !0 : !!c)
        }, ot = function (a, b, c) {
            return 0 === hj(a, b, c)
        }, pt = function (a, b) {
            if (pn()) {
                b && I(b)
            } else Zb(a, b)
        }, qt = function (a) {
            return !!Ks(a, "init", !1)
        }, rt = function (a) {
            Is(a, "init", !0)
        }, st = function (a, b, c) {
            Cm && (Dc(a) || Qm(c, b, a))
        };
    var Qt = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Rt(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }

    var St = new Qa;

    function Tt(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d, f = St.get(e);
            f || (f = new RegExp(b, d), St.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Ut(a, b) {
        function c(g) {
            var h = vi(g), k = ti(h, "protocol"), n = ti(h, "host", !0), p = ti(h, "port"),
                q = ti(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
            return [k, n, p, q]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    }

    function Vt(a) {
        return Wt(a) ? 1 : 0
    }

    function Wt(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = zc(a, {});
                zc({arg1: c[d], any_of: void 0}, e);
                if (Vt(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a:{
                    if (b) try {
                        for (var g = 0; g < Qt.length; g++) {
                            var h = Qt[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (k) {
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Rt(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Tt(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Ut(b, c)
        }
        return !1
    };

    function Xt(a, b) {
        var c = this;
    };var Yt = !0;

    function Zt(a, b, c) {
        var d;
        return d
    }

    function $t(a, b, c) {
    };

    function au(a, b, c, d) {
    };

    function bu(a) {
    };

    function fu(a) {
    };var gu = {}, hu = [], iu = {}, ju = 0, ku = 0;

    function ru(a, b) {
    }

    function yu(a, b) {
    }
    ;

    function Du(a) {
    };var Eu = {}, Fu = [];
    var Mu = function (a, b) {
    };

    function Tu(a, b) {
    };var Uu = /^\s*$/, Vu, Wu = !1;

    function gv(a, b) {
    }

    function hv(a, b, c) {
    };var iv = ["www.youtube.com", "www.youtube-nocookie.com"], jv, kv = !1, lv = 0;

    function vv(a, b) {
    }

    function wv(a, b) {
        return !0
    };

    function xv(a, b, c) {
        M(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = Fq(a), f = 0; f < d.length - 1; f++) {
            if (void 0 === e[d[f]]) e[d[f]] = {}; else if (!yc(e[d[f]])) throw Error("apendRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        if (void 0 === e[d[f]]) e[d[f]] = []; else if (!Na(e[d[f]])) throw Error("appendRemoteConfigParameter failed, destination is not an array: " +
            d[f]);
        e[d[f]].push(Bc(c, this.g));
    };

    function yv(a, b) {
        var c;
        return c
    };

    function zv(a) {
    };

    function Av(a) {
    };

    function Bv(a) {
        M(G(this), ["listener:!Fn"], arguments);
        N(this, "process_dom_events", "window", "load");
        Gr(Bc(a))
    };

    function Cv(a) {
        var b;
        return b
    };

    function Dv(a, b) {
        var c;
        var d = !1;
        var e = Ac(c, this.g, d);
        void 0 === e && void 0 !== c && xg(45);
        return e
    };

    function Ev(a) {
        var b;
        return b
    };var Fv = function (a, b, c) {
        this.La = a;
        this.eventName = b;
        this.ca = c;
        this.K = {};
        this.metadata = {};
        this.Bf = !1
    }, Gv = function (a, b, c) {
        var d = a.ca.getWithConfig(b);
        void 0 !== d ? a.K[b] = d : void 0 !== c && (a.K[b] = c)
    };

    function Hv(a) {
        return {
            getDestinationId: function () {
                return a.La
            }, getEventName: function () {
                return a.eventName
            }, setEventName: function (b) {
                return void (a.eventName = b)
            }, getHitData: function (b) {
                return a.K[b]
            }, setHitData: function (b, c) {
                return void (a.K[b] = c)
            }, setHitDataIfNotDefined: function (b, c) {
                void 0 === a.K[b] && (a.K[b] = c)
            }, copyToHitData: function (b, c) {
                Gv(a, b, c)
            }, getMetadata: function (b) {
                return a.metadata[b]
            }, setMetadata: function (b, c) {
                return void (a.metadata[b] = c)
            }, abort: function () {
                return void (a.Bf = !0)
            }, getProcessedEvent: function () {
                return a
            }
        }
    }
    ;

    function Iv(a, b) {
        var c;
        return c
    };

    function Jv(a, b) {
        var c = null, d = !1;
        return Ac(c, this.g, d)
    };

    function Kv(a) {
        var b;
        var g = !1;
        return Ac(b, this.g, g)
    };var Lv = {}, Mv = [], Nv = {}, Ov = 0, Pv = 0;
    var Vv = !0;
    var Wv = function (a, b) {
        return b
    };
    var aw = !0;

    function bw(a, b) {
        return b
    }

    var gw = !0;

    function hw() {
    }

    var iw = {}, jw = [];
    var qw = !0;

    function rw(a, b) {
        return b
    }

    var vw = !0;

    function ww(a, b) {
        return b
    }

    var xw, yw;
    var Hw = !0;
    var Iw = function (a, b) {
        return b
    };
    var Nb = da(["data-gtm-yt-inspected-"]), Jw = ["www.youtube.com", "www.youtube-nocookie.com"], Kw, Lw = !1;
    var Vw = !0;

    function Ww(a, b) {
        return b
    }

    function Xw(a) {
        return !1
    }

    var Yw;

    function Zw(a) {
        var b = !1;
        return b
    };
    var ax = function (a, b, c) {
        if (c) switch (c.type) {
            case "event_name":
                return a;
            case "const":
                return c.const_value;
            case "event_param":
                var d = c.event_param.param_name;
                return b[d]
        }
    }, dx = function (a, b, c, d) {
        if (c && !bx(a, b, c)) return !1;
        if (!d || 0 === d.length) return !0;
        for (var e = 0; e < d.length; e++) if (cx(a, b, d[e].predicates || [])) return !0;
        return !1
    }, cx = function (a, b, c) {
        for (var d = 0; d < c.length; d++) if (!bx(a,
            b, c[d])) return !1;
        return !0
    }, bx = function (a, b, c) {
        var d = c.values || [], e = ax(a, b, d[0]), f = ax(a, b, d[1]), g = c.type;
        if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) Ia(e) && (e = e.toLowerCase()), Ia(f) && (f = f.toLowerCase());
        var h = !1;
        switch (g) {
            case "eq":
            case "eqi":
                h = String(e) === String(f);
                break;
            case "sw":
            case "swi":
                h = 0 === String(e).indexOf(String(f));
                break;
            case "ew":
            case "ewi":
                h = Rt(e, f);
                break;
            case "cn":
            case "cni":
                h = 0 <= String(e).indexOf(String(f));
                break;
            case "lt":
                h = Number(e) < Number(f);
                break;
            case "le":
                h = Number(e) <= Number(f);
                break;
            case "gt":
                h = Number(e) > Number(f);
                break;
            case "ge":
                h = Number(e) >= Number(f);
                break;
            case "re":
            case "rei":
                h = Tt(e, f, "rei" === g)
        }
        return !!c.negate !== h
    };

    function ex(a, b) {
        var c = !1;
        return c
    };var fx = function (a) {
        var b;
        return b
    };

    function gx(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    };

    function hx() {
        return sg.hh
    };

    function ix() {
        var a = [];
        return Ac(a)
    };

    function jx(a) {
        var b = null;
        return b
    };

    function kx(a, b) {
        var c;
        return c
    };

    function lx(a, b) {
        var c;
        return c
    };

    function mx(a, b) {
        var c;
        return c
    };

    function nx(a) {
        var b = "";
        return b
    };

    function ox() {
        return sg.Fh
    };

    function px(a, b) {
        var c;
        return c
    };

    function qx(a) {
        var b = "";
        return b
    };

    function rx() {
        N(this, "get_user_agent");
        return m.navigator.userAgent
    };

    function sx(a) {
        return a ? {
            entityType: a.kh.type,
            indexInOriginContainer: a.kh.index,
            nameInOriginContainer: void 0,
            originContainerId: K.I
        } : {}
    };

    function ux(a, b) {
    }
    ;

    function vx(a, b) {
    };var wx = {};

    function xx(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [[c], [d]], Xb(a, function () {
            for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
            g.push = function (k) {
                I(k);
                return 0
            }
        }, function () {
            for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
            e[f] = null
        }, b)) : Xb(a, c, d, b)
    }

    function yx(a, b, c, d) {
    }

    var zx = Object.freeze({dl: 1, id: 1}), Ax = {};

    function Bx(a, b, c, d) {
    };

    function Cx(a) {
        var b = !0;
        return b
    };var Dx = function () {
        return !1
    }, Ex = {
        getItem: function (a) {
            var b = null;
            return b
        }, setItem: function (a,
                              b) {
            return !1
        }, removeItem: function (a) {
        }
    };
    var Fx = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Gx(a) {
        var b;
        return b
    };

    function Hx() {
    };

    function Ix(a, b) {
        var c;
        return c
    };

    function Jx(a) {
        var b = void 0;
        return b
    };

    function Kx(a) {
    };

    function Lx(a, b) {
        var c = !1;
        return c
    };

    function Mx() {
        var a = "";
        return a
    };

    function Nx() {
        var a = "";
        return a
    };

    function Qx(a, b) {
        var c = this;
    };var Rx = Object.freeze(["config", "event", "get", "set"]);

    function Sx(a, b, c) {
    };var Tx = !0;

    function Ux(a, b) {
        var c = !1;
        return c
    }

    function Vx() {
    };

    function Wx(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    }
    ;

    function Xx(a, b, c) {
    };

    function Yx(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };var Zx = !1;

    function $x(a) {
        M(G(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Jb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== S.we && N(this, "access_consent", e, "write")
        }
        var f = this.g.g, g = sx(f);
        if (Zx) {
            var h = er("consent", "default", Bc(a)), k = f.eventId;
            js.push(new hs(h), k, g)
        } else Vg(Bc(a))
    }

    function ay(a, b, c) {
        return !1
    };

    function by(a, b, c) {
        M(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = fi(a) || {};
        d[b] = Bc(c, this.g);
        var e = a;
        di || ei();
        ci[e] = d;
    };

    function cy(a, b, c) {
    }
    ;var dy = function (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function ey(a, b, c, d) {
        var e = this;
    };

    function fy(a, b, c) {
    }
    ;var gy = {}, hy = {};
    gy.getItem = function (a) {
        var b = null;
        return b
    };
    gy.setItem = function (a, b) {
    };
    gy.removeItem = function (a) {
    };
    gy.clear = function () {
    };
    var iy = function (a) {
        var b;
        return b
    };
    var jy = !1;

    function ky(a) {
        M(G(this), ["consentSettings:!DustMap"], arguments);
        var b = Bc(a), c;
        for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
        var d = this.g.g, e = sx(d);
        if (jy) {
            var f = d.eventId;
            js.push(new hs(er("consent", "update", b)), f, e)
        } else Xg(b, d.eventId)
    }

    var ly = function () {
        var a = new jg;
        pn() ? (a.add("injectHiddenIframe", Ga), a.add("injectScript", Ga)) : (a.add("injectHiddenIframe", vx), a.add("injectScript", yx));
        var b = Xx;
        a.add("Math", Of());
        a.add("Object", hg);
        a.add("TestHelper", mg());
        a.add("addConsentListener", Xt);
        a.add("addEventCallback", bu);
        a.add("aliasInWindow", wv);
        a.add("assertApi",
            Kf);
        a.add("assertThat", Lf);
        a.add("callInWindow", yv);
        a.add("callLater", zv);
        a.add("copyFromDataLayer", Dv);
        a.add("copyFromWindow", Ev);
        a.add("createArgumentsQueue", Jv);
        a.add("createQueue", Kv);
        a.add("decodeUri", Pf);
        a.add("decodeUriComponent", Qf);
        a.add("encodeUri", Rf);
        a.add("encodeUriComponent", Sf);
        a.add("fail", Tf);
        a.add("fromBase64", fx, !("atob" in m));
        a.add("generateRandom", Uf);
        a.add("getContainerVersion", Vf);
        a.add("getCookieValues", gx);
        a.add("getQueryParameters", lx);
        a.add("getReferrerQueryParameters",
            mx);
        a.add("getReferrerUrl", nx);
        a.add("getTimestamp", Yf);
        a.add("getTimestampMillis", Yf);
        a.add("getType", Zf);
        a.add("getUrl", qx);
        a.add("isConsentGranted", Cx);
        a.add("localStorage", Ex, !Dx());
        a.add("logToConsole", Hx);
        a.add("makeInteger", ag);
        a.add("makeNumber", bg);
        a.add("makeString", cg);
        a.add("makeTableMap", dg);
        a.add("mock", gg);
        a.add("parseUrl", Jx);
        a.add("queryPermission", Lx);
        a.add("readCharacterSet", Mx);
        a.add("readTitle", Nx);
        a.add("sendPixel", b);
        a.add("setCookie", Yx);
        a.add("setDefaultConsentState", $x);
        a.add("setInWindow", ay);
        a.add("sha256", ey);
        a.add("templateStorage", gy);
        a.add("toBase64", iy, !("btoa" in m));
        a.add("updateConsentState", ky);
        lg(a, "callOnWindowLoad", Bv);
        lg(a, "internal.addFormInteractionListener", ru);
        lg(a, "internal.addFormSubmitListener", yu);
        lg(a, "internal.addGaSendListener", Du);
        lg(a, "internal.addHistoryChangeListener", Mu);
        lg(a, "internal.evaluateFilteringRules", Xw);
        lg(a, "internal.evaluateMatchingRules", Zw);
        lg(a, "internal.getFlags", Xf);
        lg(a, "internal.locateUserData", Gx);
        lg(a, "internal.registerGtagCommandListener",
            Sx);
        lg(a, "internal.sendGtagEvent", Wx);
        a.add("JSON", $f(function (c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        lg(a, "internal.appendRemoteConfigParameter", xv), lg(a, "internal.getRemoteConfigParameter", px), lg(a, "internal.setRemoteConfigParameter", cy), lg(a, "internal.sortRemoteConfigParameters", fy), lg(a, "internal.getProductSettingsParameter", kx), lg(a, "internal.setProductSettingsParameter",
            by);
        pn() ? lg(a, "internal.injectScript", Ga) : lg(a, "internal.injectScript", Bx);

        return function (c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this); else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1, g = this.g.g;
                    if (g) {
                        var h = g.ed();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f
                }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = k
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var my = function () {
        return !1
    }, ny = function () {
        var a = {};
        return function (b, c, d) {
        }
    };
    var oy;

    function py() {
        var a = oy;
        return function (b, c, d) {
            var e = d && d.event;
            qy(c);
            var f = new nb;
            Sa(c, function (q, t) {
                var u = Ac(t);
                void 0 === u && void 0 !== t && xg(44);
                f.set(q, u)
            });
            a.g.g.F = Pe();
            var g = {
                dj: af(b), eventId: void 0 !== e ? e.id : void 0, Vd: void 0 !== e ? function (q) {
                    return e.Lb.Vd(q)
                } : void 0, ed: function () {
                    return b
                }, log: function () {
                }, kh: {index: d && d.index, type: d && d.type}
            };
            if (my()) {
                var h =
                    ny(), k = void 0, n = void 0;
                g.Na = {
                    Rf: [], Uc: {}, Ta: function (q, t, u) {
                        1 === t && (k = q);
                        7 === t && (n = u);
                        h(q, t, u)
                    }, Hf: eg()
                };
                g.log = function (q, t) {
                    if (k) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {level: q, source: n, message: u})
                    }
                }
            }
            var p = Yd(a, g, [b, f]);
            a.g.g.F = void 0;
            p instanceof sa && "return" === p.g && (p = p.o);
            return Bc(p)
        }
    }

    function qy(a) {
        var b = a.gtmOnSuccess, c = a.gtmOnFailure;
        Ha(b) && (a.gtmOnSuccess = function () {
            I(b)
        });
        Ha(c) && (a.gtmOnFailure = function () {
            I(c)
        })
    }

    function ry() {
        oy.g.g.P = function (a, b, c) {
            T.SANDBOXED_JS_SEMAPHORE = T.SANDBOXED_JS_SEMAPHORE || 0;
            T.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                T.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function sy(a) {
        void 0 !== a && Sa(a, function (b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Qh[e] = Qh[e] || [];
                Qh[e].push(b)
            }
        })
    };var ty = encodeURI, Y = encodeURIComponent, uy = $b;
    var vy = function (a, b) {
        if (!a) return !1;
        var c = ti(vi(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var wy = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var Gz = !1;
    var Hz = {};
    Hz[S.hc] = "";
    Hz[S.Ha] = "";
    Hz[S.Pa] = "";
    Hz[S.oa] = "auto";
    Hz[S.nb] = "/";
    Hz[S.xa] = 63072E3;
    Hz[S.Lc] = 30;
    Hz[S.Kd] = 1E4;
    Hz[S.ra] = !0;
    var Iz = function (a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        Fv.call(this, a, b, d);
        this.o = c;
        this.J = d.eventModel;
        this.Ig = d.containerConfig;
        Gz || (this.F = d.getWithConfig(S.Ga) ? 1 : 8, this.Qg = this.nc = !1);
        Gz || (this.cf = d.getWithConfig(S.ob) ? 1 : 8);
        this.C =
            e;
        this.P = this.bf = this.Xg = this.s = this.Tg = !1;
        this.Sb = 0;
        this.hf = this.Bb = !1;
        this.jf = void 0;
        this.Za = 0;
        this.Wg = this.g = this.ef = this.Mg = void 0;
        this.Ug = !1;
        this.Kg = this.ff = void 0;
        this.Yi = f
    };
    oa(Iz, Fv);
    l = Iz.prototype;
    l.Ra = function (a, b) {
        void 0 === this.B(a) && (this.J[a] = b)
    };
    l.Jh = function (a, b) {
        if (Gz) {
            var c = this.metadata.client_id_source;
            if (void 0 === c || b <= c) this.K[S.Ga] = a, this.J[S.Ga] = void 0, this.metadata.client_id_source = b
        } else b <= this.F && (this.J[S.Ga] = a, this.F = b)
    };
    l.vk = function (a, b) {
        if (Gz) {
            var c = this.metadata.enhanced_client_id_source;
            if (void 0 === c || b <= c) this.K[S.ob] = a, this.metadata.enhanced_client_id_source = b
        } else b <= this.cf && (this.J[S.ob] = a, this.cf = b)
    };
    l.B = function (a) {
        return void 0 !== this.J[a] ? this.J[a] : void 0 !== this.ca.getWithConfig(a) ? this.ca.getWithConfig(a) : void 0 !== this.C[a] ? this.C[a] : Hz[a]
    };
    l.getRemoteConfig = function (a) {
        return void 0 !== this.ca.remoteConfig[a] ? this.ca.remoteConfig[a] : this.C[a]
    };
    l.Pb = function (a) {
        var b = this.Qb(S.Fd, this.C[S.Fd]);
        if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName]
    };
    l.Qb = function (a,
                     b) {
        var c = fi(this.La);
        return c && c.hasOwnProperty(a) ? c[a] : b
    };
    l.ph = function () {
        var a = this.B(S.za);
        if ("object" === typeof a) return a
    };
    l.rh = function () {
        return !!this.ph()
    };
    l.abort = function () {
        throw"ABORT";
    };
    l.Ua = function () {
        return !(!0 !== this.B(S.Hc) && "true" !== this.B(S.Hc) || !this.B(S.ya))
    };
    l.Vj = function () {
        return (Gz ? this.metadata.is_session_start : this.s) || !!this.B(S.og)
    };
    l.Df = function () {
        var a = !1;
        return a
    };
    l.jd = function () {
        return this.Qb(S.Re, !1)
    };
    l.Tc = function () {
        return !1 !== this.B(S.la)
    };
    l.nf = function () {
        return !1 !== this.B(S.Z)
    };
    var Jz = !1, Kz = function (a) {
        var b = !1;
        b = a.eventName === S.Cc && Lg() && a.Ua();
        var c = a.metadata.is_conversion || a.Bb, d = a.metadata.is_session_start || a.s,
            e = a.metadata.create_dc_join || a.bf, f = a.metadata.create_google_join || a.P;
        return !(!Qb.sendBeacon || c || a.g && a.rh() || d || e || f || b || Jz)
    };
    var Lz = !1;
    var Mz = function (a) {
        ug("GA4_EVENT", a)
    };
    var Oz = function (a) {
        return !a || Nz.test(a) || S.Ji.hasOwnProperty(a)
    }, Pz = function (a, b, c) {
        for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
            var f = d[e];
            if (f.edit_param) {
                var g = f.edit_param.param_name, h = ax(a, b, f.edit_param.param_value), k;
                if (h) {
                    var n = Number(h);
                    k = isNaN(n) ? h : n
                } else k = h;
                b[g] = k
            } else f.delete_param && delete b[f.delete_param.param_name]
        }
    }, Nz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var Qz = function (a) {
        var b = 0, c = 0;
        return {
            start: function () {
                b = Za()
            }, stop: function () {
                c = this.get()
            }, get: function () {
                var d = 0;
                a.Ef() && (d = Za() - b);
                return d + c
            }
        }
    }, Rz = !1;
    var Sz = function () {
        this.g = void 0;
        this.o = 0;
        this.isActive = this.isVisible = this.s = !1;
        this.F = this.C = void 0
    };
    l = Sz.prototype;
    l.Mi = function (a) {
        var b = this;
        if (!this.g) {
            this.s = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function (d, e, f) {
                ac(d,
                    e, function (g) {
                        b.g.stop();
                        f(g);
                        b.Ef() && b.g.start()
                    })
            };
            c(m, "focus", function () {
                b.s = !0
            });
            c(m, "blur", function () {
                b.s = !1
            });
            c(m, "pageshow", function (d) {
                b.isActive = !0;
                d.persisted && xg(56);
                b.F && b.F()
            });
            c(m, "pagehide", function () {
                b.isActive = !1;
                b.C && b.C()
            });
            c(H, "visibilitychange", function () {
                b.isVisible = !H.hidden
            });
            a.Ua() && -1 === (Qb.userAgent || "").indexOf("Firefox") && -1 === (Qb.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function () {
                Jz =
                    !0
            });
            this.Nf();
            this.o = 0
        }
    };
    l.Nf = function () {
        this.o += this.he();
        this.g = Qz(this);
        this.Ef() && this.g.start()
    };
    l.Bk = function (a) {
        var b = this.he();
        a.Za = b
    };
    l.Hj = function (a) {
        Rz ? a.K[S.Ed] = void 0 : a.Za = 0;
        this.Nf();
        this.o = 0
    };
    l.Ef = function () {
        return this.s && this.isVisible && this.isActive
    };
    l.Cj = function () {
        return this.o +
            this.he()
    };
    l.he = function () {
        return this.g && this.g.get() || 0
    };
    l.kk = function (a) {
        this.C = a
    };
    l.Gh = function (a) {
        this.F = a
    };

    function Tz() {
        return m.gaGlobal = m.gaGlobal || {}
    }

    var Uz = function () {
        var a = Tz();
        a.hid = a.hid || Pa();
        return a.hid
    }, Vz = function (a, b) {
        var c = Tz();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var Zz = function (a, b) {
        var c;
        var d = Wz(b), e = String(b.B(S.oa)), f = String(b.B(S.nb)), g = Number(b.B(S.xa)), h = b.B(S.ic),
            k = {jb: S.O, domain: e, path: f, expires: g ? new Date(Za() + 1E3 * g) : void 0, flags: "" + b.B(S.Pa)};
        if (!1 === h && Xz(b) === a) c = !0; else {
            var n = pj(a, Yz[0], e, f);
            c = 1 !== hj(d, n, k)
        }
        return c
    }, Xz = function (a) {
        var b = Wz(a), c = "" + a.B(S.oa), d = "" + a.B(S.nb), e = oj(b, c, d, Yz, S.O);
        if (!e) {
            var f = String(a.B(S.hc));
            f && f != b && (e = oj(f, c, d, Yz, S.O))
        }
        return e
    }, Wz = function (a) {
        return String(a.B(S.Ha)) + "_ga"
    }, $z = !1;
    var Yz = ["GA1"];
    var cA = function (a, b) {
            var c = aA(b), d = String(b.B(S.oa)), e = String(b.B(S.nb)), f = Number(b.B(S.xa)), g = pj(a, bA[0], d, e),
                h = {jb: S.O, domain: d, path: e, expires: f ? new Date(Za() + 1E3 * f) : void 0, flags: String(b.B(S.Pa))};
            return 1 !== hj(c, g, h)
        }, dA = function (a) {
            var b = aA(a), c = String(a.B(S.oa)), d = String(a.B(S.nb));
            return oj(b, c, d, bA, S.O)
        }, eA = function (a, b, c, d, e, f, g) {
            if (a && b) {
                var h = [a, b, Ua(c), d, e];
                return h.join(".")
            }
        },
        fA = !1;
    var bA = ["GS1"], aA = function (a) {
        return String(a.B(S.Ha)) + "_ga_" + a.La.substr(2)
    }, gA = function (a) {
        return fA ? eA(a.K[S.Gb], a.K[S.Nc], a.K[S.Mc], a.o, a.metadata.join_timer_sec || 0, !!a.metadata[S.Gc], a.K[S.ob]) : eA(a.J[S.Gb], a.J[S.Nc], a.J[S.Mc], a.o, a.Sb, !!a.J[S.Gc], a.J[S.ob])
    };
    var hA = function (a) {
        var b = a.B(S.qa), c = a.getRemoteConfig(S.qa);
        if (c === b) return c;
        var d = zc(b);
        c && c[S.R] && (d[S.R] = (d[S.R] || []).concat(c[S.R]));
        return d
    }, iA = function (a, b) {
        var c = Xj(!0);
        return "1" !== c._up ? {} : {clientId: c[a], Ih: c[b]}
    }, jA = function (a, b, c) {
        var d = Xj(!0), e = d[b];
        e && (a.Jh(e, 2), Zz(e, a));
        var f = d[c];
        f && cA(f, a);
        return !(!e || !f)
    }, kA = !1, lA = function (a) {
        var b = hA(a) || {}, c = Wz(a), d = aA(a);
        gk(b[S.kc], !!b[S.R]) && jA(a, c, d) && (kA = !0);
        b[S.R] && dk(function () {
            var e = {}, f = Xz(a);
            f && (e[c] = f);
            var g = dA(a);
            g && (e[d] = g);
            var h =
                Zi("FPLC", void 0, void 0, S.O);
            h.length && (e._fplc = h[0]);
            return e
        }, b[S.R], b[S.Ic], !!b[S.mc])
    }, nA = function (a) {
        if (!a.B(S.tb)) return {};
        var b = Wz(a), c = aA(a);
        ek(function () {
            var d;
            if (Yg("analytics_storage")) d = {}; else {
                var e = {};
                d = (e._up = "1", e[b] = a.J[S.Ga], e[c] = gA(a), e)
            }
            return d
        }, 1);
        return !Yg("analytics_storage") && mA() ? iA(b, c) : {}
    }, mA = function () {
        var a = si(m.location, "host"), b = si(vi(H.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    }, oA = function (a) {
        if (!a) return a;
        var b = String(a);
        b = Wj(b);
        return b = Wj(b, "_ga")
    };
    var pA = function () {
        var a = Za(), b = a + 864E5, c = 20, d = 5E3;
        return function () {
            var e = Za();
            e >= b && (b = e + 864E5, d = 5E3);
            if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c) return !1;
            d--;
            c--;
            return !0
        }
    };
    var rA = function (a) {
        var b;
        b = qA ? a.K[S.Qa] : a.B(S.Qa);
        return ti(vi(b), "host", !0)
    }, qA = !1;
    var sA = !1;
    sA = !0;
    var tA = "" + Pa(), uA = !1, vA = void 0;
    var wA = function () {
        if (Ha(m.__uspapi)) {
            var a = "";
            try {
                m.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {
            }
            return a
        }
    };
    var xA = function (a, b) {
            if (b.Ua()) {
                var c = wA();
                c && (a.us_privacy = c);
                var d = Sn();
                d && (a.gdpr = d);
                var e = Rn();
                e && (a.gdpr_consent = e)
            }
        }, yA = function (a, b) {
            if (Lg() && (a.gcs = Zg(), b.ff && (a.gcu = "1"), b.Ua())) {
                Mg() && (a.gcd = $g());
                var c = b.B(S.X);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.ff && (a.gcut = S.xe[b.Kg || ""]);
            }
        }, zA = function (a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b) for (var d in b) zA(a + "." + d, b[d], c); else c[a] = b;
            return c
        },
        CA = function (a) {
            var b = Xm(a.B(S.ya), "/g/collect");
            if (b) return b;
            var c = a.Qb(S.qb, a.B(S.qb));
            return c && !a.jd() && !1 !== a.B(S.Dc) && Ep() && Yg(S.D) && Yg(S.O) ? AA() : BA()
        }, DA = !1;
    var EA = !1;
    var FA = !1;
    var GA = "", HA = !1;
    var IA = {};
    IA[S.Gi] = "tid";
    IA[S.Ga] = "cid";
    IA[S.rb] = "ul";
    IA[S.Qe] = "_fid";
    IA[S.Dg] = "tt";
    IA[S.Te] = "ir";
    IA[S.Ye] = "sr";
    var JA = {};
    JA[S.Gb] = "sid";
    JA[S.Nc] = "sct";
    JA[S.Mc] = "seg";
    JA[S.eb] = "dl";
    JA[S.Qa] = "dr";
    JA[S.Jc] = "dt";
    JA[S.ka] = "cu";
    JA[S.Ia] = "uid";
    var KA = {};
    var LA = {};
    LA[S.cg] = "cc";
    LA[S.dg] = "ci";
    LA[S.eg] = "cm";
    LA[S.fg] = "cn";
    LA[S.gg] = "cs";
    LA[S.hg] = "ck";
    var BA = function () {
            var a = "www";
            HA && GA && (a = GA);
            return "https://" + a + ".google-analytics.com/g/collect"
        }, AA = function () {
            var a;
            HA && GA && (a = GA);
            return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
        },
        MA = function (a, b, c) {
            function d(C, E) {
                if (void 0 !== E && !S.Hi.hasOwnProperty(C)) {
                    null === E && (E = "");
                    var R = E;
                    !0 === E && (R = "1");
                    !1 === E && (R = "0");
                    var L;
                    if ("_" === C.charAt(0)) e[C] = gf(R, 300); else if (IA[C]) L = IA[C], e[L] = gf(R, 300); else if (JA[C]) L = JA[C], g[L] = gf(R, 300); else if (KA[C]) L = KA[C], f[L] = gf(R, 300); else if (!v(C, E)) {
                        var J;
                        LA[C] ? J = !0 : C !== S.Ec ? J = !1 : ("object" !== typeof E && r(C, E), J = !0);
                        if (J) return;
                        r(C, E)
                    }
                }
            }

            var e = {}, f = {}, g = {};
            e.v = "2";
            e.tid = a.La;
            e.gtm = tn();
            e._p = Uz();
            a.jf && (e.sr = a.jf);
            a.ef && (e._z = a.ef);
            c && (e.em = c);
            if (DA ? a.metadata.create_google_join : a.P) e._gaz = 1;
            yA(e, a);
            xA(e,
                a);
            a.Wg && (e.gtm_up = "1");
            var h = void 0;
            EA ? h = a.K[S.Jk] : h = hb(mn(a.ca, S.aa, 1), ".");
            h && (e.gdid = h);
            f.en = gf(a.eventName, 40);
            var k = DA ? a.metadata.is_first_visit_conversion : a.Tg;
            DA ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1) : a.nc && (f._fv = k ? 2 : 1);
            DA ? a.metadata.is_new_to_site && (f._nsi = 1) : a.Qg && (f._nsi = 1);
            var n = DA ? a.metadata.is_session_start_conversion :
                a.Xg;
            DA ? a.metadata.is_session_start && (f._ss = n ? 2 : 1) : a.s && (f._ss = n ? 2 : 1);
            DA ? a.metadata.is_conversion && (f._c = 1) : a.Bb && (f._c = 1);
            0 < a.Za && !DA && (f._et = a.Za);
            if (a.metadata.is_ecommerce || a.hf) {
                var p = a.K[S.da] || a.B(S.da);
                if (Na(p)) for (var q = 0; q < p.length && 200 > q; q++) f["pr" + (q + 1)] = mf(p[q])
            }
            var t = FA ? a.metadata.event_usage : a.Mg;
            t && (f._eu = t);
            var u = void 0;
            EA ? u = a.K[S.Ik] : u = hb(mn(a.ca, S.aa, 2), ".");
            u && (f.edid = u);
            for (var r = function (C, E) {
                C = gf(C, 40);
                var F = "ep." + C, R = "epn." + C;
                C = Ka(E) ? R : F;
                var L = Ka(E) ? F : R;
                f.hasOwnProperty(L) &&
                delete f[L];
                f[C] = gf(E, 100)
            }, v = function (C, E) {
                var F = C.split(".");
                if (C === S.za && "object" !== typeof E) return r(C, E), !0;
                if (F[0] === S.za) {
                    if ((1 < F.length || "object" === typeof E) && a.Ua()) {
                        var R = zA(C, E);
                        Sa(R, function (L, J) {
                            return void r(L, J)
                        })
                    }
                    return !0
                }
                return !1
            }, w = 0; w < S.Fg.length; ++w) {
                var y = S.Fg[w];
                d(y, a.B(y))
            }
            a.hf && d(S.ka, a.B(S.ka));
            Sa(a.Ig, d);
            Sa(a.J, d);
            Sa(a.K, d);
            var x = nn(a.ca), B = function (C, E) {
                if (void 0 !== E) {
                    null === E && (E = "");
                    var F = LA[C];
                    F && (g[F] = gf(E, 300))
                }
            };
            "object" === typeof x[S.Ec] ? Sa(x[S.Ec], function (C, E) {
                B((S.Ec + "_" + C).toLowerCase(), E)
            }) : Sa(x, B);
            var A;
            A = a.K[S.Ja];
            A = A || a.B(S.Ja) || {};
            !1 !== a.B(S.Z) && Fp() || (A._npa = "1");
            Sa(A, function (C, E) {
                if (void 0 !== E && (null === E && (E = ""), b[C] !== E)) {
                    if (C !== S.Ia || g.uid) {
                        var F = (Ka(E) ?
                            "upn." : "up.") + gf(C, 24);
                        f[F] = gf(E, 36)
                    } else g.uid = gf(E, 36);
                    b[C] = E
                }
            });
            var D = !1;
            return of.call(this, {Ba: e, Wb: g, J: f}, CA(a), a.Ua(), D) || this
        };
    oa(MA, of);
    var NA = function (a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
            return b[d] || c
        })
    }, OA = function (a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }, PA = function (a) {
        var b = {}, c = "", d = a.pathname.indexOf("/g/collect");
        0 <= d && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }, QA = function (a, b) {
        var c = new m.XMLHttpRequest;
        c.withCredentials = !0;
        var d = b ? "POST" : "GET", e = "", f = 0,
            g = vi(a), h = PA(g), k = OA(g);
        c.onprogress = function (n) {
            if (200 === c.status) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = NA(e, h), q = p.indexOf("\n\n"); -1 !== q;) {
                    var t;
                    a:{
                        var u = ea(p.substring(0, q).split("\n")), r = u.next().value, v = u.next().value;
                        if (r.startsWith("event: message") && v.startsWith("data: ")) try {
                            t = JSON.parse(v.substring(v.indexOf(":") + 1));
                            break a
                        } catch (R) {
                        }
                        t = void 0
                    }
                    if (t) {
                        var w = t.send_pixel || [];
                        if (Array.isArray(w)) for (var y = 0; y < w.length; y++) {
                            var x = w[y], B = un('',
                                0);
                            if (1 === B) {
                                var A = Math.floor(2 * Math.random()) + 1, D, C = x, E = A,
                                    F = 0 < C.indexOf("?") ? "&" : "?";
                                D = "" + C + F + "gtmexpsb=" + E;
                                2 === A ? hc(D) : $b(D)
                            } else 2 === B ? hc(x) : $b(x)
                        }
                    }
                    p = p.substring(q + 2);
                    q = p.indexOf("\n\n")
                }
                e = p
            }
        };
        c.open(d, k);
        c.send(b);
    };
    var UA = function (a, b, c, d) {
        var e = a + "?" + b;
        RA && (d = !(0 === e.indexOf(BA()) || 0 === e.indexOf(AA())));
        SA && d && !Jz ? QA(e, c) : TA(a, b, c)
    }, SA = !1;
    SA = !0;
    var RA = !1;
    var VA = function () {
        this.C = 1;
        this.F = {};
        this.g = new pf;
        this.o = -1
    };
    VA.prototype.s = function (a, b) {
        var c = this, d;
        try {
            d = new MA(a,
                this.F, b)
        } catch (n) {
            a.abort()
        }
        var e = Kz(a);
        e && this.g.C(d) || this.flush();
        if (e && this.g.add(d)) {
            if (0 > this.o) {
                var f = m, g = f.setTimeout, h;
                a.Ua() ? WA ? (WA = !1, h = XA) : h = YA : h = 5E3;
                this.o = g.call(f, function () {
                    return c.flush()
                }, h)
            }
        } else {
            var k = rf(d, this.C++);
            UA(d.o, k.Lf, k.body, d.C);
            ZA(d, {
                sk: a.metadata.create_dc_join || a.bf,
                tk: a.metadata.create_google_join || a.P,
                Fj: String(a.Qb(S.Id, a.B(S.Id))),
                Tc: a.Tc(),
                nf: a.nf(),
                jd: a.jd()
            })
        }
    };
    VA.prototype.add = function (a) {
        a.g && !Jz ? this.P(a) : this.s(a)
    };
    VA.prototype.flush = function () {
        if (this.g.events.length) {
            var a =
                sf(this.g, this.C++);
            UA(this.g.g, a.Lf, a.body, this.g.o);
            this.g = new pf;
            0 <= this.o && (m.clearTimeout(this.o), this.o = -1)
        }
    };
    VA.prototype.P = function (a) {
        var b = this, c = a.ph();
        c ? zh(c, function (d) {
            b.s(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.s(a)
    };
    var ZA = function (a, b) {
        function c(q) {
            n.push(q + "=" + encodeURIComponent("" + a.Ba[q]))
        }

        var d = b.sk, e = b.tk, f = b.Fj, g = b.Tc, h = b.nf, k = b.jd;
        if (d || e) {
            var n = [];
            c("tid");
            c("cid");
            c("gtm");
            n.push("aip=1");
            a.Wb.uid && n.push("uid=" + encodeURIComponent("" + a.Wb.uid));
            d && (TA("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")), Sg("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&")));
            if (e) {
                n.push("z=" + Pa());
                if (!k) {
                    var p = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    p && $b(p + n.join("&"))
                }
            }
        }
    }, TA = function (a, b, c) {
        var d = a + "?" + b;
        c ? Qb.sendBeacon && Qb.sendBeacon(d, c) : hc(d)
    }, XA = un('', 500), YA = un('', 5E3), WA = !0;
    var $A = window, aB = document, bB = function (a) {
        var b = $A._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === $A["ga-disable-" + a]) return !0;
        try {
            var c = $A.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = Ti("AMP_TOKEN", String(aB.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return aB.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var cB = {};
    var dB = function (a, b, c) {
        c || (c = function () {
        });
        var d = function (e) {
            void 0 !== e[b] && (e[b] = c(e[b]))
        };
        d(a.K);
        d(a.J);
        d(a.Ig);
        d(a.ca.globalConfig)
    }, eB = function () {
        var a = m.screen;
        return (a ? a.width : 0) + "x" + (a ? a.height : 0)
    }, fB = function (a) {
        var b = Zi("_opt_expid", void 0, void 0, S.O)[0];
        if (b) {
            var c = decodeURIComponent(b).split("$");
            if (3 === c.length) return c[2]
        }
        if (void 0 !== T.ga4_referrer_override) return T.ga4_referrer_override;
        var d = Xh("gtm.gtagReferrer." + a.La);
        return d ? "" + d : H.referrer
    }, gB = function () {
        var a = "", b = H.location;
        if (b) {
            var c = b.pathname || "";
            "/" != c.charAt(0) && (c = "/" + c);
            a = b.protocol + "//" + b.hostname + c + b.search
        }
        return a
    }, hB = function (a, b) {
        var c = S.D;
        Yg(c) || bh(function () {
            b.ff = !0;
            b.Kg = c;
            a.Yg(b)
        }, c)
    }, iB = {};
    cB.Ii = "";
    var jB = function (a, b) {
        this.Za = a;
        this.nc = b;
        this.P = new VA;
        this.g = void 0;
        this.C = new Sz;
        this.o = this.s = void 0;
        this.F = !1;
        this.Bb = void 0
    };
    l = jB.prototype;
    l.ek = function (a, b, c) {
        var d = this, e = !1;
        if (c.eventModel[S.Hb]) {
            e = !0;
            if ("_" === a.charAt(0)) return;
            a !== S.Fa &&
            a !== S.$a && Oz(a) && xg(58);
            kB(c)
        }
        var f = new Iz(this.Za, a, b, c, this.nc, e), g = [S.O], h = !1;
        h = f.Ua();
        (f.Qb(S.qb, f.B(S.qb)) || h) && g.push(S.D);
        ch(function () {
            d.fk(f)
        }, g)
    };
    l.fk = function (a) {
        this.o = a;
        try {
            bB(a.La) && (xg(28), a.abort());
            0 <= cB.Ii.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (xg(33), a.abort());
            var b = a.Pb();
            b && b.blacklisted && (xg(34), a.abort());
            var c = H.location.protocol;
            "http:" != c && "https:" != c && (xg(29),
                a.abort());
            Qb && "preview" == Qb.loadPurpose && (xg(30), a.abort());
            var d = T.grl;
            d || (d = pA(), T.grl = d);
            d() || (xg(35), a.abort());
            this.Ni(a);
            this.C.Bk(a);
            var g = this.Eh, h;
            a.B(S.tb) && !Yg(S.O) &&
            1 !== a.F && (a.Wg = !0);
            a.eventName === S.Fa ? (a.B(S.tb) && Ek(["aw", "dc"]), lA(a), h = nA(a)) : h = {};
            g.call(this, h);
            a.eventName == S.Fa && (a.Yi && 0 < on(a.ca).length && (xg(68), 1 < T.configCount && xg(69)), a.B(S.ra) || a.abort(), a.ca.eventModel[S.aa] && (a.ca.containerConfig[S.aa] =
                a.ca.eventModel[S.aa], a.ca.eventModel[S.aa] = void 0), a.eventName = S.Cc);
            var v = this.g, w = this.s, y = this.C, x = dA(a);
            x || (x = w);
            var B = Ua(a.B(S.Lc)), A;
            A = Ua(a.B(S.Kd));
            var D;
            a:{
                if (x) {
                    var C = x.split(".");
                    if (!(5 > C.length || 7 < C.length)) {
                        D = {
                            sessionId: C[0],
                            qe: Number(C[1]),
                            td: !!Number(C[2]),
                            Ff: Number(C[3]),
                            Sb: Number(C[4] || 0),
                            Tb: "1" === C[5],
                            de: "0" !== C[6] ? C[6] : void 0
                        };
                        break a
                    }
                }
                D = void 0
            }
            fA && (a.metadata.is_first_visit = !1, a.metadata.is_session_start = !1, a.metadata.join_timer_sec = 0);
            if (D && D.Sb) {
                var E = Math.max(0, D.Sb - Math.max(0, a.o - D.Ff));
                fA ? a.metadata.join_timer_sec = E : a.Sb = E
            }
            var F = !1;
            D || (fA ? a.metadata.is_first_visit = !0 : a.nc = !0, F = !0, D = {
                sessionId: String(a.o),
                qe: 1,
                td: !1,
                Ff: a.o,
                Tb: !1,
                de: void 0
            });
            a.o > D.Ff + 60 * B && (F = !0, D.sessionId = String(a.o), D.qe++,
                D.td = !1, D.de = void 0);
            if (F) fA ? a.metadata.is_session_start = !0 : a.s = !0, y.Hj(a); else if (y.Cj() > A || a.eventName == S.Cc) D.td = !0;
            if (fA) {
                Gv(a, S.Gb,
                    D.sessionId);
                Gv(a, S.Nc, D.qe);
                Gv(a, S.Mc, D.td ? 1 : 0);
            } else {
                a.Ra(S.Gb, D.sessionId);
                a.Ra(S.Nc, D.qe);
                a.Ra(S.Mc, D.td ? 1 : 0);
            }
            var O = a.B(S.Ga), P;
            $z ? (a.metadata.is_new_to_site = !1, P = O ? 1 : 8) : P = a.F;
            O || (O = Xz(a), P = 3);
            O || (O = v, P = 5);
            if (!O) {
                var Q = Yg(S.O), V = Tz();
                O = !V.from_cookie || Q ? V.vid :
                    void 0;
                P = 6
            }
            O ? O = "" + O : (O = lj(), P = 7, $z ? a.metadata.is_first_visit = a.metadata.is_new_to_site = !0 : a.nc = a.Qg = !0);
            a.Jh(O, P);
            a:{
                a.Ra(S.eb, gB());
                var ka = fB(a);
                ka && a.Ra(S.Qa, ka);
                a.Ra(S.Jc, H.title);
                a.Ra(S.rb, (Qb.language || "").toLowerCase());
                a.jf = eB()
            }
            iB[1] && (a.metadata.create_dc_join =
                !1, a.metadata.create_google_join = !1);
            if (!1 !== a.B(S.Dc) && Ep() && Yg(S.D)) {
                var U = a.Qb(S.qb, a.B(S.qb));
                a.Vj() && (iB[1] ? a.metadata.create_dc_join = !!U : a.bf = !!U);
                var Da;
                iB[1] ? Da = a.metadata.join_timer_sec : Da = a.Sb;
                U && 0 === (Da || 0) && (iB[1] ? (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0) : (a.Sb = 60, a.P = !0))
            }
            lB(a);
            var Ja = S.Gg.hasOwnProperty(a.eventName);
            iB[2] ? Ja && (a.metadata.is_ecommerce =
                !0, Gv(a, S.da), Gv(a, S.ka)) : a.hf = Ja;
            for (var pa = a.B(S.Ue) || [], ca = 0; ca < pa.length; ca++) {
                var ba = pa[ca];
                if (ba.rule_result) {
                    a.Ra(S.Dg, ba.traffic_type);
                    Mz(3);
                    break
                }
            }
            if (a.B(S.ya)) {
                var Aa = hA(a) || {}, ha = gk(Aa[S.kc], !!Aa[S.R]) ? Xj(!0)._fplc : void 0;
                a.J._fplc = ha || (0 < Zi("FPLC", void 0, void 0, S.O).length ? void 0 : "0")
            }
            if (void 0 === a.B(S.Te)) {
                var La = a.B(S.Jd), ta, Ma;
                a:{
                    if (kA) {
                        var xb = hA(a) || {};
                        if (xb && xb[S.R]) for (var cc = rA(a), Hd = xb[S.R], Kc = 0; Kc < Hd.length; Kc++) if (Hd[Kc] instanceof RegExp) {
                            if (Hd[Kc].test(cc)) {
                                Ma = !0;
                                break a
                            }
                        } else if (0 <=
                            cc.indexOf(Hd[Kc])) {
                            Ma = !0;
                            break a
                        }
                    }
                    Ma = !1
                }
                var Id;
                if (!(Id = Ma)) if (sA) Id = !1; else {
                    var qe = rA(a), fd;
                    var Jd = String(a.B(S.oa));
                    if ("none" !== Jd) if ("auto" !== Jd) fd = Jd; else {
                        if (!uA) {
                            for (var zf = String(a.B(S.nb)), gd = ej(), Ob = 0; Ob < gd.length; Ob++) if ("none" !== gd[Ob]) {
                                var hd = String(a.B(S.Ha)) + "_ga_autodomain";
                                if (0 === hj(hd, tA, {jb: S.O, domain: gd[Ob], path: zf})) {
                                    hj(hd, void 0, {jb: S.O, domain: gd[Ob], path: zf});
                                    vA = gd[Ob];
                                    break
                                }
                            }
                            uA = !0
                        }
                        fd = vA
                    } else fd = void 0;
                    var re = fd;
                    Id = re ? 0 <= qe.indexOf(re) : !1
                }
                if (!(ta = Id)) {
                    var Dh;
                    if (Dh = La) a:{
                        for (var Jr =
                            La.include_conditions || [], qB = rA(a), $k = 0; $k < Jr.length; $k++) if (Jr[$k].test(qB)) {
                            Dh = !0;
                            break a
                        }
                        Dh = !1
                    }
                    ta = Dh
                }
                ta && (a.Ra(S.Te, 1), Mz(4))
            }
            if (a.eventName == S.$a) {
                var Kr = a.B(S.cb), rB = a.B(S.pb), Lr = void 0;
                Lr = a.K[Kr];
                rB(Lr || a.B(Kr));
                a.abort()
            }
            if (a.J[S.Rc]) delete a.J[S.Rc]; else {
                var al = a.B(S.Le);
                if (al) {
                    for (var Mr = al.edit_rules || [], Nr = !1, bl = 0; bl < Mr.length; bl++) {
                        var Eh;
                        a:{
                            var Jb = a, Kd = Mr[bl];
                            if (dx(Jb.eventName, Jb.J, Kd.event_name_predicate,
                                Kd.conditions || [])) {
                                if (Kd.new_event_name) {
                                    var Or = Ia(Kd.new_event_name) ? String(Kd.new_event_name) : ax(Jb.eventName, Jb.J, Kd.new_event_name);
                                    if (Oz(Or)) {
                                        Eh = !1;
                                        break a
                                    }
                                    Jb.eventName = String(Or)
                                }
                                Pz(Jb.eventName, Jb.J, Kd);
                                var Pr = Jb.J[S.Rc] = !0;
                                Mz(2);
                                if (Pr) {
                                    var Qr = wg();
                                    Qr && (Jb.J[S.Pc] = Qr);
                                    Cq(Jb.eventName, Jb.J, Jb.La);
                                    Jb.abort()
                                }
                                Eh = !0
                            } else Eh = !1
                        }
                        Eh && (Nr = !0)
                    }
                    for (var Rr = al.synthesis_rules ||
                        [], cl = 0; cl < Rr.length; cl++) {
                        var Fh = a, Af = Rr[cl];
                        if (dx(Fh.eventName, Fh.J, Af.event_name_predicate, Af.conditions || [])) {
                            var dl = Af.new_event_name;
                            if (!Oz(dl)) {
                                var el = Af.merge_source_event_params ? zc(Fh.J) : {};
                                el[S.Rc] = !0;
                                Pz(dl, el, Af);
                                Cq(dl, el, Fh.La);
                                Mz(1)
                            }
                        }
                    }
                }
            }
            var fl = a.J[S.Pc];
            if (Na(fl)) for (var gl = 0; gl < fl.length; gl++) Mz(fl[gl]);
            var hl = vg("GA4_EVENT");
            hl && (Lz ? a.metadata.event_usage = hl : a.Mg = hl);
            mB(a);
            var tB = this.Eh, Tr = this.g, il;
            var jl = gA(a);
            jl ? (cA(jl, a) || (xg(25), a.abort()), il = jl) : il = void 0;
            var uB = il, Gh;
            var Lc;
            Lc = $z ? a.K[S.Ga] : a.J[S.Ga];
            Tr && Lc === Tr ? Gh = Lc : Lc ? (Lc = "" + Lc, Zz(Lc, a) || (xg(31), a.abort()), Vz(Lc, Yg(S.O)), Gh = Lc) : (xg(32), a.abort(), Gh = "");
            tB.call(this, {clientId: Gh, Ih: uB});
            this.zk();
            if (a.Ua()) {
                var vB = iB[1] ? a.metadata.is_conversion : a.Bb;
                ("page_view" === a.eventName || vB) && hB(this,
                    a)
            }
            this.C.Nf();
            this.Bb = nB(a, this.Bb);
            this.Yg(a);
            a.ca.onSuccess()
        } catch (BB) {
            a.ca.onFailure()
        }
        delete tg.GA4_EVENT
    };
    l.Yg = function (a) {
        this.P.add(a)
    };
    l.Eh = function (a) {
        var b = a.clientId, c = a.Ih;
        b && c && (this.g = b, this.s = c)
    };
    l.flush = function () {
        this.P.flush()
    };
    l.zk = function () {
        var a = this;
        if (!this.F) {
            var b =
                Yg(S.O);
            ah([S.O], function () {
                var c = Yg(S.O);
                if (b ^ c && a.o && a.s && a.g) {
                    var d = a.g;
                    if (c) {
                        var e = !0;
                        e = !1;
                        var f = Xz(a.o);
                        if (f) {
                            a.g = f;
                            var g = dA(a.o);
                            e || g ? a.s = g : cA(a.s, a.o)
                        } else Zz(a.g, a.o), Vz(a.g, !0), cA(a.s, a.o);
                        var h = {};
                        h[S.og] = d;
                        Bq(S.Ce, h, a.Za);
                    } else {
                        a.s = void 0;
                        a.g = void 0;
                        m.gaGlobal = {};
                    }
                    b = c
                }
            });
            this.F = !0
        }
    };
    l.Ni = function (a) {
        a.eventName !== S.$a && this.C.Mi(a)
    };
    var lB = function (a) {
        var b = function (c) {
            return !!c && c.conversion
        };
        iB[1] ? a.metadata.is_conversion = b(a.Pb()) : a.Bb = b(a.Pb());
        if (iB[1] ? a.metadata.is_first_visit : a.nc) iB[1] ? a.metadata.is_first_visit_conversion = b(a.Pb("first_visit")) : a.Tg = b(a.Pb("first_visit"));
        if (iB[1] ? a.metadata.is_session_start : a.s) iB[1] ? a.metadata.is_session_start_conversion = b(a.Pb("session_start")) : a.Xg =
            b(a.Pb("session_start"))
    }, mB = function (a) {
        var b = Object.keys(iB);
        if (b.length) {
            b.forEach(function (d) {
                iB[d] && ug("CCD", Number(d))
            });
            var c = vg("CCD");
            c && (a.ef = "ccd." + c)
        }
    }, nB = function (a, b) {
        var c = void 0;
        return c
    };

    function kB(a) {
        delete a.eventModel[S.Hb];
        oB(a.eventModel)
    }

    var oB = function (a) {
        Sa(a, function (c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.Ja] || {};
        Sa(b, function (c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var pB = function (a) {
        if ("prerender" == H.visibilityState) return !1;
        a();
        return !0
    }, sB = function (a) {
        if (!pB(a)) {
            var b = !1, c = function () {
                !b && pB(a) && (b = !0, bc(H, "visibilitychange", c), xg(55))
            };
            ac(H, "visibilitychange", c);
            xg(54)
        }
    };
    var wB = function (a, b, c) {
        Bq(b, c, a)
    }, xB = function (a, b, c) {
        Bq(b, c, a, !0)
    }, zB = function (a, b) {
        var c = new jB(a, b);
        sB(function () {
            yB(a, c)
        });
    };

    function yB(a, b) {
        var c = b.C;
        Aq(a, function (d, e, f, g) {
            b.ek(e, f, g)
        });
        c.kk(function () {
            yq().flush();
            1E3 <= c.he() && Qb.sendBeacon && wB(a, S.Ce, {});
            Jz = !0;
            b.flush();
            c.Gh(function () {
                Jz = !1;
                c.Gh(void 0)
            })
        });
    }

    var Z = {h: {}};


    Z.h.ehl = ["google"], function () {
        function a(k) {
            return k.target && k.target.location && k.target.location.href ? k.target.location.href : ht()
        }

        function b(k, n) {
            ac(k, "hashchange", function (p) {
                var q = a(p);
                n({source: "hashchange", state: null, url: jt(q), M: it(q)})
            })
        }

        function c(k, n) {
            ac(k, "popstate", function (p) {
                var q = a(p);
                n({source: "popstate", state: p.state, url: jt(q), M: it(q)})
            })
        }

        function d(k, n, p) {
            var q = n.history, t = q[k];
            if (Ha(t)) try {
                q[k] = function (u, r, v) {
                    t.apply(q, [].slice.call(arguments, 0));
                    p({
                        source: k, state: u, url: jt(ht()),
                        M: it(ht())
                    })
                }
            } catch (u) {
            }
        }

        function e() {
            var k = {source: null, state: X("history").state || null, url: jt(ht()), M: it(ht())};
            return function (n, p) {
                var q = k, t = {};
                t[q.source] = !0;
                t[n.source] = !0;
                if (!t.popstate || !t.hashchange || q.M != n.M) {
                    var u = {
                        event: "gtm.historyChange-v2",
                        "gtm.historyChangeSource": n.source,
                        "gtm.oldUrlFragment": k.M,
                        "gtm.newUrlFragment": n.M,
                        "gtm.oldHistoryState": k.state,
                        "gtm.newHistoryState": n.state,
                        "gtm.oldUrl": k.url,
                        "gtm.newUrl": n.url,
                        "gtm.triggers": p.join(",")
                    };
                    k = n;
                    lt(u)
                }
            }
        }

        function f(k, n) {
            var p = "" +
                n;
            if (g[p]) g[p].push(k); else {
                var q = [k];
                g[p] = q;
                var t = e(), u = -1;
                h.push(function (r) {
                    0 <= u && et(u);
                    n ? u = ft(function () {
                        t(r, q);
                        u = -1
                    }, n) : t(r, q)
                })
            }
        }

        var g = {}, h = [];
        (function (k) {
            Z.__ehl = k;
            Z.__ehl.m = "ehl";
            Z.__ehl.isVendorTemplate = !0;
            Z.__ehl.priorityOverride = 0
        })(function (k) {
            var n = X("self"), p = k.vtp_uniqueTriggerId || "0",
                q = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
            0 > q ? q = 0 : isNaN(q) && (q = 1E3);
            if (qt("ehl")) {
                var t = Ks("ehl", "reg");
                t ? (t(p, q),
                    I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure)
            } else {
                var u = function (r) {
                    for (var v = 0; v < h.length; v++) h[v](r)
                };
                b(n, u);
                c(n, u);
                d("pushState", n, u);
                d("replaceState", n, u);
                f(p, q);
                Is("ehl", "reg", f);
                rt("ehl");
                I(k.vtp_gtmOnSuccess)
            }
        })
    }();
    Z.h.sdl = ["google"], function () {
        function a() {
            return !!(Object.keys(k("horiz.pix")).length || Object.keys(k("horiz.pct")).length || Object.keys(k("vert.pix")).length || Object.keys(k("vert.pct")).length)
        }

        function b(x) {
            for (var B = [], A = x.split(","), D = 0; D < A.length; D++) {
                var C = Number(A[D]);
                if (isNaN(C)) return [];
                p.test(A[D]) || B.push(C)
            }
            return B
        }

        function c() {
            var x = 0, B = 0;
            return function () {
                var A = hi(), D = A.height;
                x = Math.max(v.scrollLeft + A.width, x);
                B = Math.max(v.scrollTop + D, B);
                return {$c: x, ad: B}
            }
        }

        function d() {
            u = X("self");
            r = u.document;
            v = r.scrollingElement || r.body && r.body.parentNode;
            y = c()
        }

        function e(x, B, A, D) {
            var C = k(B), E = {}, F;
            for (F in C) {
                E.$b = F;
                if (C.hasOwnProperty(E.$b)) {
                    var R = Number(E.$b);
                    x < R || (lt({
                        event: "gtm.scrollDepth",
                        "gtm.scrollThreshold": R,
                        "gtm.scrollUnits": A.toLowerCase(),
                        "gtm.scrollDirection": D,
                        "gtm.triggers": C[E.$b].join(",")
                    }), Js("sdl", B, function (L) {
                        return function (J) {
                            delete J[L.$b];
                            return J
                        }
                    }(E), {}))
                }
                E = {$b: E.$b}
            }
        }

        function f() {
            var x = y(), B = x.$c, A = x.ad, D = B / v.scrollWidth * 100, C = A / v.scrollHeight * 100;
            e(B, "horiz.pix",
                q.Pd, t.Hg);
            e(D, "horiz.pct", q.Od, t.Hg);
            e(A, "vert.pix", q.Pd, t.Vg);
            e(C, "vert.pct", q.Od, t.Vg);
            Is("sdl", "pending", !1)
        }

        function g() {
            var x = 250, B = !1;
            r.scrollingElement && r.documentElement && u.addEventListener && (x = 50, B = !0);
            var A = 0, D = !1, C = function () {
                D ? A = ft(C, x) : (A = 0, f(), qt("sdl") && !a() && (bc(u, "scroll", E), bc(u, "resize", E), Is("sdl", "init", !1)));
                D = !1
            }, E = function () {
                B && y();
                A ? D = !0 : (A = ft(C, x), Is("sdl", "pending", !0))
            };
            return E
        }

        function h(x, B, A) {
            if (B) {
                var D = b(String(x));
                Js("sdl", A, function (C) {
                    for (var E = 0; E < D.length; E++) {
                        var F =
                            String(D[E]);
                        C.hasOwnProperty(F) || (C[F] = []);
                        C[F].push(B)
                    }
                    return C
                }, {})
            }
        }

        function k(x) {
            return Ks("sdl", x, {})
        }

        function n(x) {
            I(x.vtp_gtmOnSuccess);
            var B = x.vtp_uniqueTriggerId, A = x.vtp_horizontalThresholdsPixels, D = x.vtp_horizontalThresholdsPercent,
                C = x.vtp_verticalThresholdUnits, E = x.vtp_verticalThresholdsPixels,
                F = x.vtp_verticalThresholdsPercent;
            switch (x.vtp_horizontalThresholdUnits) {
                case q.Pd:
                    h(A, B, "horiz.pix");
                    break;
                case q.Od:
                    h(D, B, "horiz.pct")
            }
            switch (C) {
                case q.Pd:
                    h(E, B, "vert.pix");
                    break;
                case q.Od:
                    h(F,
                        B, "vert.pct")
            }
            qt("sdl") ? Ks("sdl", "pending") || (w || (d(), w = !0), I(function () {
                return f()
            })) : (d(), w = !0, v && (rt("sdl"), Is("sdl", "pending", !0), I(function () {
                f();
                if (a()) {
                    var R = g();
                    ac(u, "scroll", R);
                    ac(u, "resize", R)
                } else Is("sdl", "init", !1)
            })))
        }

        var p = /^\s*$/, q = {Od: "PERCENT", Pd: "PIXELS"}, t = {Vg: "vertical", Hg: "horizontal"}, u, r, v, w = !1, y;
        (function (x) {
            Z.__sdl = x;
            Z.__sdl.m = "sdl";
            Z.__sdl.isVendorTemplate = !0;
            Z.__sdl.priorityOverride = 0
        })(function (x) {
            x.vtp_triggerStartOption ? n(x) : Gr(function () {
                n(x)
            })
        })
    }();


    Z.h.read_container_data = ["google"], function () {
        (function (a) {
            Z.__read_container_data = a;
            Z.__read_container_data.m = "read_container_data";
            Z.__read_container_data.isVendorTemplate = !0;
            Z.__read_container_data.priorityOverride = 0
        })(function () {
            return {
                assert: function () {
                }, T: function () {
                    return {}
                }
            }
        })
    }();
    Z.h.c = ["google"], function () {
        (function (a) {
            Z.__c = a;
            Z.__c.m = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0
        })(function (a) {
            st(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Z.h.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.m = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        })(function (a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();

    Z.h.u = ["google"], function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        (function (b) {
            Z.__u = b;
            Z.__u.m = "u";
            Z.__u.isVendorTemplate = !0;
            Z.__u.priorityOverride = 0
        })(function (b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : kt("gtm.url", 1)) || ht();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d) return jt(String(c));
            var e = vi(String(c)), f;
            if ("QUERY" === d) a:{
                var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "",
                    k = b[a("vtp_ignoreEmptyQueryParam").toString()], n;
                g ? Na(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                for (var p = 0; p < n.length; p++) {
                    var q = ti(e, "QUERY", void 0, void 0, n[p]);
                    if (void 0 != q && (!k || "" !== q)) {
                        f = q;
                        break a
                    }
                }
                f = void 0
            } else f = ti(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
            return f
        })
    }();
    Z.h.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.m = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = kt(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            st(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.h.ytl = ["google"], function () {
        function a() {
            var r = Math.round(1E9 * Math.random()) + "";
            return H.getElementById(r) ? a() : r
        }

        function b(r, v) {
            if (!r) return !1;
            for (var w = 0; w < p.length; w++) if (0 <= r.indexOf("//" + p[w] + "/" + v)) return !0;
            return !1
        }

        function c(r, v) {
            var w = r.getAttribute("src");
            if (b(w, "embed/")) {
                if (0 < w.indexOf("enablejsapi=1")) return !0;
                if (v) {
                    var y = r.setAttribute, x;
                    var B = -1 !== w.indexOf("?") ? "&" : "?";
                    if (-1 < w.indexOf("origin=")) x = w + B + "enablejsapi=1"; else {
                        if (!t) {
                            var A = X("document");
                            t = A.location.protocol + "//" + A.location.hostname;
                            A.location.port && (t += ":" + A.location.port)
                        }
                        x = w + B + "enablejsapi=1&origin=" + encodeURIComponent(t)
                    }
                    y.call(r, "src", x);
                    return !0
                }
            }
            return !1
        }

        function d(r, v) {
            if (!r.getAttribute("data-gtm-yt-inspected-" + v.Wa) && (r.setAttribute("data-gtm-yt-inspected-" + v.Wa, "true"), c(r, v.wb))) {
                r.id || (r.id = a());
                var w = X("YT"), y = w.get(r.id);
                y || (y = new w.Player(r.id));
                var x = f(y, v), B = {}, A;
                for (A in x) B.Bc = A, x.hasOwnProperty(B.Bc) && y.addEventListener(B.Bc, function (D) {
                    return function (C) {
                        return x[D.Bc](C.data)
                    }
                }(B)), B = {Bc: B.Bc}
            }
        }

        function e(r) {
            I(function () {
                function v() {
                    for (var y =
                        w.getElementsByTagName("iframe"), x = y.length, B = 0; B < x; B++) d(y[B], r)
                }

                var w = X("document");
                v();
                Ts(v)
            })
        }

        function f(r, v) {
            var w, y;

            function x() {
                J = dt(function () {
                    return {url: Q, title: V, be: P, tf: r.getCurrentTime(), playbackRate: ka}
                }, v.Wa, r.getIframe());
                P = 0;
                V = Q = "";
                ka = 1;
                return B
            }

            function B(pa) {
                switch (pa) {
                    case q.PLAYING:
                        P = Math.round(r.getDuration());
                        Q = r.getVideoUrl();
                        if (r.getVideoData) {
                            var ca = r.getVideoData();
                            V = ca ? ca.title : ""
                        }
                        ka = r.getPlaybackRate();
                        v.Yc ? lt(J.createEvent("start")) : J.hb();
                        O = k(v.pd, v.od, r.getDuration());
                        return A(pa);
                    default:
                        return B
                }
            }

            function A() {
                U = r.getCurrentTime();
                Da = gt().getTime();
                J.Of();
                L();
                return D
            }

            function D(pa) {
                var ca;
                switch (pa) {
                    case q.ENDED:
                        return E(pa);
                    case q.PAUSED:
                        ca = "pause";
                    case q.BUFFERING:
                        var ba = r.getCurrentTime() - U;
                        ca = 1 < Math.abs((gt().getTime() - Da) / 1E3 * ka - ba) ? "seek" : ca || "buffering";
                        r.getCurrentTime() && (v.Xc ? lt(J.createEvent(ca)) : J.hb());
                        R();
                        return C;
                    case q.UNSTARTED:
                        return x(pa);
                    default:
                        return D
                }
            }

            function C(pa) {
                switch (pa) {
                    case q.ENDED:
                        return E(pa);
                    case q.PLAYING:
                        return A(pa);
                    case q.UNSTARTED:
                        return x(pa);
                    default:
                        return C
                }
            }

            function E() {
                for (; y;) {
                    var pa = w;
                    et(y);
                    pa()
                }
                v.Wc && lt(J.createEvent("complete", 1));
                return x(q.UNSTARTED)
            }

            function F() {
            }

            function R() {
                y && (et(y), y = 0, w = F)
            }

            function L() {
                if (O.length && 0 !== ka) {
                    var pa = -1, ca;
                    do {
                        ca = O[0];
                        if (ca.U > r.getDuration()) return;
                        pa = (ca.U - r.getCurrentTime()) / ka;
                        if (0 > pa && (O.shift(), 0 === O.length)) return
                    } while (0 > pa);
                    w = function () {
                        y = 0;
                        w = F;
                        0 < O.length && O[0].U === ca.U && (O.shift(), lt(J.createEvent("progress", ca.xb, ca.yb)));
                        L()
                    };
                    y = ft(w, 1E3 * pa)
                }
            }

            var J, O = [], P, Q, V, ka, U, Da, Ja = x(q.UNSTARTED);
            y = 0;
            w = F;
            return {
                onStateChange: function (pa) {
                    Ja = Ja(pa)
                }, onPlaybackRateChange: function (pa) {
                    U = r.getCurrentTime();
                    Da = gt().getTime();
                    J.hb();
                    ka = pa;
                    R();
                    L()
                }
            }
        }

        function g(r) {
            for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                var B = parseInt(v[x], 10);
                isNaN(B) || 100 < B || 0 > B || y.push(B / 100)
            }
            y.sort(function (A, D) {
                return A - D
            });
            return y
        }

        function h(r) {
            for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                var B = parseInt(v[x], 10);
                isNaN(B) || 0 > B || y.push(B)
            }
            y.sort(function (A, D) {
                return A - D
            });
            return y
        }

        function k(r, v, w) {
            var y = r.map(function (A) {
                return {
                    U: A,
                    yb: A, xb: void 0
                }
            });
            if (!v.length) return y;
            var x = v.map(function (A) {
                return {U: A * w, yb: void 0, xb: A}
            });
            if (!y.length) return x;
            var B = y.concat(x);
            B.sort(function (A, D) {
                return A.U - D.U
            });
            return B
        }

        function n(r) {
            var v = !!r.vtp_captureStart, w = !!r.vtp_captureComplete, y = !!r.vtp_capturePause,
                x = g(r.vtp_progressThresholdsPercent + ""), B = h(r.vtp_progressThresholdsTimeInSeconds + ""),
                A = !!r.vtp_fixMissingApi;
            if (v || w || y || x.length || B.length) {
                var D = {
                        Yc: v,
                        Wc: w,
                        Xc: y,
                        od: x,
                        pd: B,
                        wb: A,
                        Wa: void 0 === r.vtp_uniqueTriggerId ? "" : r.vtp_uniqueTriggerId
                    },
                    C = X("YT"), E = function () {
                        e(D)
                    };
                I(r.vtp_gtmOnSuccess);
                if (C) C.ready && C.ready(E); else {
                    var F = X("onYouTubeIframeAPIReady");
                    mt("onYouTubeIframeAPIReady", function () {
                        F && F();
                        E()
                    });
                    I(function () {
                        for (var R = X("document"), L = R.getElementsByTagName("script"), J = L.length, O = 0; O < J; O++) {
                            var P = L[O].getAttribute("src");
                            if (b(P, "iframe_api") || b(P, "player_api")) return
                        }
                        for (var Q = R.getElementsByTagName("iframe"), V = Q.length, ka = 0; ka < V; ka++) if (!u && c(Q[ka], D.wb)) {
                            W("https://www.youtube.com/iframe_api");
                            u = !0;
                            break
                        }
                    })
                }
            } else I(r.vtp_gtmOnSuccess)
        }

        var p = ["www.youtube.com", "www.youtube-nocookie.com"],
            q = {UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5}, t, u = !1;
        (function (r) {
            Z.__ytl = r;
            Z.__ytl.m = "ytl";
            Z.__ytl.isVendorTemplate = !0;
            Z.__ytl.priorityOverride = 0
        })(function (r) {
            r.vtp_triggerStartOption ? n(r) : yl(function () {
                n(r)
            })
        })
    }();


    Z.h.aev = ["google"], function () {
        function a(t, u, r, v, w) {
            w || (w = "element");
            var y = u + "." + r, x;
            if (n.hasOwnProperty(y)) x = n[y]; else {
                var B = t[w];
                if (B && (x = v(B), n[y] = x, p.push(y), 35 < p.length)) {
                    var A = p.shift();
                    delete n[A]
                }
            }
            return x
        }

        function b(t, u, r) {
            var v = t[q[u]];
            return void 0 !== v ? v : r
        }

        function c(t, u) {
            if (!t) return !1;
            var r = d(ht());
            Na(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
            for (var v = [r], w = 0; w < u.length; w++) {
                var y = u[w];
                if (y.hasOwnProperty("is_regex")) if (y.is_regex) try {
                    y = new RegExp(y.domain)
                } catch (A) {
                    continue
                } else y =
                    y.domain;
                var x = d(t);
                if (y instanceof RegExp) {
                    if (y.test(x)) return !1
                } else {
                    var B = y;
                    if (0 != B.length) {
                        if (0 <= x.indexOf(B)) return !1;
                        v.push(d(B))
                    }
                }
            }
            return !vy(t, v)
        }

        function d(t) {
            k.test(t) || (t = "http://" + t);
            return ti(vi(t), "HOST", !0)
        }

        function e(t, u, r, v) {
            switch (t) {
                case "SUBMIT_TEXT":
                    return a(u, r, "FORM." + t, f, "formSubmitElement") || v;
                case "LENGTH":
                    var w = a(u, r, "FORM." + t, g);
                    return void 0 === w ? v : w;
                case "INTERACTED_FIELD_ID":
                    return h(u, "id", v);
                case "INTERACTED_FIELD_NAME":
                    return h(u, "name", v);
                case "INTERACTED_FIELD_TYPE":
                    return h(u,
                        "type", v);
                case "INTERACTED_FIELD_POSITION":
                    var y = u.interactedFormFieldPosition;
                    return void 0 === y ? v : y;
                case "INTERACT_SEQUENCE_NUMBER":
                    var x = u.interactSequenceNumber;
                    return void 0 === x ? v : x;
                default:
                    return v
            }
        }

        function f(t) {
            switch (t.tagName.toLowerCase()) {
                case "input":
                    return dc(t, "value");
                case "button":
                    return ec(t);
                default:
                    return null
            }
        }

        function g(t) {
            if ("form" === t.tagName.toLowerCase() && t.elements) {
                for (var u = 0, r = 0; r < t.elements.length; r++) Os(t.elements[r]) && u++;
                return u
            }
        }

        function h(t, u, r) {
            var v = t.interactedFormField;
            return v && dc(v, u) || r
        }

        var k = /^https?:\/\//i, n = {}, p = [], q = {
            ATTRIBUTE: "elementAttribute",
            CLASSES: "elementClasses",
            ELEMENT: "element",
            ID: "elementId",
            HISTORY_CHANGE_SOURCE: "historyChangeSource",
            HISTORY_NEW_STATE: "newHistoryState",
            HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
            HISTORY_OLD_STATE: "oldHistoryState",
            HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
            TARGET: "elementTarget"
        };
        (function (t) {
            Z.__aev = t;
            Z.__aev.m = "aev";
            Z.__aev.isVendorTemplate = !0;
            Z.__aev.priorityOverride = 0
        })(function (t) {
            var u = t.vtp_gtmEventId, r = t.vtp_defaultValue,
                v = t.vtp_varType, w = t.vtp_gtmCachedValues.gtm;
            switch (v) {
                case "TAG_NAME":
                    var y = w.element;
                    return y && y.tagName || r;
                case "TEXT":
                    return a(w, u, v, ec) || r;
                case "URL":
                    var x;
                    a:{
                        var B = String(w.elementUrl || r || ""), A = vi(B), D = String(t.vtp_component || "URL");
                        switch (D) {
                            case "URL":
                                x = B;
                                break a;
                            case "IS_OUTBOUND":
                                x = c(B, t.vtp_affiliatedDomains);
                                break a;
                            default:
                                x = ti(A, D, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                        }
                    }
                    return x;
                case "ATTRIBUTE":
                    var C;
                    if (void 0 === t.vtp_attribute) C = b(w, v, r); else {
                        var E = w.element;
                        C = E && dc(E, t.vtp_attribute) ||
                            r || ""
                    }
                    return C;
                case "MD":
                    var F = t.vtp_mdValue, R = a(w, u, "MD", $s);
                    return F && R ? ct(R, F) || r : R || r;
                case "FORM":
                    return e(String(t.vtp_component || "SUBMIT_TEXT"), w, u, r);
                default:
                    var L = b(w, v, r);
                    st(L, "aev", t.vtp_gtmEventId);
                    return L
            }
        })
    }();
    Z.h.dlm = ["google"], function () {
        (function (a) {
            Z.__dlm = a;
            Z.__dlm.m = "dlm";
            Z.__dlm.isVendorTemplate = !0;
            Z.__dlm.priorityOverride = 0
        })(function (a) {
            var b = wy(a.vtp_userInput || [], "key", "value") || {};
            a.vtp_synchronousWrite ? Sa(b, function (c, d) {
                $h(c, d)
            }) : lt(b);
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.h.gct = ["google"], function () {
        function a(d) {
            for (var e = [], f = 0; f < d.length; f++) try {
                e.push(new RegExp(d[f]))
            } catch (g) {
            }
            return e
        }

        function b(d) {
            return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }

        function c(d) {
            for (var e = [], f = 0; f < d.length; f++) {
                var g = d[f].matchValue, h;
                switch (d[f].matchType) {
                    case "BEGINS_WITH":
                        h = "^" + b(g);
                        break;
                    case "ENDS_WITH":
                        h = b(g) + "$";
                        break;
                    case "EQUALS":
                        h = "^" + b(g) + "$";
                        break;
                    case "REGEX":
                        h = g;
                        break;
                    default:
                        h = b(g)
                }
                e.push(h)
            }
            return e
        }

        (function (d) {
            Z.__gct = d;
            Z.__gct.m = "gct";
            Z.__gct.isVendorTemplate =
                !0;
            Z.__gct.priorityOverride = 0
        })(function (d) {
            var e = {};
            0 < d.vtp_sessionDuration && (e[S.Lc] = d.vtp_sessionDuration);
            e[S.Fd] = d.vtp_eventSettings;
            e[S.Le] = d.vtp_dynamicEventSettings;
            e[S.qb] = 1 === d.vtp_googleSignals;
            e[S.Id] = d.vtp_foreignTld;
            e[S.Re] = 1 === d.vtp_restrictDomain;
            e[S.Ue] = d.vtp_internalTrafficResults;
            var f = S.qa, g = d.vtp_linker;
            g && g[S.R] && (g[S.R] = a(g[S.R]));
            e[f] = g;
            var h = S.Jd, k = d.vtp_referralExclusionDefinition;
            k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
            e[h] = k;
            var n = Fq(d.vtp_trackingId),
                p = n.referral_exclusion_conditions;
            p && (p.length && "object" === typeof p[0] && (p = c(p)), e[S.Jd] = {include_conditions: a(p)});
            var q = n.cross_domain_conditions;
            if (q) {
                q.length && "object" === typeof q[0] && (q = c(q));
                var t = {};
                e[S.qa] = (t[S.R] = a(q), t[S.mc] = !0, t[S.kc] = !0, t[S.Ic] = "query", t)
            }
            zB(d.vtp_trackingId, e);
            I(d.vtp_gtmOnSuccess)
        })
    }();


    Z.h.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.m = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? xB : wB)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();


    Z.h.lcl = [], function () {
        function a() {
            var c = X("document"), d = 0, e = function (f) {
                var g = f.target;
                if (g && 3 !== f.which && !(f.kd || f.timeStamp && f.timeStamp === d)) {
                    d = f.timeStamp;
                    g = gc(g, ["a", "area"], 100);
                    if (!g) return f.returnValue;
                    var h = f.defaultPrevented || !1 === f.returnValue, k = Ks("lcl", h ? "nv.mwt" : "mwt", 0), n;
                    n = h ? Ks("lcl", "nv.ids", []) : Ks("lcl", "ids", []);
                    if (n.length) {
                        var p = Gs(g, "gtm.linkClick", n);
                        if (b(f, g, c) && !h && k && g.href) {
                            var q = !!Oa(String(ic(g, "rel") || "").split(" "), function (v) {
                                return "noreferrer" === v.toLowerCase()
                            });
                            q && xg(36);
                            var t = X((ic(g, "target") || "_self").substring(1)), u = !0, r = rs(function () {
                                var v;
                                if (v = u && t) {
                                    var w;
                                    a:if (q) {
                                        var y;
                                        try {
                                            y = new MouseEvent(f.type, {bubbles: !0})
                                        } catch (x) {
                                            if (!c.createEvent) {
                                                w = !1;
                                                break a
                                            }
                                            y = c.createEvent("MouseEvents");
                                            y.initEvent(f.type, !0, !0)
                                        }
                                        y.kd = !0;
                                        f.target.dispatchEvent(y);
                                        w = !0
                                    } else w = !1;
                                    v = !w
                                }
                                v && (t.location.href = ic(g, "href"))
                            }, k);
                            if (lt(p, r, k)) u = !1; else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                        } else lt(p, function () {
                        }, k || 2E3);
                        return !0
                    }
                }
            };
            ac(c, "click", e, !1);
            ac(c, "auxclick",
                e, !1)
        }

        function b(c, d, e) {
            if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
            var f = ic(d, "href"), g = f.indexOf("#"), h = ic(d, "target");
            if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
            if (0 < g) {
                var k = jt(f), n = jt(e.location);
                return k !== n
            }
            return !0
        }

        (function (c) {
            Z.__lcl = c;
            Z.__lcl.m = "lcl";
            Z.__lcl.isVendorTemplate = !0;
            Z.__lcl.priorityOverride = 0
        })(function (c) {
            var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation, f = Number(c.vtp_waitForTagsTimeout);
            if (!f || 0 >= f) f = 2E3;
            var g = c.vtp_uniqueTriggerId || "0";
            if (d) {
                var h = function (n) {
                    return Math.max(f, n)
                };
                Js("lcl", "mwt", h, 0);
                e || Js("lcl", "nv.mwt", h, 0)
            }
            var k = function (n) {
                n.push(g);
                return n
            };
            Js("lcl", "ids", k, []);
            e || Js("lcl", "nv.ids", k, []);
            qt("lcl") || (a(), rt("lcl"));
            I(c.vtp_gtmOnSuccess)
        })
    }();
    var AB = {};
    AB.dataLayer = Yh;
    AB.callback = function (a) {
        Ph.hasOwnProperty(a) && Ha(Ph[a]) && Ph[a]();
        delete Ph[a]
    };
    AB.bootstrap = 0;
    AB._spx = !1;
    (function (a) {
        if (!m["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = vi(H.referrer);
                b = "cct.google" === si(c, "host")
            }
            if (!b) {
                var d = Zi("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (m["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
        }
        var f = function (q) {
            var t = "GTM", u = "GTM";
            t = "OGT", u = "GTAG";
            var r = m["google.tagmanager.debugui2.queue"];
            r || (r = [], m["google.tagmanager.debugui2.queue"] = r, Xb("https://" + K.ye + "/debug/bootstrap?id=" + K.I + "&src=" + u + "&cond=" + q + "&gtm=" + tn()));
            var v = {
                messageType: "CONTAINER_STARTING",
                data: {scriptSource: Rb, containerProduct: t, debug: !1, id: K.I}
            };
            v.data.resume = function () {
                a()
            };
            K.Zh && (v.data.initialPublish =
                !0);
            r.push(v)
        }, g = void 0, h = ti(m.location, "query", !1, void 0, "gtm_debug");
        As(h) && (g = 2);
        if (!g && H.referrer) {
            var k = vi(H.referrer);
            "tagassistant.google.com" === si(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Zi("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = H.documentElement.getAttribute("data-tag-assistant-present");
            As(p) && (g = 5)
        }
        g && Rb ? f(g) : a()
    })(function () {
        var a = !1;
        a && Hl("INIT");
        Ag().o();
        Qn();
        hk.enable_gbraid_cookie_write = !0;
        var b = !!T[K.I];
        if (b) {
            var c = T.zones;
            c && c.unregisterChild(K.I);
        } else {
            for (var g = data.resource || {}, h = g.macros || [], k = 0; k < h.length; k++) xe.push(h[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) Ae.push(n[p]);
            for (var q = g.predicates || [], t = 0; t < q.length; t++) ze.push(q[t]);
            for (var u = g.rules || [], r = 0; r < u.length; r++) {
                for (var v = u[r], w = {}, y = 0; y < v.length; y++) w[v[y][0]] = Array.prototype.slice.call(v[y], 1);
                ye.push(w)
            }
            Ce = Z;
            De = Vt;
            $e = new Ze;
            var x = data.sandboxed_scripts, B = data.security_groups, A = data.runtime || [], D = data.runtime_lines;
            oy = new Wd;
            ry();
            we = py();
            var C = oy, E = ly();
            qb(C.g, "require", E);
            for (var F = 0; F < A.length; F++) {
                var R = A[F];
                if (!Na(R) || 3 > R.length) {
                    if (0 === R.length) continue;
                    break
                }
                D && D[F] && D[F].length && Me(R, D[F]);
                oy.execute(R)
            }
            if (void 0 !==
                x) for (var L = ["sandboxedScripts"], J = 0; J < x.length; J++) {
                var O = x[J].replace(/^_*/, "");
                Qh[O] = L
            }
            sy(B);
            T[K.I] = AB;
            bb(Qh, Z.h);
            Fe = Te;
            zs();
            tl = !1;
            ul = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) wl(); else {
                ac(H, "DOMContentLoaded",
                    wl);
                ac(H, "readystatechange", wl);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var P = !0;
                    try {
                        P = !m.frameElement
                    } catch (Da) {
                    }
                    P && xl()
                }
                ac(m, "load", wl)
            }
            Dr = !1;
            "complete" === H.readyState ? Fr() : ac(m, "load", Fr);
            Cm && m.setInterval(wm, 864E5);
            Nh = Za();
            AB.bootstrap = Nh;
            AB._spx = !0, ws();
            if (a) {
                var U = Il("INIT");
            }
        }
    });

})()
