#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  let body = '';
  uploadPhoto().then((data) => {
    body = data.body;
  });
  createUser().then((data) => {
    console.log(`${body} ${data.firstName} ${data.lastName}`);
  });
}
