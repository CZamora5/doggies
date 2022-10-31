export function parseBreedsList(data) {
  const parsedList = [];
  Object.keys(data).forEach(breed => {
    const subBreeds = data[breed];
    if (subBreeds.length > 0) {
      subBreeds.forEach(subBreed => {
        parsedList.push({
          'breed': breed,
          'sub-breed':  subBreed,
          'name': `${subBreed} ${breed}`
        });
      });
    } else {
      parsedList.push({
        'breed': breed,
        'name': breed
      });
    }
  });

  return parsedList;
}