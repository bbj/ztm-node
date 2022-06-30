function decrypt(data) {
  return 'decrypted data';
}

function read() {
  return decrypt('data');
}

module.exports = { //ECMAScript module
  //export {         //CommonJS module
  read,
}