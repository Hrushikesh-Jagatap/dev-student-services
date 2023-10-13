const StudentService = require('@services/v1/EducationDetails');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to update a EducationalDetails by ID
const updateEducatinalDetailsById = async (req, res, next) => {
    try {
        const updatedEducationalDetails = req.body.educationDetails;

        const updatedDetails = await StudentService.updatedEducationalDetailsById(req.params.userId, updatedEducationalDetails);

        if (!updatedDetails) {
            return HttpResponseHandler.success(req, res, updatedDetails);
        }
        return HttpResponseHandler.success(req, res, updatedDetails);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    updateEducatinalDetailsById,
};
