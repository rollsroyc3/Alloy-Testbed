//http://developer.appcelerator.com/question/143438/make-a-mask-text-edit-control-for-phone-numbers-or-date-possible
/*START README
<Require type="widget" src="com.r3mobile.maskTextbox" mask="phone" hintText="testing" id="txtMask"/>
END README*/
var _args = arguments[0] || {};

var Mask = {
	mask : function(_field, _function) {
		if (Mask[_function]){
			_field.value = Mask[_function](_field.value);
		}else{
			alert('Mask does not exist!');
		}
	},

	postcode : function(v) {
		v = v.replace(/D/g, "");
		v = v.replace(/^(\d{5})(\d)/, "$1-$2");
		return v.slice(0, 9);
	},

	insurancenumber : function(v) {
		v = v.replace(/D/g, "");
		v = v.replace(/^(\d{3})(\d{2})(\d)/, "$1-$2-$3");
		return v.slice(0, 11);
	},

	date : function(v) {
		v = v.replace(/D/g, "");
		v = v.replace(/^(\d\d)(\d)/, "$1/$2");
		v = v.replace(/^(\d{2}\/\d{2})(\d)/, "$1/$2");
		return v.slice(0, 10);
	},

	phone : function(v) {
		////(555) 555-5555
		// v = v.replace(/\D/g,"");
		// v = v.replace(/^(\d\d\d)(\d)/g,"($1) $2");
		// v = v.replace(/(\d{3})(\d)/,"$1-$2");
		// return v.slice(0, 14);

		//555-555-5555
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d\d\d)(\d)/g, "$1-$2");
		v = v.replace(/(\d{3})(\d)/, "$1-$2");
		return v.slice(0, 12);
	}
};

$.txtMasked.hintText = _args.hintText ? _args.hintText : '';

module.exports.value = function() {
	return $.txtMasked.value;
};
$.txtMasked.addEventListener("change", function() {
	Mask.mask($.txtMasked, _args.mask);
});
