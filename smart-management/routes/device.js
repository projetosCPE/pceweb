const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/deviceMoveHome', { title: 'Movimentação de Aparelhos Home' });
});

router.get('/list', (req, res) => {
  Device.getAll().then((devices) => {
    res.render('admin/deviceRegistrationHome', { title: 'Cadastro de Aparelho', devices });
  }).catch((error) => {
    res.redirect('error');
    console.log(error);
  });
});

router.get('/movimentation', (req, res) => {
  res.render('admin/deviceMove', { title: 'Movimentação de Aparelhos' });
});

router.get('/signup', (req, res) => {
  res.render('admin/deviceRegistration', { title: 'Cadastro de Aparelho' });
});

router.post('/signup', (req, res) => {
  const ativa = req.body.device;
  Device.create(ativa).then((id) => {
    console.log("Aparelho criado com sucesso!");
    res.redirect('/device/list');
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
