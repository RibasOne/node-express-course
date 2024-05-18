const path = require('path');

console.log(path.sep); // separator

const file_path = path.join('/content', 'subfolder', 'test.txt'); // join paths
console.log(file_path);

const base = path.basename(file_path); // get the base file name
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // get the absolute path
console.log(absolute);