const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isEven = (num) => num % 2 === 0;
const symbolsPath = path.join(buildOutputPath, 'symbols');