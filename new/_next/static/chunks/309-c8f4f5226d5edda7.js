(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[309], {
    4564: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                let { children: t } = e;
                return t
            }
            ,
            t.suspense = function () {
                let e = Error(s.NEXT_DYNAMIC_NO_SSR_CODE);
                throw e.digest = s.NEXT_DYNAMIC_NO_SSR_CODE,
                e
            }
            ,
            (0,
                i(2648).Z)(i(7294));
        var s = i(2983)
    },
    7645: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t) {
                let i = l.default
                    , a = {
                        loading: e => {
                            let { error: t, isLoading: i, pastDelay: s } = e;
                            return null
                        }
                    };
                e instanceof Promise ? a.loader = () => e : "function" == typeof e ? a.loader = e : "object" == typeof e && (a = s({}, a, e)),
                    a = s({}, a, t);
                let r = a.loader
                    , n = () => r().then(o);
                if (a.loadableGenerated && delete (a = s({}, a, a.loadableGenerated, {
                    loader: n
                })).loadableGenerated,
                    "boolean" == typeof a.ssr) {
                    if (!a.ssr)
                        return delete a.ssr,
                            d(n, a);
                    delete a.ssr
                }
                return i(a)
            }
            ,
            t.noSSR = d;
        var s = i(6495).Z
            , a = i(2648).Z
            , r = (0,
                i(1598).Z)(i(7294))
            , l = a(i(4588))
            , n = a(i(4564));
        function o(e) {
            return {
                default: e.default || e
            }
        }
        function d(e, t) {
            delete t.webpack,
                delete t.modules;
            let i = r.lazy(e)
                , s = t.loading
                , a = r.default.createElement(s, {
                    error: null,
                    isLoading: !0,
                    pastDelay: !1,
                    timedOut: !1
                });
            return e => r.default.createElement(r.Suspense, {
                fallback: a
            }, r.default.createElement(n.default, null, r.default.createElement(i, Object.assign({}, e))))
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
            Object.assign(t.default, t),
            e.exports = t.default)
    },
    3644: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LoadableContext = void 0;
        var s = (0,
            i(2648).Z)(i(7294));
        let a = s.default.createContext(null);
        t.LoadableContext = a
    },
    4588: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var s = i(6495).Z
            , a = (0,
                i(2648).Z)(i(7294))
            , r = i(3644);
        let l = []
            , n = []
            , o = !1;
        function d(e) {
            let t = e()
                , i = {
                    loading: !0,
                    loaded: null,
                    error: null
                };
            return i.promise = t.then(e => (i.loading = !1,
                i.loaded = e,
                e)).catch(e => {
                    throw i.loading = !1,
                    i.error = e,
                    e
                }
                ),
                i
        }
        class p {
            promise() {
                return this._res.promise
            }
            retry() {
                this._clearTimeouts(),
                    this._res = this._loadFn(this._opts.loader),
                    this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                let { _res: e, _opts: t } = this;
                e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                    this._update({
                        pastDelay: !0
                    })
                }
                    , t.delay)),
                    "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }
                        , t.timeout))),
                    this._res.promise.then(() => {
                        this._update({}),
                            this._clearTimeouts()
                    }
                    ).catch(e => {
                        this._update({}),
                            this._clearTimeouts()
                    }
                    ),
                    this._update({})
            }
            _update(e) {
                this._state = s({}, this._state, {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading
                }, e),
                    this._callbacks.forEach(e => e())
            }
            _clearTimeouts() {
                clearTimeout(this._delay),
                    clearTimeout(this._timeout)
            }
            getCurrentValue() {
                return this._state
            }
            subscribe(e) {
                return this._callbacks.add(e),
                    () => {
                        this._callbacks.delete(e)
                    }
            }
            constructor(e, t) {
                this._loadFn = e,
                    this._opts = t,
                    this._callbacks = new Set,
                    this._delay = null,
                    this._timeout = null,
                    this.retry()
            }
        }
        function u(e) {
            return function (e, t) {
                let i = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, t);
                i.lazy = a.default.lazy(i.loader);
                let s = null;
                function l() {
                    if (!s) {
                        let t = new p(e, i);
                        s = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return s.promise()
                }
                if (!o) {
                    let d = i.webpack ? i.webpack() : i.modules;
                    d && n.push(e => {
                        for (let t of d)
                            if (-1 !== e.indexOf(t))
                                return l()
                    }
                    )
                }
                function u(e) {
                    !function () {
                        l();
                        let e = a.default.useContext(r.LoadableContext);
                        e && Array.isArray(i.modules) && i.modules.forEach(t => {
                            e(t)
                        }
                        )
                    }();
                    let t = a.default.createElement(i.loading, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    });
                    return a.default.createElement(a.default.Suspense, {
                        fallback: t
                    }, a.default.createElement(i.lazy, e))
                }
                return u.preload = () => l(),
                    u.displayName = "LoadableComponent",
                    u
            }(d, e)
        }
        function c(e, t) {
            let i = [];
            for (; e.length;) {
                let s = e.pop();
                i.push(s(t))
            }
            return Promise.all(i).then(() => {
                if (e.length)
                    return c(e, t)
            }
            )
        }
        u.preloadAll = () => new Promise((e, t) => {
            c(l).then(e, t)
        }
        ),
            u.preloadReady = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(t => {
                    let i = () => (o = !0,
                        t());
                    c(n, e).then(i, i)
                }
                )
            }
            ,
            window.__NEXT_PRELOADREADY = u.preloadReady,
            t.default = u
    },
    5152: function (e, t, i) {
        e.exports = i(7645)
    },
    719: function (e, t, i) {
        "use strict";
        i.d(t, {
            tq: function () {
                return w
            },
            o5: function () {
                return C
            }
        });
        var s = i(7294)
            , a = i(8197);
        function r(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function l(e, t) {
            let i = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : l(e[i], t[i]) : e[i] = t[i]
            }
            )
        }
        function n(e = {}) {
            return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
        }
        function o(e = {}) {
            return e.pagination && void 0 === e.pagination.el
        }
        function d(e = {}) {
            return e.scrollbar && void 0 === e.scrollbar.el
        }
        function p(e = "") {
            let t = e.split(" ").map(e => e.trim()).filter(e => !!e)
                , i = [];
            return t.forEach(e => {
                0 > i.indexOf(e) && i.push(e)
            }
            ),
                i.join(" ")
        }
        let u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"]
            , c = (e, t) => {
                let i = t.slidesPerView;
                if (t.breakpoints) {
                    let s = a.ZP.prototype.getBreakpoint(t.breakpoints)
                        , r = s in t.breakpoints ? t.breakpoints[s] : void 0;
                    r && r.slidesPerView && (i = r.slidesPerView)
                }
                let l = Math.ceil(parseFloat(t.loopedSlides || i, 10));
                return (l += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (l = e.length),
                    l
            }
            ;
        function h(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }
        let f = e => {
            e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }
            ;
        function m(e, t) {
            return "undefined" == typeof window ? (0,
                s.useEffect)(e, t) : (0,
                    s.useLayoutEffect)(e, t)
        }
        let g = (0,
            s.createContext)(null)
            , v = (0,
                s.createContext)(null);
        function b() {
            return (b = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        let w = (0,
            s.forwardRef)(function (e, t) {
                let { className: i, tag: g = "div", wrapperTag: w = "div", children: y, onSwiper: C, ...S } = void 0 === e ? {} : e
                    , T = !1
                    , [E, x] = (0,
                        s.useState)("swiper")
                    , [M, P] = (0,
                        s.useState)(null)
                    , [$, k] = (0,
                        s.useState)(!1)
                    , O = (0,
                        s.useRef)(!1)
                    , _ = (0,
                        s.useRef)(null)
                    , L = (0,
                        s.useRef)(null)
                    , z = (0,
                        s.useRef)(null)
                    , A = (0,
                        s.useRef)(null)
                    , D = (0,
                        s.useRef)(null)
                    , I = (0,
                        s.useRef)(null)
                    , N = (0,
                        s.useRef)(null)
                    , B = (0,
                        s.useRef)(null)
                    , { params: G, passedParams: j, rest: F, events: H } = function (e = {}, t = !0) {
                        let i = {
                            on: {}
                        }
                            , s = {}
                            , n = {};
                        l(i, a.ZP.defaults),
                            l(i, a.ZP.extendedDefaults),
                            i._emitClasses = !0,
                            i.init = !1;
                        let o = {}
                            , d = u.map(e => e.replace(/_/, ""))
                            , p = Object.assign({}, e);
                        return Object.keys(p).forEach(a => {
                            void 0 !== e[a] && (d.indexOf(a) >= 0 ? r(e[a]) ? (i[a] = {},
                                n[a] = {},
                                l(i[a], e[a]),
                                l(n[a], e[a])) : (i[a] = e[a],
                                    n[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : o[a] = e[a])
                        }
                        ),
                            ["navigation", "pagination", "scrollbar"].forEach(e => {
                                !0 === i[e] && (i[e] = {}),
                                    !1 === i[e] && delete i[e]
                            }
                            ),
                        {
                            params: i,
                            passedParams: n,
                            rest: o,
                            events: s
                        }
                    }(S)
                    , { slides: R, slots: V } = function (e) {
                        let t = []
                            , i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return s.Children.toArray(e).forEach(e => {
                            if (h(e))
                                t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot])
                                i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let a = function e(t) {
                                    let i = [];
                                    return s.Children.toArray(t).forEach(t => {
                                        h(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }
                                    ),
                                        i
                                }(e.props.children);
                                a.length > 0 ? a.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else
                                i["container-end"].push(e)
                        }
                        ),
                        {
                            slides: t,
                            slots: i
                        }
                    }(y)
                    , q = () => {
                        k(!$)
                    }
                    ;
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                let W = () => {
                    if (Object.assign(G.on, H),
                        T = !0,
                        L.current = new a.ZP(G),
                        L.current.loopCreate = () => { }
                        ,
                        L.current.loopDestroy = () => { }
                        ,
                        G.loop && (L.current.loopedSlides = c(R, G)),
                        L.current.virtual && L.current.params.virtual.enabled) {
                        L.current.virtual.slides = R;
                        let e = {
                            cache: !1,
                            slides: R,
                            renderExternal: P,
                            renderExternalUpdate: !1
                        };
                        l(L.current.params.virtual, e),
                            l(L.current.originalParams.virtual, e)
                    }
                }
                    ;
                _.current || W(),
                    L.current && L.current.on("_beforeBreakpoint", q);
                let X = () => {
                    !T && H && L.current && Object.keys(H).forEach(e => {
                        L.current.on(e, H[e])
                    }
                    )
                }
                    , Y = () => {
                        H && L.current && Object.keys(H).forEach(e => {
                            L.current.off(e, H[e])
                        }
                        )
                    }
                    ;
                return (0,
                    s.useEffect)(() => () => {
                        L.current && L.current.off("_beforeBreakpoint", q)
                    }
                    ),
                    (0,
                        s.useEffect)(() => {
                            !O.current && L.current && (L.current.emitSlidesClasses(),
                                O.current = !0)
                        }
                        ),
                    m(() => {
                        if (t && (t.current = _.current),
                            _.current)
                            return L.current.destroyed && W(),
                                function ({ el: e, nextEl: t, prevEl: i, paginationEl: s, scrollbarEl: a, swiper: r }, l) {
                                    n(l) && t && i && (r.params.navigation.nextEl = t,
                                        r.originalParams.navigation.nextEl = t,
                                        r.params.navigation.prevEl = i,
                                        r.originalParams.navigation.prevEl = i),
                                        o(l) && s && (r.params.pagination.el = s,
                                            r.originalParams.pagination.el = s),
                                        d(l) && a && (r.params.scrollbar.el = a,
                                            r.originalParams.scrollbar.el = a),
                                        r.init(e)
                                }({
                                    el: _.current,
                                    nextEl: D.current,
                                    prevEl: I.current,
                                    paginationEl: N.current,
                                    scrollbarEl: B.current,
                                    swiper: L.current
                                }, G),
                                C && C(L.current),
                                () => {
                                    L.current && !L.current.destroyed && L.current.destroy(!0, !1)
                                }
                    }
                        , []),
                    m(() => {
                        X();
                        let e = function (e, t, i, s, a) {
                            let l = [];
                            if (!t)
                                return l;
                            let n = e => {
                                0 > l.indexOf(e) && l.push(e)
                            }
                                ;
                            if (i && s) {
                                let o = s.map(a)
                                    , d = i.map(a);
                                o.join("") !== d.join("") && n("children"),
                                    s.length !== i.length && n("children")
                            }
                            let p = u.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                            return p.forEach(i => {
                                if (i in e && i in t) {
                                    if (r(e[i]) && r(t[i])) {
                                        let s = Object.keys(e[i])
                                            , a = Object.keys(t[i]);
                                        s.length !== a.length ? n(i) : (s.forEach(s => {
                                            e[i][s] !== t[i][s] && n(i)
                                        }
                                        ),
                                            a.forEach(s => {
                                                e[i][s] !== t[i][s] && n(i)
                                            }
                                            ))
                                    } else
                                        e[i] !== t[i] && n(i)
                                }
                            }
                            ),
                                l
                        }(j, z.current, R, A.current, e => e.key);
                        return z.current = j,
                            A.current = R,
                            e.length && L.current && !L.current.destroyed && function ({ swiper: e, slides: t, passedParams: i, changedParams: s, nextEl: a, prevEl: n, scrollbarEl: o, paginationEl: d }) {
                                let p, u, c, h, f;
                                let m = s.filter(e => "children" !== e && "direction" !== e)
                                    , { params: g, pagination: v, navigation: b, scrollbar: w, virtual: y, thumbs: C } = e;
                                s.includes("thumbs") && i.thumbs && i.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (p = !0),
                                    s.includes("controller") && i.controller && i.controller.control && g.controller && !g.controller.control && (u = !0),
                                    s.includes("pagination") && i.pagination && (i.pagination.el || d) && (g.pagination || !1 === g.pagination) && v && !v.el && (c = !0),
                                    s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (g.scrollbar || !1 === g.scrollbar) && w && !w.el && (h = !0),
                                    s.includes("navigation") && i.navigation && (i.navigation.prevEl || n) && (i.navigation.nextEl || a) && (g.navigation || !1 === g.navigation) && b && !b.prevEl && !b.nextEl && (f = !0);
                                let S = t => {
                                    e[t] && (e[t].destroy(),
                                        "navigation" === t ? (g[t].prevEl = void 0,
                                            g[t].nextEl = void 0,
                                            e[t].prevEl = void 0,
                                            e[t].nextEl = void 0) : (g[t].el = void 0,
                                                e[t].el = void 0))
                                }
                                    ;
                                if (m.forEach(e => {
                                    if (r(g[e]) && r(i[e]))
                                        l(g[e], i[e]);
                                    else {
                                        let t = i[e];
                                        (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && S(e) : g[e] = i[e]
                                    }
                                }
                                ),
                                    m.includes("controller") && !u && e.controller && e.controller.control && g.controller && g.controller.control && (e.controller.control = g.controller.control),
                                    s.includes("children") && t && y && g.virtual.enabled ? (y.slides = t,
                                        y.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
                                    p) {
                                    let T = C.init();
                                    T && C.update(!0)
                                }
                                u && (e.controller.control = g.controller.control),
                                    c && (d && (g.pagination.el = d),
                                        v.init(),
                                        v.render(),
                                        v.update()),
                                    h && (o && (g.scrollbar.el = o),
                                        w.init(),
                                        w.updateSize(),
                                        w.setTranslate()),
                                    f && (a && (g.navigation.nextEl = a),
                                        n && (g.navigation.prevEl = n),
                                        b.init(),
                                        b.update()),
                                    s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
                                    s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
                                    s.includes("direction") && e.changeDirection(i.direction, !1),
                                    e.update()
                            }({
                                swiper: L.current,
                                slides: R,
                                passedParams: j,
                                changedParams: e,
                                nextEl: D.current,
                                prevEl: I.current,
                                scrollbarEl: B.current,
                                paginationEl: N.current
                            }),
                            () => {
                                Y()
                            }
                    }
                    ),
                    m(() => {
                        f(L.current)
                    }
                        , [M]),
                    s.createElement(g, b({
                        ref: _,
                        className: p(`${E}${i ? ` ${i}` : ""}`)
                    }, F), s.createElement(v.Provider, {
                        value: L.current
                    }, V["container-start"], s.createElement(w, {
                        className: "swiper-wrapper"
                    }, V["wrapper-start"], G.virtual ? function (e, t, i) {
                        if (!i)
                            return null;
                        let a = e.isHorizontal() ? {
                            [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                        } : {
                            top: `${i.offset}px`
                        };
                        return t.filter((e, t) => t >= i.from && t <= i.to).map(t => s.cloneElement(t, {
                            swiper: e,
                            style: a
                        }))
                    }(L.current, R, M) : !G.loop || L.current && L.current.destroyed ? R.map(e => s.cloneElement(e, {
                        swiper: L.current
                    })) : function (e, t, i) {
                        let a = t.map((t, i) => s.cloneElement(t, {
                            swiper: e,
                            "data-swiper-slide-index": i
                        }));
                        function r(e, t, a) {
                            return s.cloneElement(e, {
                                key: `${e.key}-duplicate-${t}-${a}`,
                                className: `${e.props.className || ""} ${i.slideDuplicateClass}`
                            })
                        }
                        if (i.loopFillGroupWithBlank) {
                            let l = i.slidesPerGroup - a.length % i.slidesPerGroup;
                            if (l !== i.slidesPerGroup)
                                for (let n = 0; n < l; n += 1) {
                                    let o = s.createElement("div", {
                                        className: `${i.slideClass} ${i.slideBlankClass}`
                                    });
                                    a.push(o)
                                }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length);
                        let d = c(a, i)
                            , p = []
                            , u = [];
                        for (let h = 0; h < d; h += 1) {
                            let f = h - Math.floor(h / a.length) * a.length;
                            u.push(r(a[f], h, "append")),
                                p.unshift(r(a[a.length - f - 1], h, "prepend"))
                        }
                        return e && (e.loopedSlides = d),
                            [...p, ...a, ...u]
                    }(L.current, R, G), V["wrapper-end"]), n(G) && s.createElement(s.Fragment, null, s.createElement("div", {
                        ref: I,
                        className: "swiper-button-prev"
                    }), s.createElement("div", {
                        ref: D,
                        className: "swiper-button-next"
                    })), d(G) && s.createElement("div", {
                        ref: B,
                        className: "swiper-scrollbar"
                    }), o(G) && s.createElement("div", {
                        ref: N,
                        className: "swiper-pagination"
                    }), V["container-end"]))
            });
        function y() {
            return (y = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        w.displayName = "Swiper";
        let C = (0,
            s.forwardRef)(function (e, t) {
                let { tag: i = "div", children: a, className: r = "", swiper: l, zoom: n, virtualIndex: o, ...d } = void 0 === e ? {} : e
                    , u = (0,
                        s.useRef)(null)
                    , [c, h] = (0,
                        s.useState)("swiper-slide");
                function f(e, t, i) {
                    t === u.current && h(i)
                }
                m(() => {
                    if (t && (t.current = u.current),
                        u.current && l) {
                        if (l.destroyed) {
                            "swiper-slide" !== c && h("swiper-slide");
                            return
                        }
                        return l.on("_slideClass", f),
                            () => {
                                l && l.off("_slideClass", f)
                            }
                    }
                }
                ),
                    m(() => {
                        l && u.current && !l.destroyed && h(l.getSlideClasses(u.current))
                    }
                        , [l]);
                let v = {
                    isActive: c.indexOf("swiper-slide-active") >= 0 || c.indexOf("swiper-slide-duplicate-active") >= 0,
                    isVisible: c.indexOf("swiper-slide-visible") >= 0,
                    isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
                    isPrev: c.indexOf("swiper-slide-prev") >= 0 || c.indexOf("swiper-slide-duplicate-prev") >= 0,
                    isNext: c.indexOf("swiper-slide-next") >= 0 || c.indexOf("swiper-slide-duplicate-next") >= 0
                }
                    , b = () => "function" == typeof a ? a(v) : a;
                return s.createElement(i, y({
                    ref: u,
                    className: p(`${c}${r ? ` ${r}` : ""}`),
                    "data-swiper-slide-index": o
                }, d), s.createElement(g.Provider, {
                    value: v
                }, n ? s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, b()) : b()))
            });
        C.displayName = "SwiperSlide"
    },
    8197: function (e, t, i) {
        "use strict";
        let s, a, r;
        function l(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }
        function n(e = {}, t = {}) {
            Object.keys(t).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i])
            }
            )
        }
        i.d(t, {
            pt: function () {
                return Y
            },
            gI: function () {
                return ee
            },
            xW: function () {
                return Q
            },
            rj: function () {
                return Z
            },
            Gk: function () {
                return R
            },
            W_: function () {
                return q
            },
            tl: function () {
                return X
            },
            eZ: function () {
                return H
            },
            ZP: function () {
                return F
            }
        });
        let o = {
            body: {},
            addEventListener() { },
            removeEventListener() { },
            activeElement: {
                blur() { },
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() { }
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() { },
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function d() {
            let e = "undefined" != typeof document ? document : {};
            return n(e, o),
                e
        }
        let p = {
            document: o,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() { },
                pushState() { },
                go() { },
                back() { }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() { },
            removeEventListener() { },
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() { },
            Date() { },
            screen: {},
            setTimeout() { },
            clearTimeout() { },
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
                null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function u() {
            let e = "undefined" != typeof window ? window : {};
            return n(e, p),
                e
        }
        class c extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []),
                    function (e) {
                        let t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
            }
        }
        function h(e = []) {
            let t = [];
            return e.forEach(e => {
                Array.isArray(e) ? t.push(...h(e)) : t.push(e)
            }
            ),
                t
        }
        function f(e, t) {
            return Array.prototype.filter.call(e, t)
        }
        function m(e, t) {
            let i = u()
                , s = d()
                , a = [];
            if (!t && e instanceof c)
                return e;
            if (!e)
                return new c(a);
            if ("string" == typeof e) {
                let r = e.trim();
                if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                    let l = "div";
                    0 === r.indexOf("<li") && (l = "ul"),
                        0 === r.indexOf("<tr") && (l = "tbody"),
                        (0 === r.indexOf("<td") || 0 === r.indexOf("<th")) && (l = "tr"),
                        0 === r.indexOf("<tbody") && (l = "table"),
                        0 === r.indexOf("<option") && (l = "select");
                    let n = s.createElement(l);
                    n.innerHTML = r;
                    for (let o = 0; o < n.childNodes.length; o += 1)
                        a.push(n.childNodes[o])
                } else
                    a = function (e, t) {
                        if ("string" != typeof e)
                            return [e];
                        let i = []
                            , s = t.querySelectorAll(e);
                        for (let a = 0; a < s.length; a += 1)
                            i.push(s[a]);
                        return i
                    }(e.trim(), t || s)
            } else if (e.nodeType || e === i || e === s)
                a.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof c)
                    return e;
                a = e
            }
            return new c(function (e) {
                let t = [];
                for (let i = 0; i < e.length; i += 1)
                    -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }(a))
        }
        m.fn = c.prototype;
        let g = "resize scroll".split(" ");
        function v(e) {
            return function (...t) {
                if (void 0 === t[0]) {
                    for (let i = 0; i < this.length; i += 1)
                        0 > g.indexOf(e) && (e in this[i] ? this[i][e]() : m(this[i]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }
        v("click"),
            v("blur"),
            v("focus"),
            v("focusin"),
            v("focusout"),
            v("keyup"),
            v("keydown"),
            v("keypress"),
            v("submit"),
            v("change"),
            v("mousedown"),
            v("mousemove"),
            v("mouseup"),
            v("mouseenter"),
            v("mouseleave"),
            v("mouseout"),
            v("mouseover"),
            v("touchstart"),
            v("touchend"),
            v("touchmove"),
            v("resize"),
            v("scroll");
        let b = {
            addClass: function (...e) {
                let t = h(e.map(e => e.split(" ")));
                return this.forEach(e => {
                    e.classList.add(...t)
                }
                ),
                    this
            },
            removeClass: function (...e) {
                let t = h(e.map(e => e.split(" ")));
                return this.forEach(e => {
                    e.classList.remove(...t)
                }
                ),
                    this
            },
            hasClass: function (...e) {
                let t = h(e.map(e => e.split(" ")));
                return f(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
            },
            toggleClass: function (...e) {
                let t = h(e.map(e => e.split(" ")));
                this.forEach(e => {
                    t.forEach(t => {
                        e.classList.toggle(t)
                    }
                    )
                }
                )
            },
            attr: function (e, t) {
                if (1 == arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 == arguments.length)
                        this[i].setAttribute(e, t);
                    else
                        for (let s in e)
                            this[i][s] = e[s],
                                this[i].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            transform: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transform = e;
                return this
            },
            transition: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function (...e) {
                let t, [i, s, a, r] = e;
                function l(e) {
                    let t = e.target;
                    if (!t)
                        return;
                    let i = e.target.dom7EventData || [];
                    if (0 > i.indexOf(e) && i.unshift(e),
                        m(t).is(s))
                        a.apply(t, i);
                    else {
                        let r = m(t).parents();
                        for (let l = 0; l < r.length; l += 1)
                            m(r[l]).is(s) && a.apply(r[l], i)
                    }
                }
                function n(e) {
                    let t = e && e.target && e.target.dom7EventData || [];
                    0 > t.indexOf(e) && t.unshift(e),
                        a.apply(this, t)
                }
                "function" == typeof e[1] && ([i, a, r] = e,
                    s = void 0),
                    r || (r = !1);
                let o = i.split(" ");
                for (let d = 0; d < this.length; d += 1) {
                    let p = this[d];
                    if (s)
                        for (t = 0; t < o.length; t += 1) {
                            let u = o[t];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                                p.dom7LiveListeners[u] || (p.dom7LiveListeners[u] = []),
                                p.dom7LiveListeners[u].push({
                                    listener: a,
                                    proxyListener: l
                                }),
                                p.addEventListener(u, l, r)
                        }
                    else
                        for (t = 0; t < o.length; t += 1) {
                            let c = o[t];
                            p.dom7Listeners || (p.dom7Listeners = {}),
                                p.dom7Listeners[c] || (p.dom7Listeners[c] = []),
                                p.dom7Listeners[c].push({
                                    listener: a,
                                    proxyListener: n
                                }),
                                p.addEventListener(c, n, r)
                        }
                }
                return this
            },
            off: function (...e) {
                let [t, i, s, a] = e;
                "function" == typeof e[1] && ([t, s, a] = e,
                    i = void 0),
                    a || (a = !1);
                let r = t.split(" ");
                for (let l = 0; l < r.length; l += 1) {
                    let n = r[l];
                    for (let o = 0; o < this.length; o += 1) {
                        let d;
                        let p = this[o];
                        if (!i && p.dom7Listeners ? d = p.dom7Listeners[n] : i && p.dom7LiveListeners && (d = p.dom7LiveListeners[n]),
                            d && d.length)
                            for (let u = d.length - 1; u >= 0; u -= 1) {
                                let c = d[u];
                                s && c.listener === s ? (p.removeEventListener(n, c.proxyListener, a),
                                    d.splice(u, 1)) : s && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === s ? (p.removeEventListener(n, c.proxyListener, a),
                                        d.splice(u, 1)) : s || (p.removeEventListener(n, c.proxyListener, a),
                                            d.splice(u, 1))
                            }
                    }
                }
                return this
            },
            trigger: function (...e) {
                let t = u()
                    , i = e[0].split(" ")
                    , s = e[1];
                for (let a = 0; a < i.length; a += 1) {
                    let r = i[a];
                    for (let l = 0; l < this.length; l += 1) {
                        let n = this[l];
                        if (t.CustomEvent) {
                            let o = new t.CustomEvent(r, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            });
                            n.dom7EventData = e.filter((e, t) => t > 0),
                                n.dispatchEvent(o),
                                n.dom7EventData = [],
                                delete n.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function (e) {
                let t = this;
                return e && t.on("transitionend", function i(s) {
                    s.target === this && (e.call(this, s),
                        t.off("transitionend", i))
                }),
                    this
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function () {
                let e = u();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function () {
                if (this.length > 0) {
                    let e = u()
                        , t = d()
                        , i = this[0]
                        , s = i.getBoundingClientRect()
                        , a = t.body
                        , r = i.clientTop || a.clientTop || 0
                        , l = i.clientLeft || a.clientLeft || 0
                        , n = i === e ? e.scrollY : i.scrollTop
                        , o = i === e ? e.scrollX : i.scrollLeft;
                    return {
                        top: s.top + n - r,
                        left: s.left + o - l
                    }
                }
                return null
            },
            css: function (e, t) {
                let i;
                let s = u();
                if (1 == arguments.length) {
                    if ("string" == typeof e) {
                        if (this[0])
                            return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    } else {
                        for (i = 0; i < this.length; i += 1)
                            for (let a in e)
                                this[i].style[a] = e[a];
                        return this
                    }
                }
                if (2 == arguments.length && "string" == typeof e)
                    for (i = 0; i < this.length; i += 1)
                        this[i].style[e] = t;
                return this
            },
            each: function (e) {
                return e && this.forEach((t, i) => {
                    e.apply(t, [t, i])
                }
                ),
                    this
            },
            html: function (e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            },
            text: function (e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            },
            is: function (e) {
                let t, i;
                let s = u()
                    , a = d()
                    , r = this[0];
                if (!r || void 0 === e)
                    return !1;
                if ("string" == typeof e) {
                    if (r.matches)
                        return r.matches(e);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(e);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(e);
                    for (i = 0,
                        t = m(e); i < t.length; i += 1)
                        if (t[i] === r)
                            return !0;
                    return !1
                }
                if (e === a)
                    return r === a;
                if (e === s)
                    return r === s;
                if (e.nodeType || e instanceof c) {
                    for (i = 0,
                        t = e.nodeType ? [e] : e; i < t.length; i += 1)
                        if (t[i] === r)
                            return !0
                }
                return !1
            },
            index: function () {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);)
                        1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function (e) {
                if (void 0 === e)
                    return this;
                let t = this.length;
                if (e > t - 1)
                    return m([]);
                if (e < 0) {
                    let i = t + e;
                    return i < 0 ? m([]) : m([this[i]])
                }
                return m([this[e]])
            },
            append: function (...e) {
                let t;
                let i = d();
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let a = 0; a < this.length; a += 1)
                        if ("string" == typeof t) {
                            let r = i.createElement("div");
                            for (r.innerHTML = t; r.firstChild;)
                                this[a].appendChild(r.firstChild)
                        } else if (t instanceof c)
                            for (let l = 0; l < t.length; l += 1)
                                this[a].appendChild(t[l]);
                        else
                            this[a].appendChild(t)
                }
                return this
            },
            prepend: function (e) {
                let t, i;
                let s = d();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        let a = s.createElement("div");
                        for (a.innerHTML = e,
                            i = a.childNodes.length - 1; i >= 0; i -= 1)
                            this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
                    } else if (e instanceof c)
                        for (i = 0; i < e.length; i += 1)
                            this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function (e) {
                if (this.length > 0) {
                    if (e)
                        return this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]);
                    if (this[0].nextElementSibling)
                        return m([this[0].nextElementSibling])
                }
                return m([])
            },
            nextAll: function (e) {
                let t = []
                    , i = this[0];
                if (!i)
                    return m([]);
                for (; i.nextElementSibling;) {
                    let s = i.nextElementSibling;
                    e ? m(s).is(e) && t.push(s) : t.push(s),
                        i = s
                }
                return m(t)
            },
            prev: function (e) {
                if (this.length > 0) {
                    let t = this[0];
                    if (e)
                        return t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]);
                    if (t.previousElementSibling)
                        return m([t.previousElementSibling])
                }
                return m([])
            },
            prevAll: function (e) {
                let t = []
                    , i = this[0];
                if (!i)
                    return m([]);
                for (; i.previousElementSibling;) {
                    let s = i.previousElementSibling;
                    e ? m(s).is(e) && t.push(s) : t.push(s),
                        i = s
                }
                return m(t)
            },
            parent: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return m(t)
            },
            parents: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].parentNode;
                    for (; s;)
                        e ? m(s).is(e) && t.push(s) : t.push(s),
                            s = s.parentNode
                }
                return m(t)
            },
            closest: function (e) {
                let t = this;
                return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                    t)
            },
            find: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].querySelectorAll(e);
                    for (let a = 0; a < s.length; a += 1)
                        t.push(s[a])
                }
                return m(t)
            },
            children: function (e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].children;
                    for (let a = 0; a < s.length; a += 1)
                        (!e || m(s[a]).is(e)) && t.push(s[a])
                }
                return m(t)
            },
            filter: function (e) {
                let t = f(this, e);
                return m(t)
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        function w(e, t = 0) {
            return setTimeout(e, t)
        }
        function y() {
            return Date.now()
        }
        function C(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function S(...e) {
            let t = Object(e[0])
                , i = ["__proto__", "constructor", "prototype"];
            for (let s = 1; s < e.length; s += 1) {
                let a = e[s];
                if (null != a && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(a instanceof HTMLElement) : !a || 1 !== a.nodeType && 11 !== a.nodeType)) {
                    let r = Object.keys(Object(a)).filter(e => 0 > i.indexOf(e));
                    for (let l = 0, n = r.length; l < n; l += 1) {
                        let o = r[l]
                            , d = Object.getOwnPropertyDescriptor(a, o);
                        void 0 !== d && d.enumerable && (C(t[o]) && C(a[o]) ? a[o].__swiper__ ? t[o] = a[o] : S(t[o], a[o]) : !C(t[o]) && C(a[o]) ? (t[o] = {},
                            a[o].__swiper__ ? t[o] = a[o] : S(t[o], a[o])) : t[o] = a[o])
                    }
                }
            }
            return t
        }
        function T(e, t, i) {
            e.style.setProperty(t, i)
        }
        function E({ swiper: e, targetPosition: t, side: i }) {
            let s;
            let a = u()
                , r = -e.translate
                , l = null
                , n = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none",
                a.cancelAnimationFrame(e.cssModeFrameID);
            let o = t > r ? "next" : "prev"
                , d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t
                , p = () => {
                    s = new Date().getTime(),
                        null === l && (l = s);
                    let o = Math.max(Math.min((s - l) / n, 1), 0)
                        , u = r + (.5 - Math.cos(o * Math.PI) / 2) * (t - r);
                    if (d(u, t) && (u = t),
                        e.wrapperEl.scrollTo({
                            [i]: u
                        }),
                        d(u, t)) {
                        e.wrapperEl.style.overflow = "hidden",
                            e.wrapperEl.style.scrollSnapType = "",
                            setTimeout(() => {
                                e.wrapperEl.style.overflow = "",
                                    e.wrapperEl.scrollTo({
                                        [i]: u
                                    })
                            }
                            ),
                            a.cancelAnimationFrame(e.cssModeFrameID);
                        return
                    }
                    e.cssModeFrameID = a.requestAnimationFrame(p)
                }
                ;
            p()
        }
        function x() {
            return s || (s = function () {
                let e = u()
                    , t = d();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function () {
                        let t = !1;
                        try {
                            let i = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, i)
                        } catch (s) { }
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()),
                s
        }
        function M({ swiper: e, runCallbacks: t, direction: i, step: s }) {
            let { activeIndex: a, previousIndex: r } = e
                , l = i;
            if (l || (l = a > r ? "next" : a < r ? "prev" : "reset"),
                e.emit(`transition${s}`),
                t && a !== r) {
                if ("reset" === l) {
                    e.emit(`slideResetTransition${s}`);
                    return
                }
                e.emit(`slideChangeTransition${s}`),
                    "next" === l ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
            }
        }
        function P(e) {
            let t = this
                , i = d()
                , s = u()
                , a = t.touchEventsData
                , { params: r, touches: l, enabled: n } = t;
            if (!n || t.animating && r.preventInteractionOnTransition)
                return;
            !t.animating && r.cssMode && r.loop && t.loopFix();
            let o = e;
            o.originalEvent && (o = o.originalEvent);
            let p = m(o.target);
            if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length || (a.isTouchEvent = "touchstart" === o.type,
                !a.isTouchEvent && "which" in o && 3 === o.which || !a.isTouchEvent && "button" in o && o.button > 0 || a.isTouched && a.isMoved))
                return;
            let c = !!r.noSwipingClass && "" !== r.noSwipingClass
                , h = e.composedPath ? e.composedPath() : e.path;
            c && o.target && o.target.shadowRoot && h && (p = m(h[0]));
            let f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
                , g = !!(o.target && o.target.shadowRoot);
            if (r.noSwiping && (g ? function (e, t = this) {
                return function t(i) {
                    if (!i || i === d() || i === u())
                        return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(f, p[0]) : p.closest(f)[0])) {
                t.allowClick = !0;
                return
            }
            if (r.swipeHandler && !p.closest(r.swipeHandler)[0])
                return;
            l.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                l.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
            let v = l.currentX
                , b = l.currentY
                , w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
                , C = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
            if (w && (v <= C || v >= s.innerWidth - C)) {
                if ("prevent" !== w)
                    return;
                e.preventDefault()
            }
            if (Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
                l.startX = v,
                l.startY = b,
                a.touchStartTime = y(),
                t.allowClick = !0,
                t.updateSize(),
                t.swipeDirection = void 0,
                r.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== o.type) {
                let S = !0;
                p.is(a.focusableElements) && (S = !1,
                    "SELECT" === p[0].nodeName && (a.isTouched = !1)),
                    i.activeElement && m(i.activeElement).is(a.focusableElements) && i.activeElement !== p[0] && i.activeElement.blur();
                let T = S && t.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || T) && !p[0].isContentEditable && o.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(),
                t.emit("touchStart", o)
        }
        function $(e) {
            let t = d()
                , i = this
                , s = i.touchEventsData
                , { params: a, touches: r, rtlTranslate: l, enabled: n } = i;
            if (!n)
                return;
            let o = e;
            if (o.originalEvent && (o = o.originalEvent),
                !s.isTouched) {
                s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
                return
            }
            if (s.isTouchEvent && "touchmove" !== o.type)
                return;
            let p = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0])
                , u = "touchmove" === o.type ? p.pageX : o.pageX
                , c = "touchmove" === o.type ? p.pageY : o.pageY;
            if (o.preventedByNestedSwiper) {
                r.startX = u,
                    r.startY = c;
                return
            }
            if (!i.allowTouchMove) {
                m(o.target).is(s.focusableElements) || (i.allowClick = !1),
                    s.isTouched && (Object.assign(r, {
                        startX: u,
                        startY: c,
                        currentX: u,
                        currentY: c
                    }),
                        s.touchStartTime = y());
                return
            }
            if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
                if (i.isVertical()) {
                    if (c < r.startY && i.translate <= i.maxTranslate() || c > r.startY && i.translate >= i.minTranslate()) {
                        s.isTouched = !1,
                            s.isMoved = !1;
                        return
                    }
                } else if (u < r.startX && i.translate <= i.maxTranslate() || u > r.startX && i.translate >= i.minTranslate())
                    return
            }
            if (s.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(s.focusableElements)) {
                s.isMoved = !0,
                    i.allowClick = !1;
                return
            }
            if (s.allowTouchCallbacks && i.emit("touchMove", o),
                o.targetTouches && o.targetTouches.length > 1)
                return;
            r.currentX = u,
                r.currentY = c;
            let h = r.currentX - r.startX
                , f = r.currentY - r.startY;
            if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold)
                return;
            if (void 0 === s.isScrolling) {
                let g;
                i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (g = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
                    s.isScrolling = i.isHorizontal() ? g > a.touchAngle : 90 - g > a.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", o),
                void 0 === s.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
                s.isScrolling) {
                s.isTouched = !1;
                return
            }
            if (!s.startMoving)
                return;
            i.allowClick = !1,
                !a.cssMode && o.cancelable && o.preventDefault(),
                a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                s.isMoved || (a.loop && !a.cssMode && i.loopFix(),
                    s.startTranslate = i.getTranslate(),
                    i.setTransition(0),
                    i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    s.allowMomentumBounce = !1,
                    a.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0),
                    i.emit("sliderFirstMove", o)),
                i.emit("sliderMove", o),
                s.isMoved = !0;
            let v = i.isHorizontal() ? h : f;
            r.diff = v,
                v *= a.touchRatio,
                l && (v = -v),
                i.swipeDirection = v > 0 ? "prev" : "next",
                s.currentTranslate = v + s.startTranslate;
            let b = !0
                , w = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (w = 0),
                v > 0 && s.currentTranslate > i.minTranslate() ? (b = !1,
                    a.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** w)) : v < 0 && s.currentTranslate < i.maxTranslate() && (b = !1,
                        a.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** w)),
                b && (o.preventedByNestedSwiper = !0),
                !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate),
                a.threshold > 0) {
                if (Math.abs(v) > a.threshold || s.allowThresholdMove) {
                    if (!s.allowThresholdMove) {
                        s.allowThresholdMove = !0,
                            r.startX = r.currentX,
                            r.startY = r.currentY,
                            s.currentTranslate = s.startTranslate,
                            r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                        return
                    }
                } else {
                    s.currentTranslate = s.startTranslate;
                    return
                }
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(),
                i.updateSlidesClasses()),
                i.params.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
                i.updateProgress(s.currentTranslate),
                i.setTranslate(s.currentTranslate))
        }
        function k(e) {
            let t;
            let i = this
                , s = i.touchEventsData
                , { params: a, touches: r, rtlTranslate: l, slidesGrid: n, enabled: o } = i;
            if (!o)
                return;
            let d = e;
            if (d.originalEvent && (d = d.originalEvent),
                s.allowTouchCallbacks && i.emit("touchEnd", d),
                s.allowTouchCallbacks = !1,
                !s.isTouched) {
                s.isMoved && a.grabCursor && i.setGrabCursor(!1),
                    s.isMoved = !1,
                    s.startMoving = !1;
                return
            }
            a.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
            let p = y()
                , u = p - s.touchStartTime;
            if (i.allowClick) {
                let c = d.path || d.composedPath && d.composedPath();
                i.updateClickedSlide(c && c[0] || d.target),
                    i.emit("tap click", d),
                    u < 300 && p - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", d)
            }
            if (s.lastClickTime = y(),
                w(() => {
                    i.destroyed || (i.allowClick = !0)
                }
                ),
                !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) {
                s.isTouched = !1,
                    s.isMoved = !1,
                    s.startMoving = !1;
                return
            }
            if (s.isTouched = !1,
                s.isMoved = !1,
                s.startMoving = !1,
                t = a.followFinger ? l ? i.translate : -i.translate : -s.currentTranslate,
                a.cssMode)
                return;
            if (i.params.freeMode && a.freeMode.enabled) {
                i.freeMode.onTouchEnd({
                    currentPos: t
                });
                return
            }
            let h = 0
                , f = i.slidesSizesGrid[0];
            for (let m = 0; m < n.length; m += m < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                let g = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                void 0 !== n[m + g] ? t >= n[m] && t < n[m + g] && (h = m,
                    f = n[m + g] - n[m]) : t >= n[m] && (h = m,
                        f = n[n.length - 1] - n[n.length - 2])
            }
            let v = null
                , b = null;
            a.rewind && (i.isBeginning ? b = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
            let C = (t - n[h]) / f
                , S = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            if (u > a.longSwipesMs) {
                if (!a.longSwipes) {
                    i.slideTo(i.activeIndex);
                    return
                }
                "next" === i.swipeDirection && (C >= a.longSwipesRatio ? i.slideTo(a.rewind && i.isEnd ? v : h + S) : i.slideTo(h)),
                    "prev" === i.swipeDirection && (C > 1 - a.longSwipesRatio ? i.slideTo(h + S) : null !== b && C < 0 && Math.abs(C) > a.longSwipesRatio ? i.slideTo(b) : i.slideTo(h))
            } else {
                if (!a.shortSwipes) {
                    i.slideTo(i.activeIndex);
                    return
                }
                let T = i.navigation && (d.target === i.navigation.nextEl || d.target === i.navigation.prevEl);
                T ? d.target === i.navigation.nextEl ? i.slideTo(h + S) : i.slideTo(h) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : h + S),
                    "prev" === i.swipeDirection && i.slideTo(null !== b ? b : h))
            }
        }
        function O() {
            let e = this
                , { params: t, el: i } = e;
            if (i && 0 === i.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            let { allowSlideNext: s, allowSlidePrev: a, snapGrid: r } = e;
            e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                e.allowSlidePrev = a,
                e.allowSlideNext = s,
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
        function _(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
        }
        function L() {
            let e = this
                , { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
            if (!s)
                return;
            e.previousTranslate = e.translate,
                e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
                0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            let a = e.maxTranslate() - e.minTranslate();
            (0 === a ? 0 : (e.translate - e.minTranslate()) / a) !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1)
        }
        Object.keys(b).forEach(e => {
            Object.defineProperty(m.fn, e, {
                value: b[e],
                writable: !0
            })
        }
        );
        let z = !1;
        function A() { }
        let D = (e, t) => {
            let i = d()
                , { params: s, touchEvents: a, el: r, wrapperEl: l, device: n, support: o } = e
                , p = !!s.nested
                , u = "on" === t ? "addEventListener" : "removeEventListener";
            if (o.touch) {
                let c = "touchstart" === a.start && !!o.passiveListener && !!s.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
                r[u](a.start, e.onTouchStart, c),
                    r[u](a.move, e.onTouchMove, o.passiveListener ? {
                        passive: !1,
                        capture: p
                    } : p),
                    r[u](a.end, e.onTouchEnd, c),
                    a.cancel && r[u](a.cancel, e.onTouchEnd, c)
            } else
                r[u](a.start, e.onTouchStart, !1),
                    i[u](a.move, e.onTouchMove, p),
                    i[u](a.end, e.onTouchEnd, !1);
            (s.preventClicks || s.preventClicksPropagation) && r[u]("click", e.onClick, !0),
                s.cssMode && l[u]("scroll", e.onScroll),
                s.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e[t]("observerUpdate", O, !0)
        }
            , I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var N = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let B = {
            eventsEmitter: {
                on(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    let a = i ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                            s.eventsListeners[e][a](t)
                    }
                    ),
                        s
                },
                once(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    function a(...i) {
                        s.off(e, a),
                            a.__emitterProxy && delete a.__emitterProxy,
                            t.apply(s, i)
                    }
                    return a.__emitterProxy = t,
                        s.on(e, a, i)
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e),
                        this
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners)
                        return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1),
                        this
                },
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, a) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
                        }
                        )
                    }
                    ),
                        i
                },
                emit(...e) {
                    let t, i, s;
                    let a = this;
                    if (!a.eventsListeners || a.destroyed || !a.eventsListeners)
                        return a;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0],
                        i = e.slice(1, e.length),
                        s = a) : (t = e[0].events,
                            i = e[0].data,
                            s = e[0].context || a),
                        i.unshift(s);
                    let r = Array.isArray(t) ? t : t.split(" ");
                    return r.forEach(e => {
                        a.eventsAnyListeners && a.eventsAnyListeners.length && a.eventsAnyListeners.forEach(t => {
                            t.apply(s, [e, ...i])
                        }
                        ),
                            a.eventsListeners && a.eventsListeners[e] && a.eventsListeners[e].forEach(e => {
                                e.apply(s, i)
                            }
                            )
                    }
                    ),
                        a
                }
            },
            update: {
                updateSize: function () {
                    let e, t;
                    let i = this.$el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth,
                        t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight,
                        0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10),
                            t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10),
                            Number.isNaN(e) && (e = 0),
                            Number.isNaN(t) && (t = 0),
                            Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                },
                updateSlides: function () {
                    let e;
                    let t = this;
                    function i(e) {
                        return t.isHorizontal() ? e : ({
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        })[e]
                    }
                    function s(e, t) {
                        return parseFloat(e.getPropertyValue(i(t)) || 0)
                    }
                    let a = t.params
                        , { $wrapperEl: r, size: l, rtlTranslate: n, wrongRTL: o } = t
                        , d = t.virtual && a.virtual.enabled
                        , p = d ? t.virtual.slides.length : t.slides.length
                        , u = r.children(`.${t.params.slideClass}`)
                        , c = d ? t.virtual.slides.length : u.length
                        , h = []
                        , f = []
                        , m = []
                        , g = a.slidesOffsetBefore;
                    "function" == typeof g && (g = a.slidesOffsetBefore.call(t));
                    let v = a.slidesOffsetAfter;
                    "function" == typeof v && (v = a.slidesOffsetAfter.call(t));
                    let b = t.snapGrid.length
                        , w = t.slidesGrid.length
                        , y = a.spaceBetween
                        , C = -g
                        , S = 0
                        , E = 0;
                    if (void 0 === l)
                        return;
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * l),
                        t.virtualSize = -y,
                        n ? u.css({
                            marginLeft: "",
                            marginBottom: "",
                            marginTop: ""
                        }) : u.css({
                            marginRight: "",
                            marginBottom: "",
                            marginTop: ""
                        }),
                        a.centeredSlides && a.cssMode && (T(t.wrapperEl, "--swiper-centered-offset-before", ""),
                            T(t.wrapperEl, "--swiper-centered-offset-after", ""));
                    let x = a.grid && a.grid.rows > 1 && t.grid;
                    x && t.grid.initSlides(c);
                    let M = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
                    for (let P = 0; P < c; P += 1) {
                        e = 0;
                        let $ = u.eq(P);
                        if (x && t.grid.updateSlide(P, $, c, i),
                            "none" !== $.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                M && (u[P].style[i("width")] = "");
                                let k = getComputedStyle($[0])
                                    , O = $[0].style.transform
                                    , _ = $[0].style.webkitTransform;
                                if (O && ($[0].style.transform = "none"),
                                    _ && ($[0].style.webkitTransform = "none"),
                                    a.roundLengths)
                                    e = t.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                else {
                                    let L = s(k, "width")
                                        , z = s(k, "padding-left")
                                        , A = s(k, "padding-right")
                                        , D = s(k, "margin-left")
                                        , I = s(k, "margin-right")
                                        , N = k.getPropertyValue("box-sizing");
                                    if (N && "border-box" === N)
                                        e = L + D + I;
                                    else {
                                        let { clientWidth: B, offsetWidth: G } = $[0];
                                        e = L + z + A + D + I + (G - B)
                                    }
                                }
                                O && ($[0].style.transform = O),
                                    _ && ($[0].style.webkitTransform = _),
                                    a.roundLengths && (e = Math.floor(e))
                            } else
                                e = (l - (a.slidesPerView - 1) * y) / a.slidesPerView,
                                    a.roundLengths && (e = Math.floor(e)),
                                    u[P] && (u[P].style[i("width")] = `${e}px`);
                            u[P] && (u[P].swiperSlideSize = e),
                                m.push(e),
                                a.centeredSlides ? (C = C + e / 2 + S / 2 + y,
                                    0 === S && 0 !== P && (C = C - l / 2 - y),
                                    0 === P && (C = C - l / 2 - y),
                                    .001 > Math.abs(C) && (C = 0),
                                    a.roundLengths && (C = Math.floor(C)),
                                    E % a.slidesPerGroup == 0 && h.push(C),
                                    f.push(C)) : (a.roundLengths && (C = Math.floor(C)),
                                        (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && h.push(C),
                                        f.push(C),
                                        C = C + e + y),
                                t.virtualSize += e + y,
                                S = e,
                                E += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, l) + v,
                        n && o && ("slide" === a.effect || "coverflow" === a.effect) && r.css({
                            width: `${t.virtualSize + a.spaceBetween}px`
                        }),
                        a.setWrapperSize && r.css({
                            [i("width")]: `${t.virtualSize + a.spaceBetween}px`
                        }),
                        x && t.grid.updateWrapperSize(e, h, i),
                        !a.centeredSlides) {
                        let j = [];
                        for (let F = 0; F < h.length; F += 1) {
                            let H = h[F];
                            a.roundLengths && (H = Math.floor(H)),
                                h[F] <= t.virtualSize - l && j.push(H)
                        }
                        h = j,
                            Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - l)
                    }
                    if (0 === h.length && (h = [0]),
                        0 !== a.spaceBetween) {
                        let R = t.isHorizontal() && n ? "marginLeft" : i("marginRight");
                        u.filter((e, t) => !a.cssMode || t !== u.length - 1).css({
                            [R]: `${y}px`
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let V = 0;
                        m.forEach(e => {
                            V += e + (a.spaceBetween ? a.spaceBetween : 0)
                        }
                        ),
                            V -= a.spaceBetween;
                        let q = V - l;
                        h = h.map(e => e < 0 ? -g : e > q ? q + v : e)
                    }
                    if (a.centerInsufficientSlides) {
                        let W = 0;
                        if (m.forEach(e => {
                            W += e + (a.spaceBetween ? a.spaceBetween : 0)
                        }
                        ),
                            (W -= a.spaceBetween) < l) {
                            let X = (l - W) / 2;
                            h.forEach((e, t) => {
                                h[t] = e - X
                            }
                            ),
                                f.forEach((e, t) => {
                                    f[t] = e + X
                                }
                                )
                        }
                    }
                    if (Object.assign(t, {
                        slides: u,
                        snapGrid: h,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }),
                        a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        T(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`),
                            T(t.wrapperEl, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
                        let Y = -t.snapGrid[0]
                            , Z = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(e => e + Y),
                            t.slidesGrid = t.slidesGrid.map(e => e + Z)
                    }
                    if (c !== p && t.emit("slidesLengthChange"),
                        h.length !== b && (t.params.watchOverflow && t.checkOverflow(),
                            t.emit("snapGridLengthChange")),
                        f.length !== w && t.emit("slidesGridLengthChange"),
                        a.watchSlidesProgress && t.updateSlidesOffset(),
                        !d && !a.cssMode && ("slide" === a.effect || "fade" === a.effect)) {
                        let U = `${a.containerModifierClass}backface-hidden`
                            , K = t.$el.hasClass(U);
                        c <= a.maxBackfaceHiddenSlides ? K || t.$el.addClass(U) : K && t.$el.removeClass(U)
                    }
                },
                updateAutoHeight: function (e) {
                    let t;
                    let i = this
                        , s = []
                        , a = i.virtual && i.params.virtual.enabled
                        , r = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let l = e => a ? i.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides.eq(e)[0];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                        if (i.params.centeredSlides)
                            (i.visibleSlides || m([])).each(e => {
                                s.push(e)
                            }
                            );
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                let n = i.activeIndex + t;
                                if (n > i.slides.length && !a)
                                    break;
                                s.push(l(n))
                            }
                    } else
                        s.push(l(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            let o = s[t].offsetHeight;
                            r = o > r ? o : r
                        }
                    (r || 0 === r) && i.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function () {
                    let e = this.slides;
                    for (let t = 0; t < e.length; t += 1)
                        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function (e = this && this.translate || 0) {
                    let t = this
                        , i = t.params
                        , { slides: s, rtlTranslate: a, snapGrid: r } = t;
                    if (0 === s.length)
                        return;
                    void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                    let l = -e;
                    a && (l = e),
                        s.removeClass(i.slideVisibleClass),
                        t.visibleSlidesIndexes = [],
                        t.visibleSlides = [];
                    for (let n = 0; n < s.length; n += 1) {
                        let o = s[n]
                            , d = o.swiperSlideOffset;
                        i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                        let p = (l + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween)
                            , u = (l - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween)
                            , c = -(l - d)
                            , h = c + t.slidesSizesGrid[n]
                            , f = c >= 0 && c < t.size - 1 || h > 1 && h <= t.size || c <= 0 && h >= t.size;
                        f && (t.visibleSlides.push(o),
                            t.visibleSlidesIndexes.push(n),
                            s.eq(n).addClass(i.slideVisibleClass)),
                            o.progress = a ? -p : p,
                            o.originalProgress = a ? -u : u
                    }
                    t.visibleSlides = m(t.visibleSlides)
                },
                updateProgress: function (e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let i = this.params
                        , s = this.maxTranslate() - this.minTranslate()
                        , { progress: a, isBeginning: r, isEnd: l } = this
                        , n = r
                        , o = l;
                    0 === s ? (a = 0,
                        r = !0,
                        l = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0,
                            l = a >= 1),
                        Object.assign(this, {
                            progress: a,
                            isBeginning: r,
                            isEnd: l
                        }),
                        (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
                        r && !n && this.emit("reachBeginning toEdge"),
                        l && !o && this.emit("reachEnd toEdge"),
                        (n && !r || o && !l) && this.emit("fromEdge"),
                        this.emit("progress", a)
                },
                updateSlidesClasses: function () {
                    let e;
                    let { slides: t, params: i, $wrapperEl: s, activeIndex: a, realIndex: r } = this
                        , l = this.virtual && i.virtual.enabled;
                    t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`),
                        (e = l ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a)).addClass(i.slideActiveClass),
                        i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
                    let n = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === n.length && (n = t.eq(0)).addClass(i.slideNextClass);
                    let o = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass),
                        i.loop && (n.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass),
                            o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)),
                        this.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    let t;
                    let i = this
                        , s = i.rtlTranslate ? i.translate : -i.translate
                        , { slidesGrid: a, snapGrid: r, params: l, activeIndex: n, realIndex: o, snapIndex: d } = i
                        , p = e;
                    if (void 0 === p) {
                        for (let u = 0; u < a.length; u += 1)
                            void 0 !== a[u + 1] ? s >= a[u] && s < a[u + 1] - (a[u + 1] - a[u]) / 2 ? p = u : s >= a[u] && s < a[u + 1] && (p = u + 1) : s >= a[u] && (p = u);
                        l.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
                    }
                    if (r.indexOf(s) >= 0)
                        t = r.indexOf(s);
                    else {
                        let c = Math.min(l.slidesPerGroupSkip, p);
                        t = c + Math.floor((p - c) / l.slidesPerGroup)
                    }
                    if (t >= r.length && (t = r.length - 1),
                        p === n) {
                        t !== d && (i.snapIndex = t,
                            i.emit("snapIndexChange"));
                        return
                    }
                    let h = parseInt(i.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                    Object.assign(i, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: n,
                        activeIndex: p
                    }),
                        i.emit("activeIndexChange"),
                        i.emit("snapIndexChange"),
                        o !== h && i.emit("realIndexChange"),
                        (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                },
                updateClickedSlide: function (e) {
                    let t;
                    let i = this
                        , s = i.params
                        , a = m(e).closest(`.${s.slideClass}`)[0]
                        , r = !1;
                    if (a) {
                        for (let l = 0; l < i.slides.length; l += 1)
                            if (i.slides[l] === a) {
                                r = !0,
                                    t = l;
                                break
                            }
                    }
                    if (a && r)
                        i.clickedSlide = a,
                            i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(m(a).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t;
                    else {
                        i.clickedSlide = void 0,
                            i.clickedIndex = void 0;
                        return
                    }
                    s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                    let { params: t, rtlTranslate: i, translate: s, $wrapperEl: a } = this;
                    if (t.virtualTranslate)
                        return i ? -s : s;
                    if (t.cssMode)
                        return s;
                    let r = function (e, t = "x") {
                        let i, s, a;
                        let r = u()
                            , l = function (e) {
                                let t;
                                let i = u();
                                return i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                                    !t && e.currentStyle && (t = e.currentStyle),
                                    t || (t = e.style),
                                    t
                            }(e, null);
                        return r.WebKitCSSMatrix ? ((s = l.transform || l.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")),
                            a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                            "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                            "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                            s || 0
                    }(a[0], e);
                    return i && (r = -r),
                        r || 0
                },
                setTranslate: function (e, t) {
                    let i = this
                        , { rtlTranslate: s, params: a, $wrapperEl: r, wrapperEl: l, progress: n } = i
                        , o = 0
                        , d = 0;
                    i.isHorizontal() ? o = s ? -e : e : d = e,
                        a.roundLengths && (o = Math.floor(o),
                            d = Math.floor(d)),
                        a.cssMode ? l[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : a.virtualTranslate || r.transform(`translate3d(${o}px, ${d}px, 0px)`),
                        i.previousTranslate = i.translate,
                        i.translate = i.isHorizontal() ? o : d;
                    let p = i.maxTranslate() - i.minTranslate();
                    (0 === p ? 0 : (e - i.minTranslate()) / p) !== n && i.updateProgress(e),
                        i.emit("setTranslate", i.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e = 0, t = this.params.speed, i = !0, s = !0, a) {
                    let r;
                    let l = this
                        , { params: n, wrapperEl: o } = l;
                    if (l.animating && n.preventInteractionOnTransition)
                        return !1;
                    let d = l.minTranslate()
                        , p = l.maxTranslate();
                    if (r = s && e > d ? d : s && e < p ? p : e,
                        l.updateProgress(r),
                        n.cssMode) {
                        let u = l.isHorizontal();
                        if (0 === t)
                            o[u ? "scrollLeft" : "scrollTop"] = -r;
                        else {
                            if (!l.support.smoothScroll)
                                return E({
                                    swiper: l,
                                    targetPosition: -r,
                                    side: u ? "left" : "top"
                                }),
                                    !0;
                            o.scrollTo({
                                [u ? "left" : "top"]: -r,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (l.setTransition(0),
                        l.setTranslate(r),
                        i && (l.emit("beforeTransitionStart", t, a),
                            l.emit("transitionEnd"))) : (l.setTransition(t),
                                l.setTranslate(r),
                                i && (l.emit("beforeTransitionStart", t, a),
                                    l.emit("transitionStart")),
                                l.animating || (l.animating = !0,
                                    l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function (e) {
                                        l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd),
                                            l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd),
                                            l.onTranslateToWrapperTransitionEnd = null,
                                            delete l.onTranslateToWrapperTransitionEnd,
                                            i && l.emit("transitionEnd"))
                                    }
                                    ),
                                    l.$wrapperEl[0].addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd),
                                    l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd))),
                        !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e),
                        this.emit("setTransition", e, t)
                },
                transitionStart: function (e = !0, t) {
                    let { params: i } = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(),
                        M({
                            swiper: this,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                },
                transitionEnd: function (e = !0, t) {
                    let i = this
                        , { params: s } = i;
                    i.animating = !1,
                        s.cssMode || (i.setTransition(0),
                            M({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                }
            },
            slide: {
                slideTo: function (e = 0, t = this.params.speed, i = !0, s, a) {
                    let r;
                    if ("number" != typeof e && "string" != typeof e)
                        throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        let l = parseInt(e, 10)
                            , n = isFinite(l);
                        if (!n)
                            throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = l
                    }
                    let o = this
                        , d = e;
                    d < 0 && (d = 0);
                    let { params: p, snapGrid: u, slidesGrid: c, previousIndex: h, activeIndex: f, rtlTranslate: m, wrapperEl: g, enabled: v } = o;
                    if (o.animating && p.preventInteractionOnTransition || !v && !s && !a)
                        return !1;
                    let b = Math.min(o.params.slidesPerGroupSkip, d)
                        , w = b + Math.floor((d - b) / o.params.slidesPerGroup);
                    w >= u.length && (w = u.length - 1);
                    let y = -u[w];
                    if (p.normalizeSlideIndex)
                        for (let C = 0; C < c.length; C += 1) {
                            let S = -Math.floor(100 * y)
                                , T = Math.floor(100 * c[C])
                                , x = Math.floor(100 * c[C + 1]);
                            void 0 !== c[C + 1] ? S >= T && S < x - (x - T) / 2 ? d = C : S >= T && S < x && (d = C + 1) : S >= T && (d = C)
                        }
                    if (o.initialized && d !== f && (!o.allowSlideNext && y < o.translate && y < o.minTranslate() || !o.allowSlidePrev && y > o.translate && y > o.maxTranslate() && (f || 0) !== d))
                        return !1;
                    if (d !== (h || 0) && i && o.emit("beforeSlideChangeStart"),
                        o.updateProgress(y),
                        r = d > f ? "next" : d < f ? "prev" : "reset",
                        m && -y === o.translate || !m && y === o.translate)
                        return o.updateActiveIndex(d),
                            p.autoHeight && o.updateAutoHeight(),
                            o.updateSlidesClasses(),
                            "slide" !== p.effect && o.setTranslate(y),
                            "reset" !== r && (o.transitionStart(i, r),
                                o.transitionEnd(i, r)),
                            !1;
                    if (p.cssMode) {
                        let M = o.isHorizontal()
                            , P = m ? y : -y;
                        if (0 === t) {
                            let $ = o.virtual && o.params.virtual.enabled;
                            $ && (o.wrapperEl.style.scrollSnapType = "none",
                                o._immediateVirtual = !0),
                                g[M ? "scrollLeft" : "scrollTop"] = P,
                                $ && requestAnimationFrame(() => {
                                    o.wrapperEl.style.scrollSnapType = "",
                                        o._swiperImmediateVirtual = !1
                                }
                                )
                        } else {
                            if (!o.support.smoothScroll)
                                return E({
                                    swiper: o,
                                    targetPosition: P,
                                    side: M ? "left" : "top"
                                }),
                                    !0;
                            g.scrollTo({
                                [M ? "left" : "top"]: P,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return o.setTransition(t),
                        o.setTranslate(y),
                        o.updateActiveIndex(d),
                        o.updateSlidesClasses(),
                        o.emit("beforeTransitionStart", t, s),
                        o.transitionStart(i, r),
                        0 === t ? o.transitionEnd(i, r) : o.animating || (o.animating = !0,
                            o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (e) {
                                o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
                                    o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd),
                                    o.onSlideToWrapperTransitionEnd = null,
                                    delete o.onSlideToWrapperTransitionEnd,
                                    o.transitionEnd(i, r))
                            }
                            ),
                            o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
                            o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)),
                        !0
                },
                slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
                    if ("string" == typeof e) {
                        let a = parseInt(e, 10)
                            , r = isFinite(a);
                        if (!r)
                            throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = a
                    }
                    let l = e;
                    return this.params.loop && (l += this.loopedSlides),
                        this.slideTo(l, t, i, s)
                },
                slideNext: function (e = this.params.speed, t = !0, i) {
                    let s = this
                        , { animating: a, enabled: r, params: l } = s;
                    if (!r)
                        return s;
                    let n = l.slidesPerGroup;
                    "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    let o = s.activeIndex < l.slidesPerGroupSkip ? 1 : n;
                    if (l.loop) {
                        if (a && l.loopPreventsSlide)
                            return !1;
                        s.loopFix(),
                            s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    return l.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                },
                slidePrev: function (e = this.params.speed, t = !0, i) {
                    let s = this
                        , { params: a, animating: r, snapGrid: l, slidesGrid: n, rtlTranslate: o, enabled: d } = s;
                    if (!d)
                        return s;
                    if (a.loop) {
                        if (r && a.loopPreventsSlide)
                            return !1;
                        s.loopFix(),
                            s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    let p = o ? s.translate : -s.translate;
                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    let c = u(p)
                        , h = l.map(e => u(e))
                        , f = l[h.indexOf(c) - 1];
                    if (void 0 === f && a.cssMode) {
                        let m;
                        l.forEach((e, t) => {
                            c >= e && (m = t)
                        }
                        ),
                            void 0 !== m && (f = l[m > 0 ? m - 1 : m])
                    }
                    let g = 0;
                    if (void 0 !== f && ((g = n.indexOf(f)) < 0 && (g = s.activeIndex - 1),
                        "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))),
                        a.rewind && s.isBeginning) {
                        let v = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(v, e, t, i)
                    }
                    return s.slideTo(g, e, t, i)
                },
                slideReset: function (e = this.params.speed, t = !0, i) {
                    return this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function (e = this.params.speed, t = !0, i, s = .5) {
                    let a = this.activeIndex
                        , r = Math.min(this.params.slidesPerGroupSkip, a)
                        , l = r + Math.floor((a - r) / this.params.slidesPerGroup)
                        , n = this.rtlTranslate ? this.translate : -this.translate;
                    if (n >= this.snapGrid[l]) {
                        let o = this.snapGrid[l]
                            , d = this.snapGrid[l + 1];
                        n - o > (d - o) * s && (a += this.params.slidesPerGroup)
                    } else {
                        let p = this.snapGrid[l - 1]
                            , u = this.snapGrid[l];
                        n - p <= (u - p) * s && (a -= this.params.slidesPerGroup)
                    }
                    return a = Math.min(a = Math.max(a, 0), this.slidesGrid.length - 1),
                        this.slideTo(a, e, t, i)
                },
                slideToClickedSlide: function () {
                    let e;
                    let t = this
                        , { params: i, $wrapperEl: s } = t
                        , a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView
                        , r = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating)
                            return;
                        e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                            i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(),
                                r = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(),
                                w(() => {
                                    t.slideTo(r)
                                }
                                )) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(),
                                    r = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(),
                                    w(() => {
                                        t.slideTo(r)
                                    }
                                    )) : t.slideTo(r)
                    } else
                        t.slideTo(r)
                }
            },
            loop: {
                loopCreate: function () {
                    let e = this
                        , t = d()
                        , { params: i, $wrapperEl: s } = e
                        , a = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
                    a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                    let r = a.children(`.${i.slideClass}`);
                    if (i.loopFillGroupWithBlank) {
                        let l = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (l !== i.slidesPerGroup) {
                            for (let n = 0; n < l; n += 1) {
                                let o = m(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                a.append(o)
                            }
                            r = a.children(`.${i.slideClass}`)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
                        e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)),
                        e.loopedSlides += i.loopAdditionalSlides,
                        e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
                    let p = []
                        , u = [];
                    r.each((e, t) => {
                        let i = m(e);
                        i.attr("data-swiper-slide-index", t)
                    }
                    );
                    for (let c = 0; c < e.loopedSlides; c += 1) {
                        let h = c - Math.floor(c / r.length) * r.length;
                        u.push(r.eq(h)[0]),
                            p.unshift(r.eq(r.length - h - 1)[0])
                    }
                    for (let f = 0; f < u.length; f += 1)
                        a.append(m(u[f].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (let g = p.length - 1; g >= 0; g -= 1)
                        a.prepend(m(p[g].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function () {
                    let e;
                    let t = this;
                    t.emit("beforeLoopFix");
                    let { activeIndex: i, slides: s, loopedSlides: a, allowSlidePrev: r, allowSlideNext: l, snapGrid: n, rtlTranslate: o } = t;
                    t.allowSlidePrev = !0,
                        t.allowSlideNext = !0;
                    let d = -n[i]
                        , p = d - t.getTranslate();
                    if (i < a) {
                        e = s.length - 3 * a + i + a;
                        let u = t.slideTo(e, 0, !1, !0);
                        u && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
                    } else if (i >= s.length - a) {
                        e = -s.length + i + a + a;
                        let c = t.slideTo(e, 0, !1, !0);
                        c && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
                    }
                    t.allowSlidePrev = r,
                        t.allowSlideNext = l,
                        t.emit("loopFix")
                },
                loopDestroy: function () {
                    let { $wrapperEl: e, params: t, slides: i } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                        i.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)
                        return;
                    let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                    t.style.cursor = "move",
                        t.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function () {
                    let e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function () {
                    let e = this
                        , t = d()
                        , { params: i, support: s } = e;
                    e.onTouchStart = P.bind(e),
                        e.onTouchMove = $.bind(e),
                        e.onTouchEnd = k.bind(e),
                        i.cssMode && (e.onScroll = L.bind(e)),
                        e.onClick = _.bind(e),
                        s.touch && !z && (t.addEventListener("touchstart", A),
                            z = !0),
                        D(e, "on")
                },
                detachEvents: function () {
                    D(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    let e = this
                        , { activeIndex: t, initialized: i, loopedSlides: s = 0, params: a, $el: r } = e
                        , l = a.breakpoints;
                    if (!l || l && 0 === Object.keys(l).length)
                        return;
                    let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n)
                        return;
                    let o = n in l ? l[n] : void 0
                        , d = o || e.originalParams
                        , p = I(e, a)
                        , u = I(e, d)
                        , c = a.enabled;
                    p && !u ? (r.removeClass(`${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`),
                        e.emitContainerClasses()) : !p && u && (r.addClass(`${a.containerModifierClass}grid`),
                            (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === a.grid.fill) && r.addClass(`${a.containerModifierClass}grid-column`),
                            e.emitContainerClasses()),
                        ["navigation", "pagination", "scrollbar"].forEach(t => {
                            let i = a[t] && a[t].enabled
                                , s = d[t] && d[t].enabled;
                            i && !s && e[t].disable(),
                                !i && s && e[t].enable()
                        }
                        );
                    let h = d.direction && d.direction !== a.direction
                        , f = a.loop && (d.slidesPerView !== a.slidesPerView || h);
                    h && i && e.changeDirection(),
                        S(e.params, d);
                    let m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                        c && !m ? e.disable() : !c && m && e.enable(),
                        e.currentBreakpoint = n,
                        e.emit("_beforeBreakpoint", d),
                        f && i && (e.loopDestroy(),
                            e.loopCreate(),
                            e.updateSlides(),
                            e.slideTo(t - s + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", d)
                },
                getBreakpoint: function (e, t = "window", i) {
                    if (!e || "container" === t && !i)
                        return;
                    let s = !1
                        , a = u()
                        , r = "window" === t ? a.innerHeight : i.clientHeight
                        , l = Object.keys(e).map(e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                let t = parseFloat(e.substr(1));
                                return {
                                    value: r * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }
                        );
                    l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let n = 0; n < l.length; n += 1) {
                        let { point: o, value: d } = l[n];
                        "window" === t ? a.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= i.clientWidth && (s = o)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    let e = this
                        , { isLocked: t, params: i } = e
                        , { slidesOffsetBefore: s } = i;
                    if (s) {
                        let a = e.slides.length - 1
                            , r = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * s;
                        e.isLocked = e.size > r
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                        !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                        t && t !== e.isLocked && (e.isEnd = !1),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function () {
                    let { classNames: e, params: t, rtl: i, $el: s, device: a, support: r } = this
                        , l = function (e, t) {
                            let i = [];
                            return e.forEach(e => {
                                "object" == typeof e ? Object.keys(e).forEach(s => {
                                    e[s] && i.push(t + s)
                                }
                                ) : "string" == typeof e && i.push(t + e)
                            }
                            ),
                                i
                        }(["initialized", t.direction, {
                            "pointer-events": !r.touch
                        }, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: a.android
                            }, {
                                ios: a.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                    e.push(...l),
                        s.addClass([...e].join(" ")),
                        this.emitContainerClasses()
                },
                removeClasses: function () {
                    let { $el: e, classNames: t } = this;
                    e.removeClass(t.join(" ")),
                        this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function (e, t, i, s, a, r) {
                    let l;
                    let n = u();
                    function o() {
                        r && r()
                    }
                    let d = m(e).parent("picture")[0];
                    d || e.complete && a ? o() : t ? ((l = new n.Image).onload = o,
                        l.onerror = o,
                        s && (l.sizes = s),
                        i && (l.srcset = i),
                        t && (l.src = t)) : o()
                },
                preloadImages: function () {
                    let e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                            e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                                e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        let s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
            , G = {};
        class j {
            constructor(...e) {
                let t, i;
                if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e,
                    i || (i = {}),
                    i = S({}, i),
                    t && !i.el && (i.el = t),
                    i.el && m(i.el).length > 1) {
                    let s = [];
                    return m(i.el).each(e => {
                        let t = S({}, i, {
                            el: e
                        });
                        s.push(new j(t))
                    }
                    ),
                        s
                }
                let l = this;
                l.__swiper__ = !0,
                    l.support = x(),
                    l.device = function (e = {}) {
                        return a || (a = function ({ userAgent: e } = {}) {
                            let t = x()
                                , i = u()
                                , s = i.navigator.platform
                                , a = e || i.navigator.userAgent
                                , r = {
                                    ios: !1,
                                    android: !1
                                }
                                , l = i.screen.width
                                , n = i.screen.height
                                , o = a.match(/(Android);?[\s\/]+([\d.]+)?/)
                                , d = a.match(/(iPad).*OS\s([\d_]+)/)
                                , p = a.match(/(iPod)(.*OS\s([\d_]+))?/)
                                , c = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                                , h = "MacIntel" === s;
                            return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${n}`) >= 0 && ((d = a.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]),
                                h = !1),
                                o && "Win32" !== s && (r.os = "android",
                                    r.android = !0),
                                (d || c || p) && (r.os = "ios",
                                    r.ios = !0),
                                r
                        }(e)),
                            a
                    }({
                        userAgent: i.userAgent
                    }),
                    l.browser = (r || (r = function () {
                        let e = u();
                        return {
                            isSafari: function () {
                                let t = e.navigator.userAgent.toLowerCase();
                                return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()),
                        r),
                    l.eventsListeners = {},
                    l.eventsAnyListeners = [],
                    l.modules = [...l.__modules__],
                    i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
                let n = {};
                l.modules.forEach(e => {
                    var t;
                    e({
                        swiper: l,
                        extendParams: (t = i,
                            function (e = {}) {
                                let i = Object.keys(e)[0]
                                    , s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                    auto: !0
                                }),
                                    !(i in t && "enabled" in s))) {
                                    S(n, e);
                                    return
                                }
                                !0 === t[i] && (t[i] = {
                                    enabled: !0
                                }),
                                    "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0),
                                    t[i] || (t[i] = {
                                        enabled: !1
                                    }),
                                    S(n, e)
                            }
                        ),
                        on: l.on.bind(l),
                        once: l.once.bind(l),
                        off: l.off.bind(l),
                        emit: l.emit.bind(l)
                    })
                }
                );
                let o = S({}, N, n);
                return l.params = S({}, o, G, i),
                    l.originalParams = S({}, l.params),
                    l.passedParams = S({}, i),
                    l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                        l.on(e, l.params.on[e])
                    }
                    ),
                    l.params && l.params.onAny && l.onAny(l.params.onAny),
                    l.$ = m,
                    Object.assign(l, {
                        enabled: l.params.enabled,
                        el: t,
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (l.touchEventsTouch = {
                            start: "touchstart",
                            move: "touchmove",
                            end: "touchend",
                            cancel: "touchcancel"
                        },
                            l.touchEventsDesktop = {
                                start: "pointerdown",
                                move: "pointermove",
                                end: "pointerup"
                            },
                            l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: y(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }),
                    l.emit("_swiper"),
                    l.params.init && l.init(),
                    l
            }
            enable() {
                let e = this;
                e.enabled || (e.enabled = !0,
                    e.params.grabCursor && e.setGrabCursor(),
                    e.emit("enable"))
            }
            disable() {
                let e = this;
                e.enabled && (e.enabled = !1,
                    e.params.grabCursor && e.unsetGrabCursor(),
                    e.emit("disable"))
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate()
                    , s = this.maxTranslate()
                    , a = (s - i) * e + i;
                this.translateTo(a, void 0 === t ? 0 : t),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = [];
                e.slides.each(i => {
                    let s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }),
                        e.emit("_slideClass", i, s)
                }
                ),
                    e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                let { params: i, slides: s, slidesGrid: a, slidesSizesGrid: r, size: l, activeIndex: n } = this
                    , o = 1;
                if (i.centeredSlides) {
                    let d, p = s[n].swiperSlideSize;
                    for (let u = n + 1; u < s.length; u += 1)
                        s[u] && !d && (p += s[u].swiperSlideSize,
                            o += 1,
                            p > l && (d = !0));
                    for (let c = n - 1; c >= 0; c -= 1)
                        s[c] && !d && (p += s[c].swiperSlideSize,
                            o += 1,
                            p > l && (d = !0))
                } else if ("current" === e)
                    for (let h = n + 1; h < s.length; h += 1) {
                        let f = t ? a[h] + r[h] - a[n] < l : a[h] - a[n] < l;
                        f && (o += 1)
                    }
                else
                    for (let m = n - 1; m >= 0; m -= 1) {
                        let g = a[n] - a[m] < l;
                        g && (o += 1)
                    }
                return o
            }
            update() {
                let e = this;
                if (!e || e.destroyed)
                    return;
                let { snapGrid: t, params: i } = e;
                function s() {
                    let t = e.rtlTranslate ? -1 * e.translate : e.translate
                        , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }
                i.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode && e.params.freeMode.enabled ? (s(),
                        e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update")
            }
            changeDirection(e, t = !0) {
                let i = this
                    , s = i.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                    e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`),
                        i.emitContainerClasses(),
                        i.params.direction = e,
                        i.slides.each(t => {
                            "vertical" === e ? t.style.width = "" : t.style.height = ""
                        }
                        ),
                        i.emit("changeDirection"),
                        t && i.update()),
                    i
            }
            changeLanguageDirection(e) {
                let t = this;
                (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e,
                    t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
                    t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                        t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                            t.el.dir = "ltr"),
                    t.update())
            }
            mount(e) {
                let t = this;
                if (t.mounted)
                    return !0;
                let i = m(e || t.params.el);
                if (!(e = i[0]))
                    return !1;
                e.swiper = t;
                let s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
                    , a = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            let t = m(e.shadowRoot.querySelector(s()));
                            return t.children = e => i.children(e),
                                t
                        }
                        return i.children ? i.children(s()) : m(i).children(s())
                    }
                    )();
                if (0 === a.length && t.params.createElements) {
                    let r = d()
                        , l = r.createElement("div");
                    a = m(l),
                        l.className = t.params.wrapperClass,
                        i.append(l),
                        i.children(`.${t.params.slideClass}`).each(e => {
                            a.append(e)
                        }
                        )
                }
                return Object.assign(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: a,
                    wrapperEl: a[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === a.css("display")
                }),
                    !0
            }
            init(e) {
                let t = this;
                if (t.initialized)
                    return t;
                let i = t.mount(e);
                return !1 === i || (t.emit("beforeInit"),
                    t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                    t.params.loop && t.loopCreate(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.params.watchOverflow && t.checkOverflow(),
                    t.params.grabCursor && t.enabled && t.setGrabCursor(),
                    t.params.preloadImages && t.preloadImages(),
                    t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                    t.attachEvents(),
                    t.initialized = !0,
                    t.emit("init"),
                    t.emit("afterInit")),
                    t
            }
            destroy(e = !0, t = !0) {
                let i = this
                    , { params: s, $el: a, $wrapperEl: r, slides: l } = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                    i.initialized = !1,
                    i.detachEvents(),
                    s.loop && i.loopDestroy(),
                    t && (i.removeClasses(),
                        a.removeAttr("style"),
                        r.removeAttr("style"),
                        l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                    i.emit("destroy"),
                    Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }
                    ),
                    !1 !== e && (i.$el[0].swiper = null,
                        function (e) {
                            let t = e;
                            Object.keys(t).forEach(e => {
                                try {
                                    t[e] = null
                                } catch (i) { }
                                try {
                                    delete t[e]
                                } catch (s) { }
                            }
                            )
                        }(i)),
                    i.destroyed = !0),
                    null
            }
            static extendDefaults(e) {
                S(G, e)
            }
            static get extendedDefaults() {
                return G
            }
            static get defaults() {
                return N
            }
            static installModule(e) {
                j.prototype.__modules__ || (j.prototype.__modules__ = []);
                let t = j.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach(e => j.installModule(e)),
                    j) : (j.installModule(e),
                        j)
            }
        }
        Object.keys(B).forEach(e => {
            Object.keys(B[e]).forEach(t => {
                j.prototype[t] = B[e][t]
            }
            )
        }
        ),
            j.use([function ({ swiper: e, on: t, emit: i }) {
                let s = u()
                    , a = null
                    , r = null
                    , l = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"),
                            i("resize"))
                    }
                    , n = () => {
                        e && !e.destroyed && e.initialized && (a = new ResizeObserver(t => {
                            r = s.requestAnimationFrame(() => {
                                let { width: i, height: s } = e
                                    , a = i
                                    , r = s;
                                t.forEach(({ contentBoxSize: t, contentRect: i, target: s }) => {
                                    s && s !== e.el || (a = i ? i.width : (t[0] || t).inlineSize,
                                        r = i ? i.height : (t[0] || t).blockSize)
                                }
                                ),
                                    (a !== i || r !== s) && l()
                            }
                            )
                        }
                        )).observe(e.el)
                    }
                    , o = () => {
                        r && s.cancelAnimationFrame(r),
                            a && a.unobserve && e.el && (a.unobserve(e.el),
                                a = null)
                    }
                    , d = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    }
                    ;
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        n();
                        return
                    }
                    s.addEventListener("resize", l),
                        s.addEventListener("orientationchange", d)
                }
                ),
                    t("destroy", () => {
                        o(),
                            s.removeEventListener("resize", l),
                            s.removeEventListener("orientationchange", d)
                    }
                    )
            }
                , function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                    let a = []
                        , r = u()
                        , l = (e, t = {}) => {
                            let i = r.MutationObserver || r.WebkitMutationObserver
                                , l = new i(e => {
                                    if (1 === e.length) {
                                        s("observerUpdate", e[0]);
                                        return
                                    }
                                    let t = function () {
                                        s("observerUpdate", e[0])
                                    };
                                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                                }
                                );
                            l.observe(e, {
                                attributes: void 0 === t.attributes || t.attributes,
                                childList: void 0 === t.childList || t.childList,
                                characterData: void 0 === t.characterData || t.characterData
                            }),
                                a.push(l)
                        }
                        , n = () => {
                            if (e.params.observer) {
                                if (e.params.observeParents) {
                                    let t = e.$el.parents();
                                    for (let i = 0; i < t.length; i += 1)
                                        l(t[i])
                                }
                                l(e.$el[0], {
                                    childList: e.params.observeSlideChildren
                                }),
                                    l(e.$wrapperEl[0], {
                                        attributes: !1
                                    })
                            }
                        }
                        , o = () => {
                            a.forEach(e => {
                                e.disconnect()
                            }
                            ),
                                a.splice(0, a.length)
                        }
                        ;
                    t({
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    }),
                        i("init", n),
                        i("destroy", o)
                }
            ]);
        var F = j;
        function H({ swiper: e, extendParams: t, on: i, emit: s }) {
            let a;
            function r(t, i) {
                let s = e.params.virtual;
                if (s.cache && e.virtual.cache[i])
                    return e.virtual.cache[i];
                let a = s.renderSlide ? m(s.renderSlide.call(e, t, i)) : m(`<div class="${e.params.slideClass}" data-swiper-slide-index="${i}">${t}</div>`);
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", i),
                    s.cache && (e.virtual.cache[i] = a),
                    a
            }
            function l(t) {
                let i, a, l;
                let { slidesPerView: n, slidesPerGroup: o, centeredSlides: d } = e.params
                    , { addSlidesBefore: p, addSlidesAfter: u } = e.params.virtual
                    , { from: c, to: h, slides: f, slidesGrid: m, offset: g } = e.virtual;
                e.params.cssMode || e.updateActiveIndex();
                let v = e.activeIndex || 0;
                i = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
                    d ? (a = Math.floor(n / 2) + o + u,
                        l = Math.floor(n / 2) + o + p) : (a = n + (o - 1) + u,
                            l = o + p);
                let b = Math.max((v || 0) - l, 0)
                    , w = Math.min((v || 0) + a, f.length - 1)
                    , y = (e.slidesGrid[b] || 0) - (e.slidesGrid[0] || 0);
                function C() {
                    e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.lazy && e.params.lazy.enabled && e.lazy.load(),
                        s("virtualUpdate")
                }
                if (Object.assign(e.virtual, {
                    from: b,
                    to: w,
                    offset: y,
                    slidesGrid: e.slidesGrid
                }),
                    c === b && h === w && !t) {
                    e.slidesGrid !== m && y !== g && e.slides.css(i, `${y}px`),
                        e.updateProgress(),
                        s("virtualUpdate");
                    return
                }
                if (e.params.virtual.renderExternal) {
                    e.params.virtual.renderExternal.call(e, {
                        offset: y,
                        from: b,
                        to: w,
                        slides: function () {
                            let e = [];
                            for (let t = b; t <= w; t += 1)
                                e.push(f[t]);
                            return e
                        }()
                    }),
                        e.params.virtual.renderExternalUpdate ? C() : s("virtualUpdate");
                    return
                }
                let S = []
                    , T = [];
                if (t)
                    e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
                else
                    for (let E = c; E <= h; E += 1)
                        (E < b || E > w) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${E}"]`).remove();
                for (let x = 0; x < f.length; x += 1)
                    x >= b && x <= w && (void 0 === h || t ? T.push(x) : (x > h && T.push(x),
                        x < c && S.push(x)));
                T.forEach(t => {
                    e.$wrapperEl.append(r(f[t], t))
                }
                ),
                    S.sort((e, t) => t - e).forEach(t => {
                        e.$wrapperEl.prepend(r(f[t], t))
                    }
                    ),
                    e.$wrapperEl.children(".swiper-slide").css(i, `${y}px`),
                    C()
            }
            t({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }),
                e.virtual = {
                    cache: {},
                    from: void 0,
                    to: void 0,
                    slides: [],
                    offset: 0,
                    slidesGrid: []
                },
                i("beforeInit", () => {
                    e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides,
                        e.classNames.push(`${e.params.containerModifierClass}virtual`),
                        e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0,
                        e.params.initialSlide || l())
                }
                ),
                i("setTranslate", () => {
                    e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a),
                        a = setTimeout(() => {
                            l()
                        }
                            , 100)) : l())
                }
                ),
                i("init update resize", () => {
                    e.params.virtual.enabled && e.params.cssMode && T(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
                }
                ),
                Object.assign(e.virtual, {
                    appendSlide: function (t) {
                        if ("object" == typeof t && "length" in t)
                            for (let i = 0; i < t.length; i += 1)
                                t[i] && e.virtual.slides.push(t[i]);
                        else
                            e.virtual.slides.push(t);
                        l(!0)
                    },
                    prependSlide: function (t) {
                        let i = e.activeIndex
                            , s = i + 1
                            , a = 1;
                        if (Array.isArray(t)) {
                            for (let r = 0; r < t.length; r += 1)
                                t[r] && e.virtual.slides.unshift(t[r]);
                            s = i + t.length,
                                a = t.length
                        } else
                            e.virtual.slides.unshift(t);
                        if (e.params.virtual.cache) {
                            let n = e.virtual.cache
                                , o = {};
                            Object.keys(n).forEach(e => {
                                let t = n[e]
                                    , i = t.attr("data-swiper-slide-index");
                                i && t.attr("data-swiper-slide-index", parseInt(i, 10) + a),
                                    o[parseInt(e, 10) + a] = t
                            }
                            ),
                                e.virtual.cache = o
                        }
                        l(!0),
                            e.slideTo(s, 0)
                    },
                    removeSlide: function (t) {
                        if (null == t)
                            return;
                        let i = e.activeIndex;
                        if (Array.isArray(t))
                            for (let s = t.length - 1; s >= 0; s -= 1)
                                e.virtual.slides.splice(t[s], 1),
                                    e.params.virtual.cache && delete e.virtual.cache[t[s]],
                                    t[s] < i && (i -= 1),
                                    i = Math.max(i, 0);
                        else
                            e.virtual.slides.splice(t, 1),
                                e.params.virtual.cache && delete e.virtual.cache[t],
                                t < i && (i -= 1),
                                i = Math.max(i, 0);
                        l(!0),
                            e.slideTo(i, 0)
                    },
                    removeAllSlides: function () {
                        e.virtual.slides = [],
                            e.params.virtual.cache && (e.virtual.cache = {}),
                            l(!0),
                            e.slideTo(0, 0)
                    },
                    update: l
                })
        }
        function R({ swiper: e, extendParams: t, on: i, emit: s }) {
            let a, r;
            let l = u();
            t({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }),
                e.mousewheel = {
                    enabled: !1
                };
            let n = y()
                , o = [];
            function d() {
                e.enabled && (e.mouseEntered = !0)
            }
            function p() {
                e.enabled && (e.mouseEntered = !1)
            }
            function c(t) {
                return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && y() - n < e.params.mousewheel.thresholdTime) && (!!(t.delta >= 6 && y() - n < 60) || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(),
                    s("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(),
                        s("scroll", t.raw)),
                    n = new l.Date().getTime(),
                    !1))
            }
            function h(t) {
                var i;
                let l, n, d, p, u = t;
                if (!e.enabled)
                    return;
                let h = e.params.mousewheel;
                e.params.cssMode && u.preventDefault();
                let f = e.$el;
                if ("container" !== e.params.mousewheel.eventsTarget && (f = m(e.params.mousewheel.eventsTarget)),
                    !e.mouseEntered && !f[0].contains(u.target) && !h.releaseOnEdges)
                    return !0;
                u.originalEvent && (u = u.originalEvent);
                let g = 0
                    , v = e.rtlTranslate ? -1 : 1
                    , b = (l = 0,
                        n = 0,
                        d = 0,
                        p = 0,
                        "detail" in (i = u) && (n = i.detail),
                        "wheelDelta" in i && (n = -i.wheelDelta / 120),
                        "wheelDeltaY" in i && (n = -i.wheelDeltaY / 120),
                        "wheelDeltaX" in i && (l = -i.wheelDeltaX / 120),
                        "axis" in i && i.axis === i.HORIZONTAL_AXIS && (l = n,
                            n = 0),
                        d = 10 * l,
                        p = 10 * n,
                        "deltaY" in i && (p = i.deltaY),
                        "deltaX" in i && (d = i.deltaX),
                        i.shiftKey && !d && (d = p,
                            p = 0),
                        (d || p) && i.deltaMode && (1 === i.deltaMode ? (d *= 40,
                            p *= 40) : (d *= 800,
                                p *= 800)),
                        d && !l && (l = d < 1 ? -1 : 1),
                        p && !n && (n = p < 1 ? -1 : 1),
                    {
                        spinX: l,
                        spinY: n,
                        pixelX: d,
                        pixelY: p
                    });
                if (h.forceToAxis) {
                    if (e.isHorizontal()) {
                        if (!(Math.abs(b.pixelX) > Math.abs(b.pixelY)))
                            return !0;
                        g = -b.pixelX * v
                    } else {
                        if (!(Math.abs(b.pixelY) > Math.abs(b.pixelX)))
                            return !0;
                        g = -b.pixelY
                    }
                } else
                    g = Math.abs(b.pixelX) > Math.abs(b.pixelY) ? -b.pixelX * v : -b.pixelY;
                if (0 === g)
                    return !0;
                h.invert && (g = -g);
                let C = e.getTranslate() + g * h.sensitivity;
                if (C >= e.minTranslate() && (C = e.minTranslate()),
                    C <= e.maxTranslate() && (C = e.maxTranslate()),
                    (e.params.loop || C !== e.minTranslate() && C !== e.maxTranslate()) && e.params.nested && u.stopPropagation(),
                    e.params.freeMode && e.params.freeMode.enabled) {
                    let S = {
                        time: y(),
                        delta: Math.abs(g),
                        direction: Math.sign(g)
                    }
                        , T = r && S.time < r.time + 500 && S.delta <= r.delta && S.direction === r.direction;
                    if (!T) {
                        r = void 0,
                            e.params.loop && e.loopFix();
                        let E = e.getTranslate() + g * h.sensitivity
                            , x = e.isBeginning
                            , M = e.isEnd;
                        if (E >= e.minTranslate() && (E = e.minTranslate()),
                            E <= e.maxTranslate() && (E = e.maxTranslate()),
                            e.setTransition(0),
                            e.setTranslate(E),
                            e.updateProgress(),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses(),
                            (!x && e.isBeginning || !M && e.isEnd) && e.updateSlidesClasses(),
                            e.params.freeMode.sticky) {
                            clearTimeout(a),
                                a = void 0,
                                o.length >= 15 && o.shift();
                            let P = o.length ? o[o.length - 1] : void 0
                                , $ = o[0];
                            if (o.push(S),
                                P && (S.delta > P.delta || S.direction !== P.direction))
                                o.splice(0);
                            else if (o.length >= 15 && S.time - $.time < 500 && $.delta - S.delta >= 1 && S.delta <= 6) {
                                let k = g > 0 ? .8 : .2;
                                r = S,
                                    o.splice(0),
                                    a = w(() => {
                                        e.slideToClosest(e.params.speed, !0, void 0, k)
                                    }
                                        , 0)
                            }
                            a || (a = w(() => {
                                r = S,
                                    o.splice(0),
                                    e.slideToClosest(e.params.speed, !0, void 0, .5)
                            }
                                , 500))
                        }
                        if (T || s("scroll", u),
                            e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                            E === e.minTranslate() || E === e.maxTranslate())
                            return !0
                    }
                } else {
                    let O = {
                        time: y(),
                        delta: Math.abs(g),
                        direction: Math.sign(g),
                        raw: t
                    };
                    o.length >= 2 && o.shift();
                    let _ = o.length ? o[o.length - 1] : void 0;
                    if (o.push(O),
                        _ ? (O.direction !== _.direction || O.delta > _.delta || O.time > _.time + 150) && c(O) : c(O),
                        function (t) {
                            let i = e.params.mousewheel;
                            if (t.direction < 0) {
                                if (e.isEnd && !e.params.loop && i.releaseOnEdges)
                                    return !0
                            } else if (e.isBeginning && !e.params.loop && i.releaseOnEdges)
                                return !0;
                            return !1
                        }(O))
                        return !0
                }
                return u.preventDefault ? u.preventDefault() : u.returnValue = !1,
                    !1
            }
            function f(t) {
                let i = e.$el;
                "container" !== e.params.mousewheel.eventsTarget && (i = m(e.params.mousewheel.eventsTarget)),
                    i[t]("mouseenter", d),
                    i[t]("mouseleave", p),
                    i[t]("wheel", h)
            }
            function g() {
                return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", h),
                    !0) : !e.mousewheel.enabled && (f("on"),
                        e.mousewheel.enabled = !0,
                        !0)
            }
            function v() {
                return e.params.cssMode ? (e.wrapperEl.addEventListener(event, h),
                    !0) : !!e.mousewheel.enabled && (f("off"),
                        e.mousewheel.enabled = !1,
                        !0)
            }
            i("init", () => {
                !e.params.mousewheel.enabled && e.params.cssMode && v(),
                    e.params.mousewheel.enabled && g()
            }
            ),
                i("destroy", () => {
                    e.params.cssMode && g(),
                        e.mousewheel.enabled && v()
                }
                ),
                Object.assign(e.mousewheel, {
                    enable: g,
                    disable: v
                })
        }
        function V(e, t, i, s) {
            let a = d();
            return e.params.createElements && Object.keys(s).forEach(r => {
                if (!i[r] && !0 === i.auto) {
                    let l = e.$el.children(`.${s[r]}`)[0];
                    l || ((l = a.createElement("div")).className = s[r],
                        e.$el.append(l)),
                        i[r] = l,
                        t[r] = l
                }
            }
            ),
                i
        }
        function q({ swiper: e, extendParams: t, on: i, emit: s }) {
            function a(t) {
                let i;
                return t && (i = m(t),
                    e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))),
                    i
            }
            function r(t, i) {
                let s = e.params.navigation;
                t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass),
                    t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
                    e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
            }
            function l() {
                if (e.params.loop)
                    return;
                let { $nextEl: t, $prevEl: i } = e.navigation;
                r(i, e.isBeginning && !e.params.rewind),
                    r(t, e.isEnd && !e.params.rewind)
            }
            function n(t) {
                t.preventDefault(),
                    (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(),
                        s("navigationPrev"))
            }
            function o(t) {
                t.preventDefault(),
                    (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(),
                        s("navigationNext"))
            }
            function d() {
                let t = e.params.navigation;
                if (e.params.navigation = V(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }),
                    !(t.nextEl || t.prevEl))
                    return;
                let i = a(t.nextEl)
                    , s = a(t.prevEl);
                i && i.length > 0 && i.on("click", o),
                    s && s.length > 0 && s.on("click", n),
                    Object.assign(e.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: s,
                        prevEl: s && s[0]
                    }),
                    !e.enabled && (i && i.addClass(t.lockClass),
                        s && s.addClass(t.lockClass))
            }
            function p() {
                let { $nextEl: t, $prevEl: i } = e.navigation;
                t && t.length && (t.off("click", o),
                    t.removeClass(e.params.navigation.disabledClass)),
                    i && i.length && (i.off("click", n),
                        i.removeClass(e.params.navigation.disabledClass))
            }
            t({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }),
                e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                },
                i("init", () => {
                    !1 === e.params.navigation.enabled ? c() : (d(),
                        l())
                }
                ),
                i("toEdge fromEdge lock unlock", () => {
                    l()
                }
                ),
                i("destroy", () => {
                    p()
                }
                ),
                i("enable disable", () => {
                    let { $nextEl: t, $prevEl: i } = e.navigation;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
                        i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                }
                ),
                i("click", (t, i) => {
                    let { $nextEl: a, $prevEl: r } = e.navigation
                        , l = i.target;
                    if (e.params.navigation.hideOnClick && !m(l).is(r) && !m(l).is(a)) {
                        let n;
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l)))
                            return;
                        a ? n = a.hasClass(e.params.navigation.hiddenClass) : r && (n = r.hasClass(e.params.navigation.hiddenClass)),
                            !0 === n ? s("navigationShow") : s("navigationHide"),
                            a && a.toggleClass(e.params.navigation.hiddenClass),
                            r && r.toggleClass(e.params.navigation.hiddenClass)
                    }
                }
                );
            let u = () => {
                e.$el.removeClass(e.params.navigation.navigationDisabledClass),
                    d(),
                    l()
            }
                , c = () => {
                    e.$el.addClass(e.params.navigation.navigationDisabledClass),
                        p()
                }
                ;
            Object.assign(e.navigation, {
                enable: u,
                disable: c,
                update: l,
                init: d,
                destroy: p
            })
        }
        function W(e = "") {
            return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function X({ swiper: e, extendParams: t, on: i, emit: s }) {
            let a;
            let r = "swiper-pagination";
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${r}-bullet`,
                    bulletActiveClass: `${r}-bullet-active`,
                    modifierClass: `${r}-`,
                    currentClass: `${r}-current`,
                    totalClass: `${r}-total`,
                    hiddenClass: `${r}-hidden`,
                    progressbarFillClass: `${r}-progressbar-fill`,
                    progressbarOppositeClass: `${r}-progressbar-opposite`,
                    clickableClass: `${r}-clickable`,
                    lockClass: `${r}-lock`,
                    horizontalClass: `${r}-horizontal`,
                    verticalClass: `${r}-vertical`,
                    paginationDisabledClass: `${r}-disabled`
                }
            }),
                e.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
            let l = 0;
            function n() {
                return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
            }
            function o(t, i) {
                let { bulletActiveClass: s } = e.params.pagination;
                t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
            }
            function d() {
                let t;
                let i = e.rtl
                    , r = e.params.pagination;
                if (n())
                    return;
                let d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                    , p = e.pagination.$el
                    , u = e.params.loop ? Math.ceil((d - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((t = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > d - 1 - 2 * e.loopedSlides && (t -= d - 2 * e.loopedSlides),
                    t > u - 1 && (t -= u),
                    t < 0 && "bullets" !== e.params.paginationType && (t = u + t)) : t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                    "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    let c, h, f;
                    let g = e.pagination.bullets;
                    if (r.dynamicBullets && (a = g.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                        p.css(e.isHorizontal() ? "width" : "height", `${a * (r.dynamicMainBullets + 4)}px`),
                        r.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((l += t - (e.previousIndex - e.loopedSlides || 0)) > r.dynamicMainBullets - 1 ? l = r.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                        f = ((h = (c = Math.max(t - l, 0)) + (Math.min(g.length, r.dynamicMainBullets) - 1)) + c) / 2),
                        g.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${r.bulletActiveClass}${e}`).join(" ")),
                        p.length > 1)
                        g.each(e => {
                            let i = m(e)
                                , s = i.index();
                            s === t && i.addClass(r.bulletActiveClass),
                                r.dynamicBullets && (s >= c && s <= h && i.addClass(`${r.bulletActiveClass}-main`),
                                    s === c && o(i, "prev"),
                                    s === h && o(i, "next"))
                        }
                        );
                    else {
                        let v = g.eq(t)
                            , b = v.index();
                        if (v.addClass(r.bulletActiveClass),
                            r.dynamicBullets) {
                            let w = g.eq(c)
                                , y = g.eq(h);
                            for (let C = c; C <= h; C += 1)
                                g.eq(C).addClass(`${r.bulletActiveClass}-main`);
                            if (e.params.loop) {
                                if (b >= g.length) {
                                    for (let S = r.dynamicMainBullets; S >= 0; S -= 1)
                                        g.eq(g.length - S).addClass(`${r.bulletActiveClass}-main`);
                                    g.eq(g.length - r.dynamicMainBullets - 1).addClass(`${r.bulletActiveClass}-prev`)
                                } else
                                    o(w, "prev"),
                                        o(y, "next")
                            } else
                                o(w, "prev"),
                                    o(y, "next")
                        }
                    }
                    if (r.dynamicBullets) {
                        let T = Math.min(g.length, r.dynamicMainBullets + 4);
                        g.css(e.isHorizontal() ? i ? "right" : "left" : "top", `${(a * T - a) / 2 - f * a}px`)
                    }
                }
                if ("fraction" === r.type && (p.find(W(r.currentClass)).text(r.formatFractionCurrent(t + 1)),
                    p.find(W(r.totalClass)).text(r.formatFractionTotal(u))),
                    "progressbar" === r.type) {
                    let E;
                    E = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    let x = (t + 1) / u
                        , M = 1
                        , P = 1;
                    "horizontal" === E ? M = x : P = x,
                        p.find(W(r.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${M}) scaleY(${P})`).transition(e.params.speed)
                }
                "custom" === r.type && r.renderCustom ? (p.html(r.renderCustom(e, t + 1, u)),
                    s("paginationRender", p[0])) : s("paginationUpdate", p[0]),
                    e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](r.lockClass)
            }
            function p() {
                let t = e.params.pagination;
                if (n())
                    return;
                let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                    , a = e.pagination.$el
                    , r = "";
                if ("bullets" === t.type) {
                    let l = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && l > i && (l = i);
                    for (let o = 0; o < l; o += 1)
                        t.renderBullet ? r += t.renderBullet.call(e, o, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    a.html(r),
                        e.pagination.bullets = a.find(W(t.bulletClass))
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
                    a.html(r)),
                    "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
                        a.html(r)),
                    "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
            }
            function u() {
                e.params.pagination = V(e, e.originalParams.pagination, e.params.pagination, {
                    el: "swiper-pagination"
                });
                let t = e.params.pagination;
                if (!t.el)
                    return;
                let i = m(t.el);
                0 === i.length || (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)).length > 1 && (i = i.filter(t => m(t).parents(".swiper")[0] === e.el)),
                    "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                    i.addClass(t.modifierClass + t.type),
                    i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                    "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
                        l = 0,
                        t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                    "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                    t.clickable && i.on("click", W(t.bulletClass), function (t) {
                        t.preventDefault();
                        let i = m(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides),
                            e.slideTo(i)
                    }),
                    Object.assign(e.pagination, {
                        $el: i,
                        el: i[0]
                    }),
                    e.enabled || i.addClass(t.lockClass))
            }
            function c() {
                let t = e.params.pagination;
                if (n())
                    return;
                let i = e.pagination.$el;
                i.removeClass(t.hiddenClass),
                    i.removeClass(t.modifierClass + t.type),
                    i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                    e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
                    t.clickable && i.off("click", W(t.bulletClass))
            }
            i("init", () => {
                !1 === e.params.pagination.enabled ? f() : (u(),
                    p(),
                    d())
            }
            ),
                i("activeIndexChange", () => {
                    e.params.loop ? d() : void 0 === e.snapIndex && d()
                }
                ),
                i("snapIndexChange", () => {
                    e.params.loop || d()
                }
                ),
                i("slidesLengthChange", () => {
                    e.params.loop && (p(),
                        d())
                }
                ),
                i("snapGridLengthChange", () => {
                    e.params.loop || (p(),
                        d())
                }
                ),
                i("destroy", () => {
                    c()
                }
                ),
                i("enable disable", () => {
                    let { $el: t } = e.pagination;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                }
                ),
                i("lock unlock", () => {
                    d()
                }
                ),
                i("click", (t, i) => {
                    let a = i.target
                        , { $el: r } = e.pagination;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && r && r.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl))
                            return;
                        let l = r.hasClass(e.params.pagination.hiddenClass);
                        !0 === l ? s("paginationShow") : s("paginationHide"),
                            r.toggleClass(e.params.pagination.hiddenClass)
                    }
                }
                );
            let h = () => {
                e.$el.removeClass(e.params.pagination.paginationDisabledClass),
                    e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),
                    u(),
                    p(),
                    d()
            }
                , f = () => {
                    e.$el.addClass(e.params.pagination.paginationDisabledClass),
                        e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),
                        c()
                }
                ;
            Object.assign(e.pagination, {
                enable: h,
                disable: f,
                render: p,
                update: d,
                init: u,
                destroy: c
            })
        }
        function Y({ swiper: e, extendParams: t, on: i, emit: s }) {
            let a;
            function r() {
                if (!e.size) {
                    e.autoplay.running = !1,
                        e.autoplay.paused = !1;
                    return
                }
                let t = e.slides.eq(e.activeIndex)
                    , i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    clearTimeout(a),
                    a = w(() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                            t = e.slidePrev(e.params.speed, !0, !0),
                            s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? n() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                                s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0),
                                    s("autoplay")) : e.params.loop ? (e.loopFix(),
                                        t = e.slideNext(e.params.speed, !0, !0),
                                        s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? n() : (t = e.slideTo(0, e.params.speed, !0, !0),
                                            s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0),
                                                s("autoplay")),
                            e.params.cssMode && e.autoplay.running ? r() : !1 === t && r()
                    }
                        , i)
            }
            function l() {
                return void 0 === a && !e.autoplay.running && (e.autoplay.running = !0,
                    s("autoplayStart"),
                    r(),
                    !0)
            }
            function n() {
                return !!e.autoplay.running && void 0 !== a && (a && (clearTimeout(a),
                    a = void 0),
                    e.autoplay.running = !1,
                    s("autoplayStop"),
                    !0)
            }
            function o(t) {
                e.autoplay.running && (e.autoplay.paused || (a && clearTimeout(a),
                    e.autoplay.paused = !0,
                    0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].addEventListener(t, u)
                    }
                    ) : (e.autoplay.paused = !1,
                        r())))
            }
            function p() {
                let t = d();
                "hidden" === t.visibilityState && e.autoplay.running && o(),
                    "visible" === t.visibilityState && e.autoplay.paused && (r(),
                        e.autoplay.paused = !1)
            }
            function u(t) {
                e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(t => {
                    e.$wrapperEl[0].removeEventListener(t, u)
                }
                ),
                    e.autoplay.paused = !1,
                    e.autoplay.running ? r() : n())
            }
            function c() {
                e.params.autoplay.disableOnInteraction ? n() : (s("autoplayPause"),
                    o()),
                    ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, u)
                    }
                    )
            }
            function h() {
                e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1,
                    s("autoplayResume"),
                    r())
            }
            e.autoplay = {
                running: !1,
                paused: !1
            },
                t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }),
                i("init", () => {
                    if (e.params.autoplay.enabled) {
                        l();
                        let t = d();
                        t.addEventListener("visibilitychange", p),
                            e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", c),
                                e.$el.on("mouseleave", h))
                    }
                }
                ),
                i("beforeTransitionStart", (t, i, s) => {
                    e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(i) : n())
                }
                ),
                i("sliderFirstMove", () => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? n() : o())
                }
                ),
                i("touchEnd", () => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
                }
                ),
                i("destroy", () => {
                    e.$el.off("mouseenter", c),
                        e.$el.off("mouseleave", h),
                        e.autoplay.running && n();
                    let t = d();
                    t.removeEventListener("visibilitychange", p)
                }
                ),
                Object.assign(e.autoplay, {
                    pause: o,
                    run: r,
                    start: l,
                    stop: n
                })
        }
        function Z({ swiper: e, extendParams: t }) {
            let i, s, a;
            t({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            });
            let r = t => {
                let { slidesPerView: r } = e.params
                    , { rows: l, fill: n } = e.params.grid;
                s = i / l,
                    a = Math.floor(t / l),
                    i = Math.floor(t / l) === t / l ? t : Math.ceil(t / l) * l,
                    "auto" !== r && "row" === n && (i = Math.max(i, r * l))
            }
                , l = (t, r, l, n) => {
                    let o, d, p;
                    let { slidesPerGroup: u, spaceBetween: c } = e.params
                        , { rows: h, fill: f } = e.params.grid;
                    if ("row" === f && u > 1) {
                        let m = Math.floor(t / (u * h))
                            , g = t - h * u * m
                            , v = 0 === m ? u : Math.min(Math.ceil((l - m * h * u) / h), u);
                        p = Math.floor(g / v),
                            o = (d = g - p * v + m * u) + p * i / h,
                            r.css({
                                "-webkit-order": o,
                                order: o
                            })
                    } else
                        "column" === f ? (d = Math.floor(t / h),
                            p = t - d * h,
                            (d > a || d === a && p === h - 1) && (p += 1) >= h && (p = 0,
                                d += 1)) : (p = Math.floor(t / s),
                                    d = t - p * s);
                    r.css(n("margin-top"), 0 !== p ? c && `${c}px` : "")
                }
                , n = (t, s, a) => {
                    let { spaceBetween: r, centeredSlides: l, roundLengths: n } = e.params
                        , { rows: o } = e.params.grid;
                    if (e.virtualSize = (t + r) * i,
                        e.virtualSize = Math.ceil(e.virtualSize / o) - r,
                        e.$wrapperEl.css({
                            [a("width")]: `${e.virtualSize + r}px`
                        }),
                        l) {
                        s.splice(0, s.length);
                        let d = [];
                        for (let p = 0; p < s.length; p += 1) {
                            let u = s[p];
                            n && (u = Math.floor(u)),
                                s[p] < e.virtualSize + s[0] && d.push(u)
                        }
                        s.push(...d)
                    }
                }
                ;
            e.grid = {
                initSlides: r,
                updateSlide: l,
                updateWrapperSize: n
            }
        }
        function U(e) {
            let t;
            let { effect: i, swiper: s, on: a, setTranslate: r, setTransition: l, overwriteParams: n, perspective: o, recreateShadows: d, getEffectParams: p } = e;
            a("beforeInit", () => {
                if (s.params.effect !== i)
                    return;
                s.classNames.push(`${s.params.containerModifierClass}${i}`),
                    o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                let e = n ? n() : {};
                Object.assign(s.params, e),
                    Object.assign(s.originalParams, e)
            }
            ),
                a("setTranslate", () => {
                    s.params.effect === i && r()
                }
                ),
                a("setTransition", (e, t) => {
                    s.params.effect === i && l(t)
                }
                ),
                a("transitionEnd", () => {
                    s.params.effect === i && d && p && p().slideShadows && (s.slides.each(e => {
                        let t = s.$(e);
                        t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                    }
                    ),
                        d())
                }
                ),
                a("virtualUpdate", () => {
                    s.params.effect === i && (s.slides.length || (t = !0),
                        requestAnimationFrame(() => {
                            t && s.slides && s.slides.length && (r(),
                                t = !1)
                        }
                        ))
                }
                )
        }
        function K(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }
        function J({ swiper: e, duration: t, transformEl: i, allSlides: s }) {
            let { slides: a, activeIndex: r, $wrapperEl: l } = e;
            if (e.params.virtualTranslate && 0 !== t) {
                let n = !1;
                (s ? i ? a.find(i) : a : i ? a.eq(r).find(i) : a.eq(r)).transitionEnd(() => {
                    if (n || !e || e.destroyed)
                        return;
                    n = !0,
                        e.animating = !1;
                    let t = ["webkitTransitionEnd", "transitionend"];
                    for (let i = 0; i < t.length; i += 1)
                        l.trigger(t[i])
                }
                )
            }
        }
        function Q({ swiper: e, extendParams: t, on: i }) {
            t({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            });
            let s = () => {
                let { slides: t } = e
                    , i = e.params.fadeEffect;
                for (let s = 0; s < t.length; s += 1) {
                    let a = e.slides.eq(s)
                        , r = a[0].swiperSlideOffset
                        , l = -r;
                    e.params.virtualTranslate || (l -= e.translate);
                    let n = 0;
                    e.isHorizontal() || (n = l,
                        l = 0);
                    let o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0)
                        , d = K(i, a);
                    d.css({
                        opacity: o
                    }).transform(`translate3d(${l}px, ${n}px, 0px)`)
                }
            }
                , a = t => {
                    let { transformEl: i } = e.params.fadeEffect
                        , s = i ? e.slides.find(i) : e.slides;
                    s.transition(t),
                        J({
                            swiper: e,
                            duration: t,
                            transformEl: i,
                            allSlides: !0
                        })
                }
                ;
            U({
                effect: "fade",
                swiper: e,
                on: i,
                setTranslate: s,
                setTransition: a,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }
        function ee({ swiper: e, extendParams: t, on: i }) {
            t({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            let s = e => "string" == typeof e ? e : `${e}px`
                , a = () => {
                    let { slides: t, $wrapperEl: i, slidesSizesGrid: a } = e
                        , r = e.params.creativeEffect
                        , { progressMultiplier: l } = r
                        , n = e.params.centeredSlides;
                    if (n) {
                        let o = a[0] / 2 - e.params.slidesOffsetBefore || 0;
                        i.transform(`translateX(calc(50% - ${o}px))`)
                    }
                    for (let d = 0; d < t.length; d += 1) {
                        let p = t.eq(d)
                            , u = p[0].progress
                            , c = Math.min(Math.max(p[0].progress, -r.limitProgress), r.limitProgress)
                            , h = c;
                        n || (h = Math.min(Math.max(p[0].originalProgress, -r.limitProgress), r.limitProgress));
                        let f = p[0].swiperSlideOffset
                            , g = [e.params.cssMode ? -f - e.translate : -f, 0, 0]
                            , v = [0, 0, 0]
                            , b = !1;
                        e.isHorizontal() || (g[1] = g[0],
                            g[0] = 0);
                        let w = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        c < 0 ? (w = r.next,
                            b = !0) : c > 0 && (w = r.prev,
                                b = !0),
                            g.forEach((e, t) => {
                                g[t] = `calc(${e}px + (${s(w.translate[t])} * ${Math.abs(c * l)}))`
                            }
                            ),
                            v.forEach((e, t) => {
                                v[t] = w.rotate[t] * Math.abs(c * l)
                            }
                            ),
                            p[0].style.zIndex = -Math.abs(Math.round(u)) + t.length;
                        let y = g.join(", ")
                            , C = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`
                            , S = h < 0 ? `scale(${1 + (1 - w.scale) * h * l})` : `scale(${1 - (1 - w.scale) * h * l})`
                            , T = h < 0 ? 1 + (1 - w.opacity) * h * l : 1 - (1 - w.opacity) * h * l
                            , E = `translate3d(${y}) ${C} ${S}`;
                        if (b && w.shadow || !b) {
                            let x = p.children(".swiper-slide-shadow");
                            if (0 === x.length && w.shadow && (x = function (e, t, i) {
                                let s = `swiper-slide-shadow${i ? `-${i}` : ""}`
                                    , a = e.transformEl ? t.find(e.transformEl) : t
                                    , r = a.children(`.${s}`);
                                return r.length || (r = m(`<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`),
                                    a.append(r)),
                                    r
                            }(r, p)),
                                x.length) {
                                let M = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                                x[0].style.opacity = Math.min(Math.max(Math.abs(M), 0), 1)
                            }
                        }
                        let P = K(r, p);
                        P.transform(E).css({
                            opacity: T
                        }),
                            w.origin && P.css("transform-origin", w.origin)
                    }
                }
                , r = t => {
                    let { transformEl: i } = e.params.creativeEffect
                        , s = i ? e.slides.find(i) : e.slides;
                    s.transition(t).find(".swiper-slide-shadow").transition(t),
                        J({
                            swiper: e,
                            duration: t,
                            transformEl: i,
                            allSlides: !0
                        })
                }
                ;
            U({
                effect: "creative",
                swiper: e,
                on: i,
                setTranslate: a,
                setTransition: r,
                perspective: () => e.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }
    }
}]);
