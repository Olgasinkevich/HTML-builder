const fs = require('fs');
const path = require('path');


const filePath = path.join('02-write-file', 'text.txt');

fs.writeFile(filePath, '', err => {
  if (err) {
    throw err;
  }
  console.log('Enter text');
});

fs.appendFile(filePath,'', err => {
  if (err) {
    throw err;
  }
});
