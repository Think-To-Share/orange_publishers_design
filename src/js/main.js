// All Stylesheets
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/brands.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import '../scss/bootstrap.scss';
import '../scss/app.scss';

// All Javascript
window.jquery = window.$ = require('jquery');

// Base URL
window.baseURL = $('base').attr('href');

// require('select2');
require('./homepage');
require ('./responsive-menu');
require('./author-checklist');
require('./back-to-top');
require('./homepage-animation');
