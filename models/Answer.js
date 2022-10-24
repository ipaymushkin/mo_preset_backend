const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName: {type: String},
    answers: [{type: Number}]
});

module.exports = mongoose.model('Answer', answerSchema);
