function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.loading/" + s : s.substring(0, index) + "/com.r3mobile.loading/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0008,
    key: "container",
    style: {
        layout: "vertical",
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "backdrop",
    style: {
        opacity: .75
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "message",
    style: {
        top: "3dp",
        textAlign: "center",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: "12dp",
            fontWeight: "bold",
            fontFamily: "Quicksand-Bold"
        }
    }
} ];