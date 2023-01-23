const { addContactSchema, updateContactSchema } = require('../validationSchemas');

const validationAddContact = (req, res, next) => {
  const validation = addContactSchema.validate(req.body);
  if (validation.error) {
    validation.error.status = 400;
    next(validation.error);
    return;
  }
  next();
};

const validationUpdateContact = (req, res, next) => {
  const validation = updateContactSchema.validate(req.body);
  if (validation.error) {
    validation.error.status = 400;
    next(validation.error);
    return;
  }
  next();
};

module.exports = {
  validationAddContact,
  validationUpdateContact
};