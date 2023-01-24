const express = require('express');
const router = express.Router();
const { contacts: ctrl } = require('../../controllers');
const { validationAddContact, validationUpdateContact } = require('../../middlewares/validation');
const { ctrlWrapper } = require('../../middlewares/ctrlWrapper');

router.get('/', ctrlWrapper(ctrl.getAllContacts));
router.get('/:contactId', ctrlWrapper(ctrl.getContactById));
router.post('/', validationAddContact, ctrlWrapper(ctrl.createContact));
router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));
router.patch('/:contactId', validationUpdateContact, ctrlWrapper(ctrl.updateContactById));

module.exports = router
