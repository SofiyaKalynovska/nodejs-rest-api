const contactsOperations = require('../../models/contacts');
const createError = require('http-errors');

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw createError(404, `We can not find contact with id ${contactId}, please try another id`);
  }
  res.send(result);
};

module.exports = updateContactById;