/* ----------------------------------------------------------------------- */

/* Object interface */
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [key: string]: any,
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

/* ----------------------------------------------------------------------- */

/* Interface `extends` */
interface Directors extends Teacher {
  numberOfReports: number,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

/* ----------------------------------------------------------------------- */

/* Function interface */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const func: printTeacherFunction = (fname, lname) => `${fname[0]}. ${lname}`;
console.log(func('John', 'Doe'));

/* ----------------------------------------------------------------------- */

/* Class definition */
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const s = new StudentClass('John', 'Doe');
console.log(s);
console.log(s.workOnHomework());
console.log(s.displayName());

















