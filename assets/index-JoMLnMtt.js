(function() {
    const il = document.createElement("link").relList;
    if (il && il.supports && il.supports("modulepreload"))
        return;
    for (const X of document.querySelectorAll('link[rel="modulepreload"]'))
        g(X);
    new MutationObserver(X => {
        for (const J of X)
            if (J.type === "childList")
                for (const W of J.addedNodes)
                    W.tagName === "LINK" && W.rel === "modulepreload" && g(W)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function F(X) {
        const J = {};
        return X.integrity && (J.integrity = X.integrity), X.referrerPolicy && (J.referrerPolicy = X.referrerPolicy), X.crossOrigin === "use-credentials" ? J.credentials = "include" : X.crossOrigin === "anonymous" ? J.credentials = "omit" : J.credentials = "same-origin", J
    }
    function g(X) {
        if (X.ep)
            return;
        X.ep = !0;
        const J = F(X);
        fetch(X.href, J)
    }
})();
var Pf = {
        exports: {}
    },
    be = {};
var Po;
function Hh() {
    if (Po)
        return be;
    Po = 1;
    var A = Symbol.for("react.transitional.element"),
        il = Symbol.for("react.fragment");
    function F(g, X, J) {
        var W = null;
        if (J !== void 0 && (W = "" + J), X.key !== void 0 && (W = "" + X.key), "key" in X) {
            J = {};
            for (var sl in X)
                sl !== "key" && (J[sl] = X[sl])
        } else
            J = X;
        return X = J.ref, {
            $$typeof: A,
            type: g,
            key: W,
            ref: X !== void 0 ? X : null,
            props: J
        }
    }
    return be.Fragment = il, be.jsx = F, be.jsxs = F, be
}
var lr;
function Nh() {
    return lr || (lr = 1, Pf.exports = Hh()), Pf.exports
}
var O = Nh(),
    lc = {
        exports: {}
    },
    pe = {},
    tc = {
        exports: {}
    },
    ac = {};
var tr;
function Bh() {
    return tr || (tr = 1, (function(A) {
        function il(m, D) {
            var E = m.length;
            m.push(D);
            l:
            for (; 0 < E;) {
                var z = E - 1 >>> 1,
                    s = m[z];
                if (0 < X(s, D))
                    m[z] = D,
                    m[E] = s,
                    E = z;
                else
                    break l
            }
        }
        function F(m) {
            return m.length === 0 ? null : m[0]
        }
        function g(m) {
            if (m.length === 0)
                return null;
            var D = m[0],
                E = m.pop();
            if (E !== D) {
                m[0] = E;
                l:
                for (var z = 0, s = m.length, x = s >>> 1; z < x;) {
                    var _ = 2 * (z + 1) - 1,
                        M = m[_],
                        B = _ + 1,
                        $ = m[B];
                    if (0 > X(M, E))
                        B < s && 0 > X($, M) ? (m[z] = $, m[B] = E, z = B) : (m[z] = M, m[_] = E, z = _);
                    else if (B < s && 0 > X($, E))
                        m[z] = $,
                        m[B] = E,
                        z = B;
                    else
                        break l
                }
            }
            return D
        }
        function X(m, D) {
            var E = m.sortIndex - D.sortIndex;
            return E !== 0 ? E : m.id - D.id
        }
        if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var J = performance;
            A.unstable_now = function() {
                return J.now()
            }
        } else {
            var W = Date,
                sl = W.now();
            A.unstable_now = function() {
                return W.now() - sl
            }
        }
        var U = [],
            T = [],
            N = 1,
            P = null,
            al = 3,
            Hl = !1,
            ml = !1,
            Zl = !1,
            Sl = !1,
            gt = typeof setTimeout == "function" ? setTimeout : null,
            $l = typeof clearTimeout == "function" ? clearTimeout : null,
            zl = typeof setImmediate < "u" ? setImmediate : null;
        function Nl(m) {
            for (var D = F(T); D !== null;) {
                if (D.callback === null)
                    g(T);
                else if (D.startTime <= m)
                    g(T),
                    D.sortIndex = D.expirationTime,
                    il(U, D);
                else
                    break;
                D = F(T)
            }
        }
        function V(m) {
            if (Zl = !1, Nl(m), !ml)
                if (F(U) !== null)
                    ml = !0,
                    Cl || (Cl = !0, Ol());
                else {
                    var D = F(T);
                    D !== null && Dl(V, D.startTime - m)
                }
        }
        var Cl = !1,
            xl = -1,
            jl = 5,
            Ll = -1;
        function xt() {
            return Sl ? !0 : !(A.unstable_now() - Ll < jl)
        }
        function mt() {
            if (Sl = !1, Cl) {
                var m = A.unstable_now();
                Ll = m;
                var D = !0;
                try {
                    l:
                    {
                        ml = !1,
                        Zl && (Zl = !1, $l(xl), xl = -1),
                        Hl = !0;
                        var E = al;
                        try {
                            t:
                            {
                                for (Nl(m), P = F(U); P !== null && !(P.expirationTime > m && xt());) {
                                    var z = P.callback;
                                    if (typeof z == "function") {
                                        P.callback = null,
                                        al = P.priorityLevel;
                                        var s = z(P.expirationTime <= m);
                                        if (m = A.unstable_now(), typeof s == "function") {
                                            P.callback = s,
                                            Nl(m),
                                            D = !0;
                                            break t
                                        }
                                        P === F(U) && g(U),
                                        Nl(m)
                                    } else
                                        g(U);
                                    P = F(U)
                                }
                                if (P !== null)
                                    D = !0;
                                else {
                                    var x = F(T);
                                    x !== null && Dl(V, x.startTime - m),
                                    D = !1
                                }
                            }break l
                        } finally {
                            P = null,
                            al = E,
                            Hl = !1
                        }
                        D = void 0
                    }
                } finally {
                    D ? Ol() : Cl = !1
                }
            }
        }
        var Ol;
        if (typeof zl == "function")
            Ol = function() {
                zl(mt)
            };
        else if (typeof MessageChannel < "u") {
            var Mt = new MessageChannel,
                _t = Mt.port2;
            Mt.port1.onmessage = mt,
            Ol = function() {
                _t.postMessage(null)
            }
        } else
            Ol = function() {
                gt(mt, 0)
            };
        function Dl(m, D) {
            xl = gt(function() {
                m(A.unstable_now())
            }, D)
        }
        A.unstable_IdlePriority = 5,
        A.unstable_ImmediatePriority = 1,
        A.unstable_LowPriority = 4,
        A.unstable_NormalPriority = 3,
        A.unstable_Profiling = null,
        A.unstable_UserBlockingPriority = 2,
        A.unstable_cancelCallback = function(m) {
            m.callback = null
        },
        A.unstable_forceFrameRate = function(m) {
            0 > m || 125 < m ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jl = 0 < m ? Math.floor(1e3 / m) : 5
        },
        A.unstable_getCurrentPriorityLevel = function() {
            return al
        },
        A.unstable_next = function(m) {
            switch (al) {
            case 1:
            case 2:
            case 3:
                var D = 3;
                break;
            default:
                D = al
            }
            var E = al;
            al = D;
            try {
                return m()
            } finally {
                al = E
            }
        },
        A.unstable_requestPaint = function() {
            Sl = !0
        },
        A.unstable_runWithPriority = function(m, D) {
            switch (m) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                m = 3
            }
            var E = al;
            al = m;
            try {
                return D()
            } finally {
                al = E
            }
        },
        A.unstable_scheduleCallback = function(m, D, E) {
            var z = A.unstable_now();
            switch (typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? z + E : z) : E = z, m) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default:
                s = 5e3
            }
            return s = E + s, m = {
                id: N++,
                callback: D,
                priorityLevel: m,
                startTime: E,
                expirationTime: s,
                sortIndex: -1
            }, E > z ? (m.sortIndex = E, il(T, m), F(U) === null && m === F(T) && (Zl ? ($l(xl), xl = -1) : Zl = !0, Dl(V, E - z))) : (m.sortIndex = s, il(U, m), ml || Hl || (ml = !0, Cl || (Cl = !0, Ol()))), m
        },
        A.unstable_shouldYield = xt,
        A.unstable_wrapCallback = function(m) {
            var D = al;
            return function() {
                var E = al;
                al = D;
                try {
                    return m.apply(this, arguments)
                } finally {
                    al = E
                }
            }
        }
    })(ac)), ac
}
var ar;
function Yh() {
    return ar || (ar = 1, tc.exports = Bh()), tc.exports
}
var uc = {
        exports: {}
    },
    G = {};
