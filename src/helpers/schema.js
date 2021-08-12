const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const schemas = {
  mobile: Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required(),
    company: Joi.string()
    .required(),    
    display: Joi.string(),
    processor: Joi.string(),
    battery: Joi.string(),
    camera: Joi.string(),
    memory: Joi.string(),
    connector:Joi.string(),
    price:Joi.number(),
    link: Joi.string()
    .pattern(new RegExp("((http|https)://)(www.)?" + "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" + "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"))
    .message('Please Enter a valid link'),
    quantity:Joi.number()
  }),
  order: Joi.object({
    custName: Joi.string(),
    // mobiles: Joi.objectId(),
    mobiles: Joi.array().items(Joi.objectId()),
    quantity: Joi.array().items(Joi.number()) ,
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
    contactNo: Joi.number(),
    deliveryLoc: Joi.object({
      city:Joi.string(),
      street: Joi.string(),
      zip:Joi.string()
    })
  })
}

module.exports = schemas;