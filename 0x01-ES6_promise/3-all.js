import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // const { body } = values[0];
      // const fname = values[1].firstName;
      // const lname = values[1].lastName;
      // console.log(`${body} ${fname} ${lname}`);
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
