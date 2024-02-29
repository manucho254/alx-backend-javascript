const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const fileName = process.argv[2];

// Make our HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(req.url).pathname;

  if (reqUrl === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    let resData = '';
    resData += 'This is the list of our students\n';

    countStudents(fileName)
      .then((data) => {
        resData += `Number of students: ${data.size}`;
        for (const [key, val] of Object.entries(data.fields)) {
          const splitKey = key.split('\r')[0];
          resData += `\nNumber of students in ${splitKey}: ${
            val.length
          }. List: ${val.join(', ')}`;
        }
        res.end(resData);
      })
      .catch((error) => {
        resData += `${error}`;
        res.end(resData);
      });
  }
});
// Have the server listen on port 1245
server.listen(1245);
