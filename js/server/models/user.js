const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  dni: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  link: { type: String, required: true },
  newflight: { type: String, required: true },
  newgroundservice: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);