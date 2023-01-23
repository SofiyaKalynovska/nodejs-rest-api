const contactsOperations = require('../../models/contacts');

const createContact = async (req, res) => {
  const result = contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    message: "contact added",
    data: {
      result
    }
  });
};

module.exports = createContact;