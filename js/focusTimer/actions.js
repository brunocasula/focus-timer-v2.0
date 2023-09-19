import state from './state.js';
import * as timer from './timer.js';
import * as element from './elements.js';
import * as sounds from './sounds.js';

export { play, stop, add, sub, toggleRunning, reset, set, toggleFlorest, toggleRain, toggleCoffe, toggleFirePlace };

/* CONTROLS */

function play() {
  console.log('Play');
  state.isRunning = document.documentElement.classList.toggle('running');
  timer.countDown();
}

function stop() {
  console.log('Stop');
  state.isRunning = document.documentElement.classList.toggle('running');
}

function add() {
  console.log('Add');
  timer.addMinutes(5);
}

function sub() {
  console.log('Sub');
  timer.subMinutes(5);
}

function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countDown();
}

function reset() {
  console.log('RESET');

  state.isRunning = false;
  document.documentElement.classList.remove('running');
  console.log('Removeu')
  timer.updateDisplay();
}

function set() {
  element.minutes.setAttribute('contenteditable', true);
  element.minutes.focus();
}


/* CARDS */

function cardUnselectAll() {
  const card = element.cards.querySelectorAll('button');

  for (let i = 0; i < card.length; i++) {
    if (card[i].classList.contains('active'))
      card[i].classList.remove('active');
  }
}

function CardSelect(name) {
  cardUnselectAll();

  const card = document.querySelector(`[data-action = "${name}"]`)
  card.classList.add('active');
}

function toggleFlorest(name) {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if ((state.soundName != null) && (state.soundName != name)) {
    return;
  }

  CardSelect(name);

  if (state.isMute) {
    state.soundName = name;
    sounds.florest.play();
    return
  }

  cardUnselectAll();
  state.soundName = null;
  sounds.florest.pause();
}

function toggleRain(name) {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if ((state.soundName != null) && (state.soundName != name)) {
    return;
  }

  CardSelect(name);

  if (state.isMute) {
    state.soundName = name;
    sounds.rain.play();
    return
  }

  cardUnselectAll();
  state.soundName = null;
  sounds.rain.pause();
}

function toggleCoffe(name) {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if ((state.soundName != null) && (state.soundName != name)) {
    return;
  }

  CardSelect(name);

  if (state.isMute) {
    state.soundName = name;
    sounds.coffe.play();
    return
  }

  cardUnselectAll();
  state.soundName = null;
  sounds.coffe.pause();
}

function toggleFirePlace(name) {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if ((state.soundName != null) && (state.soundName != name)) {
    return;
  }

  CardSelect(name);

  if (state.isMute) {
    state.soundName = name;
    sounds.firePlace.play();
    return
  }

  cardUnselectAll();
  state.soundName = null;
  sounds.firePlace.pause();
}
