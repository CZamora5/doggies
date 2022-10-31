function isSubstring(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

export function search(searchTerm, list, predicate = isSubstring) {
  return list.filter(item => predicate(item, searchTerm));
}