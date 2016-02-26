var $ = require('jquery');
var Backbone = require('backbone');

var PhotoModel = require('../models/Photo');
var PhotosCollection = require('../collections/Photos');
var PhotosTemplate = require('../../templates/home.hbs');

var Photos = Backbone.View.extend({

  tagName: 'ul',

  template: PhotosTemplate,

  initialize: function (args) {
    this.photos = new PhotosCollection();

    this.listenTo(this.photos, 'sync', this.render);
    this.listenTo(this.photos, 'add', this.render);
    this.listenTo(this.photos, 'change', this.render);
    this.listenTo(this.photos, 'remove', this.render);

    this.photos.fetch();
  },

  render: function() {
    $('#app').html(this.template({
      photos: this.photos.toJSON()
    }));
    return this;
  }

});

module.exports = Photos;
