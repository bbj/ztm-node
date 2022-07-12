const { send } = require('./request');
const { read } = require('./response');

function doRequest(url, data) {
  send(url, data);
  return read();
}

const respData = doRequest("https://google.com", "my data");
console.log(respData);