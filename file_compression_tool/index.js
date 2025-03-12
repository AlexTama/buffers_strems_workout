import fs from 'node:fs';
import path from 'node:path';

const filepath = path.join(process.cwd(), '/files/test.txt');
fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) return console.error(err);
    console.log(data);
    return data;
})

fs.createReadStream(filepath, { start: 0, end: 10 });