function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.bouncylogo/" + s : s.substring(0, index) + "/com.appcelerator.bouncylogo/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function BouncyLogoInit(args) {
        $._params = _.defaults(args, defaults);
        $.imageview.image = $._params.image;
        $.imageview.width = $._params.width;
        $.imageview.height = $._params.height;
        BouncyLogoBounce($._params);
        Ti.Gesture.addEventListener("orientationchange", BouncyLogoRelayout);
    }
    function BouncyLogoBounce(args) {
        var w = Ti.Platform.displayCaps.platformWidth;
        var h = Ti.Platform.displayCaps.platformHeight;
        (w - args.width) / 2;
        var top = (h - args.height) / 2;
        var chain = [ Ti.UI.createAnimation({
            top: -h,
            opacity: 0,
            duration: args.durationIn
        }), Ti.UI.createAnimation({
            top: top + args.height * args.bounciness,
            opacity: 1,
            duration: args.durationIn
        }), Ti.UI.createAnimation({
            top: top - .5 * args.height * args.bounciness,
            opacity: 1,
            duration: args.durationBounce
        }), Ti.UI.createAnimation({
            top: top,
            duration: args.durationBounce
        }), Ti.UI.createAnimation({
            opacity: args.opacity,
            duration: args.durationFade
        }) ];
        animation.chainAnimate($.imageview, chain, args.finishCallback);
    }
    function BouncyLogoRelayout() {
        var w = Ti.Platform.displayCaps.platformWidth;
        var h = Ti.Platform.displayCaps.platformHeight;
        var left = (w - $._params.width) / 2;
        var top = (h - $._params.height) / 2;
        var chain = [ Ti.UI.createAnimation({
            opacity: 0,
            duration: 100
        }), Ti.UI.createAnimation({
            left: left,
            top: top,
            duration: 100
        }), Ti.UI.createAnimation({
            opacity: $._params.opacity,
            duration: $._params.durationIn
        }) ];
        Ti.API.info("BouncyLogo animating on re-orientation " + Ti.Gesture.orientation + " (" + w + "x" + h + ")");
        animation.chainAnimate($.imageview, chain);
    }
    function BouncyLogoReset() {
        BouncyLogoBounce($._params);
    }
    function BouncyLogoHide(duration) {
        duration && animation.fadeOut($.imageview, duration || 500);
        $.imageview.visible = 0;
    }
    new (require("alloy/widget"))("com.appcelerator.bouncylogo");
    this.__widgetId = "com.appcelerator.bouncylogo";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.imageview = Ti.UI.createImageView({
        bottom: "100%",
        opacity: 0,
        id: "imageview"
    });
    $.__views.imageview && $.addTopLevelView($.__views.imageview);
    BouncyLogoReset ? $.__views.imageview.addEventListener("click", BouncyLogoReset) : __defers["$.__views.imageview!click!BouncyLogoReset"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var defaults = {
        opacity: .5,
        durationIn: 1e3,
        durationBounce: 500,
        durationFade: 2e3,
        bounciness: .25
    };
    var animation = require("alloy/animation");
    exports.init = BouncyLogoInit;
    exports.relayout = BouncyLogoRelayout;
    exports.reset = BouncyLogoReset;
    exports.hide = BouncyLogoHide;
    __defers["$.__views.imageview!click!BouncyLogoReset"] && $.__views.imageview.addEventListener("click", BouncyLogoReset);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;