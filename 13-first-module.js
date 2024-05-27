//npm - global command, comes with node
//npm --version or npm -v

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(items);
console.log(newItems);

console.log('Hello Friend!');

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//on and emit methods
//keep track of the order
//additional arguments
//built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)