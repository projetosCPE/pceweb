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
  res.render('dashboard', { title: 'homeadmin', layout: 'layout' });
});

/* GET dcadastrAparelho page. */
router.get('/cadastroAparelho', (req, res) => {
  res.render('cadastroAparelho', { title: 'homeadmin', layout: 'layout' });
});

module.exports = router;
