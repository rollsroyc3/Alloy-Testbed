function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "tiflexigrid/" + s : s.substring(0, index) + "/tiflexigrid/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("tiflexigrid");
    this.__widgetId = "tiflexigrid";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loader";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        opacity: 0,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.backdrop = Ti.UI.createView({
        opacity: .75,
        id: "backdrop"
    });
    $.__views.main.add($.__views.backdrop);
    $.__views.container = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.main.add($.__views.container);
    $.__views.loader = Ti.UI.createImageView({
        id: "loader"
    });
    $.__views.container.add($.__views.loader);
    $.__views.message = Ti.UI.createLabel({
        top: "3dp",
        textAlign: "center",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: "12dp",
            fontWeight: "bold",
            fontFamily: "Quicksand-Bold"
        },
        text: "Loading",
        id: "message"
    });
    $.__views.container.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    exports.types = {
        LIGHT: 0,
        DARK: 1
    };
    $.init = function(type) {
        switch (type) {
          case exports.types.DARK:
            $.loader.width = "40dp";
            $.loader.height = "40dp";
            $.backdrop.backgroundColor = "#fff";
            $.message.color = "#000";
            $.loader.images = [ WPATH("/images/dark/00.png"), WPATH("/images/dark/01.png"), WPATH("/images/dark/02.png"), WPATH("/images/dark/03.png"), WPATH("/images/dark/04.png"), WPATH("/images/dark/05.png"), WPATH("/images/dark/06.png"), WPATH("/images/dark/07.png"), WPATH("/images/dark/08.png"), WPATH("/images/dark/09.png"), WPATH("/images/dark/10.png"), WPATH("/images/dark/11.png") ];
            break;

          case exports.types.LIGHT:
          default:
            $.loader.width = "40dp";
            $.loader.height = "40dp";
            $.backdrop.backgroundColor = "#232323";
            $.message.color = "#ebebeb";
            $.loader.images = [ WPATH("/images/light/00.png"), WPATH("/images/light/01.png"), WPATH("/images/light/02.png"), WPATH("/images/light/03.png"), WPATH("/images/light/04.png"), WPATH("/images/light/05.png"), WPATH("/images/light/06.png"), WPATH("/images/light/07.png"), WPATH("/images/light/08.png"), WPATH("/images/light/09.png"), WPATH("/images/light/10.png"), WPATH("/images/light/11.png") ];
        }
    };
    $.start = function(message) {
        $.message.text = message ? message : $.message.text;
        $.loader.start();
        $.main.opacity = 1;
    };
    $.stop = function() {
        $.loader.stop();
        $.main.opacity = 0;
    };
    $.setMessage = function(message) {
        $.message.text = message ? message : $.message.text;
    };
    _args.type >= 0 && $.init(_args.type);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;