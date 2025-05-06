import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { open } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import { createGzip } from 'node:zlib'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filepath = `${__dirname}/files/test.txt`;

async function compressFile() {
    try {
        const readHandle = await open(`${__dirname}/files/test.txt`);
        const compressHandle = await open(`${__dirname}/files/test.txt.zip`, 'w');

        const readable = readHandle.createReadStream()
        const compressed = compressHandle.createWriteStream();

        await pipeline(readable, createGzip(), compressed);

        console.log('finished')


    } catch (error) {
        console.log(error);
    }
}

// Read file
compressFile();

