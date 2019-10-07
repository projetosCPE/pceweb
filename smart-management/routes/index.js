const express = require('express');
const firebase = require('firebase');
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

/* GET cadastroAparelho page. */
router.get('/cadastroAparelho', (req, res) => {
  res.render('cadastroAparelho', { title: 'Cadastro de Aparelhos', layout: 'layoutdashboard' });
});

/* GET dcadastrAparelhoHome page. */
router.get('/cadastroAparelhoHome', (req, res) => {
  res.render('cadastroAparelhoHome', { title: 'CadastroAparelho', layout: 'layoutdashboard' });
});

/* GET moveAparelhos page. */
router.get('/moveAparelhos', (req, res) => {
  res.render('moveAparelhos', { title: 'Movimentação', layout: 'layoutdashboard' });
});

router.get('/movimentacaoaparelho', (req, res) => {
  res.render('movimentacaoaparelho', { title: 'homeadmin', layout: 'layoutdashboard' });
});

router.get('/cadastroClientes', (req, res) => {
  res.render('cadastroClientes', { title: 'Cadastro de Clientes', layout: 'layoutdashboard' });
});
module.exports = router;
