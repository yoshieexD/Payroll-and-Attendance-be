const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String,
    },
    salary: {
        monthly: {
            type: Number,
        },
        total: {
            type: Number,
        }
    },
    startDate: {
        type: Date
    },
    employmentType: {
        type: String
    }
});

const employeeModel = mongoose.model('employeemodel', employeeSchema);
module.exports = employeeModel;