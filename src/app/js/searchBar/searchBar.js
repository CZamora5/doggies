import { capitalize } from '../utils/capitalize.js';
import { search } from './search.js';
import { printSearchResults } from './printSearchResults.js';
import { clearElementContent } from '../utils/clearElementContent.js';

function handleChange(searchTerm, resultsList, breedNames) {
  const searchResults = search(searchTerm, breedNames);
  clearElementContent(resultsList);
  printSearchResults(resultsList, searchResults);
}

export function searchBar(searchInputSelector, resultsSelector, breeds) {
  const input = document.querySelector(searchInputSelector);
  const resultsList = document.querySelector(resultsSelector);
  const breedNames = breeds.map(elem => capitalize(elem.name));
  let searchTerm = '';

  handleChange(searchTerm, resultsList, breedNames);
  input.addEventListener('input', evt => {
    const newSearchTerm = evt.target.value.trim();
    if (searchTerm === newSearchTerm) return;

    searchTerm = newSearchTerm;
    handleChange(searchTerm, resultsList, breedNames);
  });
}