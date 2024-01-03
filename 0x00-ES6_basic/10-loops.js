#!/usr/bin/env node

export default function appendToEachArrayValue(array, appendString) {
  const newArr = [...array];
  let idx = 0;

  for (const value of array) {
    newArr[idx] = `${appendString}${value}`;
    idx += 1;
  }

  return newArr;
}
