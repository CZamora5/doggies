import { API } from './api/api.service.js';
import { capitalize } from './utils/capitalize.js';

export function requestImagesFromSearch(elemSelector, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.addEventListener('click', async evt => {
    const target = evt.target;

    if (target.matches(elemSelector)) {
      const obj = {
        breed: target.dataset['breed'],
        'sub-breed': target.dataset['subBreed'],
        name: target.dataset['breedName']
      };
      document.activeElement.blur();
      this.searchBar.isValid = true;
      this.searchBar.breed = obj;
      this.searchBar.input.value = capitalize(target.dataset['breedName']);
      this.anyBreedCheckbox.checked = false;
      this.handleSearchParams();
      if (this.searchParams.random) {
        this.images = await API.getRandomImages(this.searchParams.quantity, this.searchBar.breed);
      } else {
        this.images = await API.getImages(obj);
      }
      this.loadMoreImages();
    }
  });
}