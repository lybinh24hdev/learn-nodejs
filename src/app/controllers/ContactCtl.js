class ContactCtl {
  // [GET] /contact
  index(req, res) {
    res.render('pages/contact');
  }

  // [GET] /contact/:slug
  details(req, res) {
    res.send('Somethings detail on contact page...');
  }
}

module.exports = new ContactCtl();
