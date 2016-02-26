var $ = require('jquery');
var Backbone = require('backbone');

var Router = require('./routes/router');

$(document).ready(function() {
  new Router();
  Backbone.history.start()
});
