self.__BUILD_MANIFEST = function (s, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/309-c8f4f5226d5edda7.js", e, "static/chunks/pages/index-292fa4720b3c3e60.js"],
        "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
        "/blog": [s, e, "static/chunks/pages/blog-a21238a9b3b5f421.js"],
        "/blog-single": [s, e, "static/chunks/pages/blog-single-09643c9121f10e67.js"],
        "/work-single": [s, e, "static/chunks/pages/work-single-9f1228ca0a2e81bc.js"],
        "/works": [s, e, "static/chunks/pages/works-155add72da551a78.js"],
        "/works-list": [s, e, "static/chunks/pages/works-list-df857226cce46d19.js"],
        sortedPages: ["/", "/_app", "/_error", "/blog", "/blog-single", "/work-single", "/works", "/works-list"]
    }
}("static/chunks/239-a45319878b27cf50.js", "static/chunks/935-375c4e44c630758c.js"),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
