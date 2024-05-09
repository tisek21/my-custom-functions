const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const symbolsPath = path.join(buildOutputPath, 'symbols');
const intermediateAppPath = path.join(buildOutputPath, 'app');