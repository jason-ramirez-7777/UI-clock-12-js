function setupClock(element) {
	document.querySelector(element).innerHTML = '<div class="analog_clock_codexen"><div class="num num1"><div>1</div></div><div class="num num2"><div>2</div></div><div class="num num3"><div>3</div></div><div class="num num4"><div>4</div></div><div class="num num5"><div>5</div></div><div class="num num6"><div>6</div></div><div class="num num7"><div>7</div></div><div class="num num8"><div>8</div></div><div class="num num9"><div>9</div></div><div class="num num10"><div>10</div></div><div class="num num11"><div>11</div></div><div class="num num12"><div>12</div></div><div id="hr-hand"></div><div id="min-hand"></div><div id="sec-hand"></div></div>';

	setInterval(function(){
		var date = new Date();
		updateClock(date, element);
	}, 1000);
}

function setupTime(element) {
	setInterval(function(){
		var date = new Date();
		updateTime(date, element);
	}, 1000);
}

function updateClock(date, element){
	var secHand = document.querySelector(element + " .analog_clock_codexen #sec-hand").style;
	var minHand = document.querySelector(element + " .analog_clock_codexen #min-hand").style;
	var hrHand = document.querySelector(element + " .analog_clock_codexen #hr-hand").style;

	secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
	minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
	hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

function updateTime(date, element){
	var timeDiv = document.querySelector(element);
	var time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
	timeDiv.innerHTML = time;
}