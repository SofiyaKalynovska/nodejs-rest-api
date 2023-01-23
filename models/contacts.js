const fs = require("fs/promises");
const path = require('path');
const shortid = require('shortid');

const contactsPath = path.join(__dirname, './contacts.json');

async function listContacts() {
  const response = await fs.readFile(contactsPath);
  const listOfContacts = JSON.parse(response);
  return listOfContacts;
}

async function getContactById(contactId) {
  const listOfContacts = await listContacts();
  const contact = listOfContacts.find((contact) => contact.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const listOfContacts = await listContacts();
  const contactToDelete = listOfContacts.find(item => item.id === contactId);
  await fs.writeFile(contactsPath, JSON.stringify(listOfContacts.filter((contact) => contact.id !== contactId)));
  return contactToDelete;
}

async function addContact({ name, email, phone }) {
  const listOfContacts = await listContacts();
  const contactNew = { id: shortid.generate(), name, email, phone };
  const updatedContactsList = JSON.stringify([contactNew, ...listOfContacts], null, '\t');

  await fs.writeFile(contactsPath, updatedContactsList, (err) => { if (err) console.error(err) });
  return contactNew;

}

const updateContact = async (contactId, body) => {
  const listOfContacts = await listContacts();
  const contactIdx = listOfContacts.findIndex((contact) => contact.id === contactId);
  if (contactIdx === -1) {
    return null
  };
  listOfContacts[contactIdx] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(listOfContacts));
  return listOfContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
