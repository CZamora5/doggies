import { API } from './api/api.service';

export async function handleApiRequest() {
  this.reset();
  if (this.searchParams.any) {
    this.images = await API.getRandomImages(this.searchParams.quantity, {});
    this.loadMoreImages();
  } else if (!this.searchBar.isValid) {
    this.showNoResultsFound();
    this.loadMoreButton.classList.add('none');
  } else if (this.searchParams.random) {
    this.images = await API.getRandomImages(this.searchParams.quantity, this.searchBar.breed);
    this.loadMoreImages();
  } else {
    this.images = await API.getImages(this.searchBar.breed);
    this.loadMoreImages();
  }
}