//HARMONIC OSCILLATOR LOADED DICE SCRIPT
//ANZOL

const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('#timelapse', false);
setVisible('#crow-1', false);
setVisible('#crow-2', false);
setVisible('#crow-3', false);
setVisible('#spinner', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
	console.log("LOADING COMPLETE");
    setVisible('#timelapse', true);
	setVisible('#crow-1', true);
	setVisible('#crow-2', true);
	setVisible('#crow-3', true);
	setVisible('#spinner', false);
  }));