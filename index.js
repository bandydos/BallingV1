//Server code.
const express = require('express');
const app = express();
app.listen(3000, function(){
    console.log('Listening (3000).');
});

app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist')); 
