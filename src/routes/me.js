const meCtl = require('../app/controllers/MeCtl');
const express = require('express');
const router = express.Router();

router.get('/manage/employees', meCtl.manageEmployees);
router.get('/trash/employees', meCtl.trash);

module.exports = router;
