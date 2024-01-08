/* eslint-disable no-unused-vars */

import * as functionUtils from './utils';

export default function handleProfileSignup() {
  Promise.all([functionUtils.uploadPhoto(), functionUtils.createUser()])
    .then((data) => {
      const newData = Object.assign(...data);
      console.log(`${newData.body} ${newData.firstName} ${newData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
