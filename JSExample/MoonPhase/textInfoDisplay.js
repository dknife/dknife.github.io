var today = new Date();

var phase = moonPhase();

	  
document.write("<ul><li>오늘은 " + today.getFullYear() +"년 "+(today.getMonth()+1)+"월 "+today.getDate()+"일</li>");
document.write('<li>달님 상태는 <b><span id="moonPhase">'+phase+'</span></b></li>');
document.write('<li>영민 - JavaScript+WebGL 연습</li></ul>');

