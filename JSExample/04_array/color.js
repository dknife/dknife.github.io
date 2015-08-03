var colors;
colors = ["red", 
		"black", 
		"blue", 
		"cyan",
		"lightgray", 
		"magenta", 
		"yellow"];

var today = new Date();
var i = Math.floor(Math.random()*7);

var el = document.getElementById('randomColor');
el.textContent = colors[i];
el.style.color = colors[i];

document.write("<br><br>random number="+i.toString());
document.write("<br><br><a href=./index.html>reload</a>");