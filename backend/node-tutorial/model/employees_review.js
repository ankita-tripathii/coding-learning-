const mongoose = require('mongoose');

const EmployeeReview = new mongoose.Schema({

    detail: {
        required: true,
        type: String
    },
    user_email: {
        required: true,
        type: String
    },
    user_id: {
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
    employee_review: { 
        type: EmployeeReview,
        default: undefined 
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('employeesreview', employee)