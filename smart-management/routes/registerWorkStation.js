const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

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
