import { capitalize } from '../utils/capitalize.js';

export function printSearchResults() {
  const fragment = document.createDocumentFragment();

  this.searchResults.forEach(elem => {
    const breedName = capitalize(elem['name']);

    const p = document.createElement('p');
    p.textContent = breedName;
    p.classList.add('search-bar__result');

    p.setAttribute('tabindex', '0');
    p.setAttribute('title', `Select this option to search dog images of the ${breedName} breed`);

    p.setAttribute('data-breed', elem['breed']);
    p.setAttribute('data-breed-name', elem['name']);
    if (elem['sub-breed']) {
      p.setAttribute('data-sub-breed', elem['sub-breed']);
    }

    fragment.appendChild(p);
  });

  this.resultsList.appendChild(fragment);
}