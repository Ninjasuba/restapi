const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Course
var Course = new Schema({
  course_name: {
    type: String
  },
  course_price: {
    type: Number
  }
},{
    collection: 'courses'
});

module.exports = mongoose.model('Course', Course);
