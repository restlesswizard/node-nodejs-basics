import * as fs from 'fs'
import {stdin, stdout} from 'node:process'

const write = async () => {
    const file = './src/streams/files/fileToWrite.txt';

    // const readFile = fs.createReadStream(file)
    // const writeFile = fs.createWriteStream(file);
    // writeFile.write('yolo!')

};

await write();