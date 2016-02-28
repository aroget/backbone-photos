var Backbone = require('backbone');

var Photo = require('../models/Photo');

var Photos = Backbone.Collection.extend({

  model: Photo,

  // url: '/api/photos',
  url: '../../mock/photos.js'

});

module.exports = Photos;
