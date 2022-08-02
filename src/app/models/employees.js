const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Employees = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    age: { type: Number },
    gender: { type: String },
    pos: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
    phoneNumber: { type: String, maxLength: 11 },
    address: { type: String, maxLength: 255 },
  },
  { timestamps: true }
);

const EmployeesModel = mongoose.model('employee', Employees);

module.exports = EmployeesModel;
