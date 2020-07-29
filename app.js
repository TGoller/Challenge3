var express = require('express');
var app = express();
const axios = require('axios');

 app.get('/',function(req,res){
    res.write('Liberty Mutual Blogging Application');
    res.end();
}) 

app.get('/posts', async function(req,res){
    var posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(posts.data);
    res.end();
});


app.get('/posts/id', async function(req,res){
    var onePost = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    res.json(onePost.data);
    res.end();
    
});

app.listen(3000);