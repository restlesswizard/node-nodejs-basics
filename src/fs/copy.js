import * as fs from 'fs';

const copy = async () => {
    const dir = './src/fs/files'
    const newDir = './src/fs/files_copy'

    if (fs.existsSync(newDir)) {
        throw Error('FS operation failed')
    } else {
        fs.cpSync(dir, newDir, {
            recursive: true,
            force: true,
        })
    }
};

await copy();
