const Order = require('../models/Order');
class OrderController {
  addOrder = async (req,res,next) => {
    try {
      const order = {
        custName: req.body.custName,
        mobile: req.body.mobile,
        quantity: req.body.quantity,
        email: req.body.email,
        contactNo: req.body.contactNo,
        deliveryLoc: {
          city:req.body.city,
          street: req.body.street,
          zip: req.body.zip
      }
    }
      const newOrder = await Order.create(order);
      return res.status(201).send({message:'Order added Successfully',order:newOrder});
      } catch(error) { 
      next(error);
      }
  }

}

module.exports = OrderController;