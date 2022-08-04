const employeesModel = require('../models/employees');
const mongooseTools = require('../../util/mongoose');

class MeCtl {
  // [GET] /me/manage/employees
  manageEmployees(req, res, next) {
    Promise.all([
      employeesModel.find({}),
      employeesModel.countDocumentsDeleted(),
    ]).then(([employeeList, countDeleted]) => {
      employeeList = mongooseTools.multiToObject(employeeList);
      res.render('components/Me/employees', { employeeList, countDeleted });
    });
  }
  // [GET] /me/trash/employees
  trash(req, res, next) {
    employeesModel.findDeleted({}).then((employeeList) => {
      employeeList = mongooseTools.multiToObject(employeeList);
      res.render('components/Me/softDelete', { employeeList });
    });
  }
}

module.exports = new MeCtl();
