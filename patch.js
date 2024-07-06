const reversedString = str => str.split('').reverse().join('');
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);