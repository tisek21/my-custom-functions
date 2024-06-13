const isEmptyArray = arr => !arr.length;
const flattenedArray = arr => [].concat(...arr);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');