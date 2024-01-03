#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  return Promise.all([signUpUser(), uploadPhoto()]);
}
