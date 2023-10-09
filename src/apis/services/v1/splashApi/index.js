const StudentData = require('@models/Student');
const AppVersion = require('@models/AppVersion');

const getSplashData = async (userId) => {

  try {
    
    const user = await StudentData.findOne({ userId: userId });

    if (!user) {
      throw new Error('User not found');
    }

    const appVersions = await AppVersion.findOne({});

    const result = {
      name: user.first_name + (user.last_name ? ' ' + user.last_name : ''),
      email: user.email,
      phone: user.phone_number,
      address: user.address,
      batch_taught: user.batch_taught,
      appVersions: appVersions || {}
    };
    
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSplashData,
};
