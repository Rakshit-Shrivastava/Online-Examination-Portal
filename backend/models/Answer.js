const mongoose = require('mongoose');
const {Schema} = mongoose;

const AnswerSchema = new Schema({
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'teacher'},
    name: {type: String, required: true},
    selectedOption: {type: String, required: true},
});

const Answer = mongoose.model('answer', AnswerSchema);

module.exports = Answer;