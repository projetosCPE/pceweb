const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
const router = express.Router();


/* GET dcadastrAparelhoHome page. */
router.get('/', (req, res) => {
  res.render('deviceRegistrationHome', { title: 'Cadastro de Aparelho', layout: 'layoutdashboard' });
});

module.exports = router;
