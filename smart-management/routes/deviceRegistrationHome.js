const express = require('express');
const firebase = require('firebase');
const Devices = require('../models/devices');
const Clients = require('../models/clients');
const Station = require('../models/station');
const router = express.Router();


/* GET dcadastrAparelhoHome page. */
router.get('/', (req, res) => {
  Devices.getAll().then((devices)=>{
    res.render('admin/deviceRegistrationHome', { title: 'Cadastro de Aparelho', layout: 'layoutdashboard', devices });
  }).catch((error) =>{
    res.redirect('error');
    console.log(error);
  });
});

module.exports = router;
