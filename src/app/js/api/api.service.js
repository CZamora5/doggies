import { parseBreedsList } from './parseBreedsList.js';
import { API_CONFIG } from './api.config.js';

async function getData(endpoint) {
  try {
    const data = await fetch(endpoint).then(res => res.json());
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getAllBreeds() {
  const data = await getData(API_CONFIG.BREEDS_LIST_URL);
  return parseBreedsList(data.message);
}