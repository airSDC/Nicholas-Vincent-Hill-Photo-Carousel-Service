const express = require('express');
const ctrl = require('./../controllers');

const router = express.Router();

router.get('/rooms/:id/photos/', ctrl.photos.index);
// router.post('/photos/:id', ctrl.photos.create);

router.use(function(req, res, next) {
  res.status(404).send('not found');
});

router.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send('BAD');
});

module.exports = router;
