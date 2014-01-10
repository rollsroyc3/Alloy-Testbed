function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.counter/" + s : s.substring(0, index) + "/com.r3mobile.counter/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0027,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
} ];