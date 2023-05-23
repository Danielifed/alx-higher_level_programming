#!/usr/bin/node

const request = require('request');

const id = process.argv[2];


const starWarsUri = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(starWarsUri, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});
