const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/signup', function(req, res, next) {
  res.render('client/managerRegistration', { title: 'Cadastro de Gestores', layout: 'layoutDashboardmanager'});
});

router.get('/list', (req, res) => {
  Client.getAll().then((clients)=>{
    res.render('client/managerList', { title: 'Lista de Gestores', clients });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});

router.post('/signup', function(req, res, next) {
  const ativa = req.body.manager;
  ativa.password = "123456";    //Senha padrão
  ativa.type = "Gestor";
  firebase.auth().createUserWithEmailAndPassword(ativa.email, ativa.password).then((user) => {
    delete ativa.password;
    Manager.create(ativa).then((id) => {
      res.redirect('/manager/list');
    }).catch((error) => {
      console.log(error);
    });
  }).catch((error) => {
    res.redirect('/error');
    console.log(error);
  });
});

module.exports = router;
