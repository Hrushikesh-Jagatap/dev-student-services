const StudentData = require('@models/Student');
const AppVersion = require('@models/AppVersion');

const getSplashData = async (userId) => {

  try {
    
    const user = await StudentData.findOne({ userId: userId }).lean();
    
    if (user === null) {
      return {
        status: 404,
        message: 'STUDENT_NOT_FOUND',
      };
    }

    const appVersions = await AppVersion.findOne({});

    const response = {
      user:user,
      appVersions: appVersions ?? {},
    };

    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSplashData,
};
