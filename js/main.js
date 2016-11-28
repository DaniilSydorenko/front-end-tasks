/**
 * Stopwatch
 */
var sField = document.getElementsByClassName('sec')[0];
var mField = document.getElementsByClassName('min')[0];
var startBtn = document.getElementsByClassName('start')[0];
var stopBtn = document.getElementsByClassName('stop')[0];
var clearBtn = document.getElementsByClassName('clear')[0];

var sec = 0;
var min = 0;
var timerId = null;

var add = function () {
	sec++;

	if (sec >= 60) {
		min++;
		sec = 0;
	}

	sField.textContent = (sec.toString().length == 1) ? "0" + sec : sec;
	mField.textContent = (min.toString().length == 1) ? "0" + min : min;

	runTime();
};

var runTime = function() {
	timerId = setTimeout(add, 1000);
};
runTime();

startBtn.onclick = runTime;

stopBtn.onclick = function () {
	clearTimeout(timerId);
};

clearBtn.onclick = function () {
	sField.textContent = "00";
	mField.textContent = "00";
	sec = 0; min = 0;
};


