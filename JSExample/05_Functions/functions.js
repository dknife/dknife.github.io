
var PI = 3.141592;


var today = new Date();

// simple function
function randomSimple() {
	return Math.random()*3+0.1;
}
// anonymous functions
var random = function() {
	return Math.random()*3+0.1;
};

var radSimple = randomSimple();
var rad = random();

// iffy: IIFE, immediately invoked function expression
var greeting = ( 
	function() {
		if(today.getHours()>18) return "good evening";
		if(today.getHours()>12) return "good afternoon";
		else return "good morning";	
	}()
	);

// multiple return values with array
function areaAndCircumference(radius) {
	var area = PI*radius*radius;
	var circ = 2*PI*radius;
	return [area, circ];
}


var result = areaAndCircumference(rad);

document.write("<br>radius 1: " + radSimple + ": random radius computed with a simple function");
document.write("<br>radius 2: " + rad + ": random radius computed with an anonymous function");
document.write("<br><b>"+greeting+ "</b><= result by immediately invoked function expression");
document.write("<br><b>area of circle with radius " + rad + " : " + result[0] + "</b><= radius generated with an anonymous function, an result computed with multi-return function");
document.write("<br><b>circumference of circle with radius " + rad + " : " + result[1] + "</b><= radius generated with an anonymous function, an result computed with multi-return function");
