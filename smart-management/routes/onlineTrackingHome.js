const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();


/* GET clientsXdevice page. */
router.get('/', (req, res) => {
  res.render('manager/onlineTrackingHome', { title: 'Acompanhamento Offline', layout: 'layoutdashboardManager' });
});

module.exports = router;
