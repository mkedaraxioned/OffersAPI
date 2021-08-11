const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  custName: {
    type:String,
    required: [true,'Please insert product name']
  },
  mobile: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Mobile' ,
      required: [true,'Please insert mobile id']
    }
  ] ,
  quantity: [{type:Number}],
  email: {
    type:String,
    required: [true,'Enter the email field'],
    unique:false
  },
  contactNo: Number,
  deliveryLoc: {
    city:String,
    street:String,
    zip: String
  }
});

//Model creation
const Order = mongoose.model('Order',orderSchema);

module.exports = Order;
