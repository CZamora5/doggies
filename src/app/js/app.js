import { SearchBar } from './searchBar/searchBar.js';
import { requestImagesFromSearch } from './requestImagesFromSearch.js';
import { clearElementContent } from './utils/clearElementContent.js';
import { handleApiRequest } from './handleApiRequest.js';

export class App {
  constructor(
    searchInputSelector, searchListSelector,
    searchResultSelector, randomCheckboxSelector,
    anyBreedCheckboxSelector, quantityInputSelector,
    gridSelector, loadMoreButtonSelector, formSelector, breedsList
  ) {
    this.randomCheckbox = document.querySelector(randomCheckboxSelector);
    this.anyBreedCheckbox = document.querySelector(anyBreedCheckboxSelector);
    this.quantityInput = document.querySelector(quantityInputSelector);
    this.grid = document.querySelector(gridSelector);
    this.form = document.querySelector(formSelector);
    this.loadMoreButton = document.querySelector(loadMoreButtonSelector);
    this.images = null;
    this.breedsList = breedsList;
    this.searchBar = new SearchBar(searchInputSelector, searchListSelector, breedsList);
    requestImagesFromSearch.call(this, searchResultSelector, searchListSelector);

    this.searchParams = {
      quantity: 20,
      any: true,
      random: false,
      page: 1
    };

    this.form.addEventListener('submit', evt => {
      evt.preventDefault();
      if (document.activeElement === this.searchBar.input) {
        this.anyBreedCheckbox.checked = false;
      }
      document.activeElement.blur();
      this.handleSearchParams();
    });

    this.loadMoreButton.addEventListener('click', this.loadMoreImages);
    this.randomCheckbox.addEventListener('click', () => {
      this.searchParams.random = this.randomCheckbox.checked;
    });
    this.anyBreedCheckbox.addEventListener('click', () => {
      this.searchParams.any = this.anyBreedCheckbox.checked;
    });
    handleApiRequest.call(this);
  }

  handleSearchParams = (skip = false) => {
    this.searchParams.random = this.randomCheckbox.checked;
    this.searchParams.any = this.anyBreedCheckbox.checked;
    this.searchParams.quantity = Math.min(Math.max(parseInt(this.quantityInput.value), 1), 50);
    this.quantityInput.value = this.searchParams.quantity;
    this.searchParams.page = 1;
    if (!skip) handleApiRequest.call(this);
  };

  loadMoreImages = () => {
    const n = this.searchParams.quantity;
    const imgsTotal = this.images.length;
    const page = this.searchParams.page;
    this.loadMoreButton.classList.add('none');
    this.printImages(imgsTotal, n, page);
    this.searchParams.page += 1;
  };

  printImages = (imgsTotal, n, page) => {
    const fragment = document.createDocumentFragment();

    for (let i = n * (page - 1); i < Math.min(n * page, imgsTotal); i++) {
      const figure = document.createElement('figure');
      figure.classList.add('explore__grid__figure');

      const img = document.createElement('img');
      img.src = this.images[i];
      img.alt = '';
      img.classList.add('explore__grid__img');

      figure.appendChild(img);
      fragment.appendChild(figure);
    }
    this.grid.appendChild(fragment);
    if (imgsTotal > n * page) {
      this.showLoadMoreButton();
    }
  };

  reset = () => {
    clearElementContent(this.grid);
  };

  showNoResultsFound = () => {
    this.reset();
    const h3 = document.createElement('h3');
    h3.textContent = 'No results found, make sure to input a valid breed';
    this.grid.appendChild(h3);
  };

  showLoadMoreButton = () => {
    if (this.loadMoreButton.classList.contains('none')) {
      this.loadMoreButton.classList.remove('none');
    }
  };
}