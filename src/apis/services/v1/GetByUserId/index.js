const StudentData = require('@root/src/apis/models/Student');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('@common/libs');

// Service function to get a single user by ID
const getUserById = async (userId) => {
  try {
    const data = await StudentData.findOne({ userId: userId });
    if (data === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR;
  }
};

module.exports = {
  getUserById
}  