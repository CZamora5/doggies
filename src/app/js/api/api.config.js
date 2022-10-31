const BASE_URL = 'https://dog.ceo/api';
const BREEDS_URL = `${BASE_URL}/breeds`;
const BREEDS_LIST_URL = `${BREEDS_URL}/list/all`;

const breedUrl = (breed, subBreed) => {
  let endpoint = BREEDS_URL;
  if (breed) endpoint += `/${breed}`;
  if (subBreed) endpoint += `/${subBreed}`;
  return endpoint;
};
const allImages = endpoint => `${endpoint}/images`;
const randomImage = endpoint => `${endpoint}/images/random`;
const randomImages = (endpoint, n) => `${endpoint}/images/random/${n}`;

export const API_CONFIG = {
  BASE_URL,
  BREEDS_URL,
  BREEDS_LIST_URL,
  breedUrl,
  allImages,
  randomImage,
  randomImages
};