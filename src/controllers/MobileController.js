const Mobile = require('../models/Mobile');
class MobileController {
  addMobile = async (req,res,next) => {
    try {
      const mobile = {
        name: req.body.name,
        company:req.body.company,
        display: req.body.display,
        processor: req.body.processor,
        battery: req.body.battery,
        camera: req.body.camera,
        memory: req.body.memory,
        connector:req.body.connector,
        price:req.body.price,
        link:req.body.link,
        quantity:req.body.quantity
      };
      const newMobile = await Mobile.create(mobile);
      return res.status(201).send({message:'Mobile added Successfully',mobile:newMobile});
      } catch(error) { 
      next(error);
      }
  }

  getMobiles = async (req,res,next) => {
    try {
      const mobiles = await Mobile.find();
      if (!mobiles) return res.status(404).send({ message: 'No mobiles found' });
      return res.status(201).send({message:'Mobile available',mobiles});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MobileController;