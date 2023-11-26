'use strict';

async function joke() {

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();

        console.log("Random Chuck Norris joke: " + data['value']);
    } catch(e) {
        console.log("An Error has occured: " + e);
    }
}

joke();
