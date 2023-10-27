const studentData = require('@models/Student');

const _ = require('lodash');

// Service function to update a PersonalDetaisl by UserID
const updatePersonalDetailsById = async (userId, updatedPersonalDetails) => {
  try {
    const user = await studentData.findOne({ userId: userId });

    if (user === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }

    const mergedPersonalDetails = _.merge({}, user.personalDetails, updatedPersonalDetails);

    const updatedStudent = await studentData.findOneAndUpdate(
      { userId: userId },
      { $set: { personalDetails: mergedPersonalDetails, "ApplicationStatus.isProfileCompleted": true } },
      { new: true }
    );
    
    if (updatedStudent) {

      const { personalDetails, ApplicationStatus } = updatedStudent

      return { personalDetails, ApplicationStatus };
    } else {
      throw new Eroor('Failed to get PersonalDetails Student')
    }

  } catch (error) {
    throw new Error('Failed to updatePersonalDetails student');
  }
};

module.exports = {
  updatePersonalDetailsById,
};