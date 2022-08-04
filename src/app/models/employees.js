const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Employees = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    age: { type: Number },
    gender: { type: String },
    pos: { type: String, required: true },
    slug: { type: String, slug: ['name', 'age'], unique: true },
    phoneNumber: { type: String, maxLength: 11 },
    address: { type: String, maxLength: 255 },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
Employees.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

const EmployeesModel = mongoose.model('employee', Employees);


module.exports = EmployeesModel;
