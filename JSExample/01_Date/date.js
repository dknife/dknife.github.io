var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) greeting="Good Evening!";
else if(hourNow>12) greeting="Good Afternoon";
else if(hourNow>4) greeting="Good Morning";
else greeting="Welcome";

document.write("Date:" + today.toString() + "<br>");
document.write("<h3>"+greeting+"</h3>");