const StudentData = require('@root/src/apis/models/Student');

// Service function to create a new student
const createStudent = async (studentData) => {
  try {
    const newStudent = await StudentData.create(studentData);
    return newStudent;
  } catch (error) {
    throw new Error('Failed to create student');
  }
};

module.exports = {
  createStudent
};
