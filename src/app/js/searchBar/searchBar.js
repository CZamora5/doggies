import { search } from './search.js';
import { printSearchResults } from './printSearchResults.js';
import { clearElementContent } from '../utils/clearElementContent.js';

function handleChange(searchTerm, resultsList, breeds) {
  const searchResults = search(searchTerm, breeds);
  clearElementContent(resultsList);
  printSearchResults(resultsList, searchResults);
}

export function searchBar(searchInputSelector, resultsSelector, breeds) {
  const input = document.querySelector(searchInputSelector);
  const resultsList = document.querySelector(resultsSelector);
  let searchTerm = '';

  handleChange(searchTerm, resultsList, breeds);
  input.addEventListener('input', evt => {
    const newSearchTerm = evt.target.value.trim();
    if (searchTerm === newSearchTerm) return;

    searchTerm = newSearchTerm;
    handleChange(searchTerm, resultsList, breeds);
  });
}