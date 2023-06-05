const mongoose = require('mongoose');

var FounderSchema = new mongoose.Schema({
    founderID: Number,
    name: String,
    position: String,
    salary: Number,
});

var FounderModel = mongoose.model('founder',FounderSchema,'founder');
module.exports = FounderModel