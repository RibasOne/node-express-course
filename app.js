const { readFile, writeFile } = require('fs');
const util = require('util');

const read_file_promise = util.promisify(readFile);
const write_file_promise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await read_file_promise('./content/first.txt', 'utf-8');
        const second = await read_file_promise('./content/second.txt', 'utf-8');
        await write_file_promise('./content/result-mind-grenade.txt', `This is the result: ${first}, ${second}`);
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start();

// const get_text = (path) =>{
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     }) 
// }

// get_text('./content/first.txt').
//     then(result => console.log(result)).
//     catch((err) => console.log(err));