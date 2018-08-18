const { Pool, Client } = require('pg');

// CREATE TABLE photos (
//   _id         BIGSERIAL PRIMARY KEY,
//   id         INTEGER,
//   name       VARCHAR (255),
//   url        VARCHAR (255),
//   verified   BOOLEAN,
//   description       VARCHAR (255)
// );


// const loadCSV = () => {
//   const prefix = 'COPY photos FROM';
//   const path = '/home/nick/projects/hackreactor/systemdesigncapstone/Photo-Carousel-Service/data/data1.csv';
//   const suffix = 'WITH (FORMAT csv);';
//   pool.query(`${prefix} ${path} ${suffix}`, (err, res) => {
//     if (err) {
//       console.log('Error copying file 01', err);
//     }
//     console.log('File 01 loaded successfully', res);
//     pool.end();
//   });
// };

// loadCSV();

const pool = new Pool();

const getPhoto = (id, callback) => {
  pool.query(`SELECT * FROM photos WHERE _id BETWEEN '${id}' AND '${Number(id) + 9}';`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      callback(res);
    }
  });
};

module.exports = getPhoto;

