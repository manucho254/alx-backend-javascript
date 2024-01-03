#!/usr/bin/env node

export default function handleResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(
        (() => {
          throw new Error();
        })(),
      );
    }
    console.log('Got a response from the API');
  });
}
