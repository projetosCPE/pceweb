const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();


/* GET clientsXdevice page. */
router.get('/', (req, res) => {
  res.render('manager/onlineTracking', { title: 'Acompanhamento online', layout: 'layoutdashboardmanager' });
});

router.get('/user/:id', (req, res) => {
  Station.getById(req.params.id).then((station) => {
    res.render('manager/onlineTrackingUser', { title: 'Acompanhamento Online', station });
  });
});

module.exports = router;
