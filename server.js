var express = require('express');
var app = express();

var photos = require('./router/photos');

app.use(express.static('./app'));
app.use(express.static('./public'));

app.use('/api/photos', photos);

app.listen(process.env.PORT || 4000);
