//REST - how to manipulate get/post requests
//get = refresh a page
//post = submit a (HTML)form
let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/index.html', function (req, res) {
   res.sendFile("/Users/melissamorel/flat-ocelot" + "/" + "index.html")
   resp.cookie('myFirstCookie', 'item')
})

app.post('/', urlencodedParser, function (req, res) {
  //Prepare output in JSON format
  console.log('hiiiii', req.body)
  response = {
    item:req.body.item,
  }
  console.log(response)
  res.sendFile("/Users/melissamorel/flat-ocelot" + "/" + "index.html")
})


let server = app.listen(3000, function () {
   let host = server.address().address
   let port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
