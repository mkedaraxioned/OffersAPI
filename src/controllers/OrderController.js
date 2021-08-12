const Order = require('../models/Order');
const Mobile = require('../models/Mobile');
class OrderController {
  addOrder = async (req,res,next) => {
    try {
      const order = {
        custName: req.body.custName,
        mobiles: req.body.mobiles,
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

  getOrders = async (req,res,next) => {
    try {
      const orders = await Order.find({}, {_id:0,orderId:"$_id",custName:1,email:1,mobile:1,quantity:1})
      .populate({path:'mobiles',select:'name company price link quantity'}).exec((err, mobiles) => {       //works with .populate('mobiles')
                if(err) return res.status(404).send({ error:'Orders not found' });
         return res.status(200).send({ message:'orders availble',orders:mobiles });  
      });

    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;