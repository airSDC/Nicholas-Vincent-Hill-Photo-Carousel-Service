const mongoose = require("mongoose");
const faker = require("faker");
const path = require("path");

const db = require("./models/");

const IMG_URL = "https://s3-us-west-1.amazonaws.com/airfec2018/photos/file-";

const MAX_ID_RANGE = 100;
const MAX_IMG_RANGE = 10;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// drop collection if exists
console.log("cleared db for re-seed...\n");
db.Photo.remove({}).exec(function(err, results) {
  if (err) {
    console.error(err);
    return process.exit(0);
  }

  console.log("db cleared!\n");
  console.log("starting re-seeding....\n");

  var inProgressDataBaseEntries = [];

  for (let id = 1; id <= MAX_ID_RANGE; id++) {
    for (let images = 1; images <= MAX_IMG_RANGE; images++) {
      var photo = new db.Photo({
        room_id: id,
        photo_url: IMG_URL + getRandomIntInclusive(1, 75) + ".jpg",
        verified: !Math.floor(Math.random() * 2),
        description: faker.lorem.sentence()
      });

      inProgressDataBaseEntries.push(
        photo.save().then(item => {
          console.log("photo #" + item.id + " was created");
          return Promise.resolve(item);
        })
      );
    }
  }

  Promise.all(inProgressDataBaseEntries)
    .then(function(results) {
      console.log(results.length + " entries saved in DataBase");
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
