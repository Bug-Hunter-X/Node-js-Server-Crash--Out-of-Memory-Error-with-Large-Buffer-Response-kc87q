const express = require('express');
const fs = require('node:fs');
const app = express();
app.get('/', (req, res) => {
  const stream = fs.createReadStream('largeFile.txt');

  stream.on('error', (err) => {
    res.status(500).send('Error reading file');
  });

  stream.pipe(res);
});
app.listen(3000, () => console.log('Server listening on port 3000'));
// Create a large file for testing purposes
const largeFile = Buffer.alloc(1024 * 1024 * 100); // 100MB file
fs.writeFileSync('largeFile.txt', largeFile);