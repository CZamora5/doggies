import { API } from './app/js/api/api.service.js';
import { App } from './app/js/app.js';
import './main.scss';

(async () => {
  const breedsList = await API.getAllBreeds();
  new App(
    '.search-bar__input', '.search-bar__results', '.search-bar__result',
    '#random-checkbox', '#any-breed-checkbox', '#number-imgs-input',
    '.explore__grid', '.explore__button', '.explore__form', breedsList
  );
})();