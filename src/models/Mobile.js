const mongoose = require('mongoose');
const mobileSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true,'Please insert product name']
  },
  company: {
    type:String,
    required: [true, 'Please enter Parent company']
  },
  display: String,
  processor: String,
  battery: String,
  camera: String,
  memory: String,
  connector:String,
  price:Number,
  link:String,
  quantity:Number
});

//Model creation
const Mobile = mongoose.model('Mobile',mobileSchema);

module.exports = Mobile;
