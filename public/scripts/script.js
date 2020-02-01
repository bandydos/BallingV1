//Client code.
$(document).ready(function(){ //On ready.
    console.log('Ready.');
    const url = 'data/bballteams.json'; //Url to JSON file.
    $.getJSON(url, function(data){ //Get JSON AJAX.
        $(data).each(function(i, team){ //For each.
            $("#select-home-team").append //Append options 
            ('<option>' + team.name + '</option>'); //to selects.
            $("#select-away-team").append
            ('<option>' + team.name + '</option>');
        });
    });
});

function getDate(){ //Function to get date.
    var dateIn = document.getElementById("date-in");
    var date = dateIn.value; //Get date value.
    return date; //Return.
}

function getHomeTeam(){ //Function to get home team.
    var selectHomeTeam = document.getElementById("select-home-team");
    var homeTeam = selectHomeTeam.value;
    return homeTeam;    
}

function getAwayTeam(){ //Function to get away team.
    var selectAwayTeam = document.getElementById("select-away-team");
    var awayTeam = selectAwayTeam.value;
    return awayTeam;
}

const btnSend = document.getElementById("btn-send");
//Had to make this async for await for response.
btnSend.onclick = async function(){ //When clicking.
    var date = getDate(); //Date.
    var home  = getHomeTeam(); //Home team.
    var away = getAwayTeam(); //Away team.
    var data = { //Object with all needed data.
        date,
        home,
        away
    };

    var options = { //Options for fetch.
        method: 'POST', //Sort of method.
        headers: { //Basic headers.
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //Body.
    }

    var response = await fetch('/api', options); //Await fetch method.
    var json = await response.json(); //Get respone.json() (zie server).
    console.log(json);
}

