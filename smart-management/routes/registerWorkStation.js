const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();


/* GET registerWorkStation page. */
router.get('/', (req, res) => {
  res.render('manager/registerWorkStation', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboardManager' });
});

/* POST registerWorkStation page. */
router.post('/', function(req, res, next){
  const ativa = req.body.Stations;
  console.log(ativa);
  Station.create(ativa).then((reqid)=>{
    res.render('manager/registerWorkStation', { title: 'Cadastro de Clientes', layout: 'layoutdashboardManager' });
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
