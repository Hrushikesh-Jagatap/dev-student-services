const {
  ErrorHandler: { BaseError },
} = require('intelli-utility');

class STUDENT_ALREADY_EXIST extends BaseError {
  constructor() {
    const code = 'STUDENT_ALREADY_EXIST';
    const statusCode = '200';
    const message = 'Student already exist';
    const key = 'sts';
    super({ code, statusCode, message, key });
  }
}

module.exports = STUDENT_ALREADY_EXIST;
