// generate primary key table

const faker = require('faker');
const fs = require('fs');

const IMG_URL = 'https://s3-us-west-1.amazonaws.com/airfec2018/photos/file-';
const start = 1;
const MAX_ID_RANGE = start + 1000;
const MAX_IMG_RANGE = 10;

const getRandomIntInclusive = (min, max) => {
  const minRounded = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minRounded + 1)) + minRounded;
};

console.time('data');

const generateData = () => {
  let csv = '';
  const stream = fs.createWriteStream('data/data.csv');
  for (let id = start; id <= MAX_ID_RANGE; id += 1) {
    for (let images = 1; images <= MAX_IMG_RANGE; images += 1) {
      const name = `room${id}`;
      const url = `${IMG_URL + getRandomIntInclusive(1, 75)}.jpg`;
      const verified = !Math.floor(Math.random() * 2);
      const desc = faker.lorem.sentence();
      csv += `${id},${name},${url},${verified},${desc},\n`;
      stream.write(csv);
    }
  }
  stream.end();
};

setTimeout(() => generateData(), 0);
console.timeEnd('data');
