'use strict';

document.getElementById('search').addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const value = document.getElementById('query').value;

    console.log("Search begins");

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
        const data = await response.json();

        console.log("Data recieved: " + JSON.stringify(data));
    } catch (e) {
        console.log("Error: " + e);
    } finally {
        console.log("Search complete");
    }
});
