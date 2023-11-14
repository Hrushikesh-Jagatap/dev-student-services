const StudentData = require('@root/src/apis/models/Student');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('@common/libs');

// Service function to get a single user by ID
const getUserById = async (userId) => {
  try {
    const data = await StudentData.find({ userId: userId });
    return data;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR;
  }
};

module.exports = {
  getUserById
}  