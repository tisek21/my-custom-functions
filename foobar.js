const goToTop = () => window.scrollTo(0, 0);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());