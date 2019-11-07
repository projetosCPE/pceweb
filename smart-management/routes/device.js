const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/deviceMoveHome', { title: 'Movimentação de Aparelhos Home' });
});

router.get('/list', (req, res) => {
  Device.getAll().then((devices) => {
    res.render('admin/deviceMoveHome', { title: 'Cadastro de Aparelho', devices });
  }).catch((error) => {
    res.redirect('error');
    console.log(error);
  });
});

router.get('/movimentation/:id', (req, res) => {
  Device.getById(req.params.id).then((device) => {
    res.render('admin/deviceMove', { title: 'Movimentação de Aparelhos', device });
  });
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

router.post('/:id', (req, res) => {
  const device = req.body.device;
  Device.update(req.params.id, device).then(() => {
    console.log("Atualizado!");
    res.redirect('/device/list');
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

module.exports = router;