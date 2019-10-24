const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();

/* GET cadastroClientes page. */
router.get('/', function(req, res, next){
  res.render('admin/clientsRegistration', { title: 'CadastroAparelho', layout: 'layoutdashboard' });
});
/* POST cadastroClientes page. */
router.post('/', function(req, res, next){
  const ativa = req.body.Clients;
  clients.create(ativa).then((reqid)=>{
    res.render('admin/clientsRegistration', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
