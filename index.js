var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
  res.send("Welcome to my webhook!")
})

app.listen(port);

server.post('/getMovies',function (request,response)  {
  if(request.body.result.parameters['CityHall']) {
    response.send(JSON.stringify{
      "speech": "provaConnesso?",
      "displayText": "provaconnesso)"
    });  

    }
});
