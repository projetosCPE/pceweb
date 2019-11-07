const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/signup', function(req, res, next) {
  res.render('admin/clientsRegistration', { title: 'Cadastro de Clientes' });
});

router.get('/list', (req, res) => {
  Client.getAll().then((clients) => {
    res.render('admin/clientsRegistrationHome', { title: 'Lista de Clientes', clients });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});

router.get('/edit/:id', (req, res) => {
  Client.getById(req.params.id).then((client) => {
    res.render('admin/clientsRegistrationEdit', { title: 'Edição de Perfil', client });
  });
});

router.get('/devices', (req, res) => {
  res.render('admin/clientsXdevicesHome', { title: 'Clientes X  Aparelhos' });
});

router.get('/clientsXdevices', (req, res) => {
  res.render('admin/clientsXdevices', { title: 'Clientes X  Aparelhos' });
});

router.post('/signup', function(req, res, next) {
  const ativa = req.body.client;
  ativa.password = "123456";    //Senha padrão
  ativa.type = "Cliente";
  firebase.auth().createUserWithEmailAndPassword(ativa.email, ativa.password).then((user) => {
    delete ativa.password;
    Client.create(ativa).then((id) => {
      res.redirect('/client/list');
    }).catch((error) => {
      console.log(error);
    });
  }).catch((error) => {
    res.redirect('/error');
    console.log(error);
  });
});

router.post('/:id', (req, res) => {
  const client = req.body.client;
  Client.update(req.params.id, device).then(() => {
    console.log("Atualizado!");
    res.redirect('/client/list');
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

module.exports = router;
