#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
