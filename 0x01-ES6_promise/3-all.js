import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body } = values[0];
      const fname = values[1].firstName;
      const lname = values[1].lastName;
      console.log(`${body} ${fname} ${lname}`);
    })
    .catch(() => console.log('Signup system offline'));
}
