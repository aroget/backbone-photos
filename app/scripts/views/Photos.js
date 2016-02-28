var $ = require('jquery');
var Backbone = require('backbone');

var PhotoModel = require('../models/Photo');
var PhotosCollection = require('../collections/Photos');
var PhotosTemplate = require('../../templates/home.hbs');

var Photos = Backbone.View.extend({

  el: '#app',

  template: PhotosTemplate,

  events: {
    'click .photo-item__liked' : 'triggerLiked'
  },

  isLiked: function (model) {
    return model.get('isLiked');
  },

  triggerLiked: function(e) {
    e.preventDefault();
    var id = $(e.target).attr('data-js');
    var item = this.photos.get(id);
    var favs = item.get('favorites_count');

    if (!this.isLiked(item)) {
      item.set({
        'isLiked' : !item.get('isLiked'),
        'favorites_count' : favs + 1
      });
    }
    else {
      item.set({
        'favorites_count' : favs
      });
    }

  },

  initialize: function (args) {
    this.photos = new PhotosCollection();

    this.listenTo(this.photos, 'sync', this.render);
    this.listenTo(this.photos, 'add', this.render);
    this.listenTo(this.photos, 'change', this.render);
    this.listenTo(this.photos, 'remove', this.render);

    this.photos.fetch();
  },

  render: function() {
    this.$el.html(this.template({
      photos: this.photos.toJSON()
    }));
    return this;
  }

});

module.exports = Photos;
