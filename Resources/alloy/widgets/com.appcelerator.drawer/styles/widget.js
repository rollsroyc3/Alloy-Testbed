function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.drawer/" + s : s.substring(0, index) + "/com.appcelerator.drawer/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0004,
    key: "drawer",
    style: {
        left: 0,
        right: 0,
        bottom: -48,
        width: Ti.UI.FILL,
        height: 64,
        layout: "vertical",
        opacity: .75
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "pulltab",
    style: {
        backgroundImage: "/images/com.appcelerator.drawer/PullTabUp.png",
        center: {
            x: "50%"
        },
        top: 0,
        width: 48,
        height: 16,
        accessibilityLabel: "Drawer",
        accessibilityValue: "Closed",
        accessibilityHint: "Click to open the drawer"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "buttonbar",
    style: {
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: 48,
        backgroundColor: "black",
        layout: "horizontal"
    }
} ];