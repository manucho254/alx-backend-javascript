#!/usr/bin/env node

export default function handleResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(
        (() => {
          throw new Error();
        })(),
      );
    }
  });
}
