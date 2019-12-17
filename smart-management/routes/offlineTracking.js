const express = require('express');
const firebase = require('firebase');
const auth = require('./middleware/auth');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/',auth.isAuthenticated,auth.isManager, (req, res) => {
  res.render('manager/offlineTrackingHome', { title: 'Acompanhamento Offline', layout: 'layoutdashboardmanager' });
});

router.get('/list',auth.isAuthenticated,auth.isManager, (req, res) => {
  Station.getAll().then((station) => {
    res.render('manager/offlineTracking', { title: 'Lista de Clientes', layout: 'layoutdashboardmanager', station });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});


router.get('/user/:id',auth.isAuthenticated,auth.isManager, (req, res) => {
  Station.getById(req.params.id).then((station) => {
    res.render('manager/onlineTrackingUser', { title: 'Acompanhamento Online', layout: 'layoutdashboardmanager',station });
  });
});

router.get('/edit/:id',auth.isAuthenticated,auth.isManager, (req, res) => {
  Station.getById(req.params.id).then((station) => {
    res.render('admin/clientsRegistrationEdit', { title: 'Edição de Perfil', layout: 'layoutdashboardmanager',station });
  });
});

module.exports = router;
