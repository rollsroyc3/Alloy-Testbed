function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.maskTextbox/" + s : s.substring(0, index) + "/com.r3mobile.maskTextbox/" + s.substring(index + 1);
    return path;
}

module.exports = [];