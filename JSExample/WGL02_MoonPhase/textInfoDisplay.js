var today = new Date();

var phase = moonPhase();

var monthNum = today.getMonth();

document.write("<ul><li>Today is "  +(today.getMonth()+1)+", " +today.getDate()+ "," + today.getFullYear() + "</li>");
document.write('<li>달님 상태는 <b><span id="moonPhase">'+phase+'</span></b></li>');
document.write('<li>영민 - JavaScript+WebGL 연습</li></ul>');
	
function updatePhase() {
	
	var phase = moonPhase();
	var elMoonPhase = document.getElementById("moonPhase");
	elMoonPhase.textContent = phase;
}

setInterval(updatePhase, 40);
