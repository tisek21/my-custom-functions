const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const isEmptyObject = obj => Object.keys(obj).length === 0;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));