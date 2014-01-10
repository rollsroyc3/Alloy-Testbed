function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.iconicLabel/" + s : s.substring(0, index) + "/com.r3mobile.iconicLabel/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.r3mobile.iconicLabel");
    this.__widgetId = "com.r3mobile.iconicLabel";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.icon = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        textAlign: "center",
        id: "icon"
    });
    $.__views.icon && $.addTopLevelView($.__views.icon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _fonts = {
        FontAwesome: require(WPATH("IconicFont")).IconicFont({
            font: WPATH("FontAwesome"),
            ligature: false
        }),
        LigatureSymbols: require(WPATH("IconicFont")).IconicFont({
            font: WPATH("LigatureSymbols"),
            ligature: false
        }),
        SSPika: require(WPATH("IconicFont")).IconicFont({
            font: WPATH("ti.ss-pika"),
            ligature: true
        })
    };
    var _args = arguments[0] || {};
    var _currentFont = "FontAwesome";
    var _currentIcon = null;
    var _init = function() {
        _.has(_args, "font") && _.has(_args.font, "fontFamily") && (_.has(_fonts, _args.font.fontFamily) ? _currentFont = _args.font.fontFamily : Ti.API.info("[IconicLabel] use one of " + _.keys(_fonts).join(", ")));
        var params = {
            fontFamily: _fonts[_currentFont].fontfamily()
        };
        $.icon.setFont(_.defaults(params, _args.font || {}));
        _.each(_args, function(value, key) {
            switch (key) {
              case "font":
                break;

              case "icon":
                exports.setIcon(value);
                break;

              case "size":
                exports.setText(value);
                break;

              case "text":
                exports.setText(value);
                break;

              case "touchEnabled":
                exports.setTouchEnabled(value);
                break;

              case "visible":
                exports.setVisible(value);
                break;

              case "color":
                exports.setColor(value);
                break;

              case "fontSize":
                exports.setFontSize(value);
                break;

              default:
                _.has($.icon, key) ? $.icon[key] = value : Ti.API.info("[IconcFont] wrong parameter. (" + key + ")");
            }
        });
    };
    exports.getFont = function() {
        var obj = $.icon.getFont();
        obj.fontFamily = _currentFont;
        return obj;
    };
    exports.setFont = function(font) {
        if (_.has(font, "fontFamily")) {
            if (!_.has(_fonts, font.fontFamily)) {
                Ti.API.info("[IconicLabel] use any one of " + _.keys(_fonts).join(", "));
                return;
            }
        } else font.fontFamily = "FontAwesome";
        _currentFont = font.fontFamily;
        var params = {
            fontFamily: _fonts[_currentFont].fontfamily()
        };
        $.icon.setFont(_.defaults(params, font));
        null !== _currentIcon && exports.setIcon(_currentIcon);
    };
    exports.getIcon = function() {
        return _currentIcon;
    };
    exports.setIcon = function(arg) {
        _currentIcon = arg;
        if (_.isArray(arg)) {
            var ary = _.map(arg, function(value) {
                return _fonts[_currentFont].icon(value);
            });
            $.icon.setText(ary.join(""));
        } else $.icon.setText(_fonts[_currentFont].icon(arg));
    };
    exports.getText = function() {
        Ti.API.info('[IconicLabel] use "icon" instead of "text".');
        return "";
    };
    exports.setText = function() {
        Ti.API.info('[IconicLabel] use "icon" instead of "text".');
    };
    exports.getTouchEnabled = function() {
        return $.icon.touchEnabled;
    };
    exports.setTouchEnabled = function(value) {
        $.icon.touchEnabled = value;
    };
    exports.getVisible = function() {
        return $.icon.visible;
    };
    exports.setVisible = function(value) {
        $.icon.visible = value;
    };
    exports.setColor = function(value) {
        $.icon.color = value;
    };
    exports.setFontSize = function(value) {
        var _font = $.icon.font;
        _font.fontSize = value;
        $.icon.font = {};
        $.icon.font = _font;
    };
    exports.applyProperties = function(params) {
        var obj = {};
        _.each(params, function(value, key) {
            switch (key) {
              case "font":
                exports.setFont(value);
                break;

              case "icon":
                exports.setIcon(value);
                break;

              case "text":
                Ti.API.info('[IconicLabel] use "icon" instead of "text".');
                break;

              case "touchEnabled":
                exports.setTouchEnabled(value);
                break;

              case "visible":
                exports.setVisible(value);
                break;

              case "color":
                exports.setColor(value);
                break;

              case "fontSize":
                exports.setFontSize(value);
                break;

              default:
                obj[key] = value;
            }
        });
        try {
            $.icon.applyProperties(obj);
        } catch (e) {
            $.icon.updateLayout(obj);
        }
    };
    exports.updateLayout = function(params) {
        exports.applyProperties(params);
    };
    exports.createIconFile = function() {
        var fileName = "icon-" + new Date().getTime() + ".png", file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);
        if (!file.exists()) {
            var blob = $.icon.toImage();
            blob.media && (blob = blob.media);
            file.write(blob);
        }
        return file.nativePath;
    }, _.each($.icon, function(value, key) {
        switch (key) {
          case "font":
          case "getFont":
          case "setFont":
          case "text":
          case "getText":
          case "setText":
          case "setColor":
          case "setFontSize":
          case "applyProperties":
          case "updateLayout":
            break;

          default:
            exports[key] = $.icon[key];
        }
    });
    var funcs = [ "add", "addEventListener", "animate", "convertPointToView", "fireEvent", "getAccessibilityHidden", "getAccessibilityHint", "getAccessibilityLabel", "getAccessibilityValue", "getAnchorPoint", "getAnimatedCenter", "getAutoLink", "getBackgroundColor", "getBackgroundDisabledColor", "getBackgroundDisabledImage", "getBackgroundFocusedColor", "getBackgroundFocusedImage", "getBackgroundGradient", "getBackgroundImage", "getBackgroundLeftCap", "getBackgroundPaddingBottom", "getBackgroundPaddingLeft", "getBackgroundPaddingRight", "getBackgroundPaddingTop", "getBackgroundRepeat", "getBackgroundSelectedColor", "getBackgroundSelectedImage", "getBackgroundTopCap", "getBorderColor", "getBorderRadius", "getBorderWidth", "getBottom", "getBubbleParent", "getCenter", "getChildren", "getColor", "getEllipsize", "getFocusable", "getHeight", "getHighlightedColor", "getHorizontalWrap", "getHtml", "getKeepScreenOn", "getLayout", "getLeft", "getMinimumFontSize", "getOpacity", "getRect", "getRight", "getShadowColor", "getShadowOffset", "getSize", "getSoftKeyboardOnFocus", "getTextAlign", "getTextid", "getTop", "getTouchEnabled", "getTransform", "getVerticalAlign", "getVisible", "getWidth", "getWordWrap", "getZIndex", "hide", "remove", "removeEventListener", "setAccessibilityHidden", "setAccessibilityHint", "setAccessibilityLabel", "setAccessibilityValue", "setAnchorPoint", "setAutoLink", "setBackgroundColor", "setBackgroundDisabledColor", "setBackgroundDisabledImage", "setBackgroundFocusedColor", "setBackgroundFocusedImage", "setBackgroundGradient", "setBackgroundImage", "setBackgroundLeftCap", "setBackgroundPaddingBottom", "setBackgroundPaddingLeft", "setBackgroundPaddingRight", "setBackgroundPaddingTop", "setBackgroundRepeat", "setBackgroundSelectedColor", "setBackgroundSelectedImage", "setBackgroundTopCap", "setBorderColor", "setBorderRadius", "setBorderWidth", "setBottom", "setBubbleParent", "setCenter", "setColor", "setEllipsize", "setFocusable", "setHeight", "setHighlightedColor", "setHorizontalWrap", "setHtml", "setKeepScreenOn", "setLayout", "setLeft", "setMinimumFontSize", "setOpacity", "setRight", "setShadowColor", "setShadowOffset", "setSoftKeyboardOnFocus", "setTextAlign", "setTextid", "setTop", "setTouchEnabled", "setTransform", "setVerticalAlign", "setVisible", "setWidth", "setWordWrap", "setZIndex", "show", "toImage" ];
    _.each(funcs, function(func) {
        _.has(exports, func) || (exports[func] = $.icon[func]);
    });
    _init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;