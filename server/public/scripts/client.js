console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    // call getJokes onReady
    getJokes();
}

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
