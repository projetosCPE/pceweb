require('dotenv').config();

const firebase = require('firebase');
const bodyParser = require('body-parser');
const session = require('express-session');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const exphbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const deviceRouter = require('./routes/device');
const clientRouter = require('./routes/client');
const registerWorkStationRouter = require('./routes/registerWorkStation');
const registerWorkStationHomeRouter = require('./routes/registerWorkStationHome');
const offlineTrackingHomeRouter = require('./routes/offlineTrackingHome');
const onlineTrackingRouter = require('./routes/onlineTracking');
const onlineTrackingHomeRouter = require('./routes/onlineTrackingHome');
const logUseRouter = require('./routes/logUse');
var mongoose = require('mongoose');

const app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'layoutdashboard',
  extname: '.hbs',
  partialsDir: 'views'
}));

/**
 *  Database setup
 */
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTIONS}`);
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
mongoose.connection.once('open', () => {
  console.log('Database connect!');
});
/**
 * firebase setup
 */
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/device', deviceRouter);
app.use('/client', clientRouter);
app.use('/registerWorkStation', registerWorkStationRouter);
app.use('/registerWorkStationHome', registerWorkStationHomeRouter);
app.use('/offlineTrackingHome', offlineTrackingHomeRouter);
app.use('/onlineTracking', onlineTrackingRouter);
app.use('/onlineTrackingHome', onlineTrackingHomeRouter);
app.use('/logUse', logUseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
