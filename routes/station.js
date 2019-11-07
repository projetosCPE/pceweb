const express = require('express');
const firebase = require('firebase');
const Device = require('../models/devices');
const Client = require('../models/clients');
const Station = require('../models/station');
const Manager = require('../models/manager');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('manager/registerWorkStation', { title: 'Cadastro Estação de Trabalho', layout: 'layoutDashboardManager' });
});

router.get('/', (req, res) => {
  res.render('manager/registerWorkStationHome', { title: 'Cadastro Estação de Trabalho', layout: 'layoutDashboardManager' });
});

router.get('/list', (req, res) => {
  Station.getAll().then((stations) => {
    console.log(stations);
    res.render('manager/registerWorkStationHome', { title: 'Lista de Estações de Trabalho', stations });
  }).catch((error)=> {
    res.redirect('/error');
    console.log(error);
  });
});


router.get('/movimentation/:id', (req, res) => {
  Device.getById(req.params.id).then((device) => {
    Client.getById(device.client).then((client) => {
      console.log(client);
      res.render('admin/deviceMove', { title: 'Movimentação de Aparelhos', device, client });
    });
  });
});

router.get('/edit/:id', (req, res) => {
  Station.getById(req.params.id).then((station) => {
    console.log(station);
    Manager.getById(station.manager).then((manager) => {
      console.log(manager);
    res.render('manager/registerWorkStationEdit', { title: 'Edição da Estação de Trabalho', station, manager });
    });
  });
});

router.post('/signup', function(req, res, next){
  const ativa = req.body.station;
  Station.create(ativa).then((id) => {
    res.redirect('/station/list');
    }).catch((error) =>{
      console.log(error);
  });
});

router.post('/:id', (req, res) => {
  const station = req.body.station;
  const stationId = req.params.id;
  Station.getById(req.params.id).then((oldStation) => {
    Manager.removeStation(oldStation.manager, stationId).catch((error) => {
      console.log(error);
      res.redirect('/error');
    });
    Manager.getByCodManager(station.codManager).then((manager) => {
      station.manager = manager;
      delete manager.codManager;
      Manager.addStation(manager, stationId).catch((error) => {
        console.log(error);
        res.redirect('/error');
      });
      Station.update(req.params.id, station).then(() => {
        res.redirect('/station/list');
      }).catch((error) => {
        console.log(error);
        res.redirect('/error');
      });
    });
  });
});

module.exports = router;
