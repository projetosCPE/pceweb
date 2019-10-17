const express = require('express');
const firebase = require('firebase');
const device = require('../models/device');
const customer = require('../models/customer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout:"layout.hbs" });
});
/* GET login. */
router.get('/login', function(req, res, next) {

    res.render('login', { title: 'Login' });

});

/* POST Login */
router.post('/login', function(req, res, next) {
  const user = req.body.user;
  console.log(user);
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((logado) => {
    console.log(logado);
    res.redirect('/dashboard');
  }).catch((error) => {
    console.log(error);
  });
});

/* GET dashboard page. */
router.get('/dashboard', (req, res) => {
  res.render('LayoutDashboard', { title: 'homeadmin', layout: 'layout' });
});

/* GET dashboardManager page. */
router.get('/dashboardmanager', (req, res) => {
  res.render('LayoutDashboardManager', { title: 'homeadmin', layout: 'layout' });
});
/* GET DeviceRegistration page. */
router.get('/DeviceRegistration', (req, res) => {
  res.render('DeviceRegistration', { title: 'Cadastro Aparelho', layout: 'layoutdashboard' });
});
/* POST DeviceRegistration page. */
router.post('/DeviceRegistration', (req, res) => {
  const ativa = req.body.aparelhos;
  aparelhos.create(ativa).then((reqid)=>{
    res.render('DeviceRegistration', { title: 'DeviceRegistration', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});

/* GET DeviceRegistrationHome page. */
router.get('/DeviceRegistrationHome', (req, res) => {
  res.render('DeviceRegistrationHome', { title: 'Cadastro Aparelho', layout: 'layoutdashboard' });
});

/* GET moveDeviceHome page. */
router.get('/moveDeviceHome', (req, res) => {
  res.render('moveDeviceHome', { title: 'Movimentação', layout: 'layoutdashboard' });
});
/* GET moveDevice page. */
router.get('/moveDevice', (req, res) => {
  res.render('moveDevice', { title: 'Movimentação', layout: 'layoutdashboard' });
});
/* GET CustomerBases page. */
router.get('/CustomerBases', (req, res) => {
  res.render('CustomerBases', { title: 'Cadastro de Clientes' ,layout: 'layoutdashboard' });
});
/* POST CustomerBases page. */
router.post('/CustomerBases', function(req, res, next){
  const ativa = req.body.Clientes;
  clientes.create(ativa).then((reqid)=>{
    res.render('CustomerBases', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});
/* GET CustomerBasesHome page. */
router.get('/CustomerBasesHome', (req, res) => {
  res.render('CustomerBasesHome', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
});

/* GET registerWorkStationHome page. */
router.get('/registerWorkStationHome', (req, res) => {
  res.render('registerWorkStationHome', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboard' });
});


/* GET registerWorkStationHome page. */
router.get('/registerWorkStation', (req, res) => {
  res.render('registerWorkStation', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboard' });
});


/* GET onlineTrackingHome page. */
router.get('/onlineTrackingHome', (req, res) => {
  res.render('onlineTrackingHome', { title: 'Acompanhamento Online', layout: 'layoutdashboard' });
});

/* GET onlineTracking page. */
router.get('/onlineTracking', (req, res) => {
  res.render('onlineTracking', { title: 'Acompanhamento Online', layout: 'layoutdashboard' });
});





module.exports = router;