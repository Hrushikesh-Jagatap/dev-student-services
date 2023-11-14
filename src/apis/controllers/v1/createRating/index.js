const StudentService = require('@services/v1/createRating');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to post Rating by userId
const postRating = async (req, res, next) => {
  try {
    const { studentUserId, rating, batch, Class, teacherUserId } = req.body;

    const createRating = await StudentService.postRating(studentUserId, rating, batch, Class, teacherUserId);

    if (!createRating) {
      return HttpResponseHandler.success(req, res, createRating);
    }

    return HttpResponseHandler.success(req, res, createRating);
  } catch (error) {
    next(error);
  }
};

// Controller function to post a Feedback by userId
const postFeedback = async (req, res, next) => {
  try {
    const { studentUserId, batch, Class, teacherUserId, feedback } = req.body;

    const createFeedback = await StudentService.postFeedback(studentUserId, batch, Class, teacherUserId, feedback);

    if (!createFeedback) {
      return HttpResponseHandler.success(req, res, createFeedback);
    }

    return HttpResponseHandler.success(req, res, createFeedback);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  postRating,
  postFeedback
};
