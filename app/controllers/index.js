// function IndexOpen(e) {
// $.logo.init({ image: '/appicon.png', width: 216, height: 200 });
// }

// $.drawer.init({
// mainWindow : $.index,
// buttons : [{
// id : 'One',
// title : 'One',
// backgroundColor : 'red',
// click : function(e) {
// alert("One");
// }
// }, {
// id : 'Two',
// title : 'Two',
// backgroundColor : 'yellow',
// click : function(e) {
// alert("Two");
// }
// }, {
// id : 'Three',
// title : 'Three',
// backgroundColor : 'orange',
// color : 'white',
// click : function(e) {
// alert("Three");
// }
// }],
// autoClose : true,
// gutter : 5
// });




// //SOME SAMPLE DATA
// var items = [
    // {title:'sample 1', image:'http://www.lorempixel.com/700/600/'},
    // {title:'sample 2', image:'http://www.lorempixel.com/900/1200/'},
    // {title:'sample 3', image:'http://www.lorempixel.com/400/300/'},
    // {title:'sample 4', image:'http://www.lorempixel.com/600/600/'},
    // {title:'sample 5', image:'http://www.lorempixel.com/400/310/'},
    // {title:'sample 6', image:'http://www.lorempixel.com/410/300/'},
    // {title:'sample 7', image:'http://www.lorempixel.com/500/300/'},
    // {title:'sample 8', image:'http://www.lorempixel.com/300/300/'},
    // {title:'sample 9', image:'http://www.lorempixel.com/450/320/'},
    // {title:'sample 10', image:'http://www.lorempixel.com/500/400/'},
    // {title:'sample 11', image:'http://www.lorempixel.com/500/560/'},
    // {title:'sample 12', image:'http://www.lorempixel.com/700/400/'},
    // {title:'sample 13', image:'http://www.lorempixel.com/300/400/'},
    // {title:'sample 14', image:'http://www.lorempixel.com/500/500/'},
    // {title:'sample 15', image:'http://www.lorempixel.com/700/390/'}
// ];
// 
// $.fg.createGrid({
    // columns:2,              //NUMBER OF COLUMNS. DEFAULT IS 4.
    // space:10,               //SPACE BETWEEN EACH ELEMENT. DEFAULT IS 5.
    // data:items,             //ARRAY WITH THE DATA TO DISPLAY. SEE SAMPLE DATA ABOVE.
    // layout:'gallery',               //LAYOUT TYPE: gallery or customView. DEFAULT IS gallery.
    // params:{
        // padding:5,          //GALLERY ONLY.
        // showTitle:false,        //GALLERY ONLY. True or False
        // handleRotate : true, //GALLERY ONLY. True or False
        // backgroundColor: '#eee',
        // gridColor: '#ccc'
    // }
    // //width: 320                //OPTIONAL. SCREEN'S WIDTH TO ADJUST GRID.
// });






$.index.open();

//var Font = require('/lib/FontAwesome');
//var font = new Font();

// var imageView = Ti.UI.createLabel({
	// text : 'test',
	// id : 'move',
	// //text : font.getText('icon-anchor'),
	// // font : {
		// // fontFamily : font.fontfamily,
		// // fontSize : '50sp'
	// // },
	// color : 'white',
	// top : Ti.Platform.displayCaps.platformHeight / 2,
	// left : Ti.Platform.displayCaps.platformWidth / 2
// });
// $.win.add(imageView);

// var touchMoveBase = {
	// set: function(point) {
		// this.x = point.x;
		// this.y = point.y;
	// }
// };

// var position = {top: imageView.top, left: imageView.left};
// var olt = Titanium.UI.create3DMatrix(), curX, curY;
// imageView.addEventListener('touchstart', function(e) {
	// curX = e.x;
	// curY = e.y;
// });
// imageView.addEventListener('touchmove', function(e) {
	// var deltaX = e.x - curX, deltaY = e.y - curY;
	// olt = olt.translate(deltaX, deltaY, 0);
	// imageView.animate({
		// transform : olt,
		// duration : 100
	// });
// });
// $.win.addEventListener('touchmove', function(e) {
	// Ti.API.info(e.source.id + ' - ' + e.x);	
	// return;
	// if (e.source.id == 'win'){
// 		
		// //Ti.API.info(e.source.id + ' - ' + e.x);	
	// }else{
		// //run move code?
	// }
// 	
// });
// var view = Ti.UI.createView({
	// top : 0,
	// left : 0,
	// width : '50dp',
	// height : '50dp',
	// borderColor : 'white',
	// borderRadius : 0,
	// borderWidth : 1,
	// touchEnabled : false
// });
// $.index.add(view);

// var icon = Alloy.createWidget('com.r3mobile.iconicLabel','',{
// icon:"icon-save",
// color : 'yellow',
// fontSize : '100sp'
// });
// var img = Ti.UI.createImageView({
// image : icon.createIconFile(),
// top : 20
// });
// $.index.add(img);
//
// icon.setIcon('icon-home');
// icon.setColor('red');
// icon.setFontSize('50sp');
//
// var img2 = Ti.UI.createImageView({
// image : icon.createIconFile(),
// top : 200,
// });
// $.index.add(img2);

// setTimeout(function() {
// $.loading.init($.loading.types.DARK);
// $.loading.start();
// //$.drawer.jiggle();
// }, 2000);
