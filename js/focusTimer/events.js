import { controls } from "./elements.js";
import * as actions from "./actions.js";

export { registerControls, registerCards };

function registerControls() {

  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != 'function') {
      return;
    }

    actions[action]();

  })
}

function registerCards() {

  cards.addEventListener('click', (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != 'function') {
      return;
    }

    actions[action](action);

  })
}