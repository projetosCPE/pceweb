const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();

/* GET cadastroClientes page. */
router.get('/', (req, res) => {
  Clients.getAll().then((clients)=>{
    console.log(clients);
    res.render('admin/clientsRegistrationHome', { title: 'Cadastro de Clientes', layout: 'layoutdashboard', clients });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});

module.exports = router;
