/*START README
Need to place the fontawesome-webfont.ttf in the font folder

To style font:
---------------
".icon": {
font: {
fontSize: '25sp'
},
color: '#8fa6bc'
}

Programmatically create icon:
-----------------------------
var icon = Alloy.createWidget('iconicLabel','widget',{
	icon:"icon-save",
	color : 'yellow',
	fontSize : '50sp'
});
var img = Ti.UI.createImageView({
	image : icon.createIconFile()
});

END README*/

// import IconicFont libraries
var _fonts = {
	FontAwesome : require(WPATH('IconicFont')).IconicFont({
		font : WPATH('FontAwesome'),
		ligature : false
	}),
	LigatureSymbols : require(WPATH('IconicFont')).IconicFont({
		font : WPATH('LigatureSymbols'),
		ligature : false
	}),
	SSPika : require(WPATH('IconicFont')).IconicFont({
		font : WPATH('ti.ss-pika'),
		ligature : true
	})
};

// store of arguments
var _args = arguments[0] || {};

/**
 * using font family (default: FontAwesome)
 * @type {string}
 */
var _currentFont = 'FontAwesome';

/**
 * using icon
 * @type {string|Array.<string>}
 */
var _currentIcon = null;

/**
 * initalize a widget
 */
var _init = function() {
	// set font
	if (_.has(_args, 'font') && _.has(_args.font, 'fontFamily')) {
		if (!_.has(_fonts, _args.font.fontFamily)) {
			Ti.API.info('[IconicLabel] use one of ' + _.keys(_fonts).join(', '));
		} else {
			_currentFont = _args.font.fontFamily;
		}
	}
	var params = {
		fontFamily : _fonts[_currentFont].fontfamily()
	};
	$.icon.setFont(_.defaults(params, _args.font || {}));

	// set properties to Ti.UI.Label
	_.each(_args, function(value, key) {
		switch (key) {
			case 'font':
				break;
			case 'icon':
				exports.setIcon(value);
				break;
			case 'size':
				exports.setText(value);
				break;
			case 'text':
				exports.setText(value);
				break;
			case 'touchEnabled':
				exports.setTouchEnabled(value);
				break;
			case 'visible':
				exports.setVisible(value);
				break;
			case 'color':
				exports.setColor(value);
				break;
			case 'fontSize':
				exports.setFontSize(value);
				break;
			default:
				if (_.has($.icon, key)) {
					$.icon[key] = value;
				} else {
					Ti.API.info('[IconcFont] wrong parameter. (' + key + ')');
				}
				break;
		}
	});
};

/**
 * return font name.
 * @return {Object} font name and style.
 */
exports.getFont = function() {
	var obj = $.icon.getFont();
	obj.fontFamily = _currentFont;
	return obj;
};

/**
 * change font.
 * @param {Object} font name (default: FontAwesome) and style.
 */
exports.setFont = function(font) {
	if (!_.has(font, 'fontFamily')) {
		font.fontFamily = 'FontAwesome';
	} else if (!_.has(_fonts, font.fontFamily)) {
		Ti.API.info('[IconicLabel] use any one of ' + _.keys(_fonts).join(', '));
		return;
	}
	_currentFont = font.fontFamily;
	var params = {
		fontFamily : _fonts[_currentFont].fontfamily()
	};
	$.icon.setFont(_.defaults(params, font));
	if (_currentIcon !== null) {
		exports.setIcon(_currentIcon);
	}
};

/**
 * return icon name.
 * @return {string|Array.<string>} icon name or their array.
 */
exports.getIcon = function() {
	return _currentIcon;
};

/**
 * change icon.
 * @param {string|Array.<string>} arg name of icon or array of them.
 */
exports.setIcon = function(arg) {
	_currentIcon = arg;
	if (_.isArray(arg)) {
		var ary = _.map(arg, function(value) {
			return _fonts[_currentFont].icon(value);
		});
		$.icon.setText(ary.join(''));
	} else {
		$.icon.setText(_fonts[_currentFont].icon(arg));
	}
};

/**
 * override for alert.
 * @return {string} blank string.
 */
