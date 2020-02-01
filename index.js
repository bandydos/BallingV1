//Server code.
const express = require('express');
const app = express();
app.listen(3000, function(){
    console.log('Listening (3000).');
});

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist')); 

app.use(express.json({limit: '1mb'})); //Needed to able to parse JSON from client.
app.post('/api', function(req, res){ 
    console.log("Got a request.")
    var data = req.body; //Request data (body) from client.
    console.log(data); 
    res.json({ //Response to client.
        status: 's',
        date: data.date,
        home: data.home,
        away: data.away
    });
});
