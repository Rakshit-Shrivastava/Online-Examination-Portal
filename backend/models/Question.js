const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'teacher'},
    course: {type: String, required: true},
    branch: {type: String, required: true},
    semester: {type: String, required: true},
    subjectName: {type: String, required: true},
    question: {type: String, required: true},
    option1: {type: String, required: true},
    option2: {type: String, required: true},
    option3: {type: String, required: true},
    option4: {type: String, required: true},
    correctAnswer: {type: String, required: true},
    totalMarks: {type: String, required: true},
    totalQuestions: {type: String, required: true}
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;