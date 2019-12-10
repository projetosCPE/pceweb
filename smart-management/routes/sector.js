const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');
const User = require('../models/user');
const Sector = require('../models/sector');


const router = express.Router();

router.get('/signup', function(req, res, next) {
  Manager.getAll().then((managers) => {
    res.render('client/registerSectors', { title: 'Cadastro de Setores', layout: 'layoutdashboardclientadm', managers});
  })
});

router.post('/signup', function(req, res, next) {
  const ativa = req.body.sector;
  Manager.getByName(ativa.manager).then((gestor) => {
    ativa.idManager = gestor.id;
    Sector.create(ativa).then((id) =>{
      res.redirect('/sector/list');
    }).catch((error) => {
      res.redirect('/error');
      console.log(error);
    });
  }).catch((error) => {
    res.redirect('/error');
    console.log(error);
  });
});

router.get('/list', (req, res) => {
  Sector.getAll().then((sectors)=>{
    res.render('client/sectorslist', { title: 'Lista de Setores',layout: 'layoutdashboardclientadm', sectors });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});




router.get('/list', (req, res) => {
  Manager.getAll().then((managers)=>{
    res.render('client/sectorslist', { title: 'Lista de Setores',layout: 'layoutdashboardclientadm', managers });
  }).catch((error) => {
    res.redirect('/error');
    console.log(error);
  });
});

module.exports = router;
