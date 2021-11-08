const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '02-write-file', 'text.txt');
fs.writeFile(filePath, 'Hello', err => {
  if(err) {
    throw err;
  }
  console.log('Enter text');
});

fs.appendFile(filePath, 'Entered text', err => {
  if (err) {
    throw err;
  }
  console.log ('Enter text');
});
