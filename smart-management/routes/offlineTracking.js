const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('manager/offlineTrackingHome', { title: 'Acompanhamento Offline', layout: 'layoutdashboardmanager' });
});

router.get('/list', (req, res) => {
  Station.getAll().then((station) => {
    res.render('manager/offlineTracking', { title: 'Lista de Clientes', layout: 'layoutdashboardmanager', station });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});


router.get('/user/:id', (req, res) => {
  Station.getById(req.params.id).then((station) => {
    res.render('manager/onlineTrackingUser', { title: 'Acompanhamento Online', layout: 'layoutdashboardmanager',station });
  });
});

router.get('/edit/:id', (req, res) => {
  Station.getById(req.params.id).then((station) => {
    res.render('admin/clientsRegistrationEdit', { title: 'Edição de Perfil', layout: 'layoutdashboardmanager',station });
  });
});

module.exports = router;
