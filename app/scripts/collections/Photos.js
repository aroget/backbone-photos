var Backbone = require('backbone');

var Photo = require('../models/Photo');

var Photos = Backbone.Collection.extend({

  model: Photo,

  initialize: function() {
    this.page = 1
  },

  url: '/api/photos',
  // url: '../../mock/photos.js'

});

module.exports = Photos;
