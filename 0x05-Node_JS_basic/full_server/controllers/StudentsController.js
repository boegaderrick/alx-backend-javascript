import readDatabase from '../utils';
const filePath = process.argv[2];

class StudentsController {
  static getAllStudents (request, response) {
    readDatabase(filePath)
      .then((output) => {
        const sortedFields = Object.keys(output).sort();
        let outStr = '';
        sortedFields.forEach((field) => {
          const total = output[field].length;
          outStr += `Number of students in ${field}: ${total}. List: ${output[field].join(', ')}\n`;
        });
        response
          .status(200)
          .send(`This is the list of our students\n${outStr.slice(0, -1)}`);
      })
      .catch((error) => {
        console.log(error);
        response
          .status(500)
          .send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response) {
    const major = request.params.major;
    if (['CS', 'SWE'].includes(major)) {
      readDatabase(filePath)
        .then((output) => {
          response
            .status(200)
            .send(`List: ${output[major].join(', ')}`);
        })
        .catch((error) => {
          console.log(error);
          response
            .status(500)
            .send('Cannot load the database');
        });
    } else {
      response
        .status(500)
        .send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
