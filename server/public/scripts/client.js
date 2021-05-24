console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    
    // click listener on add joke button
    $('#addJokeButton').on('click', addJoke);
    
    
    // call getJokes onReady
    getJokes();
}

// function to get jokes from server
// append them to the DOM
function getJokes() {
    // go to server and get jokes
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function (response){
        // console log response to see what shows
        console.log('Response is:', response);
        // append jokes to the DOM
        for (let joke of response) {
            // target each with . notation
            $('#outputDiv').append(`
            <div>${joke.jokeQuestion} 
            ${joke.punchLine} By: ${joke.whoseJoke}</div>
            `);
        }
    });
}

// function to add new jokes
function addJoke() {
    console.log('Clicked Add Joke');
    // gather new data inputs
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    };
    // make a POST
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke    // this becomes req.body on server
    }).then(function (response) {
        console.log(response);
        getJokes();
    });
}