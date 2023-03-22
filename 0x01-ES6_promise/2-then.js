export default function handleResponseFromAPI(promise) {
  const body = { status: 200, body: 'success' };

  return promise
    .then(() => body)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
