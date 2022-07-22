const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config');
const fetchUser = require('../middleware/fetchUser');

// Route 1: Creating a new user Teacher using: POST '/api/authentication/createUser/teacher'. no login required
router.post('/createUser/teacher', [
    body('name').isLength(2),
    body('course').isLength(2),
    body('branch').isLength(2),
    body('email').isEmail(),
    body('phone','invalid number').isNumeric().isLength(10),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    // If error exists resturn bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    try {

        // Verifying the user is already present or not
        let teacher = await Teacher.findOne({ email: req.body.email });

        if (teacher) {
            return res.status(400).send(success,"Sorry, but a user with this email already exist.");
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        // Creating a new uer: teacher
        teacher = await Teacher.create({
            name: req.body.name,
            course: req.body.course,
            branch: req.body.branch,
            email: req.body.email,
            phone: req.body.phone,
            password: secPassword,
            flag: req.body.flag,
        });

        const data = {
            teacher: {
                id: teacher.id
            }
        }
        console.log(data);
        const authenticationToken = jwt.sign(data, secret);
        success = true;
        res.json({ success,authenticationToken });
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Internal Server Error");
    }
})
// Route 2: Creating a new user Student using: POST '/api/authentication/createUser/student'. no login required
router.post('/createUser/student', [
    body('name').isLength(2),
    body('course').isLength(2),
    body('branch').isLength(2),
    body('email').isEmail(),
    body('phone').isNumeric().isLength(10),
    body('password').isLength({ min: 5 }),
    body('rollno').notEmpty(),
    body('enroll').notEmpty(),
    body('semester').notEmpty()
], async (req, res) => {
    // If error exists resturn bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        // Verifying the user is already present or not
        let student = await Student.findOne({ email: req.body.email });

        if (student) {
            return res.status(400).send("Sorry, but a user with this email already exist.");
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        // Creating a new uer: student
        student = await Student.create({
            name: req.body.name,
            rollno: req.body.rollno,
            enroll: req.body.enroll,
            course: req.body.course,
            branch: req.body.branch,
            semester: req.body.semester,
            email: req.body.email,
            phone: req.body.phone,
            password: secPassword,
            flag: req.body.flag,
        });

        const data = {
            student: {
                id: student.id
            }
        }
        const authenticationToken = jwt.sign(data, secret);
        res.json({ authenticationToken });
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Internal Server Error");
    }
})

// Route 3: Authenticating a teacher using: POST '/api/authentication/login'. no login required
router.post('/login', [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password cannot be empty').exists()
], async (req, res) => {
    let success = false;
    // If error exists resturn bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        let teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return res.status(400).json({ success ,errors: "Please try to login with corerct credentials" });
        }

        const passCompare = await bcrypt.compare(password, teacher.password);
        if (!passCompare) {
            return res.status(400).json({ success, errors: "Please try to login with corerct credentials" });
        }

        const data = {
            teacher: {
                id: teacher.id
            }
        }
        console.log(data);
        const authenticationToken = jwt.sign(data, secret);
        success = true;
        res.json({ success, authenticationToken });
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Internal Server Error");
    }
})
// Route 4: Authenticating a student using: POST '/api/authentication/login'. no login required
router.post('/login/student', [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password cannot be empty').exists()
], async (req, res) => {
    // If error exists resturn bad request and the error itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        let student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ errors: "Please try to login with correct credentials" });
        }

        const passCompare = await bcrypt.compare(password, student.password);
        if (!passCompare) {
            return res.status(400).json({ errors: "Please try to login with correct credentials" });
        }

        const data = {
            student: {
                id: student.id
            }
        }
        const authenticationToken = jwt.sign(data, secret);
        res.json({ authenticationToken });
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Internal Server Error");
    }
})

// Route 5: Getting a logged in teacher data using: POST '/api/authentication/getUser'. login required
router.post('/getUser', fetchUser, async (req, res) => {
    try {
        if (req.teacher) {
            const userId = req.teacher.id;
            const user = await Teacher.findById(userId).select("-password");
            res.send(user);
        } else {
            const userId = req.student.id;
            const user = await Student.findById(userId).select("-password");
            res.send(user);
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 6: Getting a logged in student data using: POST '/api/authentication/getUser'. login required
// router.post('/getUser', fetchUser, async (req, res) => {
//     try {
//         const userId = req.student.id;
//         const user = await Student.findById(userId).select("-password");
//         res.send(user);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error"); 
//     }
// })

module.exports = router;