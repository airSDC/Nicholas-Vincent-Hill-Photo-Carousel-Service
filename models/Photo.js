const { Pool, Client } = require('pg');

// CREATE TABLE photos (
//   key        BIGSERIAL PRIMARY KEY,
//   id         INTEGER,
//   name       VARCHAR (255),
//   url        VARCHAR (255),
//   verified   BOOLEAN,
//   desc       VARCHAR (255)
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

const getPhoto = (id, callback) => {
  const pool = new Pool();
  pool.query(`SELECT * FROM photos WHERE _id BETWEEN '${id}' AND '${Number(id) + 9}';`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      callback(res);
      pool.end();
    }
  });
};

module.exports = getPhoto;
