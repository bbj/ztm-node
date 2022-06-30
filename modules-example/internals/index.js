const request = require('./request');
const response = require('./response');

// module.exports = {
//   request: require('./request'),
//   response: require('./response'),
// }

module.exports = {
  send: request.send,
  REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
  read: response.read,
}

//a more modern but not easy to read version (less explicit, could be confusing)
//which is totally equivalent
// module.exports = {
//   ...require('./request'),
//   ...require('./response'),
// }