const { open } = require("node:fs/promises");

function countStudents(file) {
  (async () => {
    try {
      const file = await open(file);
    } catch {
      throw new Error("Cannot load the database");
    }

    count = 0;
    for await (const line of file.readLines()) {
      console.log(line);
      count += 1;
    }
    console.log(`Number of students: ${count}`);
  })();
}

module.exports = countStudents;
