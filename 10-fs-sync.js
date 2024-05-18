const { readFileSync, writeFileSync } = require('fs'); // or const fs = require('fs'); fs.readFileSync

console.log('start');

const read_first = readFileSync('./content/first.txt', 'utf8');
const read_second = readFileSync('./content/second.txt', 'utf8');

// console.log(read_first, read_second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${read_first}, ${read_second}\n`, {flag: 'a'}); // flag: 'a' appends the content to the file

console.log('done with this task');
console.log('starting the next one');