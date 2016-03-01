var $ = require('jquery');
var Backbone = require('backbone');

var PhotoModel = require('../models/Photo');
var PhotosCollection = require('../collections/Photos');
var PhotosTemplate = require('../../templates/home.hbs');

var DateFormatter = require('../helpers/format-date');

var Photos = Backbone.View.extend({

  el: '#app',

  template: PhotosTemplate,

  events: {
    'click .photo-item__liked' : 'triggerLiked',
    'click .getDetails'        : 'getDetails',
    'click .close-modal'       : 'closeModal'
  },

  getDetails: function(e) {
    e.preventDefault();
    var id = $(e.target).attr('data-js');
    var item = this.photos.get(id);
    var showDetails = item.get('show_details');

    item.set({
      'showDetails' : !item.get('showDetails')
    });
  },

  closeModal: function(e) {
    e.preventDefault();
    var id = $(e.target).attr('data-js');
    var item = this.photos.get(id);
    var showDetails = item.get('show_details');

    item.set({
      'showDetails' : !item.get('showDetails')
    });
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
      // $(e.target).addClass('isLiked');
    }
    else {
      item.set({
        'favorites_count' : favs
      });
    }

  },

  loadNewImages: function(page) {
    var newImages = new PhotosCollection();
    var promise = newImages.fetch({data: {page: page}});

    var images = promise.then(function(data) {
      this.photos.add(data);
    }.bind(this));

    this.photos.isFetching = false;
  },

  initialize: function (args) {
    this.photos = new PhotosCollection();

    this.listenTo(this.photos, 'sync', this.render);
    this.listenTo(this.photos, 'add', this.render);
    this.listenTo(this.photos, 'change', this.render);
    this.listenTo(this.photos, 'remove', this.render);

    $(window).scroll(function() {
      var page = this.photos.page;
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.photos.isFetching) {
        page++;
        this.photos.page = page;
        this.photos.isFetching = true;
        this.loadNewImages(page);
      }
    }.bind(this))

    this.photos.fetch(
      { data:
        { page: this.photos.page }
      }
    );
  },

  render: function() {
    this.$el.html(this.template({
      photos: this.photos.toJSON()
    }));
    return this;
  }

});

module.exports = Photos;
