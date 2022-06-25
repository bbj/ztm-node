const { send } = require('./request'); // CommonJS, .js not needed
const { read } = require('./response');
// import { send } from './request.js'; // ECMAScript module, .mjs needed
// import { read } from './response.js';
const { REQUEST_TIMEOUT } = require('./request');

function doRequest(url, data) {
  send(url, data);
  return read();
}

const respData = doRequest("https://google.com", "my data");
console.log(respData);