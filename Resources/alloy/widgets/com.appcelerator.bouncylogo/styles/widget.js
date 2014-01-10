function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.bouncylogo/" + s : s.substring(0, index) + "/com.appcelerator.bouncylogo/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "imageview",
    style: {
        bottom: "100%",
        opacity: 0
    }
} ];