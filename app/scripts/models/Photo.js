var Backbone = require('backbone');

var Photo = Backbone.Model.extend({
  /**
   * TODO
   * Camera Details
   */
  defaults: {
    id: '',
    name: '',
    description: '',
    image_url: '',
    format: '',
    user: [],
    favorites_count: '',
    isLiked: false,
    showDetails: false,
  }

});

module.exports = Photo;
