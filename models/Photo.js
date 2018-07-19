// schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  room_id: { type: Number, required: true },
  photo_url: { type: String },
  description: { type: String },
  verified: { type: Boolean }
});


const Photo = mongoose.model( 'Photo', PhotoSchema );

module.exports = Photo;