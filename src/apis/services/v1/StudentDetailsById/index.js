const StudentData = require('@root/src/apis/models/Student');

// Service function to get a single student by ID
const getStudentById = async (_id) => {
  try {
    const student = await StudentData.findById(_id);

    if (student === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }

    return student;
    
  } catch (error) {
    throw new Error('Failed to get student');
  }
};

module.exports = {
  getStudentById
}  