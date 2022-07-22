const express = require('express');
const router = express.Router();
const TimeTable = require('../models/Timetable');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');

// Route 1: Get the timetable using: GET '/api/timetable/fetchTimetable'. login required
router.get('/fetchTimetable', fetchUser, async (req, res) => {
    try {
        const timetable = await TimeTable.find({ teacher: req.teacher.id });
        res.json(timetable);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2: Createa a new timetable using: POST '/api/timetable/createTimetable'. login required
router.post('/createTimetable', fetchUser, [
    body('day').notEmpty(),
    body('date').notEmpty(),
    body('subject').notEmpty(),
    body('branch').notEmpty(),
    body('semester').notEmpty(),
], async (req, res) => {
    // If error exists resturn bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { day, date, subject, branch, semester } = req.body;

    try {
        const newTimetable = new TimeTable({ day, date, subject, branch, semester, teacher: req.teacher.id });
        const savedTimetable = await newTimetable.save();
        res.json(savedTimetable);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3: Updating an  timetable using: PUT '/api/timetable/updateTimetable'. login required
router.put('/updateTimetable/:id', fetchUser, async (req, res) => {

    try {
        const { rows, day, date, subject } = req.body;

        const updatedTimetable = {};
        if(day){updatedTimetable.day = day};
        if(date){updatedTimetable.date = date};
        if(subject){updatedTimetable.subject = subject};
        if(subject){updatedTimetable.branch = branch};
        if(subject){updatedTimetable.semester = semester};

        // Find the timetable to be updated and update it
        let newUpdatedTimetable = await TimeTable.findById(req.params.id);
        if(!newUpdatedTimetable){return res.status(404).send("Not found")};
        if(newUpdatedTimetable.teacher.toString() !== req.teacher.id){return res.status(401).send("Not found")};
        newUpdatedTimetable = await TimeTable.findByIdAndUpdate(req.params.id, {$set: updatedTimetable}, {new: true});
        res.json(newUpdatedTimetable);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4: Deleting a timetable using: DELETE '/api/timetable/deleteTimetable'. login required
router.delete('/deleteTimetable/:id', fetchUser, async (req,res) => {
    try {
        // Find the timetable to be deleted and delete it
        let timetable = await TimeTable.findById(req.params.id);
        if (!timetable) { return res.status(404).send("Not found") };

        // Allow deletion of the timetable if the timetable is written by this user
        if(timetable.teacher.toString() !== req.teacher.id){return res.status(401).send("Not found")};
        timetable = await TimeTable.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been successfully deleted", timetable: timetable });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;