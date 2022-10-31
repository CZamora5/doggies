import { capitalize } from '../utils/capitalize.js';
import { search } from './search.js';
import { printSearchResults } from './printSearchResults.js';
import { clearElementContent } from '../utils/clearElementContent.js';

function handleChange(input, resultsList, breedNames) {
  const searchTerm = input.value.trim();
  const searchResults = search(searchTerm, breedNames);
  printSearchResults(resultsList, searchResults);
}

export function searchBar(searchInputSelector, resultsSelector, breeds) {
  const input = document.querySelector(searchInputSelector);
  const resultsList = document.querySelector(resultsSelector);
  const breedNames = breeds.map(elem => capitalize(elem.name));

  handleChange(input, resultsList, breedNames);
  input.addEventListener('keydown', () => {
    clearElementContent(resultsList);
    handleChange(input, resultsList, breedNames);
  });
}