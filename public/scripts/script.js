//Client code.
$(document).ready(function(){
    console.log('Ready.');
    const url = 'data/bballteams.json';
    $.getJSON(url, function(data){
        $(data).each(function(i, team){
            $("#select-home-team").append
            ('<option>' + team.name + '</option>');
            $("#select-away-team").append
            ('<option>' + team.name + '</option>');
        });
    });
})

function getDate(){
    var dateIn = document.getElementById("date-in");
    var date = dateIn.value;
    return date;
}

function getHomeTeam(){
    var selectHomeTeam = document.getElementById("select-home-team");
    var homeTeam = selectHomeTeam.value;
    return homeTeam;    
}

function getAwayTeam(){
    var selectAwayTeam = document.getElementById("select-away-team");
    var awayTeam = selectAwayTeam.value;
    return awayTeam;
}

const btnSend = document.getElementById("btn-send");
btnSend.onclick = function(){
    var date = getDate();
    var home  = getHomeTeam();
    var away = getAwayTeam();
    var data = {
        date,
        home,
        away
    };
    console.log(data);
}

