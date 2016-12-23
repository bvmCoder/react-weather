var express = require('express');

// Create our app
var app = express();

const PORT = process.env.PORT || 9005;

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
})

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express server is up on port: ${PORT}`);
});

/*
  very important to install this way only 
 npm i css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1
 foundation-sites@6.2.0 --save-dev

 foundation-sites is breaking at version 6.3.0
*/
