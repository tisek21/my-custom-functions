const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log("0 || 1 = "+(0 || 1));
const merge = (a, b) => [...a, ...b];