const StudentData = require('@models/Student');
const AppVersion = require('@models/AppVersion');

const getSplashData = async (userId) => {

  try {
    
    const user = await StudentData.findOne({ userId: userId }).lean();

    if (!user) {
      throw new Error('User not found');
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
