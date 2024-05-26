const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEmptyObject = obj => Object.keys(obj).length === 0;