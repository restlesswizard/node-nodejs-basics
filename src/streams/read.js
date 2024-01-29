import * as fs from 'fs'
import {stdout} from 'node:process'

const read = async () => {
    const file = './src/streams/files/fileToRead.txt';

    const readFile = fs.createReadStream(file)

    readFile.pipe(stdout)
};

await read();