const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return 'encrypted data';
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
  // export {
  REQUEST_TIMEOUT,
  send, //shorthand syntax for "send: send,"
}
console.log('request.js loaded!');
console.log(require.cache);
/* 
Module {
  id: '.',
  path: '/Users/bbj/Library/Mobile Documents/com~apple~CloudDocs/learn/ztm-node/modules-example',
  exports: { send: [Function: send] },
  filename: '/Users/bbj/Library/Mobile Documents/com~apple~CloudDocs/learn/ztm-node/modules-example/request.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/bbj/Library/Mobile Documents/com~apple~CloudDocs/learn/ztm-node/modules-example/node_modules',
    '/Users/bbj/Library/Mobile Documents/com~apple~CloudDocs/learn/ztm-node/node_modules',
    '/Users/bbj/Library/Mobile Documents/com~apple~CloudDocs/learn/node_modules',
    '/Users/bbj/Library/Mobile Documents/com~apple~CloudDocs/node_modules',
    '/Users/bbj/Library/Mobile Documents/node_modules',
    '/Users/bbj/Library/node_modules',
    '/Users/bbj/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
*/