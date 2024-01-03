#!/usr/bin/env node

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

let expansion1989 = undefined;

console.log(expansion1989 === undefined ? 89 : expansion1989);
