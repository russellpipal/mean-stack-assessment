var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: String,
  firstName: String,
  lastName: String,
  city: String,
  powerName: String
});

var Hero = mongoose.model('heroe', heroSchema);  // 'heroe' because mongoose automatically adds 's'

module.exports = Hero;
