const { Pool, Client } = require('pg');

const connectionString = 'postgres://localhost:5432/sdcphotos';

// CREATE TABLE photos (
//   key        BIGSERIAL PRIMARY KEY,
//   id         INTEGER,
//   name       VARCHAR (255),
//   url        VARCHAR (255),
//   verified   BOOLEAN,
//   desc       VARCHAR (255)
// );

const pool = new Pool({
  connectionString,
  user: process.env.USER,
  // host: 'database.server.com',
  database: 'sdcphotos',
  password: process.env.PASSWORD,
  // port: 3211,
});

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

const getPhoto = (id) => {
  pool.query(`select * from photos where ${id} ='1';`, (err, res) => {
    // console.log(err, res)
    if (err) console.log(err);
    console.log(res);
    pool.end();
  });
};

module.exports = getPhoto;
