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

async function getAllBreeds() {
  const data = await getData(API_CONFIG.BREEDS_LIST_URL);
  return parseBreedsList(data.message);
}

async function getImages(obj) {
  const endpoint = API_CONFIG.breedUrl(obj['breed'], obj['sub-breed']);
  const data = await getData(endpoint);
  return data.message;
}

async function getRandomImage(obj) {
  const breedEndpoint = API_CONFIG.breedUrl(obj['breed'], obj['sub-breed']);
  const endpoint = API_CONFIG.randomImage(breedEndpoint);
  const data = await getData(endpoint);
  return data.message;
}

async function getRandomImages(n, obj) {
  const breedEndpoint = API_CONFIG.breedUrl(obj['breed'], obj['sub-breed']);
  const endpoint = API_CONFIG.randomImages(breedEndpoint, n);
  const data = await getData(endpoint);
  return data.message;
}

export const API = {
  getAllBreeds,
  getImages,
  getRandomImage,
  getRandomImages
};