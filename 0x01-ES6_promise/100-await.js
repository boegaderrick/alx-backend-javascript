import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaderUser() {
  return Promise.all([await uploadPhoto(), await createUser()])
    .then(([photo, user]) => ({ photo, user }))
    .catch(() => ({ photo: null, user: null }));
}
