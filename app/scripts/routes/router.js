var Backbone = require('backbone');

var PhotosView = require('../views/Photos');

var Router = Backbone.Router.extend({

  routes: {
    "": "home"
    // routes
  },

  initialize: function (args) {
    // super
  },

  home: function () {
    this.view = new PhotosView();
  }

});

module.exports = Router;
