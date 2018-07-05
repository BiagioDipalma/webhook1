var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
  res.send("Welcome to my webhook!")
})

app.listen(port);

server.post('/getMovies',function (request,response)  {
  if(request.body.result.parameters['CityHall']) {
      var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");
          req.query({
              "page": "1",
              "language": "en-US",
              "api_key": ""
          });
          req.send("{}");
          req.end(function(res) {
              if(res.error) {
                  response.setHeader('Content-Type', 'application/json');
                  response.send(JSON.stringify({
                      "speech" : "Error. Can you try it again ? ",
                      "displayText" : "Error. Can you try it again ? "
                    }));
                  } else if(res.body.results.length > 0) {
                      let result = res.body.results;
                      let output = '';
                      for(let i = 0; i<result.length;i++) {
                          output += result[i].title;
                          output+="\n"
                      }
                      response.setHeader('Content-Type', 'application/json');
                      response.send(JSON.stringify({
                          "speech" : output,
                          "displayText" : output
                      })); 
                  }
              });
      }
});
