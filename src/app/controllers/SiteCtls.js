const employeesModel = require('../models/employees');
const mongooseTools = require('../../util/mongoose');

class SiteCtls {
  // [GET] /
  index(req, res, next) {
    // >>>> Insert data to model
    // const HauLe = new employeesModel({ age: 18, pos: 'senior' });
    // HauLe.save((err) => {
    //   if (err) console.log(err);
    // });

    // >>>> Show documents
    // employeesModel.find({}, (err, docs) => {
    //   if (!err) return res.json(docs);
    //   res.status(400).json({ error: 'Error!!!' });
    // });

    employeesModel
      .find({})
      .then((employeeList) => {
        employeeList = mongooseTools.multiToObject(employeeList);
        res.render('pages/home', { employeeList });
      })
      .catch(next); // catch(error => next(error))
  }

  // [GET] /about
  about(req, res) {
    res.render('pages/about');
  }
}

module.exports = new SiteCtls();
