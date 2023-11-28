const StudentService = require('@services/v1/Getstudentwithsubectorclass');

// Controller function to get a single student by userID
const getUserById = async (req, res, next) => {
    try {
        const data = await StudentService.getUserById(req.query.className,req.query.subject);
        return data;
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getUserById
}  