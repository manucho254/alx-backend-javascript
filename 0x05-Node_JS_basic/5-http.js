const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const fileName = process.argv[2];

// Make our HTTP server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
    countStudents(fileName)
      .then((data) => {
        res.write(`Number of students: ${data.size}\n`);

        for (const [key, val] of Object.entries(data.fields)) {
          const splitKey = key.split('\r')[0];
          res.write(
            `Number of students in ${splitKey}: ${val.length}. List: ${val.join(
              ', ',
            )}\n`,
          );
        }
        res.end();
      })
      .catch((error) => {
        res.write(`${error}\n`);
      });

    res.end();
  }
});
// Have the server listen on port 1245
server.listen(1245);
