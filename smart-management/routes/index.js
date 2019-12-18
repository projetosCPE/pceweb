const express = require('express');
const firebase = require('firebase');
const auth = require('./middleware/auth');
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
router.get('/dashboard',auth.isAuthenticated,(req, res) => {
  console.log(req.session);
  res.render('dashboard', { title: 'Home' });
});


/* POST Login */
router.post('/login', (req, res) => {
  const user = req.body.user;
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((userID) => {
    User.getByUid(userID.user.uid).then((currentLogged) => {
      // req.session.user.uid = currentLogged.user.uid;
      // req.session.email = currentLogged.user.email;
      const userR = {
        name: currentLogged.name,
        mid: currentLogged.mid,
        uid: currentLogged.uid,
        email: currentLogged.email,
        type: currentLogged.type
      };
      req.session.user = currentLogged;
      console.log(req.session.user);
      console.log('-------------------------------------------');
      if(userR.type == "Gestor"){
        res.redirect('/logUse');
        console.log('---------------entrou-------------------');
      }
      if(userR.type == "ClienteADM"){
        res.redirect('/manager/list');
      }
      if(userR.type == "ADM"){
        res.redirect('/client/list');
      }
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('---------------error de tipo-------------------');
    });
  }).catch((error) => {
    var erros = []
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        console.log('AAAAAAAAAAAAAAAAAAAAAAA-');
        erros.push({texto: "EMAIL INVÁLIDO"})
    }
    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null){
      erros.push({texto: "SENHA INVÁLIDA"})
    }
    if(erros.length > 0){
      console.log('RENDEEEEERRAAA');
        req.flash("error_msg","nao criado")
        res.render("login", {erros: erros, title: 'Login', layout: 'layout'})

    }

  });
});

router.get('/forgotPassword', (req, res) => {
  res.render('forgotPassword', {title:'Esqueci Minha Senha',layout:'layout'});
});

router.post('/forgotPassword', (req, res) => {
  const emailAddress = req.body.user;
  console.log(emailAddress);
  firebase.auth().sendPasswordResetEmail(emailAddress.email).then(function() {
    res.redirect('/');
    req.flash('success', 'Email enviado');
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});
// GET /logout
router.get('/logout', (req, res, next) => {
  firebase.auth().signOut().then(() => {
      // delete req.session.fullName;
      // delete req.session.userId;
      delete req.session.user;
      res.redirect('/');
    }).catch((error) => {
      console.log(error);
      res.redirect('/error');
    });
  });

module.exports = router;
