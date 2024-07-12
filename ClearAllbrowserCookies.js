const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const merge = (a, b) => [...a, ...b];
const randomBoolean = () => Math.random() >= 0.5;