const mongoose = require('mongoose');
const faker = require('faker');
// const path = require('path');

const db = require('./models/');

const IMG_URL = 'https://s3-us-west-1.amazonaws.com/airfec2018/photos/file-';

const MAX_ID_RANGE = 10000000;
const MAX_IMG_RANGE = 10;

const getRandomIntInclusive = (min, max) => {
  const minRounded = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minRounded + 1)) + minRounded;
};

// drop collection if exists
console.log('cleared db for re-seed...\n');
db.Photo.remove({}).exec((err) => {
  if (err) {
    console.error(err);
    return process.exit(0);
  }

  console.log('db cleared!\n');
  console.log('starting re-seeding....\n');

  const inProgressDataBaseEntries = [];

  for (let id = 1; id <= MAX_ID_RANGE; id += 1) {
    for (let images = 1; images <= MAX_IMG_RANGE; images += 1) {
      const photo = new db.Photo({
        room_id: id,
        photo_url: `${IMG_URL + getRandomIntInclusive(1, 75)}.jpg`,
        verified: !Math.floor(Math.random() * 2),
        description: faker.lorem.sentence(),
      });

      const result = photo.save().then((item) => {
        Promise.resolve(item);
      });

      inProgressDataBaseEntries.push(result);
    }
  }

  Promise.all(inProgressDataBaseEntries)
    .then((dbResults) => {
      console.log(`${dbResults.length} entries saved in DataBase`);
    })
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      mongoose.connection.close(() => {
        process.exit(0);
      });
    });
});
