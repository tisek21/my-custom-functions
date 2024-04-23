const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const value = ( 5 < 7 ) ? "True" : "False" ;
console.log(+"1" +  "1" + "2");
const isWeekday = (date) => date.getDay() % 6 !== 0;