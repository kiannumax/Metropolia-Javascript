'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let student of students) {
    let opt = document.createElement('option');
    opt.value = student['id'];
    opt.innerText = student['name'];

    document.getElementById("target").appendChild(opt);
}
