'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'enter your name'
  },
  rnummer: {
    type: String,
    required: 'enter your R-Number'
  },
 tagid: {
    type: [],
    required: 'enter the tag ID'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
