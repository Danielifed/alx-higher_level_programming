#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];


const starWarsUri = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(starWarsUri, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    const movie = JSON.parse(body);
    console.log('', movie.title);
  }
});
