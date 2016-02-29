var $ = require('jquery');
var _ = require('underscore');

// $(document).scroll(function() {
//   var i = 0;
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
//     i++;
//     console.log('here');
//     $.ajax({
//       url: '../../mock/photos.js',
//       data: {page: i},
//       success: function(data) {
//         console.log(data);
//       },
//       error: function(err) {
//         console.log(err);
//       }
//     }).then(function(data){
//       // console.log('then');
//       console.log(data[0]);
//       console.log(data.id);
//
//       _.each(data, function(item) {
//         console.log(item.id);
//       });
//     });
//     // $('.container ul').append('<div style="height:300px; background:red"></div>');
//   }
// });
