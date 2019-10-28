const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('admin/deviceRegistration', { title: 'Cadastro de Aparelho', layout: 'layoutdashboard' });
});

/* GET cadastroAparelho page. */
router.post('/', (req, res) => {
  const ativa = req.body.Devices;
  Devices.create(ativa).then((reqid)=>{
    res.render('admin/deviceRegistration', { title: 'Cadastro de Aparelho', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});

module.exports = router;
