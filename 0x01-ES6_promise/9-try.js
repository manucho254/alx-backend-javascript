#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error);
    queue.push('Guardrail was processed');
  }

  return queue;
}
