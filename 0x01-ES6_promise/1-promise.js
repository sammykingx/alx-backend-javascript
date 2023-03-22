export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
  return promise;
}
