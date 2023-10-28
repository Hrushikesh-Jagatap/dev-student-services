const StudentService = require('@services/v1/GetByUserId');

// Controller function to get a single student by userID
const getUserById = async (req, res, next) => {
    try {
        const data = await StudentService.getUserById(req.params.Id);
        return data;
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getUserById
}  