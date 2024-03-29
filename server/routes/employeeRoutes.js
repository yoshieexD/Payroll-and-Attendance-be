const express = require('express');
const { addEmployee, updateEmployee, deleteEmployee, getEmployee } = require('../controller/employeeController');
const router = express.Router();
router.post('/add', addEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);
router.get('/get', getEmployee);

module.exports = router;