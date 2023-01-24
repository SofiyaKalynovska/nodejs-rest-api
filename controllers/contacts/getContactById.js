const contactsOperations = require('../../models/contacts');
const createError = require('http-errors');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsOperations.getContactById(contactId);
  if (!contact) {
    throw createError(404, `We can not find contact with id ${contactId}, please try another id`);
  }
  res.json(contact);
};

module.exports = getContactById;