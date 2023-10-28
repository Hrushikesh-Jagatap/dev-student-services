// const StudentService = require('@root/src/apis/services/v1/updateStatus');
const { HttpResponseHandler } = require('intelli-utility');

const StudentService = require('@services/v1/updateStatus');

// Controller function to update a teacher by ID
const updatestatus = async (req, res) => {
  try {
    const updatedStudent = await StudentService.updateStudentStatus(req.params.id, req.body);

    if (!updatedStudent) {
      return HttpResponseHandler.success(req, res, updatedStudent);

    }
    return HttpResponseHandler.success(req, res, updatedStudent);

  } catch (error) {
  //  next(error)
  }
};

module.exports = {
  updatestatus,
};
