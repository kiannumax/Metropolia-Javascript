'use strict';

function displayShow(joke) {
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.innerText = joke['value'];
    article.appendChild(p);

    const container = document.getElementById('results');
    container.appendChild(article);
}


document.getElementById('search').addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const value = document.getElementById('query').value;

    console.log("Search begins");

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value}`);
        const data = await response.json();
      
        for (let joke of data['result']) {
            displayShow(joke);
        }
    } catch (e) {
        console.log("Error: " + e);
    } finally {
        console.log("Search complete");
    }
});
