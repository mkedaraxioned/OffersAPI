const express = require('express');
const mobileRoutes = require('./mobileRoutes');
const orderRoutes = require('./orderRoutes');
const router = express.Router({ mergeParams:true });
router.use('/mobile',mobileRoutes);
router.use('/order',orderRoutes);
router.use((req, res, next) => {
  return res.status(500).send({error: 'Internal Server error'});
});
module.exports = router;