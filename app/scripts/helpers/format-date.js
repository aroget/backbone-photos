var Handlebars = require("hbsfy/runtime");
var moment = require('moment');

Handlebars.registerHelper("format-date", function(date) {
  return moment(date).format('MMM Do YY');
});

module.exports = Handlebars;
