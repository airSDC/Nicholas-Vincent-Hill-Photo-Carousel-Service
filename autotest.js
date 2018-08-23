const axios = require('axios');
const APIKey = require('./keys');

const testId = '34b8af6d373df563fdd07234e9f57233';

const runTest = () => {
  axios({
    url: `https://api.loader.io/v2/tests/${testId}/run`,
    method: 'put',
    headers: {
      'loaderio-auth': APIKey.LOADER
    }
  }).then((response) => {
    console.log('ran test');
    setTimeout(stopTest, 60000)
  }).catch((err) => {
    console.log(err);
  });
}

const stopTest = () => {
  axios({
    url: `https://api.loader.io/v2/tests/${testId}/stop`,
    method: 'put',
    headers: {
      'loaderio-auth': APIKey.LOADER
    }
  }).then((response) => {
    console.log('stopped test');
    setTimeout(runTest, 5000);
  }).catch((err) => {
    console.log(err);
  });
}

runTest();