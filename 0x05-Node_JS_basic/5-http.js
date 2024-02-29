const http = require('http');
const fs = require('fs');
const util = require('util');

const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

async function countStudents(file) {
  try {
    const data = await readFile(file);
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
    return { size, fields };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

// Make our HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let resData = 'This is the list of our students\n';

    countStudents(process.argv[2])
      .then((data) => {
        resData += `Number of students: ${data.size}`;
        for (const [key, val] of Object.entries(data.fields)) {
          const splitKey = key.split('\r')[0];
          resData = resData.concat(
            `\nNumber of students in ${splitKey}: ${
              val.length
            }. List: ${val.join(', ')}`,
          );
        }
        res.end(resData);
      })
      .catch((error) => {
        resData = resData.concat(`${error.message}`);
        res.end(resData);
      });
  }
});
// Have the server listen on port 1245
server.listen(1245);
