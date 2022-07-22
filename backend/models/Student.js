const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: {type: String, required: true},
    rollno: {type: String, required: true, unique: true},
    enroll: {type: String, required: true, unique: true},
    course: {type: String, required: true},
    branch: {type: String, required: true},
    semester: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true, unique: true},
    password: {type: String, required: true},
    flag: {type: Number, required: true}
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;