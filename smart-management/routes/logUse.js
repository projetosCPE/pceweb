const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

/* GET cadastroClientes page. */
router.get('/', function(req, res, next){
  res.render('manager/logUse', { title: 'Log de Uso', layout: 'layoutdashboardManager' });
});

module.exports = router;
