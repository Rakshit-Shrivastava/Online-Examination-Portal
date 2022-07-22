const express = require("express");
const router = express.Router();
const Question = require('../models/Question');
const Student = require('../models/Student');
const fetchUser = require('../middleware/fetchUser');

// Route 1: Get all the selective question for student using: GET. '/api/paper/fetchSelectiveQuestion'. login required
router.get('/fetchSelectiveQuestion', fetchUser, async (req, res) =>{
    const studentId = req.student.id;
    const student = await Student.findById(studentId).select("-password");
    const paper = await Question.find({branch: student.branch, semester: student.semester});
    res.json(paper);
})

module.exports = router;