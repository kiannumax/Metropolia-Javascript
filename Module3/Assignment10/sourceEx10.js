'use strict';

const form = document.getElementById('source');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const fname = document.querySelector("input[name=firstname]").value;
    const lname = document.querySelector("input[name=lastname]").value;

    document.getElementById('target').innerText = `Your name is ${fname} ${lname}`;
});
