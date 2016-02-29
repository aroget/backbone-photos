var express = require('express');
var _ = require('underscore');
var router = express.Router();
var constants = require('../app/constants');

var API500px = require('500px');
var api500px = new API500px(constants.API_KEY);

router.get('/', function(req, res, next) {

  api500px.photos.getPopular({'sort': 'created_at', 'rpp': '10', 'image_size' : 6, 'page' : req.query.page},  function(error, results) {
    if (error) {
        console.log(error);
    } else {

      var photos = [];

      _.each(results.photos, function(item) {
        photos.push({
          id: item.id,
          name: item.name,
          description: item.description,
          image_url: item.image_url,
          format: item.image_format,
          user: item.user,
          favorites_count: item.favorites_count,
        });
      });

      res.json(photos);
    }
  });
});

module.exports = router;
