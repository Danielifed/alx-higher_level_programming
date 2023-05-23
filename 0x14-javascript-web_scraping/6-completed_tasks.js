#!/usr/bin/node

const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('', error);
  } else if (response.statusCode !== 200) {
    console.error('', response.statusCode);
  } else {
    const tasks = JSON.parse(body);

    const completedTasksByUser = tasks.reduce((acc, task) => {
      if (task.completed) {
        if (acc[task.userId]) {
          acc[task.userId]++;
        } else {
          acc[task.userId] = 1;
        }
      }
      return acc;
    }, {});

    Object.keys(completedTasksByUser).forEach((userId) => {
      console.log(`User ${userId}: ${completedTasksByUser[userId]} completed task(s)`);
    });
  }
});
