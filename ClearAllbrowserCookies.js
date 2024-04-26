const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEven = (num) => num % 2 === 0;