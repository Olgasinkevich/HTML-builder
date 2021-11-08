const path = require('path');

const filePath = path.join(__dirname, 'secret-folder');
console.log(`'${path.dirname(__filename)}' - '${path.extname(__filename)}'`);
