const db = require('../models');

module.exports = {
  
  index: function( req, res, next ){
    console.log('photo index now good')
    res.send('ok')
  },

  create: function( req, res) {

  }
}