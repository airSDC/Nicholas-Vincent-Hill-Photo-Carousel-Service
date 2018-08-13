const { Pool, Client } = require('pg');

console.log('seeding db...');

const connectionString = 'postgres://localhost:5432/sdcphotos';

// CREATE TABLE photos (
//   _id         BIGSERIAL PRIMARY KEY,
//   id         INTEGER,
//   name       VARCHAR (255),
//   url        VARCHAR (255),
//   verified   BOOLEAN,
//   description       VARCHAR (255)
// );

const pool = new Pool({
  // user: 'nick',
  // // host: 'database.server.com',
  // database: 'sdcphotos',
  // password: 'qw3rty',
  // // port: 3211,
  connectionString,
});

const fileNumber = 10;

const loadCSV = () => {
  const query = `COPY photos(_id, id, name, url, verified, description) FROM '/home/nick/projects/hackreactor/systemdesigncapstone/Photo-Carousel-Service/data/data${fileNumber}.csv' WITH (FORMAT csv);`;
  console.log(query);
  pool.query(query, (err, res) => {
    if (err) {
      console.log(`Error copying file ${fileNumber}`, err);
    }
    console.log(`File ${fileNumber} loaded successfully`, res);
    pool.end();
  });
};

loadCSV();

// pool.query("select * from photos where id ='1';", (err, res) => {
//   // console.log(err, res)
//   if (err) console.log(err);
//   const test = res;
//   console.log(test);
//   pool.end();
// });

// module.exports = Photo;
