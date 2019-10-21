const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();

/* GET cadastroClientes page. */
router.get('/', (req, res) => {
  res.render('clientsRegistrationHome', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
});

module.exports = router;
