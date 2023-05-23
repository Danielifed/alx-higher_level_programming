#!/usr/bin/node

const request = require('request');

const starWarsUri = process.argv[2];

const characterId = 18;

request.get(starWarsUri, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    const movies = JSON.parse(body).results;

    const filteredMovies = movies.filter((movie) => {
      return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    });

    console.log('', filteredMovies.length);
  }
});
