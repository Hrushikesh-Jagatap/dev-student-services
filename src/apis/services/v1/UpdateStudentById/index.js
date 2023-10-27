const StudentData = require('@root/src/apis/models/Student');

// Service function to update a student by ID
const updateStudentById = async (userId, studentData) => {
  try {
    const updatedstudent = await StudentData.findOneAndUpdate({userId: userId}, studentData);

    if (updatedstudent === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }
    return updatedstudent;
  } catch (error) {
    throw new Error('Failed to update student');
  }
};


module.exports = {
  updateStudentById,
};
