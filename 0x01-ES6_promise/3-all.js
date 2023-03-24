import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data= [uploadPhoto(), createUser()];

  const outputData = Promise.all(data)
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`),
    () => console.log('Signup system offline'));
}
