const studentData = require('@models/Student');

const _ = require('lodash');

// Service function to update a EducationalDetails by UserID
const updatedEducationalDetailsById = async (userId, updatedEducationalDetails) => {
  try {
    const user = await studentData.findOne({ userId: userId });

    if (user === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }

    const mergedEducationalDetails = _.merge({}, user.educationDetails, updatedEducationalDetails);

    const updatedStudent = await studentData.findOneAndUpdate(
      { userId: userId },
      { $set: { educationDetails: mergedEducationalDetails, 'ApplicationStatus.isEducationalDetailCompleted': true } },
      { new: true }
    );
    if (updatedStudent) {

      const { educationDetails, ApplicationStatus } = updatedStudent

      return { educationDetails, ApplicationStatus };
    } else {
      throw new Error('Failed to return Student Data');
    }
  } catch (error) {
    throw new Error('Failed to updateEducationalDetails student');
  }
};

module.exports = {
  updatedEducationalDetailsById,
};