const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();


/* GET movimentaaparelho page. */
router.get('/', (req, res) => {
  res.render('admin/deviceMove', { title: 'Movimentação de Aparelhos', layout: 'layoutdashboard' });
});

module.exports = router;
