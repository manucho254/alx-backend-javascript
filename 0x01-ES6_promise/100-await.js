#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function asyncUploadUser() {
  try {
    const user = await signUpUser();
    const photo = await uploadPhoto();

    return { user, photo };
  } catch (error) {
    return { user: null, photo: null };
  }
}
