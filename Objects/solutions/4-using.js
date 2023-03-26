const def = 'http';

export default (url) => {
  const scheme = url.startsWith('https://') ? 'https' : def;
  const name = url.replace(`${scheme}://`, '');

  
  
  return { scheme, name };
};