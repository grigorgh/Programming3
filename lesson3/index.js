var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});
app.get("/name", function(req, res){
   res.send("Hello world name");
});
app.get("/search", function(req, res){
   res.redirect("https://www.applefritter.com/sites/default/meta/replicacreation/images/coverphoto.jpg");
});
app.get("/name/:name", function(req, res){
    var n = req.params.name;
   res.send("<h1>Hello" + n + "</h>");
});
app.get("/*", function(req, res){
   res.send("<h1><mark>404 not found</mark></h1>");
});


app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
