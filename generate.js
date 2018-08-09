const faker = require('faker');

const IMG_URL = 'https://s3-us-west-1.amazonaws.com/airfec2018/photos/file-';
const start = 1;
const MAX_ID_RANGE = 100000;
const MAX_IMG_RANGE = 10;

const getRandomIntInclusive = (min, max) => {
  const minRounded = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minRounded + 1)) + minRounded;
};

for (let id = start; id <= MAX_ID_RANGE; id += 1) {
  for (let images = 1; images <= MAX_IMG_RANGE; images += 1) {
    const photo = {
      id,
      name: `room${id}`,
      url: `${IMG_URL + getRandomIntInclusive(1, 75)}.jpg`,
      verified: !Math.floor(Math.random() * 2),
      desc: faker.lorem.sentence(),
    };
    console.log(`${photo.id},${photo.name},${photo.url},${photo.verified},${photo.desc}`);
  }
}
