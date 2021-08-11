const Joi = require('joi');
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
    .pattern(new RegExp("((http|https)://)(www.)?" + "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" + "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)")),
    quantity:Joi.number()
  })
}

module.exports = schemas;