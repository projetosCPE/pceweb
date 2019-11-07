const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', layout: 'layout'});
});

/* GET dashboard page. */
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Home' });
});

/* POST Login */
router.post('/login', function(req, res, next) {
  const user = req.body.user;
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((currentLogged) => {
    Client.getByEmail(user.email).then((currentLogged) => {
      if (currentLogged) {
        // req.session.userType = currentLogged.type;
        res.redirect('/dashboard');
      }
    }).catch((error) => {
      console.log(error);
    });
  }).catch((error) => {
    console.log(error);
  });
});


module.exports = router;
