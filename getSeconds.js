var c = new Counter(); c.add(); c.add(); c.add();
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;