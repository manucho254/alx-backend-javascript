#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('TypeError: Length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('TypeError: Students must be an Array of Strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('TypeError: Name must be a string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('TypeError: Length must be a Number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('TypeError: Students must be an Array of Strings');
    }
    this._students = val;
  }
}
