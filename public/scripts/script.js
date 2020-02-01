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
    console.log(date);
}

function getHomeTeam(){
    var selectHomeTeam = document.getElementById("select-home-team");
    var homeTeam = selectHomeTeam.value;
    console.log(homeTeam);
}

function getAwayTeam(){
    var selectAwayTeam = document.getElementById("select-away-team");
    var awayTeam = selectAwayTeam.value;
    console.log(awayTeam);
}

const btnSend = document.getElementById("btn-send");
btnSend.onclick = function(){
    getDate();
    getHomeTeam();
    getAwayTeam();
}

