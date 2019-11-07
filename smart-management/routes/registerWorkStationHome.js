const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

/* GET registerWorkStationHome page. */
router.get('/', (req, res) => {
  res.render('manager/registerWorkStationHome', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboardManager' });
});

module.exports = router;
