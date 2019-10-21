const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();


/* GET registerWorkStation page. */
router.get('/', (req, res) => {
  res.render('registerWorkStation', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboard' });
});

/* POST registerWorkStation page. */
router.post('/', function(req, res, next){
  const ativa = req.body.Stations;
  console.log(ativa);
  station.create(ativa).then((reqid)=>{
    res.render('registerWorkStation', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
