const employeesModel = require('../models/employees');
const mongooseTools = require('../../util/mongoose');

class EmployeesCtl {
  // [GET] /employees/:slug
  async show(req, res, next) {
    try {
      const result = await employeesModel.findOne({ slug: req.params.slug });
      console.log(result);
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
    const small = new employeesModel(req.body)
      .save()
      .then(() => res.redirect('/me/manage/employees'))
      .catch(next);
  }

  // [GET] /employees/:id/edit
  edit(req, res, next) {
    employeesModel.findById(req.params.id).then((employee) => {
      employee = mongooseTools.singleToObject(employee);
      res.render('components/Employees/edit', { employee });
    });
  }

  // [PUT] /employees/:id
  async update(req, res, next) {
    await employeesModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.redirect('/me/manage/employees');
  }

  // [DELETE] /employees/:id
  async delete(req, res, next) {
    await employeesModel.delete({ _id: req.params.id });
    res.redirect('back');
  }

  // [PATCH] /employees/:id/restore
  async restore(req, res, next) {
    await employeesModel.restore({ _id: req.params.id });
    res.redirect('back');
  }

  // [DELETE] /employees/:id/force-delete
  async forceDelete(req, res, next) {
    await employeesModel.deleteOne({ _id: req.params.id });
    res.redirect('back');
  }
}

module.exports = new EmployeesCtl();
