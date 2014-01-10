function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.loading/" + s : s.substring(0, index) + "/com.r3mobile.loading/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.r3mobile.loading");
    this.__widgetId = "com.r3mobile.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget = Ti.UI.createView({
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.backdrop = Ti.UI.createView({
        opacity: .75,
        id: "backdrop"
    });
    $.__views.widget.add($.__views.backdrop);
    $.__views.container = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.widget.add($.__views.container);
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
        id: "message",
        textid: "working"
    });
    $.__views.container.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.types = {
        LIGHT: 0,
        DARK: 1,
        CLOUD: 2
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

          case exports.types.CLOUD:
            $.loader.width = "75dp";
            $.loader.height = "46dp";
            $.backdrop.backgroundColor = "#232323";
            $.message.color = "#ebebeb";
            $.loader.images = [ WPATH("/images/cloud/load-cloud1.png"), WPATH("/images/cloud/load-cloud2.png"), WPATH("/images/cloud/load-cloud3.png"), WPATH("/images/cloud/load-cloud4.png"), WPATH("/images/cloud/load-cloud5.png"), WPATH("/images/cloud/load-cloud6.png"), WPATH("/images/cloud/load-cloud7.png"), WPATH("/images/cloud/load-cloud8.png"), WPATH("/images/cloud/load-cloud9.png") ];
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
    };
    $.stop = function() {
        $.loader.stop();
    };
    $.setMessage = function(message) {
        $.message.text = message ? message : $.message.text;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;