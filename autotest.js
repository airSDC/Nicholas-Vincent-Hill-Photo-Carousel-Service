require('dotenv').config();
const axios = require('axios');

const testId = 'd7f0659bee98645202cf7ff211fcd42d';

const runTest = () => {
  axios({
    url: `https://api.loader.io/v2/tests/${testId}/run`,
    method: 'put',
    headers: {
      'loaderio-auth': process.env.LOADERIOKEY,
    },
  })
    .then((response) => {
      console.log('ran test');
      setTimeout(stopTest, 60000);
    })
    .catch((err) => {
      console.log(err);
    });
};

const stopTest = () => {
  axios({
    url: `https://api.loader.io/v2/tests/${testId}/stop`,
    method: 'put',
    headers: {
      'loaderio-auth': process.env.LOADERIOKEY,
    },
  })
    .then((response) => {
      console.log('stopped test');
      setTimeout(runTest, 5000);
    })
    .catch((err) => {
      console.log(err);
    });
};

runTest();
