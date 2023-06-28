import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      let newArr = [];
      values.forEach((value) => {
        let temp;
        if (value.status === 'rejected') {
          temp = {
            status: value.status,
            value: String(value.reason),
          };
        } else {
          temp = value;
        }
        newArr = [...newArr, ...[temp]];
      });
      return newArr;
    });
}
