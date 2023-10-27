const {
  ErrorHandler: { BaseError },
} = require('intelli-utility')


class SCHEMA_VALIDATION_ERROR extends BaseError {
  constructor(message) {
    const code = 'SCHEMA_VALIDATION_ERROR';
    const statusCode = '500';
    const key = 'sts';
    //const message='Number Must Be 10 Digit'
    super({ code, statusCode, key, message });
  }
}

module.exports = SCHEMA_VALIDATION_ERROR;