const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('manager/registerWorkStation', { title: 'Cadastro Estação de Trabalho', layout: 'layoutDashboardManager' });
});

router.get('/', (req, res) => {
  res.render('manager/registerWorkStationHome', { title: 'Cadastro Estação de Trabalho', layout: 'layoutDashboardManager' });
});

router.get('/list', (req, res) => {
  Station.getAll().then((stations) => {
    res.render('manager/registerWorkStationHome', { title: 'Lista de Estações de Trabalho', stations });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});

router.post('/signup', function(req, res, next){
  const ativa = req.body.station;
  Station.create(ativa).then((id) => {
    res.redirect('/station/list');
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
