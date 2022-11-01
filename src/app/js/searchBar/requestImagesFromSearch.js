import {API} from '../api/api.service.js';

export function requestImagesFromSearch(elemSelector, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.addEventListener('click', async evt => {
    const target = evt.target;

    if (target.matches(elemSelector)) {
      const obj = {
        breed: target.dataset['breed'],
        'sub-breed': target.dataset['subbreed']
      };
      const data = await API.getImages(obj);
      console.log(data);
    }
  })
}