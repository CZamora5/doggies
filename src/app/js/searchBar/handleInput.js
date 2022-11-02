import { clearElementContent } from '../utils/clearElementContent.js';
import { search } from './search.js';

export function handleInput() {
  this.searchResults = search(this.searchTerm, this.breeds);
  this.breed = search(this.searchTerm, this.breeds, (word, pattern) => {
    return pattern.toLowerCase() === word.toLowerCase();
  });
  this.isValid = this.breed.length > 0;
  clearElementContent(this.resultsList);
  this.printSearchResults();
}