var args = arguments[0] || {};

exports.animations = {
	ZOOMIN : 0,
	ZOOMOUT : 1,
	DROPDOWN : 2,
	SLIDEUP : 3
};

var fontFamily = args.fontFamily || 'Tequilla Sunrise';
var fontSize = args.fontSize || '60dp';
var count = args.count || 10;
var animation = args.animation || exports.animations.ZOOMOUT;
var scale = undefined;
var interval = args.interval || 0;
var animationDuration = args.animationDuration || 1500;
var timeoutID = 0;
var lblCounter = getLabel();

function animate() {
	if (count == 0) {
		clearTimeout(timeoutID);
		lblCounter.text = '';
		$.placeHolder.remove(lblCounter);
		$.complete();
	} else {
		switch(animation) {
			case exports.animations.ZOOMIN:
				scale = args.scale || 6;

				//Image starts in center and blows up and becomes transparent
				var matrix = Titanium.UI.create2DMatrix();
				matrix = matrix.scale(scale);

				var a = Ti.UI.createAnimation({
					transform : matrix,
					duration : animationDuration,
					opacity : 0
					//autoreverse : true,
					//repeat : 3
				});
				lblCounter.animate(a, function() {
					$.placeHolder.remove(lblCounter);
					lblCounter = null;

					count--;

					lblCounter = getLabel();
					lblCounter.text = count.toString();
					lblCounter.opacity = 1;
					$.placeHolder.add(lblCounter);

					timeoutID = setTimeout(function() {
						animate();
					}, interval);
				});
				break;
			case exports.animations.ZOOMOUT:
				scale = args.scale || .2;

				//Image starts in center and gets smaller and becomes transparent
				var matrix = Titanium.UI.create2DMatrix();
				matrix = matrix.scale(scale);

				var a = Ti.UI.createAnimation({
					transform : matrix,
					duration : animationDuration,
					opacity : 0
					//autoreverse : true,
					//repeat : 3
				});
				lblCounter.animate(a, function() {
					$.placeHolder.remove(lblCounter);
					lblCounter = null;

					count--;

					lblCounter = getLabel();
					lblCounter.text = count.toString();
					lblCounter.opacity = 1;
					$.placeHolder.add(lblCounter);

					timeoutID = setTimeout(function() {
						animate();
					}, interval);
				});
				break;
			case exports.animations.DROPDOWN:
				//Image drops from above screen, bounces, then drops off screen.
				var a = Ti.UI.createAnimation({
					top : 150,
					duration : animationDuration,
					//autoreverse : true,
					//repeat : 3
				});
				lblCounter.animate(a, function() {
					//bounce
					var b = Ti.UI.createAnimation({
						top : 145,
						duration : animationDuration / 8
					});
					lblCounter.animate(b, function() {
						//After bounce, let sit for fraction of animation duration
						setTimeout(function() {
							//drop off screen
							var c = Ti.UI.createAnimation({
								bottom : 0,
								opacity : 0,
								duration : animationDuration / 2
							});
							lblCounter.animate(c, function() {
								$.placeHolder.remove(lblCounter);
								lblCounter = null;

								count--;

								lblCounter = getLabel();
								lblCounter.text = count.toString();
								lblCounter.opacity = 1;
								$.placeHolder.add(lblCounter);

								timeoutID = setTimeout(function() {
									animate();
								}, interval);
							});
						}, animationDuration / 2);
					});
				});
				break;
			case exports.animations.SLIDEUP:
				//Image slides from below screen, bounces, then raises off screen.
				var a = Ti.UI.createAnimation({
					bottom : 150,
					duration : animationDuration,
					//autoreverse : true,
					//repeat : 3
				});
				lblCounter.animate(a, function() {
					//bounce
					var b = Ti.UI.createAnimation({
						bottom : 140,
						duration : animationDuration / 8
					});
					lblCounter.animate(b, function() {
						//After bounce, let sit for fraction of animation duration
						setTimeout(function() {
							//raise off screen
							var c = Ti.UI.createAnimation({
								top : 0,
								opacity : 0,
								duration : animationDuration / 2
							});
							lblCounter.animate(c, function() {
								$.placeHolder.remove(lblCounter);
								lblCounter = null;

								count--;

								lblCounter = getLabel();
								lblCounter.text = count.toString();
								lblCounter.opacity = 1;
								$.placeHolder.add(lblCounter);

								timeoutID = setTimeout(function() {
									animate();
								}, interval);
							});
						}, animationDuration / 2);
					});
				});
				break;
		}
	}
}

function getLabel() {
	var lbl = undefined;
	switch(animation) {
		case exports.animations.ZOOMIN:
			lbl = Ti.UI.createLabel({
				text : count.toString(),
				font : {
					fontFamily : fontFamily,
					fontSize : fontSize
				}
			});
			break;
		case exports.animations.ZOOMOUT:
			lbl = Ti.UI.createLabel({
				text : count.toString(),
				font : {
					fontFamily : fontFamily,
					fontSize : fontSize
				}
			});
			break;
		case exports.animations.DROPDOWN:
			lbl = Ti.UI.createLabel({
				top : -200,
				//bottom : Ti.Platform.displayCaps.platformHeight,
				text : count.toString(),
				font : {
					fontFamily : fontFamily,
					fontSize : fontSize
				}
			});
			break;
		case exports.animations.SLIDEUP:
			lbl = Ti.UI.createLabel({
				bottom : -200,
				//bottom : Ti.Platform.displayCaps.platformHeight,
				text : count.toString(),
				font : {
					fontFamily : fontFamily,
					fontSize : fontSize
				}
			});
			break;
	}
	return lbl;
}

$.placeHolder.add(lblCounter);

$.start = function() {
	animate();
};

