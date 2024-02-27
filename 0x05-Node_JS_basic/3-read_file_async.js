const fs = require('fs');

const util = require('util');

const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

async function countStudents(file) {
  try {
    const data = await readFile(file);
    const rows = data.split('\n').map((row) => row.trim());
    const fields = {};
    let size = 0;

    rows.forEach((row, idx) => {
      const split = row.split(',');
      const last = split.length - 1;
      size += 1;
      if (idx > 0) fields[split[last]] = [];
    });

    rows.forEach((row, idx) => {
      const split = row.split(',');
      const last = split.length - 1;
      if (idx > 0) {
        fields[split[last]].push(split[0]);
      }
    });

    console.log(`Number of students: ${size - 1}`);

    for (const [key, val] of Object.entries(fields)) {
      console.log(
        `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
