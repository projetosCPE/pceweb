const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('deviceRegistration', { title: 'Cadastro de Aparelho', layout: 'layoutdashboard' });
});

/* GET cadastroAparelho page. */
router.post('/', (req, res) => {
  const ativa = req.body.Devices;
  devices.create(ativa).then((reqid)=>{
    res.render('deviceRegistration', { title: 'Cadastro de Aparelho', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
