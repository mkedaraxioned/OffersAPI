const express = require('express');
const router = express.Router({ mergeParams:true });
const OrderController = require('../controllers/OrderController');
const orderControllerObj = new OrderController();
const errorHandler = require('../middlewares/error');
//JOI validation schema
const schemas =  require('../helpers/schema');
const validateData = require('../middlewares/validation');
router.route('/')
  .post(validateData(schemas.order),orderControllerObj.addOrder,errorHandler);
module.exports = router;