const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const { post } = require('./authentication');

// Route 1: Get all the question using: GET '/api/question/fetchAllQuestion'. login required
router.get('/fetchAllQuestion', fetchUser, async (req, res) => {
    try {
        const questions = await Question.find({ teacher: req.teacher.id });
        res.json(questions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2: Createa a new question using: POST '/api/question/createQuestion'. login required
router.post('/createQuestion', fetchUser, [
    body('course').notEmpty(),
    body('branch').notEmpty(),
    body('semester').notEmpty(),
    body('subjectName').notEmpty(),
    body('question').notEmpty(),
    body('option1').notEmpty(),
    body('option2').notEmpty(),
    body('option3').notEmpty(),
    body('option4').notEmpty(),
    body('correctAnswer').notEmpty(),
    body('totalMarks').notEmpty(),
    body('totalQuestions').notEmpty(),
], async (req, res) => {
    // If error exists return bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { course, branch, semester, subjectName, question, option1, option2, option3, option4, correctAnswer, totalMarks, totalQuestions } = req.body;

    try {
        const newQuestion = new Question({ course, branch, semester, subjectName, question, option1, option2, option3, option4, correctAnswer, totalMarks, totalQuestions, teacher: req.teacher.id });
        const savedQuestion = await newQuestion.save();
        res.json(savedQuestion);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3: Updating an  question using: PUT '/api/question/updateQuestion'. login required
router.put('/updateQuestion/:id', fetchUser, async (req, res) => {

    try {
        const { course, branch, semester, subjectName, question, option1, option2, option3, option4, correctAnswer, totalMarks, totalQuestions } = req.body;

        const updatedQuestion = {};
        if(course){updatedQuestion.course = course};
        if(branch){updatedQuestion.branch = branch};
        if(semester){updatedQuestion.semester = semester};
        if(subjectName){updatedQuestion.subjectName = subjectName};
        if(question){updatedQuestion.question = question};
        if(option1){updatedQuestion.option1 = option1};
        if(option2){updatedQuestion.option2 = option2};
        if(option3){updatedQuestion.option3 = option3};
        if(option4){updatedQuestion.option4 = option4};
        if(correctAnswer){updatedQuestion.correctAnswer = correctAnswer};
        if(totalMarks){updatedQuestion.totalMarks = totalMarks};
        if(totalQuestions){updatedQuestion.totalQuestions = totalQuestions};

        // Find the note to be updated and update it
        let newUpdatedQuestion = await Question.findById(req.params.id);
        if(!newUpdatedQuestion){return res.status(404).send("Not found")};
        if(newUpdatedQuestion.teacher.toString() !== req.teacher.id){return res.status(401).send("Not found")};
        newUpdatedQuestion = await Question.findByIdAndUpdate(req.params.id, {$set: updatedQuestion}, {new: true});
        res.json(newUpdatedQuestion);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4: Deleting an  question using: DELETE '/api/question/deleteQuestion'. login required
router.delete('/deleteQuestion/:id', fetchUser, async (req,res) => {
    try {
        // Find the question to be deleted and delete it
        let question = await Question.findById(req.params.id);
        if (!question) { return res.status(404).send("Not found") };

        // Allow deletion of the question if the question is written by this user
        if(question.teacher.toString() !== req.teacher.id){return res.status(401).send("Not found")};
        question = await Question.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been successfully deleted", question: question });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;