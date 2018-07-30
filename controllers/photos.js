const db = require('../models');

module.exports = {
  index: function(req, res, next) {
    /*
      method: GET
      route: '/api/photos/:id'
    */
    console.log('MY PHOTO COMPONENT WAS HIT');
    const roomId = req.params.id;

    db.Photo.find({ room_id: roomId })
      .exec()
      .then(function(photos) {
        if (!photos || !photos.length) {
          return next();
        }

        res.json({ results: photos });
      })
      .catch(next);
  }
};
