import state from './state.js';
import * as element from './elements.js';
import { reset } from './actions.js';

export { addMinutes, subMinutes, countDown, updateDisplay };

function addMinutes(value) {
  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  minutes = minutes + value;

  if (minutes > 60) {
    minutes = 60;
  }

  updateDisplay(minutes, seconds);
}

function subMinutes(value) {
  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  minutes = minutes - value;

  if (minutes < 0) {
    minutes = 0;
  }

  updateDisplay(minutes, seconds);
}

function countDown() {

  clearTimeout(state.countDownId);

  if (!state.isRunning) {
    return
  }

  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  console.log(minutes, seconds);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    console.log('(minutes < 0)')
    reset();
    return
  }

  updateDisplay(minutes, seconds);

  state.countDownId = setTimeout(() => countDown(), 1000);
}

function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes; /* ?? nullish coalesing operator */
  seconds = seconds ?? state.seconds;

  element.minutes.textContent = String(minutes).padStart(2, '0');
  element.seconds.textContent = String(seconds).padStart(2, '0');
}