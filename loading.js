//HARMONIC OSCILLATOR LOADED DICE SCRIPT
//ANZOL

const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

var spinner = document.getElementById('spinner');
var loadingScreen = document.getElementById('loading-screen');
var timelapse = document.getElementById('timelapse');

// This probably does nothing and can likely be gotten rid of
loadingScreen.style.height = timelapse.style.height;
loadingScreen.style.width = timelapse.style.width;

setVisible('#timelapse', false);
setVisible('#crow-1', false);
setVisible('#crow-2', false);
setVisible('#crow-3', false);
setVisible('#spinner', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(2000).then(() => {
	console.log("SPINNER FADE");
	console.log(loadingScreen.style.height)
	spinner.style.animation = "fake-load 2.5s";
	
	wait(0).then(fadeoutComplete)
  }));
  
 function fadeoutComplete() {
	console.log("VIDEO DISPLAY");
	setVisible('#timelapse', true);
	setVisible('#crow-1', true);
	setVisible('#crow-2', true);
	setVisible('#crow-3', true);
	setVisible('#spinner', false);
	setVisible('#loading-screen', false);
 }