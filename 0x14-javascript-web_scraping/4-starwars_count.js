#!/usr/bin/node

const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = '18';

request(apiUrl, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  for (const film of films) {
    if (film.characters.includes(characterId)) {
      count++;
    }
  }

  console.log(count);
});
