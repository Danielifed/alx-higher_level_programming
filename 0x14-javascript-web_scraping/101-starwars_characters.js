#!/usr/bin/node

const request = require('request');

function getMovieCharacters(movieId) {
  const starWarsUri = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

  request(starWarsUri, { json: true }, (err, res, body) => {
    if (err) {
      console.error(err);
    } else if (res.statusCode !== 200) {
      console.error(res.statusCode);
    } else {
      const characters = body.characters;

      characters.forEach((characterUrl) => {
        request(characterUrl, { json: true }, (err, res, body) => {
          if (err) {
            console.error(err);
          } else if (res.statusCode !== 200) {
            console.error(res.statusCode);
          } else {
            console.log(body.name);
          }
        });
      });
    }
  });
}

const movieId = process.argv[2]

if (movieId && !isNaN(movieId)) {
  getMovieCharacters(movieId);
} else {
  console.log('Please provide a valid Movie ID.');
}
