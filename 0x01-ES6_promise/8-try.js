#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}
