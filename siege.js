const siege = require('siege');

const randomNumbers = [];

const random = (min, max) => Math.floor(Math.random() * max) + min;

const arrSize = 150000;
for (let i = 0; i < arrSize; i += 1) {
  randomNumbers.push(random(1, 10000000));
}

let sieger = siege().on(3004);

for (let i = 0; i < randomNumbers.length; i += 1) {
  sieger = sieger.for(5000).times.get(`/api/rooms/${randomNumbers[i]}/photos`);
}

sieger.attack();
