const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');
const User = require('../models/user');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', layout: 'layout'});
});

/* GET dashboard page. */
router.get('/dashboard', (req, res) => {
  console.log(req.session);
  res.render('dashboard', { title: 'Home' });
});


/* POST Login */
router.post('/login', (req, res) => {
  const user = req.body.user;
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((userID) => {
    User.getByUid(userID.user.uid).then((currentLogged) => {
      if(currentLogged.type == "Gestor"){
        res.redirect('/logUse');
      }
      if(currentLogged.type == "ClienteADM"){
        res.redirect('/manager/signup');
      }
      if(currentLogged.type == "ADM"){
        res.redirect('/client/signup');
      }
    });
  }).catch((error) => {
    console.log(error);
    res.redirect('/login');
  });
});

module.exports = router;
