import greeter = require('./greeter');  
import $ = require('jquery');

$(() => {
  $(document.body).html(greeter("World"));
});


// compile
//	tsc --module commonjs app.ts 


