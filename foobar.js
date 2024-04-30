const lastElement = arr => arr[arr.length - 1];
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);