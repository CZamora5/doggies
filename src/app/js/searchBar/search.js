function isSubstring(word, pattern) {
  let ptr = 0;
  word = word.toLowerCase();
  pattern = pattern.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (ptr === pattern.length) break;
    if (word[i] === pattern[ptr]) ptr++;
  }

  return ptr === pattern.length;
}

export function search(searchTerm, list, predicate = isSubstring) {
  return list.filter(elem => predicate(elem['name'], searchTerm));
}