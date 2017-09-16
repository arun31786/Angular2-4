var express = require('express');
var bodyParser = require('body-parser');

console.log(typeof express);

var server = express();
server.use(express.static("./public"));
// server.use(bodyParser.json());

/* server.get("/", (req, res)=>{
    res.send(`
    <html><head><title>NodeApp</title></head>
    <body><h1>Welcome Uesr</h1></bdoy>
    </html>    
    `);
}) */

// server.get("/getItems", function(req, res){})
server.get("/getItems", (req, res)=>{
    res.send("some item data");
})

server.listen(8080);