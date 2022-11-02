const BASE_URL = 'https://dog.ceo/api';
const BREED_URL = `${BASE_URL}/breed`;
const BREEDS_URL = `${BASE_URL}/breeds`;
const BREEDS_LIST_URL = `${BREEDS_URL}/list/all`;

const breedUrl = (breed, subBreed) => {
  if (!breed) return BREEDS_URL;

  let endpoint = `${BREED_URL}/${breed}`;
  if (subBreed) endpoint += `/${subBreed}`;
  return endpoint;
};
const allImages = endpoint => `${endpoint}/images`;
const randomImage = endpoint => {
  return (
    endpoint === BREEDS_URL
      ? `${endpoint}/image/random`
      : `${endpoint}/images/random`
  );
};
const randomImages = (endpoint, n) => {
  return (
    endpoint === BREEDS_URL
      ? `${endpoint}/image/random/${n}`
      : `${endpoint}/images/random/${n}`
  );
};

export const API_CONFIG = {
  BASE_URL,
  BREEDS_URL,
  BREEDS_LIST_URL,
  breedUrl,
  allImages,
  randomImage,
  randomImages
};