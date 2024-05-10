const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const goToTop = () => window.scrollTo(0, 0);