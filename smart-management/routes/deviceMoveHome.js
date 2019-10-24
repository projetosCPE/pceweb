const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();

/* GET moveAparelhos page. */
router.get('/', (req, res) => {
  res.render('admin/deviceMoveHome', { title: 'Movimentação de Aparelhos Home', layout: 'layoutdashboard' });
});

module.exports = router;
