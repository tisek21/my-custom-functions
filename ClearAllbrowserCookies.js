const appName = getAppName(channel);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const copyToClipboard = (text) => navigator.clipboard.writeText(text);