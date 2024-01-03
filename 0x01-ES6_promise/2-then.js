#!/usr/bin/env node

export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
    })
    .catch(() => {
      throw new Error();
    });
}
