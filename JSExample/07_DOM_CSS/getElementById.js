// Select the element and store it in a variable.
var el = document.getElementById('one');

// Change the value of the class attribute.
el.className = 'cool';

function makeCool() {
	var els = document.querySelectorAll('li.hot');
	for(var i=0; i<els.length; i++) {
		els[i].className = 'cool';
	}
}
setTimeout(makeCool, 1000);

document.write("<ul> Last Modified: "+ document.lastModified + "</li>");