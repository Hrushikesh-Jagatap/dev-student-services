const express = require('express');

const router = express.Router();

const StudentDetails = require('./StudentDetails'); // done

const CreateStudent = require('./CreateStudent'); // done

const StudentDetailsById = require('./StudentDetailsById') // done

const UpdateStudentById = require('./UpdateStudentById'); // done

// const NotificationRoute = require('./Notification');

const DeleteStudentById = require('./DeleteStudentById')

const GetByuserId = require('./GetByUserId')

const updateStatus = require("./updateStatus")

const splash = require('./splashApi')




router.use('/', splash)

// Route to get all students
router.use('/', StudentDetails);

// Route to create a new student
router.use('/', CreateStudent);

// Route to get a single student by ID
router.use('/', StudentDetailsById);

// Route to update a student by ID
router.use('/', UpdateStudentById);

// Route to delete a delete by ID
router.use('/', DeleteStudentById);

// Route to get student by userId
router.use('/', GetByuserId);

// router to update status 
router.use('/', updateStatus);


module.exports = router;
