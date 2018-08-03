const mongoose = require('mongoose');
const faker = require('faker');
const path = require('path');

const db = require('./models/');

const IMG_URL = 'https://s3-us-west-1.amazonaws.com/airfec2018/photos/';

const MAX_ID_RANGE = 100;
const MAX_IMG_RANGE = 10;

// drop cellection if exists
console.log('cleared db for re-seed...\n');
db.Photo.remove({}).exec(function(err, results) {
  if (err) {
    console.error(err);
    return process.exit(0);
  }

  console.log('db cleared!\n');
  console.log('starting re-seeding....\n');

  var inProgressDataBaseEntrys = [];

  for (let id = 1; id <= MAX_ID_RANGE; id++) {
    for (let imgs = 1; imgs <= MAX_IMG_RANGE; imgs++) {
      var photo = new db.Photo({
        room_id: id,
        photo_url: IMG_URL + imgs + '.jpg',
        verified: !Math.floor(Math.random() * 2),
        description: faker.lorem.sentence()
      });

      inProgressDataBaseEntrys.push(
        photo.save().then(item => {
          console.log('photo #' + item.id + ' was created');
          return Promise.resolve(item);
        })
      );
    }
  }

  Promise.all(inProgressDataBaseEntrys)
    .then(function(results) {
      console.log(results.length + ' entrys saved in DataBase');
    })
    .catch(function(err) {
      console.error(err);
    })
    .then(function() {
      mongoose.connection.close(function() {
        process.exit(0);
      });
    });
});
