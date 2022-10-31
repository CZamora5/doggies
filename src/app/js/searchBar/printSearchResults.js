export function printSearchResults(container, results) {
  const fragment = document.createDocumentFragment();

  results.forEach(elem => {
    const p = document.createElement('p');
    p.textContent = elem;
    fragment.appendChild(p);
  });

  container.appendChild(fragment);
}