const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();

/* GET cadastroClientes page. */
router.get('/', function(req, res, next){
  res.render('manager/logUse', { title: 'Log de Uso', layout: 'layoutdashboardManager' });
});


module.exports = router;
