const express = require('express');
const router = express.Router();
const { HttpResponseHandler } = require('intelli-utility');

const GetByUserIdController = require('@controllers/v1/GetByUseId')

router.get('/user/:Id',async(req, res, next) => {
    try {
        const data = await GetByUserIdController.getUserById(req, res, next);
        HttpResponseHandler.success(req, res, data);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
