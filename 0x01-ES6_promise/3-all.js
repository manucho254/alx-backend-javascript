#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(data);
      console.log(`${data.body} ${data.firstName} ${data.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