exports.getText = function() {
	Ti.API.info('[IconicLabel] use "icon" instead of "text".');
	return '';
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setText = function(text) {
	Ti.API.info('[IconicLabel] use "icon" instead of "text".');
};

/**
 * override for alert.
 * @return {string} blank string.
 */
exports.getTouchEnabled = function() {
	return $.icon.touchEnabled;
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setTouchEnabled = function(value) {
	$.icon.touchEnabled = value;
};

/**
 * override for alert.
 * @return {string} blank string.
 */
exports.getVisible = function() {
	return $.icon.visible;
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setVisible = function(value) {
	$.icon.visible = value;
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setColor = function(value) {
	$.icon.color = value;
};

/**
 * override for alert.
 * @param {string} text text.
 */
exports.setFontSize = function(value) {
	var _font = $.icon.font;
	_font.fontSize = value;
	$.icon.font = {};
	$.icon.font = _font;
};

/**
 * applies properties to Ti.UI.Label object.
 * @param {Object} params hash of properties to apply.
 */
exports.applyProperties = function(params) {
	var obj = {};
	_.each(params, function(value, key) {
		switch (key) {
			case 'font':
				exports.setFont(value);
				break;
			case 'icon':
				exports.setIcon(value);
				break;
			case 'text':
				Ti.API.info('[IconicLabel] use "icon" instead of "text".');
				break;
			case 'touchEnabled':
				exports.setTouchEnabled(value);
				break;
			case 'visible':
				exports.setVisible(value);
				break;
			case 'color':
				exports.setColor(value);
				break;
			case 'fontSize':
				exports.setFontSize(value);
				break;
			default:
				obj[key] = value;
				break;
		}
	});
	try {
		$.icon.applyProperties(obj);
	} catch (e) {
		$.icon.updateLayout(obj);
	}
};

/**
 * applies properties to Ti.UI.Label object.
 * @param {Object} params hash of properties to apply.
 * @deprecated use applyProperties().
 */
exports.updateLayout = function(params) {
	exports.applyProperties(params);
};

exports.createIconFile = function() {
	var fileName = 'icon-' + new Date().getTime() + '.png', file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);

	if (!file.exists()) {
		var blob = $.icon.toImage();

		// fix for Android
		if (blob.media)
			blob = blob.media;

		file.write(blob);
	}

	return file.nativePath;
},

// be delegated functions from Ti.UI.Label
_.each($.icon, function(value, key) {
	switch (key) {
		case 'font':
		case 'getFont':
		case 'setFont':
		case 'text':
		case 'getText':
		case 'setText':
		case 'setColor':
		case 'setFontSize':
		case 'applyProperties':
		case 'updateLayout':
			break;
		default:
			exports[key] = $.icon[key];
			break;
	}
});
var funcs = ['add', 'addEventListener', 'animate', 'convertPointToView', 'fireEvent', 'getAccessibilityHidden', 'getAccessibilityHint', 'getAccessibilityLabel', 'getAccessibilityValue', 'getAnchorPoint', 'getAnimatedCenter', 'getAutoLink', 'getBackgroundColor', 'getBackgroundDisabledColor', 'getBackgroundDisabledImage', 'getBackgroundFocusedColor', 'getBackgroundFocusedImage', 'getBackgroundGradient', 'getBackgroundImage', 'getBackgroundLeftCap', 'getBackgroundPaddingBottom', 'getBackgroundPaddingLeft', 'getBackgroundPaddingRight', 'getBackgroundPaddingTop', 'getBackgroundRepeat', 'getBackgroundSelectedColor', 'getBackgroundSelectedImage', 'getBackgroundTopCap', 'getBorderColor', 'getBorderRadius', 'getBorderWidth', 'getBottom', 'getBubbleParent', 'getCenter', 'getChildren', 'getColor', 'getEllipsize', 'getFocusable', 'getHeight', 'getHighlightedColor', 'getHorizontalWrap', 'getHtml', 'getKeepScreenOn', 'getLayout', 'getLeft', 'getMinimumFontSize', 'getOpacity', 'getRect', 'getRight', 'getShadowColor', 'getShadowOffset', 'getSize', 'getSoftKeyboardOnFocus', 'getTextAlign', 'getTextid', 'getTop', 'getTouchEnabled', 'getTransform', 'getVerticalAlign', 'getVisible', 'getWidth', 'getWordWrap', 'getZIndex', 'hide', 'remove', 'removeEventListener', 'setAccessibilityHidden', 'setAccessibilityHint', 'setAccessibilityLabel', 'setAccessibilityValue', 'setAnchorPoint', 'setAutoLink', 'setBackgroundColor', 'setBackgroundDisabledColor', 'setBackgroundDisabledImage', 'setBackgroundFocusedColor', 'setBackgroundFocusedImage', 'setBackgroundGradient', 'setBackgroundImage', 'setBackgroundLeftCap', 'setBackgroundPaddingBottom', 'setBackgroundPaddingLeft', 'setBackgroundPaddingRight', 'setBackgroundPaddingTop', 'setBackgroundRepeat', 'setBackgroundSelectedColor', 'setBackgroundSelectedImage', 'setBackgroundTopCap', 'setBorderColor', 'setBorderRadius', 'setBorderWidth', 'setBottom', 'setBubbleParent', 'setCenter', 'setColor', 'setEllipsize', 'setFocusable', 'setHeight', 'setHighlightedColor', 'setHorizontalWrap', 'setHtml', 'setKeepScreenOn', 'setLayout', 'setLeft', 'setMinimumFontSize', 'setOpacity', 'setRight', 'setShadowColor', 'setShadowOffset', 'setSoftKeyboardOnFocus', 'setTextAlign', 'setTextid', 'setTop', 'setTouchEnabled', 'setTransform', 'setVerticalAlign', 'setVisible', 'setWidth', 'setWordWrap', 'setZIndex', 'show', 'toImage'];
_.each(funcs, function(func) {
	if (!_.has(exports, func)) {
		exports[func] = $.icon[func];
	}
});

// initialize
_init();
