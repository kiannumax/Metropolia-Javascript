'use strict';

const amount = parseInt(prompt("How many candidates are attending?"));
const candidates = [];

for (let i = 1; i <= amount; i++) {
    let name = prompt(`Name for candidate ${i}`);
    candidates.push({'name': name, 'votes': 0});
}

const amountVoters = parseInt(prompt("How many voters are there?"));

for (let i = 1; i <= amountVoters; i++) {
    let name = prompt(`Voter's ${i} decision (name):`);
    for (let candidate of candidates) {
        if (candidate['name'] == name) {
            candidate['votes'] += 1;
        }
    }
}

candidates.sort((a, b) => b['votes'] - a['votes']);

let message = `The winner is ${candidates[0]['name']} with ${candidates[0]['votes']} votes.<br/>results:`;

for(let candidate of candidates){
    message += `<br/>${candidate['name']}: ${candidate['votes']} votes`;
}

document.querySelector("#election").innerHTML = message;
