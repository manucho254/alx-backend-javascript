#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser().then((data) => data);
    const photo = await uploadPhoto().then((data) => data);

    return { user, photo };
  } catch (error) {
    return { user: null, photo: null };
  }
}
