function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.r3mobile.maskTextbox/" + s : s.substring(0, index) + "/com.r3mobile.maskTextbox/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.r3mobile.maskTextbox");
    this.__widgetId = "com.r3mobile.maskTextbox";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.txtMasked = Ti.UI.createTextField({
        id: "txtMasked"
    });
    $.__views.txtMasked && $.addTopLevelView($.__views.txtMasked);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    var Mask = {
        mask: function(_field, _function) {
            Mask[_function] ? _field.value = Mask[_function](_field.value) : alert("Mask does not exist!");
        },
        postcode: function(v) {
            v = v.replace(/D/g, "");
            v = v.replace(/^(\d{5})(\d)/, "$1-$2");
            return v.slice(0, 9);
        },
        insurancenumber: function(v) {
            v = v.replace(/D/g, "");
            v = v.replace(/^(\d{3})(\d{2})(\d)/, "$1-$2-$3");
            return v.slice(0, 11);
        },
        date: function(v) {
            v = v.replace(/D/g, "");
            v = v.replace(/^(\d\d)(\d)/, "$1/$2");
            v = v.replace(/^(\d{2}\/\d{2})(\d)/, "$1/$2");
            return v.slice(0, 10);
        },
        phone: function(v) {
            v = v.replace(/\D/g, "");
            v = v.replace(/^(\d\d\d)(\d)/g, "$1-$2");
            v = v.replace(/(\d{3})(\d)/, "$1-$2");
            return v.slice(0, 12);
        }
    };
    $.txtMasked.hintText = _args.hintText ? _args.hintText : "";
    module.exports.value = function() {
        return $.txtMasked.value;
    };
    $.txtMasked.addEventListener("change", function() {
        Mask.mask($.txtMasked, _args.mask);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;