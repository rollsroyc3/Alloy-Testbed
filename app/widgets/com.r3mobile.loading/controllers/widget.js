/*START README
Example:
--------
<Require id="loading" type="widget" src="com.r3mobile.loading"></Require>
$.loading.init($.loading.types.DARK);
$.loading.start();
END README*/
exports.types = {
	LIGHT : 0,
	DARK : 1,
	CLOUD : 2
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
			case exports.types.CLOUD:
				$.loader.width = '75dp';
				$.loader.height = '46dp';
				$.backdrop.backgroundColor = '#232323';
				$.message.color = '#ebebeb';
				$.loader.images = [WPATH('/images/cloud/load-cloud1.png'), WPATH('/images/cloud/load-cloud2.png'), WPATH('/images/cloud/load-cloud3.png'), WPATH('/images/cloud/load-cloud4.png'), WPATH('/images/cloud/load-cloud5.png'), WPATH('/images/cloud/load-cloud6.png'), WPATH('/images/cloud/load-cloud7.png'), WPATH('/images/cloud/load-cloud8.png'), WPATH('/images/cloud/load-cloud9.png')];
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
};

$.stop = function() {
	$.loader.stop();
};

$.setMessage = function(message) {
	$.message.text = message ? message : $.message.text;
};
