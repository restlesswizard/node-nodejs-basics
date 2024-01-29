import * as fs from 'fs';

const rename = async () => {
    const fileToRename = './src/fs/files/wrongFilename.txt';
    const fileNewName = './src/fs/files/properFilename.md'

    if (fs.existsSync(fileNewName) || !fs.existsSync(fileToRename)) {
        throw Error('FS operation failed')
    } else {
        fs.renameSync(fileToRename, fileNewName)
    }
};

await rename();