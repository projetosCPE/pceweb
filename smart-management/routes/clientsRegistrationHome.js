const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const Clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();

/* GET cadastroClientes page. */
router.get('/', (req, res) => {
  Clients.getAll().then((clients)=>{
    console.log(clients);
    res.render('clientsRegistrationHome', { title: 'Cadastro de Clientes', layout: 'layoutdashboard', clients });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});

module.exports = router;
