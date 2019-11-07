const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();


/* GET clientsXdevice page. */
router.get('/', (req, res) => {
  res.render('manager/onlineTrackingHome', { title: 'Acompanhamento Offline', layout: 'layoutDashboardManager' });
});

module.exports = router;
