const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        first: String,
        last: { type: String, required: true }
    },
    salary: String
});

employeeSchema.methods.print = function () {
    console.log(this.name.full, this.salary);
};

employeeSchema.virtual('name.full').get(function () {
    return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('employee', employeeSchema);
