const express = require('express');
const app = express();
const countStudents = function (fileName) {
  const fs = require('fs');
  let outStr = '';
  return new Promise((resolve, reject) => {
    if (!fileName) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(fileName, 'utf8', function (error, fileData) {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const data = fileData.split('\n').filter(line => line.trim() !== '');
        outStr = `${outStr}Number of students: ${data.length - 1}\n`;
        const fields = new Set();
        data.slice(1).forEach((row) => {
          fields.add(row.split(',')[3]);
        });
        fields.forEach((field) => {
          const students = data.slice(1).filter(row => row.includes(field));
          outStr = `${outStr}Number of students in ${field}: ${students.length}. List: `;
          for (let i = 0; i < students.length; i++) {
            outStr = `${outStr}${students[i].split(',')[0]}`;
            if (i < students.length - 1) {
              outStr = `${outStr}, `;
            } else {
              outStr = `${outStr}\n`;
            }
          }
        });
        resolve(outStr);
      }
    });
  });
};

app.get('/students', (request, response) => {
  countStudents(process.argv[2])
    .then((outStr) => {
      response.send(`This is the list of our students\n${outStr.slice(0, -1)}`);
    })
    .catch((error) => {
      console.log(error);
      response.send(`This is the list of our students\nCannot load the database`);
    });
});

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
