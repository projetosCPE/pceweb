const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();

/* GET moveAparelhos page. */
router.get('/', (req, res) => {
  res.render('admin/deviceMoveHome', { title: 'Movimentação de Aparelhos Home', layout: 'layoutdashboard' });
});

module.exports = router;
