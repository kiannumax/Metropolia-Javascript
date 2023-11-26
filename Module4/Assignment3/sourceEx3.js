'use strict';

function displayShow(show) {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.innerText = show['name'];
    article.appendChild(h2);

    const link = document.createElement('a');
    link.href   = show['url'];
    link.target = "_blank";
    article.appendChild(link);

    const img = document.createElement('img');
    img.src   = show.image?.medium;
    img.alt = show['name'];
    article.appendChild(img);

    const summary = document.createElement('div');
    summary.innerHTML = show['summary'];
    article.appendChild(summary);

    const container = document.getElementById('results');
    container.appendChild(article);
}


document.getElementById('search').addEventListener('submit', async function(evt) {
    evt.preventDefault();
    document.getElementById('results').innerHTML = '';

    const value = document.getElementById('query').value;

    console.log("Search begins");

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
        const data = await response.json();

        for (let show of data) {
            displayShow(show['show']);
        }
    } catch (e) {
        console.log("Error: " + e);
    } finally {
        console.log("Search complete");
    }
});
