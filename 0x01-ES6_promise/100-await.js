#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function asyncUploadUser() {
  try {
    const user = await signUpUser().then((data) => data);
    const photo = await uploadPhoto().then((data) => data);
	
    return { user, photo };
  } catch (error) {
    console.log(error)
    return { user: null, photo: null };
  }
}
