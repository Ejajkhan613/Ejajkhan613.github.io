(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[239], {
    1014: function (e, t, i) {
        "use strict";
        let o, n, a;
        i.r(t),
            i.d(t, {
                jarallax: function () {
                    return j
                },
                jarallaxElement: function () {
                    return S
                },
                jarallaxVideo: function () {
                    return L
                }
            });
        /*!
 * Jarallax v2.1.3 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
        var r, l = {
            type: "scroll",
            speed: .5,
            containerClass: "jarallax-container",
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: !1,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: !1,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
            videoClass: "jarallax-video",
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: !0,
            videoPlayOnlyVisible: !0,
            videoLazyLoading: !0,
            disableVideo: !1,
            onVideoInsert: null,
            onVideoWorkerInit: null
        }, s = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};
        let { navigator: p } = s
            , d = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent);
        function u() {
            o = s.innerWidth || document.documentElement.clientWidth,
                d ? (!a && document.body && ((a = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",
                    document.body.appendChild(a)),
                    n = (a ? a.clientHeight : 0) || s.innerHeight || document.documentElement.clientHeight) : n = s.innerHeight || document.documentElement.clientHeight
        }
        function c() {
            return {
                width: o,
                height: n
            }
        }
        u(),
            s.addEventListener("resize", u),
            s.addEventListener("orientationchange", u),
            s.addEventListener("load", u),
            r = () => {
                u()
            }
            ,
            "complete" === document.readyState || "interactive" === document.readyState ? r() : document.addEventListener("DOMContentLoaded", r, {
                capture: !0,
                once: !0,
                passive: !0
            });
        let m = [];
        function h() {
            if (!m.length)
                return;
            let { width: e, height: t } = c();
            m.forEach((i, o) => {
                let { instance: n, oldData: a } = i;
                if (!n.isVisible())
                    return;
                let r = n.$item.getBoundingClientRect()
                    , l = {
                        width: r.width,
                        height: r.height,
                        top: r.top,
                        bottom: r.bottom,
                        wndW: e,
                        wndH: t
                    }
                    , s = !a || a.wndW !== l.wndW || a.wndH !== l.wndH || a.width !== l.width || a.height !== l.height
                    , p = s || !a || a.top !== l.top || a.bottom !== l.bottom;
                m[o].oldData = l,
                    s && n.onResize(),
                    p && n.onScroll()
            }
            ),
                s.requestAnimationFrame(h)
        }
        let f = new s.IntersectionObserver(e => {
            e.forEach(e => {
                e.target.jarallax.isElementInViewport = e.isIntersecting
            }
            )
        }
            , {
                rootMargin: "50px"
            })
            , { navigator: y } = s
            , g = 0;
        class v {
            constructor(e, t) {
                let i = this;
                i.instanceID = g,
                    g += 1,
                    i.$item = e,
                    i.defaults = {
                        ...l
                    };
                let o = i.$item.dataset || {}
                    , n = {};
                if (Object.keys(o).forEach(e => {
                    let t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== i.defaults[t] && (n[t] = o[e])
                }
                ),
                    i.options = i.extend({}, i.defaults, n, t),
                    i.pureOptions = i.extend({}, i.options),
                    Object.keys(i.options).forEach(e => {
                        "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1)
                    }
                    ),
                    i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))),
                    "string" == typeof i.options.disableParallax && (i.options.disableParallax = RegExp(i.options.disableParallax)),
                    i.options.disableParallax instanceof RegExp) {
                    let a = i.options.disableParallax;
                    i.options.disableParallax = () => a.test(y.userAgent)
                }
                if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1),
                    "string" == typeof i.options.disableVideo && (i.options.disableVideo = RegExp(i.options.disableVideo)),
                    i.options.disableVideo instanceof RegExp) {
                    let r = i.options.disableVideo;
                    i.options.disableVideo = () => r.test(y.userAgent)
                }
                "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
                let s = i.options.elementInViewport;
                s && "object" == typeof s && void 0 !== s.length && ([s] = s),
                    s instanceof Element || (s = null),
                    i.options.elementInViewport = s,
                    i.image = {
                        src: i.options.imgSrc || null,
                        $container: null,
                        useImgTag: !1,
                        position: "fixed"
                    },
                    i.initImg() && i.canInitParallax() && i.init()
            }
            css(e, t) {
                var i;
                return i = e,
                    "string" == typeof t ? s.getComputedStyle(i).getPropertyValue(t) : (Object.keys(t).forEach(e => {
                        i.style[e] = t[e]
                    }
                    ),
                        i)
            }
            extend(e, ...t) {
                return function (e, ...t) {
                    return e = e || {},
                        Object.keys(t).forEach(i => {
                            t[i] && Object.keys(t[i]).forEach(o => {
                                e[o] = t[i][o]
                            }
                            )
                        }
                        ),
                        e
                }(e, ...t)
            }
            getWindowData() {
                let { width: e, height: t } = c();
                return {
                    width: e,
                    height: t,
                    y: document.documentElement.scrollTop
                }
            }
            initImg() {
                let e = this
                    , t = e.options.imgElement;
                return t && "string" == typeof t && (t = e.$item.querySelector(t)),
                    t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null),
                    t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t,
                        e.image.$itemParent = t.parentNode),
                        e.image.useImgTag = !0),
                    !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                        e.image.bgImage = e.css(e.$item, "background-image")),
                        !(!e.image.bgImage || "none" === e.image.bgImage))
            }
            canInitParallax() {
                return !this.options.disableParallax()
            }
            init() {
                let e = this
                    , t = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }
                    , i = {
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden"
                    };
                if (!e.options.keepImg) {
                    let o = e.$item.getAttribute("style");
                    if (o && e.$item.setAttribute("data-jarallax-original-styles", o),
                        e.image.useImgTag) {
                        let n = e.image.$item.getAttribute("style");
                        n && e.image.$item.setAttribute("data-jarallax-original-styles", n)
                    }
                }
                if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                    position: "relative"
                }),
                    "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                        zIndex: 0
                    }),
                    e.image.$container = document.createElement("div"),
                    e.css(e.image.$container, t),
                    e.css(e.image.$container, {
                        "z-index": e.options.zIndex
                    }),
                    "fixed" === this.image.position && e.css(e.image.$container, {
                        "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    }),
                    e.image.$container.setAttribute("id", `jarallax-container-${e.instanceID}`),
                    e.options.containerClass && e.image.$container.setAttribute("class", e.options.containerClass),
                    e.$item.appendChild(e.image.$container),
                    e.image.useImgTag ? i = e.extend({
                        "object-fit": e.options.imgSize,
                        "object-position": e.options.imgPosition,
                        "max-width": "none"
                    }, t, i) : (e.image.$item = document.createElement("div"),
                        e.image.src && (i = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": e.image.bgImage || `url("${e.image.src}")`
                        }, t, i))),
                    ("opacity" === e.options.type || "scale" === e.options.type || "scale-opacity" === e.options.type || 1 === e.options.speed) && (e.image.position = "absolute"),
                    "fixed" === e.image.position) {
                    let a = (function (e) {
                        let t = [];
                        for (; null !== e.parentElement;)
                            1 === (e = e.parentElement).nodeType && t.push(e);
                        return t
                    }
                    )(e.$item).filter(e => {
                        let t = s.getComputedStyle(e)
                            , i = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                        return i && "none" !== i || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                    }
                    );
                    e.image.position = a.length ? "absolute" : "fixed"
                }
                i.position = e.image.position,
                    e.css(e.image.$item, i),
                    e.image.$container.appendChild(e.image.$item),
                    e.onResize(),
                    e.onScroll(!0),
                    e.options.onInit && e.options.onInit.call(e),
                    "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }),
                    m.push({
                        instance: e
                    }),
                    1 === m.length && s.requestAnimationFrame(h),
                    f.observe(e.options.elementInViewport || e.$item)
            }
            destroy() {
                let e = this;
                m.forEach((t, i) => {
                    t.instance.instanceID === e.instanceID && m.splice(i, 1)
                }
                ),
                    f.unobserve(e.options.elementInViewport || e.$item);
                let t = e.$item.getAttribute("data-jarallax-original-styles");
                if (e.$item.removeAttribute("data-jarallax-original-styles"),
                    t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"),
                    e.image.useImgTag) {
                    let i = e.image.$item.getAttribute("data-jarallax-original-styles");
                    e.image.$item.removeAttribute("data-jarallax-original-styles"),
                        i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"),
                        e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                }
                e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container),
                    e.options.onDestroy && e.options.onDestroy.call(e),
                    delete e.$item.jarallax
            }
            coverImage() {
                let e = this
                    , { height: t } = c()
                    , i = e.image.$container.getBoundingClientRect()
                    , o = i.height
                    , { speed: n } = e.options
                    , a = "scroll" === e.options.type || "scroll-opacity" === e.options.type
                    , r = 0
                    , l = o
                    , s = 0;
                return a && (n < 0 ? (r = n * Math.max(o, t),
                    t < o && (r -= n * (o - t))) : r = n * (o + t),
                    n > 1 ? l = Math.abs(r - t) : n < 0 ? l = r / n + Math.abs(r) : l += (t - o) * (1 - n),
                    r /= 2),
                    e.parallaxScrollDistance = r,
                    s = a ? (t - l) / 2 : (o - l) / 2,
                    e.css(e.image.$item, {
                        height: `${l}px`,
                        marginTop: `${s}px`,
                        left: "fixed" === e.image.position ? `${i.left}px` : "0",
                        width: `${i.width}px`
                    }),
                    e.options.onCoverImage && e.options.onCoverImage.call(e),
                {
                    image: {
                        height: l,
                        marginTop: s
                    },
                    container: i
                }
            }
            isVisible() {
                return this.isElementInViewport || !1
            }
            onScroll(e) {
                if (!e && !this.isVisible())
                    return;
                let { height: t } = c()
                    , i = this.$item.getBoundingClientRect()
                    , o = i.top
                    , n = i.height
                    , a = {}
                    , r = Math.max(0, n + o)
                    , l = Math.max(0, -o)
                    , s = Math.max(0, o + n - t)
                    , p = Math.max(0, n - (o + n - t))
                    , d = 1 - 2 * ((t - o) / (t + n))
                    , u = 1;
                if (n < t ? u = 1 - (l || s) / n : r <= t ? u = r / t : p <= t && (u = p / t),
                    ("opacity" === this.options.type || "scale-opacity" === this.options.type || "scroll-opacity" === this.options.type) && (a.transform = "translate3d(0,0,0)",
                        a.opacity = u),
                    "scale" === this.options.type || "scale-opacity" === this.options.type) {
                    let m = 1;
                    this.options.speed < 0 ? m -= this.options.speed * u : m += this.options.speed * (1 - u),
                        a.transform = `scale(${m}) translate3d(0,0,0)`
                }
                if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                    let h = this.parallaxScrollDistance * d;
                    "absolute" === this.image.position && (h -= o),
                        a.transform = `translate3d(0,${h}px,0)`
                }
                this.css(this.image.$item, a),
                    this.options.onScroll && this.options.onScroll.call(this, {
                        section: i,
                        beforeTop: Math.max(0, o),
                        beforeTopEnd: r,
                        afterTop: l,
                        beforeBottom: s,
                        beforeBottomEnd: p,
                        afterBottom: Math.max(0, -o + t - n),
                        visiblePercent: u,
                        fromViewportCenter: d
                    })
            }
            onResize() {
                this.coverImage()
            }
        }
        let b = function (e, t, ...i) {
            let o;
            ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            let n = e.length
                , a = 0;
            for (; a < n; a += 1)
                if ("object" == typeof t || void 0 === t ? e[a].jarallax || (e[a].jarallax = new v(e[a], t)) : e[a].jarallax && (o = e[a].jarallax[t].apply(e[a].jarallax, i)),
                    void 0 !== o)
                    return o;
            return e
        };
        b.constructor = v;
        var $ = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};
        function I() {
            this.doneCallbacks = [],
                this.failCallbacks = []
        }
        I.prototype = {
            execute(e, t) {
                let i = e.length;
                for (t = Array.prototype.slice.call(t); i;)
                    e[i -= 1].apply(null, t)
            },
            resolve(...e) {
                this.execute(this.doneCallbacks, e)
            },
            reject(...e) {
                this.execute(this.failCallbacks, e)
            },
            done(e) {
                this.doneCallbacks.push(e)
            },
            fail(e) {
                this.failCallbacks.push(e)
            }
        };
        var x = {
            autoplay: !1,
            loop: !1,
            mute: !1,
            volume: 100,
            showControls: !0,
            accessibilityHidden: !1,
            startTime: 0,
            endTime: 0
        };
        let A = 0
            , w = 0
            , E = 0
            , V = 0
            , T = 0
            , C = new I
            , P = new I;
        class k {
            constructor(e, t) {
                let i = this;
                i.url = e,
                    i.options_default = {
                        ...x
                    },
                    i.options = function (e, ...t) {
                        return e = e || {},
                            Object.keys(t).forEach(i => {
                                t[i] && Object.keys(t[i]).forEach(o => {
                                    e[o] = t[i][o]
                                }
                                )
                            }
                            ),
                            e
                    }({}, i.options_default, t),
                    i.videoID = i.parseURL(e),
                    i.videoID && (i.ID = A,
                        A += 1,
                        i.loadAPI(),
                        i.init())
            }
            parseURL(e) {
                let t = function (e) {
                    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/);
                    return !!t && 11 === t[1].length && t[1]
                }(e)
                    , i = function (e) {
                        let t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                        return !!t && !!t[3] && t[3]
                    }(e)
                    , o = function (e) {
                        let t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/)
                            , i = {}
                            , o = 0;
                        return t.forEach(e => {
                            let t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                            t && t[1] && t[2] && (i["ogv" === t[1] ? "ogg" : t[1]] = t[2],
                                o = 1)
                        }
                        ),
                            !!o && i
                    }(e);
                return t ? (this.type = "youtube",
                    t) : i ? (this.type = "vimeo",
                        i) : !!o && (this.type = "local",
                            o)
            }
            isValid() {
                return !!this.videoID
            }
            on(e, t) {
                this.userEventsList = this.userEventsList || [],
                    (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
            }
            off(e, t) {
                this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach((i, o) => {
                    i === t && (this.userEventsList[e][o] = !1)
                }
                ) : delete this.userEventsList[e])
            }
            fire(e, ...t) {
                this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(e => {
                    e && e.apply(this, t)
                }
                )
            }
            play(e) {
                let t = this;
                t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0),
                    $.YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()),
                    "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e),
                        t.player.getPaused().then(e => {
                            e && t.player.play()
                        }
                        )),
                    "local" === t.type && (void 0 !== e && (t.player.currentTime = e),
                        t.player.paused && t.player.play()))
            }
            pause() {
                let e = this;
                e.player && ("youtube" === e.type && e.player.pauseVideo && $.YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(),
                    "vimeo" === e.type && e.player.getPaused().then(t => {
                        t || e.player.pause()
                    }
                    ),
                    "local" !== e.type || e.player.paused || e.player.pause())
            }
            mute() {
                let e = this;
                e.player && ("youtube" === e.type && e.player.mute && e.player.mute(),
                    "vimeo" === e.type && e.player.setVolume && e.setVolume(0),
                    "local" === e.type && (e.$video.muted = !0))
            }
            unmute() {
                let e = this;
                e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(),
                    "vimeo" === e.type && e.player.setVolume && e.setVolume(e.options.volume || 100),
                    "local" === e.type && (e.$video.muted = !1))
            }
            setVolume(e = !1) {
                let t = this;
                t.player && "number" == typeof e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e),
                    "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e / 100),
                    "local" === t.type && (t.$video.volume = e / 100))
            }
            getVolume(e) {
                if (!this.player) {
                    e(!1);
                    return
                }
                "youtube" === this.type && this.player.getVolume && e(this.player.getVolume()),
                    "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(t => {
                        e(100 * t)
                    }
                    ),
                    "local" === this.type && e(100 * this.$video.volume)
            }
            getMuted(e) {
                if (!this.player) {
                    e(null);
                    return
                }
                "youtube" === this.type && this.player.isMuted && e(this.player.isMuted()),
                    "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(t => {
                        e(!!t)
                    }
                    ),
                    "local" === this.type && e(this.$video.muted)
            }
            getImageURL(e) {
                let t = this;
                if (t.videoImage) {
                    e(t.videoImage);
                    return
                }
                if ("youtube" === t.type) {
                    let i = ["maxresdefault", "sddefault", "hqdefault", "0"]
                        , o = 0
                        , n = new Image;
                    n.onload = function () {
                        120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`,
                            e(t.videoImage)) : (o += 1,
                                this.src = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`)
                    }
                        ,
                        n.src = `https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`
                }
                if ("vimeo" === t.type) {
                    let a = $.innerWidth || 1920;
                    $.devicePixelRatio && (a *= $.devicePixelRatio),
                        a = Math.min(a, 1920);
                    let r = new XMLHttpRequest;
                    r.open("GET", `https://vimeo.com/api/oembed.json?url=${t.url}&width=${a}`, !0),
                        r.onreadystatechange = function () {
                            if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                let i = JSON.parse(this.responseText);
                                i.thumbnail_url && (t.videoImage = i.thumbnail_url,
                                    e(t.videoImage))
                            }
                        }
                        ,
                        r.send(),
                        r = null
                }
            }
            getIframe(e) {
                this.getVideo(e)
            }
            getVideo(e) {
                let t = this;
                if (t.$video) {
                    e(t.$video);
                    return
                }
                t.onAPIready(() => {
                    let i;
                    if (t.$video || ((i = document.createElement("div")).style.display = "none"),
                        "youtube" === t.type) {
                        let o, n;
                        t.playerOptions = {
                            host: "https://www.youtube-nocookie.com",
                            videoId: t.videoID,
                            playerVars: {
                                autohide: 1,
                                rel: 0,
                                autoplay: 0,
                                playsinline: 1
                            }
                        },
                            t.options.showControls || (t.playerOptions.playerVars.iv_load_policy = 3,
                                t.playerOptions.playerVars.modestbranding = 1,
                                t.playerOptions.playerVars.controls = 0,
                                t.playerOptions.playerVars.showinfo = 0,
                                t.playerOptions.playerVars.disablekb = 1),
                            t.playerOptions.events = {
                                onReady(e) {
                                    t.options.mute ? e.target.mute() : "number" == typeof t.options.volume && e.target.setVolume(t.options.volume),
                                        t.options.autoplay && t.play(t.options.startTime),
                                        t.fire("ready", e),
                                        t.options.loop && !t.options.endTime && (t.options.endTime = t.player.getDuration() - .1),
                                        setInterval(() => {
                                            t.getVolume(i => {
                                                t.options.volume !== i && (t.options.volume = i,
                                                    t.fire("volumechange", e))
                                            }
                                            )
                                        }
                                            , 150)
                                },
                                onStateChange(e) {
                                    t.options.loop && e.data === $.YT.PlayerState.ENDED && t.play(t.options.startTime),
                                        o || e.data !== $.YT.PlayerState.PLAYING || (o = 1,
                                            t.fire("started", e)),
                                        e.data === $.YT.PlayerState.PLAYING && t.fire("play", e),
                                        e.data === $.YT.PlayerState.PAUSED && t.fire("pause", e),
                                        e.data === $.YT.PlayerState.ENDED && t.fire("ended", e),
                                        e.data === $.YT.PlayerState.PLAYING ? n = setInterval(() => {
                                            t.fire("timeupdate", e),
                                                t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                                        }
                                            , 150) : clearInterval(n)
                                },
                                onError(e) {
                                    t.fire("error", e)
                                }
                            };
                        let a = !t.$video;
                        if (a) {
                            let r = document.createElement("div");
                            r.setAttribute("id", t.playerID),
                                i.appendChild(r),
                                document.body.appendChild(i)
                        }
                        t.player = t.player || new $.YT.Player(t.playerID, t.playerOptions),
                            a && (t.$video = document.getElementById(t.playerID),
                                t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"),
                                    t.$video.setAttribute("aria-hidden", "true")),
                                t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280,
                                t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                    }
                    if ("vimeo" === t.type) {
                        let l;
                        if (t.playerOptions = {
                            dnt: 1,
                            id: t.videoID,
                            autopause: 0,
                            transparent: 0,
                            autoplay: t.options.autoplay ? 1 : 0,
                            loop: t.options.loop ? 1 : 0,
                            muted: t.options.mute || 0 === t.options.volume ? 1 : 0
                        },
                            t.options.showControls || (t.playerOptions.controls = 0),
                            !t.options.showControls && t.options.loop && t.options.autoplay && (t.playerOptions.background = 1),
                            !t.$video) {
                            let s = "";
                            Object.keys(t.playerOptions).forEach(e => {
                                "" !== s && (s += "&"),
                                    s += `${e}=${encodeURIComponent(t.playerOptions[e])}`
                            }
                            ),
                                t.$video = document.createElement("iframe"),
                                t.$video.setAttribute("id", t.playerID),
                                t.$video.setAttribute("src", `https://player.vimeo.com/video/${t.videoID}?${s}`),
                                t.$video.setAttribute("frameborder", "0"),
                                t.$video.setAttribute("mozallowfullscreen", ""),
                                t.$video.setAttribute("allowfullscreen", ""),
                                t.$video.setAttribute("title", "Vimeo video player"),
                                t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"),
                                    t.$video.setAttribute("aria-hidden", "true")),
                                i.appendChild(t.$video),
                                document.body.appendChild(i)
                        }
                        t.player = t.player || new $.Vimeo.Player(t.$video, t.playerOptions),
                            t.options.mute || "number" != typeof t.options.volume || t.setVolume(t.options.volume),
                            t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime),
                            t.player.getVideoWidth().then(e => {
                                t.videoWidth = e || 1280
                            }
                            ),
                            t.player.getVideoHeight().then(e => {
                                t.videoHeight = e || 720
                            }
                            ),
                            t.player.on("timeupdate", e => {
                                l || (t.fire("started", e),
                                    l = 1),
                                    t.fire("timeupdate", e),
                                    t.options.endTime && t.options.endTime && e.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }
                            ),
                            t.player.on("play", e => {
                                t.fire("play", e),
                                    t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                            }
                            ),
                            t.player.on("pause", e => {
                                t.fire("pause", e)
                            }
                            ),
                            t.player.on("ended", e => {
                                t.fire("ended", e)
                            }
                            ),
                            t.player.on("loaded", e => {
                                t.fire("ready", e)
                            }
                            ),
                            t.player.on("volumechange", e => {
                                t.getVolume(e => {
                                    t.options.volume = e
                                }
                                ),
                                    t.fire("volumechange", e)
                            }
                            ),
                            t.player.on("error", e => {
                                t.fire("error", e)
                            }
                            )
                    }
                    if ("local" === t.type) {
                        let p;
                        t.$video || (t.$video = document.createElement("video"),
                            t.player = t.$video,
                            t.options.showControls && (t.$video.controls = !0),
                            "number" == typeof t.options.volume && t.setVolume(t.options.volume),
                            t.options.mute && t.mute(),
                            t.options.loop && (t.$video.loop = !0),
                            t.$video.setAttribute("playsinline", ""),
                            t.$video.setAttribute("webkit-playsinline", ""),
                            t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"),
                                t.$video.setAttribute("aria-hidden", "true")),
                            t.$video.setAttribute("id", t.playerID),
                            i.appendChild(t.$video),
                            document.body.appendChild(i),
                            Object.keys(t.videoID).forEach(e => {
                                !function (e, t, i) {
                                    let o = document.createElement("source");
                                    o.src = t,
                                        o.type = i,
                                        e.appendChild(o)
                                }(t.$video, t.videoID[e], `video/${e}`)
                            }
                            )),
                            t.player.addEventListener("playing", e => {
                                p || t.fire("started", e),
                                    p = 1
                            }
                            ),
                            t.player.addEventListener("timeupdate", function (e) {
                                t.fire("timeupdate", e),
                                    t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }),
                            t.player.addEventListener("play", e => {
                                t.fire("play", e)
                            }
                            ),
                            t.player.addEventListener("pause", e => {
                                t.fire("pause", e)
                            }
                            ),
                            t.player.addEventListener("ended", e => {
                                t.fire("ended", e)
                            }
                            ),
                            t.player.addEventListener("loadedmetadata", function () {
                                t.videoWidth = this.videoWidth || 1280,
                                    t.videoHeight = this.videoHeight || 720,
                                    t.fire("ready"),
                                    t.options.autoplay && t.play(t.options.startTime)
                            }),
                            t.player.addEventListener("volumechange", e => {
                                t.getVolume(e => {
                                    t.options.volume = e
                                }
                                ),
                                    t.fire("volumechange", e)
                            }
                            ),
                            t.player.addEventListener("error", e => {
                                t.fire("error", e)
                            }
                            )
                    }
                    e(t.$video)
                }
                )
            }
            init() {
                let e = this;
                e.playerID = `VideoWorker-${e.ID}`
            }
            loadAPI() {
                if (w && E)
                    return;
                let e = "";
                if ("youtube" !== this.type || w || (w = 1,
                    e = "https://www.youtube.com/iframe_api"),
                    "vimeo" === this.type && !E) {
                    if (E = 1,
                        void 0 !== $.Vimeo)
                        return;
                    e = "https://player.vimeo.com/api/player.js"
                }
                if (!e)
                    return;
                let t = document.createElement("script")
                    , i = document.getElementsByTagName("head")[0];
                t.src = e,
                    i.appendChild(t),
                    i = null,
                    t = null
            }
            onAPIready(e) {
                if ("youtube" === this.type && (void 0 !== $.YT && 0 !== $.YT.loaded || V ? "object" == typeof $.YT && 1 === $.YT.loaded ? e() : C.done(() => {
                    e()
                }
                ) : (V = 1,
                    $.onYouTubeIframeAPIReady = function () {
                        $.onYouTubeIframeAPIReady = null,
                            C.resolve("done"),
                            e()
                    }
                )),
                    "vimeo" === this.type) {
                    if (void 0 !== $.Vimeo || T)
                        void 0 !== $.Vimeo ? e() : P.done(() => {
                            e()
                        }
                        );
                    else {
                        T = 1;
                        let t = setInterval(() => {
                            void 0 !== $.Vimeo && (clearInterval(t),
                                P.resolve("done"),
                                e())
                        }
                            , 20)
                    }
                }
                "local" === this.type && e()
            }
        }
        let j = b
            , L = function () {
                return function (e = s.jarallax) {
                    if (void 0 === e)
                        return;
                    let t = e.constructor
                        , i = t.prototype.onScroll;
                    t.prototype.onScroll = function () {
                        let e = this;
                        i.apply(e);
                        let t = !e.isVideoInserted && e.video && (!e.options.videoLazyLoading || e.isElementInViewport) && !e.options.disableVideo();
                        t && (e.isVideoInserted = !0,
                            e.video.getVideo(t => {
                                let i = t.parentNode;
                                e.css(t, {
                                    position: e.image.position,
                                    top: "0px",
                                    left: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "none",
                                    maxHeight: "none",
                                    pointerEvents: "none",
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                    margin: 0,
                                    zIndex: -1
                                }),
                                    e.$video = t,
                                    "local" === e.video.type && (e.image.src ? e.$video.setAttribute("poster", e.image.src) : e.image.$item && "IMG" === e.image.$item.tagName && e.image.$item.src && e.$video.setAttribute("poster", e.image.$item.src)),
                                    e.options.videoClass && e.$video.setAttribute("class", `${e.options.videoClass} ${e.options.videoClass}-${e.video.type}`),
                                    e.image.$container.appendChild(t),
                                    i.parentNode.removeChild(i),
                                    e.options.onVideoInsert && e.options.onVideoInsert.call(e)
                            }
                            ))
                    }
                        ;
                    let o = t.prototype.coverImage;
                    t.prototype.coverImage = function () {
                        let e = o.apply(this)
                            , t = !!this.image.$item && this.image.$item.nodeName;
                        if (e && this.video && t && ("IFRAME" === t || "VIDEO" === t)) {
                            let i = e.image.height
                                , n = i * this.image.width / this.image.height
                                , a = (e.container.width - n) / 2
                                , r = e.image.marginTop;
                            e.container.width > n && (i = (n = e.container.width) * this.image.height / this.image.width,
                                a = 0,
                                r += (e.image.height - i) / 2),
                                "IFRAME" === t && (i += 400,
                                    r -= 200),
                                this.css(this.$video, {
                                    width: `${n}px`,
                                    marginLeft: `${a}px`,
                                    height: `${i}px`,
                                    marginTop: `${r}px`
                                })
                        }
                        return e
                    }
                        ;
                    let n = t.prototype.initImg;
                    t.prototype.initImg = function () {
                        let e = this
                            , t = n.apply(e);
                        return (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null),
                            e.options.videoSrc) ? (e.defaultInitImgResult = t,
                                !0) : t
                    }
                        ;
                    let a = t.prototype.canInitParallax;
                    t.prototype.canInitParallax = function () {
                        let e = this
                            , t = a.apply(e);
                        if (!e.options.videoSrc)
                            return t;
                        let i = new k(e.options.videoSrc, {
                            autoplay: !0,
                            loop: e.options.videoLoop,
                            showControls: !1,
                            accessibilityHidden: !0,
                            startTime: e.options.videoStartTime || 0,
                            endTime: e.options.videoEndTime || 0,
                            mute: !e.options.videoVolume,
                            volume: e.options.videoVolume || 0
                        });
                        function o() {
                            e.image.$default_item && (e.image.$item = e.image.$default_item,
                                e.image.$item.style.display = "block",
                                e.coverImage(),
                                e.onScroll())
                        }
                        if (e.options.onVideoWorkerInit && e.options.onVideoWorkerInit.call(e, i),
                            i.isValid()) {
                            if (this.options.disableParallax() && (t = !0,
                                e.image.position = "absolute",
                                e.options.type = "scroll",
                                e.options.speed = 1),
                                t) {
                                if (i.on("ready", () => {
                                    if (e.options.videoPlayOnlyVisible) {
                                        let t = e.onScroll;
                                        e.onScroll = function () {
                                            t.apply(e),
                                                e.videoError || !e.options.videoLoop && (e.options.videoLoop || e.videoEnded) || (e.isVisible() ? i.play() : i.pause())
                                        }
                                    } else
                                        i.play()
                                }
                                ),
                                    i.on("started", () => {
                                        e.image.$default_item = e.image.$item,
                                            e.image.$item = e.$video,
                                            e.image.width = e.video.videoWidth || 1280,
                                            e.image.height = e.video.videoHeight || 720,
                                            e.coverImage(),
                                            e.onScroll(),
                                            e.image.$default_item && (e.image.$default_item.style.display = "none")
                                    }
                                    ),
                                    i.on("ended", () => {
                                        e.videoEnded = !0,
                                            e.options.videoLoop || o()
                                    }
                                    ),
                                    i.on("error", () => {
                                        e.videoError = !0,
                                            o()
                                    }
                                    ),
                                    e.video = i,
                                    !e.defaultInitImgResult && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                        "local" !== i.type))
                                    return i.getImageURL(t => {
                                        e.image.bgImage = `url("${t}")`,
                                            e.init()
                                    }
                                    ),
                                        !1
                            } else
                                e.defaultInitImgResult || i.getImageURL(t => {
                                    let i = e.$item.getAttribute("style");
                                    i && e.$item.setAttribute("data-jarallax-original-styles", i),
                                        e.css(e.$item, {
                                            "background-image": `url("${t}")`,
                                            "background-position": "center",
                                            "background-size": "cover"
                                        })
                                }
                                )
                        }
                        return t
                    }
                        ;
                    let r = t.prototype.destroy;
                    t.prototype.destroy = function () {
                        let e = this;
                        e.image.$default_item && (e.image.$item = e.image.$default_item,
                            delete e.image.$default_item),
                            r.apply(e)
                    }
                }(j)
            }
            , S = function () {
                return function (e = s.jarallax) {
                    if (console.warn("Jarallax Element extension is DEPRECATED, please, avoid using it. We recommend you look at something like `lax.js` library <https://github.com/alexfoxy/lax.js>. It is much more powerful and has a less code (in cases when you don't want to add parallax backgrounds)."),
                        void 0 === e)
                        return;
                    let t = e.constructor;
                    ["initImg", "canInitParallax", "init", "destroy", "coverImage", "isVisible", "onScroll", "onResize"].forEach(e => {
                        let i = t.prototype[e];
                        t.prototype[e] = function (...t) {
                            let o = this;
                            if ("initImg" === e && null !== o.$item.getAttribute("data-jarallax-element") && (o.options.type = "element",
                                o.pureOptions.speed = o.$item.getAttribute("data-jarallax-element") || "100"),
                                "element" !== o.options.type)
                                return i.apply(o, t);
                            switch (o.pureOptions.threshold = o.$item.getAttribute("data-threshold") || "",
                            e) {
                                case "init":
                                    {
                                        let n = `${o.pureOptions.speed}`.split(" ");
                                        o.options.speed = o.pureOptions.speed || 0,
                                            o.options.speedY = n[0] ? parseFloat(n[0]) : 0,
                                            o.options.speedX = n[1] ? parseFloat(n[1]) : 0;
                                        let a = o.pureOptions.threshold.split(" ");
                                        o.options.thresholdY = a[0] ? parseFloat(a[0]) : null,
                                            o.options.thresholdX = a[1] ? parseFloat(a[1]) : null,
                                            i.apply(o, t);
                                        let r = o.$item.getAttribute("data-jarallax-original-styles");
                                        return r && o.$item.setAttribute("style", r),
                                            !0
                                    }
                                case "onResize":
                                    {
                                        let l = o.css(o.$item, "transform");
                                        o.css(o.$item, {
                                            transform: ""
                                        });
                                        let s = o.$item.getBoundingClientRect();
                                        o.itemData = {
                                            width: s.width,
                                            height: s.height,
                                            y: s.top + o.getWindowData().y,
                                            x: s.left
                                        },
                                            o.css(o.$item, {
                                                transform: l
                                            });
                                        break
                                    }
                                case "onScroll":
                                    {
                                        let p = o.getWindowData()
                                            , d = (p.y + p.height / 2 - o.itemData.y - o.itemData.height / 2) / (p.height / 2)
                                            , u = d * o.options.speedY
                                            , c = d * o.options.speedX
                                            , m = u
                                            , h = c;
                                        null !== o.options.thresholdY && u > o.options.thresholdY && (m = 0),
                                            null !== o.options.thresholdX && c > o.options.thresholdX && (h = 0),
                                            o.css(o.$item, {
                                                transform: `translate3d(${h}px,${m}px,0)`
                                            });
                                        break
                                    }
                                case "initImg":
                                case "isVisible":
                                case "coverImage":
                                    return !0
                            }
                            return i.apply(o, t)
                        }
                    }
                    )
                }(j)
            }
    },
    227: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getDomainLocale = function (e, t, i, o) {
                return !1
            }
            ,
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }),
                Object.assign(t.default, t),
                e.exports = t.default)
    },
    1551: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = i(2648).Z
            , n = i(7273).Z
            , a = o(i(7294))
            , r = i(1003)
            , l = i(7795)
            , s = i(4465)
            , p = i(2692)
            , d = i(8245)
            , u = i(9246)
            , c = i(227)
            , m = i(3468);
        let h = new Set;
        function f(e, t, i, o) {
            if (r.isLocalURL(t)) {
                if (!o.bypassPrefetchedCheck) {
                    let n = void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0
                        , a = t + "%" + i + "%" + n;
                    if (h.has(a))
                        return;
                    h.add(a)
                }
                Promise.resolve(e.prefetch(t, i, o)).catch(e => { }
                )
            }
        }
        function y(e) {
            return "string" == typeof e ? e : l.formatUrl(e)
        }
        let g = a.default.forwardRef(function (e, t) {
            let i, o;
            let { href: l, as: h, children: g, prefetch: v, passHref: b, replace: $, shallow: I, scroll: x, locale: A, onClick: w, onMouseEnter: E, onTouchStart: V, legacyBehavior: T = !1 } = e
                , C = n(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            i = g,
                T && ("string" == typeof i || "number" == typeof i) && (i = a.default.createElement("a", null, i));
            let P = !1 !== v
                , k = a.default.useContext(p.RouterContext)
                , j = a.default.useContext(d.AppRouterContext)
                , L = null != k ? k : j
                , S = !k
                , { href: O, as: D } = a.default.useMemo(() => {
                    if (!k) {
                        let e = y(l);
                        return {
                            href: e,
                            as: h ? y(h) : e
                        }
                    }
                    let [t, i] = r.resolveHref(k, l, !0);
                    return {
                        href: t,
                        as: h ? r.resolveHref(k, h) : i || t
                    }
                }
                    , [k, l, h])
                , M = a.default.useRef(O)
                , R = a.default.useRef(D);
            T && (o = a.default.Children.only(i));
            let _ = T ? o && "object" == typeof o && o.ref : t
                , [N, H, Y] = u.useIntersection({
                    rootMargin: "200px"
                })
                , z = a.default.useCallback(e => {
                    (R.current !== D || M.current !== O) && (Y(),
                        R.current = D,
                        M.current = O),
                        N(e),
                        _ && ("function" == typeof _ ? _(e) : "object" == typeof _ && (_.current = e))
                }
                    , [D, _, O, Y, N]);
            a.default.useEffect(() => {
                L && H && P && f(L, O, D, {
                    locale: A
                })
            }
                , [D, O, H, A, P, null == k ? void 0 : k.locale, L]);
            let W = {
                ref: z,
                onClick(e) {
                    T || "function" != typeof w || w(e),
                        T && o.props && "function" == typeof o.props.onClick && o.props.onClick(e),
                        L && !e.defaultPrevented && function (e, t, i, o, n, l, s, p, d, u) {
                            let { nodeName: c } = e.currentTarget
                                , m = "A" === c.toUpperCase();
                            if (m && (function (e) {
                                let { target: t } = e.currentTarget;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) || !r.isLocalURL(i)))
                                return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[n ? "replace" : "push"](i, o, {
                                    shallow: l,
                                    locale: p,
                                    scroll: s
                                }) : t[n ? "replace" : "push"](o || i, {
                                    forceOptimisticNavigation: !u
                                })
                            }
                                ;
                            d ? a.default.startTransition(h) : h()
                        }(e, L, O, D, $, I, x, A, S, P)
                },
                onMouseEnter(e) {
                    T || "function" != typeof E || E(e),
                        T && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
                        L && (P || !S) && f(L, O, D, {
                            locale: A,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                },
                onTouchStart(e) {
                    T || "function" != typeof V || V(e),
                        T && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
                        L && (P || !S) && f(L, O, D, {
                            locale: A,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                }
            };
            if (!T || b || "a" === o.type && !("href" in o.props)) {
                let B = void 0 !== A ? A : null == k ? void 0 : k.locale
                    , U = (null == k ? void 0 : k.isLocaleDomain) && c.getDomainLocale(D, B, null == k ? void 0 : k.locales, null == k ? void 0 : k.domainLocales);
                W.href = U || m.addBasePath(s.addLocale(D, B, null == k ? void 0 : k.defaultLocale))
            }
            return T ? a.default.cloneElement(o, W) : a.default.createElement("a", Object.assign({}, C, W), i)
        });
        t.default = g,
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }),
                Object.assign(t.default, t),
                e.exports = t.default)
    },
    9246: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.useIntersection = function (e) {
                let { rootRef: t, rootMargin: i, disabled: s } = e
                    , p = s || !a
                    , [d, u] = o.useState(!1)
                    , [c, m] = o.useState(null);
                o.useEffect(() => {
                    if (a) {
                        if (!p && !d && c && c.tagName) {
                            let e = function (e, t, i) {
                                let { id: o, observer: n, elements: a } = function (e) {
                                    let t;
                                    let i = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    }
                                        , o = l.find(e => e.root === i.root && e.margin === i.margin);
                                    if (o && (t = r.get(o)))
                                        return t;
                                    let n = new Map
                                        , a = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = n.get(e.target)
                                                    , i = e.isIntersecting || e.intersectionRatio > 0;
                                                t && i && t(i)
                                            }
                                            )
                                        }
                                            , e);
                                    return t = {
                                        id: i,
                                        observer: a,
                                        elements: n
                                    },
                                        l.push(i),
                                        r.set(i, t),
                                        t
                                }(i);
                                return a.set(e, t),
                                    n.observe(e),
                                    function () {
                                        if (a.delete(e),
                                            n.unobserve(e),
                                            0 === a.size) {
                                            n.disconnect(),
                                                r.delete(o);
                                            let t = l.findIndex(e => e.root === o.root && e.margin === o.margin);
                                            t > -1 && l.splice(t, 1)
                                        }
                                    }
                            }(c, e => e && u(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: i
                            });
                            return e
                        }
                    } else if (!d) {
                        let o = n.requestIdleCallback(() => u(!0));
                        return () => n.cancelIdleCallback(o)
                    }
                }
                    , [c, p, i, t, d]);
                let h = o.useCallback(() => {
                    u(!1)
                }
                    , []);
                return [m, d, h]
            }
            ;
        var o = i(7294)
            , n = i(4686);
        let a = "function" == typeof IntersectionObserver
            , r = new Map
            , l = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
            Object.assign(t.default, t),
            e.exports = t.default)
    },
    1664: function (e, t, i) {
        e.exports = i(1551)
    },
    8041: function (e) {
        e.exports = function () {
            "use strict";
            var e = document
                , t = e.createTextNode.bind(e);
            function i(e, t, i) {
                e.style.setProperty(t, i)
            }
            function o(e, t) {
                return e.appendChild(t)
            }
            function n(t, i, n, a) {
                var r = e.createElement("span");
                return i && (r.className = i),
                    n && (a || r.setAttribute("data-" + i, n),
                        r.textContent = n),
                    t && o(t, r) || r
            }
            function a(e, t) {
                return e.getAttribute("data-" + t)
            }
            function r(t, i) {
                return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (i || e).querySelectorAll(t)) : []
            }
            function l(e) {
                for (var t = []; e--;)
                    t[e] = [];
                return t
            }
            function s(e, t) {
                e && e.some(t)
            }
            function p(e) {
                return function (t) {
                    return e[t]
                }
            }
            var d = {};
            function u(e, t, i, o) {
                return {
                    by: e,
                    depends: t,
                    key: i,
                    split: o
                }
            }
            function c(e) {
                d[e.by] = e
            }
            function m(e, i, a, l, p) {
                e.normalize();
                var d = []
                    , u = document.createDocumentFragment();
                l && d.push(e.previousSibling);
                var c = [];
                return r(e.childNodes).some(function (e) {
                    if (e.tagName && !e.hasChildNodes()) {
                        c.push(e);
                        return
                    }
                    if (e.childNodes && e.childNodes.length) {
                        c.push(e),
                            d.push.apply(d, m(e, i, a, l, p));
                        return
                    }
                    var o = e.wholeText || ""
                        , r = o.trim();
                    r.length && (" " === o[0] && c.push(t(" ")),
                        s(r.split(a), function (e, t) {
                            t && p && c.push(n(u, "whitespace", " ", p));
                            var o = n(u, i, e);
                            d.push(o),
                                c.push(o)
                        }),
                        " " === o[o.length - 1] && c.push(t(" ")))
                }),
                    s(c, function (e) {
                        o(u, e)
                    }),
                    e.innerHTML = "",
                    o(e, u),
                    d
            }
            var h = "words"
                , f = u(h, 0, "word", function (e) {
                    return m(e, "word", /\s+/, 0, 1)
                })
                , y = "chars"
                , g = u(y, [h], "char", function (e, t, i) {
                    var o = [];
                    return s(i[h], function (e, i) {
                        o.push.apply(o, m(e, "char", "", t.whitespace && i))
                    }),
                        o
                });
            function v(e) {
                var t = (e = e || {}).key;
                return r(e.target || "[data-splitting]").map(function (o) {
                    var n = o["\uD83C\uDF4C"];
                    if (!e.force && n)
                        return n;
                    n = o["\uD83C\uDF4C"] = {
                        el: o
                    };
                    var r = (function e(t, i, o) {
                        var n = o.indexOf(t);
                        if (-1 == n)
                            o.unshift(t),
                                s(d[t].depends, function (i) {
                                    e(i, t, o)
                                });
                        else {
                            var a = o.indexOf(i);
                            o.splice(n, 1),
                                o.splice(a, 0, t)
                        }
                        return o
                    }
                    )(e.by || a(o, "splitting") || y, 0, []).map(p(d))
                        , l = function (e, t) {
                            for (var i in t)
                                e[i] = t[i];
                            return e
                        }({}, e);
                    return s(r, function (e) {
                        if (e.split) {
                            var a, r, p = e.by, d = (t ? "-" + t : "") + e.key, u = e.split(o, l, n);
                            d && (r = (a = "--" + d) + "-index",
                                s(u, function (e, t) {
                                    Array.isArray(e) ? s(e, function (e) {
                                        i(e, r, t)
                                    }) : i(e, r, t)
                                }),
                                i(o, a + "-total", u.length)),
                                n[p] = u,
                                o.classList.add(p)
                        }
                    }),
                        o.classList.add("splitting"),
                        n
                })
            }
            function b(e, t, i) {
                var o = r(t.matching || e.children, e)
                    , n = {};
                return s(o, function (e) {
                    var t = Math.round(e[i]);
                    (n[t] || (n[t] = [])).push(e)
                }),
                    Object.keys(n).map(Number).sort($).map(p(n))
            }
            function $(e, t) {
                return e - t
            }
            v.html = function (e) {
                var t = (e = e || {}).target = n();
                return t.innerHTML = e.content,
                    v(e),
                    t.outerHTML
            }
                ,
                v.add = c;
            var I = u("lines", [h], "line", function (e, t, i) {
                return b(e, {
                    matching: i[h]
                }, "offsetTop")
            })
                , x = u("items", 0, "item", function (e, t) {
                    return r(t.matching || e.children, e)
                })
                , A = u("rows", 0, "row", function (e, t) {
                    return b(e, t, "offsetTop")
                })
                , w = u("cols", 0, "col", function (e, t) {
                    return b(e, t, "offsetLeft")
                })
                , E = u("grid", ["rows", "cols"])
                , V = "layout"
                , T = u(V, 0, 0, function (e, t) {
                    var l = t.rows = +(t.rows || a(e, "rows") || 1)
                        , s = t.columns = +(t.columns || a(e, "columns") || 1);
                    if (t.image = t.image || a(e, "image") || e.currentSrc || e.src,
                        t.image) {
                        var p = r("img", e)[0];
                        t.image = p && (p.currentSrc || p.src)
                    }
                    t.image && i(e, "background-image", "url(" + t.image + ")");
                    for (var d = l * s, u = [], c = n(0, "cell-grid"); d--;) {
                        var m = n(c, "cell");
                        n(m, "cell-inner"),
                            u.push(m)
                    }
                    return o(e, c),
                        u
                })
                , C = u("cellRows", [V], "row", function (e, t, i) {
                    var o = t.rows
                        , n = l(o);
                    return s(i[V], function (e, t, i) {
                        n[Math.floor(t / (i.length / o))].push(e)
                    }),
                        n
                })
                , P = u("cellColumns", [V], "col", function (e, t, i) {
                    var o = t.columns
                        , n = l(o);
                    return s(i[V], function (e, t) {
                        n[t % o].push(e)
                    }),
                        n
                })
                , k = u("cells", ["cellRows", "cellColumns"], "cell", function (e, t, i) {
                    return i[V]
                });
            return c(f),
                c(g),
                c(I),
                c(x),
                c(A),
                c(w),
                c(E),
                c(T),
                c(C),
                c(P),
                c(k),
                v
        }()
    }
}]);
