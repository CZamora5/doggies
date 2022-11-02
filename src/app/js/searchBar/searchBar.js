import { handleInput } from './handleInput.js';
import { printSearchResults } from './printSearchResults.js';

export class SearchBar {
  constructor(searchInputSelector, resultsSelector, breeds)  {
    this.input = document.querySelector(searchInputSelector);
    this.resultsList = document.querySelector(resultsSelector);
    this.breeds = breeds;
    this.searchResults = breeds;
    this.searchTerm = '';
    this.breed = null;
    this.isValid = false;
    this.handleInput = handleInput.bind(this);
    this.printSearchResults = printSearchResults.bind(this);
    this.handleInput();

    this.input.addEventListener('input', evt => {
      const newSearchTerm = evt.target.value.trim();
      if (this.searchTerm === newSearchTerm) return;

      this.searchTerm = newSearchTerm;
      this.handleInput();
    });
  }
}