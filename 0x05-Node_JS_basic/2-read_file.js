module.exports = function countStudents (filename) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(filename, 'utf8').split('\n').filter(line => line.trim() !== '');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
