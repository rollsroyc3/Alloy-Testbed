function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.buttonOptions = Ti.UI.createView({
        layout: "vertical",
        id: "buttonOptions"
    });
    $.__views.win.add($.__views.buttonOptions);
    $.__views.counter = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "counter",
        id: "counter"
    });
    $.__views.buttonOptions.add($.__views.counter);
    $.__views.maskTextbox = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "maskTextbox",
        id: "maskTextbox"
    });
    $.__views.buttonOptions.add($.__views.maskTextbox);
    $.__views.iconicLabel = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "iconicLabel",
        id: "iconicLabel"
    });
    $.__views.buttonOptions.add($.__views.iconicLabel);
    $.__views.loading = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "loading",
        id: "loading"
    });
    $.__views.buttonOptions.add($.__views.loading);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.counter.addEventListener("click", function() {
        var widget = Alloy.createWidget("com.r3mobile.counter");
        widget.complete = function() {
            $.win.remove(widget.getView());
        };
        $.win.add(widget.getView());
        widget.start();
    });
    $.maskTextbox.addEventListener("click", function() {
        var widget = Alloy.createWidget("com.r3mobile.maskTextbox");
        $.win.add(widget.getView());
    });
    $.iconicLabel.addEventListener("click", function() {
        var widget = Alloy.createWidget("com.r3mobile.iconicLabel");
        $.win.add(widget.getView());
    });
    $.loading.addEventListener("click", function() {
        var widget = Alloy.createWidget("com.r3mobile.loading");
        $.win.add(widget.getView());
    });
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;