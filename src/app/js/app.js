import { API } from './api/api.service.js';
import { searchBar } from './searchBar/searchBar.js';
import { requestImagesFromSearch } from './searchBar/requestImagesFromSearch.js';

export async function app() {
  const breedsList = await API.getAllBreeds();
  searchBar('.search-bar__input', '.search-bar__results', breedsList);
  requestImagesFromSearch('.search-bar__result', '.search-bar__results');
}