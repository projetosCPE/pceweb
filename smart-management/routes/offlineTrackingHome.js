const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();


/* GET clientsXdevice page. */
router.get('/', (req, res) => {
  res.render('manager/offlineTrackingHome', { title: 'Acompanhamento Offline', layout: 'layoutdashboard' });
});

module.exports = router;
