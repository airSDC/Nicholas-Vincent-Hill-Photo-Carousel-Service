const express = require('express');
const ctrl = require('./../controllers');

const router = express.Router();

router.get('/rooms/:id/photos/', ctrl.photos.get);
router.post('/rooms/:id/photos/', ctrl.photos.post);
router.put('/rooms/:id/photos/', ctrl.photos.put);
router.delete('/rooms/:id/photos/', ctrl.photos.delete);

router.use((req, res, next) => {
  res.status(404).send('not found');
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('BAD');
});

module.exports = router;
