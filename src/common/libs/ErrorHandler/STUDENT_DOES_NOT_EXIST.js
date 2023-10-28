const {
  ErrorHandler: { BaseError },
} = require('intelli-utility');

class STUDENT_DOES_NOT_EXIST extends BaseError {
  constructor() {
    const code = 'STUDENT_DOES_NOT_EXIST';
    const statusCode = '200';
    const message = 'Student does not exist';
    const key = 'sts';
    super({ code, statusCode, message, key });
  }
}

module.exports = STUDENT_DOES_NOT_EXIST;
