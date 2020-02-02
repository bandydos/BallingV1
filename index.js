//Server code.
const express = require('express'); //Require express.
const Datastore = require('nedb'); //Require nedb database.
const app = express();
app.listen(3000, function(){
    console.log('Listening (3000).');
});

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist')); 

app.use(express.json({limit: '1mb'})); //Needed to able to parse JSON from client.
const database = new Datastore('database.db'); //Path to my db file.
database.loadDatabase(); //Load.

app.post('/api', function(req, res){ 
    console.log("Got a request.")
    var data = req.body; //Request data (body) from client.
    database.insert(data); //Insert in database.
    res.json(data); //Response to client.
});
