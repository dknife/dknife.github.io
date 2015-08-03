var today = new Date();

document.write("<li><label for='year'>YEAR</label>");
document.write("<input type='number' id='year' value='"+(today.getYear()+1900)+"'/></li>");
document.write("<li><label for='month'>MONTH</label>");
document.write("<input type='number' id='month' value='"+(today.getMonth()+1)+"'/></li>");
document.write("<li><label for='date'>DAY</label>");
document.write("<input type='number' id='date' value='"+(today.getDate())+"'/>");
document.write("<input type='submit' id='compute' value='이 날 20:00시의 달님 계산!' /></li>")

function checkYear() {
	if(this.value<1900) {
		var feedbackArea =document.getElementById("feedback");
		feedbackArea.textContent = "Msg: 1900년 이후만 가능합니다.";
		return false;
	}
	return true;
}

function checkMonth() {
	if(this.value<1 || this.value>12) {
		var feedbackArea =document.getElementById("feedback");
		feedbackArea.textContent = "Msg: 1월부터 12월까지 입력하세요.";
		return false;
	}
	return true;
}

function checkDate() {
	if(this.value<0 || this.value>31) {
		var feedbackArea =document.getElementById("feedback");
		feedbackArea.textContent = "Msg: 1일부터 31일까지 가능합니다.";
		return false;
	}
	return true;
}


function computeMoon() {
	
	var date = new Date();
	var yEl = document.getElementById("year");
	var mEl = document.getElementById("month");
	var dEl = document.getElementById("date");
	date.setFullYear(yEl.value, mEl.value-1, dEl.value) ;

	draw("canvas2", date);
	
}

var yearInput = document.getElementById("year");
yearInput.onblur = checkYear;

var monthInput = document.getElementById("month");
monthInput.onblur = checkMonth;

var dateInput = document.getElementById("date");
dateInput.onblur = checkDate;

var computeButton = document.getElementById("compute");
computeButton.onclick = computeMoon;
