// const { send } = require('./internals/request'); // CommonJS, .js not needed
// const { read } = require('./internals/response');
// import { send } from './request.js'; // ECMAScript module, .mjs needed
// import { read } from './response.js';
//const internals = require('./internals');
const { read, send } = require('./internals');


function doRequest(url, data) {
  // const internals = require('./internals');
  // internals.request.send(url, data);
  // return internals.response.read();

  // internals.send(url, data);
  // return internals.read();

  send(url, data);
  return read();
}

const respData = doRequest("https://google.com", "my data");
console.log(respData);