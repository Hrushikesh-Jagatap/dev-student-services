const StudentData = require('@root/src/apis/models/Student');
const {
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('@common/libs');

// Service function to get a single user by ID
const  getUserById = async (className ,subject) => {
  try {

    const data = await StudentData.find({ "educationDetails.class": className , "educationDetails.preferredSub": { $in: [subject]}});
     const userIds = data.map(student => student.userId);
  //  console.log(data.length);
  //  let userid=[];
  //  for (let i = 0; i < data.length; i++) {
  // userid.push(data[i].userId); 
  // }
    return userIds;
  } catch (error) {
    throw new INTERNAL_SERVER_ERROR;
  }
};

module.exports = {
  getUserById
}  