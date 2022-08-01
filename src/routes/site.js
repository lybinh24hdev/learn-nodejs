const siteCtls = require('../app/controllers/SiteCtls');
const express = require('express');
const router = express.Router();

// >>> Always put '/' in the last row otherwise it will always match with this path

router.get('/about', siteCtls.about);

router.get('/', siteCtls.index);

module.exports = router;
