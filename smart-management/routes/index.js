const express = require('express');
const firebase = require('firebase');
const Aparelhos = require('../models/aparelhos');
const clientes = require('../models/clientes');
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

/* GET cadastroAparelho page. */
router.get('/cadastroAparelho', (req, res) => {
  res.render('cadastroAparelho', { title: 'Cadastro de Aparelhos', layout: 'layoutdashboard' });
});

/* GET dcadastrAparelhoHome page. */
router.get('/cadastroAparelhoHome', (req, res) => {
  res.render('cadastroAparelhoHome', { title: 'CadastroAparelho', layout: 'layoutdashboard' });
});

/* GET moveAparelhos page. */
router.get('/movimentaaparelhohome', (req, res) => {
  res.render('movimentaaparelhohome', { title: 'Movimentação', layout: 'layoutdashboard' });
});
/* GET movimentaaparelho page. */
router.get('/movimentacaoaparelho', (req, res) => {
  res.render('movimentacaoaparelho', { title: 'homeadmin', layout: 'layoutdashboard' });
});
/* GET cadastroClientes page. */
router.get('/cadastroClientes', (req, res) => {
  res.render('cadastroClientes', { title: 'Cadastro de Clientes' ,layout: 'layoutdashboard' });
});
/* GET cadastroClientes page. */
router.post('/cadastroClientes', function(req, res, next){
  const ativa = req.body.Clientes;
  clientes.create(ativa).then((reqid)=>{
    res.render('cadastroClientes', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
    }).catch((error) =>{
      console.log(error);
  });
});
/* GET cadastroClientes page. */
router.get('/cadastroClientesHome', (req, res) => {
  res.render('cadastroClientesHome', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
});

/* GET registerWorkStationHome page. */
router.get('/registerWorkStationHome', (req, res) => {
  res.render('registerWorkStationHome', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboard' });
});
module.exports = router;

/* GET registerWorkStationHome page. */
router.get('/registerWorkStation', (req, res) => {
  res.render('registerWorkStation', { title: 'Cadastro Estação de Trabalho', layout: 'layoutdashboard' });
});
module.exports = router;