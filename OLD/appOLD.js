//REST - how to manipulate get/post requests
//get = refresh a page
//post = submit a (HTML)form
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile("/Users/melissamorel/flat-ocelot" + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {
  //Prepare output in JSON format
  
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
