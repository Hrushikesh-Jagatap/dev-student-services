const studentData = require('@models/Student');

const _ = require('lodash');

// Service function to update a PersonalDetaisl by UserID
const updatePersonalDetailsById = async (userId, updatedPersonalDetails) => {
  try {
    const user = await studentData.findOne({ userId: userId });

    if (!user) {
      return "User not found In Db"
    }

    const mergedPersonalDetails = _.merge({}, user.personalDetails, updatedPersonalDetails);

    const updatedStudent = await studentData.findOneAndUpdate(
      { userId: userId },
      { $set: { personalDetails: mergedPersonalDetails, "ApplicationStatus.isProfileCompleted": true } },
      { new: true }
    );
    return updatedStudent;
  } catch (error) {
    throw new Error('Failed to updatePersonalDetails student');
  }
};

module.exports = {
  updatePersonalDetailsById,
};