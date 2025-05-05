import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = `${__dirname}/files/test.txt`;

async function readFiles() {
    try {
        const file = await readFile(`${__dirname}/files/test.txt`, { encoding: "utf-8"}, (err, data) => {
            if (err) return err;
            return data;
        });
        console.log(file);
    } catch (error) {
        console.log(error);
    }
}

readFiles();
