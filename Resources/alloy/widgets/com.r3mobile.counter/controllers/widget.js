function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.counter/" + s : s.substring(0, index) + "/com.r3mobile.counter/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function animate() {
        if (0 == counter) {
            clearTimeout(timeoutID);
            lblCounter.text = "";
            $.placeHolder.remove(lblCounter);
        } else switch (animation) {
          case exports.animations.ZOOMIN:
            scale = args.scale || 6;
            var matrix = Titanium.UI.create2DMatrix();
            matrix = matrix.scale(scale);
            var a = Ti.UI.createAnimation({
                transform: matrix,
                duration: animationDuration,
                opacity: 0
            });
            lblCounter.animate(a, function() {
                $.placeHolder.remove(lblCounter);
                lblCounter = null;
                counter--;
                lblCounter = getLabel();
                lblCounter.text = counter.toString();
                lblCounter.opacity = 1;
                $.placeHolder.add(lblCounter);
                timeoutID = setTimeout(function() {
                    animate();
                }, interval);
            });
            break;

          case exports.animations.ZOOMOUT:
            scale = args.scale || .2;
            var matrix = Titanium.UI.create2DMatrix();
            matrix = matrix.scale(scale);
            var a = Ti.UI.createAnimation({
                transform: matrix,
                duration: animationDuration,
                opacity: 0
            });
            lblCounter.animate(a, function() {
                $.placeHolder.remove(lblCounter);
                lblCounter = null;
                counter--;
                lblCounter = getLabel();
                lblCounter.text = counter.toString();
                lblCounter.opacity = 1;
                $.placeHolder.add(lblCounter);
                timeoutID = setTimeout(function() {
                    animate();
                }, interval);
            });
            break;

          case exports.animations.DROPDOWN:
            var a = Ti.UI.createAnimation({
                top: 150,
                duration: animationDuration
            });
            lblCounter.animate(a, function() {
                var b = Ti.UI.createAnimation({
                    top: 145,
                    duration: animationDuration / 8
                });
                lblCounter.animate(b, function() {
                    setTimeout(function() {
                        var c = Ti.UI.createAnimation({
                            bottom: 0,
                            opacity: 0,
                            duration: animationDuration / 2
                        });
                        lblCounter.animate(c, function() {
                            $.placeHolder.remove(lblCounter);
                            lblCounter = null;
                            counter--;
                            lblCounter = getLabel();
                            lblCounter.text = counter.toString();
                            lblCounter.opacity = 1;
                            $.placeHolder.add(lblCounter);
                            timeoutID = setTimeout(function() {
                                animate();
                            }, interval);
                        });
                    }, animationDuration / 2);
                });
            });
            break;

          case exports.animations.SLIDEUP:
            var a = Ti.UI.createAnimation({
                bottom: 150,
                duration: animationDuration
            });
            lblCounter.animate(a, function() {
                var b = Ti.UI.createAnimation({
                    bottom: 140,
                    duration: animationDuration / 8
                });
                lblCounter.animate(b, function() {
                    setTimeout(function() {
                        var c = Ti.UI.createAnimation({
                            top: 0,
                            opacity: 0,
                            duration: animationDuration / 2
                        });
                        lblCounter.animate(c, function() {
                            $.placeHolder.remove(lblCounter);
                            lblCounter = null;
                            counter--;
                            lblCounter = getLabel();
                            lblCounter.text = counter.toString();
                            lblCounter.opacity = 1;
                            $.placeHolder.add(lblCounter);
                            timeoutID = setTimeout(function() {
                                animate();
                            }, interval);
                        });
                    }, animationDuration / 2);
                });
            });
        }
    }
    function getLabel() {
        var lbl = void 0;
        switch (animation) {
          case exports.animations.ZOOMIN:
            lbl = Ti.UI.createLabel({
                text: counter.toString(),
                font: {
                    fontFamily: fontFamily,
                    fontSize: fontSize
                }
            });
            break;

          case exports.animations.ZOOMOUT:
            lbl = Ti.UI.createLabel({
                text: counter.toString(),
                font: {
                    fontFamily: fontFamily,
                    fontSize: fontSize
                }
            });
            break;

          case exports.animations.DROPDOWN:
            lbl = Ti.UI.createLabel({
                top: -200,
                text: counter.toString(),
                font: {
                    fontFamily: fontFamily,
                    fontSize: fontSize
                }
            });
            break;

          case exports.animations.SLIDEUP:
            lbl = Ti.UI.createLabel({
                bottom: -200,
                text: counter.toString(),
                font: {
                    fontFamily: fontFamily,
                    fontSize: fontSize
                }
            });
        }
        return lbl;
    }
    new (require("alloy/widget"))("com.r3mobile.counter");
    this.__widgetId = "com.r3mobile.counter";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.placeHolder = Ti.UI.createView({
        id: "placeHolder"
    });
    $.__views.placeHolder && $.addTopLevelView($.__views.placeHolder);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    exports.animations = {
        ZOOMIN: 0,
        ZOOMOUT: 1,
        DROPDOWN: 2,
        SLIDEUP: 3
    };
    var fontFamily = args.fontFamily || "Tequilla Sunrise";
    var fontSize = args.fontSize || "60dp";
    var counter = args.counter || 10;
    var animation = args.animation || exports.animations.ZOOMOUT;
    var scale = void 0;
    var interval = args.interval || 0;
    var animationDuration = args.animationDuration || 1500;
    var timeoutID = 0;
    var lblCounter = getLabel();
    $.placeHolder.add(lblCounter);
    animate();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;