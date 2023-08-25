module.exports = function countStudents (fileName) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, fileData) {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const data = fileData.split('\n').filter(line => line.trim() !== '');
        console.log(`Number of students: ${data.length - 1}`);
        const fields = new Set();
        data.slice(1).forEach((row) => {
          fields.add(row.split(',')[3]);
        });
        fields.forEach((field) => {
          const students = data.slice(1).filter(row => row.includes(field));
          let outStr = `Number of students in ${field}: ${students.length}. List: `;
          for (let i = 0; i < students.length; i++) {
            outStr += `${students[i].split(',')[0]}`;
            if (i < students.length - 1) {
              outStr += ', ';
            }
          }
          console.log(outStr);
        });
        resolve();
      }
    });
  });
};
