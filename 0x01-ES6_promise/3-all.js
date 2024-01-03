#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body = '';
  uploadPhoto()
    .then((data) => {
      body = data.body;
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
  createUser()
    .then((data) => {
      console.log(`${body} ${data.firstName} ${data.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
