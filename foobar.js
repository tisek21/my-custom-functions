[foo, bar] = [bar, foo];
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();