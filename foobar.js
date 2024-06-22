const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
[foo, bar] = [bar, foo];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));