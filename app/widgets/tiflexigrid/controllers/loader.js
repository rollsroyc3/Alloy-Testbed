/*START README
 Example:
 --------
 <Require id="loading" type="widget" src="com.r3mobile.loading"></Require>
 $.loading.init($.loading.types.DARK);
 $.loading.start();
 END README*/
var _args = arguments[0] || {};
exports.types = {
	LIGHT : 0,
	DARK : 1
};

$.init = function(type) {
	switch (type) {
		case exports.types.DARK:
			$.loader.width = '40dp';
			$.loader.height = '40dp';
			$.backdrop.backgroundColor = '#fff';
			$.message.color = '#000';
			$.loader.images = [WPATH('/images/dark/00.png'), WPATH('/images/dark/01.png'), WPATH('/images/dark/02.png'), WPATH('/images/dark/03.png'), WPATH('/images/dark/04.png'), WPATH('/images/dark/05.png'), WPATH('/images/dark/06.png'), WPATH('/images/dark/07.png'), WPATH('/images/dark/08.png'), WPATH('/images/dark/09.png'), WPATH('/images/dark/10.png'), WPATH('/images/dark/11.png')];
			break;
		case exports.types.LIGHT:
		default:
			$.loader.width = '40dp';
			$.loader.height = '40dp';
			$.backdrop.backgroundColor = '#232323';
			$.message.color = '#ebebeb';
			$.loader.images = [WPATH('/images/light/00.png'), WPATH('/images/light/01.png'), WPATH('/images/light/02.png'), WPATH('/images/light/03.png'), WPATH('/images/light/04.png'), WPATH('/images/light/05.png'), WPATH('/images/light/06.png'), WPATH('/images/light/07.png'), WPATH('/images/light/08.png'), WPATH('/images/light/09.png'), WPATH('/images/light/10.png'), WPATH('/images/light/11.png')];
			break;
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

if (_args.type >= 0) {
	$.init(_args.type);
}
