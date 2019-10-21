const express = require('express');
const firebase = require('firebase');
const devices = require('../models/devices');
const clients = require('../models/clients');
const station = require('../models/station');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout:"layout.hbs" });
});


/* GET dashboard page. */
router.get('/dashboard', (req, res) => {
  res.render('LayoutDashboard', { title: 'homeadmin', layout: 'layout' });
});

/* GET dashboardManager page. */
router.get('/dashboardmanager', (req, res) => {
  res.render('LayoutDashboardManager', { title: 'homeadmin', layout: 'layout' });
});




module.exports = router;
