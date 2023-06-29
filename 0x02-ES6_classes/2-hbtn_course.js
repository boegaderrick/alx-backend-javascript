export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    this.validateName(name);
    this.validateLength(length);
    this.validateStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    this.validateName(name);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this.validateLength(length);
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this.validateStudents(students);
    this._students = students;
  }

  get students() {
    return this._students;
  }

  /* eslint-disable class-methods-use-this */
  validateName(name) {
    if (typeof (name) !== 'string') {
      throw TypeError('Name must be a string');
    }
  }

  validateLength(length) {
    if (typeof (length) !== 'number') {
      throw TypeError('Length must be a number');
    }
  }

  validateStudents(students) {
    if (Array.isArray(students) === false) {
      throw TypeError('Students must be an array');
    }
  }
}
