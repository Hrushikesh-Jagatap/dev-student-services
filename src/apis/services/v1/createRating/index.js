const Student = require('@models/Rating');

const postRating = async (studentUserId, rating, batch, Class, teacherUserId) => {
  try {
    const student = await Student.findOneAndUpdate(
      { studentUserId },
      { rating, batch, Class, teacherUserId },
      { upsert: true, new: true }
    );

    if (!student) {
      return null;
    }

    return student;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

const postFeedback = async (studentUserId, teacherUserId, batch, Class, feedback) => {
  try {
    const student = await Student.findOneAndUpdate(
      { studentUserId },
      { feedback, batch, Class, teacherUserId },
      { upsert: true, new: true }
    );

    if (!student) {
      return null;
    }

    return student;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

module.exports = {
  postRating,
  postFeedback
};
