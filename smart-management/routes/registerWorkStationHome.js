const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();


/* GET registerWorkStationHome page. */
router.get('/', (req, res) => {
  res.render('manager/registerWorkStationHome', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboard' });
});

module.exports = router;
