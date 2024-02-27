const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const rows = data.split('\n').map((row) => row.trim());
    const fields = {};
    let size = 0;

    rows.forEach((row, idx) => {
      const split = row.split(',');
      const last = split.length - 1;

      if (split.length > 1 && idx > 0) {
        size += 1;
        fields[split[last]] = [];
      }
    });

    rows.forEach((row, idx) => {
      const split = row.split(',');
      const last = split.length - 1;

      if (split.length > 1 && idx > 0) {
        fields[split[last]].push(split[0]);
      }
    });

    console.log(`Number of students: ${size}`);

    for (const [key, val] of Object.entries(fields)) {
      console.log(
        `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`,
      );
    }
  } catch (error) {
    console.error(error);
    // throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
