import { getAllBreeds } from './api/api.service.js';
import { searchBar } from './searchBar/searchBar.js';

export async function app() {
  const breedsList = await getAllBreeds();
  searchBar('.search__input', '.search__results', breedsList);
}