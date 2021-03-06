var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
const host = 'localhost';
const port = 4545;

app.use(cors());
app.use(bodyParser.json());

app.get('/getAllUsers', function(req, res){
    var users = [{"id":1,"first_name":"Batholomew","last_name":"Prozescky","email":"bprozescky0@privacy.gov.au","gender":"Male","ip_address":"44.7.0.30"},
    {"id":2,"first_name":"Buck","last_name":"Swadling","email":"bswadling1@chicagotribune.com","gender":"Male","ip_address":"133.232.3.58"},
    {"id":3,"first_name":"Niven","last_name":"Jenson","email":"njenson2@plala.or.jp","gender":"Male","ip_address":"51.86.147.142"},
    {"id":4,"first_name":"Kimbra","last_name":"Pesselt","email":"kpesselt3@newsvine.com","gender":"Female","ip_address":"21.69.111.184"},
    {"id":5,"first_name":"Elene","last_name":"Lesley","email":"elesley4@microsoft.com","gender":"Female","ip_address":"97.92.42.129"},
    {"id":6,"first_name":"Kele","last_name":"Tarren","email":"ktarren5@businessinsider.com","gender":"Male","ip_address":"160.244.40.6"},
    {"id":7,"first_name":"Odette","last_name":"Blazeby","email":"oblazeby6@theguardian.com","gender":"Female","ip_address":"174.119.63.1"},
    {"id":8,"first_name":"Lizabeth","last_name":"Yude","email":"lyude7@seesaa.net","gender":"Female","ip_address":"255.78.245.4"},
    {"id":9,"first_name":"Saloma","last_name":"Skace","email":"sskace8@tripod.com","gender":"Female","ip_address":"3.195.183.170"},
    {"id":10,"first_name":"Meriel","last_name":"Blewitt","email":"mblewitt9@gizmodo.com","gender":"Female","ip_address":"60.234.93.46"}];
    
    res.send(users);
})

app.listen(port, host, ()=>{
    console.log(`Server is running at ${host}:${port}`);
})