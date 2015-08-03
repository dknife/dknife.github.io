function moonPhase() {
	var today = new Date();
	var start = new Date();
	start.setFullYear(1900, 0, 31);
	
	var milliSecPerDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	
	var todayMill = today.getTime()+today.getHours()*60*60*1000+today.getMinutes()*60*1000+ today.getSeconds()*1000 + today.getMilliseconds();
	
	// 1900. 1. 31. 10:22:38
	var startMill = start.getTime()+ 10*60*60*1000 + 22*60*1000 + 38*1000; //
	
	var diffDays = Math.abs((todayMill-startMill)/(milliSecPerDay));
	
	var phase = diffDays / 29.530588853
	phase -= Math.floor(phase);
	return phase;
}