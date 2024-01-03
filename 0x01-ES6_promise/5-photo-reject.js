#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default function uploadPhoto(filename) {
  return Promise.reject((() => new Error(`${filename} cannot be processed`))());
}
