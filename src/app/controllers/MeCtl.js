const employeesModel = require('../models/employees');
const mongooseTools = require('../../util/mongoose');

class MeCtl {
  // [GET] /me/manage/employees
  manageEmployees(req, res, next) {
    employeesModel.find({}).then((employeeList) => {
      employeeList = mongooseTools.multiToObject(employeeList);
      res.render('components/Me/employees', { employeeList });
    });
  }
}

module.exports = new MeCtl();
