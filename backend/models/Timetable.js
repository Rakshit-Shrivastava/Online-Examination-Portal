const mongoose = require('mongoose');
const { Schema } = mongoose;

const TimetableSchema = new Schema({
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'teacher'},
    day: {type: String, required: true},
    date: {type: String, required: true},
    subject: {type: String, required: true},
    branch: {type:String, required: true},
    semester: {type:String, required:true}
})

const Timetable = mongoose.model('timetable', TimetableSchema);

module.exports = Timetable;