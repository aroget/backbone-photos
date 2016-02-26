var Backbone = require('backbone');

var Photo = Backbone.Model.extend({
  /**
   * TODO
   * Camera Details
   */
  defaults: {
    id: '',
    user: [],
    name: '',
    description: '',
    image_url: '',
    liked: ''
  }

});

module.exports = Photo;
