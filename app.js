var express = require('express');
var app = express();
const fetch = require("node-fetch");

 app.get('/',function(req,res){
    res.write('Liberty Mutual Blogging Application');
    
    res.end();
}) 

app.get('/posts', function(req,res){
   
    var posts = fetch("https://jsonplaceholder.typicode.com/posts");
   
    //res.send(posts);
    res.json(posts);
   
});


app.get('/posts/id', function(req,res){
   
    var posts = fetch("https://jsonplaceholder.typicode.com/posts/id");
   
    res.send(posts);
    //res.json(posts);
   
});
app.listen(3000);