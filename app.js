const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = ['Jack', 'Peter', 'Simon', 'Leonardo', 'Sylvester', 'Matt', 'Adam', 'Ben'];
const femaleNames = ['Anna', 'Nicole', 'Marie', 'Alexia', 'Salma', 'Olga', 'Agelica', 'Joana'];
const lastNames = ['Sparrow', 'Sterling', 'Kane', 'Jenkinson', 'Wilshere', 'Smith', 'Cat', 'Cole'];
const ages = ['18', '24', '36', '42', '51', '68', '78'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (i = 0; i < 20; i++) {
    let person = {};

    person.gender = randChoice(genders);

    if(person.gender === 'f') {
        person.name = randChoice(femaleNames);
    } else {
        person.name = randChoice(maleNames);
    }

    person.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];

    person.age = ages[Math.floor(Math.random() * ages.length)];

    people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });