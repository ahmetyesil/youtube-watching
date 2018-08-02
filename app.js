let path = require('path');
let express = require('express');
let app = express();
let ejsLayouts = require('express-ejs-layouts');


let routeContact = require('./app_server/router/ContactRoute');
let routeHome = require('./app_server/router/HomeRoute');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/app_server/views'));

app.use(ejsLayouts)
app.use('/public', express.static(path.join(__dirname, 'public')));

let routeLogin = require('./app_server/router/LoginRoute');

app.use('/', routeHome);
app.use('/home', routeHome);
app.use('/login', routeLogin);
app.use('/contact', routeContact);

app.listen(8000);