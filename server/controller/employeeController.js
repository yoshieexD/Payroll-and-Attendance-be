const employeeModel = require('../model/employeeModel')
const employee = employeeModel;
exports.addEmployee = async (req, res) => {
    try {
        const { email, name } = req.body;
        const existingEmployee = await employee.findOne({ $or: [{ email: email }, { name: name }] }).exec();
        if (existingEmployee) {
            return res.status(400).json({ error: 'Employee already added' });
        }

        const newEmployee = new employee(req.body)
        const saveEmployee = await newEmployee.save();
        res.json(saveEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Internal error' })

    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const updateEmployee = await employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Internal error' })

    }
}

exports.getEmployee = async (req, res) => {
    try {
        const getEmployee = await employee.find({});
        res.json(getEmployee)
    } catch (error) {
        res.status(500).json({ error: 'Internal error' })

    }
}
exports.deleteEmployee = async (req, res) => {
    try {
        const deleteEmployee = await employee.findByIdAndDelete(req.params.id);
        res.json(deleteEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Internal error' })

    }
}