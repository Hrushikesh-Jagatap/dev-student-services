const {
  ErrorHandler: { BaseError },
} = require('intelli-utility');

class DATA_BASE_ERROR extends BaseError {
  constructor(msg) {
    const code = 'DATA_BASE_ERROR';
    const statusCode = '502';
    const message = msg?msg:' Error while querrying the table in sts data_base ';
    const key = 'sts';
    super({ code, statusCode, message, key });
  }
}

module.exports = DATA_BASE_ERROR;
