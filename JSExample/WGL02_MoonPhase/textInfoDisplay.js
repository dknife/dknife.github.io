var today = new Date();

var phase = moonPhase();

var monthNum = today.getMonth();
var monthString;
switch(monthNum) {
	case 0: monthString = "January"; break;
	case 1: monthString = "February"; break;
	case 2: monthString = "March"; break;
	case 3: monthString = "April"; break;
	case 4: monthString = "May"; break;
	case 5: monthString = "June"; break;
	case 6: monthString = "July"; break;
	case 7: monthString = "August"; break;
	case 8: monthString = "September"; break;
	case 9: monthString = "October"; break;
	case 10: monthString = "November"; break;
	case 11: monthString = "December"; break;
}
document.write("<ul><li>Today is "  + monthString +", " +today.getDate()+ "," + today.getFullYear() + "</li>");
document.write('<li>달님 상태는 <b><span id="moonPhase">'+phase+'</span></b></li>');
document.write('<li>영민 - JavaScript+WebGL 연습</li></ul>');
	
function updatePhase() {
	
	var phase = moonPhase();
	var elMoonPhase = document.getElementById("moonPhase");
	elMoonPhase.textContent = phase;
}

setInterval(updatePhase, 40);
