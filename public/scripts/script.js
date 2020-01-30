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

