"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[499], {
    6499: function (e, s, a) {
        a.r(s);
        var i = a(5893)
            , l = a(3391)
            , r = a.n(l)
            , c = a(1664)
            , n = a.n(c)
            , o = a(7294);
        let d = e => {
            let { noViewMore: s } = e
                , a = (0,
                    o.useRef)()
                , [l, c] = (0,
                    o.useState)("*");
            (0,
                o.useEffect)(() => (a.current = new (r())(".works-items", {
                    itemSelector: ".works-col",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".works-col"
                    },
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }),
                    () => a.current.destroy())),
                (0,
                    o.useEffect)(() => {
                        a.current && ("*" === l ? a.current.arrange({
                            filter: "*"
                        }) : a.current.arrange({
                            filter: ".".concat(l)
                        }))
                    }
                        , [l]);
            let d = e => () => {
                c(e)
            }
                , t = e => e === l ? "active" : "";
            return (0,
                i.jsx)(o.Fragment, {
                    children: (0,
                        i.jsxs)("div", {
                            className: "works-box",
                            children: [(0,
                                i.jsxs)("div", {
                                    className: "works-items works-masonry-items row",
                                    children: [(0,
                                        i.jsx)("div", {
                                            className: "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ",
                                            children: (0,
                                                i.jsxs)("div", {
                                                    className: "works-item scrolla-element-anim-1 scroll-animate",
                                                    "data-animate": "active",
                                                    children: [(0,
                                                        i.jsx)("div", {
                                                            className: "image",
                                                            children: (0,
                                                                i.jsx)("div", {
                                                                    className: "img",
                                                                    children: (0,
                                                                        i.jsx)(n(), {
                                                                            legacyBehavior: !0,
                                                                            href: "http://sathvamkalarisangam.com/",
                                                                            children: (0,
                                                                                i.jsxs)("a", {
                                                                                    children: [(0,
                                                                                        i.jsx)("img", {
                                                                                            decoding: "async",
                                                                                            src: "assets/images/work4.jpeg",
                                                                                            alt: "Sathvam Kalari Sangham"
                                                                                        }), (0,
                                                                                            i.jsx)("span", {
                                                                                                className: "overlay"
                                                                                            })]
                                                                                })
                                                                        })
                                                                })
                                                        }), (0,
                                                            i.jsxs)("div", {
                                                                className: "desc",
                                                                children: [(0,
                                                                    i.jsx)("span", {
                                                                        className: "category",
                                                                        children: " Martial Arts, kalaripayattu "
                                                                    }), (0,
                                                                        i.jsx)("h5", {
                                                                            className: "name",
                                                                            children: (0,
                                                                                i.jsx)(n(), {
                                                                                    legacyBehavior: !0,
                                                                                    href: "http://sathvamkalarisangam.com/",
                                                                                    children: (0,
                                                                                        i.jsx)("a", {
                                                                                            children: "Sathvam Kalari Sangam"
                                                                                        })
                                                                                })
                                                                        }), (0,
                                                                            i.jsx)("div", {
                                                                                className: "text",
                                                                                children: (0,
                                                                                    i.jsx)("p", {
                                                                                        children: "Sathvam Kalari Sangam aims to globally educate traditional Indian martial arts, preserving heritage through comprehensive training and dissemination."
                                                                                    })
                                                                            }), (0,
                                                                                i.jsx)(n(), {
                                                                                    legacyBehavior: !0,
                                                                                    href: "http://sathvamkalarisangam.com/",
                                                                                    children: (0,
                                                                                        i.jsx)("a", {
                                                                                            className: "lnk",
                                                                                            children: "See project"
                                                                                        })
                                                                                })]
                                                            }), (0,
                                                                i.jsx)("div", {
                                                                    className: "bg-img",
                                                                    style: {
                                                                        backgroundImage: "url(assets/images/pat-2.png)"
                                                                    }
                                                                })]
                                                })
                                        }), (0,
                                            i.jsx)("div", {
                                                className: "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ",
                                                children: (0,
                                                    i.jsxs)("div", {
                                                        className: "works-item scrolla-element-anim-1 scroll-animate",
                                                        "data-animate": "active",
                                                        children: [(0,
                                                            i.jsx)("div", {
                                                                className: "image",
                                                                children: (0,
                                                                    i.jsx)("div", {
                                                                        className: "img",
                                                                        children: (0,
                                                                            i.jsx)(n(), {
                                                                                legacyBehavior: !0,
                                                                                href: "https://ametheushealth.com/",
                                                                                children: (0,
                                                                                    i.jsxs)("a", {
                                                                                        children: [(0,
                                                                                            i.jsx)("img", {
                                                                                                decoding: "async",
                                                                                                src: "assets/images/work2.jpeg",
                                                                                                alt: "Ametheus Health"
                                                                                            }), (0,
                                                                                                i.jsx)("span", {
                                                                                                    className: "overlay"
                                                                                                })]
                                                                                    })
                                                                            })
                                                                    })
                                                            }), (0,
                                                                i.jsxs)("div", {
                                                                    className: "desc",
                                                                    children: [(0,
                                                                        i.jsx)("span", {
                                                                            className: "category",
                                                                            children: " Medicines, Pharmacy "
                                                                        }), (0,
                                                                            i.jsx)("h5", {
                                                                                className: "name",
                                                                                children: (0,
                                                                                    i.jsx)(n(), {
                                                                                        legacyBehavior: !0,
                                                                                        href: "https://ametheushealth.com/",
                                                                                        children: (0,
                                                                                            i.jsx)("a", {
                                                                                                children: "Ametheus Health"
                                                                                            })
                                                                                    })
                                                                            }), (0,
                                                                                i.jsx)("div", {
                                                                                    className: "text",
                                                                                    children: (0,
                                                                                        i.jsx)("p", {
                                                                                            children: "Ametheus Health provides safe, discreet, and convenient treatments online, with medicines dispensed from licensed pharmacies via insured courier."
                                                                                        })
                                                                                }), (0,
                                                                                    i.jsx)(n(), {
                                                                                        legacyBehavior: !0,
                                                                                        href: "https://ametheushealth.com/",
                                                                                        children: (0,
                                                                                            i.jsx)("a", {
                                                                                                className: "lnk",
                                                                                                children: "See project"
                                                                                            })
                                                                                    })]
                                                                }), (0,
                                                                    i.jsx)("div", {
                                                                        className: "bg-img",
                                                                        style: {
                                                                            backgroundImage: "url(assets/images/pat-2.png)"
                                                                        }
                                                                    })]
                                                    })
                                            }), (0,
                                                i.jsx)("div", {
                                                    className: "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ",
                                                    children: (0,
                                                        i.jsxs)("div", {
                                                            className: "works-item scrolla-element-anim-1 scroll-animate",
                                                            "data-animate": "active",
                                                            children: [(0,
                                                                i.jsx)("div", {
                                                                    className: "image",
                                                                    children: (0,
                                                                        i.jsx)("div", {
                                                                            className: "img",
                                                                            children: (0,
                                                                                i.jsx)(n(), {
                                                                                    legacyBehavior: !0,
                                                                                    href: "https://aalphaa.com/",
                                                                                    children: (0,
                                                                                        i.jsxs)("a", {
                                                                                            children: [(0,
                                                                                                i.jsx)("img", {
                                                                                                    decoding: "async",
                                                                                                    src: "assets/images/work7.jpg",
                                                                                                    alt: "Aalphaa"
                                                                                                }), (0,
                                                                                                    i.jsx)("span", {
                                                                                                        className: "overlay"
                                                                                                    })]
                                                                                        })
                                                                                })
                                                                        })
                                                                }), (0,
                                                                    i.jsxs)("div", {
                                                                        className: "desc",
                                                                        children: [(0,
                                                                            i.jsx)("span", {
                                                                                className: "category",
                                                                                children: " Documents Generator, Banking "
                                                                            }), (0,
                                                                                i.jsx)("h5", {
                                                                                    className: "name",
                                                                                    children: (0,
                                                                                        i.jsx)(n(), {
                                                                                            legacyBehavior: !0,
                                                                                            href: "https://aalphaa.com/",
                                                                                            children: (0,
                                                                                                i.jsx)("a", {
                                                                                                    children: "Aalphaa"
                                                                                                })
                                                                                        })
                                                                                }), (0,
                                                                                    i.jsx)("div", {
                                                                                        className: "text",
                                                                                        children: (0,
                                                                                            i.jsx)("p", {
                                                                                                children: "Aalphaa aims to revolutionize finance by offering digital payment services, transforming Swift and Letter of Credit systems, launching April 2024."
                                                                                            })
                                                                                    }), (0,
                                                                                        i.jsx)(n(), {
                                                                                            legacyBehavior: !0,
                                                                                            href: "https://aalphaa.com/",
                                                                                            children: (0,
                                                                                                i.jsx)("a", {
                                                                                                    className: "lnk",
                                                                                                    children: "See project"
                                                                                                })
                                                                                        })]
                                                                    }), (0,
                                                                        i.jsx)("div", {
                                                                            className: "bg-img",
                                                                            style: {
                                                                                backgroundImage: "url(assets/images/pat-2.png)"
                                                                            }
                                                                        })]
                                                        })
                                                }), (0,
                                                    i.jsx)("div", {
                                                        className: "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ",
                                                        children: (0,
                                                            i.jsxs)("div", {
                                                                className: "works-item scrolla-element-anim-1 scroll-animate",
                                                                "data-animate": "active",
                                                                children: [(0,
                                                                    i.jsx)("div", {
                                                                        className: "image",
                                                                        children: (0,
                                                                            i.jsx)("div", {
                                                                                className: "img",
                                                                                children: (0,
                                                                                    i.jsx)(n(), {
                                                                                        legacyBehavior: !0,
                                                                                        href: "https://assetorix.com/",
                                                                                        children: (0,
                                                                                            i.jsxs)("a", {
                                                                                                children: [(0,
                                                                                                    i.jsx)("img", {
                                                                                                        decoding: "async",
                                                                                                        src: "assets/images/work1.jpeg",
                                                                                                        alt: "Assetorix"
                                                                                                    }), (0,
                                                                                                        i.jsx)("span", {
                                                                                                            className: "overlay"
                                                                                                        })]
                                                                                            })
                                                                                    })
                                                                            })
                                                                    }), (0,
                                                                        i.jsxs)("div", {
                                                                            className: "desc",
                                                                            children: [(0,
                                                                                i.jsx)("span", {
                                                                                    className: "category",
                                                                                    children: " Real Estate, Properties "
                                                                                }), (0,
                                                                                    i.jsx)("h5", {
                                                                                        className: "name",
                                                                                        children: (0,
                                                                                            i.jsx)(n(), {
                                                                                                legacyBehavior: !0,
                                                                                                href: "https://assetorix.com/",
                                                                                                children: (0,
                                                                                                    i.jsx)("a", {
                                                                                                        children: "Assetorix"
                                                                                                    })
                                                                                            })
                                                                                    }), (0,
                                                                                        i.jsx)("div", {
                                                                                            className: "text",
                                                                                            children: (0,
                                                                                                i.jsx)("p", {
                                                                                                    children: "Assetorix® connects people and property, offering acquisition, disposition, and lending services globally with seamless execution and deep market expertise."
                                                                                                })
                                                                                        }), (0,
                                                                                            i.jsx)(n(), {
                                                                                                legacyBehavior: !0,
                                                                                                href: "https://assetorix.com/",
                                                                                                children: (0,
                                                                                                    i.jsx)("a", {
                                                                                                        className: "lnk",
                                                                                                        children: "See project"
                                                                                                    })
                                                                                            })]
                                                                        }), (0,
                                                                            i.jsx)("div", {
                                                                                className: "bg-img",
                                                                                style: {
                                                                                    backgroundImage: "url(assets/images/pat-2.png)"
                                                                                }
                                                                            })]
                                                            })
                                                    }), (0,
                                                        i.jsx)("div", {
                                                            className: "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ",
                                                            children: (0,
                                                                i.jsxs)("div", {
                                                                    className: "works-item scrolla-element-anim-1 scroll-animate",
                                                                    "data-animate": "active",
                                                                    children: [(0,
                                                                        i.jsx)("div", {
                                                                            className: "image",
                                                                            children: (0,
                                                                                i.jsx)("div", {
                                                                                    className: "img",
                                                                                    children: (0,
                                                                                        i.jsx)(n(), {
                                                                                            legacyBehavior: !0,
                                                                                            href: "https://tingtingtinga.com/",
                                                                                            children: (0,
                                                                                                i.jsxs)("a", {
                                                                                                    children: [(0,
                                                                                                        i.jsx)("img", {
                                                                                                            decoding: "async",
                                                                                                            src: "assets/images/single8.jpg",
                                                                                                            alt: "Ting Ting Tinga"
                                                                                                        }), (0,
                                                                                                            i.jsx)("span", {
                                                                                                                className: "overlay"
                                                                                                            })]
                                                                                                })
                                                                                        })
                                                                                })
                                                                        }), (0,
                                                                            i.jsxs)("div", {
                                                                                className: "desc",
                                                                                children: [(0,
                                                                                    i.jsx)("span", {
                                                                                        className: "category",
                                                                                        children: " Clothing, Fashion "
                                                                                    }), (0,
                                                                                        i.jsx)("h5", {
                                                                                            className: "name",
                                                                                            children: (0,
                                                                                                i.jsx)(n(), {
                                                                                                    legacyBehavior: !0,
                                                                                                    href: "https://tingtingtinga.com/",
                                                                                                    children: (0,
                                                                                                        i.jsx)("a", {
                                                                                                            children: "Ting Ting Tinga"
                                                                                                        })
                                                                                                })
                                                                                        }), (0,
                                                                                            i.jsx)("div", {
                                                                                                className: "text",
                                                                                                children: (0,
                                                                                                    i.jsx)("p", {
                                                                                                        children: "Welcome to Tinga, your fun-loving companion, where quirkiness and playfulness infuse every moment, creating cherished memories in a cozy, lively atmosphere."
                                                                                                    })
                                                                                            }), (0,
                                                                                                i.jsx)(n(), {
                                                                                                    legacyBehavior: !0,
                                                                                                    href: "https://tingtingtinga.com/",
                                                                                                    children: (0,
                                                                                                        i.jsx)("a", {
                                                                                                            className: "lnk",
                                                                                                            children: "See project"
                                                                                                        })
                                                                                                })]
                                                                            }), (0,
                                                                                i.jsx)("div", {
                                                                                    className: "bg-img",
                                                                                    style: {
                                                                                        backgroundImage: "url(assets/images/pat-2.png)"
                                                                                    }
                                                                                })]
                                                                })
                                                        }), (0,
                                                            i.jsx)("div", {
                                                                className: "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ",
                                                                children: (0,
                                                                    i.jsxs)("div", {
                                                                        className: "works-item scrolla-element-anim-1 scroll-animate",
                                                                        "data-animate": "active",
                                                                        children: [(0,
                                                                            i.jsx)("div", {
                                                                                className: "image",
                                                                                children: (0,
                                                                                    i.jsx)("div", {
                                                                                        className: "img",
                                                                                        children: (0,
                                                                                            i.jsx)(n(), {
                                                                                                legacyBehavior: !0,
                                                                                                href: "https://entertainment.unifie.in/",
                                                                                                children: (0,
                                                                                                    i.jsxs)("a", {
                                                                                                        children: [(0,
                                                                                                            i.jsx)("img", {
                                                                                                                decoding: "async",
                                                                                                                src: "assets/images/single6.jpg",
                                                                                                                alt: "Unifie Entertainment"
                                                                                                            }), (0,
                                                                                                                i.jsx)("span", {
                                                                                                                    className: "overlay"
                                                                                                                })]
                                                                                                    })
                                                                                            })
                                                                                    })
                                                                            }), (0,
                                                                                i.jsxs)("div", {
                                                                                    className: "desc",
                                                                                    children: [(0,
                                                                                        i.jsx)("span", {
                                                                                            className: "category",
                                                                                            children: " Videos Production, Photography "
                                                                                        }), (0,
                                                                                            i.jsx)("h5", {
                                                                                                className: "name",
                                                                                                children: (0,
                                                                                                    i.jsx)(n(), {
                                                                                                        legacyBehavior: !0,
                                                                                                        href: "https://entertainment.unifie.in/",
                                                                                                        children: (0,
                                                                                                            i.jsx)("a", {
                                                                                                                children: "Unifie Entertainment"
                                                                                                            })
                                                                                                    })
                                                                                            }), (0,
                                                                                                i.jsx)("div", {
                                                                                                    className: "text",
                                                                                                    children: (0,
                                                                                                        i.jsx)("p", {
                                                                                                            children: "Animation, graphics, digital, and video production crafted with brilliance, love, precision, and care."
                                                                                                        })
                                                                                                }), (0,
                                                                                                    i.jsx)(n(), {
                                                                                                        legacyBehavior: !0,
                                                                                                        href: "https://entertainment.unifie.in/",
                                                                                                        children: (0,
                                                                                                            i.jsx)("a", {
                                                                                                                className: "lnk",
                                                                                                                children: "See project"
                                                                                                            })
                                                                                                    })]
                                                                                }), (0,
                                                                                    i.jsx)("div", {
                                                                                        className: "bg-img",
                                                                                        style: {
                                                                                            backgroundImage: "url(assets/images/pat-2.png)"
                                                                                        }
                                                                                    })]
                                                                    })
                                                            })]
                                })]
                        })
                })
        }
            ;
        s.default = d
    }
}]);
