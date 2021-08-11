const mongoose = require('mongoose');
const mobileSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true,'Please insert product name'],
    unique: true
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
  link:{
    type:String,
    validate: {
      validator :function (link) {
        return new RegExp("((http|https)://)(www.)?" + "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" + "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)").test(link);
      },
      message: 'Enter a valid link'
    }

  },
  quantity:Number
});

//Model creation
const Mobile = mongoose.model('Mobile',mobileSchema);

module.exports = Mobile;
