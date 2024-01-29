import * as fs from 'fs';

const read = async () => {
    const fileToRead = './src/fs/files/fileToRead.txt'

    if (!fs.existsSync(fileToRead)) {
        throw Error('FS operation failed')
    } else {
        console.log(fs.readFileSync(fileToRead, {encoding: 'utf8', flag: 'r'}))
    }
};

await read();