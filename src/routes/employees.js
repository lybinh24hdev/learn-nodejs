const employeesCtl = require('../app/controllers/EmployeesCtl');
const express = require('express');
const router = express.Router();

router.post('/store', employeesCtl.store);
router.get('/create', employeesCtl.create);
router.get('/:id/edit', employeesCtl.edit);
router.delete('/:id', employeesCtl.delete);
router.put('/:id', employeesCtl.update);
router.get('/:slug', employeesCtl.show);

module.exports = router;
