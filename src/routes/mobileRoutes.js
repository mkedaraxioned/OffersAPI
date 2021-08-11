const express = require('express');
const router = express.Router({ mergeParams:true });
const MobileController = require('../controllers/MobileController');
const mobileControllerObj = new MobileController();
const errorHandler = require('../middlewares/error');
//JOI validation schema
const schemas =  require('../helpers/schema');
const validateData = require('../middlewares/validation');
router.route('/')
  .post(validateData(schemas.mobile),mobileControllerObj.addMobile,errorHandler);
module.exports = router;