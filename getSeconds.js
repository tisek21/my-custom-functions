const apmRootPath = path.join(repositoryRootPath, 'apm');
const isTabInView = () => !document.hidden;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;