const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  studentUserId: {
    type: String,
    // required: true,
  },
  teacherUserId: {
    type: String,
    // required: true,
  },
  rating: {
    type: String
    // required true
  },
  feedback: {
    type: String,
    // required: true,
  },
  Class: {
    type: String,
    // required: true,
  },
  batch: {
    type: String,
    // required: true,
  },
  reviewedBy: {
    type: String,
    // required: true,
  },
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
