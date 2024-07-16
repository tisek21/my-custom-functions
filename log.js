const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const average = arr => arr.reduce((a, b) => a + b) / arr.length;