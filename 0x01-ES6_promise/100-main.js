#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import asyncUploadUser from './100-await';

const testing = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

testing();
