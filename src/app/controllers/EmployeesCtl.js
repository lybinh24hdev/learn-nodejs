const employeesModel = require('../models/employees');
const mongooseTools = require('../../util/mongoose');

class EmployeesCtl {
  // [GET] /employees/:slug
  async show(req, res, next) {
    try {
      const result = await employeesModel.findOne({ slug: req.params.slug });
      const employee = mongooseTools.singleToObject(result);
      res.render('components/Employees/employee', { employee });
    } catch (e) {
      next(e);
    }
  }

  // [GET] /employees/create
  create(req, res, next) {
    res.render('components/Employees/create');
  }

  // [POST] /employees/store
  store(req, res, next) {
    const data = req.body;
    data.slug = req.body.name.toLowerCase().trim().replace(' ', '-');
    const small = new employeesModel(data)
      .save()
      .then(() => res.redirect('/'))
      .catch(next);
  }
}

module.exports = new EmployeesCtl();
