const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const IMG_URL = 'https://s3-us-west-1.amazonaws.com/airfec2018/photos/file-';

const MAX_ID_RANGE = 100000;
const MAX_IMG_RANGE = 10;

const getRandomIntInclusive = (min, max) => {
  const minRounded = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minRounded + 1)) + minRounded;
};

console.log('starting data generation....\n');

const data = [];

for (let id = 1; id <= MAX_ID_RANGE; id += 1) {
  for (let images = 1; images <= MAX_IMG_RANGE; images += 1) {
    const photo = {
      room_id: id,
      photo_url: `${IMG_URL + getRandomIntInclusive(1, 75)}.jpg`,
      verified: !Math.floor(Math.random() * 2),
      description: faker.lorem.sentence(),
    };
    data.push(photo);
  }
}

const csvWriter = createCsvWriter({
  path: `${__dirname}/data/test.csv`,
  header: [
    { id: 'room_id', title: 'room_id' },
    { id: 'photo_url', title: 'photo_url' },
    { id: 'verified', title: 'verified' },
    { id: 'description', title: 'description' },
  ],
});

const records = data;

csvWriter
  .writeRecords(records) // returns a promise
  .then(() => {
    console.log('...Done');
  });
