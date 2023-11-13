const express = require('express');

const router = express.Router();

const RatingByUserIdController = require('@controllers/v1/createRating')

router.post('/rating/:userId', async (req, res, next) => {
    try {
        const result = await RatingByUserIdController.postRating(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }

});

router.post('/feedback/:userId', async (req, res, next) => {
    try {
        const result = await RatingByUserIdController.postFeedback(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }

});

module.exports = router;
