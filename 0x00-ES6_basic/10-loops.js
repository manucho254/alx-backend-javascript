#!/usr/bin/env node

export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const value of array) {
    array[value] = `${appendString}${value}`;
    idx++;
  }

  return array;
}
