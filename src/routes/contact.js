const contactCtl = require('../app/controllers/ContactCtl');
const express = require('express');
const router = express.Router();

router.get('/:slug', contactCtl.details);
router.get('/', contactCtl.index);

module.exports = router;
