const StudentData = require('@models/Student');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const updateStudentStatus = async (userId, studentData) => {
  try {
    const student = await StudentData.findOne({ userId: userId });

    if (!student) {
      throw new Error('Student not found');
    }

    let { tid_userId, status, about, subject, flag, classes } = studentData;
    let existingStatus = student.req_status.find(
      (reqStatus) => reqStatus.tid_userId == tid_userId && reqStatus.subject == subject && reqStatus.classes == classes
    );

    if (existingStatus) {
      existingStatus.status = status;
    } else {
      student.req_status.push({ tid_userId, status, about, subject, flag, classes });
    }

    const updatedStudent = await student.save();

    if (status == "Accepted") {
      // Push the new teacher data into the teacher_userId array
      const newTeacherData = { teacher_userId: tid_userId, subject, classes };
      updatedStudent.teacher_userId.push(newTeacherData);

      // Update flag for specific conditions
      updatedStudent.req_status.forEach((reqStatus) => {
        if (reqStatus.status == "requested" && reqStatus.subject == subject && reqStatus.classes == classes) {
          reqStatus.flag = false;
        }
      });

      await updatedStudent.save();
    }

    if (status == "requested") {
      const config = {
        method: 'put',
        url: `${loadBalancer}/tms/apis/v1/status/${tid_userId}`,
        headers: {
          app_name: 'teacherApp',
          app_version_code: '101',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SYSTEM_TOKEN}`,
        },
        data: {
          userId: userId,
          status,
          about,
          subject,
          classes,
          flag,
        },
      };

      const studentUpdateResult = await axios(config);
      console.log('Student status updated:', studentUpdateResult.data);
    }

    return updatedStudent;
  } catch (error) {
    console.error('Error updating student status:', error.message);
    throw new Error('Failed to update student status');
  }
};

module.exports = {
  updateStudentStatus,
};
