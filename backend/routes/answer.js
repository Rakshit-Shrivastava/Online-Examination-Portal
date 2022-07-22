const express = require('express');
const router = express.Router();
const Answer = require("../models/Answer");
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

// Route 1: Fetch all answers. using GET: api/answer/submitAnswer. login required

router.get('/fetchAllAnswer', fetchUser, async (req, res) => {
    try {
        const answer = await Answer.find({ teacher: req.teacher.id });
        res.json(answer);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2: Submitting answers. using POST: api/answer/submitAnswer. login required
router.post('/submitAnswer', fetchUser, [
    body('name').notEmpty(),
    body('selectedOption').notEmpty(),
], async (req, res) => {

    // If error exists return bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, selectedOption} = req.body;

    try {
        const newAnswer = new Answer({ name, selectedOption, teacher: req.teacher.id });
        const savedAnswer = await newAnswer.save();
        res.json(savedAnswer);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;