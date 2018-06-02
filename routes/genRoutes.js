const bodyParser = require('body-parser');
// const User = require('../models/user');
const request = require('request');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('index.pug');
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  }
}
