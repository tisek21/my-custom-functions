const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(false == '0');
[foo, bar] = [bar, foo];