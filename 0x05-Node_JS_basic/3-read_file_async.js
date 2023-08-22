module.exports = function countStudents (fileName) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, fileData) {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const data = fileData.split('\n').filter(line => line.trim() !== '');
        process.stdout.write(`Number of students: ${data.length - 1}\n`);
        const fields = new Set();
        data.slice(1).forEach((row) => {
          fields.add(row.split(',')[3]);
        });
        fields.forEach((field) => {
          const students = data.slice(1).filter(row => row.includes(field));
          process.stdout.write(`Number of students in ${field}: ${students.length}. List: `);
          for (let i = 0; i < students.length; i++) {
            process.stdout.write(`${students[i].split(',')[0]}`);
            if (i < students.length - 1) {
              process.stdout.write(', ');
            } else {
              console.log();
            }
          }
        });
        resolve();
      }
    });
  });
};
