import * as fs from 'fs';

const remove = async () => {
    const fileToDelete = './src/fs/files/fileToRemove.txt'

    if (!fs.existsSync(fileToDelete)) {
        throw Error('FS operation failed')
    } else {
        fs.unlinkSync(fileToDelete)
    }
};

await remove();