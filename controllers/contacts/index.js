const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const createContact = require('./createContact');
const deleteContact = require('./deleteContact');
const updateContactById = require('./updateContactById');

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContactById
};