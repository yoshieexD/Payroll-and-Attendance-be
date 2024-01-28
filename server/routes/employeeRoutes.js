const express = require('express');
const { addEmployee, updateEmployee, deleteEmployee } = require('../controller/employeeController');
const router = express.Router();
router.post('/add', addEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete', deleteEmployee);

module.exports = router;