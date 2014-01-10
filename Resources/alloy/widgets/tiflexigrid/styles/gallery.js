function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "tiflexigrid/" + s : s.substring(0, index) + "/tiflexigrid/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0015,
    key: "fgThumb",
    style: {
        backgroundColor: "#eee"
    }
}, {
    isApi: true,
    priority: 1000.0016,
    key: "fgImage",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "fgMainView",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        backgroundColor: "transparent",
        zIndex: 0
    }
} ];