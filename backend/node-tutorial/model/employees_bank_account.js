const mongoose = require('mongoose');

const EmployeeAccounts = new mongoose.Schema({

    account_holder_name: {
        required: true,
        type: String
    },
    account_number:{
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'UserDetail'
    }
},
{
  timestamps: true
});

const employee = new mongoose.Schema({

    employee_name: {
        required: true,
        type: String
    },
    employee_emailId: {
        required: true,
        type: String
    },
    employee_occupation: {
        required: true,
        type: String
    },
    // embedded object
    // TODO: embedded object in list   
    employee_account: { 
        type: EmployeeAccounts,
        default: undefined 
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('employeesaccount', employee)