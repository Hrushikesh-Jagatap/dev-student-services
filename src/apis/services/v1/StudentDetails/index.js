const StudentData = require('@root/src/apis/models/Student');

// Service function to get all students
const getAllStudent = async () => {
  try {
    const data = await StudentData.find();

    if (data === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND IN DB',
      };
    }

    return data;
  } catch (error) {
    throw new Error('Failed to get students');
  }
};


module.exports = {
  getAllStudent
}  