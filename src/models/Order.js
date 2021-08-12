const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  custName: {
    type:String,
    required: [true,'Please insert product name']
  },
  mobiles:  [{ type: mongoose.Schema.Types.ObjectId,   ref: 'Mobile' }] ,
  quantity: [{type:Number}],
  email: {
    type:String,
    required: [true,'Enter the email field']
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
