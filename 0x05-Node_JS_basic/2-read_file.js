const fs = require("fs");

async function countStudents(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      throw new Error("Cannot load the database");
    }
    const rows = data.split("\n").map((row) => row.trim());
    const fields = {};
    let size = 0;

    rows.forEach((row, idx) => {
      const split = row.split(",");
      const last = split.length - 1;
      size += 1;
      if (idx > 0) fields[split[last]] = [];
    });

    rows.forEach((row, idx) => {
      const split = row.split(",");
      const last = split.length - 1;
      if (idx > 0) {
        fields[split[last]].push(split[0]);
      }
    });

    console.log(`Number of students: ${size}`);

    for (let [key, val] of Object.entries(fields)) {
      console.log(
        `Number of students in ${key}: ${val.length}. List: ${val.join(", ")}`
      );
    }
  });
}

module.exports = countStudents;
