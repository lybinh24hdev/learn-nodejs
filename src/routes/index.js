const contactRouter = require('./contact');
const employeesRouter = require('./employees');
const siteRouter = require('./site');

const route = (app) => {
  // >>> Always put '/' in the last row otherwise it will always match with this path
  app.use('/contact', contactRouter);
  app.use('/employees', employeesRouter);
  app.use('/', siteRouter);
};

module.exports = route;
