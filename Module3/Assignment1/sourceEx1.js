'use strict';

const html = "<li>First item</li><li>Second item</li><li>Third item</li>";

document.querySelector('#target').innerHTML = html;
document.querySelector('#target').setAttribute('class', 'my-list');
