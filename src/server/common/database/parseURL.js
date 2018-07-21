import url from 'url';

export default function parseURL(urlString) {
  const urlObj = url.parse(urlString);
  urlObj.host = urlObj.hostname;
  if (urlObj.auth) {
    const [username, password] = urlObj.auth.split(':');
    urlObj.username = username;
    urlObj.password = password;
  }
  urlObj.database = urlObj.pathname.replace(/^\//, '');
  if (urlObj.port === null) {
    delete urlObj.port;
  }
  return urlObj;
}
