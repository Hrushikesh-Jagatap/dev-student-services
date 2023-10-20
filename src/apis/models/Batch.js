const mongoose = require('mongoose');

// Define the Batch schema
const batchSchema = new mongoose.Schema({
  batch_id: {
    type: String,
    required: true,
    unique: true,
  },
  batch_name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  userId: {                       //This means that the "userId" field will store the ObjectId of a document from the "User" model.
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'Student',
  },

  teacher_userId:
     [{ type: Schema.Types.ObjectId, ref: 'TeacherData' }],

  student_userId: [{
    type: String,
  }],
  lastdate: {
    type: Date,
  },
  classTime: {
    type: String,
  },
  duration: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  syllabus: {
    type: String,
  },
  chapter: {
    type: String,
  },
  liveChat: {
    type: Boolean,
    default: true,
  },
  offlineChat: {
    type: Boolean,
    default: false,
  },
});

// Create the Batch model
const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
