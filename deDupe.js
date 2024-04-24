[foo, bar] = [bar, foo];
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const fullName = name || 'buddy';
const randomString = () => Math.random().toString(36).slice(2);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};