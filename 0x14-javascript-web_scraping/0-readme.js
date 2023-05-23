#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
