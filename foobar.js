const isEmptyArray = arr => !arr.length;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;