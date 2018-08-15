// generate primary key table

const faker = require('faker');
const fs = require('fs');

const IMG_URL = 'https://s3-us-west-1.amazonaws.com/airfec2018/photos/file-';

const getRandomIntInclusive = (min, max) => {
  const minRounded = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minRounded + 1)) + minRounded;
};

const generateData = (start, end, fileNumber) => {
  let csv = '';
  const stream = fs.createWriteStream(`data/data${fileNumber}.csv`);
  for (let id = start; id <= end; id += 1) {
    for (let images = 1; images <= 10; images += 1) {
      const name = `room${id}`;
      const url = `${IMG_URL + getRandomIntInclusive(1, 75)}.jpg`;
      const verified = !Math.floor(Math.random() * 2);
      const desc = faker.lorem.sentence();
      csv = `${id},${name},${url},${verified},${desc},\n`;
      stream.write(csv);
    }
  }
  stream.end();
};

const start = 1;
const end = 100;

console.time('data');
setTimeout(() => generateData(start, end, 'test'), 0);
console.timeEnd('data');
