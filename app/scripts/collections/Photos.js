var Backbone = require('backbone');

var Photo = require('../models/Photo');

var Photos = Backbone.Collection.extend({

  model: Photo,

  url: '/api/photos'
  
});

module.exports = Photos;
