const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    const fields = {};
    let size = 0;

    rows.forEach((row, idx) => {
      const split = row.split(',');
      if (idx > 0) {
        const last = split[split.length - 1];
        size += 1;
        fields[last] = [];
      }
    });

    rows.forEach((row, idx) => {
      const split = row.split(',');
      const last = split.length - 1;

      if (idx > 0) {
        fields[split[last]].push(split[0]);
      }
    });

    console.log(`Number of students: ${size}`);
    for (const [key, val] of Object.entries(fields)) {
      const splitKey = key.split('\r')[0];
      console.log(
        `Number of students in ${splitKey}: ${val.length}. List: ${val.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    console.error(error);
    // throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
