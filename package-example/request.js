const axios = require('axios');

axios.get('http://www.google.com')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(`axios error: ${error.message}`);
  })
  .then(() => {
    console.log('All done');
  });