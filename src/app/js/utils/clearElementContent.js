export function clearElementContent(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}