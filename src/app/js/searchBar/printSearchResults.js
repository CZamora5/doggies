import { capitalize } from '../utils/capitalize.js';

export function printSearchResults(container, results) {
  const fragment = document.createDocumentFragment();

  results.forEach(elem => {
    const p = document.createElement('p');
    p.textContent = capitalize(elem['name']);
    p.classList.add('search-bar__result');

    p.setAttribute('data-breed', elem['breed']);
    if (elem['sub-breed']) {
      p.setAttribute('data-sub-breed', elem['sub-breed']);
    }

    fragment.appendChild(p);
  });

  container.appendChild(fragment);
}