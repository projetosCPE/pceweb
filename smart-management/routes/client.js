const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();

router.get('/signup', function(req, res, next) {
  res.render('admin/clientsRegistration', { title: 'Cadastro de Clientes' });
});

router.get('/list', (req, res) => {
  Client.getAll().then((clients)=>{
    res.render('admin/clientsRegistrationHome', { title: 'Lista de Clientes', clients });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});

router.get('/devices', (req, res) => {
  res.render('admin/clientsXdevicesHome', { title: 'Clientes X  Aparelhos', layout: 'layoutdashboard' });
});

router.get('/clientsXdevices', (req, res) => {
  res.render('admin/clientsXdevices', { title: 'Clientes X  Aparelhos', layout: 'layoutdashboard' });
});

router.post('/signup', function(req, res, next) {
  const ativa = req.body.Clients;
  Client.create(ativa).then((id) => {
    res.redirect('/client/list');
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
