const contactsOperations = require('../../models/contacts');
const createError = require('http-errors');

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contactsOperations.removeContact(contactId);
  if (!deletedContact) {
    throw createError(404, `We can not find contact with id ${contactId}, please try another id`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: { deletedContact }
  });
};

module.exports = deleteContact;