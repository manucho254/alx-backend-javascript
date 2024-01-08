#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));

async function run() {
  const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
  console.log(queue);
}

run();
// expect(queue).toEqual([
//   {
//     status: "fulfilled",
//     value: { firstName: "John", lastName: "Doe" },
//   },
//   { status: "rejected", value: "Error: Gerald.jpg cannot be processed" },
// ]);
