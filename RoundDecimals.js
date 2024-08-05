const isTabInView = () => !document.hidden;
const results = await Promise.all(resultingPromises);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();