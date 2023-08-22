import fs from 'fs';

function readDatabase (filePath) {
  let outStr = '';
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(filePath, 'utf8', function (error, fileData) {
      if (error) {
        reject(error);
      } else {
        const data = fileData.split('\n').filter(line => line.trim() !== '');
        outStr = `${outStr}Number of students: ${data.length - 1}\n`;
        const fields = new Set();
        data.slice(1).forEach((row) => {
          fields.add(row.split(',')[3]);
        });
        const obj = {};
        fields.forEach((field) => {
          const students = data.slice(1).filter(row => row.includes(field));
          obj[field] = [];
          for (let i = 0; i < students.length; i++) {
            obj[field].push(students[i].split(',')[0]);
          }
        });
        resolve(obj);
      }
    });
  });
}

export default readDatabase;
