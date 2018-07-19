const express = require('express');
const ctrl = require('./../controllers');

const router = express.Router();

router.get('/photos/:id', ctrl.photos.index );
router.post('/photos/:id', ctrl.photos.create );

module.exports = router;
