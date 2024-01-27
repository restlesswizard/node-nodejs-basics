import * as fs from 'fs';

const list = async () => {
    const dir = './src/fs/files'

    if (!fs.existsSync(dir)) {
        throw Error('FS operation failed')
    } else {
        fs.readdirSync(dir).forEach(file => {
            console.log(file)
        })
    }
};

await list();