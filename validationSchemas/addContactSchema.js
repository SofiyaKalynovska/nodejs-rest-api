const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['ua', 'uk', 'com', 'net'] } }).required(),
  phone: Joi.string().min(7).max(14).required()
})

module.exports = addContactSchema;