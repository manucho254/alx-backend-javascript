#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const newData = Object.assign(...data);
      console.log(`${newData.body} ${newData.firstName} ${newData.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
