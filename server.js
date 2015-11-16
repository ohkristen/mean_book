var express     = require('express')
var bodyParser  = require('body-parser')
var app         = express()

app.use(bodyParser.json())

app.get('/api/posts', function (request, response){
  response.json([
    {
      username: 'dickeyxxx',
      body: 'node rocks!'
    }
  ])
})

app.post('/api/posts', function(request, response){
  console.log('post received')
  console.log(request.body.username)
  console.log(request.body.body)
  console.log(201)
})

app.listen(3000, function (){
  console.log('Server is listening on ', 3000)
})
