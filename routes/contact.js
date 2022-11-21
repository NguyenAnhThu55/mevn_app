const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const APC = require('../controllers/contact');


router.get('/', APC.fetchAllContact);
router.get('/:id', APC.fetchContactByID);
router.post('/',APC.createContact);
router.patch('/:id',APC.updateContact);
router.delete('/:id', APC.deleteContact);

module.exports = router;