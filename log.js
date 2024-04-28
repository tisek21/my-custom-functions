const results = await Promise.all(resultingPromises);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');