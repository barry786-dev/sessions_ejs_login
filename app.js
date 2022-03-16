const { log } = require('console');
const express = require('express');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const generalRouter = require('./routes/generalRouters');
const adminRouter = require('./routes/adminRouters');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  session({
    secret: 'my website',
    cookie: {
      maxAge: 5 * 60 * 1000,
    }, // maxAge should be in millisecond
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules', 'bootstrap')));
app.use(express.static(path.join(__dirname, 'node_modules', 'jquery')));

app.use(generalRouter);
app.use('/admin', adminRouter);

const port = app.get('port');
app.listen(port, () => log(`the server is running on port ${port}`));
