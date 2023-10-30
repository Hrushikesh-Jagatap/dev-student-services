const StudentData = require('@models/Student');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');
        const getTeacher = async (args) => {
  console.log('user id is', args);
  // const userId = args.toString();
  // let { userId.toString()} = args
  try {
    const config = {
      method: 'get',
      url: `${loadBalancer}/tms/apis/v1/user/${args}`,
      headers: {
        app_name: 'teacherApp',
        app_version_code: '101',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
    };
    const result = await axios(config);
    if (result?.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    // throw new ORDER_SERVICE_ERROR(error);
  }
};

const updateStudentStatus = async (sid_userId, studentData) => {
  try {
    const student = await StudentData.findOne({ userId: sid_userId });

    if (student === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }

    let { tid_userId, status, about, subject, flag, classes } = studentData;
    let existingStatus = student.req_status.find(
      (reqStatus) => reqStatus.tid_userId == tid_userId && reqStatus.subject == subject && reqStatus.classes == classes
    );

    if (existingStatus) {
      existingStatus.status = status;
    } else {


 
 const abc = await getTeacher(tid_userId);
 console.log(abc.data);
  let name=abc.data.personalDetails.first_name ;
    let profileimage=abc.data.personalDetails.profileImage;

      student.req_status.push({ tid_userId, status, about, subject, flag, classes,name, profileimage});
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
          sid_userId: sid_userId,
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
