const {
  ErrorHandler: { BaseError },
} = require('intelli-utility');

class DUPLICATE_MOBILE_ERROR extends BaseError {
  constructor() {
    const code = 'DUPLICATE_MOBILE_ERROR';
    const statusCode = '200';
    const message = ' duplicate key error: mobileNumber already registered';
    const key = 'sts';
    super({ code, statusCode, message, key });
  }
}

module.exports = DUPLICATE_MOBILE_ERROR;