var ur;
function qh() {
    if (ur)
        return G;
    ur = 1;
    var A = Symbol.for("react.transitional.element"),
        il = Symbol.for("react.portal"),
        F = Symbol.for("react.fragment"),
        g = Symbol.for("react.strict_mode"),
        X = Symbol.for("react.profiler"),
        J = Symbol.for("react.consumer"),
        W = Symbol.for("react.context"),
        sl = Symbol.for("react.forward_ref"),
        U = Symbol.for("react.suspense"),
        T = Symbol.for("react.memo"),
        N = Symbol.for("react.lazy"),
        P = Symbol.iterator;
    function al(s) {
        return s === null || typeof s != "object" ? null : (s = P && s[P] || s["@@iterator"], typeof s == "function" ? s : null)
    }
    var Hl = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        ml = Object.assign,
        Zl = {};
    function Sl(s, x, _) {
        this.props = s,
        this.context = x,
        this.refs = Zl,
        this.updater = _ || Hl
    }
    Sl.prototype.isReactComponent = {},
    Sl.prototype.setState = function(s, x) {
        if (typeof s != "object" && typeof s != "function" && s != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, x, "setState")
    },
    Sl.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate")
    };
    function gt() {}
    gt.prototype = Sl.prototype;
    function $l(s, x, _) {
        this.props = s,
        this.context = x,
        this.refs = Zl,
        this.updater = _ || Hl
    }
    var zl = $l.prototype = new gt;
    zl.constructor = $l,
    ml(zl, Sl.prototype),
    zl.isPureReactComponent = !0;
    var Nl = Array.isArray,
        V = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Cl = Object.prototype.hasOwnProperty;
    function xl(s, x, _, M, B, $) {
        return _ = $.ref, {
            $$typeof: A,
            type: s,
            key: x,
            ref: _ !== void 0 ? _ : null,
            props: $
        }
    }
    function jl(s, x) {
        return xl(s.type, x, void 0, void 0, void 0, s.props)
    }
    function Ll(s) {
        return typeof s == "object" && s !== null && s.$$typeof === A
    }
    function xt(s) {
        var x = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + s.replace(/[=:]/g, function(_) {
            return x[_]
        })
    }
    var mt = /\/+/g;
    function Ol(s, x) {
        return typeof s == "object" && s !== null && s.key != null ? xt("" + s.key) : x.toString(36)
    }
    function Mt() {}
    function _t(s) {
        switch (s.status) {
        case "fulfilled":
            return s.value;
        case "rejected":
            throw s.reason;
        default:
            switch (typeof s.status == "string" ? s.then(Mt, Mt) : (s.status = "pending", s.then(function(x) {
                s.status === "pending" && (s.status = "fulfilled", s.value = x)
            }, function(x) {
                s.status === "pending" && (s.status = "rejected", s.reason = x)
            })), s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason
            }
        }
        throw s
    }
    function Dl(s, x, _, M, B) {
        var $ = typeof s;
        ($ === "undefined" || $ === "boolean") && (s = null);
        var j = !1;
        if (s === null)
            j = !0;
        else
            switch ($) {
            case "bigint":
            case "string":
            case "number":
                j = !0;
                break;
            case "object":
                switch (s.$$typeof) {
                case A:
                case il:
                    j = !0;
                    break;
                case N:
                    return j = s._init, Dl(j(s._payload), x, _, M, B)
                }
            }
        if (j)
            return B = B(s), j = M === "" ? "." + Ol(s, 0) : M, Nl(B) ? (_ = "", j != null && (_ = j.replace(mt, "$&/") + "/"), Dl(B, x, _, "", function(Kt) {
                return Kt
            })) : B != null && (Ll(B) && (B = jl(B, _ + (B.key == null || s && s.key === B.key ? "" : ("" + B.key).replace(mt, "$&/") + "/") + j)), x.push(B)), 1;
        j = 0;
        var kl = M === "" ? "." : M + ":";
        if (Nl(s))
            for (var ol = 0; ol < s.length; ol++)
                M = s[ol],
                $ = kl + Ol(M, ol),
                j += Dl(M, x, _, $, B);
        else if (ol = al(s), typeof ol == "function")
            for (s = ol.call(s), ol = 0; !(M = s.next()).done;)
                M = M.value,
                $ = kl + Ol(M, ol++),
                j += Dl(M, x, _, $, B);
        else if ($ === "object") {
            if (typeof s.then == "function")
                return Dl(_t(s), x, _, M, B);
            throw x = String(s), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.")
        }
        return j
    }
    function m(s, x, _) {
        if (s == null)
            return s;
        var M = [],
            B = 0;
        return Dl(s, M, "", "", function($) {
            return x.call(_, $, B++)
        }), M
    }
    function D(s) {
        if (s._status === -1) {
            var x = s._result;
            x = x(),
            x.then(function(_) {
                (s._status === 0 || s._status === -1) && (s._status = 1, s._result = _)
            }, function(_) {
                (s._status === 0 || s._status === -1) && (s._status = 2, s._result = _)
            }),
            s._status === -1 && (s._status = 0, s._result = x)
        }
        if (s._status === 1)
            return s._result.default;
        throw s._result
    }
    var E = typeof reportError == "function" ? reportError : function(s) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var x = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                error: s
            });
            if (!window.dispatchEvent(x))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", s);
            return
        }
        console.error(s)
    };
    function z() {}
    return G.Children = {
        map: m,
        forEach: function(s, x, _) {
            m(s, function() {
                x.apply(this, arguments)
            }, _)
        },
        count: function(s) {
            var x = 0;
            return m(s, function() {
                x++
            }), x
        },
        toArray: function(s) {
            return m(s, function(x) {
                    return x
                }) || []
        },
        only: function(s) {
            if (!Ll(s))
                throw Error("React.Children.only expected to receive a single React element child.");
            return s
        }
    }, G.Component = Sl, G.Fragment = F, G.Profiler = X, G.PureComponent = $l, G.StrictMode = g, G.Suspense = U, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, G.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(s) {
            return V.H.useMemoCache(s)
        }
    }, G.cache = function(s) {
        return function() {
            return s.apply(null, arguments)
        }
    }, G.cloneElement = function(s, x, _) {
        if (s == null)
            throw Error("The argument must be a React element, but you passed " + s + ".");
        var M = ml({}, s.props),
            B = s.key,
            $ = void 0;
        if (x != null)
            for (j in x.ref !== void 0 && ($ = void 0), x.key !== void 0 && (B = "" + x.key), x)
                !Cl.call(x, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && x.ref === void 0 || (M[j] = x[j]);
        var j = arguments.length - 2;
        if (j === 1)
            M.children = _;
        else if (1 < j) {
            for (var kl = Array(j), ol = 0; ol < j; ol++)
                kl[ol] = arguments[ol + 2];
            M.children = kl
        }
        return xl(s.type, B, void 0, void 0, $, M)
    }, G.createContext = function(s) {
        return s = {
            $$typeof: W,
            _currentValue: s,
            _currentValue2: s,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, s.Provider = s, s.Consumer = {
            $$typeof: J,
            _context: s
        }, s
    }, G.createElement = function(s, x, _) {
        var M,
            B = {},
            $ = null;
        if (x != null)
            for (M in x.key !== void 0 && ($ = "" + x.key), x)
                Cl.call(x, M) && M !== "key" && M !== "__self" && M !== "__source" && (B[M] = x[M]);
        var j = arguments.length - 2;
        if (j === 1)
            B.children = _;
        else if (1 < j) {
            for (var kl = Array(j), ol = 0; ol < j; ol++)
                kl[ol] = arguments[ol + 2];
            B.children = kl
        }
        if (s && s.defaultProps)
            for (M in j = s.defaultProps, j)
                B[M] === void 0 && (B[M] = j[M]);
        return xl(s, $, void 0, void 0, null, B)
    }, G.createRef = function() {
        return {
            current: null
        }
    }, G.forwardRef = function(s) {
        return {
            $$typeof: sl,
            render: s
        }
    }, G.isValidElement = Ll, G.lazy = function(s) {
        return {
            $$typeof: N,
            _payload: {
                _status: -1,
                _result: s
            },
            _init: D
        }
    }, G.memo = function(s, x) {
        return {
            $$typeof: T,
            type: s,
            compare: x === void 0 ? null : x
        }
    }, G.startTransition = function(s) {
        var x = V.T,
            _ = {};
        V.T = _;
        try {
            var M = s(),
                B = V.S;
            B !== null && B(_, M),
            typeof M == "object" && M !== null && typeof M.then == "function" && M.then(z, E)
        } catch ($) {
            E($)
        } finally {
            V.T = x
        }
    }, G.unstable_useCacheRefresh = function() {
        return V.H.useCacheRefresh()
    }, G.use = function(s) {
        return V.H.use(s)
    }, G.useActionState = function(s, x, _) {
        return V.H.useActionState(s, x, _)
    }, G.useCallback = function(s, x) {
        return V.H.useCallback(s, x)
    }, G.useContext = function(s) {
        return V.H.useContext(s)
    }, G.useDebugValue = function() {}, G.useDeferredValue = function(s, x) {
        return V.H.useDeferredValue(s, x)
    }, G.useEffect = function(s, x, _) {
        var M = V.H;
        if (typeof _ == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return M.useEffect(s, x)
    }, G.useId = function() {
        return V.H.useId()
    }, G.useImperativeHandle = function(s, x, _) {
        return V.H.useImperativeHandle(s, x, _)
    }, G.useInsertionEffect = function(s, x) {
        return V.H.useInsertionEffect(s, x)
    }, G.useLayoutEffect = function(s, x) {
        return V.H.useLayoutEffect(s, x)
    }, G.useMemo = function(s, x) {
        return V.H.useMemo(s, x)
    }, G.useOptimistic = function(s, x) {
        return V.H.useOptimistic(s, x)
    }, G.useReducer = function(s, x, _) {
        return V.H.useReducer(s, x, _)
    }, G.useRef = function(s) {
        return V.H.useRef(s)
    }, G.useState = function(s) {
        return V.H.useState(s)
    }, G.useSyncExternalStore = function(s, x, _) {
        return V.H.useSyncExternalStore(s, x, _)
    }, G.useTransition = function() {
        return V.H.useTransition()
    }, G.version = "19.1.0", G
}
var er;
function nc() {
    return er || (er = 1, uc.exports = qh()), uc.exports
}
var ec = {
        exports: {}
    },
    Ql = {};
var nr;
function Ch() {
    if (nr)
        return Ql;
    nr = 1;
    var A = nc();
    function il(U) {
        var T = "https://react.dev/errors/" + U;
        if (1 < arguments.length) {
            T += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var N = 2; N < arguments.length; N++)
                T += "&args[]=" + encodeURIComponent(arguments[N])
        }
        return "Minified React error #" + U + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function F() {}
    var g = {
            d: {
                f: F,
                r: function() {
                    throw Error(il(522))
                },
                D: F,
                C: F,
                L: F,
                m: F,
                X: F,
                S: F,
                M: F
            },
            p: 0,
            findDOMNode: null
        },
        X = Symbol.for("react.portal");
    function J(U, T, N) {
        var P = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: X,
            key: P == null ? null : "" + P,
            children: U,
            containerInfo: T,
            implementation: N
        }
    }
    var W = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function sl(U, T) {
        if (U === "font")
            return "";
        if (typeof T == "string")
            return T === "use-credentials" ? T : ""
    }
    return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = g, Ql.createPortal = function(U, T) {
        var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
            throw Error(il(299));
        return J(U, T, null, N)
    }, Ql.flushSync = function(U) {
        var T = W.T,
            N = g.p;
        try {
            if (W.T = null, g.p = 2, U)
                return U()
        } finally {
            W.T = T,
            g.p = N,
            g.d.f()
        }
    }, Ql.preconnect = function(U, T) {
        typeof U == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, g.d.C(U, T))
    }, Ql.prefetchDNS = function(U) {
        typeof U == "string" && g.d.D(U)
    }, Ql.preinit = function(U, T) {
        if (typeof U == "string" && T && typeof T.as == "string") {
            var N = T.as,
                P = sl(N, T.crossOrigin),
                al = typeof T.integrity == "string" ? T.integrity : void 0,
                Hl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
            N === "style" ? g.d.S(U, typeof T.precedence == "string" ? T.precedence : void 0, {
                crossOrigin: P,
                integrity: al,
                fetchPriority: Hl
            }) : N === "script" && g.d.X(U, {
                crossOrigin: P,
                integrity: al,
                fetchPriority: Hl,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0
            })
        }
    }, Ql.preinitModule = function(U, T) {
        if (typeof U == "string")
            if (typeof T == "object" && T !== null) {
                if (T.as == null || T.as === "script") {
                    var N = sl(T.as, T.crossOrigin);
                    g.d.M(U, {
                        crossOrigin: N,
                        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
                        nonce: typeof T.nonce == "string" ? T.nonce : void 0
                    })
                }
            } else
                T == null && g.d.M(U)
    }, Ql.preload = function(U, T) {
        if (typeof U == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
            var N = T.as,
                P = sl(N, T.crossOrigin);
            g.d.L(U, N, {
                crossOrigin: P,
                integrity: typeof T.integrity == "string" ? T.integrity : void 0,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                type: typeof T.type == "string" ? T.type : void 0,
                fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
                referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
                imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
                imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
                media: typeof T.media == "string" ? T.media : void 0
            })
        }
    }, Ql.preloadModule = function(U, T) {
        if (typeof U == "string")
            if (T) {
                var N = sl(T.as, T.crossOrigin);
                g.d.m(U, {
                    as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
                    crossOrigin: N,
                    integrity: typeof T.integrity == "string" ? T.integrity : void 0
                })
            } else
                g.d.m(U)
    }, Ql.requestFormReset = function(U) {
        g.d.r(U)
    }, Ql.unstable_batchedUpdates = function(U, T) {
        return U(T)
    }, Ql.useFormState = function(U, T, N) {
        return W.H.useFormState(U, T, N)
    }, Ql.useFormStatus = function() {
        return W.H.useHostTransitionStatus()
    }, Ql.version = "19.1.0", Ql
}
var ir;
function jh() {
    if (ir)
        return ec.exports;
    ir = 1;
    function A() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)
            } catch (il) {
                console.error(il)
            }
    }
    return A(), ec.exports = Ch(), ec.exports
}
var fr;
function Xh() {
    if (fr)
        return pe;
    fr = 1;
    var A = Yh(),
        il = nc(),
        F = jh();
    function g(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function X(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function J(l) {
        var t = l,
            a = l;
        if (l.alternate)
            for (; t.return;)
                t = t.return;
        else {
            l = t;
            do t = l,
            (t.flags & 4098) !== 0 && (a = t.return),
            l = t.return;
            while (l)
        }
        return t.tag === 3 ? a : null
    }
    function W(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null)
                return t.dehydrated
        }
        return null
    }
    function sl(l) {
        if (J(l) !== l)
            throw Error(g(188))
    }
    function U(l) {
        var t = l.alternate;
        if (!t) {
            if (t = J(l), t === null)
                throw Error(g(188));
            return t !== l ? null : l
        }
        for (var a = l, u = t;;) {
            var e = a.return;
            if (e === null)
                break;
            var n = e.alternate;
            if (n === null) {
                if (u = e.return, u !== null) {
                    a = u;
                    continue
                }
                break
            }
            if (e.child === n.child) {
                for (n = e.child; n;) {
                    if (n === a)
                        return sl(e), l;
                    if (n === u)
                        return sl(e), t;
                    n = n.sibling
                }
                throw Error(g(188))
            }
            if (a.return !== u.return)
                a = e,
                u = n;
            else {
                for (var i = !1, f = e.child; f;) {
                    if (f === a) {
                        i = !0,
                        a = e,
                        u = n;
                        break
                    }
                    if (f === u) {
                        i = !0,
                        u = e,
                        a = n;
                        break
                    }
                    f = f.sibling
                }
                if (!i) {
                    for (f = n.child; f;) {
                        if (f === a) {
                            i = !0,
                            a = n,
                            u = e;
                            break
                        }
                        if (f === u) {
                            i = !0,
                            u = n,
                            a = e;
                            break
                        }
                        f = f.sibling
                    }
                    if (!i)
                        throw Error(g(189))
                }
            }
            if (a.alternate !== u)
                throw Error(g(190))
        }
        if (a.tag !== 3)
            throw Error(g(188));
        return a.stateNode.current === a ? l : t
    }
    function T(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null;) {
            if (t = T(l), t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var N = Object.assign,
        P = Symbol.for("react.element"),
        al = Symbol.for("react.transitional.element"),
        Hl = Symbol.for("react.portal"),
        ml = Symbol.for("react.fragment"),
        Zl = Symbol.for("react.strict_mode"),
        Sl = Symbol.for("react.profiler"),
        gt = Symbol.for("react.provider"),
        $l = Symbol.for("react.consumer"),
        zl = Symbol.for("react.context"),
        Nl = Symbol.for("react.forward_ref"),
        V = Symbol.for("react.suspense"),
        Cl = Symbol.for("react.suspense_list"),
        xl = Symbol.for("react.memo"),
        jl = Symbol.for("react.lazy"),
        Ll = Symbol.for("react.activity"),
        xt = Symbol.for("react.memo_cache_sentinel"),
        mt = Symbol.iterator;
    function Ol(l) {
        return l === null || typeof l != "object" ? null : (l = mt && l[mt] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var Mt = Symbol.for("react.client.reference");
    function _t(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === Mt ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case ml:
            return "Fragment";
        case Sl:
            return "Profiler";
        case Zl:
            return "StrictMode";
        case V:
            return "Suspense";
        case Cl:
            return "SuspenseList";
        case Ll:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case Hl:
                return "Portal";
            case zl:
                return (l.displayName || "Context") + ".Provider";
            case $l:
                return (l._context.displayName || "Context") + ".Consumer";
            case Nl:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case xl:
                return t = l.displayName || null, t !== null ? t : _t(l.type) || "Memo";
            case jl:
                t = l._payload,
                l = l._init;
                try {
                    return _t(l(t))
                } catch {}
            }
        return null
    }
    var Dl = Array.isArray,
        m = il.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        D = F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        E = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        z = [],
        s = -1;
    function x(l) {
        return {
            current: l
        }
    }
    function _(l) {
        0 > s || (l.current = z[s], z[s] = null, s--)
    }
    function M(l, t) {
        s++,
        z[s] = l.current,
        l.current = t
    }
    var B = x(null),
        $ = x(null),
        j = x(null),
        kl = x(null);
    function ol(l, t) {
        switch (M(j, t), M($, l), M(B, null), t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Do(l) : 0;
            break;
        default:
            if (l = t.tagName, t = t.namespaceURI)
                t = Do(t),
                l = Mo(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        _(B),
        M(B, l)
    }
    function Kt() {
        _(B),
        _($),
        _(j)
    }
    function Cn(l) {
        l.memoizedState !== null && M(kl, l);
        var t = B.current,
            a = Mo(t, l.type);
        t !== a && (M($, l), M(B, a))
    }
    function xe(l) {
        $.current === l && (_(B), _($)),
        kl.current === l && (_(kl), he._currentValue = E)
    }
    var jn = Object.prototype.hasOwnProperty,
        Xn = A.unstable_scheduleCallback,
        Gn = A.unstable_cancelCallback,
        or = A.unstable_shouldYield,
        rr = A.unstable_requestPaint,
        Et = A.unstable_now,
        dr = A.unstable_getCurrentPriorityLevel,
        ic = A.unstable_ImmediatePriority,
        fc = A.unstable_UserBlockingPriority,
        Ee = A.unstable_NormalPriority,
        hr = A.unstable_LowPriority,
        cc = A.unstable_IdlePriority,
        yr = A.log,
        vr = A.unstable_setDisableYieldValue,
        xu = null,
        Il = null;
    function Jt(l) {
        if (typeof yr == "function" && vr(l), Il && typeof Il.setStrictMode == "function")
            try {
                Il.setStrictMode(xu, l)
            } catch {}
    }
    var Pl = Math.clz32 ? Math.clz32 : br,
        gr = Math.log,
        mr = Math.LN2;
    function br(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (gr(l) / mr | 0) | 0
    }
    var Te = 256,
        Ae = 4194304;
    function ma(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }
    function ze(l, t, a) {
        var u = l.pendingLanes;
        if (u === 0)
            return 0;
        var e = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var f = u & 134217727;
        return f !== 0 ? (u = f & ~n, u !== 0 ? e = ma(u) : (i &= f, i !== 0 ? e = ma(i) : a || (a = f & ~l, a !== 0 && (e = ma(a))))) : (f = u & ~n, f !== 0 ? e = ma(f) : i !== 0 ? e = ma(i) : a || (a = u & ~l, a !== 0 && (e = ma(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e
    }
    function Eu(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function pr(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function sc() {
        var l = Te;
        return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l
    }
    function oc() {
        var l = Ae;
        return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l
    }
    function Qn(l) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(l);
        return t
    }
    function Tu(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }
    function Sr(l, t, a, u, e, n) {
        var i = l.pendingLanes;
        l.pendingLanes = a,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= a,
        l.entangledLanes &= a,
        l.errorRecoveryDisabledLanes &= a,
        l.shellSuspendCounter = 0;
        var f = l.entanglements,
            c = l.expirationTimes,
            h = l.hiddenUpdates;
        for (a = i & ~a; 0 < a;) {
            var b = 31 - Pl(a),
                S = 1 << b;
            f[b] = 0,
            c[b] = -1;
            var y = h[b];
            if (y !== null)
                for (h[b] = null, b = 0; b < y.length; b++) {
                    var v = y[b];
                    v !== null && (v.lane &= -536870913)
                }
            a &= ~S
        }
        u !== 0 && rc(l, u, 0),
        n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }
    function rc(l, t, a) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var u = 31 - Pl(t);
        l.entangledLanes |= t,
        l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090
    }
    function dc(l, t) {
        var a = l.entangledLanes |= t;
        for (l = l.entanglements; a;) {
            var u = 31 - Pl(a),
                e = 1 << u;
            e & t | l[u] & t && (l[u] |= t),
            a &= ~e
        }
    }
    function Zn(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function Vn(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function hc() {
        var l = D.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : wo(l.type))
    }
    function xr(l, t) {
        var a = D.p;
        try {
            return D.p = l, t()
        } finally {
            D.p = a
        }
    }
    var wt = Math.random().toString(36).slice(2),
        Xl = "__reactFiber$" + wt,
        Kl = "__reactProps$" + wt,
        qa = "__reactContainer$" + wt,
        Ln = "__reactEvents$" + wt,
        Er = "__reactListeners$" + wt,
        Tr = "__reactHandles$" + wt,
        yc = "__reactResources$" + wt,
        Au = "__reactMarker$" + wt;
    function Kn(l) {
        delete l[Xl],
        delete l[Kl],
        delete l[Ln],
        delete l[Er],
        delete l[Tr]
    }
    function Ca(l) {
        var t = l[Xl];
        if (t)
            return t;
        for (var a = l.parentNode; a;) {
            if (t = a[qa] || a[Xl]) {
                if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                    for (l = Ho(l); l !== null;) {
                        if (a = l[Xl])
                            return a;
                        l = Ho(l)
                    }
                return t
            }
            l = a,
            a = l.parentNode
        }
        return null
    }
    function ja(l) {
        if (l = l[Xl] || l[qa]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function zu(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(g(33))
    }
    function Xa(l) {
        var t = l[yc];
        return t || (t = l[yc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }
    function Ml(l) {
        l[Au] = !0
    }
    var vc = new Set,
        gc = {};
    function ba(l, t) {
        Ga(l, t),
        Ga(l + "Capture", t)
    }
    function Ga(l, t) {
        for (gc[l] = t, l = 0; l < t.length; l++)
            vc.add(t[l])
    }
    var Ar = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        mc = {},
        bc = {};
    function zr(l) {
        return jn.call(bc, l) ? !0 : jn.call(mc, l) ? !1 : Ar.test(l) ? bc[l] = !0 : (mc[l] = !0, !1)
    }
    function Oe(l, t, a) {
        if (zr(t))
            if (a === null)
                l.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var u = t.toLowerCase().slice(0, 5);
                    if (u !== "data-" && u !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + a)
            }
    }
    function De(l, t, a) {
        if (a === null)
            l.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + a)
        }
    }
    function Rt(l, t, a, u) {
        if (u === null)
            l.removeAttribute(a);
        else {
            switch (typeof u) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(a);
                return
            }
            l.setAttributeNS(t, a, "" + u)
        }
    }
    var Jn,
        pc;
    function Qa(l) {
        if (Jn === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Jn = t && t[1] || "",
                pc = -1 < a.stack.indexOf(`
    at`
                ) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
`
        + Jn + l + pc
    }
    var wn = !1;
    function Fn(l, t) {
        if (!l || wn)
            return "";
        wn = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var u = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var S = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(S.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(S, [])
                                } catch (v) {
                                    var y = v
                                }
                                Reflect.construct(l, [], S)
                            } else {
                                try {
                                    S.call()
                                } catch (v) {
                                    y = v
                                }
                                l.call(S.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (v) {
                                y = v
                            }
                            (S = l()) && typeof S.catch == "function" && S.catch(function() {})
                        }
                    } catch (v) {
                        if (v && y && typeof v.stack == "string")
                            return [v.stack, y.stack]
                    }
                    return [null, null]
                }
            };
            u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
            e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = u.DetermineComponentFrameRoot(),
                i = n[0],
                f = n[1];
            if (i && f) {
                var c = i.split(`
`
                    ),
                    h = f.split(`
`
                    );
                for (e = u = 0; u < c.length && !c[u].includes("DetermineComponentFrameRoot");)
                    u++;
                for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot");)
                    e++;
                if (u === c.length || e === h.length)
                    for (u = c.length - 1, e = h.length - 1; 1 <= u && 0 <= e && c[u] !== h[e];)
                        e--;
                for (; 1 <= u && 0 <= e; u--, e--)
                    if (c[u] !== h[e]) {
                        if (u !== 1 || e !== 1)
                            do if (u--, e--, 0 > e || c[u] !== h[e]) {
                                var b = `
`
                                + c[u].replace(" at new ", " at ");
                                return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b
                            }
                            while (1 <= u && 0 <= e);
                        break
                    }
            }
        } finally {
            wn = !1,
            Error.prepareStackTrace = a
        }
        return (a = l ? l.displayName || l.name : "") ? Qa(a) : ""
    }
    function Or(l) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Qa(l.type);
        case 16:
            return Qa("Lazy");
        case 13:
            return Qa("Suspense");
        case 19:
            return Qa("SuspenseList");
        case 0:
        case 15:
            return Fn(l.type, !1);
        case 11:
            return Fn(l.type.render, !1);
        case 1:
            return Fn(l.type, !0);
        case 31:
            return Qa("Activity");
        default:
            return ""
        }
    }
    function Sc(l) {
        try {
            var t = "";
            do t += Or(l),
            l = l.return;
            while (l);
            return t
        } catch (a) {
            return `
Error generating stack: `
            + a.message + `
`
            + a.stack
        }
    }
    function ft(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function xc(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Dr(l) {
        var t = xc(l) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
            u = "" + l[t];
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var e = a.get,
                n = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return e.call(this)
                },
                set: function(i) {
                    u = "" + i,
                    n.call(this, i)
                }
            }), Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return u
                },
                setValue: function(i) {
                    u = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function Me(l) {
        l._valueTracker || (l._valueTracker = Dr(l))
    }
    function Ec(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue(),
            u = "";
        return l && (u = xc(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1
    }
    function _e(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var Mr = /[\n"\\]/g;
    function ct(l) {
        return l.replace(Mr, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Wn(l, t, a, u, e, n, i, f) {
        l.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"),
        t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"),
        t != null ? $n(l, i, ft(t)) : a != null ? $n(l, i, ft(a)) : u != null && l.removeAttribute("value"),
        e == null && n != null && (l.defaultChecked = !!n),
        e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"),
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + ft(f) : l.removeAttribute("name")
    }
    function Tc(l, t, a, u, e, n, i, f) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
            if (!(n !== "submit" && n !== "reset" || t != null))
                return;
            a = a != null ? "" + ft(a) : "",
            t = t != null ? "" + ft(t) : a,
            f || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        u = u ?? e,
        u = typeof u != "function" && typeof u != "symbol" && !!u,
        l.checked = f ? l.checked : !!u,
        l.defaultChecked = !!u,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i)
    }
    function $n(l, t, a) {
        t === "number" && _e(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a)
    }
    function Za(l, t, a, u) {
        if (l = l.options, t) {
            t = {};
            for (var e = 0; e < a.length; e++)
                t["$" + a[e]] = !0;
            for (a = 0; a < l.length; a++)
                e = t.hasOwnProperty("$" + l[a].value),
                l[a].selected !== e && (l[a].selected = e),
                e && u && (l[a].defaultSelected = !0)
        } else {
            for (a = "" + ft(a), t = null, e = 0; e < l.length; e++) {
                if (l[e].value === a) {
                    l[e].selected = !0,
                    u && (l[e].defaultSelected = !0);
                    return
                }
                t !== null || l[e].disabled || (t = l[e])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Ac(l, t, a) {
        if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), a == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = a != null ? "" + ft(a) : ""
    }
    function zc(l, t, a, u) {
        if (t == null) {
            if (u != null) {
                if (a != null)
                    throw Error(g(92));
                if (Dl(u)) {
                    if (1 < u.length)
                        throw Error(g(93));
                    u = u[0]
                }
                a = u
            }
            a == null && (a = ""),
            t = a
        }
        a = ft(t),
        l.defaultValue = a,
        u = l.textContent,
        u === a && u !== "" && u !== null && (l.value = u)
    }
    function Va(l, t) {
        if (t) {
            var a = l.firstChild;
            if (a && a === l.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var _r = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Oc(l, t, a) {
        var u = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || _r.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px"
    }
    function Dc(l, t, a) {
        if (t != null && typeof t != "object")
            throw Error(g(62));
        if (l = l.style, a != null) {
            for (var u in a)
                !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
            for (var e in t)
                u = t[e],
                t.hasOwnProperty(e) && a[e] !== u && Oc(l, e, u)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && Oc(l, n, t[n])
    }
    function kn(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Rr = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
        Ur = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Re(l) {
        return Ur.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    var In = null;
    function Pn(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var La = null,
        Ka = null;
    function Mc(l) {
        var t = ja(l);
        if (t && (l = t.stateNode)) {
            var a = l[Kl] || null;
            l:
            switch (l = t.stateNode, t.type) {
            case "input":
                if (Wn(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                    for (a = l; a.parentNode;)
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + ct("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                        var u = a[t];
                        if (u !== l && u.form === l.form) {
                            var e = u[Kl] || null;
                            if (!e)
                                throw Error(g(90));
                            Wn(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        u = a[t],
                        u.form === l.form && Ec(u)
                }
                break l;
            case "textarea":
                Ac(l, a.value, a.defaultValue);
                break l;
            case "select":
                t = a.value,
                t != null && Za(l, !!a.multiple, t, !1)
            }
        }
    }
    var li = !1;
    function _c(l, t, a) {
        if (li)
            return l(t, a);
        li = !0;
        try {
            var u = l(t);
            return u
        } finally {
            if (li = !1, (La !== null || Ka !== null) && (gn(), La && (t = La, l = Ka, Ka = La = null, Mc(t), l)))
                for (t = 0; t < l.length; t++)
                    Mc(l[t])
        }
    }
    function Ou(l, t) {
        var a = l.stateNode;
        if (a === null)
            return null;
        var u = a[Kl] || null;
        if (u === null)
            return null;
        a = u[t];
        l:
        switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !u;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (a && typeof a != "function")
            throw Error(g(231, t, typeof a));
        return a
    }
    var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        ti = !1;
    if (Ut)
        try {
            var Du = {};
            Object.defineProperty(Du, "passive", {
                get: function() {
                    ti = !0
                }
            }),
            window.addEventListener("test", Du, Du),
            window.removeEventListener("test", Du, Du)
        } catch {
            ti = !1
        }
    var Ft = null,
        ai = null,
        Ue = null;
    function Rc() {
        if (Ue)
            return Ue;
        var l,
            t = ai,
            a = t.length,
            u,
            e = "value" in Ft ? Ft.value : Ft.textContent,
            n = e.length;
        for (l = 0; l < a && t[l] === e[l]; l++)
            ;
        var i = a - l;
        for (u = 1; u <= i && t[a - u] === e[n - u]; u++)
            ;
        return Ue = e.slice(l, 1 < u ? 1 - u : void 0)
    }
    function He(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }
    function Ne() {
        return !0
    }
    function Uc() {
        return !1
    }
    function Jl(l) {
        function t(a, u, e, n, i) {
            this._reactName = a,
            this._targetInst = e,
            this.type = u,
            this.nativeEvent = n,
            this.target = i,
            this.currentTarget = null;
            for (var f in l)
                l.hasOwnProperty(f) && (a = l[f], this[f] = a ? a(n) : n[f]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Uc, this.isPropagationStopped = Uc, this
        }
        return N(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ne)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ne)
            },
            persist: function() {},
            isPersistent: Ne
        }), t
    }
    var pa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Be = Jl(pa),
        Mu = N({}, pa, {
            view: 0,
            detail: 0
        }),
        Hr = Jl(Mu),
        ui,
        ei,
        _u,
        Ye = N({}, Mu, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ii,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== _u && (_u && l.type === "mousemove" ? (ui = l.screenX - _u.screenX, ei = l.screenY - _u.screenY) : ei = ui = 0, _u = l), ui)
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : ei
            }
        }),
        Hc = Jl(Ye),
        Nr = N({}, Ye, {
            dataTransfer: 0
        }),
        Br = Jl(Nr),
        Yr = N({}, Mu, {
            relatedTarget: 0
        }),
        ni = Jl(Yr),
        qr = N({}, pa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Cr = Jl(qr),
        jr = N({}, pa, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        Xr = Jl(jr),
        Gr = N({}, pa, {
            data: 0
        }),
        Nc = Jl(Gr),
        Qr = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Zr = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Vr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
    function Lr(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = Vr[l]) ? !!t[l] : !1
    }
    function ii() {
        return Lr
    }
    var Kr = N({}, Mu, {
            key: function(l) {
                if (l.key) {
                    var t = Qr[l.key] || l.key;
                    if (t !== "Unidentified")
                        return t
                }
                return l.type === "keypress" ? (l = He(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Zr[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ii,
            charCode: function(l) {
                return l.type === "keypress" ? He(l) : 0
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function(l) {
                return l.type === "keypress" ? He(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        Jr = Jl(Kr),
        wr = N({}, Ye, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Bc = Jl(wr),
        Fr = N({}, Mu, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ii
        }),
        Wr = Jl(Fr),
        $r = N({}, pa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        kr = Jl($r),
        Ir = N({}, Ye, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Pr = Jl(Ir),
        ld = N({}, pa, {
            newState: 0,
            oldState: 0
        }),
        td = Jl(ld),
        ad = [9, 13, 27, 32],
        fi = Ut && "CompositionEvent" in window,
        Ru = null;
    Ut && "documentMode" in document && (Ru = document.documentMode);
    var ud = Ut && "TextEvent" in window && !Ru,
        Yc = Ut && (!fi || Ru && 8 < Ru && 11 >= Ru),
        qc = " ",
        Cc = !1;
    function jc(l, t) {
        switch (l) {
        case "keyup":
            return ad.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Xc(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var Ja = !1;
    function ed(l, t) {
        switch (l) {
        case "compositionend":
            return Xc(t);
        case "keypress":
            return t.which !== 32 ? null : (Cc = !0, qc);
        case "textInput":
            return l = t.data, l === qc && Cc ? null : l;
        default:
            return null
        }
    }
    function nd(l, t) {
        if (Ja)
            return l === "compositionend" || !fi && jc(l, t) ? (l = Rc(), Ue = ai = Ft = null, Ja = !1, l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Yc && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var id = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Gc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!id[l.type] : t === "textarea"
    }
    function Qc(l, t, a, u) {
        La ? Ka ? Ka.push(u) : Ka = [u] : La = u,
        t = En(t, "onChange"),
        0 < t.length && (a = new Be("onChange", "change", null, a, u), l.push({
            event: a,
            listeners: t
        }))
    }
    var Uu = null,
        Hu = null;
    function fd(l) {
        Eo(l, 0)
    }
    function qe(l) {
        var t = zu(l);
        if (Ec(t))
            return l
    }
    function Zc(l, t) {
        if (l === "change")
            return t
    }
    var Vc = !1;
    if (Ut) {
        var ci;
        if (Ut) {
            var si = "oninput" in document;
            if (!si) {
                var Lc = document.createElement("div");
                Lc.setAttribute("oninput", "return;"),
                si = typeof Lc.oninput == "function"
            }
            ci = si
        } else
            ci = !1;
        Vc = ci && (!document.documentMode || 9 < document.documentMode)
    }
    function Kc() {
        Uu && (Uu.detachEvent("onpropertychange", Jc), Hu = Uu = null)
    }
    function Jc(l) {
        if (l.propertyName === "value" && qe(Hu)) {
            var t = [];
            Qc(t, Hu, l, Pn(l)),
            _c(fd, t)
        }
    }
    function cd(l, t, a) {
        l === "focusin" ? (Kc(), Uu = t, Hu = a, Uu.attachEvent("onpropertychange", Jc)) : l === "focusout" && Kc()
    }
    function sd(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return qe(Hu)
    }
    function od(l, t) {
        if (l === "click")
            return qe(t)
    }
    function rd(l, t) {
        if (l === "input" || l === "change")
            return qe(t)
    }
    function dd(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var lt = typeof Object.is == "function" ? Object.is : dd;
    function Nu(l, t) {
        if (lt(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(l),
            u = Object.keys(t);
        if (a.length !== u.length)
            return !1;
        for (u = 0; u < a.length; u++) {
            var e = a[u];
            if (!jn.call(t, e) || !lt(l[e], t[e]))
                return !1
        }
        return !0
    }
    function wc(l) {
        for (; l && l.firstChild;)
            l = l.firstChild;
        return l
    }
    function Fc(l, t) {
        var a = wc(l);
        l = 0;
        for (var u; a;) {
            if (a.nodeType === 3) {
                if (u = l + a.textContent.length, l <= t && u >= t)
                    return {
                        node: a,
                        offset: t - l
                    };
                l = u
            }
            l:
            {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break l
                    }
                    a = a.parentNode
                }
                a = void 0
            }a = wc(a)
        }
    }
    function Wc(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wc(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function $c(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = _e(l.document); t instanceof l.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                l = t.contentWindow;
            else
                break;
            t = _e(l.document)
        }
        return t
    }
    function oi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var hd = Ut && "documentMode" in document && 11 >= document.documentMode,
        wa = null,
        ri = null,
        Bu = null,
        di = !1;
    function kc(l, t, a) {
        var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        di || wa == null || wa !== _e(u) || (u = wa, "selectionStart" in u && oi(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }), Bu && Nu(Bu, u) || (Bu = u, u = En(ri, "onSelect"), 0 < u.length && (t = new Be("onSelect", "select", null, t, a), l.push({
            event: t,
            listeners: u
        }), t.target = wa)))
    }
    function Sa(l, t) {
        var a = {};
        return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a
    }
    var Fa = {
            animationend: Sa("Animation", "AnimationEnd"),
            animationiteration: Sa("Animation", "AnimationIteration"),
            animationstart: Sa("Animation", "AnimationStart"),
            transitionrun: Sa("Transition", "TransitionRun"),
            transitionstart: Sa("Transition", "TransitionStart"),
            transitioncancel: Sa("Transition", "TransitionCancel"),
            transitionend: Sa("Transition", "TransitionEnd")
        },
        hi = {},
        Ic = {};
    Ut && (Ic = document.createElement("div").style, "AnimationEvent" in window || (delete Fa.animationend.animation, delete Fa.animationiteration.animation, delete Fa.animationstart.animation), "TransitionEvent" in window || delete Fa.transitionend.transition);
    function xa(l) {
        if (hi[l])
            return hi[l];
        if (!Fa[l])
            return l;
        var t = Fa[l],
            a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Ic)
                return hi[l] = t[a];
        return l
    }
    var Pc = xa("animationend"),
        ls = xa("animationiteration"),
        ts = xa("animationstart"),
        yd = xa("transitionrun"),
        vd = xa("transitionstart"),
        gd = xa("transitioncancel"),
        as = xa("transitionend"),
        us = new Map,
        yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    yi.push("scrollEnd");
    function bt(l, t) {
        us.set(l, t),
        ba(t, [l])
    }
    var es = new WeakMap;
    function st(l, t) {
        if (typeof l == "object" && l !== null) {
            var a = es.get(l);
            return a !== void 0 ? a : (t = {
                value: l,
                source: t,
                stack: Sc(t)
            }, es.set(l, t), t)
        }
        return {
            value: l,
            source: t,
            stack: Sc(t)
        }
    }
    var ot = [],
        Wa = 0,
        vi = 0;
    function Ce() {
        for (var l = Wa, t = vi = Wa = 0; t < l;) {
            var a = ot[t];
            ot[t++] = null;
            var u = ot[t];
            ot[t++] = null;
            var e = ot[t];
            ot[t++] = null;
            var n = ot[t];
            if (ot[t++] = null, u !== null && e !== null) {
                var i = u.pending;
                i === null ? e.next = e : (e.next = i.next, i.next = e),
                u.pending = e
            }
            n !== 0 && ns(a, e, n)
        }
    }
    function je(l, t, a, u) {
        ot[Wa++] = l,
        ot[Wa++] = t,
        ot[Wa++] = a,
        ot[Wa++] = u,
        vi |= u,
        l.lanes |= u,
        l = l.alternate,
        l !== null && (l.lanes |= u)
    }
    function gi(l, t, a, u) {
        return je(l, t, a, u), Xe(l)
    }
    function $a(l, t) {
        return je(l, null, null, t), Xe(l)
    }
    function ns(l, t, a) {
        l.lanes |= a;
        var u = l.alternate;
        u !== null && (u.lanes |= a);
        for (var e = !1, n = l.return; n !== null;)
            n.childLanes |= a,
            u = n.alternate,
            u !== null && (u.childLanes |= a),
            n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Pl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null
    }
    function Xe(l) {
        if (50 < ne)
            throw ne = 0, Tf = null, Error(g(185));
        for (var t = l.return; t !== null;)
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var ka = {};
    function md(l, t, a, u) {
        this.tag = l,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = u,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function tt(l, t, a, u) {
        return new md(l, t, a, u)
    }
    function mi(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }
    function Ht(l, t) {
        var a = l.alternate;
        return a === null ? (a = tt(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a
    }
    function is(l, t) {
        l.flags &= 65011714;
        var a = l.alternate;
        return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }
    function Ge(l, t, a, u, e, n) {
        var i = 0;
        if (u = l, typeof l == "function")
            mi(l) && (i = 1);
        else if (typeof l == "string")
            i = ph(l, a, B.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l:
            switch (l) {
            case Ll:
                return l = tt(31, a, t, e), l.elementType = Ll, l.lanes = n, l;
            case ml:
                return Ea(a.children, e, n, t);
            case Zl:
                i = 8,
                e |= 24;
                break;
            case Sl:
                return l = tt(12, a, t, e | 2), l.elementType = Sl, l.lanes = n, l;
            case V:
                return l = tt(13, a, t, e), l.elementType = V, l.lanes = n, l;
            case Cl:
                return l = tt(19, a, t, e), l.elementType = Cl, l.lanes = n, l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case gt:
                    case zl:
                        i = 10;
                        break l;
                    case $l:
                        i = 9;
                        break l;
                    case Nl:
                        i = 11;
                        break l;
                    case xl:
                        i = 14;
                        break l;
                    case jl:
                        i = 16,
                        u = null;
                        break l
                    }
                i = 29,
                a = Error(g(130, l === null ? "null" : typeof l, "")),
                u = null
            }
        return t = tt(i, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t
    }
    function Ea(l, t, a, u) {
        return l = tt(7, l, u, t), l.lanes = a, l
    }
    function bi(l, t, a) {
        return l = tt(6, l, null, t), l.lanes = a, l
    }
    function pi(l, t, a) {
        return t = tt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }
    var Ia = [],
        Pa = 0,
        Qe = null,
        Ze = 0,
        rt = [],
        dt = 0,
        Ta = null,
        Nt = 1,
        Bt = "";
    function Aa(l, t) {
        Ia[Pa++] = Ze,
        Ia[Pa++] = Qe,
        Qe = l,
        Ze = t
    }
    function fs(l, t, a) {
        rt[dt++] = Nt,
        rt[dt++] = Bt,
        rt[dt++] = Ta,
        Ta = l;
        var u = Nt;
        l = Bt;
        var e = 32 - Pl(u) - 1;
        u &= ~(1 << e),
        a += 1;
        var n = 32 - Pl(t) + e;
        if (30 < n) {
            var i = e - e % 5;
            n = (u & (1 << i) - 1).toString(32),
            u >>= i,
            e -= i,
            Nt = 1 << 32 - Pl(t) + e | a << e | u,
            Bt = n + l
        } else
            Nt = 1 << n | a << e | u,
            Bt = l
    }
    function Si(l) {
        l.return !== null && (Aa(l, 1), fs(l, 1, 0))
    }
    function xi(l) {
        for (; l === Qe;)
            Qe = Ia[--Pa],
            Ia[Pa] = null,
            Ze = Ia[--Pa],
            Ia[Pa] = null;
        for (; l === Ta;)
            Ta = rt[--dt],
            rt[dt] = null,
            Bt = rt[--dt],
            rt[dt] = null,
            Nt = rt[--dt],
            rt[dt] = null
    }
    var Vl = null,
        hl = null,
        I = !1,
        za = null,
        Tt = !1,
        Ei = Error(g(519));
    function Oa(l) {
        var t = Error(g(418, ""));
        throw Cu(st(t, l)), Ei
    }
    function cs(l) {
        var t = l.stateNode,
            a = l.type,
            u = l.memoizedProps;
        switch (t[Xl] = l, t[Kl] = u, a) {
        case "dialog":
            K("cancel", t),
            K("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            K("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < fe.length; a++)
                K(fe[a], t);
            break;
        case "source":
            K("error", t);
            break;
        case "img":
        case "image":
        case "link":
            K("error", t),
            K("load", t);
            break;
        case "details":
            K("toggle", t);
            break;
        case "input":
            K("invalid", t),
            Tc(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0),
            Me(t);
            break;
        case "select":
            K("invalid", t);
            break;
        case "textarea":
            K("invalid", t),
            zc(t, u.value, u.defaultValue, u.children),
            Me(t)
        }
        a = u.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Oo(t.textContent, a) ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)), u.onScroll != null && K("scroll", t), u.onScrollEnd != null && K("scrollend", t), u.onClick != null && (t.onclick = Tn), t = !0) : t = !1,
        t || Oa(l)
    }
    function ss(l) {
        for (Vl = l.return; Vl;)
            switch (Vl.tag) {
            case 5:
            case 13:
                Tt = !1;
                return;
            case 27:
            case 3:
                Tt = !0;
                return;
            default:
                Vl = Vl.return
            }
    }
    function Yu(l) {
        if (l !== Vl)
            return !1;
        if (!I)
            return ss(l), I = !0, !1;
        var t = l.tag,
            a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Xf(l.type, l.memoizedProps)), a = !a), a && hl && Oa(l), ss(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                throw Error(g(317));
            l:
            {
                for (l = l.nextSibling, t = 0; l;) {
                    if (l.nodeType === 8)
                        if (a = l.data, a === "/$") {
                            if (t === 0) {
                                hl = St(l.nextSibling);
                                break l
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    l = l.nextSibling
                }
                hl = null
            }
        } else
            t === 27 ? (t = hl, oa(l.type) ? (l = Vf, Vf = null, hl = l) : hl = t) : hl = Vl ? St(l.stateNode.nextSibling) : null;
        return !0
    }
    function qu() {
        hl = Vl = null,
        I = !1
    }
    function os() {
        var l = za;
        return l !== null && (Wl === null ? Wl = l : Wl.push.apply(Wl, l), za = null), l
    }
    function Cu(l) {
        za === null ? za = [l] : za.push(l)
    }
    var Ti = x(null),
        Da = null,
        Yt = null;
    function Wt(l, t, a) {
        M(Ti, t._currentValue),
        t._currentValue = a
    }
    function qt(l) {
        l._currentValue = Ti.current,
        _(Ti)
    }
    function Ai(l, t, a) {
        for (; l !== null;) {
            var u = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a)
                break;
            l = l.return
        }
    }
    function zi(l, t, a, u) {
        var e = l.child;
        for (e !== null && (e.return = l); e !== null;) {
            var n = e.dependencies;
            if (n !== null) {
                var i = e.child;
                n = n.firstContext;
                l:
                for (; n !== null;) {
                    var f = n;
                    n = e;
                    for (var c = 0; c < t.length; c++)
                        if (f.context === t[c]) {
                            n.lanes |= a,
                            f = n.alternate,
                            f !== null && (f.lanes |= a),
                            Ai(n.return, a, l),
                            u || (i = null);
                            break l
                        }
                    n = f.next
                }
            } else if (e.tag === 18) {
                if (i = e.return, i === null)
                    throw Error(g(341));
                i.lanes |= a,
                n = i.alternate,
                n !== null && (n.lanes |= a),
                Ai(i, a, l),
                i = null
            } else
                i = e.child;
            if (i !== null)
                i.return = e;
            else
                for (i = e; i !== null;) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (e = i.sibling, e !== null) {
                        e.return = i.return,
                        i = e;
                        break
                    }
                    i = i.return
                }
            e = i
        }
    }
    function ju(l, t, a, u) {
        l = null;
        for (var e = t, n = !1; e !== null;) {
            if (!n) {
                if ((e.flags & 524288) !== 0)
                    n = !0;
                else if ((e.flags & 262144) !== 0)
                    break
            }
            if (e.tag === 10) {
                var i = e.alternate;
                if (i === null)
                    throw Error(g(387));
                if (i = i.memoizedProps, i !== null) {
                    var f = e.type;
                    lt(e.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [f])
                }
            } else if (e === kl.current) {
                if (i = e.alternate, i === null)
                    throw Error(g(387));
                i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he])
            }
            e = e.return
        }
        l !== null && zi(t, l, a, u),
        t.flags |= 262144
    }
    function Ve(l) {
        for (l = l.firstContext; l !== null;) {
            if (!lt(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Ma(l) {
        Da = l,
        Yt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function Gl(l) {
        return rs(Da, l)
    }
    function Le(l, t) {
        return Da === null && Ma(l), rs(l, t)
    }
    function rs(l, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        }, Yt === null) {
            if (l === null)
                throw Error(g(308));
            Yt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Yt = Yt.next = t;
        return a
    }
    var bd = typeof AbortController < "u" ? AbortController : function() {
            var l = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, u) {
                        l.push(u)
                    }
                };
            this.abort = function() {
                t.aborted = !0,
                l.forEach(function(a) {
                    return a()
                })
            }
        },
        pd = A.unstable_scheduleCallback,
        Sd = A.unstable_NormalPriority,
        El = {
            $$typeof: zl,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
    function Oi() {
        return {
            controller: new bd,
            data: new Map,
            refCount: 0
        }
    }
    function Xu(l) {
        l.refCount--,
        l.refCount === 0 && pd(Sd, function() {
            l.controller.abort()
        })
    }
    var Gu = null,
        Di = 0,
        lu = 0,
        tu = null;
    function xd(l, t) {
        if (Gu === null) {
            var a = Gu = [];
            Di = 0,
            lu = Rf(),
            tu = {
                status: "pending",
                value: void 0,
                then: function(u) {
                    a.push(u)
                }
            }
        }
        return Di++, t.then(ds, ds), t
    }
    function ds() {
        if (--Di === 0 && Gu !== null) {
            tu !== null && (tu.status = "fulfilled");
            var l = Gu;
            Gu = null,
            lu = 0,
            tu = null;
            for (var t = 0; t < l.length; t++)
                (0, l[t])()
        }
    }
    function Ed(l, t) {
        var a = [],
            u = {
                status: "pending",
                value: null,
                reason: null,
                then: function(e) {
                    a.push(e)
                }
            };
        return l.then(function() {
            u.status = "fulfilled",
            u.value = t;
            for (var e = 0; e < a.length; e++)
                (0, a[e])(t)
        }, function(e) {
            for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
                (0, a[e])(void 0)
        }), u
    }
    var hs = m.S;
    m.S = function(l, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && xd(l, t),
        hs !== null && hs(l, t)
    };
    var _a = x(null);
    function Mi() {
        var l = _a.current;
        return l !== null ? l : cl.pooledCache
    }
    function Ke(l, t) {
        t === null ? M(_a, _a.current) : M(_a, t.pool)
    }
    function ys() {
        var l = Mi();
        return l === null ? null : {
            parent: El._currentValue,
            pool: l
        }
    }
    var Qu = Error(g(460)),
        vs = Error(g(474)),
        Je = Error(g(542)),
        _i = {
            then: function() {}
        };
    function gs(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }
    function we() {}
    function ms(l, t, a) {
        switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(we, we), t = a), t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason, ps(l), l;
        default:
            if (typeof t.status == "string")
                t.then(we, we);
            else {
                if (l = cl, l !== null && 100 < l.shellSuspendCounter)
                    throw Error(g(482));
                l = t,
                l.status = "pending",
                l.then(function(u) {
                    if (t.status === "pending") {
                        var e = t;
                        e.status = "fulfilled",
                        e.value = u
                    }
                }, function(u) {
                    if (t.status === "pending") {
                        var e = t;
                        e.status = "rejected",
                        e.reason = u
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason, ps(l), l
            }
            throw Zu = t, Qu
        }
    }
    var Zu = null;
    function bs() {
        if (Zu === null)
            throw Error(g(459));
        var l = Zu;
        return Zu = null, l
    }
    function ps(l) {
        if (l === Qu || l === Je)
            throw Error(g(483))
    }
    var $t = !1;
    function Ri(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Ui(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function kt(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function It(l, t, a) {
        var u = l.updateQueue;
        if (u === null)
            return null;
        if (u = u.shared, (ll & 2) !== 0) {
            var e = u.pending;
            return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Xe(l), ns(l, null, a), t
        }
        return je(l, u, t, a), Xe(l)
    }
    function Vu(l, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
            var u = t.lanes;
            u &= l.pendingLanes,
            a |= u,
            t.lanes = a,
            dc(l, a)
        }
    }
    function Hi(l, t) {
        var a = l.updateQueue,
            u = l.alternate;
        if (u !== null && (u = u.updateQueue, a === u)) {
            var e = null,
                n = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var i = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? e = n = i : n = n.next = i,
                    a = a.next
                } while (a !== null);
                n === null ? e = n = t : n = n.next = t
            } else
                e = n = t;
            a = {
                baseState: u.baseState,
                firstBaseUpdate: e,
                lastBaseUpdate: n,
                shared: u.shared,
                callbacks: u.callbacks
            },
            l.updateQueue = a;
            return
        }
        l = a.lastBaseUpdate,
        l === null ? a.firstBaseUpdate = t : l.next = t,
        a.lastBaseUpdate = t
    }
    var Ni = !1;
    function Lu() {
        if (Ni) {
            var l = tu;
            if (l !== null)
                throw l
        }
    }
    function Ku(l, t, a, u) {
        Ni = !1;
        var e = l.updateQueue;
        $t = !1;
        var n = e.firstBaseUpdate,
            i = e.lastBaseUpdate,
            f = e.shared.pending;
        if (f !== null) {
            e.shared.pending = null;
            var c = f,
                h = c.next;
            c.next = null,
            i === null ? n = h : i.next = h,
            i = c;
            var b = l.alternate;
            b !== null && (b = b.updateQueue, f = b.lastBaseUpdate, f !== i && (f === null ? b.firstBaseUpdate = h : f.next = h, b.lastBaseUpdate = c))
        }
        if (n !== null) {
            var S = e.baseState;
            i = 0,
            b = h = c = null,
            f = n;
            do {
                var y = f.lane & -536870913,
                    v = y !== f.lane;
                if (v ? (w & y) === y : (u & y) === y) {
                    y !== 0 && y === lu && (Ni = !0),
                    b !== null && (b = b.next = {
                        lane: 0,
                        tag: f.tag,
                        payload: f.payload,
                        callback: null,
                        next: null
                    });
                    l:
                    {
                        var C = l,
                            Y = f;
                        y = t;
                        var nl = a;
                        switch (Y.tag) {
                        case 1:
                            if (C = Y.payload, typeof C == "function") {
                                S = C.call(nl, S, y);
                                break l
                            }
                            S = C;
                            break l;
                        case 3:
                            C.flags = C.flags & -65537 | 128;
                        case 0:
                            if (C = Y.payload, y = typeof C == "function" ? C.call(nl, S, y) : C, y == null)
                                break l;
                            S = N({}, S, y);
                            break l;
                        case 2:
                            $t = !0
                        }
                    }y = f.callback,
                    y !== null && (l.flags |= 64, v && (l.flags |= 8192), v = e.callbacks, v === null ? e.callbacks = [y] : v.push(y))
                } else
                    v = {
                        lane: y,
                        tag: f.tag,
                        payload: f.payload,
                        callback: f.callback,
                        next: null
                    },
                    b === null ? (h = b = v, c = S) : b = b.next = v,
                    i |= y;
                if (f = f.next, f === null) {
                    if (f = e.shared.pending, f === null)
                        break;
                    v = f,
                    f = v.next,
                    v.next = null,
                    e.lastBaseUpdate = v,
                    e.shared.pending = null
                }
            } while (!0);
            b === null && (c = S),
            e.baseState = c,
            e.firstBaseUpdate = h,
            e.lastBaseUpdate = b,
            n === null && (e.shared.lanes = 0),
            ia |= i,
            l.lanes = i,
            l.memoizedState = S
        }
    }
    function Ss(l, t) {
        if (typeof l != "function")
            throw Error(g(191, l));
        l.call(t)
    }
    function xs(l, t) {
        var a = l.callbacks;
        if (a !== null)
            for (l.callbacks = null, l = 0; l < a.length; l++)
                Ss(a[l], t)
    }
    var au = x(null),
        Fe = x(0);
    function Es(l, t) {
        l = Vt,
        M(Fe, l),
        M(au, t),
        Vt = l | t.baseLanes
    }
    function Bi() {
        M(Fe, Vt),
        M(au, au.current)
    }
    function Yi() {
        Vt = Fe.current,
        _(au),
        _(Fe)
    }
    var Pt = 0,
        Q = null,
        ul = null,
        bl = null,
        We = !1,
        uu = !1,
        Ra = !1,
        $e = 0,
        Ju = 0,
        eu = null,
        Td = 0;
    function vl() {
        throw Error(g(321))
    }
    function qi(l, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < l.length; a++)
            if (!lt(l[a], t[a]))
                return !1;
        return !0
    }
    function Ci(l, t, a, u, e, n) {
        return Pt = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, m.H = l === null || l.memoizedState === null ? n0 : i0, Ra = !1, n = a(u, e), Ra = !1, uu && (n = As(t, a, u, e)), Ts(l), n
    }
    function Ts(l) {
        m.H = an;
        var t = ul !== null && ul.next !== null;
        if (Pt = 0, bl = ul = Q = null, We = !1, Ju = 0, eu = null, t)
            throw Error(g(300));
        l === null || _l || (l = l.dependencies, l !== null && Ve(l) && (_l = !0))
    }
    function As(l, t, a, u) {
        Q = l;
        var e = 0;
        do {
            if (uu && (eu = null), Ju = 0, uu = !1, 25 <= e)
                throw Error(g(301));
            if (e += 1, bl = ul = null, l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            m.H = Rd,
            n = t(a, u)
        } while (uu);
        return n
    }
    function Ad() {
        var l = m.H,
            t = l.useState()[0];
        return t = typeof t.then == "function" ? wu(t) : t, l = l.useState()[0], (ul !== null ? ul.memoizedState : null) !== l && (Q.flags |= 1024), t
    }
    function ji() {
        var l = $e !== 0;
        return $e = 0, l
    }
    function Xi(l, t, a) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~a
    }
    function Gi(l) {
        if (We) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            We = !1
        }
        Pt = 0,
        bl = ul = Q = null,
        uu = !1,
        Ju = $e = 0,
        eu = null
    }
    function wl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return bl === null ? Q.memoizedState = bl = l : bl = bl.next = l, bl
    }
    function pl() {
        if (ul === null) {
            var l = Q.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = ul.next;
        var t = bl === null ? Q.memoizedState : bl.next;
        if (t !== null)
            bl = t,
            ul = l;
        else {
            if (l === null)
                throw Q.alternate === null ? Error(g(467)) : Error(g(310));
            ul = l,
            l = {
                memoizedState: ul.memoizedState,
                baseState: ul.baseState,
                baseQueue: ul.baseQueue,
                queue: ul.queue,
                next: null
            },
            bl === null ? Q.memoizedState = bl = l : bl = bl.next = l
        }
        return bl
    }
    function Qi() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function wu(l) {
        var t = Ju;
        return Ju += 1, eu === null && (eu = []), l = ms(eu, l, t), t = Q, (bl === null ? t.memoizedState : bl.next) === null && (t = t.alternate, m.H = t === null || t.memoizedState === null ? n0 : i0), l
    }
    function ke(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return wu(l);
            if (l.$$typeof === zl)
                return Gl(l)
        }
        throw Error(g(438, String(l)))
    }
    function Zi(l) {
        var t = null,
            a = Q.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
            var u = Q.alternate;
            u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
                data: u.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }), a === null && (a = Qi(), Q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
            for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
                a[u] = xt;
        return t.index++, a
    }
    function Ct(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function Ie(l) {
        var t = pl();
        return Vi(t, ul, l)
    }
    function Vi(l, t, a) {
        var u = l.queue;
        if (u === null)
            throw Error(g(311));
        u.lastRenderedReducer = a;
        var e = l.baseQueue,
            n = u.pending;
        if (n !== null) {
            if (e !== null) {
                var i = e.next;
                e.next = n.next,
                n.next = i
            }
            t.baseQueue = e = n,
            u.pending = null
        }
        if (n = l.baseState, e === null)
            l.memoizedState = n;
        else {
            t = e.next;
            var f = i = null,
                c = null,
                h = t,
                b = !1;
            do {
                var S = h.lane & -536870913;
                if (S !== h.lane ? (w & S) === S : (Pt & S) === S) {
                    var y = h.revertLane;
                    if (y === 0)
                        c !== null && (c = c.next = {
                            lane: 0,
                            revertLane: 0,
                            action: h.action,
                            hasEagerState: h.hasEagerState,
                            eagerState: h.eagerState,
                            next: null
                        }),
                        S === lu && (b = !0);
                    else if ((Pt & y) === y) {
                        h = h.next,
                        y === lu && (b = !0);
                        continue
                    } else
                        S = {
                            lane: 0,
                            revertLane: h.revertLane,
                            action: h.action,
                            hasEagerState: h.hasEagerState,
                            eagerState: h.eagerState,
                            next: null
                        },
                        c === null ? (f = c = S, i = n) : c = c.next = S,
                        Q.lanes |= y,
                        ia |= y;
                    S = h.action,
                    Ra && a(n, S),
                    n = h.hasEagerState ? h.eagerState : a(n, S)
                } else
                    y = {
                        lane: S,
                        revertLane: h.revertLane,
                        action: h.action,
                        hasEagerState: h.hasEagerState,
                        eagerState: h.eagerState,
                        next: null
                    },
                    c === null ? (f = c = y, i = n) : c = c.next = y,
                    Q.lanes |= S,
                    ia |= S;
                h = h.next
            } while (h !== null && h !== t);
            if (c === null ? i = n : c.next = f, !lt(n, l.memoizedState) && (_l = !0, b && (a = tu, a !== null)))
                throw a;
            l.memoizedState = n,
            l.baseState = i,
            l.baseQueue = c,
            u.lastRenderedState = n
        }
        return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]
    }
    function Li(l) {
        var t = pl(),
            a = t.queue;
        if (a === null)
            throw Error(g(311));
        a.lastRenderedReducer = l;
        var u = a.dispatch,
            e = a.pending,
            n = t.memoizedState;
        if (e !== null) {
            a.pending = null;
            var i = e = e.next;
            do n = l(n, i.action),
            i = i.next;
            while (i !== e);
            lt(n, t.memoizedState) || (_l = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            a.lastRenderedState = n
        }
        return [n, u]
    }
    function zs(l, t, a) {
        var u = Q,
            e = pl(),
            n = I;
        if (n) {
            if (a === void 0)
                throw Error(g(407));
            a = a()
        } else
            a = t();
        var i = !lt((ul || e).memoizedState, a);
        i && (e.memoizedState = a, _l = !0),
        e = e.queue;
        var f = Ms.bind(null, u, e, l);
        if (Fu(2048, 8, f, [l]), e.getSnapshot !== t || i || bl !== null && bl.memoizedState.tag & 1) {
            if (u.flags |= 2048, nu(9, Pe(), Ds.bind(null, u, e, a, t), null), cl === null)
                throw Error(g(349));
            n || (Pt & 124) !== 0 || Os(u, t, a)
        }
        return a
    }
    function Os(l, t, a) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: a
        },
        t = Q.updateQueue,
        t === null ? (t = Qi(), Q.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l))
    }
    function Ds(l, t, a, u) {
        t.value = a,
        t.getSnapshot = u,
        _s(t) && Rs(l)
    }
    function Ms(l, t, a) {
        return a(function() {
            _s(t) && Rs(l)
        })
    }
    function _s(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var a = t();
            return !lt(l, a)
        } catch {
            return !0
        }
    }
    function Rs(l) {
        var t = $a(l, 2);
        t !== null && it(t, l, 2)
    }
    function Ki(l) {
        var t = wl();
        if (typeof l == "function") {
            var a = l;
            if (l = a(), Ra) {
                Jt(!0);
                try {
                    a()
                } finally {
                    Jt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ct,
            lastRenderedState: l
        }, t
    }
    function Us(l, t, a, u) {
        return l.baseState = a, Vi(l, ul, typeof u == "function" ? u : Ct)
    }
    function zd(l, t, a, u, e) {
        if (tn(l))
            throw Error(g(485));
        if (l = t.action, l !== null) {
            var n = {
                payload: e,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            m.T !== null ? a(!0) : n.isTransition = !1,
            u(n),
            a = t.pending,
            a === null ? (n.next = t.pending = n, Hs(t, n)) : (n.next = a.next, t.pending = a.next = n)
        }
    }
    function Hs(l, t) {
        var a = t.action,
            u = t.payload,
            e = l.state;
        if (t.isTransition) {
            var n = m.T,
                i = {};
            m.T = i;
            try {
                var f = a(e, u),
                    c = m.S;
                c !== null && c(i, f),
                Ns(l, t, f)
            } catch (h) {
                Ji(l, t, h)
            } finally {
                m.T = n
            }
        } else
            try {
                n = a(e, u),
                Ns(l, t, n)
            } catch (h) {
                Ji(l, t, h)
            }
    }
    function Ns(l, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
            Bs(l, t, u)
        }, function(u) {
            return Ji(l, t, u)
        }) : Bs(l, t, a)
    }
    function Bs(l, t, a) {
        t.status = "fulfilled",
        t.value = a,
        Ys(t),
        l.state = a,
        t = l.pending,
        t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Hs(l, a)))
    }
    function Ji(l, t, a) {
        var u = l.pending;
        if (l.pending = null, u !== null) {
            u = u.next;
            do t.status = "rejected",
            t.reason = a,
            Ys(t),
            t = t.next;
            while (t !== u)
        }
        l.action = null
    }
    function Ys(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0, l[t])()
    }
    function qs(l, t) {
        return t
    }
    function Cs(l, t) {
        if (I) {
            var a = cl.formState;
            if (a !== null) {
                l:
                {
                    var u = Q;
                    if (I) {
                        if (hl) {
                            t:
                            {
                                for (var e = hl, n = Tt; e.nodeType !== 8;) {
                                    if (!n) {
                                        e = null;
                                        break t
                                    }
                                    if (e = St(e.nextSibling), e === null) {
                                        e = null;
                                        break t
                                    }
                                }
                                n = e.data,
                                e = n === "F!" || n === "F" ? e : null
                            }if (e) {
                                hl = St(e.nextSibling),
                                u = e.data === "F!";
                                break l
                            }
                        }
                        Oa(u)
                    }
                    u = !1
                }u && (t = a[0])
            }
        }
        return a = wl(), a.memoizedState = a.baseState = t, u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qs,
            lastRenderedState: t
        }, a.queue = u, a = a0.bind(null, Q, u), u.dispatch = a, u = Ki(!1), n = ki.bind(null, Q, !1, u.queue), u = wl(), e = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, u.queue = e, a = zd.bind(null, Q, e, n, a), e.dispatch = a, u.memoizedState = l, [t, a, !1]
    }
    function js(l) {
        var t = pl();
        return Xs(t, ul, l)
    }
    function Xs(l, t, a) {
        if (t = Vi(l, t, qs)[0], l = Ie(Ct)[0], typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var u = wu(t)
            } catch (i) {
                throw i === Qu ? Je : i
            }
        else
            u = t;
        t = pl();
        var e = t.queue,
            n = e.dispatch;
        return a !== t.memoizedState && (Q.flags |= 2048, nu(9, Pe(), Od.bind(null, e, a), null)), [u, n, l]
    }
    function Od(l, t) {
        l.action = t
    }
    function Gs(l) {
        var t = pl(),
            a = ul;
        if (a !== null)
            return Xs(t, a, l);
        pl(),
        t = t.memoizedState,
        a = pl();
        var u = a.queue.dispatch;
        return a.memoizedState = l, [t, u, !1]
    }
    function nu(l, t, a, u) {
        return l = {
            tag: l,
            create: a,
            deps: u,
            inst: t,
            next: null
        }, t = Q.updateQueue, t === null && (t = Qi(), Q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l
    }
    function Pe() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Qs() {
        return pl().memoizedState
    }
    function ln(l, t, a, u) {
        var e = wl();
        u = u === void 0 ? null : u,
        Q.flags |= l,
        e.memoizedState = nu(1 | t, Pe(), a, u)
    }
    function Fu(l, t, a, u) {
        var e = pl();
        u = u === void 0 ? null : u;
        var n = e.memoizedState.inst;
        ul !== null && u !== null && qi(u, ul.memoizedState.deps) ? e.memoizedState = nu(t, n, a, u) : (Q.flags |= l, e.memoizedState = nu(1 | t, n, a, u))
    }
    function Zs(l, t) {
        ln(8390656, 8, l, t)
    }
    function Vs(l, t) {
        Fu(2048, 8, l, t)
    }
    function Ls(l, t) {
        return Fu(4, 2, l, t)
    }
    function Ks(l, t) {
        return Fu(4, 4, l, t)
    }
    function Js(l, t) {
        if (typeof t == "function") {
            l = l();
            var a = t(l);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return l = l(), t.current = l, function() {
                t.current = null
            }
    }
    function ws(l, t, a) {
        a = a != null ? a.concat([l]) : null,
        Fu(4, 4, Js.bind(null, t, l), a)
    }
    function wi() {}
    function Fs(l, t) {
        var a = pl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && qi(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l)
    }
    function Ws(l, t) {
        var a = pl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && qi(t, u[1]))
            return u[0];
        if (u = l(), Ra) {
            Jt(!0);
            try {
                l()
            } finally {
                Jt(!1)
            }
        }
        return a.memoizedState = [u, t], u
    }
    function Fi(l, t, a) {
        return a === void 0 || (Pt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = I0(), Q.lanes |= l, ia |= l, a)
    }
    function $s(l, t, a, u) {
        return lt(a, t) ? a : au.current !== null ? (l = Fi(l, a, u), lt(l, t) || (_l = !0), l) : (Pt & 42) === 0 ? (_l = !0, l.memoizedState = a) : (l = I0(), Q.lanes |= l, ia |= l, t)
    }
    function ks(l, t, a, u, e) {
        var n = D.p;
        D.p = n !== 0 && 8 > n ? n : 8;
        var i = m.T,
            f = {};
        m.T = f,
        ki(l, !1, t, a);
        try {
            var c = e(),
                h = m.S;
            if (h !== null && h(f, c), c !== null && typeof c == "object" && typeof c.then == "function") {
                var b = Ed(c, u);
                Wu(l, t, b, nt(l))
            } else
                Wu(l, t, u, nt(l))
        } catch (S) {
            Wu(l, t, {
                then: function() {},
                status: "rejected",
                reason: S
            }, nt())
        } finally {
            D.p = n,
            m.T = i
        }
    }
    function Dd() {}
    function Wi(l, t, a, u) {
        if (l.tag !== 5)
            throw Error(g(476));
        var e = Is(l).queue;
        ks(l, e, t, E, a === null ? Dd : function() {
            return Ps(l), a(u)
        })
    }
    function Is(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: E,
            baseState: E,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ct,
                lastRenderedState: E
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ct,
                lastRenderedState: a
            },
            next: null
        }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
    }
    function Ps(l) {
        var t = Is(l).next.queue;
        Wu(l, t, {}, nt())
    }
    function $i() {
        return Gl(he)
    }
    function l0() {
        return pl().memoizedState
    }
    function t0() {
        return pl().memoizedState
    }
    function Md(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = nt();
                l = kt(a);
                var u = It(t, l, a);
                u !== null && (it(u, t, a), Vu(u, t, a)),
                t = {
                    cache: Oi()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function _d(l, t, a) {
        var u = nt();
        a = {
            lane: u,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        tn(l) ? u0(t, a) : (a = gi(l, t, a, u), a !== null && (it(a, l, u), e0(a, t, u)))
    }
    function a0(l, t, a) {
        var u = nt();
        Wu(l, t, a, u)
    }
    function Wu(l, t, a, u) {
        var e = {
            lane: u,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (tn(l))
            u0(t, e);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
                try {
                    var i = t.lastRenderedState,
                        f = n(i, a);
                    if (e.hasEagerState = !0, e.eagerState = f, lt(f, i))
                        return je(l, t, e, 0), cl === null && Ce(), !1
                } catch {}
            if (a = gi(l, t, e, u), a !== null)
                return it(a, l, u), e0(a, t, u), !0
        }
        return !1
    }
    function ki(l, t, a, u) {
        if (u = {
            lane: 2,
            revertLane: Rf(),
            action: u,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, tn(l)) {
            if (t)
                throw Error(g(479))
        } else
            t = gi(l, a, u, 2),
            t !== null && it(t, l, 2)
    }
    function tn(l) {
        var t = l.alternate;
        return l === Q || t !== null && t === Q
    }
    function u0(l, t) {
        uu = We = !0;
        var a = l.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t),
        l.pending = t
    }
    function e0(l, t, a) {
        if ((a & 4194048) !== 0) {
            var u = t.lanes;
            u &= l.pendingLanes,
            a |= u,
            t.lanes = a,
            dc(l, a)
        }
    }
    var an = {
            readContext: Gl,
            use: ke,
            useCallback: vl,
            useContext: vl,
            useEffect: vl,
            useImperativeHandle: vl,
            useLayoutEffect: vl,
            useInsertionEffect: vl,
            useMemo: vl,
            useReducer: vl,
            useRef: vl,
            useState: vl,
            useDebugValue: vl,
            useDeferredValue: vl,
            useTransition: vl,
            useSyncExternalStore: vl,
            useId: vl,
            useHostTransitionStatus: vl,
            useFormState: vl,
            useActionState: vl,
            useOptimistic: vl,
            useMemoCache: vl,
            useCacheRefresh: vl
        },
        n0 = {
            readContext: Gl,
            use: ke,
            useCallback: function(l, t) {
                return wl().memoizedState = [l, t === void 0 ? null : t], l
            },
            useContext: Gl,
            useEffect: Zs,
            useImperativeHandle: function(l, t, a) {
                a = a != null ? a.concat([l]) : null,
                ln(4194308, 4, Js.bind(null, t, l), a)
            },
            useLayoutEffect: function(l, t) {
                return ln(4194308, 4, l, t)
            },
            useInsertionEffect: function(l, t) {
                ln(4, 2, l, t)
            },
            useMemo: function(l, t) {
                var a = wl();
                t = t === void 0 ? null : t;
                var u = l();
                if (Ra) {
                    Jt(!0);
                    try {
                        l()
                    } finally {
                        Jt(!1)
                    }
                }
                return a.memoizedState = [u, t], u
            },
            useReducer: function(l, t, a) {
                var u = wl();
                if (a !== void 0) {
                    var e = a(t);
                    if (Ra) {
                        Jt(!0);
                        try {
                            a(t)
                        } finally {
                            Jt(!1)
                        }
                    }
                } else
                    e = t;
                return u.memoizedState = u.baseState = e, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: e
                }, u.queue = l, l = l.dispatch = _d.bind(null, Q, l), [u.memoizedState, l]
            },
            useRef: function(l) {
                var t = wl();
                return l = {
                    current: l
                }, t.memoizedState = l
            },
            useState: function(l) {
                l = Ki(l);
                var t = l.queue,
                    a = a0.bind(null, Q, t);
                return t.dispatch = a, [l.memoizedState, a]
            },
            useDebugValue: wi,
            useDeferredValue: function(l, t) {
                var a = wl();
                return Fi(a, l, t)
            },
            useTransition: function() {
                var l = Ki(!1);
                return l = ks.bind(null, Q, l.queue, !0, !1), wl().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function(l, t, a) {
                var u = Q,
                    e = wl();
                if (I) {
                    if (a === void 0)
                        throw Error(g(407));
                    a = a()
                } else {
                    if (a = t(), cl === null)
                        throw Error(g(349));
                    (w & 124) !== 0 || Os(u, t, a)
                }
                e.memoizedState = a;
                var n = {
                    value: a,
                    getSnapshot: t
                };
                return e.queue = n, Zs(Ms.bind(null, u, n, l), [l]), u.flags |= 2048, nu(9, Pe(), Ds.bind(null, u, n, a, t), null), a
            },
            useId: function() {
                var l = wl(),
                    t = cl.identifierPrefix;
                if (I) {
                    var a = Bt,
                        u = Nt;
                    a = (u & ~(1 << 32 - Pl(u) - 1)).toString(32) + a,
                    t = "«" + t + "R" + a,
                    a = $e++,
                    0 < a && (t += "H" + a.toString(32)),
                    t += "»"
                } else
                    a = Td++,
                    t = "«" + t + "r" + a.toString(32) + "»";
                return l.memoizedState = t
            },
            useHostTransitionStatus: $i,
            useFormState: Cs,
            useActionState: Cs,
            useOptimistic: function(l) {
                var t = wl();
                t.memoizedState = t.baseState = l;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = ki.bind(null, Q, !0, a), a.dispatch = t, [l, t]
            },
            useMemoCache: Zi,
            useCacheRefresh: function() {
                return wl().memoizedState = Md.bind(null, Q)
            }
        },
        i0 = {
            readContext: Gl,
            use: ke,
            useCallback: Fs,
            useContext: Gl,
            useEffect: Vs,
            useImperativeHandle: ws,
            useInsertionEffect: Ls,
            useLayoutEffect: Ks,
            useMemo: Ws,
            useReducer: Ie,
            useRef: Qs,
            useState: function() {
                return Ie(Ct)
            },
            useDebugValue: wi,
            useDeferredValue: function(l, t) {
                var a = pl();
                return $s(a, ul.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Ie(Ct)[0],
                    t = pl().memoizedState;
                return [typeof l == "boolean" ? l : wu(l), t]
            },
            useSyncExternalStore: zs,
            useId: l0,
            useHostTransitionStatus: $i,
            useFormState: js,
            useActionState: js,
            useOptimistic: function(l, t) {
                var a = pl();
                return Us(a, ul, l, t)
            },
            useMemoCache: Zi,
            useCacheRefresh: t0
        },
        Rd = {
            readContext: Gl,
            use: ke,
            useCallback: Fs,
            useContext: Gl,
            useEffect: Vs,
            useImperativeHandle: ws,
            useInsertionEffect: Ls,
            useLayoutEffect: Ks,
            useMemo: Ws,
            useReducer: Li,
            useRef: Qs,
            useState: function() {
                return Li(Ct)
            },
            useDebugValue: wi,
            useDeferredValue: function(l, t) {
                var a = pl();
                return ul === null ? Fi(a, l, t) : $s(a, ul.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Li(Ct)[0],
                    t = pl().memoizedState;
                return [typeof l == "boolean" ? l : wu(l), t]
            },
            useSyncExternalStore: zs,
            useId: l0,
            useHostTransitionStatus: $i,
            useFormState: Gs,
            useActionState: Gs,
            useOptimistic: function(l, t) {
                var a = pl();
                return ul !== null ? Us(a, ul, l, t) : (a.baseState = l, [l, a.queue.dispatch])
            },
            useMemoCache: Zi,
            useCacheRefresh: t0
        },
        iu = null,
        $u = 0;
    function un(l) {
        var t = $u;
        return $u += 1, iu === null && (iu = []), ms(iu, l, t)
    }
    function ku(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function en(l, t) {
        throw t.$$typeof === P ? Error(g(525)) : (l = Object.prototype.toString.call(t), Error(g(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function f0(l) {
        var t = l._init;
        return t(l._payload)
    }
    function c0(l) {
        function t(r, o) {
            if (l) {
                var d = r.deletions;
                d === null ? (r.deletions = [o], r.flags |= 16) : d.push(o)
            }
        }
        function a(r, o) {
            if (!l)
                return null;
            for (; o !== null;)
                t(r, o),
                o = o.sibling;
            return null
        }
        function u(r) {
            for (var o = new Map; r !== null;)
                r.key !== null ? o.set(r.key, r) : o.set(r.index, r),
                r = r.sibling;
            return o
        }
        function e(r, o) {
            return r = Ht(r, o), r.index = 0, r.sibling = null, r
        }
        function n(r, o, d) {
            return r.index = d, l ? (d = r.alternate, d !== null ? (d = d.index, d < o ? (r.flags |= 67108866, o) : d) : (r.flags |= 67108866, o)) : (r.flags |= 1048576, o)
        }
        function i(r) {
            return l && r.alternate === null && (r.flags |= 67108866), r
        }
        function f(r, o, d, p) {
            return o === null || o.tag !== 6 ? (o = bi(d, r.mode, p), o.return = r, o) : (o = e(o, d), o.return = r, o)
        }
        function c(r, o, d, p) {
            var R = d.type;
            return R === ml ? b(r, o, d.props.children, p, d.key) : o !== null && (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === jl && f0(R) === o.type) ? (o = e(o, d.props), ku(o, d), o.return = r, o) : (o = Ge(d.type, d.key, d.props, null, r.mode, p), ku(o, d), o.return = r, o)
        }
        function h(r, o, d, p) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== d.containerInfo || o.stateNode.implementation !== d.implementation ? (o = pi(d, r.mode, p), o.return = r, o) : (o = e(o, d.children || []), o.return = r, o)
        }
        function b(r, o, d, p, R) {
            return o === null || o.tag !== 7 ? (o = Ea(d, r.mode, p, R), o.return = r, o) : (o = e(o, d), o.return = r, o)
        }
        function S(r, o, d) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
                return o = bi("" + o, r.mode, d), o.return = r, o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                case al:
                    return d = Ge(o.type, o.key, o.props, null, r.mode, d), ku(d, o), d.return = r, d;
                case Hl:
                    return o = pi(o, r.mode, d), o.return = r, o;
                case jl:
                    var p = o._init;
                    return o = p(o._payload), S(r, o, d)
                }
                if (Dl(o) || Ol(o))
                    return o = Ea(o, r.mode, d, null), o.return = r, o;
                if (typeof o.then == "function")
                    return S(r, un(o), d);
                if (o.$$typeof === zl)
                    return S(r, Le(r, o), d);
                en(r, o)
            }
            return null
        }
        function y(r, o, d, p) {
            var R = o !== null ? o.key : null;
            if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
                return R !== null ? null : f(r, o, "" + d, p);
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                case al:
                    return d.key === R ? c(r, o, d, p) : null;
                case Hl:
                    return d.key === R ? h(r, o, d, p) : null;
                case jl:
                    return R = d._init, d = R(d._payload), y(r, o, d, p)
                }
                if (Dl(d) || Ol(d))
                    return R !== null ? null : b(r, o, d, p, null);
                if (typeof d.then == "function")
                    return y(r, o, un(d), p);
                if (d.$$typeof === zl)
                    return y(r, o, Le(r, d), p);
                en(r, d)
            }
            return null
        }
        function v(r, o, d, p, R) {
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return r = r.get(d) || null, f(o, r, "" + p, R);
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case al:
                    return r = r.get(p.key === null ? d : p.key) || null, c(o, r, p, R);
                case Hl:
                    return r = r.get(p.key === null ? d : p.key) || null, h(o, r, p, R);
                case jl:
                    var Z = p._init;
                    return p = Z(p._payload), v(r, o, d, p, R)
                }
                if (Dl(p) || Ol(p))
                    return r = r.get(d) || null, b(o, r, p, R, null);
                if (typeof p.then == "function")
                    return v(r, o, d, un(p), R);
                if (p.$$typeof === zl)
                    return v(r, o, d, Le(o, p), R);
                en(o, p)
            }
            return null
        }
        function C(r, o, d, p) {
            for (var R = null, Z = null, H = o, q = o = 0, Ul = null; H !== null && q < d.length; q++) {
                H.index > q ? (Ul = H, H = null) : Ul = H.sibling;
                var k = y(r, H, d[q], p);
                if (k === null) {
                    H === null && (H = Ul);
                    break
                }
                l && H && k.alternate === null && t(r, H),
                o = n(k, o, q),
                Z === null ? R = k : Z.sibling = k,
                Z = k,
                H = Ul
            }
            if (q === d.length)
                return a(r, H), I && Aa(r, q), R;
            if (H === null) {
                for (; q < d.length; q++)
                    H = S(r, d[q], p),
                    H !== null && (o = n(H, o, q), Z === null ? R = H : Z.sibling = H, Z = H);
                return I && Aa(r, q), R
            }
            for (H = u(H); q < d.length; q++)
                Ul = v(H, r, q, d[q], p),
                Ul !== null && (l && Ul.alternate !== null && H.delete(Ul.key === null ? q : Ul.key), o = n(Ul, o, q), Z === null ? R = Ul : Z.sibling = Ul, Z = Ul);
            return l && H.forEach(function(va) {
                return t(r, va)
            }), I && Aa(r, q), R
        }
        function Y(r, o, d, p) {
            if (d == null)
                throw Error(g(151));
            for (var R = null, Z = null, H = o, q = o = 0, Ul = null, k = d.next(); H !== null && !k.done; q++, k = d.next()) {
                H.index > q ? (Ul = H, H = null) : Ul = H.sibling;
                var va = y(r, H, k.value, p);
                if (va === null) {
                    H === null && (H = Ul);
                    break
                }
                l && H && va.alternate === null && t(r, H),
                o = n(va, o, q),
                Z === null ? R = va : Z.sibling = va,
                Z = va,
                H = Ul
            }
            if (k.done)
                return a(r, H), I && Aa(r, q), R;
            if (H === null) {
                for (; !k.done; q++, k = d.next())
                    k = S(r, k.value, p),
                    k !== null && (o = n(k, o, q), Z === null ? R = k : Z.sibling = k, Z = k);
                return I && Aa(r, q), R
            }
            for (H = u(H); !k.done; q++, k = d.next())
                k = v(H, r, q, k.value, p),
                k !== null && (l && k.alternate !== null && H.delete(k.key === null ? q : k.key), o = n(k, o, q), Z === null ? R = k : Z.sibling = k, Z = k);
            return l && H.forEach(function(Uh) {
                return t(r, Uh)
            }), I && Aa(r, q), R
        }
        function nl(r, o, d, p) {
            if (typeof d == "object" && d !== null && d.type === ml && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                case al:
                    l:
                    {
                        for (var R = d.key; o !== null;) {
                            if (o.key === R) {
                                if (R = d.type, R === ml) {
                                    if (o.tag === 7) {
                                        a(r, o.sibling),
                                        p = e(o, d.props.children),
                                        p.return = r,
                                        r = p;
                                        break l
                                    }
                                } else if (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === jl && f0(R) === o.type) {
                                    a(r, o.sibling),
                                    p = e(o, d.props),
                                    ku(p, d),
                                    p.return = r,
                                    r = p;
                                    break l
                                }
                                a(r, o);
                                break
                            } else
                                t(r, o);
                            o = o.sibling
                        }
                        d.type === ml ? (p = Ea(d.props.children, r.mode, p, d.key), p.return = r, r = p) : (p = Ge(d.type, d.key, d.props, null, r.mode, p), ku(p, d), p.return = r, r = p)
                    }return i(r);
                case Hl:
                    l:
                    {
                        for (R = d.key; o !== null;) {
                            if (o.key === R)
                                if (o.tag === 4 && o.stateNode.containerInfo === d.containerInfo && o.stateNode.implementation === d.implementation) {
                                    a(r, o.sibling),
                                    p = e(o, d.children || []),
                                    p.return = r,
                                    r = p;
                                    break l
                                } else {
                                    a(r, o);
                                    break
                                }
                            else
                                t(r, o);
                            o = o.sibling
                        }
                        p = pi(d, r.mode, p),
                        p.return = r,
                        r = p
                    }return i(r);
                case jl:
                    return R = d._init, d = R(d._payload), nl(r, o, d, p)
                }
                if (Dl(d))
                    return C(r, o, d, p);
                if (Ol(d)) {
                    if (R = Ol(d), typeof R != "function")
                        throw Error(g(150));
                    return d = R.call(d), Y(r, o, d, p)
                }
                if (typeof d.then == "function")
                    return nl(r, o, un(d), p);
                if (d.$$typeof === zl)
                    return nl(r, o, Le(r, d), p);
                en(r, d)
            }
            return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, o !== null && o.tag === 6 ? (a(r, o.sibling), p = e(o, d), p.return = r, r = p) : (a(r, o), p = bi(d, r.mode, p), p.return = r, r = p), i(r)) : a(r, o)
        }
        return function(r, o, d, p) {
            try {
                $u = 0;
                var R = nl(r, o, d, p);
                return iu = null, R
            } catch (H) {
                if (H === Qu || H === Je)
                    throw H;
                var Z = tt(29, H, null, r.mode);
                return Z.lanes = p, Z.return = r, Z
            }
        }
    }
    var fu = c0(!0),
        s0 = c0(!1),
        ht = x(null),
        At = null;
    function la(l) {
        var t = l.alternate;
        M(Tl, Tl.current & 1),
        M(ht, l),
        At === null && (t === null || au.current !== null || t.memoizedState !== null) && (At = l)
    }
    function o0(l) {
        if (l.tag === 22) {
            if (M(Tl, Tl.current), M(ht, l), At === null) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (At = l)
            }
        } else
            ta()
    }
    function ta() {
        M(Tl, Tl.current),
        M(ht, ht.current)
    }
    function jt(l) {
        _(ht),
        At === l && (At = null),
        _(Tl)
    }
    var Tl = x(0);
    function nn(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Zf(a)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function Ii(l, t, a, u) {
        t = l.memoizedState,
        a = a(u, t),
        a = a == null ? t : N({}, t, a),
        l.memoizedState = a,
        l.lanes === 0 && (l.updateQueue.baseState = a)
    }
    var Pi = {
        enqueueSetState: function(l, t, a) {
            l = l._reactInternals;
            var u = nt(),
                e = kt(u);
            e.payload = t,
            a != null && (e.callback = a),
            t = It(l, e, u),
            t !== null && (it(t, l, u), Vu(t, l, u))
        },
        enqueueReplaceState: function(l, t, a) {
            l = l._reactInternals;
            var u = nt(),
                e = kt(u);
            e.tag = 1,
            e.payload = t,
            a != null && (e.callback = a),
            t = It(l, e, u),
            t !== null && (it(t, l, u), Vu(t, l, u))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var a = nt(),
                u = kt(a);
            u.tag = 2,
            t != null && (u.callback = t),
            t = It(l, u, a),
            t !== null && (it(t, l, a), Vu(t, l, a))
        }
    };
    function r0(l, t, a, u, e, n, i) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Nu(a, u) || !Nu(e, n) : !0
    }
    function d0(l, t, a, u) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u),
        t.state !== l && Pi.enqueueReplaceState(t, t.state, null)
    }
    function Ua(l, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var u in t)
                u !== "ref" && (a[u] = t[u])
        }
        if (l = l.defaultProps) {
            a === t && (a = N({}, a));
            for (var e in l)
                a[e] === void 0 && (a[e] = l[e])
        }
        return a
    }
    var fn = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    };
    function h0(l) {
        fn(l)
    }
    function y0(l) {
        console.error(l)
    }
    function v0(l) {
        fn(l)
    }
    function cn(l, t) {
        try {
            var a = l.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function g0(l, t, a) {
        try {
            var u = l.onCaughtError;
            u(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function lf(l, t, a) {
        return a = kt(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            cn(l, t)
        }, a
    }
    function m0(l) {
        return l = kt(l), l.tag = 3, l
    }
    function b0(l, t, a, u) {
        var e = a.type.getDerivedStateFromError;
        if (typeof e == "function") {
            var n = u.value;
            l.payload = function() {
                return e(n)
            },
            l.callback = function() {
                g0(t, a, u)
            }
        }
        var i = a.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            g0(t, a, u),
            typeof e != "function" && (fa === null ? fa = new Set([this]) : fa.add(this));
            var f = u.stack;
            this.componentDidCatch(u.value, {
                componentStack: f !== null ? f : ""
            })
        })
    }
    function Ud(l, t, a, u, e) {
        if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            if (t = a.alternate, t !== null && ju(t, a, e, !0), a = ht.current, a !== null) {
                switch (a.tag) {
                case 13:
                    return At === null ? zf() : a.alternate === null && yl === 0 && (yl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === _i ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([u]) : t.add(u), Df(l, u, e)), !1;
                case 22:
                    return a.flags |= 65536, u === _i ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u])
                    }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([u]) : a.add(u)), Df(l, u, e)), !1
                }
                throw Error(g(435, a.tag))
            }
            return Df(l, u, e), zf(), !1
        }
        if (I)
            return t = ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Ei && (l = Error(g(422), {
                cause: u
            }), Cu(st(l, a)))) : (u !== Ei && (t = Error(g(423), {
                cause: u
            }), Cu(st(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = st(u, a), e = lf(l.stateNode, u, e), Hi(l, e), yl !== 4 && (yl = 2)), !1;
        var n = Error(g(520), {
            cause: u
        });
        if (n = st(n, a), ee === null ? ee = [n] : ee.push(n), yl !== 4 && (yl = 2), t === null)
            return !0;
        u = st(u, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536, l = e & -e, a.lanes |= l, l = lf(a.stateNode, u, l), Hi(a, l), !1;
            case 1:
                if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (fa === null || !fa.has(n))))
                    return a.flags |= 65536, e &= -e, a.lanes |= e, e = m0(e), b0(e, l, a, u), Hi(a, e), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var p0 = Error(g(461)),
        _l = !1;
    function Bl(l, t, a, u) {
        t.child = l === null ? s0(t, null, a, u) : fu(t, l.child, a, u)
    }
    function S0(l, t, a, u, e) {
        a = a.render;
        var n = t.ref;
        if ("ref" in u) {
            var i = {};
            for (var f in u)
                f !== "ref" && (i[f] = u[f])
        } else
            i = u;
        return Ma(t), u = Ci(l, t, a, i, n, e), f = ji(), l !== null && !_l ? (Xi(l, t, e), Xt(l, t, e)) : (I && f && Si(t), t.flags |= 1, Bl(l, t, u, e), t.child)
    }
    function x0(l, t, a, u, e) {
        if (l === null) {
            var n = a.type;
            return typeof n == "function" && !mi(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, E0(l, t, n, u, e)) : (l = Ge(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (n = l.child, !sf(l, e)) {
            var i = n.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Nu, a(i, u) && l.ref === t.ref)
                return Xt(l, t, e)
        }
        return t.flags |= 1, l = Ht(n, u), l.ref = t.ref, l.return = t, t.child = l
    }
    function E0(l, t, a, u, e) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Nu(n, u) && l.ref === t.ref)
                if (_l = !1, t.pendingProps = u = n, sf(l, e))
                    (l.flags & 131072) !== 0 && (_l = !0);
                else
                    return t.lanes = l.lanes, Xt(l, t, e)
        }
        return tf(l, t, a, u, e)
    }
    function T0(l, t, a) {
        var u = t.pendingProps,
            e = u.children,
            n = l !== null ? l.memoizedState : null;
        if (u.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = n !== null ? n.baseLanes | a : a, l !== null) {
                    for (e = t.child = l.child, n = 0; e !== null;)
                        n = n | e.lanes | e.childLanes,
                        e = e.sibling;
                    t.childLanes = n & ~u
                } else
                    t.childLanes = 0,
                    t.child = null;
                return A0(l, t, u, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && Ke(t, n !== null ? n.cachePool : null),
                n !== null ? Es(t, n) : Bi(),
                o0(t);
            else
                return t.lanes = t.childLanes = 536870912, A0(l, t, n !== null ? n.baseLanes | a : a, a)
        } else
            n !== null ? (Ke(t, n.cachePool), Es(t, n), ta(), t.memoizedState = null) : (l !== null && Ke(t, null), Bi(), ta());
        return Bl(l, t, e, a), t.child
    }
    function A0(l, t, a, u) {
        var e = Mi();
        return e = e === null ? null : {
            parent: El._currentValue,
            pool: e
        }, t.memoizedState = {
            baseLanes: a,
            cachePool: e
        }, l !== null && Ke(t, null), Bi(), o0(t), l !== null && ju(l, t, u, !0), null
    }
    function sn(l, t) {
        var a = t.ref;
        if (a === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(g(284));
            (l === null || l.ref !== a) && (t.flags |= 4194816)
        }
    }
    function tf(l, t, a, u, e) {
        return Ma(t), a = Ci(l, t, a, u, void 0, e), u = ji(), l !== null && !_l ? (Xi(l, t, e), Xt(l, t, e)) : (I && u && Si(t), t.flags |= 1, Bl(l, t, a, e), t.child)
    }
    function z0(l, t, a, u, e, n) {
        return Ma(t), t.updateQueue = null, a = As(t, u, a, e), Ts(l), u = ji(), l !== null && !_l ? (Xi(l, t, n), Xt(l, t, n)) : (I && u && Si(t), t.flags |= 1, Bl(l, t, a, n), t.child)
    }
    function O0(l, t, a, u, e) {
        if (Ma(t), t.stateNode === null) {
            var n = ka,
                i = a.contextType;
            typeof i == "object" && i !== null && (n = Gl(i)),
            n = new a(u, n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = Pi,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = u,
            n.state = t.memoizedState,
            n.refs = {},
            Ri(t),
            i = a.contextType,
            n.context = typeof i == "object" && i !== null ? Gl(i) : ka,
            n.state = t.memoizedState,
            i = a.getDerivedStateFromProps,
            typeof i == "function" && (Ii(t, a, i, u), n.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && Pi.enqueueReplaceState(n, n.state, null), Ku(t, u, n, e), Lu(), n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            u = !0
        } else if (l === null) {
            n = t.stateNode;
            var f = t.memoizedProps,
                c = Ua(a, f);
            n.props = c;
            var h = n.context,
                b = a.contextType;
            i = ka,
            typeof b == "object" && b !== null && (i = Gl(b));
            var S = a.getDerivedStateFromProps;
            b = typeof S == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            f = t.pendingProps !== f,
            b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || h !== i) && d0(t, n, u, i),
            $t = !1;
            var y = t.memoizedState;
            n.state = y,
            Ku(t, u, n, e),
            Lu(),
            h = t.memoizedState,
            f || y !== h || $t ? (typeof S == "function" && (Ii(t, a, S, u), h = t.memoizedState), (c = $t || r0(t, a, c, u, y, h, i)) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = i, u = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1)
        } else {
            n = t.stateNode,
            Ui(l, t),
            i = t.memoizedProps,
            b = Ua(a, i),
            n.props = b,
            S = t.pendingProps,
            y = n.context,
            h = a.contextType,
            c = ka,
            typeof h == "object" && h !== null && (c = Gl(h)),
            f = a.getDerivedStateFromProps,
            (h = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== S || y !== c) && d0(t, n, u, c),
            $t = !1,
            y = t.memoizedState,
            n.state = y,
            Ku(t, u, n, e),
            Lu();
            var v = t.memoizedState;
            i !== S || y !== v || $t || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof f == "function" && (Ii(t, a, f, u), v = t.memoizedState), (b = $t || r0(t, a, b, u, y, v, c) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, v, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, v, c)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = v), n.props = u, n.state = v, n.context = c, u = b) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), u = !1)
        }
        return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = fu(t, l.child, null, e), t.child = fu(t, null, a, e)) : Bl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Xt(l, t, e), l
    }
    function D0(l, t, a, u) {
        return qu(), t.flags |= 256, Bl(l, t, a, u), t.child
    }
    var af = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function uf(l) {
        return {
            baseLanes: l,
            cachePool: ys()
        }
    }
    function ef(l, t, a) {
        return l = l !== null ? l.childLanes & ~a : 0, t && (l |= yt), l
    }
    function M0(l, t, a) {
        var u = t.pendingProps,
            e = !1,
            n = (t.flags & 128) !== 0,
            i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0), i && (e = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (I) {
                if (e ? la(t) : ta(), I) {
                    var f = hl,
                        c;
                    if (c = f) {
                        l:
                        {
                            for (c = f, f = Tt; c.nodeType !== 8;) {
                                if (!f) {
                                    f = null;
                                    break l
                                }
                                if (c = St(c.nextSibling), c === null) {
                                    f = null;
                                    break l
                                }
                            }
                            f = c
                        }f !== null ? (t.memoizedState = {
                            dehydrated: f,
                            treeContext: Ta !== null ? {
                                id: Nt,
                                overflow: Bt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, c = tt(18, null, null, 0), c.stateNode = f, c.return = t, t.child = c, Vl = t, hl = null, c = !0) : c = !1
                    }
                    c || Oa(t)
                }
                if (f = t.memoizedState, f !== null && (f = f.dehydrated, f !== null))
                    return Zf(f) ? t.lanes = 32 : t.lanes = 536870912, null;
                jt(t)
            }
            return f = u.children, u = u.fallback, e ? (ta(), e = t.mode, f = on({
                mode: "hidden",
                children: f
            }, e), u = Ea(u, e, a, null), f.return = t, u.return = t, f.sibling = u, t.child = f, e = t.child, e.memoizedState = uf(a), e.childLanes = ef(l, i, a), t.memoizedState = af, u) : (la(t), nf(t, f))
        }
        if (c = l.memoizedState, c !== null && (f = c.dehydrated, f !== null)) {
            if (n)
                t.flags & 256 ? (la(t), t.flags &= -257, t = ff(l, t, a)) : t.memoizedState !== null ? (ta(), t.child = l.child, t.flags |= 128, t = null) : (ta(), e = u.fallback, f = t.mode, u = on({
                    mode: "visible",
                    children: u.children
                }, f), e = Ea(e, f, a, null), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, fu(t, l.child, null, a), u = t.child, u.memoizedState = uf(a), u.childLanes = ef(l, i, a), t.memoizedState = af, t = e);
            else if (la(t), Zf(f)) {
                if (i = f.nextSibling && f.nextSibling.dataset, i)
                    var h = i.dgst;
                i = h,
                u = Error(g(419)),
                u.stack = "",
                u.digest = i,
                Cu({
                    value: u,
                    source: null,
                    stack: null
                }),
                t = ff(l, t, a)
            } else if (_l || ju(l, t, a, !1), i = (a & l.childLanes) !== 0, _l || i) {
                if (i = cl, i !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Zn(u), u = (u & (i.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== c.retryLane))
                    throw c.retryLane = u, $a(l, u), it(i, l, u), p0;
                f.data === "$?" || zf(),
                t = ff(l, t, a)
            } else
                f.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = c.treeContext, hl = St(f.nextSibling), Vl = t, I = !0, za = null, Tt = !1, l !== null && (rt[dt++] = Nt, rt[dt++] = Bt, rt[dt++] = Ta, Nt = l.id, Bt = l.overflow, Ta = t), t = nf(t, u.children), t.flags |= 4096);
            return t
        }
        return e ? (ta(), e = u.fallback, f = t.mode, c = l.child, h = c.sibling, u = Ht(c, {
            mode: "hidden",
            children: u.children
        }), u.subtreeFlags = c.subtreeFlags & 65011712, h !== null ? e = Ht(h, e) : (e = Ea(e, f, a, null), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, f = l.child.memoizedState, f === null ? f = uf(a) : (c = f.cachePool, c !== null ? (h = El._currentValue, c = c.parent !== h ? {
            parent: h,
            pool: h
        } : c) : c = ys(), f = {
            baseLanes: f.baseLanes | a,
            cachePool: c
        }), e.memoizedState = f, e.childLanes = ef(l, i, a), t.memoizedState = af, u) : (la(t), a = l.child, l = a.sibling, a = Ht(a, {
            mode: "visible",
            children: u.children
        }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a)
    }
    function nf(l, t) {
        return t = on({
            mode: "visible",
            children: t
        }, l.mode), t.return = l, l.child = t
    }
    function on(l, t) {
        return l = tt(22, l, null, t), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }
    function ff(l, t, a) {
        return fu(t, l.child, null, a), l = nf(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }
    function _0(l, t, a) {
        l.lanes |= t;
        var u = l.alternate;
        u !== null && (u.lanes |= t),
        Ai(l.return, t, a)
    }
    function cf(l, t, a, u, e) {
        var n = l.memoizedState;
        n === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: a,
            tailMode: e
        } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e)
    }
    function R0(l, t, a) {
        var u = t.pendingProps,
            e = u.revealOrder,
            n = u.tail;
        if (Bl(l, t, u.children, a), u = Tl.current, (u & 2) !== 0)
            u = u & 1 | 2,
            t.flags |= 128;
        else {
            if (l !== null && (l.flags & 128) !== 0)
                l:
                for (l = t.child; l !== null;) {
                    if (l.tag === 13)
                        l.memoizedState !== null && _0(l, a, t);
                    else if (l.tag === 19)
                        _0(l, a, t);
                    else if (l.child !== null) {
                        l.child.return = l,
                        l = l.child;
                        continue
                    }
                    if (l === t)
                        break l;
                    for (; l.sibling === null;) {
                        if (l.return === null || l.return === t)
                            break l;
                        l = l.return
                    }
                    l.sibling.return = l.return,
                    l = l.sibling
                }
            u &= 1
        }
        switch (M(Tl, u), e) {
        case "forwards":
            for (a = t.child, e = null; a !== null;)
                l = a.alternate,
                l !== null && nn(l) === null && (e = a),
                a = a.sibling;
            a = e,
            a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null),
            cf(t, !1, e, a, n);
            break;
        case "backwards":
            for (a = null, e = t.child, t.child = null; e !== null;) {
                if (l = e.alternate, l !== null && nn(l) === null) {
                    t.child = e;
                    break
                }
                l = e.sibling,
                e.sibling = a,
                a = e,
                e = l
            }
            cf(t, !0, a, null, n);
            break;
        case "together":
            cf(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Xt(l, t, a) {
        if (l !== null && (t.dependencies = l.dependencies), ia |= t.lanes, (a & t.childLanes) === 0)
            if (l !== null) {
                if (ju(l, t, a, !1), (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(g(153));
        if (t.child !== null) {
            for (l = t.child, a = Ht(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null;)
                l = l.sibling,
                a = a.sibling = Ht(l, l.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function sf(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)))
    }
    function Hd(l, t, a) {
        switch (t.tag) {
        case 3:
            ol(t, t.stateNode.containerInfo),
            Wt(t, El, l.memoizedState.cache),
            qu();
            break;
        case 27:
        case 5:
            Cn(t);
            break;
        case 4:
            ol(t, t.stateNode.containerInfo);
            break;
        case 10:
            Wt(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var u = t.memoizedState;
            if (u !== null)
                return u.dehydrated !== null ? (la(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? M0(l, t, a) : (la(t), l = Xt(l, t, a), l !== null ? l.sibling : null);
            la(t);
            break;
        case 19:
            var e = (l.flags & 128) !== 0;
            if (u = (a & t.childLanes) !== 0, u || (ju(l, t, a, !1), u = (a & t.childLanes) !== 0), e) {
                if (u)
                    return R0(l, t, a);
                t.flags |= 128
            }
            if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), M(Tl, Tl.current), u)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, T0(l, t, a);
        case 24:
            Wt(t, El, l.memoizedState.cache)
        }
        return Xt(l, t, a)
    }
    function U0(l, t, a) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                _l = !0;
            else {
                if (!sf(l, a) && (t.flags & 128) === 0)
                    return _l = !1, Hd(l, t, a);
                _l = (l.flags & 131072) !== 0
            }
        else
            _l = !1,
            I && (t.flags & 1048576) !== 0 && fs(t, Ze, t.index);
        switch (t.lanes = 0, t.tag) {
        case 16:
            l:
            {
                l = t.pendingProps;
                var u = t.elementType,
                    e = u._init;
                if (u = e(u._payload), t.type = u, typeof u == "function")
                    mi(u) ? (l = Ua(u, l), t.tag = 1, t = O0(null, t, u, l, a)) : (t.tag = 0, t = tf(null, t, u, l, a));
                else {
                    if (u != null) {
                        if (e = u.$$typeof, e === Nl) {
                            t.tag = 11,
                            t = S0(null, t, u, l, a);
                            break l
                        } else if (e === xl) {
                            t.tag = 14,
                            t = x0(null, t, u, l, a);
                            break l
                        }
                    }
                    throw t = _t(u) || u, Error(g(306, t, ""))
                }
            }return t;
        case 0:
            return tf(l, t, t.type, t.pendingProps, a);
        case 1:
            return u = t.type, e = Ua(u, t.pendingProps), O0(l, t, u, e, a);
        case 3:
            l:
            {
                if (ol(t, t.stateNode.containerInfo), l === null)
                    throw Error(g(387));
                u = t.pendingProps;
                var n = t.memoizedState;
                e = n.element,
                Ui(l, t),
                Ku(t, u, null, a);
                var i = t.memoizedState;
                if (u = i.cache, Wt(t, El, u), u !== n.cache && zi(t, [El], a, !0), Lu(), u = i.element, n.isDehydrated)
                    if (n = {
                        element: u,
                        isDehydrated: !1,
                        cache: i.cache
                    }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                        t = D0(l, t, u, a);
                        break l
                    } else if (u !== e) {
                        e = st(Error(g(424)), t),
                        Cu(e),
                        t = D0(l, t, u, a);
                        break l
                    } else
                        for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, hl = St(l.firstChild), Vl = t, I = !0, za = null, Tt = !0, a = s0(t, null, u, a), t.child = a; a;)
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (qu(), u === e) {
                        t = Xt(l, t, a);
                        break l
                    }
                    Bl(l, t, u, a)
                }
                t = t.child
            }return t;
        case 26:
            return sn(l, t), l === null ? (a = qo(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : I || (a = t.type, l = t.pendingProps, u = An(j.current).createElement(a), u[Xl] = t, u[Kl] = l, ql(u, a, l), Ml(u), t.stateNode = u) : t.memoizedState = qo(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
            return Cn(t), l === null && I && (u = t.stateNode = No(t.type, t.pendingProps, j.current), Vl = t, Tt = !0, e = hl, oa(t.type) ? (Vf = e, hl = St(u.firstChild)) : hl = e), Bl(l, t, t.pendingProps.children, a), sn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
            return l === null && I && ((e = u = hl) && (u = ih(u, t.type, t.pendingProps, Tt), u !== null ? (t.stateNode = u, Vl = t, hl = St(u.firstChild), Tt = !1, e = !0) : e = !1), e || Oa(t)), Cn(t), e = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = n.children, Xf(e, n) ? u = null : i !== null && Xf(e, i) && (t.flags |= 32), t.memoizedState !== null && (e = Ci(l, t, Ad, null, null, a), he._currentValue = e), sn(l, t), Bl(l, t, u, a), t.child;
        case 6:
            return l === null && I && ((l = a = hl) && (a = fh(a, t.pendingProps, Tt), a !== null ? (t.stateNode = a, Vl = t, hl = null, l = !0) : l = !1), l || Oa(t)), null;
        case 13:
            return M0(l, t, a);
        case 4:
            return ol(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = fu(t, null, u, a) : Bl(l, t, u, a), t.child;
        case 11:
            return S0(l, t, t.type, t.pendingProps, a);
        case 7:
            return Bl(l, t, t.pendingProps, a), t.child;
        case 8:
            return Bl(l, t, t.pendingProps.children, a), t.child;
        case 12:
            return Bl(l, t, t.pendingProps.children, a), t.child;
        case 10:
            return u = t.pendingProps, Wt(t, t.type, u.value), Bl(l, t, u.children, a), t.child;
        case 9:
            return e = t.type._context, u = t.pendingProps.children, Ma(t), e = Gl(e), u = u(e), t.flags |= 1, Bl(l, t, u, a), t.child;
        case 14:
            return x0(l, t, t.type, t.pendingProps, a);
        case 15:
            return E0(l, t, t.type, t.pendingProps, a);
        case 19:
            return R0(l, t, a);
        case 31:
            return u = t.pendingProps, a = t.mode, u = {
                mode: u.mode,
                children: u.children
            }, l === null ? (a = on(u, a), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Ht(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
        case 22:
            return T0(l, t, a);
        case 24:
            return Ma(t), u = Gl(El), l === null ? (e = Mi(), e === null && (e = cl, n = Oi(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
                parent: u,
                cache: e
            }, Ri(t), Wt(t, El, e)) : ((l.lanes & a) !== 0 && (Ui(l, t), Ku(t, null, null, a), Lu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = {
                parent: u,
                cache: u
            }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Wt(t, El, u)) : (u = n.cache, Wt(t, El, u), u !== e.cache && zi(t, [El], a, !0))), Bl(l, t, t.pendingProps.children, a), t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(g(156, t.tag))
    }
    function Gt(l) {
        l.flags |= 4
    }
    function H0(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216, !Qo(t)) {
            if (t = ht.current, t !== null && ((w & 4194048) === w ? At !== null : (w & 62914560) !== w && (w & 536870912) === 0 || t !== At))
                throw Zu = _i, vs;
            l.flags |= 8192
        }
    }
    function rn(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? oc() : 536870912, l.lanes |= t, ru |= t)
    }
    function Iu(l, t) {
        if (!I)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var a = null; t !== null;)
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? l.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = l.tail;
                for (var u = null; a !== null;)
                    a.alternate !== null && (u = a),
                    a = a.sibling;
                u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null
            }
    }
    function dl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            a = 0,
            u = 0;
        if (t)
            for (var e = l.child; e !== null;)
                a |= e.lanes | e.childLanes,
                u |= e.subtreeFlags & 65011712,
                u |= e.flags & 65011712,
                e.return = l,
                e = e.sibling;
        else
            for (e = l.child; e !== null;)
                a |= e.lanes | e.childLanes,
                u |= e.subtreeFlags,
                u |= e.flags,
                e.return = l,
                e = e.sibling;
        return l.subtreeFlags |= u, l.childLanes = a, t
    }
    function Nd(l, t, a) {
        var u = t.pendingProps;
        switch (xi(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return dl(t), null;
        case 1:
            return dl(t), null;
        case 3:
            return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(El), Kt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Yu(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, os())), dl(t), null;
        case 26:
            return a = t.memoizedState, l === null ? (Gt(t), a !== null ? (dl(t), H0(t, a)) : (dl(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Gt(t), dl(t), H0(t, a)) : (dl(t), t.flags &= -16777217) : (l.memoizedProps !== u && Gt(t), dl(t), t.flags &= -16777217), null;
        case 27:
            xe(t),
            a = j.current;
            var e = t.type;
            if (l !== null && t.stateNode != null)
                l.memoizedProps !== u && Gt(t);
            else {
                if (!u) {
                    if (t.stateNode === null)
                        throw Error(g(166));
                    return dl(t), null
                }
                l = B.current,
                Yu(t) ? cs(t) : (l = No(e, u, a), t.stateNode = l, Gt(t))
            }
            return dl(t), null;
        case 5:
            if (xe(t), a = t.type, l !== null && t.stateNode != null)
                l.memoizedProps !== u && Gt(t);
            else {
                if (!u) {
                    if (t.stateNode === null)
                        throw Error(g(166));
                    return dl(t), null
                }
                if (l = B.current, Yu(t))
                    cs(t);
                else {
                    switch (e = An(j.current), l) {
                    case 1:
                        l = e.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            l = e.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            l = e.createElement("div"),
                            l.innerHTML = "<script><\/script>",
                            l = l.removeChild(l.firstChild);
                            break;
                        case "select":
                            l = typeof u.is == "string" ? e.createElement("select", {
                                is: u.is
                            }) : e.createElement("select"),
                            u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                            break;
                        default:
                            l = typeof u.is == "string" ? e.createElement(a, {
                                is: u.is
                            }) : e.createElement(a)
                        }
                    }
                    l[Xl] = t,
                    l[Kl] = u;
                    l:
                    for (e = t.child; e !== null;) {
                        if (e.tag === 5 || e.tag === 6)
                            l.appendChild(e.stateNode);
                        else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                            e.child.return = e,
                            e = e.child;
                            continue
                        }
                        if (e === t)
                            break l;
                        for (; e.sibling === null;) {
                            if (e.return === null || e.return === t)
                                break l;
                            e = e.return
                        }
                        e.sibling.return = e.return,
                        e = e.sibling
                    }
                    t.stateNode = l;
                    l:
                    switch (ql(l, a, u), a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!u.autoFocus;
                        break l;
                    case "img":
                        l = !0;
                        break l;
                    default:
                        l = !1
                    }
                    l && Gt(t)
                }
            }
            return dl(t), t.flags &= -16777217, null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== u && Gt(t);
            else {
                if (typeof u != "string" && t.stateNode === null)
                    throw Error(g(166));
                if (l = j.current, Yu(t)) {
                    if (l = t.stateNode, a = t.memoizedProps, u = null, e = Vl, e !== null)
                        switch (e.tag) {
                        case 27:
                        case 5:
                            u = e.memoizedProps
                        }
                    l[Xl] = t,
                    l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Oo(l.nodeValue, a)),
                    l || Oa(t)
                } else
                    l = An(l).createTextNode(u),
                    l[Xl] = t,
                    t.stateNode = l
            }
            return dl(t), null;
        case 13:
            if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (e = Yu(t), u !== null && u.dehydrated !== null) {
                    if (l === null) {
                        if (!e)
                            throw Error(g(318));
                        if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                            throw Error(g(317));
                        e[Xl] = t
                    } else
                        qu(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    dl(t),
                    e = !1
                } else
                    e = os(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (jt(t), t) : (jt(t), null)
            }
            if (jt(t), (t.flags & 128) !== 0)
                return t.lanes = a, t;
            if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
                u = t.child,
                e = null,
                u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
                var n = null;
                u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)
            }
            return a !== l && a && (t.child.flags |= 8192), rn(t, t.updateQueue), dl(t), null;
        case 4:
            return Kt(), l === null && Bf(t.stateNode.containerInfo), dl(t), null;
        case 10:
            return qt(t.type), dl(t), null;
        case 19:
            if (_(Tl), e = t.memoizedState, e === null)
                return dl(t), null;
            if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
                if (u)
                    Iu(e, !1);
                else {
                    if (yl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null;) {
                            if (n = nn(l), n !== null) {
                                for (t.flags |= 128, Iu(e, !1), l = n.updateQueue, t.updateQueue = l, rn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null;)
                                    is(a, l),
                                    a = a.sibling;
                                return M(Tl, Tl.current & 1 | 2), t.child
                            }
                            l = l.sibling
                        }
                    e.tail !== null && Et() > yn && (t.flags |= 128, u = !0, Iu(e, !1), t.lanes = 4194304)
                }
            else {
                if (!u)
                    if (l = nn(n), l !== null) {
                        if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, rn(t, l), Iu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !I)
                            return dl(t), null
                    } else
                        2 * Et() - e.renderingStartTime > yn && a !== 536870912 && (t.flags |= 128, u = !0, Iu(e, !1), t.lanes = 4194304);
                e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n)
            }
            return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = Et(), t.sibling = null, l = Tl.current, M(Tl, u ? l & 1 | 2 : l & 1), t) : (dl(t), null);
        case 22:
        case 23:
            return jt(t), Yi(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), a = t.updateQueue, a !== null && rn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && _(_a), null;
        case 24:
            return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(El), dl(t), null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(g(156, t.tag))
    }
    function Bd(l, t) {
        switch (xi(t), t.tag) {
        case 1:
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
            return qt(El), Kt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
            return xe(t), null;
        case 13:
            if (jt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(g(340));
                qu()
            }
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
            return _(Tl), null;
        case 4:
            return Kt(), null;
        case 10:
            return qt(t.type), null;
        case 22:
        case 23:
            return jt(t), Yi(), l !== null && _(_a), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
            return qt(El), null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function N0(l, t) {
        switch (xi(t), t.tag) {
        case 3:
            qt(El),
            Kt();
            break;
        case 26:
        case 27:
        case 5:
            xe(t);
            break;
        case 4:
            Kt();
            break;
        case 13:
            jt(t);
            break;
        case 19:
            _(Tl);
            break;
        case 10:
            qt(t.type);
            break;
        case 22:
        case 23:
            jt(t),
            Yi(),
            l !== null && _(_a);
            break;
        case 24:
            qt(El)
        }
    }
    function Pu(l, t) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var e = u.next;
                a = e;
                do {
                    if ((a.tag & l) === l) {
                        u = void 0;
                        var n = a.create,
                            i = a.inst;
                        u = n(),
                        i.destroy = u
                    }
                    a = a.next
                } while (a !== e)
            }
        } catch (f) {
            fl(t, t.return, f)
        }
    }
    function aa(l, t, a) {
        try {
            var u = t.updateQueue,
                e = u !== null ? u.lastEffect : null;
            if (e !== null) {
                var n = e.next;
                u = n;
                do {
                    if ((u.tag & l) === l) {
                        var i = u.inst,
                            f = i.destroy;
                        if (f !== void 0) {
                            i.destroy = void 0,
                            e = t;
                            var c = a,
                                h = f;
                            try {
                                h()
                            } catch (b) {
                                fl(e, c, b)
                            }
                        }
                    }
                    u = u.next
                } while (u !== n)
            }
        } catch (b) {
            fl(t, t.return, b)
        }
    }
    function B0(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var a = l.stateNode;
            try {
                xs(t, a)
            } catch (u) {
                fl(l, l.return, u)
            }
        }
    }
    function Y0(l, t, a) {
        a.props = Ua(l.type, l.memoizedProps),
        a.state = l.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (u) {
            fl(l, t, u)
        }
    }
    function le(l, t) {
        try {
            var a = l.ref;
            if (a !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var u = l.stateNode;
                    break;
                case 30:
                    u = l.stateNode;
                    break;
                default:
                    u = l.stateNode
                }
                typeof a == "function" ? l.refCleanup = a(u) : a.current = u
            }
        } catch (e) {
            fl(l, t, e)
        }
    }
    function zt(l, t) {
        var a = l.ref,
            u = l.refCleanup;
        if (a !== null)
            if (typeof u == "function")
                try {
                    u()
                } catch (e) {
                    fl(l, t, e)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (e) {
                    fl(l, t, e)
                }
            else
                a.current = null
    }
    function q0(l) {
        var t = l.type,
            a = l.memoizedProps,
            u = l.stateNode;
        try {
            l:
            switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && u.focus();
                break l;
            case "img":
                a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet)
            }
        } catch (e) {
            fl(l, l.return, e)
        }
    }
    function of(l, t, a) {
        try {
            var u = l.stateNode;
            th(u, l.type, a, t),
            u[Kl] = t
        } catch (e) {
            fl(l, l.return, e)
        }
    }
    function C0(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && oa(l.type) || l.tag === 4
    }
    function rf(l) {
        l:
        for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || C0(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && oa(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function df(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6)
            l = l.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tn));
        else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
            for (df(l, t, a), l = l.sibling; l !== null;)
                df(l, t, a),
                l = l.sibling
    }
    function dn(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6)
            l = l.stateNode,
            t ? a.insertBefore(l, t) : a.appendChild(l);
        else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode), l = l.child, l !== null))
            for (dn(l, t, a), l = l.sibling; l !== null;)
                dn(l, t, a),
                l = l.sibling
    }
    function j0(l) {
        var t = l.stateNode,
            a = l.memoizedProps;
        try {
            for (var u = l.type, e = t.attributes; e.length;)
                t.removeAttributeNode(e[0]);
            ql(t, u, a),
            t[Xl] = l,
            t[Kl] = a
        } catch (n) {
            fl(l, l.return, n)
        }
    }
    var Qt = !1,
        gl = !1,
        hf = !1,
        X0 = typeof WeakSet == "function" ? WeakSet : Set,
        Rl = null;
    function Yd(l, t) {
        if (l = l.containerInfo, Cf = Rn, l = $c(l), oi(l)) {
            if ("selectionStart" in l)
                var a = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l:
                {
                    a = (a = l.ownerDocument) && a.defaultView || window;
                    var u = a.getSelection && a.getSelection();
                    if (u && u.rangeCount !== 0) {
                        a = u.anchorNode;
                        var e = u.anchorOffset,
                            n = u.focusNode;
                        u = u.focusOffset;
                        try {
                            a.nodeType,
                            n.nodeType
                        } catch {
                            a = null;
                            break l
                        }
                        var i = 0,
                            f = -1,
                            c = -1,
                            h = 0,
                            b = 0,
                            S = l,
                            y = null;
                        t:
                        for (;;) {
                            for (var v; S !== a || e !== 0 && S.nodeType !== 3 || (f = i + e), S !== n || u !== 0 && S.nodeType !== 3 || (c = i + u), S.nodeType === 3 && (i += S.nodeValue.length), (v = S.firstChild) !== null;)
                                y = S,
                                S = v;
                            for (;;) {
                                if (S === l)
                                    break t;
                                if (y === a && ++h === e && (f = i), y === n && ++b === u && (c = i), (v = S.nextSibling) !== null)
                                    break;
                                S = y,
                                y = S.parentNode
                            }
                            S = v
                        }
                        a = f === -1 || c === -1 ? null : {
                            start: f,
                            end: c
                        }
                    } else
                        a = null
                }a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (jf = {
            focusedElem: l,
            selectionRange: a
        }, Rn = !1, Rl = t; Rl !== null;)
            if (t = Rl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
                l.return = t,
                Rl = l;
            else
                for (; Rl !== null;) {
                    switch (t = Rl, n = t.alternate, l = t.flags, t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            a = t,
                            e = n.memoizedProps,
                            n = n.memoizedState,
                            u = a.stateNode;
                            try {
                                var C = Ua(a.type, e, a.elementType === a.type);
                                l = u.getSnapshotBeforeUpdate(C, n),
                                u.__reactInternalSnapshotBeforeUpdate = l
                            } catch (Y) {
                                fl(a, a.return, Y)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                                Qf(l);
                            else if (a === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Qf(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(g(163))
                    }
                    if (l = t.sibling, l !== null) {
                        l.return = t.return,
                        Rl = l;
                        break
                    }
                    Rl = t.return
                }
    }
    function G0(l, t, a) {
        var u = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            ua(l, a),
            u & 4 && Pu(5, a);
            break;
        case 1:
            if (ua(l, a), u & 4)
                if (l = a.stateNode, t === null)
                    try {
                        l.componentDidMount()
                    } catch (i) {
                        fl(a, a.return, i)
                    }
                else {
                    var e = Ua(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        fl(a, a.return, i)
                    }
                }
            u & 64 && B0(a),
            u & 512 && le(a, a.return);
            break;
        case 3:
            if (ua(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
                if (t = null, a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    xs(l, t)
                } catch (i) {
                    fl(a, a.return, i)
                }
            }
            break;
        case 27:
            t === null && u & 4 && j0(a);
        case 26:
        case 5:
            ua(l, a),
            t === null && u & 4 && q0(a),
            u & 512 && le(a, a.return);
            break;
        case 12:
            ua(l, a);
            break;
        case 13:
            ua(l, a),
            u & 4 && V0(l, a),
            u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Ld.bind(null, a), ch(l, a))));
            break;
        case 22:
            if (u = a.memoizedState !== null || Qt, !u) {
                t = t !== null && t.memoizedState !== null || gl,
                e = Qt;
                var n = gl;
                Qt = u,
                (gl = t) && !n ? ea(l, a, (a.subtreeFlags & 8772) !== 0) : ua(l, a),
                Qt = e,
                gl = n
            }
            break;
        case 30:
            break;
        default:
            ua(l, a)
        }
    }
    function Q0(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, Q0(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode, t !== null && Kn(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var rl = null,
        Fl = !1;
    function Zt(l, t, a) {
        for (a = a.child; a !== null;)
            Z0(l, t, a),
            a = a.sibling
    }
    function Z0(l, t, a) {
        if (Il && typeof Il.onCommitFiberUnmount == "function")
            try {
                Il.onCommitFiberUnmount(xu, a)
            } catch {}
        switch (a.tag) {
        case 26:
            gl || zt(a, t),
            Zt(l, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
            break;
        case 27:
            gl || zt(a, t);
            var u = rl,
                e = Fl;
            oa(a.type) && (rl = a.stateNode, Fl = !1),
            Zt(l, t, a),
            se(a.stateNode),
            rl = u,
            Fl = e;
            break;
        case 5:
            gl || zt(a, t);
        case 6:
            if (u = rl, e = Fl, rl = null, Zt(l, t, a), rl = u, Fl = e, rl !== null)
                if (Fl)
                    try {
                        (rl.nodeType === 9 ? rl.body : rl.nodeName === "HTML" ? rl.ownerDocument.body : rl).removeChild(a.stateNode)
                    } catch (n) {
                        fl(a, t, n)
                    }
                else
                    try {
                        rl.removeChild(a.stateNode)
                    } catch (n) {
                        fl(a, t, n)
                    }
            break;
        case 18:
            rl !== null && (Fl ? (l = rl, Uo(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), me(l)) : Uo(rl, a.stateNode));
            break;
        case 4:
            u = rl,
            e = Fl,
            rl = a.stateNode.containerInfo,
            Fl = !0,
            Zt(l, t, a),
            rl = u,
            Fl = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            gl || aa(2, a, t),
            gl || aa(4, a, t),
            Zt(l, t, a);
            break;
        case 1:
            gl || (zt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Y0(a, t, u)),
            Zt(l, t, a);
            break;
        case 21:
            Zt(l, t, a);
            break;
        case 22:
            gl = (u = gl) || a.memoizedState !== null,
            Zt(l, t, a),
            gl = u;
            break;
        default:
            Zt(l, t, a)
        }
    }
    function V0(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
            try {
                me(l)
            } catch (a) {
                fl(t, t.return, a)
            }
    }
    function qd(l) {
        switch (l.tag) {
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new X0), t;
        case 22:
            return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new X0), t;
        default:
            throw Error(g(435, l.tag))
        }
    }
    function yf(l, t) {
        var a = qd(l);
        t.forEach(function(u) {
            var e = Kd.bind(null, l, u);
            a.has(u) || (a.add(u), u.then(e, e))
        })
    }
    function at(l, t) {
        var a = t.deletions;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = a[u],
                    n = l,
                    i = t,
                    f = i;
                l:
                for (; f !== null;) {
                    switch (f.tag) {
                    case 27:
                        if (oa(f.type)) {
                            rl = f.stateNode,
                            Fl = !1;
                            break l
                        }
                        break;
                    case 5:
                        rl = f.stateNode,
                        Fl = !1;
                        break l;
                    case 3:
                    case 4:
                        rl = f.stateNode.containerInfo,
                        Fl = !0;
                        break l
                    }
                    f = f.return
                }
                if (rl === null)
                    throw Error(g(160));
                Z0(n, i, e),
                rl = null,
                Fl = !1,
                n = e.alternate,
                n !== null && (n.return = null),
                e.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;)
                L0(t, l),
                t = t.sibling
    }
    var pt = null;
    function L0(l, t) {
        var a = l.alternate,
            u = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            at(t, l),
            ut(l),
            u & 4 && (aa(3, l, l.return), Pu(3, l), aa(5, l, l.return));
            break;
        case 1:
            at(t, l),
            ut(l),
            u & 512 && (gl || a === null || zt(a, a.return)),
            u & 64 && Qt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
            break;
        case 26:
            var e = pt;
            if (at(t, l), ut(l), u & 512 && (gl || a === null || zt(a, a.return)), u & 4) {
                var n = a !== null ? a.memoizedState : null;
                if (u = l.memoizedState, a === null)
                    if (u === null)
                        if (l.stateNode === null) {
                            l:
                            {
                                u = l.type,
                                a = l.memoizedProps,
                                e = e.ownerDocument || e;
                                t:
                                switch (u) {
                                case "title":
                                    n = e.getElementsByTagName("title")[0],
                                    (!n || n[Au] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(n, e.querySelector("head > title"))),
                                    ql(n, u, a),
                                    n[Xl] = l,
                                    Ml(n),
                                    u = n;
                                    break l;
                                case "link":
                                    var i = Xo("link", "href", e).get(u + (a.href || ""));
                                    if (i) {
                                        for (var f = 0; f < i.length; f++)
                                            if (n = i[f], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                i.splice(f, 1);
                                                break t
                                            }
                                    }
                                    n = e.createElement(u),
                                    ql(n, u, a),
                                    e.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (i = Xo("meta", "content", e).get(u + (a.content || ""))) {
                                        for (f = 0; f < i.length; f++)
                                            if (n = i[f], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                i.splice(f, 1);
                                                break t
                                            }
                                    }
                                    n = e.createElement(u),
                                    ql(n, u, a),
                                    e.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(g(468, u))
                                }
                                n[Xl] = l,
                                Ml(n),
                                u = n
                            }l.stateNode = u
                        } else
                            Go(e, l.type, l.stateNode);
                    else
                        l.stateNode = jo(e, u, l.memoizedProps);
                else
                    n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Go(e, l.type, l.stateNode) : jo(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && of(l, l.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            at(t, l),
            ut(l),
            u & 512 && (gl || a === null || zt(a, a.return)),
            a !== null && u & 4 && of(l, l.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (at(t, l), ut(l), u & 512 && (gl || a === null || zt(a, a.return)), l.flags & 32) {
                e = l.stateNode;
                try {
                    Va(e, "")
                } catch (v) {
                    fl(l, l.return, v)
                }
            }
            u & 4 && l.stateNode != null && (e = l.memoizedProps, of(l, e, a !== null ? a.memoizedProps : e)),
            u & 1024 && (hf = !0);
            break;
        case 6:
            if (at(t, l), ut(l), u & 4) {
                if (l.stateNode === null)
                    throw Error(g(162));
                u = l.memoizedProps,
                a = l.stateNode;
                try {
                    a.nodeValue = u
                } catch (v) {
                    fl(l, l.return, v)
                }
            }
            break;
        case 3:
            if (Dn = null, e = pt, pt = zn(t.containerInfo), at(t, l), pt = e, ut(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    me(t.containerInfo)
                } catch (v) {
                    fl(l, l.return, v)
                }
            hf && (hf = !1, K0(l));
            break;
        case 4:
            u = pt,
            pt = zn(l.stateNode.containerInfo),
            at(t, l),
            ut(l),
            pt = u;
            break;
        case 12:
            at(t, l),
            ut(l);
            break;
        case 13:
            at(t, l),
            ut(l),
            l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Sf = Et()),
            u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yf(l, u)));
            break;
        case 22:
            e = l.memoizedState !== null;
            var c = a !== null && a.memoizedState !== null,
                h = Qt,
                b = gl;
            if (Qt = h || e, gl = b || c, at(t, l), gl = b, Qt = h, ut(l), u & 8192)
                l:
                for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || c || Qt || gl || Ha(l)), a = null, t = l;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            c = a = t;
                            try {
                                if (n = c.stateNode, e)
                                    i = n.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    f = c.stateNode;
                                    var S = c.memoizedProps.style,
                                        y = S != null && S.hasOwnProperty("display") ? S.display : null;
                                    f.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim()
                                }
                            } catch (v) {
                                fl(c, c.return, v)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            c = t;
                            try {
                                c.stateNode.nodeValue = e ? "" : c.memoizedProps
                            } catch (v) {
                                fl(c, c.return, v)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l)
                            break l;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, yf(l, a))));
            break;
        case 19:
            at(t, l),
            ut(l),
            u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yf(l, u)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            at(t, l),
            ut(l)
        }
    }
    function ut(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var a, u = l.return; u !== null;) {
                    if (C0(u)) {
                        a = u;
                        break
                    }
                    u = u.return
                }
                if (a == null)
                    throw Error(g(160));
                switch (a.tag) {
                case 27:
                    var e = a.stateNode,
                        n = rf(l);
                    dn(l, n, e);
                    break;
                case 5:
                    var i = a.stateNode;
                    a.flags & 32 && (Va(i, ""), a.flags &= -33);
                    var f = rf(l);
                    dn(l, f, i);
                    break;
                case 3:
                case 4:
                    var c = a.stateNode.containerInfo,
                        h = rf(l);
                    df(l, h, c);
                    break;
                default:
                    throw Error(g(161))
                }
            } catch (b) {
                fl(l, l.return, b)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function K0(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var t = l;
                K0(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function ua(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;)
                G0(l, t.alternate, t),
                t = t.sibling
    }
    function Ha(l) {
        for (l = l.child; l !== null;) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                aa(4, t, t.return),
                Ha(t);
                break;
            case 1:
                zt(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Y0(t, t.return, a),
                Ha(t);
                break;
            case 27:
                se(t.stateNode);
            case 26:
            case 5:
                zt(t, t.return),
                Ha(t);
                break;
            case 22:
                t.memoizedState === null && Ha(t);
                break;
            case 30:
                Ha(t);
                break;
            default:
                Ha(t)
            }
            l = l.sibling
        }
    }
    function ea(l, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var u = t.alternate,
                e = l,
                n = t,
                i = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                ea(e, n, a),
                Pu(4, n);
                break;
            case 1:
                if (ea(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
                    try {
                        e.componentDidMount()
                    } catch (h) {
                        fl(u, u.return, h)
                    }
                if (u = n, e = u.updateQueue, e !== null) {
                    var f = u.stateNode;
                    try {
                        var c = e.shared.hiddenCallbacks;
                        if (c !== null)
                            for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                                Ss(c[e], f)
                    } catch (h) {
                        fl(u, u.return, h)
                    }
                }
                a && i & 64 && B0(n),
                le(n, n.return);
                break;
            case 27:
                j0(n);
            case 26:
            case 5:
                ea(e, n, a),
                a && u === null && i & 4 && q0(n),
                le(n, n.return);
                break;
            case 12:
                ea(e, n, a);
                break;
            case 13:
                ea(e, n, a),
                a && i & 4 && V0(e, n);
                break;
            case 22:
                n.memoizedState === null && ea(e, n, a),
                le(n, n.return);
                break;
            case 30:
                break;
            default:
                ea(e, n, a)
            }
            t = t.sibling
        }
    }
    function vf(l, t) {
        var a = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== a && (l != null && l.refCount++, a != null && Xu(a))
    }
    function gf(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++, l != null && Xu(l))
    }
    function Ot(l, t, a, u) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;)
                J0(l, t, a, u),
                t = t.sibling
    }
    function J0(l, t, a, u) {
        var e = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Ot(l, t, a, u),
            e & 2048 && Pu(9, t);
            break;
        case 1:
            Ot(l, t, a, u);
            break;
        case 3:
            Ot(l, t, a, u),
            e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xu(l)));
            break;
        case 12:
            if (e & 2048) {
                Ot(l, t, a, u),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps,
                        i = n.id,
                        f = n.onPostCommit;
                    typeof f == "function" && f(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (c) {
                    fl(t, t.return, c)
                }
            } else
                Ot(l, t, a, u);
            break;
        case 13:
            Ot(l, t, a, u);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            i = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? Ot(l, t, a, u) : te(l, t) : n._visibility & 2 ? Ot(l, t, a, u) : (n._visibility |= 2, cu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
            e & 2048 && vf(i, t);
            break;
        case 24:
            Ot(l, t, a, u),
            e & 2048 && gf(t.alternate, t);
            break;
        default:
            Ot(l, t, a, u)
        }
    }
    function cu(l, t, a, u, e) {
        for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var n = l,
                i = t,
                f = a,
                c = u,
                h = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                cu(n, i, f, c, e),
                Pu(8, i);
                break;
            case 23:
                break;
            case 22:
                var b = i.stateNode;
                i.memoizedState !== null ? b._visibility & 2 ? cu(n, i, f, c, e) : te(n, i) : (b._visibility |= 2, cu(n, i, f, c, e)),
                e && h & 2048 && vf(i.alternate, i);
                break;
            case 24:
                cu(n, i, f, c, e),
                e && h & 2048 && gf(i.alternate, i);
                break;
            default:
                cu(n, i, f, c, e)
            }
            t = t.sibling
        }
    }
    function te(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = l,
                    u = t,
                    e = u.flags;
                switch (u.tag) {
                case 22:
                    te(a, u),
                    e & 2048 && vf(u.alternate, u);
                    break;
                case 24:
                    te(a, u),
                    e & 2048 && gf(u.alternate, u);
                    break;
                default:
                    te(a, u)
                }
                t = t.sibling
            }
    }
    var ae = 8192;
    function su(l) {
        if (l.subtreeFlags & ae)
            for (l = l.child; l !== null;)
                w0(l),
                l = l.sibling
    }
    function w0(l) {
        switch (l.tag) {
        case 26:
            su(l),
            l.flags & ae && l.memoizedState !== null && xh(pt, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            su(l);
            break;
        case 3:
        case 4:
            var t = pt;
            pt = zn(l.stateNode.containerInfo),
            su(l),
            pt = t;
            break;
        case 22:
            l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = ae, ae = 16777216, su(l), ae = t) : su(l));
            break;
        default:
            su(l)
        }
    }
    function F0(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling,
            l.sibling = null,
            l = t;
            while (l !== null)
        }
    }
    function ue(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    Rl = u,
                    $0(u, l)
                }
            F0(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;)
                W0(l),
                l = l.sibling
    }
    function W0(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            ue(l),
            l.flags & 2048 && aa(9, l, l.return);
            break;
        case 3:
            ue(l);
            break;
        case 12:
            ue(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : ue(l);
            break;
        default:
            ue(l)
        }
    }
    function hn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    Rl = u,
                    $0(u, l)
                }
            F0(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
            case 0:
            case 11:
            case 15:
                aa(8, t, t.return),
                hn(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3, hn(t));
                break;
            default:
                hn(t)
            }
            l = l.sibling
        }
    }
    function $0(l, t) {
        for (; Rl !== null;) {
            var a = Rl;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                aa(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var u = a.memoizedState.cachePool.pool;
                    u != null && u.refCount++
                }
                break;
            case 24:
                Xu(a.memoizedState.cache)
            }
            if (u = a.child, u !== null)
                u.return = a,
                Rl = u;
            else
                l:
                for (a = l; Rl !== null;) {
                    u = Rl;
                    var e = u.sibling,
                        n = u.return;
                    if (Q0(u), u === a) {
                        Rl = null;
                        break l
                    }
                    if (e !== null) {
                        e.return = n,
                        Rl = e;
                        break l
                    }
                    Rl = n
                }
        }
    }
    var Cd = {
            getCacheForType: function(l) {
                var t = Gl(El),
                    a = t.data.get(l);
                return a === void 0 && (a = l(), t.data.set(l, a)), a
            }
        },
        jd = typeof WeakMap == "function" ? WeakMap : Map,
        ll = 0,
        cl = null,
        L = null,
        w = 0,
        tl = 0,
        et = null,
        na = !1,
        ou = !1,
        mf = !1,
        Vt = 0,
        yl = 0,
        ia = 0,
        Na = 0,
        bf = 0,
        yt = 0,
        ru = 0,
        ee = null,
        Wl = null,
        pf = !1,
        Sf = 0,
        yn = 1 / 0,
        vn = null,
        fa = null,
        Yl = 0,
        ca = null,
        du = null,
        hu = 0,
        xf = 0,
        Ef = null,
        k0 = null,
        ne = 0,
        Tf = null;
    function nt() {
        if ((ll & 2) !== 0 && w !== 0)
            return w & -w;
        if (m.T !== null) {
            var l = lu;
            return l !== 0 ? l : Rf()
        }
        return hc()
    }
    function I0() {
        yt === 0 && (yt = (w & 536870912) === 0 || I ? sc() : 536870912);
        var l = ht.current;
        return l !== null && (l.flags |= 32), yt
    }
    function it(l, t, a) {
        (l === cl && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (yu(l, 0), sa(l, w, yt, !1)),
        Tu(l, a),
        ((ll & 2) === 0 || l !== cl) && (l === cl && ((ll & 2) === 0 && (Na |= a), yl === 4 && sa(l, w, yt, !1)), Dt(l))
    }
    function P0(l, t, a) {
        if ((ll & 6) !== 0)
            throw Error(g(327));
        var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Eu(l, t),
            e = u ? Qd(l, t) : Of(l, t, !0),
            n = u;
        do {
            if (e === 0) {
                ou && !u && sa(l, t, 0, !1);
                break
            } else {
                if (a = l.current.alternate, n && !Xd(a)) {
                    e = Of(l, t, !1),
                    n = !1;
                    continue
                }
                if (e === 2) {
                    if (n = t, l.errorRecoveryDisabledLanes & n)
                        var i = 0;
                    else
                        i = l.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l:
                        {
                            var f = l;
                            e = ee;
                            var c = f.current.memoizedState.isDehydrated;
                            if (c && (yu(f, i).flags |= 256), i = Of(f, i, !1), i !== 2) {
                                if (mf && !c) {
                                    f.errorRecoveryDisabledLanes |= n,
                                    Na |= n,
                                    e = 4;
                                    break l
                                }
                                n = Wl,
                                Wl = e,
                                n !== null && (Wl === null ? Wl = n : Wl.push.apply(Wl, n))
                            }
                            e = i
                        }if (n = !1, e !== 2)
                            continue
                    }
                }
                if (e === 1) {
                    yu(l, 0),
                    sa(l, t, 0, !0);
                    break
                }
                l:
                {
                    switch (u = l, n = e, n) {
                    case 0:
                    case 1:
                        throw Error(g(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        sa(u, t, yt, !na);
                        break l;
                    case 2:
                        Wl = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(g(329))
                    }
                    if ((t & 62914560) === t && (e = Sf + 300 - Et(), 10 < e)) {
                        if (sa(u, t, yt, !na), ze(u, 0, !0) !== 0)
                            break l;
                        u.timeoutHandle = _o(lo.bind(null, u, a, Wl, vn, pf, t, yt, Na, ru, na, n, 2, -0, 0), e);
                        break l
                    }
                    lo(u, a, Wl, vn, pf, t, yt, Na, ru, na, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Dt(l)
    }
    function lo(l, t, a, u, e, n, i, f, c, h, b, S, y, v) {
        if (l.timeoutHandle = -1, S = t.subtreeFlags, (S & 8192 || (S & 16785408) === 16785408) && (de = {
            stylesheets: null,
            count: 0,
            unsuspend: Sh
        }, w0(t), S = Eh(), S !== null)) {
            l.cancelPendingCommit = S(fo.bind(null, l, t, n, a, u, e, i, f, c, b, 1, y, v)),
            sa(l, n, i, !h);
            return
        }
        fo(l, t, n, a, u, e, i, f, c)
    }
    function Xd(l) {
        for (var t = l;;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var u = 0; u < a.length; u++) {
                    var e = a[u],
                        n = e.getSnapshot;
                    e = e.value;
                    try {
                        if (!lt(n(), e))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child, t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function sa(l, t, a, u) {
        t &= ~bf,
        t &= ~Na,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        u && (l.warmLanes |= t),
        u = l.expirationTimes;
        for (var e = t; 0 < e;) {
            var n = 31 - Pl(e),
                i = 1 << n;
            u[n] = -1,
            e &= ~i
        }
        a !== 0 && rc(l, a, t)
    }
    function gn() {
        return (ll & 6) === 0 ? (ie(0), !1) : !0
    }
    function Af() {
        if (L !== null) {
            if (tl === 0)
                var l = L.return;
            else
                l = L,
                Yt = Da = null,
                Gi(l),
                iu = null,
                $u = 0,
                l = L;
            for (; l !== null;)
                N0(l.alternate, l),
                l = l.return;
            L = null
        }
    }
    function yu(l, t) {
        var a = l.timeoutHandle;
        a !== -1 && (l.timeoutHandle = -1, uh(a)),
        a = l.cancelPendingCommit,
        a !== null && (l.cancelPendingCommit = null, a()),
        Af(),
        cl = l,
        L = a = Ht(l.current, null),
        w = t,
        tl = 0,
        et = null,
        na = !1,
        ou = Eu(l, t),
        mf = !1,
        ru = yt = bf = Na = ia = yl = 0,
        Wl = ee = null,
        pf = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var u = l.entangledLanes;
        if (u !== 0)
            for (l = l.entanglements, u &= t; 0 < u;) {
                var e = 31 - Pl(u),
                    n = 1 << e;
                t |= l[e],
                u &= ~n
            }
        return Vt = t, Ce(), a
    }
    function to(l, t) {
        Q = null,
        m.H = an,
        t === Qu || t === Je ? (t = bs(), tl = 3) : t === vs ? (t = bs(), tl = 4) : tl = t === p0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        et = t,
        L === null && (yl = 1, cn(l, st(t, l.current)))
    }
    function ao() {
        var l = m.H;
        return m.H = an, l === null ? an : l
    }
    function uo() {
        var l = m.A;
        return m.A = Cd, l
    }
    function zf() {
        yl = 4,
        na || (w & 4194048) !== w && ht.current !== null || (ou = !0),
        (ia & 134217727) === 0 && (Na & 134217727) === 0 || cl === null || sa(cl, w, yt, !1)
    }
    function Of(l, t, a) {
        var u = ll;
        ll |= 2;
        var e = ao(),
            n = uo();
        (cl !== l || w !== t) && (vn = null, yu(l, t)),
        t = !1;
        var i = yl;
        l:
        do try {
            if (tl !== 0 && L !== null) {
                var f = L,
                    c = et;
                switch (tl) {
                case 8:
                    Af(),
                    i = 6;
                    break l;
                case 3:
                case 2:
                case 9:
                case 6:
                    ht.current === null && (t = !0);
                    var h = tl;
                    if (tl = 0, et = null, vu(l, f, c, h), a && ou) {
                        i = 0;
                        break l
                    }
                    break;
                default:
                    h = tl,
                    tl = 0,
                    et = null,
                    vu(l, f, c, h)
                }
            }
            Gd(),
            i = yl;
            break
        } catch (b) {
            to(l, b)
        }
        while (!0);
        return t && l.shellSuspendCounter++, Yt = Da = null, ll = u, m.H = e, m.A = n, L === null && (cl = null, w = 0, Ce()), i
    }
    function Gd() {
        for (; L !== null;)
            eo(L)
    }
    function Qd(l, t) {
        var a = ll;
        ll |= 2;
        var u = ao(),
            e = uo();
        cl !== l || w !== t ? (vn = null, yn = Et() + 500, yu(l, t)) : ou = Eu(l, t);
        l:
        do try {
            if (tl !== 0 && L !== null) {
                t = L;
                var n = et;
                t:
                switch (tl) {
                case 1:
                    tl = 0,
                    et = null,
                    vu(l, t, n, 1);
                    break;
                case 2:
                case 9:
                    if (gs(n)) {
                        tl = 0,
                        et = null,
                        no(t);
                        break
                    }
                    t = function() {
                        tl !== 2 && tl !== 9 || cl !== l || (tl = 7),
                        Dt(l)
                    },
                    n.then(t, t);
                    break l;
                case 3:
                    tl = 7;
                    break l;
                case 4:
                    tl = 5;
                    break l;
                case 7:
                    gs(n) ? (tl = 0, et = null, no(t)) : (tl = 0, et = null, vu(l, t, n, 7));
                    break;
                case 5:
                    var i = null;
                    switch (L.tag) {
                    case 26:
                        i = L.memoizedState;
                    case 5:
                    case 27:
                        var f = L;
                        if (!i || Qo(i)) {
                            tl = 0,
                            et = null;
                            var c = f.sibling;
                            if (c !== null)
                                L = c;
                            else {
                                var h = f.return;
                                h !== null ? (L = h, mn(h)) : L = null
                            }
                            break t
                        }
                    }
                    tl = 0,
                    et = null,
                    vu(l, t, n, 5);
                    break;
                case 6:
                    tl = 0,
                    et = null,
                    vu(l, t, n, 6);
                    break;
                case 8:
                    Af(),
                    yl = 6;
                    break l;
                default:
                    throw Error(g(462))
                }
            }
            Zd();
            break
        } catch (b) {
            to(l, b)
        }
        while (!0);
        return Yt = Da = null, m.H = u, m.A = e, ll = a, L !== null ? 0 : (cl = null, w = 0, Ce(), yl)
    }
    function Zd() {
        for (; L !== null && !or();)
            eo(L)
    }
    function eo(l) {
        var t = U0(l.alternate, l, Vt);
        l.memoizedProps = l.pendingProps,
        t === null ? mn(l) : L = t
    }
    function no(l) {
        var t = l,
            a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = z0(a, t, t.pendingProps, t.type, void 0, w);
            break;
        case 11:
            t = z0(a, t, t.pendingProps, t.type.render, t.ref, w);
            break;
        case 5:
            Gi(t);
        default:
            N0(a, t),
            t = L = is(t, Vt),
            t = U0(a, t, Vt)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? mn(l) : L = t
    }
    function vu(l, t, a, u) {
        Yt = Da = null,
        Gi(t),
        iu = null,
        $u = 0;
        var e = t.return;
        try {
            if (Ud(l, e, t, a, w)) {
                yl = 1,
                cn(l, st(a, l.current)),
                L = null;
                return
            }
        } catch (n) {
            if (e !== null)
                throw L = e, n;
            yl = 1,
            cn(l, st(a, l.current)),
            L = null;
            return
        }
        t.flags & 32768 ? (I || u === 1 ? l = !0 : ou || (w & 536870912) !== 0 ? l = !1 : (na = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = ht.current, u !== null && u.tag === 13 && (u.flags |= 16384))), io(t, l)) : mn(t)
    }
    function mn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                io(t, na);
                return
            }
            l = t.return;
            var a = Nd(t.alternate, t, Vt);
            if (a !== null) {
                L = a;
                return
            }
            if (t = t.sibling, t !== null) {
                L = t;
                return
            }
            L = t = l
        } while (t !== null);
        yl === 0 && (yl = 5)
    }
    function io(l, t) {
        do {
            var a = Bd(l.alternate, l);
            if (a !== null) {
                a.flags &= 32767,
                L = a;
                return
            }
            if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
                L = l;
                return
            }
            L = l = a
        } while (l !== null);
        yl = 6,
        L = null
    }
    function fo(l, t, a, u, e, n, i, f, c) {
        l.cancelPendingCommit = null;
        do bn();
        while (Yl !== 0);
        if ((ll & 6) !== 0)
            throw Error(g(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(g(177));
            if (n = t.lanes | t.childLanes, n |= vi, Sr(l, a, n, i, f, c), l === cl && (L = cl = null, w = 0), du = t, ca = l, hu = a, xf = n, Ef = e, k0 = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Jd(Ee, function() {
                return ho(), null
            })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
                u = m.T,
                m.T = null,
                e = D.p,
                D.p = 2,
                i = ll,
                ll |= 4;
                try {
                    Yd(l, t, a)
                } finally {
                    ll = i,
                    D.p = e,
                    m.T = u
                }
            }
            Yl = 1,
            co(),
            so(),
            oo()
        }
    }
    function co() {
        if (Yl === 1) {
            Yl = 0;
            var l = ca,
                t = du,
                a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = m.T,
                m.T = null;
                var u = D.p;
                D.p = 2;
                var e = ll;
                ll |= 4;
                try {
                    L0(t, l);
                    var n = jf,
                        i = $c(l.containerInfo),
                        f = n.focusedElem,
                        c = n.selectionRange;
                    if (i !== f && f && f.ownerDocument && Wc(f.ownerDocument.documentElement, f)) {
                        if (c !== null && oi(f)) {
                            var h = c.start,
                                b = c.end;
                            if (b === void 0 && (b = h), "selectionStart" in f)
                                f.selectionStart = h,
                                f.selectionEnd = Math.min(b, f.value.length);
                            else {
                                var S = f.ownerDocument || document,
                                    y = S && S.defaultView || window;
                                if (y.getSelection) {
                                    var v = y.getSelection(),
                                        C = f.textContent.length,
                                        Y = Math.min(c.start, C),
                                        nl = c.end === void 0 ? Y : Math.min(c.end, C);
                                    !v.extend && Y > nl && (i = nl, nl = Y, Y = i);
                                    var r = Fc(f, Y),
                                        o = Fc(f, nl);
                                    if (r && o && (v.rangeCount !== 1 || v.anchorNode !== r.node || v.anchorOffset !== r.offset || v.focusNode !== o.node || v.focusOffset !== o.offset)) {
                                        var d = S.createRange();
                                        d.setStart(r.node, r.offset),
                                        v.removeAllRanges(),
                                        Y > nl ? (v.addRange(d), v.extend(o.node, o.offset)) : (d.setEnd(o.node, o.offset), v.addRange(d))
                                    }
                                }
                            }
                        }
                        for (S = [], v = f; v = v.parentNode;)
                            v.nodeType === 1 && S.push({
                                element: v,
                                left: v.scrollLeft,
                                top: v.scrollTop
                            });
                        for (typeof f.focus == "function" && f.focus(), f = 0; f < S.length; f++) {
                            var p = S[f];
                            p.element.scrollLeft = p.left,
                            p.element.scrollTop = p.top
                        }
                    }
                    Rn = !!Cf,
                    jf = Cf = null
                } finally {
                    ll = e,
                    D.p = u,
                    m.T = a
                }
            }
            l.current = t,
            Yl = 2
        }
    }
    function so() {
        if (Yl === 2) {
            Yl = 0;
            var l = ca,
                t = du,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = m.T,
                m.T = null;
                var u = D.p;
                D.p = 2;
                var e = ll;
                ll |= 4;
                try {
                    G0(l, t.alternate, t)
                } finally {
                    ll = e,
                    D.p = u,
                    m.T = a
                }
            }
            Yl = 3
        }
    }
    function oo() {
        if (Yl === 4 || Yl === 3) {
            Yl = 0,
            rr();
            var l = ca,
                t = du,
                a = hu,
                u = k0;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Yl = 5 : (Yl = 0, du = ca = null, ro(l, l.pendingLanes));
            var e = l.pendingLanes;
            if (e === 0 && (fa = null), Vn(a), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
                try {
                    Il.onCommitFiberRoot(xu, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (u !== null) {
                t = m.T,
                e = D.p,
                D.p = 2,
                m.T = null;
                try {
                    for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
                        var f = u[i];
                        n(f.value, {
                            componentStack: f.stack
                        })
                    }
                } finally {
                    m.T = t,
                    D.p = e
                }
            }
            (hu & 3) !== 0 && bn(),
            Dt(l),
            e = l.pendingLanes,
            (a & 4194090) !== 0 && (e & 42) !== 0 ? l === Tf ? ne++ : (ne = 0, Tf = l) : ne = 0,
            ie(0)
        }
    }
    function ro(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xu(t)))
    }
    function bn(l) {
        return co(), so(), oo(), ho()
    }
    function ho() {
        if (Yl !== 5)
            return !1;
        var l = ca,
            t = xf;
        xf = 0;
        var a = Vn(hu),
            u = m.T,
            e = D.p;
        try {
            D.p = 32 > a ? 32 : a,
            m.T = null,
            a = Ef,
            Ef = null;
            var n = ca,
                i = hu;
            if (Yl = 0, du = ca = null, hu = 0, (ll & 6) !== 0)
                throw Error(g(331));
            var f = ll;
            if (ll |= 4, W0(n.current), J0(n, n.current, i, a), ll = f, ie(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function")
                try {
                    Il.onPostCommitFiberRoot(xu, n)
                } catch {}
            return !0
        } finally {
            D.p = e,
            m.T = u,
            ro(l, t)
        }
    }
    function yo(l, t, a) {
        t = st(a, t),
        t = lf(l.stateNode, t, 2),
        l = It(l, t, 2),
        l !== null && (Tu(l, 2), Dt(l))
    }
    function fl(l, t, a) {
        if (l.tag === 3)
            yo(l, l, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    yo(t, l, a);
                    break
                } else if (t.tag === 1) {
                    var u = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))) {
                        l = st(a, l),
                        a = m0(2),
                        u = It(t, a, 2),
                        u !== null && (b0(a, u, t, l), Tu(u, 2), Dt(u));
                        break
                    }
                }
                t = t.return
            }
    }
    function Df(l, t, a) {
        var u = l.pingCache;
        if (u === null) {
            u = l.pingCache = new jd;
            var e = new Set;
            u.set(t, e)
        } else
            e = u.get(t),
            e === void 0 && (e = new Set, u.set(t, e));
        e.has(a) || (mf = !0, e.add(a), l = Vd.bind(null, l, t, a), t.then(l, l))
    }
    function Vd(l, t, a) {
        var u = l.pingCache;
        u !== null && u.delete(t),
        l.pingedLanes |= l.suspendedLanes & a,
        l.warmLanes &= ~a,
        cl === l && (w & a) === a && (yl === 4 || yl === 3 && (w & 62914560) === w && 300 > Et() - Sf ? (ll & 2) === 0 && yu(l, 0) : bf |= a, ru === w && (ru = 0)),
        Dt(l)
    }
    function vo(l, t) {
        t === 0 && (t = oc()),
        l = $a(l, t),
        l !== null && (Tu(l, t), Dt(l))
    }
    function Ld(l) {
        var t = l.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane),
        vo(l, a)
    }
    function Kd(l, t) {
        var a = 0;
        switch (l.tag) {
        case 13:
            var u = l.stateNode,
                e = l.memoizedState;
            e !== null && (a = e.retryLane);
            break;
        case 19:
            u = l.stateNode;
            break;
        case 22:
            u = l.stateNode._retryCache;
            break;
        default:
            throw Error(g(314))
        }
        u !== null && u.delete(t),
        vo(l, a)
    }
    function Jd(l, t) {
        return Xn(l, t)
    }
    var pn = null,
        gu = null,
        Mf = !1,
        Sn = !1,
        _f = !1,
        Ba = 0;
    function Dt(l) {
        l !== gu && l.next === null && (gu === null ? pn = gu = l : gu = gu.next = l),
        Sn = !0,
        Mf || (Mf = !0, Fd())
    }
    function ie(l, t) {
        if (!_f && Sn) {
            _f = !0;
            do for (var a = !1, u = pn; u !== null;) {
                if (l !== 0) {
                    var e = u.pendingLanes;
                    if (e === 0)
                        var n = 0;
                    else {
                        var i = u.suspendedLanes,
                            f = u.pingedLanes;
                        n = (1 << 31 - Pl(42 | l) + 1) - 1,
                        n &= e & ~(i & ~f),
                        n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                    }
                    n !== 0 && (a = !0, po(u, n))
                } else
                    n = w,
                    n = ze(u, u === cl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1),
                    (n & 3) === 0 || Eu(u, n) || (a = !0, po(u, n));
                u = u.next
            }
            while (a);
            _f = !1
        }
    }
    function wd() {
        go()
    }
    function go() {
        Sn = Mf = !1;
        var l = 0;
        Ba !== 0 && (ah() && (l = Ba), Ba = 0);
        for (var t = Et(), a = null, u = pn; u !== null;) {
            var e = u.next,
                n = mo(u, t);
            n === 0 ? (u.next = null, a === null ? pn = e : a.next = e, e === null && (gu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Sn = !0)),
            u = e
        }
        ie(l)
    }
    function mo(l, t) {
        for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
            var i = 31 - Pl(n),
                f = 1 << i,
                c = e[i];
            c === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[i] = pr(f, t)) : c <= t && (l.expiredLanes |= f),
            n &= ~f
        }
        if (t = cl, a = w, a = ze(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null)
            return u !== null && u !== null && Gn(u), l.callbackNode = null, l.callbackPriority = 0;
        if ((a & 3) === 0 || Eu(l, a)) {
            if (t = a & -a, t === l.callbackPriority)
                return t;
            switch (u !== null && Gn(u), Vn(a)) {
            case 2:
            case 8:
                a = fc;
                break;
            case 32:
                a = Ee;
                break;
            case 268435456:
                a = cc;
                break;
            default:
                a = Ee
            }
            return u = bo.bind(null, l), a = Xn(a, u), l.callbackPriority = t, l.callbackNode = a, t
        }
        return u !== null && u !== null && Gn(u), l.callbackPriority = 2, l.callbackNode = null, 2
    }
    function bo(l, t) {
        if (Yl !== 0 && Yl !== 5)
            return l.callbackNode = null, l.callbackPriority = 0, null;
        var a = l.callbackNode;
        if (bn() && l.callbackNode !== a)
            return null;
        var u = w;
        return u = ze(l, l === cl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (P0(l, u, t), mo(l, Et()), l.callbackNode != null && l.callbackNode === a ? bo.bind(null, l) : null)
    }
    function po(l, t) {
        if (bn())
            return null;
        P0(l, t, !0)
    }
    function Fd() {
        eh(function() {
            (ll & 6) !== 0 ? Xn(ic, wd) : go()
        })
    }
    function Rf() {
        return Ba === 0 && (Ba = sc()), Ba
    }
    function So(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l)
    }
    function xo(l, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l
    }
    function Wd(l, t, a, u, e) {
        if (t === "submit" && a && a.stateNode === e) {
            var n = So((e[Kl] || null).action),
                i = u.submitter;
            i && (t = (t = i[Kl] || null) ? So(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
            var f = new Be("action", "action", null, u, e);
            l.push({
                event: f,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (u.defaultPrevented) {
                            if (Ba !== 0) {
                                var c = i ? xo(e, i) : new FormData(e);
                                Wi(a, {
                                    pending: !0,
                                    data: c,
                                    method: e.method,
                                    action: n
                                }, null, c)
                            }
                        } else
                            typeof n == "function" && (f.preventDefault(), c = i ? xo(e, i) : new FormData(e), Wi(a, {
                                pending: !0,
                                data: c,
                                method: e.method,
                                action: n
                            }, n, c))
                    },
                    currentTarget: e
                }]
            })
        }
    }
    for (var Uf = 0; Uf < yi.length; Uf++) {
        var Hf = yi[Uf],
            $d = Hf.toLowerCase(),
            kd = Hf[0].toUpperCase() + Hf.slice(1);
        bt($d, "on" + kd)
    }
    bt(Pc, "onAnimationEnd"),
    bt(ls, "onAnimationIteration"),
    bt(ts, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(yd, "onTransitionRun"),
    bt(vd, "onTransitionStart"),
    bt(gd, "onTransitionCancel"),
    bt(as, "onTransitionEnd"),
    Ga("onMouseEnter", ["mouseout", "mouseover"]),
    Ga("onMouseLeave", ["mouseout", "mouseover"]),
    Ga("onPointerEnter", ["pointerout", "pointerover"]),
    Ga("onPointerLeave", ["pointerout", "pointerover"]),
    ba("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ba("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    ba("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ba("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ba("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    ba("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Id = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fe));
    function Eo(l, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < l.length; a++) {
            var u = l[a],
                e = u.event;
            u = u.listeners;
            l:
            {
                var n = void 0;
                if (t)
                    for (var i = u.length - 1; 0 <= i; i--) {
                        var f = u[i],
                            c = f.instance,
                            h = f.currentTarget;
                        if (f = f.listener, c !== n && e.isPropagationStopped())
                            break l;
                        n = f,
                        e.currentTarget = h;
                        try {
                            n(e)
                        } catch (b) {
                            fn(b)
                        }
                        e.currentTarget = null,
                        n = c
                    }
                else
                    for (i = 0; i < u.length; i++) {
                        if (f = u[i], c = f.instance, h = f.currentTarget, f = f.listener, c !== n && e.isPropagationStopped())
                            break l;
                        n = f,
                        e.currentTarget = h;
                        try {
                            n(e)
                        } catch (b) {
                            fn(b)
                        }
                        e.currentTarget = null,
                        n = c
                    }
            }
        }
    }
    function K(l, t) {
        var a = t[Ln];
        a === void 0 && (a = t[Ln] = new Set);
        var u = l + "__bubble";
        a.has(u) || (To(t, l, 2, !1), a.add(u))
    }
    function Nf(l, t, a) {
        var u = 0;
        t && (u |= 4),
        To(a, l, u, t)
    }
    var xn = "_reactListening" + Math.random().toString(36).slice(2);
    function Bf(l) {
        if (!l[xn]) {
            l[xn] = !0,
            vc.forEach(function(a) {
                a !== "selectionchange" && (Id.has(a) || Nf(a, !1, l), Nf(a, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[xn] || (t[xn] = !0, Nf("selectionchange", !1, t))
        }
    }
    function To(l, t, a, u) {
        switch (wo(t)) {
        case 2:
            var e = zh;
            break;
        case 8:
            e = Oh;
            break;
        default:
            e = Ff
        }
        a = e.bind(null, t, a, l),
        e = void 0,
        !ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0),
        u ? e !== void 0 ? l.addEventListener(t, a, {
            capture: !0,
            passive: e
        }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
            passive: e
        }) : l.addEventListener(t, a, !1)
    }
    function Yf(l, t, a, u, e) {
        var n = u;
        if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
            l:
            for (;;) {
                if (u === null)
                    return;
                var i = u.tag;
                if (i === 3 || i === 4) {
                    var f = u.stateNode.containerInfo;
                    if (f === e)
                        break;
                    if (i === 4)
                        for (i = u.return; i !== null;) {
                            var c = i.tag;
                            if ((c === 3 || c === 4) && i.stateNode.containerInfo === e)
                                return;
                            i = i.return
                        }
                    for (; f !== null;) {
                        if (i = Ca(f), i === null)
                            return;
                        if (c = i.tag, c === 5 || c === 6 || c === 26 || c === 27) {
                            u = n = i;
                            continue l
                        }
                        f = f.parentNode
                    }
                }
                u = u.return
            }
        _c(function() {
            var h = n,
                b = Pn(a),
                S = [];
            l:
            {
                var y = us.get(l);
                if (y !== void 0) {
                    var v = Be,
                        C = l;
                    switch (l) {
                    case "keypress":
                        if (He(a) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        v = Jr;
                        break;
                    case "focusin":
                        C = "focus",
                        v = ni;
                        break;
                    case "focusout":
                        C = "blur",
                        v = ni;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = ni;
                        break;
                    case "click":
                        if (a.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Hc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Br;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = Wr;
                        break;
                    case Pc:
                    case ls:
                    case ts:
                        v = Cr;
                        break;
                    case as:
                        v = kr;
                        break;
                    case "scroll":
                    case "scrollend":
                        v = Hr;
                        break;
                    case "wheel":
                        v = Pr;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = Xr;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Bc;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        v = td
                    }
                    var Y = (t & 4) !== 0,
                        nl = !Y && (l === "scroll" || l === "scrollend"),
                        r = Y ? y !== null ? y + "Capture" : null : y;
                    Y = [];
                    for (var o = h, d; o !== null;) {
                        var p = o;
                        if (d = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || d === null || r === null || (p = Ou(o, r), p != null && Y.push(ce(o, p, d))), nl)
                            break;
                        o = o.return
                    }
                    0 < Y.length && (y = new v(y, C, null, a, b), S.push({
                        event: y,
                        listeners: Y
                    }))
                }
            }if ((t & 7) === 0) {
                l:
                {
                    if (y = l === "mouseover" || l === "pointerover", v = l === "mouseout" || l === "pointerout", y && a !== In && (C = a.relatedTarget || a.fromElement) && (Ca(C) || C[qa]))
                        break l;
                    if ((v || y) && (y = b.window === b ? b : (y = b.ownerDocument) ? y.defaultView || y.parentWindow : window, v ? (C = a.relatedTarget || a.toElement, v = h, C = C ? Ca(C) : null, C !== null && (nl = J(C), Y = C.tag, C !== nl || Y !== 5 && Y !== 27 && Y !== 6) && (C = null)) : (v = null, C = h), v !== C)) {
                        if (Y = Hc, p = "onMouseLeave", r = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Bc, p = "onPointerLeave", r = "onPointerEnter", o = "pointer"), nl = v == null ? y : zu(v), d = C == null ? y : zu(C), y = new Y(p, o + "leave", v, a, b), y.target = nl, y.relatedTarget = d, p = null, Ca(b) === h && (Y = new Y(r, o + "enter", C, a, b), Y.target = d, Y.relatedTarget = nl, p = Y), nl = p, v && C)
                            t:
                            {
                                for (Y = v, r = C, o = 0, d = Y; d; d = mu(d))
                                    o++;
                                for (d = 0, p = r; p; p = mu(p))
                                    d++;
                                for (; 0 < o - d;)
                                    Y = mu(Y),
                                    o--;
                                for (; 0 < d - o;)
                                    r = mu(r),
                                    d--;
                                for (; o--;) {
                                    if (Y === r || r !== null && Y === r.alternate)
                                        break t;
                                    Y = mu(Y),
                                    r = mu(r)
                                }
                                Y = null
                            } else
                            Y = null;
                        v !== null && Ao(S, y, v, Y, !1),
                        C !== null && nl !== null && Ao(S, nl, C, Y, !0)
                    }
                }l:
                {
                    if (y = h ? zu(h) : window, v = y.nodeName && y.nodeName.toLowerCase(), v === "select" || v === "input" && y.type === "file")
                        var R = Zc;
                    else if (Gc(y))
                        if (Vc)
                            R = rd;
                        else {
                            R = sd;
                            var Z = cd
                        }
                    else
                        v = y.nodeName,
                        !v || v.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? h && kn(h.elementType) && (R = Zc) : R = od;
                    if (R && (R = R(l, h))) {
                        Qc(S, R, a, b);
                        break l
                    }
                    Z && Z(l, y, h),
                    l === "focusout" && h && y.type === "number" && h.memoizedProps.value != null && $n(y, "number", y.value)
                }switch (Z = h ? zu(h) : window, l) {
                case "focusin":
                    (Gc(Z) || Z.contentEditable === "true") && (wa = Z, ri = h, Bu = null);
                    break;
                case "focusout":
                    Bu = ri = wa = null;
                    break;
                case "mousedown":
                    di = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    di = !1,
                    kc(S, a, b);
                    break;
                case "selectionchange":
                    if (hd)
                        break;
                case "keydown":
                case "keyup":
                    kc(S, a, b)
                }
                var H;
                if (fi)
                    l:
                    {
                        switch (l) {
                        case "compositionstart":
                            var q = "onCompositionStart";
                            break l;
                        case "compositionend":
                            q = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            q = "onCompositionUpdate";
                            break l
                        }
                        q = void 0
                    } else
                    Ja ? jc(l, a) && (q = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (q = "onCompositionStart");
                q && (Yc && a.locale !== "ko" && (Ja || q !== "onCompositionStart" ? q === "onCompositionEnd" && Ja && (H = Rc()) : (Ft = b, ai = "value" in Ft ? Ft.value : Ft.textContent, Ja = !0)), Z = En(h, q), 0 < Z.length && (q = new Nc(q, l, null, a, b), S.push({
                    event: q,
                    listeners: Z
                }), H ? q.data = H : (H = Xc(a), H !== null && (q.data = H)))),
                (H = ud ? ed(l, a) : nd(l, a)) && (q = En(h, "onBeforeInput"), 0 < q.length && (Z = new Nc("onBeforeInput", "beforeinput", null, a, b), S.push({
                    event: Z,
                    listeners: q
                }), Z.data = H)),
                Wd(S, l, h, a, b)
            }
            Eo(S, t)
        })
    }
    function ce(l, t, a) {
        return {
            instance: l,
            listener: t,
            currentTarget: a
        }
    }
    function En(l, t) {
        for (var a = t + "Capture", u = []; l !== null;) {
            var e = l,
                n = e.stateNode;
            if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ou(l, a), e != null && u.unshift(ce(l, e, n)), e = Ou(l, t), e != null && u.push(ce(l, e, n))), l.tag === 3)
                return u;
            l = l.return
        }
        return []
    }
    function mu(l) {
        if (l === null)
            return null;
        do l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Ao(l, t, a, u, e) {
        for (var n = t._reactName, i = []; a !== null && a !== u;) {
            var f = a,
                c = f.alternate,
                h = f.stateNode;
            if (f = f.tag, c !== null && c === u)
                break;
            f !== 5 && f !== 26 && f !== 27 || h === null || (c = h, e ? (h = Ou(a, n), h != null && i.unshift(ce(a, h, c))) : e || (h = Ou(a, n), h != null && i.push(ce(a, h, c)))),
            a = a.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var Pd = /\r\n?/g,
        lh = /\u0000|\uFFFD/g;
    function zo(l) {
        return (typeof l == "string" ? l : "" + l).replace(Pd, `
`
        ).replace(lh, "")
    }
    function Oo(l, t) {
        return t = zo(t), zo(l) === t
    }
    function Tn() {}
    function el(l, t, a, u, e, n) {
        switch (a) {
        case "children":
            typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Va(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Va(l, "" + u);
            break;
        case "className":
            De(l, "class", u);
            break;
        case "tabIndex":
            De(l, "tabindex", u);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            De(l, a, u);
            break;
        case "style":
            Dc(l, u, n);
            break;
        case "data":
            if (t !== "object") {
                De(l, "data", u);
                break
            }
        case "src":
        case "href":
            if (u === "" && (t !== "a" || a !== "href")) {
                l.removeAttribute(a);
                break
            }
            if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
                l.removeAttribute(a);
                break
            }
            u = Re("" + u),
            l.setAttribute(a, u);
            break;
        case "action":
        case "formAction":
            if (typeof u == "function") {
                l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (a === "formAction" ? (t !== "input" && el(l, t, "name", e.name, e, null), el(l, t, "formEncType", e.formEncType, e, null), el(l, t, "formMethod", e.formMethod, e, null), el(l, t, "formTarget", e.formTarget, e, null)) : (el(l, t, "encType", e.encType, e, null), el(l, t, "method", e.method, e, null), el(l, t, "target", e.target, e, null)));
            if (u == null || typeof u == "symbol" || typeof u == "boolean") {
                l.removeAttribute(a);
                break
            }
            u = Re("" + u),
            l.setAttribute(a, u);
            break;
        case "onClick":
            u != null && (l.onclick = Tn);
            break;
        case "onScroll":
            u != null && K("scroll", l);
            break;
        case "onScrollEnd":
            u != null && K("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (u != null) {
                if (typeof u != "object" || !("__html" in u))
                    throw Error(g(61));
                if (a = u.__html, a != null) {
                    if (e.children != null)
                        throw Error(g(60));
                    l.innerHTML = a
                }
            }
            break;
        case "multiple":
            l.multiple = u && typeof u != "function" && typeof u != "symbol";
            break;
        case "muted":
            l.muted = u && typeof u != "function" && typeof u != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            a = Re("" + u),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
            break;
        case "capture":
        case "download":
            u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
            break;
        case "popover":
            K("beforetoggle", l),
            K("toggle", l),
            Oe(l, "popover", u);
            break;
        case "xlinkActuate":
            Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
            break;
        case "xlinkArcrole":
            Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
            break;
        case "xlinkRole":
            Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
            break;
        case "xlinkShow":
            Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
            break;
        case "xlinkTitle":
            Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
            break;
        case "xlinkType":
            Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
            break;
        case "xmlBase":
            Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
            break;
        case "xmlLang":
            Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
            break;
        case "xmlSpace":
            Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
            break;
        case "is":
            Oe(l, "is", u);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Rr.get(a) || a, Oe(l, a, u))
        }
    }
    function qf(l, t, a, u, e, n) {
        switch (a) {
        case "style":
            Dc(l, u, n);
            break;
        case "dangerouslySetInnerHTML":
            if (u != null) {
                if (typeof u != "object" || !("__html" in u))
                    throw Error(g(61));
                if (a = u.__html, a != null) {
                    if (e.children != null)
                        throw Error(g(60));
                    l.innerHTML = a
                }
            }
            break;
        case "children":
            typeof u == "string" ? Va(l, u) : (typeof u == "number" || typeof u == "bigint") && Va(l, "" + u);
            break;
        case "onScroll":
            u != null && K("scroll", l);
            break;
        case "onScrollEnd":
            u != null && K("scrollend", l);
            break;
        case "onClick":
            u != null && (l.onclick = Tn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!gc.hasOwnProperty(a))
                l:
                {
                    if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Kl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
                        typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)),
                        l.addEventListener(t, u, e);
                        break l
                    }
                    a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Oe(l, a, u)
                }
        }
    }
    function ql(l, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            K("error", l),
            K("load", l);
            var u = !1,
                e = !1,
                n;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var i = a[n];
                    if (i != null)
                        switch (n) {
                        case "src":
                            u = !0;
                            break;
                        case "srcSet":
                            e = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(g(137, t));
                        default:
                            el(l, t, n, i, a, null)
                        }
                }
            e && el(l, t, "srcSet", a.srcSet, a, null),
            u && el(l, t, "src", a.src, a, null);
            return;
        case "input":
            K("invalid", l);
            var f = n = i = e = null,
                c = null,
                h = null;
            for (u in a)
                if (a.hasOwnProperty(u)) {
                    var b = a[u];
                    if (b != null)
                        switch (u) {
                        case "name":
                            e = b;
                            break;
                        case "type":
                            i = b;
                            break;
                        case "checked":
                            c = b;
                            break;
                        case "defaultChecked":
                            h = b;
                            break;
                        case "value":
                            n = b;
                            break;
                        case "defaultValue":
                            f = b;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (b != null)
                                throw Error(g(137, t));
                            break;
                        default:
                            el(l, t, u, b, a, null)
                        }
                }
            Tc(l, n, f, c, h, i, e, !1),
            Me(l);
            return;
        case "select":
            K("invalid", l),
            u = i = n = null;
            for (e in a)
                if (a.hasOwnProperty(e) && (f = a[e], f != null))
                    switch (e) {
                    case "value":
                        n = f;
                        break;
                    case "defaultValue":
                        i = f;
                        break;
                    case "multiple":
                        u = f;
                    default:
                        el(l, t, e, f, a, null)
                    }
            t = n,
            a = i,
            l.multiple = !!u,
            t != null ? Za(l, !!u, t, !1) : a != null && Za(l, !!u, a, !0);
            return;
        case "textarea":
            K("invalid", l),
            n = e = u = null;
            for (i in a)
                if (a.hasOwnProperty(i) && (f = a[i], f != null))
                    switch (i) {
                    case "value":
                        u = f;
                        break;
                    case "defaultValue":
                        e = f;
                        break;
                    case "children":
                        n = f;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (f != null)
                            throw Error(g(91));
                        break;
                    default:
                        el(l, t, i, f, a, null)
                    }
            zc(l, u, e, n),
            Me(l);
            return;
        case "option":
            for (c in a)
                a.hasOwnProperty(c) && (u = a[c], u != null) && (c === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : el(l, t, c, u, a, null));
            return;
        case "dialog":
            K("beforetoggle", l),
            K("toggle", l),
            K("cancel", l),
            K("close", l);
            break;
        case "iframe":
        case "object":
            K("load", l);
            break;
        case "video":
        case "audio":
            for (u = 0; u < fe.length; u++)
                K(fe[u], l);
            break;
        case "image":
            K("error", l),
            K("load", l);
            break;
        case "details":
            K("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            K("error", l),
            K("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (h in a)
                if (a.hasOwnProperty(h) && (u = a[h], u != null))
                    switch (h) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(g(137, t));
                    default:
                        el(l, t, h, u, a, null)
                    }
            return;
        default:
            if (kn(t)) {
                for (b in a)
                    a.hasOwnProperty(b) && (u = a[b], u !== void 0 && qf(l, t, b, u, a, void 0));
                return
            }
        }
        for (f in a)
            a.hasOwnProperty(f) && (u = a[f], u != null && el(l, t, f, u, a, null))
    }
    function th(l, t, a, u) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var e = null,
                n = null,
                i = null,
                f = null,
                c = null,
                h = null,
                b = null;
            for (v in a) {
                var S = a[v];
                if (a.hasOwnProperty(v) && S != null)
                    switch (v) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        c = S;
                    default:
                        u.hasOwnProperty(v) || el(l, t, v, null, u, S)
                    }
            }
            for (var y in u) {
                var v = u[y];
                if (S = a[y], u.hasOwnProperty(y) && (v != null || S != null))
                    switch (y) {
                    case "type":
                        n = v;
                        break;
                    case "name":
                        e = v;
                        break;
                    case "checked":
                        h = v;
                        break;
                    case "defaultChecked":
                        b = v;
                        break;
                    case "value":
                        i = v;
                        break;
                    case "defaultValue":
                        f = v;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(g(137, t));
                        break;
                    default:
                        v !== S && el(l, t, y, v, u, S)
                    }
            }
            Wn(l, i, f, c, h, b, n, e);
            return;
        case "select":
            v = i = f = y = null;
            for (n in a)
                if (c = a[n], a.hasOwnProperty(n) && c != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        v = c;
                    default:
                        u.hasOwnProperty(n) || el(l, t, n, null, u, c)
                    }
            for (e in u)
                if (n = u[e], c = a[e], u.hasOwnProperty(e) && (n != null || c != null))
                    switch (e) {
                    case "value":
                        y = n;
                        break;
                    case "defaultValue":
                        f = n;
                        break;
                    case "multiple":
                        i = n;
                    default:
                        n !== c && el(l, t, e, n, u, c)
                    }
            t = f,
            a = i,
            u = v,
            y != null ? Za(l, !!a, y, !1) : !!u != !!a && (t != null ? Za(l, !!a, t, !0) : Za(l, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            v = y = null;
            for (f in a)
                if (e = a[f], a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
                    switch (f) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        el(l, t, f, null, u, e)
                    }
            for (i in u)
                if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null))
                    switch (i) {
                    case "value":
                        y = e;
                        break;
                    case "defaultValue":
                        v = e;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (e != null)
                            throw Error(g(91));
                        break;
                    default:
                        e !== n && el(l, t, i, e, u, n)
                    }
            Ac(l, y, v);
            return;
        case "option":
            for (var C in a)
                y = a[C],
                a.hasOwnProperty(C) && y != null && !u.hasOwnProperty(C) && (C === "selected" ? l.selected = !1 : el(l, t, C, null, u, y));
            for (c in u)
                y = u[c],
                v = a[c],
                u.hasOwnProperty(c) && y !== v && (y != null || v != null) && (c === "selected" ? l.selected = y && typeof y != "function" && typeof y != "symbol" : el(l, t, c, y, u, v));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Y in a)
                y = a[Y],
                a.hasOwnProperty(Y) && y != null && !u.hasOwnProperty(Y) && el(l, t, Y, null, u, y);
            for (h in u)
                if (y = u[h], v = a[h], u.hasOwnProperty(h) && y !== v && (y != null || v != null))
                    switch (h) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(g(137, t));
                        break;
                    default:
                        el(l, t, h, y, u, v)
                    }
            return;
        default:
            if (kn(t)) {
                for (var nl in a)
                    y = a[nl],
                    a.hasOwnProperty(nl) && y !== void 0 && !u.hasOwnProperty(nl) && qf(l, t, nl, void 0, u, y);
                for (b in u)
                    y = u[b],
                    v = a[b],
                    !u.hasOwnProperty(b) || y === v || y === void 0 && v === void 0 || qf(l, t, b, y, u, v);
                return
            }
        }
        for (var r in a)
            y = a[r],
            a.hasOwnProperty(r) && y != null && !u.hasOwnProperty(r) && el(l, t, r, null, u, y);
        for (S in u)
            y = u[S],
            v = a[S],
            !u.hasOwnProperty(S) || y === v || y == null && v == null || el(l, t, S, y, u, v)
    }
    var Cf = null,
        jf = null;
    function An(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Do(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Mo(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function Xf(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Gf = null;
    function ah() {
        var l = window.event;
        return l && l.type === "popstate" ? l === Gf ? !1 : (Gf = l, !0) : (Gf = null, !1)
    }
    var _o = typeof setTimeout == "function" ? setTimeout : void 0,
        uh = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ro = typeof Promise == "function" ? Promise : void 0,
        eh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ro < "u" ? function(l) {
            return Ro.resolve(null).then(l).catch(nh)
        } : _o;
    function nh(l) {
        setTimeout(function() {
            throw l
        })
    }
    function oa(l) {
        return l === "head"
    }
    function Uo(l, t) {
        var a = t,
            u = 0,
            e = 0;
        do {
            var n = a.nextSibling;
            if (l.removeChild(a), n && n.nodeType === 8)
                if (a = n.data, a === "/$") {
                    if (0 < u && 8 > u) {
                        a = u;
                        var i = l.ownerDocument;
                        if (a & 1 && se(i.documentElement), a & 2 && se(i.body), a & 4)
                            for (a = i.head, se(a), i = a.firstChild; i;) {
                                var f = i.nextSibling,
                                    c = i.nodeName;
                                i[Au] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i),
                                i = f
                            }
                    }
                    if (e === 0) {
                        l.removeChild(n),
                        me(t);
                        return
                    }
                    e--
                } else
                    a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
            else
                u = 0;
            a = n
        } while (a);
        me(t)
    }
    function Qf(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling, a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Qf(a),
                Kn(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(a)
        }
    }
    function ih(l, t, a, u) {
        for (; l.nodeType === 1;) {
            var e = a;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (u) {
                if (!l[Au])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = e.name == null ? null : "" + e.name;
                if (e.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = St(l.nextSibling), l === null)
                break
        }
        return null
    }
    function fh(l, t, a) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = St(l.nextSibling), l === null))
                return null;
        return l
    }
    function Zf(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }
    function ch(l, t) {
        var a = l.ownerDocument;
        if (l.data !== "$?" || a.readyState === "complete")
            t();
        else {
            var u = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", u)
            };
            a.addEventListener("DOMContentLoaded", u),
            l._reactRetry = u
        }
    }
    function St(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return l
    }
    var Vf = null;
    function Ho(l) {
        l = l.previousSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    a === "/$" && t++
            }
            l = l.previousSibling
        }
        return null
    }
    function No(l, t, a) {
        switch (t = An(a), l) {
        case "html":
            if (l = t.documentElement, !l)
                throw Error(g(452));
            return l;
        case "head":
            if (l = t.head, !l)
                throw Error(g(453));
            return l;
        case "body":
            if (l = t.body, !l)
                throw Error(g(454));
            return l;
        default:
            throw Error(g(451))
        }
    }
    function se(l) {
        for (var t = l.attributes; t.length;)
            l.removeAttributeNode(t[0]);
        Kn(l)
    }
    var vt = new Map,
        Bo = new Set;
    function zn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Lt = D.d;
    D.d = {
        f: sh,
        r: oh,
        D: rh,
        C: dh,
        L: hh,
        m: yh,
        X: gh,
        S: vh,
        M: mh
    };
    function sh() {
        var l = Lt.f(),
            t = gn();
        return l || t
    }
    function oh(l) {
        var t = ja(l);
        t !== null && t.tag === 5 && t.type === "form" ? Ps(t) : Lt.r(l)
    }
    var bu = typeof document > "u" ? null : document;
    function Yo(l, t, a) {
        var u = bu;
        if (u && typeof t == "string" && t) {
            var e = ct(t);
            e = 'link[rel="' + l + '"][href="' + e + '"]',
            typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
            Bo.has(e) || (Bo.add(e), l = {
                rel: l,
                crossOrigin: a,
                href: t
            }, u.querySelector(e) === null && (t = u.createElement("link"), ql(t, "link", l), Ml(t), u.head.appendChild(t)))
        }
    }
    function rh(l) {
        Lt.D(l),
        Yo("dns-prefetch", l, null)
    }
    function dh(l, t) {
        Lt.C(l, t),
        Yo("preconnect", l, t)
    }
    function hh(l, t, a) {
        Lt.L(l, t, a);
        var u = bu;
        if (u && l && t) {
            var e = 'link[rel="preload"][as="' + ct(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + ct(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + ct(a.imageSizes) + '"]')) : e += '[href="' + ct(l) + '"]';
            var n = e;
            switch (t) {
            case "style":
                n = pu(l);
                break;
            case "script":
                n = Su(l)
            }
            vt.has(n) || (l = N({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                as: t
            }, a), vt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(oe(n)) || t === "script" && u.querySelector(re(n)) || (t = u.createElement("link"), ql(t, "link", l), Ml(t), u.head.appendChild(t)))
        }
    }
    function yh(l, t) {
        Lt.m(l, t);
        var a = bu;
        if (a && l) {
            var u = t && typeof t.as == "string" ? t.as : "script",
                e = 'link[rel="modulepreload"][as="' + ct(u) + '"][href="' + ct(l) + '"]',
                n = e;
            switch (u) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Su(l)
            }
            if (!vt.has(n) && (l = N({
                rel: "modulepreload",
                href: l
            }, t), vt.set(n, l), a.querySelector(e) === null)) {
                switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(re(n)))
                        return
                }
                u = a.createElement("link"),
                ql(u, "link", l),
                Ml(u),
                a.head.appendChild(u)
            }
        }
    }
    function vh(l, t, a) {
        Lt.S(l, t, a);
        var u = bu;
        if (u && l) {
            var e = Xa(u).hoistableStyles,
                n = pu(l);
            t = t || "default";
            var i = e.get(n);
            if (!i) {
                var f = {
                    loading: 0,
                    preload: null
                };
                if (i = u.querySelector(oe(n)))
                    f.loading = 5;
                else {
                    l = N({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, a),
                    (a = vt.get(n)) && Lf(l, a);
                    var c = i = u.createElement("link");
                    Ml(c),
                    ql(c, "link", l),
                    c._p = new Promise(function(h, b) {
                        c.onload = h,
                        c.onerror = b
                    }),
                    c.addEventListener("load", function() {
                        f.loading |= 1
                    }),
                    c.addEventListener("error", function() {
                        f.loading |= 2
                    }),
                    f.loading |= 4,
                    On(i, t, u)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: f
                },
                e.set(n, i)
            }
        }
    }
    function gh(l, t) {
        Lt.X(l, t);
        var a = bu;
        if (a && l) {
            var u = Xa(a).hoistableScripts,
                e = Su(l),
                n = u.get(e);
            n || (n = a.querySelector(re(e)), n || (l = N({
                src: l,
                async: !0
            }, t), (t = vt.get(e)) && Kf(l, t), n = a.createElement("script"), Ml(n), ql(n, "link", l), a.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(e, n))
        }
    }
    function mh(l, t) {
        Lt.M(l, t);
        var a = bu;
        if (a && l) {
            var u = Xa(a).hoistableScripts,
                e = Su(l),
                n = u.get(e);
            n || (n = a.querySelector(re(e)), n || (l = N({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = vt.get(e)) && Kf(l, t), n = a.createElement("script"), Ml(n), ql(n, "link", l), a.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(e, n))
        }
    }
    function qo(l, t, a, u) {
        var e = (e = j.current) ? zn(e) : null;
        if (!e)
            throw Error(g(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = pu(a.href), a = Xa(e).hoistableStyles, u = a.get(t), u || (u = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            }, a.set(t, u)), u) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                l = pu(a.href);
                var n = Xa(e).hoistableStyles,
                    i = n.get(l);
                if (i || (e = e.ownerDocument || e, i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                }, n.set(l, i), (n = e.querySelector(oe(l))) && !n._p && (i.instance = n, i.state.loading = 5), vt.has(l) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                }, vt.set(l, a), n || bh(e, l, a, i.state))), t && u === null)
                    throw Error(g(528, ""));
                return i
            }
            if (t && u !== null)
                throw Error(g(529, ""));
            return null;
        case "script":
            return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Su(a), a = Xa(e).hoistableScripts, u = a.get(t), u || (u = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            }, a.set(t, u)), u) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(g(444, l))
        }
    }
    function pu(l) {
        return 'href="' + ct(l) + '"'
    }
    function oe(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function Co(l) {
        return N({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function bh(l, t, a, u) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
            return u.loading |= 1
        }), t.addEventListener("error", function() {
            return u.loading |= 2
        }), ql(t, "link", a), Ml(t), l.head.appendChild(t))
    }
    function Su(l) {
        return '[src="' + ct(l) + '"]'
    }
    function re(l) {
        return "script[async]" + l
    }
    function jo(l, t, a) {
        if (t.count++, t.instance === null)
            switch (t.type) {
            case "style":
                var u = l.querySelector('style[data-href~="' + ct(a.href) + '"]');
                if (u)
                    return t.instance = u, Ml(u), u;
                var e = N({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return u = (l.ownerDocument || l).createElement("style"), Ml(u), ql(u, "style", e), On(u, a.precedence, l), t.instance = u;
            case "stylesheet":
                e = pu(a.href);
                var n = l.querySelector(oe(e));
                if (n)
                    return t.state.loading |= 4, t.instance = n, Ml(n), n;
                u = Co(a),
                (e = vt.get(e)) && Lf(u, e),
                n = (l.ownerDocument || l).createElement("link"),
                Ml(n);
                var i = n;
                return i._p = new Promise(function(f, c) {
                    i.onload = f,
                    i.onerror = c
                }), ql(n, "link", u), t.state.loading |= 4, On(n, a.precedence, l), t.instance = n;
            case "script":
                return n = Su(a.src), (e = l.querySelector(re(n))) ? (t.instance = e, Ml(e), e) : (u = a, (e = vt.get(n)) && (u = N({}, a), Kf(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ml(e), ql(e, "link", u), l.head.appendChild(e), t.instance = e);
            case "void":
                return null;
            default:
                throw Error(g(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, On(u, a.precedence, l));
        return t.instance
    }
    function On(l, t, a) {
        for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
            var f = u[i];
            if (f.dataset.precedence === t)
                n = f;
            else if (n !== e)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild))
    }
    function Lf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function Kf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var Dn = null;
    function Xo(l, t, a) {
        if (Dn === null) {
            var u = new Map,
                e = Dn = new Map;
            e.set(a, u)
        } else
            e = Dn,
            u = e.get(a),
            u || (u = new Map, e.set(a, u));
        if (u.has(l))
            return u;
        for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
            var n = a[e];
            if (!(n[Au] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var f = u.get(i);
                f ? f.push(n) : u.set(i, [n])
            }
        }
        return u
    }
    function Go(l, t, a) {
        l = l.ownerDocument || l,
        l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null)
    }
    function ph(l, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Qo(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    var de = null;
    function Sh() {}
    function xh(l, t, a) {
        if (de === null)
            throw Error(g(475));
        var u = de;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var e = pu(a.href),
                    n = l.querySelector(oe(e));
                if (n) {
                    l = n._p,
                    l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = Mn.bind(u), l.then(u, u)),
                    t.state.loading |= 4,
                    t.instance = n,
                    Ml(n);
                    return
                }
                n = l.ownerDocument || l,
                a = Co(a),
                (e = vt.get(e)) && Lf(a, e),
                n = n.createElement("link"),
                Ml(n);
                var i = n;
                i._p = new Promise(function(f, c) {
                    i.onload = f,
                    i.onerror = c
                }),
                ql(n, "link", a),
                t.instance = n
            }
            u.stylesheets === null && (u.stylesheets = new Map),
            u.stylesheets.set(t, l),
            (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = Mn.bind(u), l.addEventListener("load", t), l.addEventListener("error", t))
        }
    }
    function Eh() {
        if (de === null)
            throw Error(g(475));
        var l = de;
        return l.stylesheets && l.count === 0 && Jf(l, l.stylesheets), 0 < l.count ? function(t) {
            var a = setTimeout(function() {
                if (l.stylesheets && Jf(l, l.stylesheets), l.unsuspend) {
                    var u = l.unsuspend;
                    l.unsuspend = null,
                    u()
                }
            }, 6e4);
            return l.unsuspend = t, function() {
                l.unsuspend = null,
                clearTimeout(a)
            }
        } : null
    }
    function Mn() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets)
                Jf(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var _n = null;
    function Jf(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++, _n = new Map, t.forEach(Th, l), _n = null, Mn.call(l))
    }
    function Th(l, t) {
        if (!(t.state.loading & 4)) {
            var a = _n.get(l);
            if (a)
                var u = a.get(null);
            else {
                a = new Map,
                _n.set(l, a);
                for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i)
                }
                u && a.set(null, u)
            }
            e = t.instance,
            i = e.getAttribute("data-precedence"),
            n = a.get(i) || u,
            n === u && a.set(null, e),
            a.set(i, e),
            this.count++,
            u = Mn.bind(this),
            e.addEventListener("load", u),
            e.addEventListener("error", u),
            n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var he = {
        $$typeof: zl,
        Provider: null,
        Consumer: null,
        _currentValue: E,
        _currentValue2: E,
        _threadCount: 0
    };
    function Ah(l, t, a, u, e, n, i, f) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Qn(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Qn(0),
        this.hiddenUpdates = Qn(null),
        this.identifierPrefix = u,
        this.onUncaughtError = e,
        this.onCaughtError = n,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = f,
        this.incompleteTransitions = new Map
    }
    function Zo(l, t, a, u, e, n, i, f, c, h, b, S) {
        return l = new Ah(l, t, a, i, f, c, h, S), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Oi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
            element: u,
            isDehydrated: a,
            cache: t
        }, Ri(n), l
    }
    function Vo(l) {
        return l ? (l = ka, l) : ka
    }
    function Lo(l, t, a, u, e, n) {
        e = Vo(e),
        u.context === null ? u.context = e : u.pendingContext = e,
        u = kt(t),
        u.payload = {
            element: a
        },
        n = n === void 0 ? null : n,
        n !== null && (u.callback = n),
        a = It(l, u, t),
        a !== null && (it(a, l, t), Vu(a, l, t))
    }
    function Ko(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var a = l.retryLane;
            l.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function wf(l, t) {
        Ko(l, t),
        (l = l.alternate) && Ko(l, t)
    }
    function Jo(l) {
        if (l.tag === 13) {
            var t = $a(l, 67108864);
            t !== null && it(t, l, 67108864),
            wf(l, 67108864)
        }
    }
    var Rn = !0;
    function zh(l, t, a, u) {
        var e = m.T;
        m.T = null;
        var n = D.p;
        try {
            D.p = 2,
            Ff(l, t, a, u)
        } finally {
            D.p = n,
            m.T = e
        }
    }
    function Oh(l, t, a, u) {
        var e = m.T;
        m.T = null;
        var n = D.p;
        try {
            D.p = 8,
            Ff(l, t, a, u)
        } finally {
            D.p = n,
            m.T = e
        }
    }
    function Ff(l, t, a, u) {
        if (Rn) {
            var e = Wf(u);
            if (e === null)
                Yf(l, t, u, Un, a),
                Fo(l, u);
            else if (Mh(e, l, t, a, u))
                u.stopPropagation();
            else if (Fo(l, u), t & 4 && -1 < Dh.indexOf(l)) {
                for (; e !== null;) {
                    var n = ja(e);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var i = ma(n.pendingLanes);
                                if (i !== 0) {
                                    var f = n;
                                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                                        var c = 1 << 31 - Pl(i);
                                        f.entanglements[1] |= c,
                                        i &= ~c
                                    }
                                    Dt(n),
                                    (ll & 6) === 0 && (yn = Et() + 500, ie(0))
                                }
                            }
                            break;
                        case 13:
                            f = $a(n, 2),
                            f !== null && it(f, n, 2),
                            gn(),
                            wf(n, 2)
                        }
                    if (n = Wf(u), n === null && Yf(l, t, u, Un, a), n === e)
                        break;
                    e = n
                }
                e !== null && u.stopPropagation()
            } else
                Yf(l, t, u, null, a)
        }
    }
    function Wf(l) {
        return l = Pn(l), $f(l)
    }
    var Un = null;
    function $f(l) {
        if (Un = null, l = Ca(l), l !== null) {
            var t = J(l);
            if (t === null)
                l = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (l = W(t), l !== null)
                        return l;
                    l = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return Un = l, null
    }
    function wo(l) {
        switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (dr()) {
            case ic:
                return 2;
            case fc:
                return 8;
            case Ee:
            case hr:
                return 32;
            case cc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var kf = !1,
        ra = null,
        da = null,
        ha = null,
        ye = new Map,
        ve = new Map,
        ya = [],
        Dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Fo(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            ra = null;
            break;
        case "dragenter":
        case "dragleave":
            da = null;
            break;
        case "mouseover":
        case "mouseout":
            ha = null;
            break;
        case "pointerover":
        case "pointerout":
            ye.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ve.delete(t.pointerId)
        }
    }
    function ge(l, t, a, u, e, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: u,
            nativeEvent: n,
            targetContainers: [e]
        }, t !== null && (t = ja(t), t !== null && Jo(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l)
    }
    function Mh(l, t, a, u, e) {
        switch (t) {
        case "focusin":
            return ra = ge(ra, l, t, a, u, e), !0;
        case "dragenter":
            return da = ge(da, l, t, a, u, e), !0;
        case "mouseover":
            return ha = ge(ha, l, t, a, u, e), !0;
        case "pointerover":
            var n = e.pointerId;
            return ye.set(n, ge(ye.get(n) || null, l, t, a, u, e)), !0;
        case "gotpointercapture":
            return n = e.pointerId, ve.set(n, ge(ve.get(n) || null, l, t, a, u, e)), !0
        }
        return !1
    }
    function Wo(l) {
        var t = Ca(l.target);
        if (t !== null) {
            var a = J(t);
            if (a !== null) {
                if (t = a.tag, t === 13) {
                    if (t = W(a), t !== null) {
                        l.blockedOn = t,
                        xr(l.priority, function() {
                            if (a.tag === 13) {
                                var u = nt();
                                u = Zn(u);
                                var e = $a(a, u);
                                e !== null && it(e, a, u),
                                wf(a, u)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function Hn(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var a = Wf(l.nativeEvent);
            if (a === null) {
                a = l.nativeEvent;
                var u = new a.constructor(a.type, a);
                In = u,
                a.target.dispatchEvent(u),
                In = null
            } else
                return t = ja(a), t !== null && Jo(t), l.blockedOn = a, !1;
            t.shift()
        }
        return !0
    }
    function $o(l, t, a) {
        Hn(l) && a.delete(t)
    }
    function _h() {
        kf = !1,
        ra !== null && Hn(ra) && (ra = null),
        da !== null && Hn(da) && (da = null),
        ha !== null && Hn(ha) && (ha = null),
        ye.forEach($o),
        ve.forEach($o)
    }
    function Nn(l, t) {
        l.blockedOn === t && (l.blockedOn = null, kf || (kf = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, _h)))
    }
    var Bn = null;
    function ko(l) {
        Bn !== l && (Bn = l, A.unstable_scheduleCallback(A.unstable_NormalPriority, function() {
            Bn === l && (Bn = null);
            for (var t = 0; t < l.length; t += 3) {
                var a = l[t],
                    u = l[t + 1],
                    e = l[t + 2];
                if (typeof u != "function") {
                    if ($f(u || a) === null)
                        continue;
                    break
                }
                var n = ja(a);
                n !== null && (l.splice(t, 3), t -= 3, Wi(n, {
                    pending: !0,
                    data: e,
                    method: a.method,
                    action: u
                }, u, e))
            }
        }))
    }
    function me(l) {
        function t(c) {
            return Nn(c, l)
        }
        ra !== null && Nn(ra, l),
        da !== null && Nn(da, l),
        ha !== null && Nn(ha, l),
        ye.forEach(t),
        ve.forEach(t);
        for (var a = 0; a < ya.length; a++) {
            var u = ya[a];
            u.blockedOn === l && (u.blockedOn = null)
        }
        for (; 0 < ya.length && (a = ya[0], a.blockedOn === null);)
            Wo(a),
            a.blockedOn === null && ya.shift();
        if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
            for (u = 0; u < a.length; u += 3) {
                var e = a[u],
                    n = a[u + 1],
                    i = e[Kl] || null;
                if (typeof n == "function")
                    i || ko(a);
                else if (i) {
                    var f = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (e = n, i = n[Kl] || null)
                            f = i.formAction;
                        else if ($f(e) !== null)
                            continue
                    } else
                        f = i.action;
                    typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3), u -= 3),
                    ko(a)
                }
            }
    }
    function If(l) {
        this._internalRoot = l
    }
    Yn.prototype.render = If.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(g(409));
        var a = t.current,
            u = nt();
        Lo(a, u, l, t, null, null)
    },
    Yn.prototype.unmount = If.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            Lo(l.current, 2, null, l, null, null),
            gn(),
            t[qa] = null
        }
    };
    function Yn(l) {
        this._internalRoot = l
    }
    Yn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = hc();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var a = 0; a < ya.length && t !== 0 && t < ya[a].priority; a++)
                ;
            ya.splice(a, 0, l),
            a === 0 && Wo(l)
        }
    };
    var Io = il.version;
    if (Io !== "19.1.0")
        throw Error(g(527, Io, "19.1.0"));
    D.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(g(188)) : (l = Object.keys(l).join(","), Error(g(268, l)));
        return l = U(t), l = l !== null ? T(l) : null, l = l === null ? null : l.stateNode, l
    };
    var Rh = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: m,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qn.isDisabled && qn.supportsFiber)
            try {
                xu = qn.inject(Rh),
                Il = qn
            } catch {}
    }
    return pe.createRoot = function(l, t) {
        if (!X(l))
            throw Error(g(299));
        var a = !1,
            u = "",
            e = h0,
            n = y0,
            i = v0,
            f = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (f = t.unstable_transitionCallbacks)), t = Zo(l, 1, !1, null, null, a, u, e, n, i, f, null), l[qa] = t.current, Bf(l), new If(t)
    }, pe.hydrateRoot = function(l, t, a) {
        if (!X(l))
            throw Error(g(299));
        var u = !1,
            e = "",
            n = h0,
            i = y0,
            f = v0,
            c = null,
            h = null;
        return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (c = a.unstable_transitionCallbacks), a.formState !== void 0 && (h = a.formState)), t = Zo(l, 1, !0, t, a ?? null, u, e, n, i, f, c, h), t.context = Vo(null), a = t.current, u = nt(), u = Zn(u), e = kt(u), e.callback = null, It(a, e, u), a = u, t.current.lanes = a, Tu(t, a), Dt(t), l[qa] = t.current, Bf(l), new Yn(t)
    }, pe.version = "19.1.0", pe
}
var cr;
function Gh() {
    if (cr)
        return lc.exports;
    cr = 1;
    function A() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)
            } catch (il) {
                console.error(il)
            }
    }
    return A(), lc.exports = Xh(), lc.exports
}
var Qh = Gh(),
    Al = nc();
const Ya = 240,
    Se = 320,
    ga = 8,
    sr = ["#FF9EBB", "#FFD700", "#FF6B6B", "#98D8C8", "#FFB347", "#C9A0DC", "#87CEEB", "#FFDAB9", "#B5EAD7"],
    Zh = [{
        x: 0,
        zOff: 60,
        stemH: 88,
        petalCount: 6,
        outerColor: "#D4145A",
        innerColor: "#FF85A1",
        centerColor: "#FFD700",
        petalW: 22,
        petalH: 40,
        delay: .05,
        scale: 1.15
    }, {
        x: -50,
        zOff: 38,
        stemH: 68,
        petalCount: 6,
        outerColor: "#AA1465",
        innerColor: "#E8638F",
        centerColor: "#FFA500",
        petalW: 18,
        petalH: 34,
        delay: .18,
        scale: .95
    }, {
        x: 50,
        zOff: 42,
        stemH: 74,
        petalCount: 7,
        outerColor: "#7B1FA2",
        innerColor: "#CE93D8",
        centerColor: "#FFE066",
        petalW: 18,
        petalH: 34,
        delay: .13,
        scale: .98
    }, {
        x: -26,
        zOff: 52,
        stemH: 80,
        petalCount: 5,
        outerColor: "#C62828",
        innerColor: "#EF9A9A",
        centerColor: "#FFD700",
        petalW: 20,
        petalH: 38,
        delay: .22,
        scale: 1.05
    }, {
        x: 28,
        zOff: 48,
        stemH: 76,
        petalCount: 8,
        outerColor: "#E65100",
        innerColor: "#FFCC80",
        centerColor: "#5D4037",
        petalW: 16,
        petalH: 30,
        delay: .16,
        scale: 1
    }, {
        x: -78,
        zOff: 22,
        stemH: 54,
        petalCount: 6,
        outerColor: "#AD1457",
        innerColor: "#F48FB1",
        centerColor: "#FFA000",
        petalW: 15,
        petalH: 28,
        delay: .3,
        scale: .82
    }, {
        x: 78,
        zOff: 26,
        stemH: 58,
        petalCount: 5,
        outerColor: "#BF360C",
        innerColor: "#FFAB91",
        centerColor: "#FFD700",
        petalW: 16,
        petalH: 30,
        delay: .27,
        scale: .88
    }];
function Vh({f: A, isOpen: il}) {
    const F = -(A.stemH + 52),
        g = `translateX(${A.x}px) translateZ(${A.zOff}px) scale(${A.scale})`,
        X = `translateX(${A.x}px) translateZ(2px) scale(0)`;
    return O.jsxs("div", {
        style: {
            position: "absolute",
            left: "50%",
            bottom: 0,
            width: 0,
            height: 0,
            transformStyle: "preserve-3d",
            transform: il ? g : X,
            transformOrigin: "center bottom",
            opacity: il ? 1 : 0,
            transition: il ? `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${A.delay}s, opacity 0.1s ease ${A.delay}s` : "transform 0.5s ease 0s, opacity 0.08s ease 0s",
            willChange: "transform, opacity"
        },
        children: [O.jsx("div", {
            style: {
                position: "absolute",
                left: "-4px",
                bottom: 0,
                width: "8px",
                height: `${A.stemH}px`,
                background: "linear-gradient(to right, #2E7D32 0%, #66BB6A 50%, #2E7D32 100%)",
                borderRadius: "4px",
                boxShadow: "3px 0 10px rgba(20,60,20,0.45), -1px 0 4px rgba(0,0,0,0.2), inset 1px 0 3px rgba(255,255,255,0.15)"
            }
        }), O.jsx("div", {
            style: {
                position: "absolute",
                left: "-18px",
                bottom: `${A.stemH * .42}px`,
                width: "22px",
                height: "12px",
                background: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
                borderRadius: "50% 0 50% 50%",
                transform: "rotateZ(-38deg)",
                boxShadow: "2px 3px 7px rgba(20,60,20,0.35)"
            }
        }), O.jsx("div", {
            style: {
                position: "absolute",
                left: "4px",
                bottom: `${A.stemH * .26}px`,
                width: "22px",
                height: "12px",
                background: "linear-gradient(225deg, #4CAF50 0%, #2E7D32 100%)",
                borderRadius: "0 50% 50% 50%",
                transform: "rotateZ(38deg)",
                boxShadow: "-2px 3px 7px rgba(20,60,20,0.35)"
            }
        }), O.jsxs("div", {
            style: {
                position: "absolute",
                left: "-50px",
                top: `${F}px`,
                width: "100px",
                height: "100px",
                transform: "rotateX(-45deg)",
                backfaceVisibility: "hidden"
            },
            children: [Array.from({
                length: A.petalCount
            }, (J, W) => {
                const sl = W / A.petalCount * 360;
                return O.jsx("div", {
                    style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginLeft: `-${A.petalW / 2}px`,
                        marginTop: `-${A.petalH}px`,
                        width: `${A.petalW}px`,
                        height: `${A.petalH}px`,
                        transformOrigin: "50% 100%",
                        transform: `rotateZ(${sl}deg)`,
                        borderRadius: "52% 52% 36% 36%",
                        background: `linear-gradient(to top, ${A.outerColor} 0%, ${A.innerColor} 55%, #FFE0EC 100%)`,
                        boxShadow: "0 5px 12px rgba(0,0,0,0.22), inset 0 -6px 10px rgba(0,0,0,0.12), inset 1px 1px 4px rgba(255,255,255,0.3)"
                    }
                }, `op${W}`)
            }), Array.from({
                length: A.petalCount
            }, (J, W) => {
                const sl = W / A.petalCount * 360 + 180 / A.petalCount;
                return O.jsx("div", {
                    style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginLeft: `-${A.petalW * .35}px`,
                        marginTop: `-${A.petalH * .68}px`,
                        width: `${A.petalW * .7}px`,
                        height: `${A.petalH * .68}px`,
                        transformOrigin: "50% 100%",
                        transform: `rotateZ(${sl}deg)`,
                        borderRadius: "52% 52% 36% 36%",
                        background: `linear-gradient(to top, ${A.innerColor} 0%, #FFD6E8 100%)`,
                        opacity: .9
                    }
                }, `ip${W}`)
            }), O.jsx("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "28px",
                    height: "28px",
                    marginLeft: "-14px",
                    marginTop: "-14px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 28%, #ffffffCC 0%, ${A.centerColor}EE 40%, ${A.centerColor}88 100%)`,
                    boxShadow: `0 0 14px ${A.centerColor}BB, 0 6px 18px rgba(0,0,0,0.28), inset 0 -3px 5px rgba(0,0,0,0.18)`,
                    zIndex: 10
                }
            }), Array.from({
                length: 6
            }, (J, W) => {
                const sl = W / 6 * Math.PI * 2;
                return O.jsx("div", {
                    style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: A.outerColor,
                        marginLeft: "-2px",
                        marginTop: "-2px",
                        transform: `translate(${Math.cos(sl) * 10}px, ${Math.sin(sl) * 10}px)`,
                        opacity: .7
                    }
                }, `s${W}`)
            })]
        })]
    })
}
function Lh(A) {
    return Array.from({
        length: A
    }, () => ({
        x: Math.random() * 100,
        y: -5 - Math.random() * 30,
        rotation: Math.random() * 360,
        color: sr[Math.floor(Math.random() * sr.length)],
        w: 6 + Math.random() * 8,
        h: 4 + Math.random() * 6,
        animDuration: 2.5 + Math.random() * 2.5,
        animDelay: Math.random() * 2.5,
        drift: (Math.random() - .5) * 80,
        isCircle: Math.random() > .6
    }))
}
function Kh() {
    const [A, il] = Al.useState(!1),
        [F, g] = Al.useState(!1),
        [X, J] = Al.useState({
            x: -15,
            y: -22
        }),
        [W, sl] = Al.useState(1),
        [U, T] = Al.useState([]),
        [N, P] = Al.useState(!1),
        [al, Hl] = Al.useState(0),
        ml = Al.useRef(!1),
        Zl = Al.useRef(!1),
        Sl = Al.useRef({
            x: 0,
            y: 0
        }),
        gt = Al.useRef(0),
        $l = Al.useRef(null),
        pinchRef = Al.useRef({ distance: 0, scale: 1 }),
        zl = Al.useMemo(() => Lh(70), []),
        Nl = "Happy",
        V = "Birthday!",
        Cl = "Ana Laura",
        xl = Nl + " " + V + " " + Cl;
    Al.useEffect(() => {
        const E = z => {
            $l.current || ($l.current = z),
            Hl(Math.sin((z - $l.current) / 1e3 * 1.2) * 7),
            gt.current = requestAnimationFrame(E)
        };
        return gt.current = requestAnimationFrame(E), () => cancelAnimationFrame(gt.current)
    }, []),
    Al.useEffect(() => {
        A ? (T(Array(xl.length).fill(!1)), P(!1), xl.split("").forEach((E, z) => {
            setTimeout(() => {
                T(s => {
                    const x = [...s];
                    return x[z] = !0, x
                })
            }, 650 + z * 80)
        }), setTimeout(() => P(!0), 650 + xl.length * 80 + 300)) : (T([]), P(!1))
    }, [A]);
    const jl = Al.useCallback((E, z) => {
            ml.current = !0,
            Zl.current = !1,
            Sl.current = {
                x: E,
                y: z
            }
        }, []),
        Ll = Al.useCallback((E, z) => {
            if (!ml.current)
                return;
            const s = E - Sl.current.x,
                x = z - Sl.current.y;
            (Math.abs(s) > 2 || Math.abs(x) > 2) && (Zl.current = !0),
            J(_ => ({
                x: Math.max(-40, Math.min(40, _.x + x * .45)),
                y: _.y + s * .65
            })),
            Sl.current = {
                x: E,
                y: z
            }
        }, []),
        xt = Al.useCallback(() => {
            ml.current = !1
        }, []);
    Al.useEffect(() => {
        const E = s => Ll(s.clientX, s.clientY),
            z = () => xt();
        return window.addEventListener("mousemove", E), window.addEventListener("mouseup", z), () => {
            window.removeEventListener("mousemove", E),
            window.removeEventListener("mouseup", z)
        }
    }, [Ll, xt]);
    const mt = E => {
            E.preventDefault(),
            jl(E.clientX, E.clientY)
        },
        Ol = E => {
            if (E.touches.length === 2) {
                const t1 = E.touches[0], t2 = E.touches[1];
                pinchRef.current.distance = Math.sqrt((t1.clientX - t2.clientX)**2 + (t1.clientY - t2.clientY)**2);
                pinchRef.current.scale = W;
            } else if (E.touches.length === 1) {
                const z = E.touches[0];
                jl(z.clientX, z.clientY);
            }
        },
        Mt = E => {
            if (E.touches.length === 2) {
                E.preventDefault();
                const t1 = E.touches[0], t2 = E.touches[1];
                const newDist = Math.sqrt((t1.clientX - t2.clientX)**2 + (t1.clientY - t2.clientY)**2);
                const newScale = pinchRef.current.scale * (newDist / pinchRef.current.distance);
                sl(Math.max(0.4, Math.min(2.2, newScale)));
            } else if (E.touches.length === 1) {
                E.preventDefault();
                const z = E.touches[0];
                Ll(z.clientX, z.clientY);
            }
        },
        _t = () => xt(),
        Dl = E => {
            E.preventDefault(),
            sl(z => Math.max(.4, Math.min(2.2, z - E.deltaY * 8e-4)))
        },
        m = E => {
            E.stopPropagation(),
            Zl.current || (il(z => !z), F || g(!0))
        },
        D = A ? -158 : 0,
        isMobile = typeof window != "undefined" && window.innerWidth <= 640,
        wrapperScale = isMobile ? Math.min(W, 0.95) : W,
        wrapperOffset = A && isMobile ? 30 : 0;
    return O.jsxs("div", {
        "data-testid": "birthday-card-scene",
        className: "w-full h-screen relative overflow-hidden",
        style: {
            background: "linear-gradient(155deg, #FFF8F5 0%, #FFE8D8 55%, #FFF5EC 100%)",
            userSelect: "none",
            touchAction: "none"
        },
        onMouseDown: mt,
        onTouchStart: Ol,
        onTouchMove: Mt,
        onTouchEnd: _t,
        onWheel: Dl,
        children: [O.jsxs("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [O.jsx("div", {
                style: {
                    position: "absolute",
                    top: "15%",
                    left: "20%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,160,180,0.18) 0%, transparent 70%)"
                }
            }), O.jsx("div", {
                style: {
                    position: "absolute",
                    bottom: "20%",
                    right: "18%",
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,200,120,0.14) 0%, transparent 70%)"
                }
            })]
        }), N && O.jsx("div", {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            children: zl.map((E, z) => O.jsx("div", {
                style: {
                    position: "absolute",
                    left: `${E.x}%`,
                    top: `${E.y}%`,
                    width: `${E.w}px`,
                    height: `${E.isCircle ? E.w : E.h}px`,
                    borderRadius: E.isCircle ? "50%" : "2px",
                    background: E.color,
                    transform: `rotate(${E.rotation}deg)`,
                    animation: `confettiFall ${E.animDuration}s ${E.animDelay}s ease-in infinite`,
                    "--drift": `${E.drift}px`,
                    opacity: .9
                }
            }, z))
        }), O.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            style: {
                perspective: "1100px",
                perspectiveOrigin: "50% 44%"
            },
            children: O.jsxs("div", {
                style: {
                    position: "relative",
                    width: Ya,
                    height: Se,
                    transformStyle: "preserve-3d",
                    transform: `translateX(${wrapperOffset}px) rotateX(${X.x}deg) rotateY(${X.y}deg) scale(${wrapperScale}) translateY(${al}px)`,
                    cursor: ml.current ? "grabbing" : "grab"
                },
                children: [O.jsxs("div", {
                    style: {
                        position: "absolute",
                        width: Ya,
                        height: Se,
                        background: "linear-gradient(145deg, #FFFAF6 0%, #FFF8F2 50%, #FFF3EC 100%)",
                        borderRadius: "3px 10px 10px 3px",
                        backfaceVisibility: "hidden",
                        overflow: "hidden"
                    },
                    children: [O.jsx("div", {
                        style: {
                            position: "absolute",
                            top: "-20px",
                            left: "-20px",
                            width: "160px",
                            height: "160px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,182,193,0.18) 0%, transparent 70%)",
                            pointerEvents: "none"
                        }
                    }), O.jsx("div", {
                        style: {
                            position: "absolute",
                            bottom: "-10px",
                            right: "-10px",
                            width: "140px",
                            height: "140px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,215,100,0.14) 0%, transparent 70%)",
                            pointerEvents: "none"
                        }
                    }), O.jsx("div", {
                        style: {
                            position: "absolute",
                            top: "40%",
                            right: "-30px",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(200,160,220,0.12) 0%, transparent 70%)",
                            pointerEvents: "none"
                        }
                    }), O.jsxs("div", {
                        style: {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "28px",
                            height: "28px",
                            opacity: .25,
                            pointerEvents: "none"
                        },
                        children: [Array.from({
                            length: 6
                        }, (E, z) => O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "7px",
                                height: "14px",
                                marginLeft: "-3.5px",
                                marginTop: "-12px",
                                borderRadius: "50% 50% 40% 40%",
                                background: "#E8A0B0",
                                transformOrigin: "50% 100%",
                                transform: `rotate(${z * 60}deg)`
                            }
                        }, z)), O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "8px",
                                height: "8px",
                                marginLeft: "-4px",
                                marginTop: "-4px",
                                borderRadius: "50%",
                                background: "#FFD700"
                            }
                        })]
                    }), O.jsxs("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        children: [O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "12px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                opacity: .22,
                                width: "60px",
                                display: "flex",
                                gap: "4px",
                                justifyContent: "center"
                            },
                            children: ["#FF9EBB", "#FFD700", "#CE93D8"].map((E, z) => O.jsxs("div", {
                                style: {
                                    position: "relative",
                                    width: "16px",
                                    height: "16px"
                                },
                                children: [Array.from({
                                    length: 5
                                }, (s, x) => O.jsx("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        width: "5px",
                                        height: "9px",
                                        marginLeft: "-2.5px",
                                        marginTop: "-8px",
                                        borderRadius: "50% 50% 40% 40%",
                                        background: E,
                                        transformOrigin: "50% 100%",
                                        transform: `rotate(${x * 72}deg)`
                                    }
                                }, x)), O.jsx("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        width: "5px",
                                        height: "5px",
                                        marginLeft: "-2.5px",
                                        marginTop: "-2.5px",
                                        borderRadius: "50%",
                                        background: "#FFD700"
                                    }
                                })]
                            }, z))
                        }), O.jsxs("div", {
                            style: {
                                opacity: A ? 1 : 0,
                                transition: A ? "opacity 0.4s ease 0.5s" : "opacity 0.1s ease",
                                position: "absolute",
                                bottom: "22px",
                                left: 0,
                                right: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: [O.jsx("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "1px"
                                },
                                children: Nl.split("").map((E, z) => O.jsx("span", {
                                    style: {
                                        display: "inline-block",
                                        color: "#C8236B",
                                        fontSize: "19px",
                                        fontWeight: "700",
                                        fontFamily: "Georgia, serif",
                                        letterSpacing: "0.5px",
                                        transform: U[z] ? "translateY(0)" : "translateY(16px)",
                                        opacity: U[z] ? 1 : 0,
                                        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
                                        textShadow: "0 1px 4px rgba(200,35,107,0.2)"
                                    },
                                    children: E
                                }, z))
                            }), O.jsx("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "5px"
                                },
                                children: V.split("").map((E, z) => {
                                    const s = Nl.length + 1 + z;
                                    return O.jsx("span", {
                                        style: {
                                            display: "inline-block",
                                            color: "#B8860B",
                                            fontSize: "19px",
                                            fontWeight: "700",
                                            fontFamily: "Georgia, serif",
                                            letterSpacing: "0.5px",
                                            transform: U[s] ? "translateY(0)" : "translateY(16px)",
                                            opacity: U[s] ? 1 : 0,
                                            transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
                                            textShadow: "0 1px 4px rgba(180,120,0,0.2)"
                                        },
                                        children: E
                                    }, z)
                                })
                            }), O.jsx("div", {
                                style: {
                                    width: "50px",
                                    height: "1.5px",
                                    marginBottom: "5px",
                                    background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
                                    opacity: U[Nl.length + 1 + V.length] ? 1 : 0,
                                    transition: "opacity 0.5s ease"
                                }
                            }), O.jsx("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: Cl.split("").map((E, z) => {
                                    const s = Nl.length + 1 + V.length + 1 + z;
                                    return O.jsx("span", {
                                        style: {
                                            display: E === " " ? "inline" : "inline-block",
                                            color: "#C8236B",
                                            fontSize: "16px",
                                            fontStyle: "italic",
                                            fontWeight: "600",
                                            fontFamily: "Georgia, serif",
                                            letterSpacing: "1.5px",
                                            transform: U[s] ? "translateY(0)" : "translateY(16px)",
                                            opacity: U[s] ? 1 : 0,
                                            transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
                                            textShadow: "0 1px 5px rgba(200,35,107,0.25)"
                                        },
                                        children: E === " " ? " " : E
                                    }, z)
                                })
                            }), O.jsx("div", {
                                style: {
                                    marginTop: "8px",
                                    display: "flex",
                                    gap: "6px",
                                    opacity: U[xl.length - 1] ? 1 : 0,
                                    transform: U[xl.length - 1] ? "scale(1)" : "scale(0.4)",
                                    transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)"
                                },
                                children: ["#FF9EBB", "#FFD700", "#FF9EBB"].map((E, z) => O.jsx("div", {
                                    style: {
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: E,
                                        boxShadow: `0 0 5px ${E}`
                                    }
                                }, z))
                            })]
                        })]
                    })]
                }), O.jsxs("div", {
                    style: {
                        position: "absolute",
                        width: Ya,
                        height: Se,
                        transform: `translateZ(${-ga / 2}px) rotateY(180deg)`,
                        background: "linear-gradient(140deg, #FFB3C6 0%, #FF85A1 50%, #E8638F 100%)",
                        borderRadius: "10px 3px 3px 10px",
                        backfaceVisibility: "hidden",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [O.jsx("div", {
                        style: {
                            position: "absolute",
                            inset: "12px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            borderRadius: "6px"
                        }
                    }), O.jsxs("div", {
                        style: {
                            opacity: .4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "6px"
                        },
                        children: [Array.from({
                            length: 8
                        }, (E, z) => O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "10px",
                                height: "20px",
                                marginLeft: "-5px",
                                marginTop: "-18px",
                                borderRadius: "50% 50% 40% 40%",
                                background: "rgba(255,255,255,0.6)",
                                transformOrigin: "50% 100%",
                                transform: `rotate(${z * 45}deg)`
                            }
                        }, z)), O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "12px",
                                height: "12px",
                                marginLeft: "-6px",
                                marginTop: "-6px",
                                borderRadius: "50%",
                                background: "rgba(255,220,80,0.8)"
                            }
                        })]
                    }), O.jsx("div", {
                        style: {
                            position: "absolute",
                            bottom: "16px",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "9px",
                            letterSpacing: "2px",
                            fontFamily: "Georgia, serif",
                            fontStyle: "italic"
                        },
                        children: "with love ♥"
                    })]
                }), O.jsx("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        top: "62%",
                        width: Ya,
                        height: 0,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        pointerEvents: "none"
                    },
                    children: Zh.map((E, z) => O.jsx(Vh, {
                        f: E,
                        isOpen: A
                    }, z))
                }), O.jsxs("div", {
                    "data-testid": "card-front-panel",
                    style: {
                        position: "absolute",
                        width: Ya,
                        height: Se,
                        transformStyle: "preserve-3d",
                        transformOrigin: "left center",
                        transform: `rotateY(${D}deg)`,
                        transition: "transform 0.85s cubic-bezier(0.34, 1.15, 0.64, 1)"
                    },
                    onClick: m,
                    children: [O.jsxs("div", {
                        style: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(140deg, #FFB3C6 0%, #FF85A1 45%, #E8638F 100%)",
                            borderRadius: "3px 10px 10px 3px",
                            backfaceVisibility: "hidden",
                            cursor: "pointer",
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(180,50,90,0.18), 0 2px 8px rgba(180,50,90,0.1)",
                            transform: `translateZ(${ga / 2}px)`
                        },
                        children: [O.jsx("div", {
                            style: {
                                position: "absolute",
                                inset: "14px",
                                border: "1.5px solid rgba(255,255,255,0.45)",
                                borderRadius: "5px",
                                pointerEvents: "none"
                            }
                        }), O.jsx("div", {
                            style: {
                                position: "absolute",
                                inset: "18px",
                                border: "0.5px solid rgba(255,255,255,0.25)",
                                borderRadius: "3px",
                                pointerEvents: "none"
                            }
                        }), [{
                            top: "20px",
                            left: "20px"
                        }, {
                            top: "20px",
                            right: "20px"
                        }, {
                            bottom: "20px",
                            left: "20px"
                        }, {
                            bottom: "20px",
                            right: "20px"
                        }].map((E, z) => O.jsxs("div", {
                            style: {
                                position: "absolute",
                                ...E,
                                width: "16px",
                                height: "16px",
                                pointerEvents: "none"
                            },
                            children: [O.jsx("div", {
                                style: {
                                    position: "absolute",
                                    top: "50%",
                                    left: 0,
                                    right: 0,
                                    height: "1.5px",
                                    background: "rgba(255,255,255,0.65)",
                                    marginTop: "-0.75px"
                                }
                            }), O.jsx("div", {
                                style: {
                                    position: "absolute",
                                    left: "50%",
                                    top: 0,
                                    bottom: 0,
                                    width: "1.5px",
                                    background: "rgba(255,255,255,0.65)",
                                    marginLeft: "-0.75px"
                                }
                            })]
                        }, z)), O.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%"
                            },
                            children: [O.jsxs("div", {
                                style: {
                                    position: "relative",
                                    width: "70px",
                                    height: "70px",
                                    marginBottom: "18px"
                                },
                                children: [Array.from({
                                    length: 8
                                }, (E, z) => O.jsx("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        width: "13px",
                                        height: "26px",
                                        marginLeft: "-6.5px",
                                        marginTop: "-24px",
                                        borderRadius: "50% 50% 40% 40%",
                                        background: "rgba(255,255,255,0.75)",
                                        transformOrigin: "50% 100%",
                                        transform: `rotate(${z * 45}deg)`
                                    }
                                }, z)), O.jsx("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "18px",
                                        height: "18px",
                                        borderRadius: "50%",
                                        background: "radial-gradient(circle, #FFE066, #FFA500)",
                                        zIndex: 10,
                                        boxShadow: "0 0 8px rgba(255,200,0,0.6)"
                                    }
                                })]
                            }), O.jsx("div", {
                                style: {
                                    color: "white",
                                    fontFamily: "Georgia, serif",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    letterSpacing: "1.5px",
                                    textShadow: "0 2px 8px rgba(140,0,50,0.3)",
                                    marginBottom: "6px"
                                },
                                children: "For You"
                            }), O.jsx("div", {
                                style: {
                                    width: "70px",
                                    height: "1.5px",
                                    background: "linear-gradient(to right, transparent, rgba(255,220,180,0.9), transparent)",
                                    marginBottom: "8px"
                                }
                            }), O.jsx("div", {
                                style: {
                                    color: "rgba(255,255,255,0.8)",
                                    fontFamily: "system-ui, sans-serif",
                                    fontSize: "10px",
                                    letterSpacing: "2.5px",
                                    textTransform: "uppercase"
                                },
                                children: "tap to open"
                            }), O.jsx("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "52px",
                                    left: "14px",
                                    right: "14px",
                                    height: "1.5px",
                                    background: "linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)"
                                }
                            })]
                        })]
                    }), O.jsxs("div", {
                        style: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(150deg, #FFFAF6 0%, #FFF5EE 100%)",
                            borderRadius: "3px 10px 10px 3px",
                            backfaceVisibility: "hidden",
                            visibility: A ? 'visible' : 'hidden',
                            transform: `rotateY(180deg) translateZ(${ga / 2}px)`,
                            overflow: "hidden"
                        },
                        children: [O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "-30px",
                                right: "-30px",
                                width: "180px",
                                height: "180px",
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(255,182,193,0.15) 0%, transparent 70%)",
                                pointerEvents: "none"
                            }
                        }), O.jsx("div", {
                            style: {
                                position: "absolute",
                                top: "18px",
                                left: "18px",
                                right: "18px",
                                fontSize: "8px",
                                letterSpacing: "1.8px",
                                textTransform: "uppercase",
                                color: "#C9A090",
                                fontFamily: "system-ui, sans-serif"
                            },
                            children: [
                                O.jsx("div", {
                                style: {
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    marginBottom: "12px",
                                    letterSpacing: "0.5px"
                                },
                                children: "Hi Ana"
                                }),

                                O.jsx("div", {
                                style: {
                                    fontSize: "12px",
                                    lineHeight: "22px",
                                    whiteSpace: "pre-line",
                                    opacity: 0.9
                                },
                                children:
                                    "I hope your day feels calm and light.\n\nYou mean a lot more than you think.\n\n Im grateful for you.\n\nHappy Birthday"
                                })
                            ]
                            }),
                             O.jsx("div", {
                            style: {
                                position: "absolute",
                                bottom: "18px",
                                left: 0,
                                right: 0,
                                fontSize: "14px",
                                color: "rgba(210,100,130,0.28)",
                                textAlign: "center"
                            },
                            children: "♥"
                        })]
                    })]
                }), O.jsx("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${ga}px`,
                        height: Se,
                        background: "linear-gradient(to right, #D4A090, #C89080)",
                        transformOrigin: "left center",
                        transform: "rotateY(-90deg) translateZ(0px)"
                    }
                }), O.jsx("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: Ya,
                        height: `${ga}px`,
                        background: "linear-gradient(to top, #D4B0A0, #E8C8B8)",
                        transformOrigin: "top center",
                        transform: "rotateX(-90deg)"
                    }
                }), O.jsx("div", {
                    style: {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: Ya,
                        height: `${ga}px`,
                        background: "linear-gradient(to bottom, #D4B0A0, #E8C8B8)",
                        transformOrigin: "bottom center",
                        transform: "rotateX(90deg)"
                    }
                }), O.jsx("div", {
                    style: {
                        position: "absolute",
                        bottom: -60,
                        left: "5%",
                        width: "90%",
                        height: "40px",
                        background: "radial-gradient(ellipse, rgba(160,80,60,0.22) 0%, transparent 75%)",
                        transform: "rotateX(90deg)",
                        filter: "blur(4px)"
                    }
                })]
            })
        }), !F && O.jsx("div", {
            className: "absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none",
            style: {
                animation: "hintPulse 2.5s ease-in-out infinite"
            },
            children: O.jsx("div", {
                style: {
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    padding: "10px 26px",
                    borderRadius: "100px",
                    color: "#8C6050",
                    fontSize: "13px",
                    fontFamily: "system-ui, sans-serif",
                    letterSpacing: "0.3px",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 2px 20px rgba(180,90,60,0.1)"
                },
                children: "Click the card to open • Drag to rotate • Scroll to zoom"
            })
        })]
    })
}
function Jh() {
    return O.jsx(Kh, {})
}
Qh.createRoot(document.getElementById("root")).render(O.jsx(Jh, {}));
