const Joi = require("joi");

const updateContactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['ua', 'uk', 'com', 'net'] } }),
  phone: Joi.string().min(7).max(14)
}).or("name", "email", "phone");

module.exports = updateContactSchema;