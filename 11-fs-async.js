const { readFile, writeFile } = require('fs'); // or const fs = require('fs'); fs.readFile

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        const first_text = result;
        readFile('./content/second.txt', 'utf-8', (err, result) => {
            if(err)
            {
                console.log(err);
                return;
            }
            else
            {
                const second_text = result;
                writeFile('./content/result-async.txt', `Here is the result: ${first_text}, ${second_text}\n`, (err, result) => {
                    if(err)
                    {
                        console.log(err);
                        return;
                    } 
                    else
                    {
                        console.log('done with this task');
                    }
                });
            }    
        });
    }
});
console.log('starting the next one'); // Since this is async function, it won't wait until the readFile function is done. 
// It will execute next one.